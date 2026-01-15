'use client';

import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import {
  type CVData,
  type Education,
  type Experience,
  type Project,
  type PersonalInfo,
  type Section,
  type SocialLink,
  defaultCVData,
  generateId,
} from '@/types/cv';

interface CVStore {
  cv: CVData;
  activeSection: string | null;

  updatePersonalInfo: (info: Partial<PersonalInfo>) => void;
  addSocialLink: (link?: Partial<SocialLink>) => void;
  updateSocialLink: (id: string, link: Partial<SocialLink>) => void;
  removeSocialLink: (id: string) => void;

  addEducation: (education?: Partial<Education>) => void;
  updateEducation: (id: string, education: Partial<Education>) => void;
  removeEducation: (id: string) => void;

  addExperience: (experience?: Partial<Experience>) => void;
  updateExperience: (id: string, experience: Partial<Experience>) => void;
  removeExperience: (id: string) => void;

  addProject: (project?: Partial<Project>) => void;
  updateProject: (id: string, project: Partial<Project>) => void;
  removeProject: (id: string) => void;

  updateSkills: (skills: string) => void;

  updateSummary: (summary: string) => void;
  clearSummary: () => void;

  toggleSection: (sectionId: string) => void;
  reorderSections: (sections: Section[]) => void;
  resetSectionsOrder: () => void;
  setActiveSection: (section: string | null) => void;

  setCVData: (cv: CVData) => void;
  reset: () => void;
}

export const useCVStore = create<CVStore>()(
  persist(
    (set) => ({
      cv: defaultCVData,
      activeSection: 'experience',

      updatePersonalInfo: (info) =>
        set((state) => ({
          cv: {
            ...state.cv,
            personalInfo: { ...state.cv.personalInfo, ...info },
            updatedAt: new Date().toISOString(),
          },
        })),

      addSocialLink: (link) =>
        set((state) => ({
          cv: {
            ...state.cv,
            personalInfo: {
              ...state.cv.personalInfo,
              socialLinks: [
                ...(state.cv.personalInfo.socialLinks ?? []),
                {
                  id: generateId(),
                  platform: 'linkedin',
                  url: '',
                  ...link,
                },
              ],
            },
            updatedAt: new Date().toISOString(),
          },
        })),

      updateSocialLink: (id, link) =>
        set((state) => ({
          cv: {
            ...state.cv,
            personalInfo: {
              ...state.cv.personalInfo,
              socialLinks: (state.cv.personalInfo.socialLinks ?? []).map((s) =>
                s.id === id ? { ...s, ...link } : s
              ),
            },
            updatedAt: new Date().toISOString(),
          },
        })),

      removeSocialLink: (id) =>
        set((state) => ({
          cv: {
            ...state.cv,
            personalInfo: {
              ...state.cv.personalInfo,
              socialLinks: (state.cv.personalInfo.socialLinks ?? []).filter(
                (s) => s.id !== id
              ),
            },
            updatedAt: new Date().toISOString(),
          },
        })),

      addEducation: (education) =>
        set((state) => ({
          cv: {
            ...state.cv,
            education: [
              ...state.cv.education,
              {
                id: generateId(),
                institution: '',
                degree: '',
                field: '',
                startDate: '',
                endDate: '',
                description: '',
                visible: true,
                ...education,
              },
            ],
            updatedAt: new Date().toISOString(),
          },
        })),

      updateEducation: (id, education) =>
        set((state) => ({
          cv: {
            ...state.cv,
            education: state.cv.education.map((e) =>
              e.id === id ? { ...e, ...education } : e
            ),
            updatedAt: new Date().toISOString(),
          },
        })),

      removeEducation: (id) =>
        set((state) => ({
          cv: {
            ...state.cv,
            education: state.cv.education.filter((e) => e.id !== id),
            updatedAt: new Date().toISOString(),
          },
        })),

      addExperience: (experience) =>
        set((state) => ({
          cv: {
            ...state.cv,
            experience: [
              ...state.cv.experience,
              {
                id: generateId(),
                company: '',
                position: '',
                startDate: '',
                endDate: '',
                description: '',
                visible: true,
                ...experience,
              },
            ],
            updatedAt: new Date().toISOString(),
          },
        })),

      updateExperience: (id, experience) =>
        set((state) => ({
          cv: {
            ...state.cv,
            experience: state.cv.experience.map((e) =>
              e.id === id ? { ...e, ...experience } : e
            ),
            updatedAt: new Date().toISOString(),
          },
        })),

      removeExperience: (id) =>
        set((state) => ({
          cv: {
            ...state.cv,
            experience: state.cv.experience.filter((e) => e.id !== id),
            updatedAt: new Date().toISOString(),
          },
        })),

      addProject: (project) =>
        set((state) => ({
          cv: {
            ...state.cv,
            projects: [
              ...state.cv.projects,
              {
                id: generateId(),
                name: '',
                role: '',
                startDate: '',
                endDate: '',
                description: '',
                visible: true,
                ...project,
              },
            ],
            updatedAt: new Date().toISOString(),
          },
        })),

      updateProject: (id, project) =>
        set((state) => ({
          cv: {
            ...state.cv,
            projects: state.cv.projects.map((p) =>
              p.id === id ? { ...p, ...project } : p
            ),
            updatedAt: new Date().toISOString(),
          },
        })),

      removeProject: (id) =>
        set((state) => ({
          cv: {
            ...state.cv,
            projects: state.cv.projects.filter((p) => p.id !== id),
            updatedAt: new Date().toISOString(),
          },
        })),

      updateSkills: (skills) =>
        set((state) => ({
          cv: {
            ...state.cv,
            skills,
            updatedAt: new Date().toISOString(),
          },
        })),

      updateSummary: (summary) =>
        set((state) => ({
          cv: {
            ...state.cv,
            summary,
            updatedAt: new Date().toISOString(),
          },
        })),

      clearSummary: () =>
        set((state) => ({
          cv: {
            ...state.cv,
            summary: '',
            updatedAt: new Date().toISOString(),
          },
        })),

      toggleSection: (sectionId) =>
        set((state) => ({
          cv: {
            ...state.cv,
            sections: state.cv.sections.map((s) =>
              s.id === sectionId ? { ...s, enabled: !s.enabled } : s
            ),
            updatedAt: new Date().toISOString(),
          },
        })),

      reorderSections: (sections) =>
        set((state) => ({
          cv: {
            ...state.cv,
            sections: sections.map((s, i) => ({ ...s, order: i })),
            updatedAt: new Date().toISOString(),
          },
        })),

      resetSectionsOrder: () =>
        set((state) => ({
          cv: {
            ...state.cv,
            sections: defaultCVData.sections.map((s) => ({
              ...s,
              id: generateId(),
            })),
            updatedAt: new Date().toISOString(),
          },
        })),

      setActiveSection: (section) => set({ activeSection: section }),

      setCVData: (cv) => set({ cv }),

      reset: () =>
        set({
          cv: {
            ...defaultCVData,
            id: generateId(),
            createdAt: new Date().toISOString(),
          },
          activeSection: 'experience',
        }),
    }),
    {
      name: 'cv-builder-data',
    }
  )
);
