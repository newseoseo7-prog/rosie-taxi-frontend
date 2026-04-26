'use client';

import React, { useState, useEffect } from 'react';
import { useAuth } from '@/contexts/AdminAuthContext';
import AdminAuthGuard from '@/components/AdminAuthGuard';
import Input from '@/shared/Input';
import ButtonPrimary from '@/shared/ButtonPrimary';

export default function AdminSettings() {
  const { user } = useAuth();
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  
  // Website settings state
  const [settings, setSettings] = useState<{[key: string]: string}>({});
  const [settingsLoading, setSettingsLoading] = useState(false);
  const [settingsMessage, setSettingsMessage] = useState('');
  const [settingsError, setSettingsError] = useState('');

  useEffect(() => {
    fetchSettings();
  }, []);

  const fetchSettings = async () => {
    try {
      const response = await fetch('/api/admin/settings');
      const data = await response.json();
      if (response.ok) {
        const settingsObj: {[key: string]: string} = {};
        data.settings.forEach((setting: any) => {
          settingsObj[setting.setting_key] = setting.setting_value || '';
        });
        setSettings(settingsObj);
      }
    } catch (err) {
      console.error('Failed to fetch settings:', err);
    }
  };

  const handleSettingChange = (key: string, value: string) => {
    setSettings(prev => ({ ...prev, [key]: value }));
  };

  const handleSettingsSave = async (e: React.FormEvent) => {
    e.preventDefault();
    setSettingsLoading(true);
    setSettingsError('');
    setSettingsMessage('');

    try {
      const promises = Object.entries(settings).map(([key, value]) =>
        fetch('/api/admin/settings', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ key, value })
        })
      );

      await Promise.all(promises);
      setSettingsMessage('Settings saved successfully');
    } catch (err) {
      setSettingsError('Failed to save settings');
    } finally {
      setSettingsLoading(false);
    }
  };

  const handlePasswordChange = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setMessage('');

    if (newPassword !== confirmPassword) {
      setError('New passwords do not match');
      setLoading(false);
      return;
    }

    if (newPassword.length < 6) {
      setError('New password must be at least 6 characters long');
      setLoading(false);
      return;
    }

    try {
      const response = await fetch('/api/admin/change-password', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify({
          currentPassword,
          newPassword,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage('Password changed successfully');
        setCurrentPassword('');
        setNewPassword('');
        setConfirmPassword('');
      } else {
        setError(data.error || 'Failed to change password');
      }
    } catch (err) {
      setError('Network error. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <AdminAuthGuard>
      <div className="space-y-4 sm:space-y-6">
      <div>
        <h2 className="text-xl sm:text-2xl font-bold text-neutral-900 dark:text-neutral-100">
          Settings
        </h2>
        <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400">
          Manage your admin account settings
        </p>
      </div>

      <div className="bg-white dark:bg-neutral-800 p-4 sm:p-6 rounded-lg shadow">
        <h3 className="text-base sm:text-lg font-medium text-neutral-900 dark:text-neutral-100 mb-4">
          Account Information
        </h3>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300">
              Username
            </label>
            <p className="mt-1 text-sm text-neutral-900 dark:text-neutral-100">
              {user?.username}
            </p>
          </div>
          <div>
            <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300">
              Email
            </label>
            <p className="mt-1 text-sm text-neutral-900 dark:text-neutral-100">
              {user?.email}
            </p>
          </div>
          <div>
            <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300">
              Role
            </label>
            <p className="mt-1 text-sm text-neutral-900 dark:text-neutral-100 capitalize">
              {user?.role}
            </p>
          </div>
        </div>
      </div>

      <div className="bg-white dark:bg-neutral-800 p-4 sm:p-6 rounded-lg shadow">
        <h3 className="text-base sm:text-lg font-medium text-neutral-900 dark:text-neutral-100 mb-4">
          Website Settings
        </h3>
        
        <form onSubmit={handleSettingsSave} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300">
              PER_MILE RATE ($)
            </label>
            <Input
              type="number"
              step="0.01"
              min="0"
              className="mt-1"
              value={settings.PER_MILE_RATE || ''}
              onChange={(e) => handleSettingChange('PER_MILE_RATE', e.target.value)}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300">
              MIN_FARE ($)
            </label>
            <Input
              type="number"
              step="0.01"
              min="0"
              className="mt-1"
              value={settings.MIN_FARE || ''}
              onChange={(e) => handleSettingChange('MIN_FARE', e.target.value)}
            />
          </div>

          <div className="flex items-center">
            <input
              type="checkbox"
              id="auto_approve_booking"
              checked={settings.AUTO_APPROVE_BOOKING === 'true'}
              onChange={(e) => handleSettingChange('AUTO_APPROVE_BOOKING', e.target.checked ? 'true' : 'false')}
              className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
            />
            <label htmlFor="auto_approve_booking" className="ml-2 block text-sm text-neutral-700 dark:text-neutral-300">
              AUTO_APPROVE BOOKING
            </label>
          </div>

          {settingsError && (
            <div className="rounded-md bg-red-50 dark:bg-red-900/20 p-4">
              <div className="text-sm text-red-700 dark:text-red-400">
                {settingsError}
              </div>
            </div>
          )}

          {settingsMessage && (
            <div className="rounded-md bg-green-50 dark:bg-green-900/20 p-4">
              <div className="text-sm text-green-700 dark:text-green-400">
                {settingsMessage}
              </div>
            </div>
          )}

          <ButtonPrimary
            type="submit"
            disabled={settingsLoading}
            className="w-full sm:w-auto text-sm sm:text-base"
          >
            {settingsLoading ? 'Saving...' : 'Save Settings'}
          </ButtonPrimary>
        </form>
      </div>

      <div className="bg-white dark:bg-neutral-800 p-4 sm:p-6 rounded-lg shadow">
        <h3 className="text-base sm:text-lg font-medium text-neutral-900 dark:text-neutral-100 mb-4">
          Change Password
        </h3>
        
        <form onSubmit={handlePasswordChange} className="space-y-4">
          <div>
            <label htmlFor="currentPassword" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300">
              Current Password
            </label>
            <Input
              id="currentPassword"
              type="password"
              required
              className="mt-1"
              value={currentPassword}
              onChange={(e) => setCurrentPassword(e.target.value)}
            />
          </div>

          <div>
            <label htmlFor="newPassword" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300">
              New Password
            </label>
            <Input
              id="newPassword"
              type="password"
              required
              className="mt-1"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
            />
          </div>

          <div>
            <label htmlFor="confirmPassword" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300">
              Confirm New Password
            </label>
            <Input
              id="confirmPassword"
              type="password"
              required
              className="mt-1"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>

          {error && (
            <div className="rounded-md bg-red-50 dark:bg-red-900/20 p-4">
              <div className="text-sm text-red-700 dark:text-red-400">
                {error}
              </div>
            </div>
          )}

          {message && (
            <div className="rounded-md bg-green-50 dark:bg-green-900/20 p-4">
              <div className="text-sm text-green-700 dark:text-green-400">
                {message}
              </div>
            </div>
          )}

          <ButtonPrimary
            type="submit"
            disabled={loading}
            className="w-full sm:w-auto text-sm sm:text-base"
          >
            {loading ? 'Changing Password...' : 'Change Password'}
          </ButtonPrimary>
        </form>
      </div>
      </div>
    </AdminAuthGuard>
  );
}