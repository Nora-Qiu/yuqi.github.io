import React from 'react';
import { PROFILE_DATA } from '../constants';
import { CalendarIcon } from '../components/Icons';
import NewsList from '../components/NewsList';

const News: React.FC = () => {
  return (
    <main className="w-full p-6 lg:p-16 space-y-8 animate-fade-in relative">
      <div className="flex items-center gap-3 mb-8 border-b border-stone-200 pb-3">
        <CalendarIcon className="w-6 h-6 text-accent" />
        <h1 className="text-3xl font-serif font-bold text-primary">News Archive</h1>
      </div>
      
      <div className="bg-white p-8 rounded-2xl shadow-card border border-stone-100/50 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-1 h-full bg-accent"></div>
        <NewsList items={PROFILE_DATA.news} />
      </div>

      <footer className="pt-12 pb-6 text-center border-t border-stone-200/60 mt-12">
          <p className="text-stone-400 text-sm font-mono">© {PROFILE_DATA.last_name}. ❤️ & ☕️.</p>
      </footer>
    </main>
  );
};

export default News;
