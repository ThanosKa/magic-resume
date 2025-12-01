export interface SocialLink {
  id: string;
  platform: 'linkedin' | 'github' | 'twitter' | 'portfolio' | 'other';
  url: string;
  label?: string;
}

export interface PersonalInfo {
  name: string;
  title: string;
  email: string;
  phone: string;
  location: string;
  photoUrl?: string;
  headerAlign: 'left' | 'center' | 'right';
  showPhoto: boolean;
  socialLinks: SocialLink[];
}

export interface Education {
  id: string;
  institution: string;
  degree: string;
  field: string;
  startDate: string;
  endDate: string;
  description: string;
  visible: boolean;
}

export interface Experience {
  id: string;
  company: string;
  position: string;
  startDate: string;
  endDate: string;
  description: string;
  visible: boolean;
}

export interface Project {
  id: string;
  name: string;
  role: string;
  startDate: string;
  endDate: string;
  description: string;
  link?: string;
  visible: boolean;
}

export interface Section {
  id: string;
  type: 'experience' | 'education' | 'projects' | 'skills' | 'summary';
  title: string;
  enabled: boolean;
  order: number;
}

export interface CVData {
  id: string;
  title: string;
  createdAt: string;
  updatedAt: string;
  personalInfo: PersonalInfo;
  summary: string;
  education: Education[];
  experience: Experience[];
  projects: Project[];
  skills: string;
  sections: Section[];
}

export function generateId(): string {
  return `${Date.now()}-${Math.random().toString(36).substring(2, 9)}`;
}

export const defaultCVData: CVData = {
  id: generateId(),
  title: 'My Professional CV',
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
  personalInfo: {
    name: 'Jane Doe',
    title: 'Senior Frontend Developer',
    email: 'jane.doe@email.com',
    phone: '+1 (555) 123-4567',
    location: 'San Francisco, CA',
    headerAlign: 'center',
    showPhoto: false,
    socialLinks: [
      {
        id: generateId(),
        platform: 'linkedin',
        url: 'https://linkedin.com/in/janedoe',
      },
      {
        id: generateId(),
        platform: 'github',
        url: 'https://github.com/janedoe',
      },
    ],
  },
  summary:
    'Passionate frontend developer with 8+ years of experience building scalable web applications. Specialized in React, TypeScript, and modern web technologies. Proven track record of leading teams and delivering high-impact projects that serve millions of users.',
  education: [
    {
      id: generateId(),
      institution: 'Stanford University',
      degree: 'Master of Science',
      field: 'Computer Science',
      startDate: '2014',
      endDate: '2016',
      description: 'Specialized in Human-Computer Interaction. GPA: 3.9/4.0',
      visible: true,
    },
    {
      id: generateId(),
      institution: 'UC Berkeley',
      degree: 'Bachelor of Science',
      field: 'Computer Science',
      startDate: '2010',
      endDate: '2014',
      description: "Minor in Design. Dean's List all semesters.",
      visible: true,
    },
  ],
  experience: [
    {
      id: generateId(),
      company: 'Tech Innovations Inc.',
      position: 'Senior Frontend Developer',
      startDate: '2020',
      endDate: 'Present',
      description: `<ul>
        <li>Led development of company's flagship React application serving 2M+ users</li>
        <li>Mentored team of 5 junior developers, improving team velocity by 40%</li>
        <li>Implemented CI/CD pipelines reducing deployment time by 60%</li>
        <li>Architected micro-frontend solution enabling independent team deployments</li>
      </ul>`,
      visible: true,
    },
    {
      id: generateId(),
      company: 'StartupXYZ',
      position: 'Frontend Developer',
      startDate: '2016',
      endDate: '2020',
      description: `<ul>
        <li>Built responsive web applications using React, TypeScript, and GraphQL</li>
        <li>Reduced page load times by 50% through performance optimization</li>
        <li>Collaborated with UX team to implement design system used across products</li>
      </ul>`,
      visible: true,
    },
  ],
  projects: [
    {
      id: generateId(),
      name: 'Open Source Design System',
      role: 'Creator & Maintainer',
      startDate: '2021',
      endDate: 'Present',
      description:
        'Created and maintain a React component library with 5K+ GitHub stars. Used by 200+ companies worldwide.',
      link: 'https://github.com/example/design-system',
      visible: true,
    },
    {
      id: generateId(),
      name: 'AI-Powered Code Review Tool',
      role: 'Lead Developer',
      startDate: '2022',
      endDate: '2023',
      description:
        'Built an AI assistant that analyzes pull requests and suggests improvements. Integrated with GitHub and GitLab.',
      visible: true,
    },
  ],
  skills: `<ul>
    <li><strong>Languages:</strong> TypeScript, JavaScript, Python, HTML, CSS</li>
    <li><strong>Frameworks:</strong> React, Next.js, Vue.js, Node.js</li>
    <li><strong>Tools:</strong> Git, Docker, AWS, Figma, Jest, Cypress</li>
    <li><strong>Concepts:</strong> Agile, CI/CD, Design Systems, Accessibility</li>
  </ul>`,
  sections: [
    {
      id: generateId(),
      type: 'summary',
      title: 'Professional Summary',
      enabled: true,
      order: 0,
    },
    {
      id: generateId(),
      type: 'experience',
      title: 'Experience',
      enabled: true,
      order: 1,
    },
    {
      id: generateId(),
      type: 'education',
      title: 'Education',
      enabled: true,
      order: 2,
    },
    {
      id: generateId(),
      type: 'projects',
      title: 'Projects',
      enabled: true,
      order: 3,
    },
    {
      id: generateId(),
      type: 'skills',
      title: 'Technical Skills',
      enabled: true,
      order: 4,
    },
  ],
};
