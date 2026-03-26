import React from 'react';
import { Outlet } from 'react-router-dom';
import { Sidebar } from '../components/Sidebar';

export const MainLayout: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col lg:flex-row font-sans text-primary bg-bg selection:bg-accent-light selection:text-accent-dark">
      {/* Left Sidebar - Fixed width, distinct styling */}
      <div className="flex-shrink-0 lg:w-[380px] z-20">
        <Sidebar />
      </div>

      {/* Main Content Area - Flexible width, populated by current route */}
      <div className="flex-1 w-full max-w-5xl mx-auto z-10 relative">
        <Outlet />
      </div>
    </div>
  );
};
