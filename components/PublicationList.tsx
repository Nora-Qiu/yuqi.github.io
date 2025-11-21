import React from 'react';
import { PublicationItem } from '../types';
import { ArrowUpRightIcon } from './Icons';

interface Props {
  publications: PublicationItem[];
}

const PublicationList: React.FC<Props> = ({ publications }) => {
  return (
    <div className="space-y-4">
      {publications.map((pub, idx) => (
        <div key={idx} className="group bg-white p-5 rounded-lg border border-stone-200 hover:border-accent/30 hover:shadow-soft transition-all duration-300">
          <div className="flex justify-between items-start gap-4">
            <div className="space-y-2">
              <h4 className="font-serif font-semibold text-lg text-stone-800 group-hover:text-accent transition-colors leading-snug">
                {pub.title}
              </h4>
              <p className="text-sm text-stone-600">
                {pub.authors}
              </p>
              <div className="flex flex-wrap items-center gap-3 text-xs mt-2">
                <span className="font-bold text-stone-500 bg-stone-100 px-2 py-1 rounded">
                    {pub.venue} {pub.year}
                </span>
                {pub.tag && (
                    <span className="text-accent font-medium border border-accent/20 px-2 py-1 rounded-full">
                        {pub.tag}
                    </span>
                )}
              </div>
            </div>
            {pub.url && (
                <a href={pub.url} className="text-stone-300 group-hover:text-accent transition-colors shrink-0">
                    <ArrowUpRightIcon className="w-5 h-5" />
                </a>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default PublicationList;