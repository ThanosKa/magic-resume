import { describe, test, expect } from 'vitest';
import {
  socialLinkSchema,
  personalInfoSchema,
  educationSchema,
  experienceSchema,
  projectSchema,
  sectionSchema,
  cvDataSchema,
} from './schemas';

describe('Social Link Schema Validation', () => {
  test('should validate a correct social link', () => {
    const validData = {
      id: '123',
      platform: 'linkedin' as const,
      url: 'https://linkedin.com/in/johndoe',
      label: 'LinkedIn Profile',
    };
    expect(() => socialLinkSchema.parse(validData)).not.toThrow();
  });

  test('should validate social link handle without protocol', () => {
    const handleData = {
      id: '123',
      platform: 'twitter' as const,
      url: '@johndoe',
    };
    expect(() => socialLinkSchema.parse(handleData)).not.toThrow();
  });

  test('should invalidate social link with empty url', () => {
    const invalidData = {
      id: '123',
      platform: 'github' as const,
      url: '   ',
    };
    expect(() => socialLinkSchema.parse(invalidData)).toThrow(
      'Link is required'
    );
  });

  test('should invalidate social link without required fields', () => {
    const invalidData = {
      platform: 'github' as const,
      url: 'https://github.com/user',
    };
    expect(() => socialLinkSchema.parse(invalidData)).toThrow();
  });
});

describe('Personal Info Schema Validation', () => {
  test('should validate correct personal info', () => {
    const validData = {
      name: 'John Doe',
      title: 'Software Engineer',
      email: 'john@example.com',
      phone: '+1 234 567 8900',
      location: 'New York, NY',
      headerAlign: 'center' as const,
      showPhoto: false,
      socialLinks: [],
    };
    expect(() => personalInfoSchema.parse(validData)).not.toThrow();
  });

  test('should invalidate personal info with invalid email', () => {
    const invalidData = {
      name: 'John Doe',
      title: 'Software Engineer',
      email: 'invalid-email',
      phone: '+1 234 567 8900',
      location: 'New York, NY',
      headerAlign: 'center' as const,
      showPhoto: false,
      socialLinks: [],
    };
    expect(() => personalInfoSchema.parse(invalidData)).toThrow(
      'Must be a valid email'
    );
  });

  test('should invalidate personal info without required fields', () => {
    const invalidData = {
      name: 'John Doe',
      email: 'john@example.com',
      phone: '+1 234 567 8900',
      location: 'New York, NY',
    };
    expect(() => personalInfoSchema.parse(invalidData)).toThrow();
  });

  test('should validate personal info with empty title', () => {
    const validData = {
      name: 'John Doe',
      title: '',
      email: 'john@example.com',
      phone: '+1 234 567 8900',
      location: 'New York, NY',
      headerAlign: 'center' as const,
      showPhoto: false,
      socialLinks: [],
    };
    expect(() => personalInfoSchema.parse(validData)).not.toThrow();
  });
});

describe('Education Schema Validation', () => {
  test('should validate a correct education entry', () => {
    const validData = {
      id: '1',
      institution: 'Stanford University',
      degree: 'Master of Science',
      field: 'Computer Science',
      startDate: '2020',
      endDate: '2022',
      description: 'GPA: 3.9/4.0',
      visible: true,
    };
    expect(() => educationSchema.parse(validData)).not.toThrow();
  });

  test('should validate education with Present as end date', () => {
    const validData = {
      id: '1',
      institution: 'MIT',
      degree: 'PhD',
      field: 'AI',
      startDate: '2020',
      endDate: 'Present',
      description: 'Ongoing',
      visible: true,
    };
    expect(() => educationSchema.parse(validData)).not.toThrow();
  });

  test('should invalidate education where end date is before start date', () => {
    const invalidData = {
      id: '1',
      institution: 'University',
      degree: 'Bachelor',
      field: 'CS',
      startDate: '2022',
      endDate: '2020',
      description: '',
      visible: true,
    };
    expect(() => educationSchema.parse(invalidData)).toThrow(
      'End date must be after or equal to start date'
    );
  });

  test('should invalidate education without required fields', () => {
    const invalidData = {
      id: '1',
      degree: 'Bachelor',
      field: 'CS',
      startDate: '2020',
      endDate: '2024',
    };
    expect(() => educationSchema.parse(invalidData)).toThrow();
  });

  test('should validate education with empty strings for optional fields', () => {
    const validData = {
      id: '1',
      institution: '',
      degree: '',
      field: '',
      startDate: '',
      endDate: '',
      description: '',
      visible: true,
    };
    expect(() => educationSchema.parse(validData)).not.toThrow();
  });
});

