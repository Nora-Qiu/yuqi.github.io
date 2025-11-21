import React from 'react';
import { ProfileConfig } from './types';

export const PROFILE_DATA: ProfileConfig = {
  title: "Yuqi Qiu",
  name_pronunciation: "Yu Qi Qiu",
  first_name: "Yuqi",
  last_name: "Qiu",
  pronouns: "she/her",
  status: {
    icon: "🤯",
    text: "Ph.D. Student"
  },
  role: "PhD Student in Cyber Security",
  organizations: [
    { name: "Nankai University" }
  ],
  profiles: [
    {
      icon: "at-symbol",
      url: "mailto:qiuyuqi@mail.nankai.edu.cn",
      label: "Email"
    },
    {
      icon: "github",
      url: "https://github.com/Nora-Qiu",
      label: "GitHub"
    }
  ],
  interests: [
    "Internet Measurement",
    "Network Security",
    "DNS Security",
    "Protocol Vulnerabilities"
  ],
  education: [
    {
      area: "Ph.D. Cyber Security",
      institution: "Nankai University",
      date_start: "Sep. 2025",
      date_end: "Present",
      summary: (
        <span>
          Supervised by <a href="https://lixiang521.com" target="_blank" rel="noreferrer" className="text-accent hover:underline font-medium">Prof. Xiang Li</a> and Prof. Zheli Liu.
        </span>
      )
    },
    {
      area: "M.Eng. Cyberspace Security",
      institution: "IIE, CAS",
      date_start: "Sep. 2022",
      date_end: "Jun. 2025",
      gpa: "3.76/4.0",
      summary: "Exam-exempted admission. Thesis on Encrypted DNS Manipulation."
    },
    {
      area: "B.Eng. Cyberspace Security",
      institution: "Xidian University",
      date_start: "Sep. 2018",
      date_end: "Jun. 2022",
      gpa: "3.80/4.0",
      summary: "Experimental Class. Bachelor Thesis on DoH Tunnel Detection."
    }
  ],
  languages: [
    { name: "Chinese", percent: 100 },
    { name: "English", percent: 80 },
    { name: "French", percent: 20 }
  ],
  about: `Yuqi Qiu is a PhD student at Nankai University, specializing in DNS security and network measurement. Her research focuses on developing measurement-driven methodologies to characterize the internet ecosystem, as well as investigating vulnerabilities within its core infrastructure. She is passionate about uncovering systemic weaknesses in DNS error-handling and analyzing encrypted DNS deployments at scale.`,
  news: [
    {
      date: "Oct 2025",
      content: <span>Paper <strong>"RebirthDay Attack"</strong> accepted at <strong className="text-primary">ACM CCS 2025</strong>.</span>
    },
    {
      date: "Sep 2025",
      content: "Started Ph.D. journey at Nankai University."
    },
    {
      date: "Jun 2025",
      content: "Completed Master's degree at IIE, CAS."
    },
    {
      date: "2023",
      content: "Awarded National Scholarship."
    }
  ],
  publications: [
    {
      title: "RebirthDay Attack: Reviving DNS Cache Poisoning with the Birthday Paradox",
      authors: "Li, X., Zhang, M., Xu, Z., Miao, F., Qiu, Y. et al.",
      venue: "ACM CCS",
      year: "2025",
      tag: "Top Tier"
    },
    {
      title: "Before Toasters Rise Up: A View into the Emerging DoH Resolver’s Deployment Risk",
      authors: "Qiu, Y., Li, B., Li, Z., Jiao, L., Zhu, Y., & Liu, Q.",
      venue: "IEEE ISCC",
      year: "2023",
      tag: "First Author"
    },
    {
      title: "Detection of DoH Tunnels with Dual-Tier Classifier",
      authors: "Qiu, Y., Li, B., Jiao, L., Zhu, Y., & Liu, Q.",
      venue: "IEEE MSN",
      year: "2022",
      tag: "First Author"
    }
  ],
  research: [
    {
      title: "Analysis on Attack Surfaces in DNS through Malformed Query Analysis",
      role: "Core Member",
      date: "Jun. 2025 - Present",
      description: [
        "Conducted a systematic analysis of how DNS resolvers handle malformed queries.",
        "Exposed systemic weaknesses in DNS error-handling logic, contributing to improved protocol robustness."
      ]
    },
    {
      title: "Active Remote Measurement and Analysis of IP Source Address Spoofing",
      role: "Core Member",
      date: "Jun. 2025 - Present",
      description: [
        "Designed and implemented Xpoof, a high-performance platform for active remote measurement of IP spoofing.",
        "Pioneered a methodology transforming ubiquitous transparent proxies into active probes to test network egress filtering."
      ]
    },
    {
      title: "Measurement of Encrypted DNS Manipulation",
      role: "Master Thesis",
      date: "Nov. 2023 - Jun. 2025",
      description: [
        "Conducted a measurement study on the manipulation of open encrypted DNS resolvers.",
        "Categorized manipulators into three types and analyzed their characteristics across domains, providers, and countries."
      ]
    },
    {
      title: "Global Measurement of Encrypted DNS",
      role: "Core Member",
      date: "May 2023 - Jun. 2025",
      description: [
        "Proposed a measurement system automating the discovery of servers supporting DoT, DoH, and DoQ.",
        "Handled 10 million probes daily using concurrent probing techniques."
      ]
    },
    {
      title: "Measuring the Deployment of DNS over HTTPS",
      role: "Core Member",
      date: "Sep. 2022 - Apr. 2023",
      description: [
        "Proposed a measurement based on distributed vantage points to discover wild DoH resolvers.",
        "Performed risk and graph analysis on the deployments and security of DoH across IPv4 space."
      ]
    },
    {
      title: "Research on Detection of DoH tunnels",
      role: "Bachelor Thesis",
      date: "Nov. 2021 - Aug. 2022",
      description: [
        "Created a dataset simulating real-world DoH attack traffic.",
        "Proposed a model with Dual-Tier Tunnel Classifier (DTC) for detecting DoH tunnels."
      ]
    }
  ],
  awards: [
    {
      title: "National Scholarship",
      issuer: "Ministry of Education of P.R. China",
      year: "2023"
    },
    {
      title: "Outstanding Student",
      issuer: "Chinese Academy of Sciences (CAS)",
      year: "2023 & 2024"
    },
    {
      title: "Outstanding Student",
      issuer: "Xidian University",
      year: "2021"
    }
  ]
};