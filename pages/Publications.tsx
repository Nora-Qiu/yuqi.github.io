import React from 'react';
import { PROFILE_DATA } from '../constants';
import { FileTextIcon } from '../components/Icons';
import PublicationList from '../components/PublicationList';

const Publications: React.FC = () => {
  return (
    <main className="w-full p-6 lg:p-16 space-y-8 animate-fade-in relative">
      <div className="flex items-center gap-3 mb-8 border-b border-stone-200 pb-3">
        <FileTextIcon className="w-6 h-6 text-accent" />
        <h1 className="text-3xl font-serif font-bold text-primary">All Publications</h1>
      </div>
      
      <div className="space-y-12">
        <PublicationList publications={PROFILE_DATA.publications} />
      </div>

      <footer className="pt-12 pb-6 text-center border-t border-stone-200/60 mt-12">
          <p className="text-stone-400 text-sm font-mono">© {PROFILE_DATA.last_name}. ❤️ & ☕️.</p>
      </footer>
    </main>
  );
};

export default Publications;
