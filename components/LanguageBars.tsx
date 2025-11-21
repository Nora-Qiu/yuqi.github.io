import React from 'react';
import { LanguageItem } from '../types';

interface Props {
  languages: LanguageItem[];
}

const LanguageBars: React.FC<Props> = ({ languages }) => {
  return (
    <div className="grid grid-cols-1 gap-4">
      {languages.map((lang) => (
        <div key={lang.name} className="group">
          <div className="flex justify-between items-end mb-1">
            <span className="font-medium text-slate-700">{lang.name}</span>
            <span className="text-xs text-slate-400">{lang.percent}%</span>
          </div>
          <div className="w-full bg-slate-100 rounded-full h-2.5 overflow-hidden">
            <div 
              className="bg-slate-800 group-hover:bg-accent h-2.5 rounded-full transition-all duration-700 ease-out" 
              style={{ width: `${lang.percent}%` }}
            ></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default LanguageBars;