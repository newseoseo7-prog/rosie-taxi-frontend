'use client'
import React from 'react';
import Link from "next/link";

interface EditorHeaderProps {
    title: string;
    path: string;
    isSaving: boolean;
    saveStatus: string | null;
    onTitleChange: (title: string) => void;
    onPathChange: (path: string) => void;
    onSave: () => void;
}

export const EditorHeader: React.FC<EditorHeaderProps> = ({
                                                              title,
                                                              path,
                                                              isSaving,
                                                              saveStatus,
                                                              onTitleChange,
                                                              onPathChange,
                                                              onSave,
                                                          }) => {
    return (
        <div className="bg-white border-b border-gray-200 px-6 py-4 flex justify-between items-center">
            <div className="flex items-center space-x-4">
                <h1 className="text-xl font-bold text-gray-800">Page Editor</h1>

                <div className="flex space-x-3">
                    <div className="flex flex-col">
                        <label className="text-xs text-gray-500 mb-1">Title</label>
                        <input
                            type="text"
                            value={title}
                            onChange={(e) => onTitleChange(e.target.value)}
                            className="px-3 py-1 border border-gray-300 rounded text-sm"
                            placeholder="Page title"
                        />
                    </div>

                    <div className="flex flex-col">
                        <label className="text-xs text-gray-500 mb-1">Path</label>
                        <div className="flex">
                            <span className="inline-flex items-center px-3 py-1 rounded-l border border-r-0 border-gray-300 bg-gray-100 text-gray-600 text-sm">
                                /
                            </span>
                            <input
                                type="text"
                                value={path.startsWith('/') ? path.substring(1) : path}
                                onChange={(e) => onPathChange(`/${e.target.value.replace(/^\/+/g, '')}`)}
                                className="px-3 py-1 border border-gray-300 rounded-r text-sm w-40"
                                placeholder="page-path"
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex items-center space-x-4">
                <button
                    onClick={onSave}
                    disabled={isSaving}
                    className={`px-4 py-2 rounded-md text-white ${isSaving ? 'bg-green-400' : 'bg-green-600 hover:bg-green-700'} transition-colors`}
                >
                    {isSaving ? 'Saving...' : 'Save Page'}
                </button>
                <Link
                    className={`px-4 py-2 rounded-md transition-colors`}
                    href={'/pages-list'}> Pages List
                </Link>

                {saveStatus && (
                    <span className={`text-sm font-medium ${saveStatus.includes('Error') ? 'text-red-500' : 'text-green-500'}`}>
                        {saveStatus}
                    </span>
                )}
            </div>
        </div>
    );
};