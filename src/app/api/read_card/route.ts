import { NextRequest, NextResponse } from "next/server";
import { GoogleAuth } from 'google-auth-library'; // Import GoogleAuth

// It's highly recommended to load these from environment variables
const PROJECT_ID = process.env.GOOGLE_PROJECT_ID || "our-compound-461022-a2"; // Replace with your actual project ID
const LOCATION = process.env.GOOGLE_LOCATION || 'us-central1';

// Path to your service account key file.
// In production, consider setting GOOGLE_APPLICATION_CREDENTIALS environment variable
// which the google-auth-library can automatically pick up.
const SERVICE_ACCOUNT_KEY_PATH = process.env.GOOGLE_APPLICATION_CREDENTIALS || "our-compound-461022-a2-763699c56b4c.json"; // Update this path

let cachedAccessToken: { token: string; expiry: number } | null = null;

async function getAccessToken(): Promise<string> {
    const now = Date.now();
    // Refresh token if it's expired or about to expire (e.g., within the next 5 minutes)
    if (cachedAccessToken && cachedAccessToken.expiry > now + 300 * 1000) { // 5 minutes buffer
        return cachedAccessToken.token;
    }

    try {
        const auth = new GoogleAuth({
            keyFile: SERVICE_ACCOUNT_KEY_PATH,
            scopes: ['https://www.googleapis.com/auth/cloud-platform'], // Scope for AI Platform access
        });

        const client = await auth.getClient();
        const accessToken = await client.getAccessToken();

        if (!accessToken.token) {
            throw new Error("Failed to obtain access token.");
        }

        // Cache the token with its expiry
        // @ts-ignore
        cachedAccessToken = {token: accessToken.token, expiry: accessToken.expiration_time ? accessToken.expiration_time * 1000 : now + 3600 * 1000 }; // Default to 1 hour if expiry not provided

        return accessToken.token;
    } catch (error) {
        console.error("Error getting access token:", error);
        throw new Error("Could not authenticate with Google Cloud.");
    }
}


async function analyzeCardImage(imageBuffer: Buffer, mimeType: string) {
    const base64Image = imageBuffer.toString('base64');
    const url = `https://${LOCATION}-aiplatform.googleapis.com/v1/projects/${PROJECT_ID}/locations/${LOCATION}/publishers/google/models/gemini-2.5-flash:generateContent`;

    // Obtain a fresh or cached access token
    const accessToken = await getAccessToken();

    const prompt = `Extract: {"name":"","expiry":"","card_number":""} from image. Return ONLY JSON in plain text without markdown.`;

    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${accessToken}` // Use the obtained access token
        },
        body: JSON.stringify({
            contents: [{
                role: "user",
                parts: [
                    { text: prompt },
                    {
                        inline_data: {
                            mime_type: mimeType,
                            data: base64Image
                        }
                    }
                ]
            }]
        })
    });

    // Handle non-OK responses from Vertex AI
    if (!response.ok) {
        const errorData = await response.json();
        console.error("Vertex AI Error Response:", errorData);
        throw new Error(`Vertex AI API error: ${response.status} - ${JSON.stringify(errorData)}`);
    }

    const data = await response.json();
    const responseText = data.candidates?.[0]?.content?.parts?.[0]?.text || '{}';

    try {
        return JSON.parse(responseText.trim());
    } catch (e) {
        console.error("Failed to parse response:", responseText);
        return { error: "Failed to parse AI response" };
    }
}

export async function POST(req: NextRequest) {
    try {
        const formData = await req.formData();
        const file = formData.get('file') as File;

        if (!file) {
            return NextResponse.json(
                { error: "No file uploaded" },
                { status: 400 }
            );
        }

        // Read the file as buffer
        const buffer = Buffer.from(await file.arrayBuffer());

        // Determine mime type
        const mimeType = file.type || 'application/octet-stream';

        // Process the image with Vertex AI
        const analysisResult = await analyzeCardImage(buffer, mimeType);

        if (analysisResult.error) {
            return NextResponse.json(
                { error: analysisResult.error },
                { status: 500 }
            );
        }

        return NextResponse.json(analysisResult, {
            status: 200
        });

    } catch (error: any) { // Type the error for better handling
        console.error("Error processing file:", error);
        return NextResponse.json(
            { error: error.message || "Failed to process file" },
            { status: 500 }
        );
    }
}