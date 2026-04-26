'use client'
import React, { useState, useRef, useEffect } from 'react';

interface CodeEditorProps {
    htmlCode: string;
    jsCode: string;
    onCodeChange: (html: string, js: string) => void;
}

export const CodeEditor: React.FC<CodeEditorProps> = ({
                                                          htmlCode,
                                                          jsCode,
                                                          onCodeChange,
                                                      }) => {
    const textareaRef = useRef<HTMLTextAreaElement>(null);
    const [combinedCode, setCombinedCode] = useState(
        `${htmlCode}${jsCode ? `\n<script>\n${jsCode}\n</script>\n` : ''}`
    );

    // Update combined code when props change
    useEffect(() => {
        setCombinedCode(`${htmlCode}${jsCode ? `\n<script>\n${jsCode}\n</script>\n` : ''}`);
    }, [htmlCode, jsCode]);

    const handleCodeChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        const content = e.target.value;
        setCombinedCode(content);

        // Extract JS code from script tags if they exist
        const scriptMatch = content.match(/<script>([\s\S]*?)<\/script>/);
        let newHtml = content;
        let newJs = '';

        if (scriptMatch) {
            newHtml = content.replace(scriptMatch[0], '').trim();
            newJs = scriptMatch[1].trim();
        } else {
            newHtml = content.trim();
        }

        onCodeChange(newHtml, newJs);
    };

    return (
        <div className="h-full flex flex-col">
            <div className="flex border-b border-gray-200 bg-gray-50">
                <div className="px-4 py-2 text-sm font-medium text-gray-700 border-b-2 border-blue-600">
                    HTML + JS
                </div>
            </div>
            <textarea
                ref={textareaRef}
                value={combinedCode}
                onChange={handleCodeChange}
                className="flex-1 p-4 font-mono text-sm border-none resize-none focus:ring-0"
                spellCheck="false"
                onKeyDown={(e) => {
                    // Allow default behavior for all keys including Enter
                    // This ensures proper textarea behavior
                    if (e.key === 'Tab') {
                        e.preventDefault();
                        const start = e.currentTarget.selectionStart;
                        const end = e.currentTarget.selectionEnd;
                        const value = e.currentTarget.value;
                        e.currentTarget.value = value.substring(0, start) + '  ' + value.substring(end);
                        e.currentTarget.selectionStart = e.currentTarget.selectionEnd = start + 2;
                    }
                }}
            />
        </div>
    );
};