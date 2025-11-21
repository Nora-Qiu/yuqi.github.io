import React from 'react';
import { Sidebar } from './components/Sidebar';
import { PROFILE_DATA } from './constants';
import { UserIcon, SparklesIcon, GlobeIcon, FileTextIcon, CalendarIcon, TrophyIcon, GraduationCapIcon } from './components/Icons';
import EducationTimeline from './components/EducationTimeline';
import LanguageBars from './components/LanguageBars';
import NewsList from './components/NewsList';
import PublicationList from './components/PublicationList';
import AwardList from './components/AwardList';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col lg:flex-row font-sans text-primary bg-bg selection:bg-accent-light selection:text-accent-dark">
      
      {/* Left Sidebar - Fixed width, distinct styling */}
      <div className="flex-shrink-0 lg:w-[380px] z-20">
        <Sidebar />
      </div>

      {/* Main Content Area - Flexible width */}
      <main className="flex-1 max-w-5xl mx-auto p-6 lg:p-16 space-y-16 animate-fade-in">
          
          {/* Intro / About */}
          <section className="space-y-4">
            <div className="flex items-center gap-2 text-accent mb-2 opacity-80">
              <UserIcon className="w-5 h-5" />
              <h2 className="text-sm font-bold uppercase tracking-widest font-serif">Biography</h2>
            </div>
            <div className="prose prose-lg max-w-none text-secondary leading-loose text-justify font-light">
              <p>{PROFILE_DATA.about}</p>
            </div>
          </section>

          {/* News Section - Moved to Main Column */}
          <section className="bg-white p-8 rounded-2xl shadow-card border border-stone-100/50 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-1 h-full bg-accent"></div>
            <div className="flex items-center gap-3 mb-6 border-b border-stone-100 pb-4">
                <CalendarIcon className="w-5 h-5 text-accent" />
                <h2 className="text-xl font-serif font-bold text-primary">Latest News</h2>
            </div>
            <NewsList items={PROFILE_DATA.news} />
          </section>

          {/* Education Section */}
          <section>
            <div className="flex items-center gap-3 mb-8 border-b border-stone-200 pb-3">
              <GraduationCapIcon className="w-6 h-6 text-accent" />
              <h2 className="text-2xl font-serif font-bold text-primary">Education</h2>
            </div>
            <EducationTimeline education={PROFILE_DATA.education} />
          </section>

          {/* Publications Section */}
          <section>
              <div className="flex items-center gap-3 mb-8 border-b border-stone-200 pb-3">
                  <FileTextIcon className="w-6 h-6 text-accent" />
                  <h2 className="text-2xl font-serif font-bold text-primary">Selected Publications</h2>
              </div>
              <PublicationList publications={PROFILE_DATA.publications} />
          </section>

          {/* Awards Section */}
          <section>
              <div className="flex items-center gap-3 mb-8 border-b border-stone-200 pb-3">
                  <TrophyIcon className="w-6 h-6 text-accent" />
                  <h2 className="text-2xl font-serif font-bold text-primary">Honors & Awards</h2>
              </div>
              <AwardList awards={PROFILE_DATA.awards} />
          </section>

          {/* Two Column Grid for Interests & Languages */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Interests */}
            <section className="bg-surface p-8 rounded-2xl shadow-card border border-stone-100">
                <div className="flex items-center gap-2 mb-6 text-secondary">
                    <SparklesIcon className="w-5 h-5 text-accent" />
                    <h3 className="font-serif font-bold text-lg">Research Interests</h3>
                </div>
                <div className="flex flex-wrap gap-3">
                {PROFILE_DATA.interests.map((interest) => (
                    <span 
                    key={interest} 
                    className="px-4 py-2 bg-stone-50 border border-stone-200/60 rounded-lg text-sm font-medium text-stone-700 hover:border-accent hover:text-accent transition-colors duration-300"
                    >
                    {interest}
                    </span>
                ))}
                </div>
            </section>

            {/* Languages */}
            <section className="bg-surface p-8 rounded-2xl shadow-card border border-stone-100">
                <div className="flex items-center gap-2 mb-6 text-secondary">
                    <GlobeIcon className="w-5 h-5 text-accent" />
                    <h3 className="font-serif font-bold text-lg">Languages</h3>
                </div>
                <LanguageBars languages={PROFILE_DATA.languages} />
            </section>
          </div>

          {/* Footer */}
          <footer className="pt-12 pb-6 text-center border-t border-stone-200/60 mt-12">
             <p className="text-stone-400 text-sm font-mono">© {new Date().getFullYear()} {PROFILE_DATA.last_name}. Designed with ❤️ & ☕️.</p>
          </footer>

      </main>
    </div>
  );
};

export default App;