import React from 'react';

export interface ProfileConfig {
  avatar_url: string;
  title: string;
  name_pronunciation: string;
  first_name: string;
  last_name: string;
  pronouns: string;
  mbti?: string;
  status: {
    icon: string;
    text: string;
  };
  role: string;
  organizations: {
    name: string;
    url?: string;
  }[];
  profiles: {
    icon: string;
    url: string;
    label: string;
  }[];
  interests: string[];
  education: EducationItem[];
  languages: LanguageItem[];
  about: string;
  news: NewsItem[];
  publications: PublicationItem[];
  research: ResearchItem[];
  awards: AwardItem[];
}

export interface EducationItem {
  area: string;
  institution: string;
  date_start: string;
  date_end?: string; 
  summary?: React.ReactNode;
  gpa?: string;
}

export interface LanguageItem {
  name: string;
  percent: number;
}

export interface NewsItem {
  date: string;
  content: React.ReactNode;
}

export interface PublicationItem {
  title: string;
  authors: string;
  venue: string;
  year: string;
  url?: string;
  tag?: string;
}

export interface ResearchItem {
  title: string;
  role: string;
  date: string;
  description: string[];
}

export interface AwardItem {
  title: string;
  issuer: string;
  year: string;
}