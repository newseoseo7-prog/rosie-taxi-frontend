'use client'
import React from 'react';

interface PreviewPaneProps {
    previewContent: string;
}

export const PreviewPane: React.FC<PreviewPaneProps> = ({ previewContent }) => {
    return (
        <div
            className="w-full h-full border-none bg-white overflow-auto"
            dangerouslySetInnerHTML={{ __html: previewContent }}
        />
    );
};
