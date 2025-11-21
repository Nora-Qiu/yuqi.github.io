import React from 'react';
import { NewsItem } from '../types';

interface Props {
  items: NewsItem[];
}

const NewsList: React.FC<Props> = ({ items }) => {
  return (
    <div className="space-y-4">
      {items.map((item, idx) => (
        <div key={idx} className="flex gap-4 items-start group">
          <div className="min-w-[80px] text-xs font-mono text-stone-400 pt-1 text-right uppercase tracking-wide">
            {item.date}
          </div>
          <div className="text-stone-700 text-sm leading-relaxed group-hover:text-primary transition-colors">
            {item.content}
          </div>
        </div>
      ))}
    </div>
  );
};

export default NewsList;