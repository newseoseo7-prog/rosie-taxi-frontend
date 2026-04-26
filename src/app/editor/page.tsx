'use client'
import React, {useState, useEffect, Suspense} from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { EditorHeader } from './EditorHeader';
import { EditorTabs } from './EditorTabs';
import { CodeEditor } from './CodeEditor';
import { PreviewPane } from './PreviewPane';
import { MetadataEditor } from './MetadataEditor';
import { StatusBar } from './StatusBar';
import Head from "next/head";

interface CodeEditorProps {
    initialTitle?: string;
    initialPath?: string;
    initialHtml?: string;
    initialJs?: string;
}

const CodeEditorPage = () => {
    const router = useRouter();
    const searchParams = useSearchParams();
    const pageId = searchParams.get('id');

    const [activeTab, setActiveTab] = useState<'code' | 'preview' | 'metadata' | 'info'>('code');
    const [title, setTitle] = useState("Page Editor");
    const [path, setPath] = useState("/my-page");
    const [htmlCode, setHtmlCode] = useState("<h1>My Page</h1>");
    const [jsCode, setJsCode] = useState("");
    const [metadata, setMetadata] = useState("" +
        "{\n" +
        "  \"title\": \"Taxi cab Los Angeles Opens 24/7 - Save 20% Now | Rosie Taxi Cab\",\n" +
        "  \"description\": \"Fast, reliable, and affordable taxi service in Los Angeles, CA. 24/7 local and airport transportation to LAX, Burbank, and Ventura County. Book your ride now!\",\n" +
        "  \"robots\": \"follow, index, max-snippet:-1, max-video-preview:-1, max-image-preview\",\n" +
        "  \"metadataBase\": \"https://new.rosietaxicab.com\",\n" +
        "  \"alternates\": {\n" +
        "    \"canonical\": \"/taxi-cab-los-angeles/\"\n" +
        "  },\n" +
        "  \"openGraph\": {\n" +
        "    \"title\": \"Taxi cab Los Angeles Opens 24/7 - Save 20% Now | Rosie Taxi Cab\",\n" +
        "    \"description\": \"Going From Los Angeles To LAX, BOB, SBA Is Easy Now With A Reliable Taxi Cab Based Here in Los Angeles, CA. Call Now (805) 258-8937 For The Best Airport Transportation Service Now And Guaranteed. We Are The Best\",\n" +
        "    \"url\": \"https://new.rosietaxicab.com/taxi-cab-los-angeles/\",\n" +
        "    \"siteName\": \"Rosie Taxi Cab\",\n" +
        "    \"locale\": \"en_US\",\n" +
        "    \"type\": \"article\",\n" +
        "    \"publishedTime\": \"2020-06-08T06:32:29-07:00\",\n" +
        "    \"modifiedTime\": \"2024-07-26T11:59:32-07:00\",\n" +
        "    \"images\": [\n" +
        "      {\n" +
        "        \"url\": \"https://rosietaxicab.twic.pics/https://new.rosietaxicab.com/wp-content/uploads/2021/03/lax-airport-LAXBATHROOM0318.jpg\",\n" +
        "        \"secureUrl\": \"https://rosietaxicab.twic.pics/https://new.rosietaxicab.com/wp-content/uploads/2021/03/lax-airport-LAXBATHROOM0318.jpg\",\n" +
        "        \"alt\": \"Taxi cab Los Angeles\"\n" +
        "      }\n" +
        "    ]\n" +
        "  },\n" +
        "  \"twitter\": {\n" +
        "    \"card\": \"summary_large_image\",\n" +
        "    \"title\": \"Taxi cab Los Angeles Opens 24/7 - Save 20% Now | Rosie Taxi Cab\",\n" +
        "    \"description\": \"Going From Los Angeles To LAX, BOB, SBA Is Easy Now With A Reliable Taxi Cab Based Here in Los Angeles, CA. Call Now (805) 258-8937 For The Best Airport Transportation Service Now And Guaranteed. We Are The Best\",\n" +
        "    \"images\": [\n" +
        "      \"https://rosietaxicab.twic.pics/https://new.rosietaxicab.com/wp-content/uploads/2021/03/lax-airport-LAXBATHROOM0318.jpg\"\n" +
        "    ],\n" +
        "    \"label1\": \"Time to read\",\n" +
        "    \"data1\": \"7 minutes\"\n" +
        "  },\n" +
        "  \"other\": {\n" +
        "    \"og:updated_time\": \"2024-07-26T11:59:32-07:00\"\n" +
        "  }\n" +
        "}\n");
    const [previewContent, setPreviewContent] = useState('');
    const [isSaving, setIsSaving] = useState(false);
    const [saveStatus, setSaveStatus] = useState<string | null>(null);
    const [metadataError, setMetadataError] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(!!pageId);

    useEffect(() => {
        if (pageId) {
            loadPageContent(pageId);
        }
    }, [pageId]);

    useEffect(() => {
        if (activeTab === 'preview') {
            updatePreview();
        }
    }, [htmlCode, jsCode, title]);

    const loadPageContent = async (id: string) => {
        try {
            setIsLoading(true);
            const response = await fetch(`/api/get_page?id=${id}`);
            if (response.ok) {
                const data = await response.json();
                setTitle(data.title || "Page Editor");
                setPath(data.path || "/my-page");
                setHtmlCode(data.html || "<h1>My Page</h1>");
                setJsCode(data.js || "");
                setMetadata(data.metadata ? JSON.stringify(data.metadata, null, 2) : "");
            } else {
                console.error('Failed to load page content');
            }
        } catch (error) {
            console.error('Error loading page:', error);
        } finally {
            setIsLoading(false);
        }
    };

    const updatePreview = () => {
        const fullHtml = `
                ${htmlCode}
        `;
        setPreviewContent(fullHtml);
    };

    const validateMetadata = (jsonString: string): boolean => {
        try {
            if (jsonString.trim() === "") return true;
            JSON.parse(jsonString);
            return true;
        } catch (error) {
            return false;
        }
    };

    const handleMetadataChange = (value: string) => {
        setMetadata(value);
        if (!validateMetadata(value)) {
            setMetadataError('Invalid JSON format');
        } else {
            setMetadataError(null);
        }
    };

    const handleSave = async () => {
        if (metadataError) {
            setSaveStatus('Please fix metadata JSON errors before saving');
            setTimeout(() => setSaveStatus(null), 3000);
            return;
        }

        setIsSaving(true);
        setSaveStatus(null);

        try {
            const response = await fetch('/api/save_page', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    id: pageId || undefined, // Include ID if it exists
                    title,
                    path,
                    html: htmlCode,
                    js: jsCode,
                    metadata: metadata.trim() ? JSON.parse(metadata) : null,
                }),
            });

             if (response.ok) {
                const result = await response.json();
                setSaveStatus('Saved successfully!');

                // If this was a new page, update the URL with the ID
                if (!pageId && result.page.id) {
                    router.replace(`?id=${result.page.id}`);
                }
            } else {
                const errorData = await response.json();
                setSaveStatus(`Error: ${errorData.message || 'Failed to save'}`);
            }
        } catch (error) {
            setSaveStatus(`Network error: ${error instanceof Error ? error.message : 'Unknown error'}`);
        } finally {
            setIsSaving(false);
            setTimeout(() => setSaveStatus(null), 3000);
        }
    };

    if (isLoading) {
        return (
            <>
                <Head>
                    <title>Page Editor</title>
                </Head>
                <div className="flex items-center justify-center h-screen">
                    <div className="text-xl font-semibold">Loading page content...</div>
                </div>
            </>

        );
    }

    return (
        <>
            <Head>
                <title>Page Editor</title>
            </Head>
            <title>Page Editor</title>
            <div className="flex flex-col h-screen bg-gray-50">
                <EditorHeader
                    title={title}
                    path={path}
                    isSaving={isSaving}
                    saveStatus={saveStatus}
                    onTitleChange={setTitle}
                    onPathChange={setPath}
                    onSave={handleSave}
                />

                <EditorTabs
                    activeTab={activeTab}
                    onTabChange={setActiveTab}
                    onPreviewClick={updatePreview}
                />

                <div className="flex-1 overflow-hidden">
                    {activeTab === 'code' && (
                        <CodeEditor
                            htmlCode={htmlCode}
                            jsCode={jsCode}
                            onCodeChange={(html, js) => {
                                setHtmlCode(html);
                                setJsCode(js);
                            }}
                        />
                    )}

                    {activeTab === 'preview' && (
                        <PreviewPane previewContent={previewContent} />
                    )}

                    {activeTab === 'info' && (
                        <div>
                        <p className={"p-4"}>Ask AI to write html content for you without header and footer. Copy and paste the content in the editor.</p>
                            <p>write page content for page airport cab service. use tailwindcss for formatting</p>
                        </div>
                    )}

                    {activeTab === 'metadata' && (
                        <MetadataEditor
                            metadata={metadata}
                            metadataError={metadataError}
                            onMetadataChange={handleMetadataChange}
                        />
                    )}
                </div>

                <StatusBar activeTab={activeTab} />
            </div>
        </>
    );
};


export default function Searchbar() {
    return (
        // You could have a loading skeleton as the `fallback` too
        <Suspense>
            <CodeEditorPage />
        </Suspense>
    )
}
