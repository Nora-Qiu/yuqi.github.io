import React from 'react';
import { EducationItem } from '../types';
import { GraduationCapIcon } from './Icons';

interface Props {
  education: EducationItem[];
}

const EducationTimeline: React.FC<Props> = ({ education }) => {
  return (
    <div className="relative border-l-2 border-slate-200 ml-3 my-6 space-y-10">
      {education.map((edu, index) => (
        <div key={index} className="relative pl-8 group">
          {/* Timeline Dot */}
          <div className="absolute -left-[9px] top-1.5 h-4 w-4 rounded-full bg-white border-2 border-slate-300 group-hover:border-accent group-hover:scale-110 transition-all duration-300"></div>
          
          {/* Content */}
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-1">
            <h3 className="text-lg font-bold text-slate-800 font-serif">{edu.institution}</h3>
            <span className="text-sm font-mono text-slate-500 bg-slate-50 px-2 py-1 rounded border border-slate-100 mt-1 sm:mt-0 inline-block">
              {edu.date_start} — {edu.date_end || 'Present'}
            </span>
          </div>
          
          <div className="flex items-center gap-2 text-accent font-medium mb-2">
            <GraduationCapIcon className="w-4 h-4" />
            <span>{edu.area}</span>
          </div>
          
          {edu.summary && (
            <div className="text-slate-600 text-sm leading-relaxed bg-slate-50 p-3 rounded-md border border-slate-100">
              {edu.summary}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default EducationTimeline;