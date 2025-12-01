import { describe, test, expect, beforeEach } from 'vitest';
import { useCVStore } from './cv-store';
import type { Education, Experience, Project, SocialLink } from '@/types/cv';

describe('CV Store - Personal Info', () => {
  beforeEach(() => {
    useCVStore.getState().reset();
  });

  test('should update personal info', () => {
    const newInfo = {
      name: 'John Smith',
      email: 'john.smith@example.com',
    };

    useCVStore.getState().updatePersonalInfo(newInfo);

    const state = useCVStore.getState();
    expect(state.cv.personalInfo.name).toBe('John Smith');
    expect(state.cv.personalInfo.email).toBe('john.smith@example.com');
  });

  test('should persist personal info updates to localStorage', () => {
    const newInfo = { name: 'Jane Doe' };
    useCVStore.getState().updatePersonalInfo(newInfo);

    const storedData = localStorage.getItem('cv-builder-data');
    expect(storedData).toBeDefined();
    expect(storedData).toContain('Jane Doe');
  });
});

describe('CV Store - Social Links', () => {
  beforeEach(() => {
    useCVStore.getState().reset();
  });

  test('should add a social link', () => {
    const link: Partial<SocialLink> = {
      platform: 'twitter',
      url: 'https://twitter.com/johndoe',
    };

    useCVStore.getState().addSocialLink(link);

    const state = useCVStore.getState();
    const socialLinks = state.cv.personalInfo.socialLinks;

    expect(socialLinks).toHaveLength(3);
    const twitterLink = socialLinks.find((l) => l.platform === 'twitter');
    expect(twitterLink).toBeDefined();
    expect(twitterLink?.url).toBe('https://twitter.com/johndoe');
  });

  test('should update a social link', () => {
    const state = useCVStore.getState();
    const firstLink = state.cv.personalInfo.socialLinks[0];

    if (!firstLink) throw new Error('No social links found');

    useCVStore.getState().updateSocialLink(firstLink.id, {
      url: 'https://linkedin.com/in/updated',
    });

    const updatedState = useCVStore.getState();
    const updatedLink = updatedState.cv.personalInfo.socialLinks.find(
      (l) => l.id === firstLink.id
    );

    expect(updatedLink?.url).toBe('https://linkedin.com/in/updated');
  });

  test('should remove a social link', () => {
    const state = useCVStore.getState();
    const initialCount = state.cv.personalInfo.socialLinks.length;
    const firstLink = state.cv.personalInfo.socialLinks[0];

    if (!firstLink) throw new Error('No social links found');

    useCVStore.getState().removeSocialLink(firstLink.id);

    const updatedState = useCVStore.getState();
    expect(updatedState.cv.personalInfo.socialLinks).toHaveLength(
      initialCount - 1
    );
    expect(
      updatedState.cv.personalInfo.socialLinks.find(
        (l) => l.id === firstLink.id
      )
    ).toBeUndefined();
  });
});

describe('CV Store - Education', () => {
  beforeEach(() => {
    useCVStore.getState().reset();
  });

  test('should add education entry', () => {
    const education: Partial<Education> = {
      institution: 'Harvard University',
      degree: 'PhD',
      field: 'Computer Science',
      startDate: '2020',
      endDate: '2024',
    };

    useCVStore.getState().addEducation(education);

    const state = useCVStore.getState();
    expect(state.cv.education).toHaveLength(3);

    const harvardEd = state.cv.education.find(
      (e) => e.institution === 'Harvard University'
    );
    expect(harvardEd).toBeDefined();
    expect(harvardEd?.degree).toBe('PhD');
  });

  test('should update education entry', () => {
    const state = useCVStore.getState();
    const firstEd = state.cv.education[0];

    if (!firstEd) throw new Error('No education found');

    useCVStore.getState().updateEducation(firstEd.id, {
      degree: 'Doctor of Philosophy',
    });

    const updatedState = useCVStore.getState();
    const updatedEd = updatedState.cv.education.find(
      (e) => e.id === firstEd.id
    );

    expect(updatedEd?.degree).toBe('Doctor of Philosophy');
  });

  test('should remove education entry', () => {
    const state = useCVStore.getState();
    const initialCount = state.cv.education.length;
    const firstEd = state.cv.education[0];

    if (!firstEd) throw new Error('No education found');

    useCVStore.getState().removeEducation(firstEd.id);

    const updatedState = useCVStore.getState();
    expect(updatedState.cv.education).toHaveLength(initialCount - 1);
  });
});

