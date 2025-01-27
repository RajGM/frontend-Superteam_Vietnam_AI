'use client';

import React, { useState, useEffect } from 'react';
import RightSidebar from '@components/RightSidebar';
import ChatFeed from '@components/ChatFeed';
import UploadSection from '@components/FileUploadSidebar';
import UpdateSection from '@components/FileListViewer';
import Tweet from '@components/Tweet';

export default function Home() {
  const [activeTab, setActiveTab] = useState('chat'); // Maintain active tab state here
  useEffect(() => {
    // Initialize Telegram Web App
    const tg = window.Telegram.WebApp;
    tg.ready();

    return () => {
      tg.close(); // Clean up on unmount
    };
  }, []);

  const handleClose = () => {
    window.Telegram.WebApp.close();
  };


  return (
    <main className="min-h-screen bg-base-200" data-theme="corporate">
      <div className="flex justify-center items-start py-4">
        <div className="flex flex-row w-full max-w-6xl">
          {/* Left Column: Content based on Active Tab */}
          <div className="flex-1">
            {activeTab === 'chat' && (
              <div>
                {/* Replace this with the actual ChatFeed component */}
                <ChatFeed />
              </div>
            )}
            {activeTab === 'upload' && (
              <div>
                <UploadSection />
              </div>
            )}
            {activeTab === 'update' && (
              <div>
                <UpdateSection />
              </div>
            )}
            {activeTab === 'tweet' && (
              <div>
                <Tweet />
              </div>
            )}
          </div>

          {/* Right Sidebar */}
          <RightSidebar activeTab={activeTab} setActiveTab={setActiveTab} />
        </div>
      </div>

      <button
        style={{
          padding: '10px 20px',
          backgroundColor: '#0088cc',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
        }}
        onClick={handleClose}
      >
        Close Web App
      </button>
    </main>
  );
}
