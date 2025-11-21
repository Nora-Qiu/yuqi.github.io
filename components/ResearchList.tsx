import React from 'react';
import { ResearchItem } from '../types';

interface Props {
  research: ResearchItem[];
}

const ResearchList: React.FC<Props> = ({ research }) => {
  return (
    <div className="space-y-10">
      {research.map((item, idx) => (
        <div key={idx} className="group relative border-l border-stone-200 pl-6 hover:border-accent transition-colors duration-300">
           <div className="absolute -left-[5px] top-0 h-2.5 w-2.5 rounded-full bg-stone-200 group-hover:bg-accent transition-colors duration-300"></div>
           
           <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1 mb-2">
              <h3 className="text-lg font-serif font-bold text-primary leading-tight">
                {item.title}
              </h3>
              <span className="shrink-0 text-xs font-mono text-stone-400 uppercase tracking-wide mt-1 sm:mt-0">
                {item.date}
              </span>
           </div>
           
           <div className="inline-block mb-3 px-2 py-0.5 bg-stone-100 text-xs text-stone-600 font-medium rounded">
             {item.role}
           </div>

           <ul className="space-y-2 list-disc list-outside ml-4 text-stone-600 text-sm leading-relaxed">
             {item.description.map((desc, i) => (
               <li key={i} className="pl-1">
                 {desc}
               </li>
             ))}
           </ul>
        </div>
      ))}
    </div>
  );
};

export default ResearchList;