describe('Experience Schema Validation', () => {
  test('should validate a correct experience entry', () => {
    const validData = {
      id: '1',
      company: 'Google',
      position: 'Senior Software Engineer',
      startDate: '2020',
      endDate: '2023',
      description: '<ul><li>Led team of 5 engineers</li></ul>',
      visible: true,
    };
    expect(() => experienceSchema.parse(validData)).not.toThrow();
  });

  test('should validate experience with Present as end date', () => {
    const validData = {
      id: '1',
      company: 'Meta',
      position: 'Staff Engineer',
      startDate: '2021',
      endDate: 'Present',
      description: 'Current role',
      visible: true,
    };
    expect(() => experienceSchema.parse(validData)).not.toThrow();
  });

  test('should invalidate experience where end date is before start date', () => {
    const invalidData = {
      id: '1',
      company: 'Company',
      position: 'Developer',
      startDate: '2023',
      endDate: '2020',
      description: '',
      visible: true,
    };
    expect(() => experienceSchema.parse(invalidData)).toThrow(
      'End date must be after or equal to start date'
    );
  });

  test('should validate experience with empty strings for optional fields', () => {
    const validData = {
      id: '1',
      company: '',
      position: '',
      startDate: '',
      endDate: '',
      description: '',
      visible: true,
    };
    expect(() => experienceSchema.parse(validData)).not.toThrow();
  });
});

describe('Project Schema Validation', () => {
  test('should validate a correct project entry', () => {
    const validData = {
      id: '1',
      name: 'Open Source Project',
      role: 'Creator & Maintainer',
      startDate: '2021',
      endDate: '2023',
      description: 'A popular open source library',
      link: 'https://github.com/user/project',
      visible: true,
    };
    expect(() => projectSchema.parse(validData)).not.toThrow();
  });

  test('should validate project without optional link', () => {
    const validData = {
      id: '1',
      name: 'Internal Tool',
      role: 'Lead Developer',
      startDate: '2022',
      endDate: 'Present',
      description: 'Internal company tool',
      visible: true,
    };
    expect(() => projectSchema.parse(validData)).not.toThrow();
  });

  test('should invalidate project with invalid URL', () => {
    const invalidData = {
      id: '1',
      name: 'Project',
      role: 'Developer',
      startDate: '2020',
      endDate: '2021',
      description: 'Desc',
      link: 'not-a-url',
      visible: true,
    };
    expect(() => projectSchema.parse(invalidData)).toThrow(
      'Must be a valid URL'
    );
  });

  test('should invalidate project where end date is before start date', () => {
    const invalidData = {
      id: '1',
      name: 'Project',
      role: 'Developer',
      startDate: '2023',
      endDate: '2020',
      description: '',
      visible: true,
    };
    expect(() => projectSchema.parse(invalidData)).toThrow(
      'End date must be after or equal to start date'
    );
  });

  test('should validate project with empty strings for optional fields', () => {
    const validData = {
      id: '1',
      name: '',
      role: '',
      startDate: '',
      endDate: '',
      description: '',
      visible: true,
    };
    expect(() => projectSchema.parse(validData)).not.toThrow();
  });
});

describe('Section Schema Validation', () => {
  test('should validate a correct section', () => {
    const validData = {
      id: '1',
      type: 'experience' as const,
      title: 'Work Experience',
      enabled: true,
      order: 1,
    };
    expect(() => sectionSchema.parse(validData)).not.toThrow();
  });

  test('should invalidate section with invalid type', () => {
    const invalidData = {
      id: '1',
      type: 'invalid-type',
      title: 'Section',
      enabled: true,
      order: 0,
    };
    expect(() => sectionSchema.parse(invalidData)).toThrow();
  });

  test('should invalidate section with negative order', () => {
    const invalidData = {
      id: '1',
      type: 'skills' as const,
      title: 'Skills',
      enabled: true,
      order: -1,
    };
    expect(() => sectionSchema.parse(invalidData)).toThrow();
  });
});

describe('CV Data Schema Validation', () => {
  test('should validate complete valid CV data', () => {
    const validData = {
      id: '1',
      title: 'My Resume',
      createdAt: '2024-01-01T00:00:00Z',
      updatedAt: '2024-01-01T00:00:00Z',
      personalInfo: {
        name: 'John Doe',
        title: 'Software Engineer',
        email: 'john@example.com',
        phone: '+1 234 567 8900',
        location: 'SF, CA',
        headerAlign: 'center' as const,
        showPhoto: false,
        socialLinks: [],
      },
      summary: 'Experienced developer',
      education: [],
      experience: [],
      projects: [],
      skills: 'JavaScript, TypeScript, React',
      sections: [],
    };
    expect(() => cvDataSchema.parse(validData)).not.toThrow();
  });

  test('should invalidate CV data with invalid nested personal info', () => {
    const invalidData = {
      id: '1',
      title: 'My Resume',
      createdAt: '2024-01-01T00:00:00Z',
      updatedAt: '2024-01-01T00:00:00Z',
      personalInfo: {
        name: 'John Doe',
        title: 'Engineer',
        email: 'invalid-email',
        phone: '+1 234',
        location: 'SF',
        headerAlign: 'center' as const,
        showPhoto: false,
        socialLinks: [],
      },
      summary: '',
      education: [],
      experience: [],
      projects: [],
      skills: '',
      sections: [],
    };
    expect(() => cvDataSchema.parse(invalidData)).toThrow(
      'Must be a valid email'
    );
  });
});
