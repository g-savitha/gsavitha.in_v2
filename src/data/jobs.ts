import type { Job } from '../types';

export const jobs: Job[] = [
  {
    role: 'Software Engineer 2',
    company: 'Lloyds Technology Centre',
    startYear: '2023',
    period: 'Oct 2023 - Present',
    description: [
      'Open Banking:',
      'Lead 5-member team to deliver mobile/web app to 1M+ users.',
      'Boosted Consent Admin UI performance by 20%',
      'Lead “Doctor OB” (a POC )fullstack microservices and environments health check dashboard for productivity & CO₂ reduction.',
      'Rebuilt Open Banking Web app for improved UX & scalability.',
      'Migrated React frontend from Flux to Redux',
      'Implemented V4.0 OBIE spec changes.',
      'Presented architecture to CEO/CTO; platform-wide leadership.',
      'Developed POC UI for Appsign login feature.',
      'Recognized as top performer; ensured on-time delivery of features and bug fixes.',
      'Got recognised by stake holders and higher management in show & tell 6 times'
    ],
    techStack: {
      Frontend: ['React', 'Typescript', 'Redux toolkit', 'Flux', 'Webpack', 'React Testing Library', 'CSS', 'Styled Components', 'Jest', 'Material UI'],
      Backend: ['Node.js', 'Express.js', 'REST API', 'Microservices', 'GCP', 'Oauth2.0', 'SQL Server', 'Cassandra', 'Docker'],
      Tools: ['Splunk', 'Dynatrace', 'Figma', 'Jenkins', 'UCD']
    }
  },
  {
    role: 'Software Engineer 2',
    company: 'Epam Anywhere',
    startYear: '2022',
    period: 'May 2022 - Sep 2022',
    description: [
      'Developed e-commerce product and order management modules.',
      'Enhanced search functionality and reliability.',
    ],
    techStack: {
      Frontend: ['React', 'Redux', 'Typescript', 'styled-components', 'Webpack', 'REST API']
    }
  },
  {
    role: 'Open Source Maintainer',
    company: 'React & GitHub',
    startYear: '2019',
    period: 'Nov 2019 - Present',
    description: [
      'Contributed as a maintainer for the GitHub Profile README Generator, enhancing user engagement through customizable profiles. https://github.com/rahuldkjain/github-profile-readme-generator',
      'Actively maintained the ReactJS documentation site, ensuring up-to-date and accessible resources for developers. https://github.com/reactjs/te.react.dev',
      'Collaborated on the India Vaccine Frontend project, contributing to public health awareness and information dissemination. https://github.com/IndiaVaccineIN/india-vaccine-frontend',
      'Maintainer of React official Telugu Docs. Live Site: https://te-react-dev.vercel.app/learn Github Repo: https://github.com/reactjs/te.react.dev'
    ],
    techStack: {
      Frontend: ['React', 'Gatsby', 'Webpack'],
      Backend: ['Node.js', 'Express.js', 'GraphQL', 'gRPC', 'REST API']
    }
  },
  {
    role: 'Software Engineer 1',
    company: 'Progress',
    startYear: '2018',
    period: 'Aug 2018 - Oct 2019',
    description: [
      'OpenEdge Management: Developed health monitoring solution for OpenEdge servers.',
    ],
    techStack: {
      Frontend: ['React', 'Redux', 'Javascript', 'CSS', 'REST API'],
      Backend: ['Java', 'SpringBoot', 'Oracle SQL', 'Junit']
    }
  },
  {
    role: 'Associate Software Engineer',
    company: 'Arcserve',
    startYear: '2017',
    period: 'Sept 2017 - Aug 2018',
    description: [
      'Unified Data Protection: Delivered data backup and disaster recovery modules',
    ],
    techStack: {
      Frontend: ['React', 'Flux', 'Javascript', 'CSS', 'REST API'],
      Backend: ['Java', 'SpringBoot', 'JPA', 'Junit', 'SQL Server']
    }
  }
];
