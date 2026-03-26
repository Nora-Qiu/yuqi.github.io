import React from 'react';
import { NewsItem } from '../types';
import ReactMarkdown from 'react-markdown';

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
          <div className="text-stone-700 text-sm leading-relaxed group-hover:text-primary transition-colors [&>p]:my-0 [&>p>a]:text-accent [&>p>strong]:text-stone-900 [&>p>a]:font-medium [&>p>span]:text-stone-900">
            <ReactMarkdown>{item.content}</ReactMarkdown>
          </div>
        </div>
      ))}
    </div>
  );
};

export default NewsList;