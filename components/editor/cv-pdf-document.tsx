'use client';

import {
  Document,
  Link as PdfLink,
  Page,
  StyleSheet,
  Text,
  View,
} from '@react-pdf/renderer';
import type { CVData, Section } from '@/types/cv';

const styles = StyleSheet.create({
  page: {
    padding: 32,
    fontSize: 10,
    fontFamily: 'Helvetica',
    color: '#111827',
  },
  header: {
    marginBottom: 16,
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#e5e7eb',
  },
  name: {
    fontSize: 20,
    fontWeight: 700,
  },
  title: {
    fontSize: 12,
    marginTop: 4,
  },
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 6,
  },
  rowItem: {
    marginRight: 10,
    marginTop: 2,
  },
  link: {
    color: '#2563eb',
    textDecoration: 'none',
  },
  section: {
    marginBottom: 14,
  },
  sectionTitle: {
    fontSize: 11,
    fontWeight: 700,
    marginBottom: 6,
    textTransform: 'uppercase',
  },
  item: {
    marginBottom: 8,
  },
  itemHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  itemTitle: {
    fontSize: 11,
    fontWeight: 700,
  },
  itemSubtitle: {
    fontSize: 10,
    marginTop: 2,
  },
  date: {
    fontSize: 10,
    color: '#4b5563',
    marginLeft: 8,
  },
  paragraph: {
    fontSize: 10,
    lineHeight: 1.4,
  },
  bulletRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 2,
  },
  bulletMarker: {
    fontSize: 10,
    marginRight: 4,
    lineHeight: 1.4,
  },
  bulletText: {
    fontSize: 10,
    lineHeight: 1.4,
    flex: 1,
  },
});

const platformLabels = {
  linkedin: 'LinkedIn',
  github: 'GitHub',
  twitter: 'Twitter',
  portfolio: 'Portfolio',
  other: 'Link',
} as const;

