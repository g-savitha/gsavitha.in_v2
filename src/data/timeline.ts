export interface TimelineItem {
  year: string;
  role: string;
  company: string;
  project?: string;
  desc: string;
  color: string;
}

export const timeline: TimelineItem[] = [
  {
    year: '2023 - Present',
    role: 'Software Engineer 2',
    company: 'Lloyds Technology Center',
    project: 'OpenBanking',
    desc: 'Leading frontend development for open banking solutions.',
    color: 'bg-primary',
  },
  {
    year: '2022',
    role: 'Software Engineer 2',
    company: 'EPAM Anywhere',
    desc: 'Developed robust e-commerce platforms and component libraries.',
    color: 'bg-secondary',
  },
  {
    year: '2019',
    role: 'Open Source Maintainer',
    company: 'React & GitHub',
    desc: 'Contributed to open source projects and was the official maintainer of React Telugu docs.',
    color: 'bg-accent',
  },
  {
    year: '2018',
    role: 'Software Engineer 1',
    company: 'Progress',
    project: 'OpenEdge Management',
    desc: 'Developed health monitoring solution for OpenEdge servers.',
    color: 'bg-primary',
  },
  {
    year: '2017',
    role: 'Associate Software Engineer',
    company: 'Arcserve',
    project: 'Unified Data Protection',
    desc: 'Delivered data backup and disaster recovery modules',
    color: 'bg-secondary',
  },
];
