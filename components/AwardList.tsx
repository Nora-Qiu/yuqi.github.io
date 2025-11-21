import React from 'react';
import { AwardItem } from '../types';

interface Props {
  awards: AwardItem[];
}

const AwardList: React.FC<Props> = ({ awards }) => {
  return (
    <div className="grid grid-cols-1 gap-4">
      {awards.map((award, idx) => (
        <div key={idx} className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 p-4 rounded-lg border border-transparent hover:bg-slate-50 hover:border-slate-100 transition-all">
          <span className="font-mono text-accent font-bold text-sm shrink-0 w-20 pt-1 sm:pt-0">
            {award.year}
          </span>
          <div className="flex-1">
            <h4 className="font-bold text-primary text-lg">
              {award.title}
            </h4>
            <p className="text-sm text-secondary mt-1">
              {award.issuer}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AwardList;