describe('CV Store - Experience', () => {
  beforeEach(() => {
    useCVStore.getState().reset();
  });

  test('should add experience entry', () => {
    const experience: Partial<Experience> = {
      company: 'Microsoft',
      position: 'Principal Engineer',
      startDate: '2022',
      endDate: 'Present',
      description: 'Leading cloud infrastructure',
    };

    useCVStore.getState().addExperience(experience);

    const state = useCVStore.getState();
    expect(state.cv.experience).toHaveLength(3);

    const msftExp = state.cv.experience.find((e) => e.company === 'Microsoft');
    expect(msftExp).toBeDefined();
    expect(msftExp?.position).toBe('Principal Engineer');
  });

  test('should update experience entry', () => {
    const state = useCVStore.getState();
    const firstExp = state.cv.experience[0];

    if (!firstExp) throw new Error('No experience found');

    useCVStore.getState().updateExperience(firstExp.id, {
      position: 'Staff Software Engineer',
    });

    const updatedState = useCVStore.getState();
    const updatedExp = updatedState.cv.experience.find(
      (e) => e.id === firstExp.id
    );

    expect(updatedExp?.position).toBe('Staff Software Engineer');
  });

  test('should remove experience entry', () => {
    const state = useCVStore.getState();
    const initialCount = state.cv.experience.length;
    const firstExp = state.cv.experience[0];

    if (!firstExp) throw new Error('No experience found');

    useCVStore.getState().removeExperience(firstExp.id);

    const updatedState = useCVStore.getState();
    expect(updatedState.cv.experience).toHaveLength(initialCount - 1);
  });
});

describe('CV Store - Projects', () => {
  beforeEach(() => {
    useCVStore.getState().reset();
  });

  test('should add project entry', () => {
    const project: Partial<Project> = {
      name: 'Machine Learning Framework',
      role: 'Core Contributor',
      startDate: '2021',
      endDate: '2023',
      description: 'Built ML training pipeline',
    };

    useCVStore.getState().addProject(project);

    const state = useCVStore.getState();
    expect(state.cv.projects).toHaveLength(3);

    const mlProject = state.cv.projects.find(
      (p) => p.name === 'Machine Learning Framework'
    );
    expect(mlProject).toBeDefined();
    expect(mlProject?.role).toBe('Core Contributor');
  });

  test('should update project entry', () => {
    const state = useCVStore.getState();
    const firstProject = state.cv.projects[0];

    if (!firstProject) throw new Error('No projects found');

    useCVStore.getState().updateProject(firstProject.id, {
      role: 'Lead Maintainer',
    });

    const updatedState = useCVStore.getState();
    const updatedProject = updatedState.cv.projects.find(
      (p) => p.id === firstProject.id
    );

    expect(updatedProject?.role).toBe('Lead Maintainer');
  });

  test('should remove project entry', () => {
    const state = useCVStore.getState();
    const initialCount = state.cv.projects.length;
    const firstProject = state.cv.projects[0];

    if (!firstProject) throw new Error('No projects found');

    useCVStore.getState().removeProject(firstProject.id);

    const updatedState = useCVStore.getState();
    expect(updatedState.cv.projects).toHaveLength(initialCount - 1);
  });
});

