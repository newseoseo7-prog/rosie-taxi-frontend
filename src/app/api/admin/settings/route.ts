import { NextRequest, NextResponse } from 'next/server';
import { SettingsRepository } from '@/db/settings';

const settingsRepo = new SettingsRepository();

export async function GET() {
    try {
        const settings = await settingsRepo.getAllSettings();
        return NextResponse.json({ settings });
    } catch (error) {
        return NextResponse.json({ error: 'Failed to fetch settings' }, { status: 500 });
    }
}

export async function POST(request: NextRequest) {
    try {
        const { key, value } = await request.json();
        
        if (!key) {
            return NextResponse.json({ error: 'Setting key is required' }, { status: 400 });
        }

        await settingsRepo.setSetting(key, value || '');
        return NextResponse.json({ success: true });
    } catch (error) {
        return NextResponse.json({ error: 'Failed to save setting' }, { status: 500 });
    }
}