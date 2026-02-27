// ---------------------------------------------------------------------------
// Resume template data for programmatic SEO pages.
// Each template represents a style/design category users search for.
// ---------------------------------------------------------------------------

export interface ResumeTemplate {
  slug: string;
  name: string;
  category: string;
  description: string;
  bestFor: string[];
  features: string[];
  atsScore: string;
  tone: string;
  sections: string[];
  tips: string[];
  faqItems: Array<{ question: string; answer: string }>;
  relatedTemplates: string[];
}

export const resumeTemplates: ResumeTemplate[] = [
  {
    slug: 'professional-resume-template',
    name: 'Professional Resume Template',
    category: 'Classic',
    description:
      'A clean, traditional resume template designed for corporate environments and professional roles. Features a structured layout with clear section headers, consistent formatting, and plenty of white space for easy scanning by hiring managers and ATS systems alike.',
    bestFor: [
      'Corporate jobs',
      'Finance & banking',
      'Management positions',
      'Government roles',
      'Traditional industries',
    ],
    features: [
      'Clean single-column layout',
      'Bold section headers',
      'Professional serif or sans-serif fonts',
      'Ample white space',
      'ATS-optimized structure',
    ],
    atsScore: '98/100',
    tone: 'Formal and authoritative',
    sections: [
      'Professional Summary',
      'Work Experience',
      'Education',
      'Skills',
      'Certifications',
    ],
    tips: [
      'Keep to one page if you have less than 10 years of experience',
      'Use consistent date formatting throughout (e.g., Jan 2024 – Present)',
      'Lead each bullet point with a strong action verb',
      'Quantify achievements with specific numbers and percentages',
      'Tailor the professional summary to each job application',
    ],
    faqItems: [
      {
        question: 'Is a professional resume template ATS-friendly?',
        answer:
          'Yes. Professional templates with single-column layouts and standard section headers are among the most ATS-compatible formats. They avoid graphics, tables, and multi-column designs that can confuse parsing software.',
      },
      {
        question: 'When should I use a professional resume template?',
        answer:
          'Use a professional template when applying to corporate positions, banks, law firms, government agencies, or any traditional industry where a conservative appearance is valued.',
      },
      {
        question: 'Can I customize this template with Magic Resume?',
        answer:
          'Absolutely. Magic Resume lets you adjust fonts, colors, spacing, and section order while maintaining ATS compatibility. Use the real-time preview to see changes instantly.',
      },
    ],
    relatedTemplates: [
      'modern-resume-template',
      'executive-resume-template',
      'ats-friendly-resume-template',
    ],
  },
  {
    slug: 'modern-resume-template',
    name: 'Modern Resume Template',
    category: 'Modern',
    description:
      'A contemporary resume design that balances visual appeal with ATS compatibility. Features subtle color accents, modern typography, and a streamlined layout that stands out while remaining professional and easy to read.',
    bestFor: [
      'Tech companies',
      'Startups',
      'Marketing roles',
      'Product management',
      'Mid-career professionals',
    ],
    features: [
      'Subtle color accents',
      'Modern sans-serif typography',
      'Skills visualization',
      'Clean section dividers',
      'Balanced use of space',
    ],
    atsScore: '95/100',
    tone: 'Contemporary and polished',
    sections: [
      'Professional Summary',
      'Experience',
      'Skills & Technologies',
      'Education',
      'Projects',
    ],
    tips: [
      'Choose one accent color that matches the company brand if possible',
      'Use skill categories to organize technical and soft skills separately',
      'Include relevant project links or portfolio URLs',
      'Keep the design clean — avoid overusing color or decorative elements',
      'Test your resume with ATS software before submitting',
    ],
    faqItems: [
      {
        question: 'Are modern resume templates ATS-friendly?',
        answer:
          'Most modern templates are ATS-friendly as long as they use a single-column layout and standard section headers. Avoid templates with heavy graphics, icons inside text areas, or multi-column designs.',
      },
      {
        question: 'What industries prefer modern resume templates?',
        answer:
          'Technology, marketing, design, startups, and creative agencies tend to prefer modern templates. They signal that you are current and adaptable while maintaining professionalism.',
      },
      {
        question: 'How is a modern template different from a creative template?',
        answer:
          'Modern templates use subtle design elements like color accents and clean typography while maintaining a traditional structure. Creative templates may use unconventional layouts, heavy graphics, and visual portfolios.',
      },
    ],
    relatedTemplates: [
      'professional-resume-template',
      'minimal-resume-template',
      'tech-resume-template',
    ],
  },
  {
    slug: 'minimal-resume-template',
    name: 'Minimalist Resume Template',
    category: 'Modern',
    description:
      'A stripped-down, content-focused resume template that puts your achievements front and center. Zero distractions — just clean typography, generous margins, and a logical hierarchy that makes it effortless for recruiters to find what they need.',
    bestFor: [
      'Any industry',
      'ATS-heavy applications',
      'Career changers',
      'Entry-level candidates',
      'Academic positions',
    ],
    features: [
      'Maximum content space',
      'No decorative elements',
      'Clear hierarchy',
      'Easy to scan',
      'Universal compatibility',
    ],
    atsScore: '99/100',
    tone: 'Clean and direct',
    sections: [
      'Summary',
      'Experience',
      'Education',
      'Skills',
      'Additional Information',
    ],
    tips: [
      'Let your content do the talking — every word should earn its place',
      'Use bold and italic sparingly for emphasis on key achievements',
      'Maintain consistent spacing between sections',
      'This template works best when your content is strong and specific',
      'Ideal for one-page resumes — prioritize your most relevant experience',
    ],
    faqItems: [
      {
        question: 'Is a minimalist resume template good for ATS?',
        answer:
          'Minimalist templates are among the best for ATS compatibility. With no graphics, tables, or complex formatting, every piece of information is easily parsed by applicant tracking systems.',
      },
      {
        question: 'Will a minimalist resume stand out to hiring managers?',
        answer:
          'Yes — in a sea of over-designed resumes, a clean minimalist template that is well-written and achievement-focused actually stands out. Hiring managers spend 6-7 seconds on initial review, and minimal designs make that time count.',
      },
      {
        question: 'Who should use a minimalist resume template?',
        answer:
          'Anyone who wants maximum ATS compatibility and a clean look. It is especially good for entry-level candidates, career changers, and anyone applying to companies known to use ATS software heavily.',
      },
    ],
    relatedTemplates: [
      'professional-resume-template',
      'ats-friendly-resume-template',
      'simple-resume-template',
    ],
  },
  {
    slug: 'creative-resume-template',
    name: 'Creative Resume Template',
    category: 'Creative',
    description:
      'A visually distinctive resume template designed for creative professionals who need to showcase their design sensibility alongside their qualifications. Features thoughtful use of color, typography, and layout to make a memorable impression.',
    bestFor: [
      'Graphic designers',
      'UX/UI designers',
      'Marketing creatives',
      'Art directors',
      'Content creators',
    ],
    features: [
      'Bold color palette',
      'Creative typography',
      'Visual skill indicators',
      'Sidebar layout option',
      'Portfolio link section',
    ],
    atsScore: '75/100',
    tone: 'Bold and expressive',
    sections: [
      'Profile',
      'Experience',
      'Skills & Expertise',
      'Education',
      'Portfolio & Projects',
    ],
    tips: [
      'Always have an ATS-friendly version as backup for online applications',
      'Use this template when emailing directly or submitting via portfolio',
      'Showcase your design taste without overwhelming the content',
      'Include links to your portfolio, Behance, or Dribbble',
      'Keep the content itself concise — let the design carry the creative message',
    ],
    faqItems: [
      {
        question: 'Can I use a creative resume template for ATS applications?',
        answer:
          'Creative templates may have lower ATS compatibility due to visual elements. We recommend using an ATS-friendly version for online applications and the creative version for direct submissions, networking events, or portfolio presentations.',
      },
      {
        question: 'What roles benefit from a creative resume template?',
        answer:
          'Graphic designers, UX/UI designers, art directors, creative directors, marketing creatives, and other visual professionals benefit from showing their design sensibility through their resume format.',
      },
      {
        question: 'How creative is too creative for a resume?',
        answer:
          'Your resume should still be readable and professional. The rule of thumb: if a hiring manager cannot find your job title, company name, and dates within 3 seconds, the design is too creative.',
      },
    ],
    relatedTemplates: [
      'modern-resume-template',
      'designer-resume-template',
      'portfolio-resume-template',
    ],
  },
  {
    slug: 'ats-friendly-resume-template',
    name: 'ATS-Friendly Resume Template',
    category: 'Classic',
    description:
      'Specifically engineered to pass Applicant Tracking Systems with a perfect score. Uses standard section headers, a single-column layout, and machine-readable formatting. No graphics, icons, or design elements that could confuse ATS parsers.',
    bestFor: [
      'Online job applications',
      'Large companies',
      'Government positions',
      'Any ATS-filtered application',
      'Job boards',
    ],
    features: [
      'Perfect ATS parsing',
      'Standard section headers',
      'Single-column layout',
      'Machine-readable fonts',
      'Keyword-optimized structure',
    ],
    atsScore: '100/100',
    tone: 'Straightforward and efficient',
    sections: [
      'Professional Summary',
      'Work Experience',
      'Education',
      'Skills',
      'Certifications',
    ],
    tips: [
      'Mirror keywords from the job description in your skills and experience sections',
      'Use standard section headers like Work Experience, Education, and Skills',
      'Avoid headers, footers, text boxes, and tables',
      'Spell out acronyms at least once (e.g., Search Engine Optimization (SEO))',
      'Save as PDF unless the application specifically requests .docx',
    ],
    faqItems: [
      {
        question: 'What makes a resume template ATS-friendly?',
        answer:
          'An ATS-friendly template uses a single-column layout, standard section headers (Work Experience, Education, Skills), simple formatting, and no graphics or tables. This ensures ATS software can correctly parse and index your information.',
      },
      {
        question: 'Do I need an ATS-friendly resume in 2026?',
        answer:
          'Yes. Over 75% of resumes are screened by ATS before reaching a human. Even at smaller companies, most use some form of applicant tracking. An ATS-friendly format ensures your resume makes it past the first filter.',
      },
      {
        question: 'Can an ATS-friendly resume still look good?',
        answer:
          'Absolutely. ATS-friendly does not mean ugly. Clean typography, consistent spacing, and strategic use of bold text create a professional appearance that both ATS software and humans appreciate.',
      },
    ],
    relatedTemplates: [
      'minimal-resume-template',
      'professional-resume-template',
      'simple-resume-template',
    ],
  },
  {
    slug: 'executive-resume-template',
    name: 'Executive Resume Template',
    category: 'Classic',
    description:
      'A premium resume template designed for C-suite executives, VPs, and senior leaders. Emphasizes strategic achievements, leadership impact, and career progression with a sophisticated, authoritative design that commands attention.',
    bestFor: [
      'C-suite executives',
      'VPs and directors',
      'Senior managers',
      'Board-level candidates',
      'Executive recruiters',
    ],
    features: [
      'Executive summary section',
      'Key achievements highlight',
      'Leadership impact metrics',
      'Board and advisory roles',
      'Two-page professional layout',
    ],
    atsScore: '95/100',
    tone: 'Authoritative and strategic',
    sections: [
      'Executive Summary',
      'Key Achievements',
      'Professional Experience',
      'Board & Advisory Roles',
      'Education & Certifications',
    ],
    tips: [
      'Lead with a powerful executive summary that includes revenue impact and team size',
      'Highlight strategic initiatives, not daily tasks',
      'Include board seats, advisory roles, and speaking engagements',
      'Two pages is acceptable and expected at the executive level',
      'Quantify everything: revenue growth, cost savings, team sizes, market share',
    ],
    faqItems: [
      {
        question: 'Should an executive resume be more than one page?',
        answer:
          'Yes. For executives with 15+ years of experience, a two-page resume is standard and expected. Focus the first page on your executive summary and most impactful achievements, with detailed experience on the second page.',
      },
      {
        question: 'What should an executive summary include?',
        answer:
          'An executive summary should include your leadership level, years of experience, industry expertise, biggest quantified achievements (revenue, growth, team size), and the type of role you are targeting.',
      },
      {
        question: 'Do executives need ATS-friendly resumes?',
        answer:
          'For direct outreach to executive recruiters, ATS optimization is less critical. However, many executive roles are still posted on job boards, so having an ATS-friendly version is recommended as a backup.',
      },
    ],
    relatedTemplates: [
      'professional-resume-template',
      'senior-manager-resume-template',
      'ats-friendly-resume-template',
    ],
  },
  {
    slug: 'simple-resume-template',
    name: 'Simple Resume Template',
    category: 'Classic',
    description:
      'A no-frills resume template that is easy to fill out and works for virtually any job. Perfect for those who want to create a professional resume quickly without worrying about design decisions. Clean, readable, and universally appropriate.',
    bestFor: [
      'First-time job seekers',
      'Students and graduates',
      'Career changers',
      'Quick applications',
      'Any industry',
    ],
    features: [
      'Quick to fill out',
      'Universal format',
      'Easy to customize',
      'Works for any industry',
      'Print and digital friendly',
    ],
    atsScore: '97/100',
    tone: 'Approachable and straightforward',
    sections: [
      'Contact Information',
      'Summary or Objective',
      'Work Experience',
      'Education',
      'Skills',
    ],
    tips: [
      'This template works best when you focus on clear, concise content',
      'Use an objective statement if you are entry-level, a summary if experienced',
      'List skills in a simple comma-separated format or short bulleted list',
      'Include relevant coursework or projects if you lack work experience',
      'Proofread carefully — with a simple design, typos stand out more',
    ],
    faqItems: [
      {
        question: 'Is a simple resume template appropriate for experienced professionals?',
        answer:
          'Yes. A simple template lets your experience speak for itself. Many senior professionals prefer simple templates because they are clean, easy to read, and focus attention on achievements rather than design.',
      },
      {
        question: 'What is the difference between a simple and minimalist template?',
        answer:
          'They are similar, but a simple template prioritizes ease of use and quick setup, while a minimalist template is a deliberate design choice emphasizing typography and whitespace. Both are ATS-friendly.',
      },
      {
        question: 'Can I add color to a simple resume template?',
        answer:
          'Yes. A single accent color for headings or your name can add personality without sacrificing the template simplicity. Stick to professional colors like navy, dark teal, or charcoal.',
      },
    ],
    relatedTemplates: [
      'minimal-resume-template',
      'ats-friendly-resume-template',
      'student-resume-template',
    ],
  },
  {
    slug: 'student-resume-template',
    name: 'Student Resume Template',
    category: 'Entry Level',
    description:
      'Designed specifically for college students and recent graduates with limited work experience. Emphasizes education, coursework, projects, extracurricular activities, and transferable skills to help you land your first professional role.',
    bestFor: [
      'College students',
      'Recent graduates',
      'Internship applicants',
      'Part-time job seekers',
      'First-time resume writers',
    ],
    features: [
      'Education-first layout',
      'Projects and coursework section',
      'Extracurricular activities',
      'Transferable skills emphasis',
      'One-page format',
    ],
    atsScore: '96/100',
    tone: 'Enthusiastic and potential-focused',
    sections: [
      'Education',
      'Relevant Coursework',
      'Projects',
      'Experience (including internships)',
      'Skills & Activities',
    ],
    tips: [
      'Place Education at the top since it is your strongest section',
      'Include GPA if it is 3.5 or above — otherwise leave it off',
      'List relevant coursework that matches the job requirements',
      'Include academic projects, especially those with real-world applications',
      'Part-time jobs and volunteer work demonstrate work ethic and soft skills',
    ],
    faqItems: [
      {
        question: 'How do I write a resume with no work experience?',
        answer:
          'Focus on education, academic projects, volunteer work, extracurricular activities, and transferable skills. Frame activities using the same achievement-oriented format as work experience: action verb + what you did + result.',
      },
      {
        question: 'Should students include their GPA on a resume?',
        answer:
          'Include your GPA if it is 3.5 or higher, or if the job posting specifically requests it. You can also list your major GPA if it is significantly higher than your cumulative GPA.',
      },
      {
        question: 'How long should a student resume be?',
        answer:
          'One page. As a student or recent graduate, you should be able to fit all relevant information on a single page. Keeping it concise shows you can prioritize and communicate efficiently.',
      },
    ],
    relatedTemplates: [
      'simple-resume-template',
      'entry-level-resume-template',
      'internship-resume-template',
    ],
  },
  {
    slug: 'tech-resume-template',
    name: 'Tech Resume Template',
    category: 'Industry',
    description:
      'Optimized for software engineers, developers, and tech professionals. Features dedicated sections for technical skills, programming languages, projects, and open source contributions. Designed to pass both ATS filters and technical recruiter reviews.',
    bestFor: [
      'Software engineers',
      'Web developers',
      'Data scientists',
      'DevOps engineers',
      'Tech leads',
    ],
    features: [
      'Technical skills matrix',
      'Projects section with links',
      'GitHub/portfolio integration',
      'Technology tags',
      'ATS-compatible formatting',
    ],
    atsScore: '96/100',
    tone: 'Technical and precise',
    sections: [
      'Summary',
      'Technical Skills',
      'Experience',
      'Projects',
      'Education & Certifications',
    ],
    tips: [
      'List programming languages, frameworks, and tools in a dedicated skills section',
      'Include links to GitHub, portfolio, or live project demos',
      'Describe technical impact: improved load time by 40%, reduced bug count by 60%',
      'Use the exact technology names from the job description',
      'Include open source contributions if you have them',
    ],
    faqItems: [
      {
        question: 'Should I list every programming language I know?',
        answer:
          'List languages you are proficient in and comfortable discussing in an interview. Organize by category (Languages, Frameworks, Tools, Cloud) and put the most relevant ones first.',
      },
      {
        question: 'How important are projects on a tech resume?',
        answer:
          'Very important, especially for junior developers. Projects demonstrate practical skills and initiative. Include 2-3 projects with descriptions, technologies used, and links to live demos or GitHub repos.',
      },
      {
        question: 'Should I include my GitHub profile on my resume?',
        answer:
          'Yes, if you have meaningful contributions. An active GitHub profile with real projects signals passion for coding. If your profile is sparse, focus on building it before adding it to your resume.',
      },
    ],
    relatedTemplates: [
      'modern-resume-template',
      'engineering-resume-template',
      'minimal-resume-template',
    ],
  },
  {
    slug: 'engineering-resume-template',
    name: 'Engineering Resume Template',
    category: 'Industry',
    description:
      'Built for mechanical, civil, electrical, and other engineering disciplines. Highlights technical expertise, certifications, project management experience, and quantified engineering achievements. Structured for both traditional engineering firms and modern tech companies.',
    bestFor: [
      'Mechanical engineers',
      'Civil engineers',
      'Electrical engineers',
      'Chemical engineers',
      'Project engineers',
    ],
    features: [
      'Certifications section',
      'Technical proficiency list',
      'Project highlights',
      'Professional license display',
      'Industry-standard format',
    ],
    atsScore: '97/100',
    tone: 'Technical and results-oriented',
    sections: [
      'Professional Summary',
      'Technical Proficiencies',
      'Professional Experience',
      'Projects',
      'Education & Licenses',
    ],
    tips: [
      'Include your PE license, EIT, or other engineering certifications prominently',
      'Highlight CAD software, simulation tools, and engineering software you use',
      'Quantify project scope: budget managed, team size, timelines met',
      'Include safety record and regulatory compliance experience',
      'Mention relevant codes and standards you work with (ASME, IEEE, etc.)',
    ],
    faqItems: [
      {
        question: 'Should engineers include a PE license on their resume?',
        answer:
          'Absolutely. A Professional Engineer (PE) license is a significant credential. List it next to your name in the header (e.g., John Smith, PE) and in a dedicated certifications section.',
      },
      {
        question: 'How do engineers quantify achievements on a resume?',
        answer:
          'Use metrics like project budget managed ($2.5M), cost savings achieved (reduced material costs by 15%), team size led (12 engineers), timeline performance (delivered 2 weeks ahead of schedule), and safety records.',
      },
      {
        question: 'What technical skills should an engineering resume include?',
        answer:
          'Include CAD software (AutoCAD, SolidWorks, CATIA), simulation tools (ANSYS, MATLAB), project management software, ERP systems, and any industry-specific tools relevant to the role.',
      },
    ],
    relatedTemplates: [
      'tech-resume-template',
      'professional-resume-template',
      'project-manager-resume-template',
    ],
  },
  {
    slug: 'healthcare-resume-template',
    name: 'Healthcare Resume Template',
    category: 'Industry',
    description:
      'Tailored for healthcare professionals including nurses, physicians, therapists, and medical technicians. Emphasizes clinical skills, certifications, licensure, and patient care metrics. Formatted to meet healthcare industry standards.',
    bestFor: [
      'Registered nurses',
      'Physicians',
      'Medical assistants',
      'Therapists',
      'Healthcare administrators',
    ],
    features: [
      'Licensure and certifications',
      'Clinical skills section',
      'Patient care metrics',
      'Continuing education',
      'Compliance-ready format',
    ],
    atsScore: '96/100',
    tone: 'Clinical and compassionate',
    sections: [
      'Professional Summary',
      'Licenses & Certifications',
      'Clinical Experience',
      'Skills',
      'Education & Continuing Education',
    ],
    tips: [
      'List all active licenses with state, license number, and expiration date',
      'Include certifications like BLS, ACLS, PALS prominently',
      'Quantify patient care: patient load, satisfaction scores, outcomes improved',
      'Mention EHR systems you are proficient in (Epic, Cerner, Meditech)',
      'Include relevant continuing education courses and specializations',
    ],
    faqItems: [
      {
        question: 'What certifications should healthcare professionals include on a resume?',
        answer:
          'Include all active certifications relevant to the role: BLS, ACLS, PALS, specialty certifications, and state licenses. List certification body, credential number, and expiration date.',
      },
      {
        question: 'How do nurses quantify achievements on a resume?',
        answer:
          'Use metrics like patient satisfaction scores, patient load managed, reduction in wait times, training of new staff, implementation of protocols, and awards or recognitions received.',
      },
      {
        question: 'Should I include clinical rotations on my healthcare resume?',
        answer:
          'Yes, especially if you are a new graduate. List the facility, unit, duration, and key responsibilities. This demonstrates breadth of clinical exposure.',
      },
    ],
    relatedTemplates: [
      'professional-resume-template',
      'nursing-resume-template',
      'ats-friendly-resume-template',
    ],
  },
  {
    slug: 'sales-resume-template',
    name: 'Sales Resume Template',
    category: 'Industry',
    description:
      'Designed for sales professionals who need to showcase their revenue impact, quota attainment, and client relationships. Features a results-driven format that highlights numbers, rankings, and career progression in sales.',
    bestFor: [
      'Account executives',
      'Sales managers',
      'Business development reps',
      'Sales engineers',
      'Enterprise sales',
    ],
    features: [
      'Revenue metrics highlight',
      'Quota attainment display',
      'Client portfolio summary',
      'Career progression focus',
      'Achievement-oriented layout',
    ],
    atsScore: '95/100',
    tone: 'Results-driven and confident',
    sections: [
      'Professional Summary',
      'Key Achievements',
      'Sales Experience',
      'Skills',
      'Education',
    ],
    tips: [
      'Lead with your biggest revenue numbers in the summary',
      'Include quota attainment percentages (e.g., 142% of quota for 3 consecutive years)',
      'Mention deal sizes, pipeline values, and client retention rates',
      'Highlight awards and rankings (Top 10%, Presidents Club, etc.)',
      'Show career progression from SDR to AE to Manager if applicable',
    ],
    faqItems: [
      {
        question: 'What metrics should sales professionals include on a resume?',
        answer:
          'Include revenue generated, quota attainment percentage, deal size, number of accounts managed, client retention rate, pipeline value, and any sales awards or rankings.',
      },
      {
        question: 'How do I show career progression on a sales resume?',
        answer:
          'List roles in reverse chronological order and highlight promotions. Use phrases like "Promoted from SDR to Account Executive within 8 months" to show upward trajectory.',
      },
      {
        question: 'Should I include my sales methodology on my resume?',
        answer:
          'Yes, if it is relevant to the role. Mentioning experience with MEDDIC, Challenger, SPIN, or Sandler selling can signal alignment with the company sales approach.',
      },
    ],
    relatedTemplates: [
      'professional-resume-template',
      'marketing-resume-template',
      'executive-resume-template',
    ],
  },
  {
    slug: 'marketing-resume-template',
    name: 'Marketing Resume Template',
    category: 'Industry',
    description:
      'Crafted for marketing professionals from digital marketing specialists to CMOs. Showcases campaign results, growth metrics, and strategic thinking with a modern design that reflects marketing sensibility.',
    bestFor: [
      'Marketing managers',
      'Digital marketers',
      'Content marketers',
      'Growth marketers',
      'Brand managers',
    ],
    features: [
      'Campaign metrics display',
      'Channel expertise section',
      'Portfolio/case study links',
      'Brand-aware design',
      'Results-focused layout',
    ],
    atsScore: '94/100',
    tone: 'Strategic and data-driven',
    sections: [
      'Professional Summary',
      'Marketing Experience',
      'Key Campaigns & Results',
      'Skills & Tools',
      'Education & Certifications',
    ],
    tips: [
      'Quantify marketing impact: traffic growth, conversion rates, ROI, CAC, LTV',
      'List marketing tools and platforms (HubSpot, Google Analytics, Semrush, etc.)',
      'Include case study summaries with before and after metrics',
      'Mention specific channels you have expertise in',
      'Link to your portfolio or published marketing content',
    ],
    faqItems: [
      {
        question: 'What metrics should marketers include on a resume?',
        answer:
          'Include traffic growth percentages, conversion rate improvements, ROI on campaigns, email open rates, social media growth, lead generation numbers, and revenue attributed to marketing efforts.',
      },
      {
        question: 'Should marketers include a portfolio on their resume?',
        answer:
          'Yes. Include a link to your portfolio, published content, or case studies. Marketing is a results-oriented field, and showing your work is more convincing than describing it.',
      },
      {
        question: 'How important are certifications for marketing resumes?',
        answer:
          'Certifications like Google Analytics, Google Ads, HubSpot, and Meta Blueprint add credibility, especially for digital marketing roles. Include them in a dedicated section.',
      },
    ],
    relatedTemplates: [
      'modern-resume-template',
      'creative-resume-template',
      'sales-resume-template',
    ],
  },
  {
    slug: 'entry-level-resume-template',
    name: 'Entry-Level Resume Template',
    category: 'Entry Level',
    description:
      'Designed for candidates with 0-2 years of professional experience. Maximizes the impact of internships, part-time work, academic achievements, and transferable skills to compete effectively against more experienced candidates.',
    bestFor: [
      'New graduates',
      'Career starters',
      'Internship seekers',
      'Career changers',
      'Gap year returners',
    ],
    features: [
      'Skills-first layout',
      'Education emphasis',
      'Transferable skills highlight',
      'Volunteer and activity sections',
      'Objective statement option',
    ],
    atsScore: '96/100',
    tone: 'Eager and capability-focused',
    sections: [
      'Objective / Summary',
      'Education',
      'Skills',
      'Experience (including part-time)',
      'Activities & Volunteer Work',
    ],
    tips: [
      'Use an objective statement to communicate your career direction and enthusiasm',
      'Highlight transferable skills from any experience: retail, food service, volunteering',
      'Include academic honors, dean list, relevant coursework',
      'Frame part-time jobs with achievement-oriented bullet points',
      'Show eagerness to learn and willingness to grow',
    ],
    faqItems: [
      {
        question: 'How do I write a resume with little experience?',
        answer:
          'Focus on transferable skills, academic achievements, projects, volunteer work, and extracurricular activities. Use the same achievement format as work experience and quantify results wherever possible.',
      },
      {
        question: 'Should entry-level candidates use an objective or summary?',
        answer:
          'An objective statement works well for entry-level candidates because it communicates your career goals and what you bring to the role. Keep it to 1-2 sentences focused on what you can offer the employer.',
      },
      {
        question: 'How many pages should an entry-level resume be?',
        answer:
          'One page. Entry-level resumes should always be one page. If you are struggling to fill a page, add relevant coursework, projects, skills, and volunteer experience.',
      },
    ],
    relatedTemplates: [
      'student-resume-template',
      'simple-resume-template',
      'internship-resume-template',
    ],
  },
  {
    slug: 'one-page-resume-template',
    name: 'One-Page Resume Template',
    category: 'Format',
    description:
      'A space-efficient template designed to fit your complete professional story on a single page. Uses smart formatting, concise language, and strategic prioritization to present the most impactful information without feeling cramped.',
    bestFor: [
      'Entry to mid-level professionals',
      'Career changers',
      'Quick applications',
      'Recruiters who prefer brevity',
      'Most job applications',
    ],
    features: [
      'Space-efficient layout',
      'Concise section formatting',
      'Strategic content prioritization',
      'Standard margins',
      'One-page guaranteed',
    ],
    atsScore: '97/100',
    tone: 'Concise and impactful',
    sections: [
      'Professional Summary',
      'Experience (3-4 roles)',
      'Education',
      'Skills',
      'Certifications (optional)',
    ],
    tips: [
      'Limit work experience to your 3-4 most relevant roles',
      'Use 3-4 bullet points per role, focusing on biggest achievements',
      'Remove objective statements in favor of a concise 2-sentence summary',
      'Use 10-11pt font and 0.5-0.75 inch margins',
      'Cut older experience that is no longer relevant to your target role',
    ],
    faqItems: [
      {
        question: 'When is a one-page resume appropriate?',
        answer:
          'A one-page resume is appropriate for most professionals with under 10 years of experience, all entry-level and mid-level candidates, and anyone in a field where conciseness is valued.',
      },
      {
        question: 'How do I fit everything on one page?',
        answer:
          'Prioritize your most relevant experience, limit bullet points to 3-4 per role, use a concise summary instead of an objective, remove outdated skills, and adjust margins slightly (0.5 inch minimum).',
      },
      {
        question: 'Is a two-page resume ever acceptable?',
        answer:
          'Yes, for senior professionals with 10+ years of experience, executives, academics (CVs), or roles requiring extensive technical detail. But for most applications, one page is preferred.',
      },
    ],
    relatedTemplates: [
      'simple-resume-template',
      'minimal-resume-template',
      'ats-friendly-resume-template',
    ],
  },
  {
    slug: 'two-page-resume-template',
    name: 'Two-Page Resume Template',
    category: 'Format',
    description:
      'A comprehensive two-page template for experienced professionals who need more space to showcase their career achievements. Strategically organized so the most critical information appears on page one, with supporting details on page two.',
    bestFor: [
      'Senior professionals (10+ years)',
      'Executives and directors',
      'Technical specialists',
      'Professionals with diverse experience',
      'Federal resume applications',
    ],
    features: [
      'Two-page strategic layout',
      'Page-one priority system',
      'Comprehensive experience section',
      'Additional sections space',
      'Print-optimized pagination',
    ],
    atsScore: '95/100',
    tone: 'Comprehensive and detailed',
    sections: [
      'Executive Summary',
      'Professional Experience (detailed)',
      'Technical Skills',
      'Education & Certifications',
      'Publications, Awards, or Volunteer Work',
    ],
    tips: [
      'Put your most compelling information on page one',
      'Include your name and page number on the second page header',
      'Earlier roles can have fewer bullet points than recent ones',
      'Use the extra space for publications, patents, speaking engagements, or awards',
      'Do not pad with unnecessary content — two pages should feel justified',
    ],
    faqItems: [
      {
        question: 'When should I use a two-page resume?',
        answer:
          'Use a two-page resume when you have 10+ years of relevant experience, extensive technical skills, publications or patents, or when applying for senior/executive roles where comprehensive detail is expected.',
      },
      {
        question: 'Will a two-page resume hurt my chances?',
        answer:
          'Not if it is warranted by your experience. Hiring managers prefer a well-organized two-page resume over a cramped one-page resume. The key is that every line adds value — no filler.',
      },
      {
        question: 'How should I organize a two-page resume?',
        answer:
          'Page one: summary, most recent 2-3 roles with detailed achievements. Page two: earlier experience, education, certifications, skills, and additional sections like publications or awards.',
      },
    ],
    relatedTemplates: [
      'executive-resume-template',
      'professional-resume-template',
      'one-page-resume-template',
    ],
  },
  {
    slug: 'career-change-resume-template',
    name: 'Career Change Resume Template',
    category: 'Specialized',
    description:
      'Strategically designed for professionals transitioning to a new field. Emphasizes transferable skills, relevant accomplishments, and a compelling narrative that bridges your past experience with your new career direction.',
    bestFor: [
      'Career changers',
      'Industry switchers',
      'Military-to-civilian transitions',
      'Returning to workforce',
      'Pivoting professionals',
    ],
    features: [
      'Transferable skills focus',
      'Functional/combination format',
      'Career narrative section',
      'Relevant accomplishments',
      'Training and education emphasis',
    ],
    atsScore: '90/100',
    tone: 'Forward-looking and adaptable',
    sections: [
      'Professional Summary (targeting new field)',
      'Relevant Skills & Accomplishments',
      'Professional Experience',
      'Education & Training',
      'Certifications & Courses',
    ],
    tips: [
      'Write your summary targeting the new role, not your old one',
      'Group achievements by skill category rather than chronologically',
      'Highlight training, courses, and certifications in your new field',
      'Draw explicit connections between past experience and new role requirements',
      'Include a brief explanation of your career change motivation in the summary',
    ],
    faqItems: [
      {
        question: 'What resume format is best for career changers?',
        answer:
          'A combination (hybrid) format works best. It leads with a skills-based section that highlights transferable abilities, followed by a chronological work history that provides context.',
      },
      {
        question: 'How do I explain a career change on my resume?',
        answer:
          'Address it in your professional summary with a sentence like: "Marketing professional transitioning to UX design, bringing 5 years of user research and data analysis experience." Frame it as a natural evolution, not a leap.',
      },
      {
        question: 'Should I include unrelated work experience when changing careers?',
        answer:
          'Include it, but be strategic. Focus bullet points on transferable skills (leadership, communication, problem-solving, data analysis) rather than industry-specific tasks.',
      },
    ],
    relatedTemplates: [
      'functional-resume-template',
      'skills-based-resume-template',
      'entry-level-resume-template',
    ],
  },
  {
    slug: 'functional-resume-template',
    name: 'Functional Resume Template',
    category: 'Format',
    description:
      'A skills-based resume format that groups achievements by skill category rather than by employer. Ideal for those with employment gaps, career changes, or non-linear career paths who want to highlight what they can do rather than where they worked.',
    bestFor: [
      'Career changers',
      'Employment gap explanation',
      'Freelancers with diverse clients',
      'Military veterans transitioning',
      'Those with non-linear careers',
    ],
    features: [
      'Skills-first organization',
      'Achievement grouping by competency',
      'Minimized chronological focus',
      'Work history summary',
      'Transferable skills emphasis',
    ],
    atsScore: '80/100',
    tone: 'Skills-focused and strategic',
    sections: [
      'Professional Summary',
      'Core Competencies',
      'Relevant Achievements (by skill)',
      'Work History (brief)',
      'Education',
    ],
    tips: [
      'Group achievements under 3-4 skill categories relevant to the target role',
      'Still include a brief work history section with employer, title, and dates',
      'Use this format strategically — some recruiters prefer chronological',
      'Ensure your skills categories match keywords from the job description',
      'Consider a combination format if you can — it is more accepted by ATS',
    ],
    faqItems: [
      {
        question: 'Do recruiters dislike functional resumes?',
        answer:
          'Some recruiters prefer chronological formats because they clearly show career progression. However, a well-written functional resume that is transparent about work history can be effective, especially for career changers.',
      },
      {
        question: 'Are functional resumes ATS-friendly?',
        answer:
          'Functional resumes can be less ATS-friendly because the format separates achievements from employers, making it harder for ATS to associate skills with specific roles. A combination format is a safer choice.',
      },
      {
        question: 'When should I use a functional resume?',
        answer:
          'Use a functional resume when you are changing careers, have significant employment gaps, or when your skills are more relevant than your job titles. Always include a brief chronological work history section.',
      },
    ],
    relatedTemplates: [
      'career-change-resume-template',
      'combination-resume-template',
      'skills-based-resume-template',
    ],
  },
  {
    slug: 'cover-letter-template',
    name: 'Cover Letter Template',
    category: 'Companion',
    description:
      'A professional cover letter template designed to complement your resume. Features a structured format with an attention-grabbing opening, clear value proposition, and confident closing that motivates hiring managers to review your resume.',
    bestFor: [
      'Any job application',
      'Applications requiring cover letters',
      'Competitive positions',
      'Career changers needing context',
      'Referral-based applications',
    ],
    features: [
      'Structured three-paragraph format',
      'Professional letterhead',
      'Matching resume design',
      'Customizable sections',
      'Both formal and modern tones',
    ],
    atsScore: '95/100',
    tone: 'Professional and persuasive',
    sections: [
      'Header (matching resume)',
      'Opening paragraph (hook)',
      'Body (value proposition)',
      'Closing (call to action)',
      'Signature',
    ],
    tips: [
      'Address the hiring manager by name whenever possible',
      'Open with a specific reason you are excited about this role or company',
      'Focus on 2-3 achievements that directly address the job requirements',
      'End with a confident call to action: "I look forward to discussing how..."',
      'Keep to one page — 3-4 paragraphs maximum',
    ],
    faqItems: [
      {
        question: 'Do I need a cover letter in 2026?',
        answer:
          'While not always required, a cover letter can differentiate you from candidates who skip it. It is especially valuable when applying to competitive positions, making a career change, or when you have a personal connection to the company.',
      },
      {
        question: 'How long should a cover letter be?',
        answer:
          'Keep it to one page with 3-4 paragraphs (250-400 words). Hiring managers spend even less time on cover letters than resumes, so every sentence must add value.',
      },
      {
        question: 'Should my cover letter match my resume design?',
        answer:
          'Yes. Using the same fonts, colors, and header design creates a cohesive personal brand. Magic Resume automatically generates matching cover letter designs.',
      },
    ],
    relatedTemplates: [
      'professional-resume-template',
      'modern-resume-template',
      'ats-friendly-resume-template',
    ],
  },
];

// ---------------------------------------------------------------------------
// Helper functions
// ---------------------------------------------------------------------------

export function getTemplateBySlug(
  slug: string
): ResumeTemplate | undefined {
  return resumeTemplates.find((t) => t.slug === slug);
}

export function getAllTemplateSlugs(): string[] {
  return resumeTemplates.map((t) => t.slug);
}

export function getTemplatesByCategory(
  category: string
): ResumeTemplate[] {
  return resumeTemplates.filter((t) => t.category === category);
}
