
import {
    Page,
    Text,
    View,
    Document,
    StyleSheet,
    Link,
    Svg,
    Path,
} from '@react-pdf/renderer';
import type { CVData, Section } from '@/types/cv';

// Register fonts if needed. For now, we use standard Helvetica which is built-in.
// You can register custom fonts like Inter here if strict visual parity is required.

const styles = StyleSheet.create({
    page: {
        padding: '16mm',
        fontFamily: 'Helvetica',
        fontSize: 10,
        lineHeight: 1.4,
        color: '#0f172a',
        backgroundColor: '#ffffff',
    },
    // Header
    header: {
        marginBottom: 20,
        textAlign: 'center',
    },
    headerLeft: { textAlign: 'left' },
    headerRight: { textAlign: 'right' },
    name: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 4,
        color: '#000000',
    },
    title: {
        fontSize: 14,
        color: '#000000',
        marginBottom: 8,
    },
    contactRow: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 12,
        marginTop: 8,
        justifyContent: 'center',
    },
    contactRowLeft: { justifyContent: 'flex-start' },
    contactRowRight: { justifyContent: 'flex-end' },
    contactItem: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 4,
    },
    icon: {
        width: 10,
        height: 10,
    },

    // Sections
    section: {
        marginBottom: 15,
    },
    sectionTitle: {
        fontSize: 10,
        fontWeight: 'bold',
        textTransform: 'uppercase',
        letterSpacing: 1,
        borderBottomWidth: 0.5,
        borderBottomColor: '#000000',
        paddingBottom: 4,
        marginBottom: 8,
        color: '#000000',
    },

    // Content Items
    itemHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        marginBottom: 2,
    },
    itemTitleContainer: {
        flex: 1,
        marginRight: 10,
    },
    itemTitle: {
        fontWeight: 'bold',
        color: '#000000',
    },
    itemSubtitle: {
        fontWeight: 'medium', // Helvetica doesn't strictly have medium, fallback to normal or bold
        color: '#000000',
    },
    date: {
        fontSize: 9,
        fontStyle: 'italic', // Often looks better for dates
        color: '#000000',
        flexShrink: 0,
    },
    description: {
        marginTop: 2,
        fontSize: 9,
    },

    // Lists (HTML emulation)
    ul: {
        marginTop: 2,
        paddingLeft: 10,
    },
    li: {
        flexDirection: 'row',
        marginBottom: 2,
    },
    bullet: {
        width: 10,
        marginRight: 2,
    },
});

// Helper for Icons
const Icon = ({ path }: { path: string }) => (
    <Svg viewBox="0 0 24 24" style={styles.icon}>
        <Path d={path} fill="none" stroke="#000000" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
    </Svg>
);

const Icons = {
    mail: "M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z M22 6l-10 7L2 6",
    phone: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",
    mapPin: "M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z M12 10a3 3 0 1 0 0-6 3 3 0 0 0 0 6z",
    linkedin: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z M2 9h4v12H2z M4 4a2 2 0 1 1-2 2 2 2 0 0 1 2-2z",
    github: "M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22",
    twitter: "M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z",
    globe: "M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20z M2 12h20 M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z",
    link: "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71 M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71",
    portfolio: "M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20z M2 12h20 M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z",
    other: "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71 M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71",
};

type IconKey = keyof typeof Icons;

// Simple HTML -> Text Parser
// Handles <ul>, <li>, <p>, <br>, <strong>
const HtmlText = ({ html }: { html: string }) => {
    if (!html) return null;

    // Simple parser for standard Tiptap output
    // We'll strip tags we don't handle and structure the rest

    // Cleanup common non-visual tags or entities
    const cleanHtml = html
        .replace(/&nbsp;/g, ' ')
        .replace(/<p>/g, '')
        .replace(/<\/p>/g, '\n');

    // Check if it contains a list
    if (cleanHtml.includes('<ul>') || cleanHtml.includes('<li>')) {
        const listItems = cleanHtml.split('<li>').filter(item => item.trim());
        return (
            <View style={styles.ul}>
                {listItems.map((item, index) => {
                    // Cleanup closing tags and </ul>
                    let content = item.replace(/<\/li>/g, '').replace(/<ul>/g, '').replace(/<\/ul>/g, '').trim();
                    if (!content) return null;

                    return (
                        <View key={index} style={styles.li}>
                            <Text style={styles.bullet}>•</Text>
                            <View style={{ flex: 1 }}>
                                {/* Basic inline formatting support could go here for strong/em */}
                                <Text>{content.replace(/<[^>]*>/g, '')}</Text>
                            </View>
                        </View>
                    );
                })}
            </View>
        );
    }

    // Fallback for simple text (stripping tags)
    return <Text style={styles.description}>{cleanHtml.replace(/<[^>]*>/g, '')}</Text>;
};


interface CVDocumentProps {
    cv: CVData;
}

