export interface Job {
  role: string;
  company: string;
  startYear: string;
  period: string;
  description: string[];
  techStack?: {
    [key: string]: string[];
  };
  skills?: string[];
}

export interface Recommendation {
  name: string;
  role: string;
  company: string;
  text: string;
  image: string;
}
