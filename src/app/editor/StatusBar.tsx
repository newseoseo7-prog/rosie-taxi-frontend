'use client'
import React from 'react';

interface StatusBarProps {
    activeTab: 'code' | 'preview' | 'metadata'| 'info';
}

export const StatusBar: React.FC<StatusBarProps> = ({ activeTab }) => {
    return (
        <div className="bg-gray-100 px-4 py-2 text-xs text-gray-500 border-t border-gray-200">
            {activeTab === 'code' && 'Editing HTML + JavaScript'}
            {activeTab === 'preview' && 'Preview Mode'}
            {activeTab === 'metadata' && 'Editing Metadata (JSON format)'}
        </div>
    );
};