export const CVDocument = ({ cv }: CVDocumentProps) => {
    const { personalInfo, sections } = cv;

    const getHeaderAlignStyle = () => {
        switch (personalInfo.headerAlign) {
            case 'left': return styles.headerLeft;
            case 'right': return styles.headerRight;
            default: return styles.header; // center
        }
    };

    const getContactRowAlignStyle = () => {
        switch (personalInfo.headerAlign) {
            case 'left': return styles.contactRowLeft;
            case 'right': return styles.contactRowRight;
            default: return styles.contactRow; // center
        }
    };

    const sortedSections = sections.filter(s => s.enabled).sort((a, b) => a.order - b.order);

    const ExperienceSection = () => {
        const items = cv.experience.filter(i => i.visible);
        if (!items.length) return null;
        return (
            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Experience</Text>
                {items.map(exp => (
                    <View key={exp.id} style={{ marginBottom: 8 }}>
                        <View style={styles.itemHeader}>
                            <View style={styles.itemTitleContainer}>
                                <Text style={styles.itemTitle}>
                                    {exp.company}
                                    {exp.position ? <Text style={{ fontWeight: 'normal' }}> - {exp.position}</Text> : null}
                                </Text>
                            </View>
                            <Text style={styles.date}>
                                {exp.startDate}
                                {exp.startDate && exp.endDate && ' - '}
                                {exp.endDate}
                            </Text>
                        </View>
                        <HtmlText html={exp.description} />
                    </View>
                ))}
            </View>
        );
    };

    const EducationSection = () => {
        const items = cv.education.filter(i => i.visible);
        if (!items.length) return null;
        return (
            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Education</Text>
                {items.map(edu => (
                    <View key={edu.id} style={{ marginBottom: 8 }}>
                        <View style={styles.itemHeader}>
                            <View style={styles.itemTitleContainer}>
                                <Text style={styles.itemTitle}>{edu.institution}</Text>
                                <Text style={styles.itemSubtitle}>
                                    {edu.degree}
                                    {edu.degree && edu.field && ' in '}
                                    {edu.field}
                                </Text>
                            </View>
                            <Text style={styles.date}>
                                {edu.startDate}
                                {edu.startDate && edu.endDate && ' - '}
                                {edu.endDate}
                            </Text>
                        </View>
                        <HtmlText html={edu.description} />
                    </View>
                ))}
            </View>
        );
    };

    const ProjectsSection = () => {
        const items = cv.projects.filter(i => i.visible);
        if (!items.length) return null;
        return (
            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Projects</Text>
                {items.map(proj => (
                    <View key={proj.id} style={{ marginBottom: 8 }}>
                        <View style={styles.itemHeader}>
                            <View style={styles.itemTitleContainer}>
                                <Text style={styles.itemTitle}>
                                    {proj.name}
                                    {proj.link && (
                                        <Link src={proj.link} style={{ fontSize: 9, color: '#2563eb', marginLeft: 4, textDecoration: 'none' }}>
                                            [Link]
                                        </Link>
                                    )}
                                </Text>
                                {proj.role && <Text style={styles.itemSubtitle}>{proj.role}</Text>}
                            </View>
                            <Text style={styles.date}>
                                {proj.startDate}
                                {proj.startDate && proj.endDate && ' - '}
                                {proj.endDate}
                            </Text>
                        </View>
                        <HtmlText html={proj.description} />
                    </View>
                ))}
            </View>
        );
    };

    const SkillsSection = () => {
        if (!cv.skills) return null;
        return (
            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Skills</Text>
                <HtmlText html={cv.skills} />
            </View>
        );
    };

    const SummarySection = () => {
        if (!cv.summary) return null;
        return (
            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Professional Summary</Text>
                <Text style={styles.description}>{cv.summary}</Text>
            </View>
        );
    };

    const renderSection = (section: Section) => {
        switch (section.type) {
            case 'experience': return <ExperienceSection key={section.id} />;
            case 'education': return <EducationSection key={section.id} />;
            case 'projects': return <ProjectsSection key={section.id} />;
            case 'skills': return <SkillsSection key={section.id} />;
            case 'summary': return <SummarySection key={section.id} />;
            default: return null;
        }
    };

    return (
        <Document>
            <Page size="A4" style={styles.page}>
                <View style={[styles.header, getHeaderAlignStyle()]}>
                    <Text style={styles.name}>{personalInfo.name}</Text>
                    <Text style={styles.title}>{personalInfo.title}</Text>

                    <View style={[styles.contactRow, getContactRowAlignStyle()]}>
                        {personalInfo.email && (
                            <View style={styles.contactItem}>
                                <Icon path={Icons.mail} />
                                <Text>{personalInfo.email}</Text>
                            </View>
                        )}
                        {personalInfo.phone && (
                            <View style={styles.contactItem}>
                                <Icon path={Icons.phone} />
                                <Text>{personalInfo.phone}</Text>
                            </View>
                        )}
                        {personalInfo.location && (
                            <View style={styles.contactItem}>
                                <Icon path={Icons.mapPin} />
                                <Text>{personalInfo.location}</Text>
                            </View>
                        )}
                    </View>

                    <View style={[styles.contactRow, getContactRowAlignStyle()]}>
                        {personalInfo.socialLinks.map(link => {
                            const platform = link.platform as IconKey;
                            const iconPath = Icons[platform] || Icons.link;
                            return (
                                <Link key={link.id} src={link.url} style={{ textDecoration: 'none', color: '#000000' }}>
                                    <View style={styles.contactItem}>
                                        <Icon path={iconPath} />
                                        <Text>{link.platform}</Text>
                                    </View>
                                </Link>
                            );
                        })}
                    </View>
                </View>

                {sortedSections.map(renderSection)}
            </Page>
        </Document>
    );
};
