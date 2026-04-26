'use client'
import React from 'react';

interface EditorTabsProps {
    activeTab: 'code' | 'preview' | 'metadata'| 'info';
    onTabChange: (tab: 'code' | 'preview' | 'metadata'|'info') => void;
    onPreviewClick: () => void;
}

export const EditorTabs: React.FC<EditorTabsProps> = ({
                                                          activeTab,
                                                          onTabChange,
                                                          onPreviewClick,
                                                      }) => {
    return (
        <div className="flex border-b border-gray-200 bg-white">
            <button
                onClick={() => onTabChange('code')}
                className={`px-6 py-3 font-medium text-sm ${activeTab === 'code' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500 hover:text-gray-700'}`}
            >
                Code Editor
            </button>
            <button
                onClick={() => {
                    onTabChange('preview');
                    onPreviewClick();
                }}
                className={`px-6 py-3 font-medium text-sm ${activeTab === 'preview' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500 hover:text-gray-700'}`}
            >
                Preview
            </button>
            <button
                onClick={() => onTabChange('metadata')}
                className={`px-6 py-3 font-medium text-sm ${activeTab === 'metadata' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500 hover:text-gray-700'}`}
            >
                MetaData
            </button>
            <button
                onClick={() => onTabChange('info')}
                className={`px-6 py-3 font-medium text-sm ${activeTab === 'info' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500 hover:text-gray-700'}`}
            >
                Info
            </button>
        </div>
    );
};