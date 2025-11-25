import React from 'react';
import { PROFILE_DATA } from '../constants';
import { GithubIcon, MailIcon, MapPinIcon } from './Icons';

export const Sidebar: React.FC = () => {
  return (
    <aside className="w-full lg:w-[380px] lg:h-screen lg:sticky lg:top-0 p-8 flex flex-col bg-surface border-r border-stone-200 shadow-[4px_0_24px_rgba(0,0,0,0.02)] z-10 overflow-y-auto">
      
      <div className="flex flex-col items-center lg:items-start space-y-8 flex-grow">
        
        {/* Profile Image */}
        <div className="relative w-full aspect-square max-w-[260px] lg:max-w-full mx-auto lg:mx-0 group">
          <div className="absolute inset-0 bg-accent/10 rounded-2xl rotate-3 group-hover:rotate-6 transition-transform duration-500"></div>
          <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-card border-4 border-white">
            <img 
              src={PROFILE_DATA.avatar_url}
              alt={PROFILE_DATA.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
            />
          </div>
          {/* Status Badge */}
          <div className="absolute bottom-4 right-4 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-xl shadow-lg border border-stone-100 flex items-center gap-2 text-sm font-bold text-primary transform group-hover:scale-105 transition-all">
            <span className="text-lg">{PROFILE_DATA.status.icon}</span>
            <span>{PROFILE_DATA.status.text}</span>
          </div>
        </div>

        {/* Identity */}
        <div className="text-center lg:text-left space-y-4 pt-2 w-full">
          <div>
            <h1 className="text-5xl font-serif font-bold text-primary tracking-tight leading-none">
              {PROFILE_DATA.title}
            </h1>
            <div className="flex items-center justify-center lg:justify-start gap-3 mt-3 text-secondary font-medium text-sm">
              <span className="bg-stone-100 px-3 py-1 rounded-full text-stone-600 font-serif italic">
                {PROFILE_DATA.pronouns}
              </span>
              <span className="text-stone-300">•</span>
              <span className="font-mono text-stone-500">{PROFILE_DATA.name_pronunciation}</span>
            </div>
          </div>
          
          <p className="text-xl text-accent font-medium font-serif leading-relaxed">
            {PROFILE_DATA.role}
          </p>

          <div className="flex items-center justify-center lg:justify-start gap-2 text-stone-500 text-sm pt-2">
            <MapPinIcon className="w-4 h-4" />
            <span className="uppercase tracking-wide font-medium">{PROFILE_DATA.organizations[0].name}</span>
          </div>
        </div>

        {/* Collaboration / Contact Section */}
        <div className="w-full pt-6">
            <h3 className="text-xs font-bold uppercase tracking-widest text-stone-400 mb-4 text-center lg:text-left">
                Collaboration
            </h3>
            <div className="flex flex-col gap-3">
                {PROFILE_DATA.profiles.map((profile, idx) => {
                    const Icon = profile.icon === 'at-symbol' ? MailIcon : GithubIcon;
                    return (
                        <a 
                            key={idx} 
                            href={profile.url} 
                            target="_blank"
                            rel="noreferrer"
                            className="flex items-center gap-3 px-5 py-3 rounded-xl bg-stone-50 border border-stone-200 text-stone-700 hover:bg-primary hover:text-white hover:border-primary hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 group"
                            aria-label={profile.label}
                        >
                            <Icon className="w-5 h-5 group-hover:text-accent-light transition-colors" />
                            <span className="text-sm font-bold">{profile.label}</span>
                        </a>
                    )
                })}
            </div>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-12 lg:mt-8 text-center lg:text-left text-xs text-stone-400 border-t border-stone-100 pt-6">
        {/* <p className="font-serif italic text-stone-500">Academia is a conversation.</p> */}
        <p className="mt-2 opacity-70">China</p>
      </div>
    </aside>
  );
};