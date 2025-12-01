import { z } from 'zod';

// Social Link Schema
export const socialLinkSchema = z.object({
  id: z.string().min(1, 'ID is required'),
  platform: z.enum(['linkedin', 'github', 'twitter', 'portfolio', 'other']),
  url: z.string().url('Must be a valid URL'),
  label: z.string().optional(),
});

// Personal Info Schema
export const personalInfoSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  title: z.string().min(1, 'Title is required'),
  email: z.string().email('Must be a valid email'),
  phone: z.string().min(1, 'Phone is required'),
  location: z.string().min(1, 'Location is required'),
  photoUrl: z.string().url('Must be a valid URL').optional().or(z.literal('')),
  headerAlign: z.enum(['left', 'center', 'right']),
  showPhoto: z.boolean(),
  socialLinks: z.array(socialLinkSchema),
});

// Education Schema with date validation
export const educationSchema = z
  .object({
    id: z.string().min(1, 'ID is required'),
    institution: z.string().min(1, 'Institution is required'),
    degree: z.string().min(1, 'Degree is required'),
    field: z.string().min(1, 'Field of study is required'),
    startDate: z.string().min(1, 'Start date is required'),
    endDate: z.string().min(1, 'End date is required'),
    description: z.string(),
    visible: z.boolean(),
  })
  .refine(
    (data) => {
      if (data.endDate.toLowerCase() === 'present') return true;
      const start = parseInt(data.startDate);
      const end = parseInt(data.endDate);
      if (isNaN(start) || isNaN(end)) return true; // Allow non-numeric dates
      return end >= start;
    },
    {
      message: 'End date must be after or equal to start date',
      path: ['endDate'],
    }
  );

// Experience Schema with date validation
export const experienceSchema = z
  .object({
    id: z.string().min(1, 'ID is required'),
    company: z.string().min(1, 'Company is required'),
    position: z.string().min(1, 'Position is required'),
    startDate: z.string().min(1, 'Start date is required'),
    endDate: z.string().min(1, 'End date is required'),
    description: z.string(),
    visible: z.boolean(),
  })
  .refine(
    (data) => {
      if (data.endDate.toLowerCase() === 'present') return true;
      const start = parseInt(data.startDate);
      const end = parseInt(data.endDate);
      if (isNaN(start) || isNaN(end)) return true; // Allow non-numeric dates
      return end >= start;
    },
    {
      message: 'End date must be after or equal to start date',
      path: ['endDate'],
    }
  );

// Project Schema with date validation
export const projectSchema = z
  .object({
    id: z.string().min(1, 'ID is required'),
    name: z.string().min(1, 'Project name is required'),
    role: z.string().min(1, 'Role is required'),
    startDate: z.string().min(1, 'Start date is required'),
    endDate: z.string().min(1, 'End date is required'),
    description: z.string(),
    link: z.string().url('Must be a valid URL').optional().or(z.literal('')),
    visible: z.boolean(),
  })
  .refine(
    (data) => {
      if (data.endDate.toLowerCase() === 'present') return true;
      const start = parseInt(data.startDate);
      const end = parseInt(data.endDate);
      if (isNaN(start) || isNaN(end)) return true; // Allow non-numeric dates
      return end >= start;
    },
    {
      message: 'End date must be after or equal to start date',
      path: ['endDate'],
    }
  );

// Section Schema
export const sectionSchema = z.object({
  id: z.string().min(1, 'ID is required'),
  type: z.enum(['experience', 'education', 'projects', 'skills', 'summary']),
  title: z.string().min(1, 'Title is required'),
  enabled: z.boolean(),
  order: z.number().int().min(0),
});

// Complete CV Data Schema
export const cvDataSchema = z.object({
  id: z.string().min(1, 'ID is required'),
  title: z.string().min(1, 'CV title is required'),
  createdAt: z.string(),
  updatedAt: z.string(),
  personalInfo: personalInfoSchema,
  summary: z.string(),
  education: z.array(educationSchema),
  experience: z.array(experienceSchema),
  projects: z.array(projectSchema),
  skills: z.string(),
  sections: z.array(sectionSchema),
});

// Type exports for use in the application
export type SocialLinkInput = z.infer<typeof socialLinkSchema>;
export type PersonalInfoInput = z.infer<typeof personalInfoSchema>;
export type EducationInput = z.infer<typeof educationSchema>;
export type ExperienceInput = z.infer<typeof experienceSchema>;
export type ProjectInput = z.infer<typeof projectSchema>;
export type SectionInput = z.infer<typeof sectionSchema>;
export type CVDataInput = z.infer<typeof cvDataSchema>;
