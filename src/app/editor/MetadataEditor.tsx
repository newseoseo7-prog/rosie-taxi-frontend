'use client'
import React from 'react';

interface MetadataEditorProps {
    metadata: string;
    metadataError: string | null;
    onMetadataChange: (value: string) => void;
}

export const MetadataEditor: React.FC<MetadataEditorProps> = ({
                                                                  metadata,
                                                                  metadataError,
                                                                  onMetadataChange,
                                                              }) => {
    const formatJson = (jsonString: string): string => {
        try {
            const parsed = JSON.parse(jsonString);
            return JSON.stringify(parsed, null, 2);
        } catch (error) {
            return jsonString; // Return original if not valid JSON
        }
    };

    const handleBlur = (e: React.FocusEvent<HTMLTextAreaElement>) => {
        const formatted = formatJson(e.target.value);
        if (formatted !== e.target.value) {
            onMetadataChange(formatted);
        }
    };

    const handlePaste = (e: React.ClipboardEvent<HTMLTextAreaElement>) => {
        e.preventDefault();
        const pastedText = e.clipboardData.getData('text');
        const formatted = formatJson(pastedText);

        // Get current selection position
        const textarea = e.currentTarget;
        const startPos = textarea.selectionStart;
        const endPos = textarea.selectionEnd;

        // Combine the existing value with the pasted content
        const newValue = metadata.substring(0, startPos) +
            formatted +
            metadata.substring(endPos);

        onMetadataChange(newValue);

        // Set cursor position after the pasted content
        setTimeout(() => {
            const newCursorPos = startPos + formatted.length;
            textarea.setSelectionRange(newCursorPos, newCursorPos);
        }, 0);
    };

    return (
        <div className="h-full flex flex-col">
            <div className="flex border-b border-gray-200 bg-gray-50">
                <div className="px-4 py-2 text-sm font-medium text-gray-700 border-b-2 border-blue-600">
                    Page Metadata (JSON)
                </div>
            </div>
            <textarea
                value={metadata}
                onChange={(e) => onMetadataChange(e.target.value)}
                onBlur={handleBlur}
                onPaste={handlePaste}
                className="flex-1 p-4 font-mono text-sm border-none resize-none focus:ring-0"
                spellCheck="false"
            />
            {metadataError && (
                <div className="bg-red-50 text-red-600 p-2 text-sm">
                    {metadataError}
                </div>
            )}
        </div>
    );
};