const stripHtml = (value?: string) => {
  if (!value) return '';
  return value
    .replace(/<[^>]*>/g, ' ')
    .replace(/&nbsp;/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
};

const extractPoints = (value?: string) => {
  if (!value) return [];

  const matches = Array.from(value.matchAll(/<li[^>]*>(.*?)<\/li>/gis));
  if (matches.length > 0) {
    return matches.map((match) => stripHtml(match[1])).filter(Boolean);
  }

  const text = stripHtml(value);
  return text ? [text] : [];
};

const formatDateRange = (start?: string, end?: string) => {
  const startDate = start?.trim();
  const endDate = end?.trim();
  if (!startDate && !endDate) return '';
  if (startDate && endDate) return `${startDate} - ${endDate}`;
  return startDate || endDate || '';
};

const renderBullets = (points: string[]) => {
  if (points.length === 0) return null;

  return points.map((point, index) => (
    <View key={`${point}-${index}`} style={styles.bulletRow}>
      <Text style={styles.bulletMarker}>•</Text>
      <Text style={styles.bulletText}>{point}</Text>
    </View>
  ));
};

const renderSection = (section: Section, cv: CVData) => {
  const visibleExperience = cv.experience.filter((item) => item.visible);
  const visibleEducation = cv.education.filter((item) => item.visible);
  const visibleProjects = cv.projects.filter((item) => item.visible);
  const hasSummary = !!cv.summary?.trim();
  const skillPoints = extractPoints(cv.skills);

  switch (section.type) {
    case 'experience':
      if (visibleExperience.length === 0) return null;

      return (
        <View key={section.id} style={styles.section}>
          <Text style={styles.sectionTitle}>{section.title}</Text>
          {visibleExperience.map((exp) => (
            <View key={exp.id} style={styles.item}>
              <View style={styles.itemHeader}>
                <View style={{ flex: 1 }}>
                  <Text style={styles.itemTitle}>
                    {exp.company || 'Company Name'}
                  </Text>
                  {exp.position && (
                    <Text style={styles.itemSubtitle}>{exp.position}</Text>
                  )}
                </View>
                {formatDateRange(exp.startDate, exp.endDate) && (
                  <Text style={styles.date}>
                    {formatDateRange(exp.startDate, exp.endDate)}
                  </Text>
                )}
              </View>
              {renderBullets(extractPoints(exp.description))}
            </View>
          ))}
        </View>
      );

    case 'education':
      if (visibleEducation.length === 0) return null;

      return (
        <View key={section.id} style={styles.section}>
          <Text style={styles.sectionTitle}>{section.title}</Text>
          {visibleEducation.map((edu) => (
            <View key={edu.id} style={styles.item}>
              <View style={styles.itemHeader}>
                <View style={{ flex: 1 }}>
                  <Text style={styles.itemTitle}>
                    {edu.institution || 'Institution'}
                  </Text>
                  {(edu.degree || edu.field) && (
                    <Text style={styles.itemSubtitle}>
                      {[edu.degree, edu.field].filter(Boolean).join(' • ')}
                    </Text>
                  )}
                </View>
                {formatDateRange(edu.startDate, edu.endDate) && (
                  <Text style={styles.date}>
                    {formatDateRange(edu.startDate, edu.endDate)}
                  </Text>
                )}
              </View>
              {renderBullets(extractPoints(edu.description))}
            </View>
          ))}
        </View>
      );

    case 'projects':
      if (visibleProjects.length === 0) return null;

      return (
        <View key={section.id} style={styles.section}>
          <Text style={styles.sectionTitle}>{section.title}</Text>
          {visibleProjects.map((project) => (
            <View key={project.id} style={styles.item}>
              <View style={styles.itemHeader}>
                <View style={{ flex: 1 }}>
                  <Text style={styles.itemTitle}>
                    {project.name || 'Project'}
                  </Text>
                  {project.role && (
                    <Text style={styles.itemSubtitle}>{project.role}</Text>
                  )}
                  {project.link && (
                    <PdfLink
                      src={project.link}
                      style={[styles.itemSubtitle, styles.link]}
                    >
                      {project.link}
                    </PdfLink>
                  )}
                </View>
                {formatDateRange(project.startDate, project.endDate) && (
                  <Text style={styles.date}>
                    {formatDateRange(project.startDate, project.endDate)}
                  </Text>
                )}
              </View>
              {renderBullets(extractPoints(project.description))}
            </View>
          ))}
        </View>
      );

    case 'skills':
      if (skillPoints.length === 0) return null;

      return (
        <View key={section.id} style={styles.section}>
          <Text style={styles.sectionTitle}>{section.title}</Text>
          {renderBullets(skillPoints)}
        </View>
      );

    case 'summary':
      if (!hasSummary) return null;

      return (
        <View key={section.id} style={styles.section}>
          <Text style={styles.sectionTitle}>{section.title}</Text>
          <Text style={styles.paragraph}>{stripHtml(cv.summary)}</Text>
        </View>
      );

    default:
      return null;
  }
};

interface CVPDFDocumentProps {
  cv: CVData;
}

export function CVPDFDocument({ cv }: CVPDFDocumentProps) {
  const { personalInfo, sections } = cv;
  const orderedSections = sections
    .filter((s) => s.enabled)
    .sort((a, b) => a.order - b.order);

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.header}>
          <Text style={styles.name}>{personalInfo.name || 'Your Name'}</Text>
          {personalInfo.title && (
            <Text style={styles.title}>{personalInfo.title}</Text>
          )}

          <View style={styles.row}>
            {personalInfo.email && (
              <Text style={styles.rowItem}>{personalInfo.email}</Text>
            )}
            {personalInfo.phone && (
              <Text style={styles.rowItem}>{personalInfo.phone}</Text>
            )}
            {personalInfo.location && (
              <Text style={styles.rowItem}>{personalInfo.location}</Text>
            )}
          </View>

          {personalInfo.socialLinks && personalInfo.socialLinks.length > 0 && (
            <View style={styles.row}>
              {personalInfo.socialLinks.map((link) => (
                <PdfLink
                  key={link.id}
                  src={link.url}
                  style={[styles.rowItem, styles.link]}
                >
                  {platformLabels[link.platform]}
                </PdfLink>
              ))}
            </View>
          )}
        </View>

        {orderedSections.map((section) => renderSection(section, cv))}
      </Page>
    </Document>
  );
}
