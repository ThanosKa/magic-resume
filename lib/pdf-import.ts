import type { CVData, PersonalInfo, Education, Experience, Project, SocialLink } from '@/types/cv';
import { generateId, defaultCVData } from '@/types/cv';

interface ExtractedCVData {
  personalInfo?: {
    name?: string;
    title?: string;
    email?: string;
    phone?: string;
    location?: string;
    socialLinks?: Array<{
      platform: 'linkedin' | 'github' | 'twitter' | 'portfolio' | 'other';
      url: string;
    }>;
  };
  summary?: string;
  experience?: Array<{
    company: string;
    position: string;
    startDate: string;
    endDate: string;
    description: string;
  }>;
  education?: Array<{
    institution: string;
    degree: string;
    field: string;
    startDate: string;
    endDate: string;
    description: string;
  }>;
  projects?: Array<{
    name: string;
    role: string;
    startDate: string;
    endDate: string;
    description: string;
    link?: string;
  }>;
  skills?: string;
}

export function mapExtractedDataToCV(extracted: ExtractedCVData): CVData {
  const baseCV = { ...defaultCVData };
  
  // Map personal info
  if (extracted.personalInfo) {
    const personalInfo: PersonalInfo = {
      ...baseCV.personalInfo,
      name: extracted.personalInfo.name || baseCV.personalInfo.name,
      title: extracted.personalInfo.title || baseCV.personalInfo.title,
      email: extracted.personalInfo.email || baseCV.personalInfo.email,
      phone: extracted.personalInfo.phone || baseCV.personalInfo.phone,
      location: extracted.personalInfo.location || baseCV.personalInfo.location,
      socialLinks: extracted.personalInfo.socialLinks
        ? extracted.personalInfo.socialLinks.map(
            (link): SocialLink => ({
              id: generateId(),
              platform: link.platform,
              url: link.url,
            })
          )
        : baseCV.personalInfo.socialLinks,
    };
    baseCV.personalInfo = personalInfo;
  }

  // Map summary
  if (extracted.summary) {
    baseCV.summary = extracted.summary;
  }

  // Map experience
  if (extracted.experience && extracted.experience.length > 0) {
    baseCV.experience = extracted.experience.map(
      (exp): Experience => ({
        id: generateId(),
        company: exp.company,
        position: exp.position,
        startDate: exp.startDate,
        endDate: exp.endDate,
        description: exp.description,
        visible: true,
      })
    );
  }

  // Map education
  if (extracted.education && extracted.education.length > 0) {
    baseCV.education = extracted.education.map(
      (edu): Education => ({
        id: generateId(),
        institution: edu.institution,
        degree: edu.degree,
        field: edu.field,
        startDate: edu.startDate,
        endDate: edu.endDate,
        description: edu.description,
        visible: true,
      })
    );
  }

  // Map projects
  if (extracted.projects && extracted.projects.length > 0) {
    baseCV.projects = extracted.projects.map(
      (proj): Project => ({
        id: generateId(),
        name: proj.name,
        role: proj.role,
        startDate: proj.startDate,
        endDate: proj.endDate,
        description: proj.description,
        link: proj.link,
        visible: true,
      })
    );
  }

  // Map skills
  if (extracted.skills) {
    baseCV.skills = extracted.skills;
  }

  // Update metadata
  baseCV.id = generateId();
  baseCV.createdAt = new Date().toISOString();
  baseCV.updatedAt = new Date().toISOString();
  baseCV.title = extracted.personalInfo?.name
    ? `${extracted.personalInfo.name}'s CV`
    : 'Imported CV';

  return baseCV;
}