describe('CV Store - Skills and Summary', () => {
  beforeEach(() => {
    useCVStore.getState().reset();
  });

  test('should update skills', () => {
    const newSkills = '<ul><li>Python</li><li>Go</li></ul>';

    useCVStore.getState().updateSkills(newSkills);

    const state = useCVStore.getState();
    expect(state.cv.skills).toBe(newSkills);
  });

  test('should update summary', () => {
    const newSummary = 'A passionate developer with 10+ years of experience';

    useCVStore.getState().updateSummary(newSummary);

    const state = useCVStore.getState();
    expect(state.cv.summary).toBe(newSummary);
  });

  test('should clear summary', () => {
    useCVStore.getState().updateSummary('Some summary');
    useCVStore.getState().clearSummary();

    const state = useCVStore.getState();
    expect(state.cv.summary).toBe('');
  });
});

describe('CV Store - Sections', () => {
  beforeEach(() => {
    useCVStore.getState().reset();
  });

  test('should toggle section visibility', () => {
    const state = useCVStore.getState();
    const skillsSection = state.cv.sections.find((s) => s.type === 'skills');

    if (!skillsSection) throw new Error('Skills section not found');

    const initialEnabled = skillsSection.enabled;
    useCVStore.getState().toggleSection(skillsSection.id);

    const updatedState = useCVStore.getState();
    const updatedSection = updatedState.cv.sections.find(
      (s) => s.id === skillsSection.id
    );

    expect(updatedSection?.enabled).toBe(!initialEnabled);
  });

  test('should reorder sections', () => {
    const state = useCVStore.getState();
    const sections = [...state.cv.sections];

    const reorderedSections = sections.reverse().map((s, index) => ({
      ...s,
      order: index,
    }));

    useCVStore.getState().reorderSections(reorderedSections);

    const updatedState = useCVStore.getState();
    expect(updatedState.cv.sections).toEqual(reorderedSections);
  });
});

describe('CV Store - Active Section', () => {
  beforeEach(() => {
    useCVStore.getState().reset();
  });

  test('should set active section', () => {
    useCVStore.getState().setActiveSection('education');

    const state = useCVStore.getState();
    expect(state.activeSection).toBe('education');
  });

  test('should clear active section', () => {
    useCVStore.getState().setActiveSection('projects');
    useCVStore.getState().setActiveSection(null);

    const state = useCVStore.getState();
    expect(state.activeSection).toBeNull();
  });
});

describe('CV Store - Persistence', () => {
  beforeEach(() => {
    localStorage.clear();
    useCVStore.getState().reset();
  });

  test('should persist state to localStorage', () => {
    useCVStore.getState().updatePersonalInfo({ name: 'Test User' });

    const stored = localStorage.getItem('cv-builder-data');
    expect(stored).toBeDefined();

    if (stored) {
      const parsed = JSON.parse(stored);
      expect(parsed.state.cv.personalInfo.name).toBe('Test User');
    }
  });

  test('should update localStorage on multiple changes', () => {
    useCVStore.getState().updatePersonalInfo({ name: 'User One' });
    useCVStore.getState().updateSkills('JavaScript, TypeScript');

    const stored = localStorage.getItem('cv-builder-data');
    expect(stored).toBeDefined();

    if (stored) {
      const parsed = JSON.parse(stored);
      expect(parsed.state.cv.personalInfo.name).toBe('User One');
      expect(parsed.state.cv.skills).toContain('JavaScript');
    }
  });
});

describe('CV Store - Reset', () => {
  beforeEach(() => {
    useCVStore.getState().reset();
  });

  test('should reset store to default state', () => {
    useCVStore.getState().updatePersonalInfo({ name: 'Changed Name' });
    useCVStore.getState().updateSkills('New skills');
    useCVStore.getState().setActiveSection('projects');

    useCVStore.getState().reset();

    const state = useCVStore.getState();
    expect(state.cv.personalInfo.name).toBe('Jane Doe');
    expect(state.activeSection).toBe('experience');
  });
});
