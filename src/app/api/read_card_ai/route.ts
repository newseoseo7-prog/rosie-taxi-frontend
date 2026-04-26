import { NextRequest, NextResponse } from "next/server";
import * as fs from 'fs/promises';
import { writeFile } from 'fs/promises';
import path from 'path';

const OPENAI_API_KEY = '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';

async function analyzeCardImage(imageBuffer: Buffer, mimeType: string) {
    const base64Image = imageBuffer.toString('base64');

    const response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${OPENAI_API_KEY}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            model: 'gpt-4o',
            messages: [
                {
                    role: 'user',
                    content: [
                        {
                            type: 'text',
                            text: 'Extract following details (name, date, number) from this image. Return a JSON like: { "name": "", "date": "", "number": "" }. do not wrap json with any formatter.'
                        },
                        {
                            type: 'image_url',
                            image_url: {
                                url: `data:${mimeType};base64,${base64Image}`
                            }
                        }
                    ]
                }
            ],
            max_tokens: 100
        })
    });

    const data = await response.json();
    let choices = data.choices;
    if (choices && choices.length > 0) {
        let content = choices[0].message.content;
        try {
            return JSON.parse(content);
        } catch (e) {
            console.error("Failed to parse OpenAI response:", content);
            return { error: "Failed to parse response from OpenAI" };
        }
    }

    return null;
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

        // Process the image with OpenAI
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

    } catch (error) {
        console.error("Error processing file:", error);
        return NextResponse.json(
            { error: "Failed to process file" },
            { status: 500 }
        );
    }
}