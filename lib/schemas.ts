import { z } from 'zod';

export const socialLinkSchema = z.object({
  id: z.string().min(1, 'ID is required'),
  platform: z.enum(['linkedin', 'github', 'twitter', 'portfolio', 'other']),
  url: z.string().trim().min(1, 'Link is required'),
  label: z.string().optional(),
});

export const personalInfoSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  title: z.string(),
  email: z.string().email('Must be a valid email'),
  phone: z.string().min(1, 'Phone is required'),
  location: z.string().min(1, 'Location is required'),
  photoUrl: z.string().url('Must be a valid URL').optional().or(z.literal('')),
  headerAlign: z.enum(['left', 'center', 'right']),
  showPhoto: z.boolean(),
  socialLinks: z.array(socialLinkSchema),
});

export const educationSchema = z
  .object({
    id: z.string().min(1, 'ID is required'),
    institution: z.string(),
    degree: z.string(),
    field: z.string(),
    startDate: z.string(),
    endDate: z.string(),
    description: z.string(),
    visible: z.boolean(),
  })
  .refine(
    (data) => {
      if (!data.startDate || !data.endDate) return true;
      if (data.endDate.toLowerCase() === 'present') return true;
      const start = parseInt(data.startDate);
      const end = parseInt(data.endDate);
      if (isNaN(start) || isNaN(end)) return true;
      return end >= start;
    },
    {
      message: 'End date must be after or equal to start date',
      path: ['endDate'],
    }
  );

export const experienceSchema = z
  .object({
    id: z.string().min(1, 'ID is required'),
    company: z.string(),
    position: z.string(),
    startDate: z.string(),
    endDate: z.string(),
    description: z.string(),
    visible: z.boolean(),
  })
  .refine(
    (data) => {
      if (!data.startDate || !data.endDate) return true;
      if (data.endDate.toLowerCase() === 'present') return true;
      const start = parseInt(data.startDate);
      const end = parseInt(data.endDate);
      if (isNaN(start) || isNaN(end)) return true;
      return end >= start;
    },
    {
      message: 'End date must be after or equal to start date',
      path: ['endDate'],
    }
  );

export const projectSchema = z
  .object({
    id: z.string().min(1, 'ID is required'),
    name: z.string(),
    role: z.string(),
    startDate: z.string(),
    endDate: z.string(),
    description: z.string(),
    link: z.string().url('Must be a valid URL').optional().or(z.literal('')),
    visible: z.boolean(),
  })
  .refine(
    (data) => {
      if (!data.startDate || !data.endDate) return true;
      if (data.endDate.toLowerCase() === 'present') return true;
      const start = parseInt(data.startDate);
      const end = parseInt(data.endDate);
      if (isNaN(start) || isNaN(end)) return true;
      return end >= start;
    },
    {
      message: 'End date must be after or equal to start date',
      path: ['endDate'],
    }
  );

export const sectionSchema = z.object({
  id: z.string().min(1, 'ID is required'),
  type: z.enum(['experience', 'education', 'projects', 'skills', 'summary']),
  title: z.string().min(1, 'Title is required'),
  enabled: z.boolean(),
  order: z.number().int().min(0),
});

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

export type SocialLinkInput = z.infer<typeof socialLinkSchema>;
export type PersonalInfoInput = z.infer<typeof personalInfoSchema>;
export type EducationInput = z.infer<typeof educationSchema>;
export type ExperienceInput = z.infer<typeof experienceSchema>;
export type ProjectInput = z.infer<typeof projectSchema>;
export type SectionInput = z.infer<typeof sectionSchema>;
export type CVDataInput = z.infer<typeof cvDataSchema>;
