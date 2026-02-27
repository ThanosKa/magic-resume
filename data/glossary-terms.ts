export interface GlossaryTerm {
  slug: string;
  term: string;
  category: string;
  shortDefinition: string;
  fullDefinition: string;
  example: string;
  resumeTip: string;
  relatedTerms: string[];
}

export const glossaryTerms: GlossaryTerm[] = [
  // ── Resume Components ─────────────────────────────────────────────────
  {
    slug: 'professional-summary',
    term: 'Professional Summary',
    category: 'Resume Components',
    shortDefinition:
      'A 2-4 sentence paragraph at the top of your resume that highlights your experience level, key skills, and most impressive achievements.',
    fullDefinition:
      'A professional summary (also called a career summary or resume summary) is a brief statement at the top of your resume that gives hiring managers a quick overview of your qualifications. It replaces the outdated objective statement and is now considered standard for experienced professionals.\n\nThe best professional summaries include your years of experience, job title or field, top 2-3 skills relevant to the target role, and a quantified achievement. For example: "Results-driven marketing manager with 8+ years of experience in digital marketing and brand strategy. Led campaigns generating $2.5M in revenue and grew organic traffic by 180%."',
    example:
      '"Certified public accountant with 6 years of experience in corporate tax planning and compliance. Managed tax filings for clients with combined revenue exceeding $500M and identified $3.2M in tax savings through strategic planning."',
    resumeTip:
      'Write a new professional summary for each job application, tailoring it to match the specific role and company. Lead with your strongest qualification that matches the job description.',
    relatedTerms: ['objective-statement', 'work-experience', 'skills-section'],
  },
  {
    slug: 'objective-statement',
    term: 'Objective Statement',
    category: 'Resume Components',
    shortDefinition:
      'A brief statement declaring your career goals and what you hope to achieve in a role. Generally considered outdated in favor of professional summaries.',
    fullDefinition:
      'An objective statement is a 1-2 sentence declaration of your career goals placed at the top of your resume. It focuses on what you want from the employer rather than what you offer. For example: "Seeking a challenging position in software development where I can utilize my skills."\n\nObjective statements have largely fallen out of favor because they focus on the candidate rather than the value they bring. However, they can still be useful for entry-level candidates, career changers, or anyone whose resume might not clearly communicate their target role.\n\nIf you use an objective statement, make it specific to the role and company, and include what you bring to the table — not just what you want.',
    example:
      '"Recent computer science graduate seeking an entry-level software engineering position where I can apply my Python and machine learning expertise to solve real-world problems while growing into a full-stack development role."',
    resumeTip:
      'If you have more than 2 years of professional experience, use a professional summary instead. Only use an objective statement if you are a new graduate, changing careers, or have a non-obvious reason for applying.',
    relatedTerms: ['professional-summary', 'cover-letter', 'career-change'],
  },
  {
    slug: 'work-experience',
    term: 'Work Experience',
    category: 'Resume Components',
    shortDefinition:
      'The resume section listing your previous jobs in reverse chronological order, including company name, job title, dates, and achievement-oriented bullet points.',
    fullDefinition:
      'The work experience section is the most important part of most resumes. It lists your professional history starting with your most recent or current position and working backward. Each entry typically includes: job title, company name, location, dates of employment, and 3-5 bullet points describing your key responsibilities and achievements.\n\nThe best work experience entries focus on achievements rather than duties. Instead of "Responsible for managing social media accounts," write "Grew Instagram following from 5K to 50K in 12 months, increasing engagement rate by 340%." This approach — leading with action verbs and quantifying results — makes your experience concrete and compelling.',
    example:
      'Senior Software Engineer, Acme Corp — San Francisco, CA | Jan 2022 – Present\n• Architected and launched a microservices platform serving 2M daily active users\n• Reduced API response times by 65% through database optimization\n• Mentored 4 junior engineers, with 2 receiving promotions within 18 months',
    resumeTip:
      'Start every bullet point with a strong action verb and include at least one number or metric. Focus on the top 3-5 achievements per role, not an exhaustive list of duties.',
    relatedTerms: ['professional-summary', 'chronological-resume', 'resume-bullet-points'],
  },
  {
    slug: 'education-section',
    term: 'Education Section',
    category: 'Resume Components',
    shortDefinition:
      'The resume section listing your academic qualifications, including degrees, institutions, graduation dates, and relevant coursework or honors.',
    fullDefinition:
      'The education section of your resume lists your academic credentials. At minimum, include your degree, institution name, and graduation year. You can also add GPA (if 3.5+), relevant coursework, honors, and academic achievements.\n\nPlacement depends on your career stage. New graduates should put education near the top of the resume since it is their strongest qualification. Experienced professionals should place it after work experience. As your career progresses, your education section naturally becomes shorter and less prominent.',
    example:
      'Bachelor of Science in Computer Science, Stanford University — 2022\nGPA: 3.8/4.0 | Dean\'s List | Relevant Coursework: Machine Learning, Distributed Systems, Data Structures',
    resumeTip:
      'If you graduated more than 5 years ago, you can drop your GPA and coursework. Your work experience should carry the weight at that point.',
    relatedTerms: ['certifications', 'work-experience', 'student-resume'],
  },
  {
    slug: 'skills-section',
    term: 'Skills Section',
    category: 'Resume Components',
    shortDefinition:
      'A resume section listing your relevant hard skills, soft skills, technical proficiencies, tools, and languages in a scannable format.',
    fullDefinition:
      'The skills section provides a quick-reference list of your capabilities. It serves two purposes: helping ATS systems match your resume to job requirements, and giving recruiters a fast overview of your qualifications.\n\nOrganize skills into categories (e.g., "Programming Languages," "Tools & Platforms," "Certifications") for better readability. Include both hard skills (technical, measurable abilities) and soft skills (interpersonal abilities), though hard skills should dominate. Always mirror the exact terminology from the job description when possible.',
    example:
      'Technical Skills: Python, JavaScript, TypeScript, React, Node.js, PostgreSQL, AWS, Docker\nTools: Git, Jira, Figma, Datadog, Terraform\nCertifications: AWS Solutions Architect, Google Cloud Professional',
    resumeTip:
      'Tailor your skills section to each job application. Move the most relevant skills to the top and use the exact terms from the job posting — ATS systems often match keywords literally.',
    relatedTerms: ['resume-keywords', 'ats-friendly-resume', 'work-experience'],
  },
  {
    slug: 'certifications',
    term: 'Certifications',
    category: 'Resume Components',
    shortDefinition:
      'Professional credentials and certifications earned through exams or training programs that validate expertise in a specific area.',
    fullDefinition:
      'Certifications are formal credentials issued by professional organizations, technology vendors, or educational institutions that verify your competence in a specific domain. On a resume, they signal validated expertise and commitment to professional development.\n\nCommon examples include AWS Solutions Architect, PMP (Project Management Professional), CPA (Certified Public Accountant), Google Analytics Certified, and CompTIA Security+. List the full certification name, issuing organization, and date earned or expiration date.\n\nCertifications are particularly valuable in technology, healthcare, finance, and project management where they can be requirements for certain roles.',
    example:
      'AWS Solutions Architect – Professional | Amazon Web Services | 2024\nPMP (Project Management Professional) | PMI | 2023\nGoogle Analytics 4 Certification | Google | 2025',
    resumeTip:
      'Place highly relevant certifications in your skills section or a dedicated certifications section. If a certification is specifically mentioned in the job posting, make sure it is prominently visible.',
    relatedTerms: ['education-section', 'skills-section', 'professional-development'],
  },
  {
    slug: 'cover-letter',
    term: 'Cover Letter',
    category: 'Resume Components',
    shortDefinition:
      'A one-page document accompanying your resume that explains your interest in a specific role and highlights your most relevant qualifications.',
    fullDefinition:
      'A cover letter is a personalized letter sent alongside your resume when applying for a job. While not always required, it provides an opportunity to explain why you are interested in the specific role and company, highlight qualifications that may not be obvious from your resume, and demonstrate your communication skills.\n\nEffective cover letters follow a simple structure: opening paragraph (why you are writing and how you found the role), body paragraph(s) (your most relevant qualifications with specific examples), and closing paragraph (call to action and next steps). Keep it under one page and address it to a specific person when possible.\n\nStudies show that about 50% of employers expect cover letters, and a well-written one can differentiate you from candidates with similar resumes.',
    example:
      'A strong opening: "As a data engineer who has built real-time pipelines processing 10M+ events daily at [Company], I was excited to see your Senior Data Engineer role focused on expanding streaming infrastructure."',
    resumeTip:
      'Do not repeat your resume in the cover letter. Instead, tell a story about your most relevant achievement and explain why this specific company and role excites you.',
    relatedTerms: ['professional-summary', 'job-application', 'thank-you-note'],
  },
  {
    slug: 'curriculum-vitae',
    term: 'Curriculum Vitae (CV)',
    category: 'Resume Components',
    shortDefinition:
      'A comprehensive document detailing your entire academic and professional history. Unlike a resume, a CV has no page limit and includes publications, research, and teaching experience.',
    fullDefinition:
      'A curriculum vitae (Latin for "course of life") is a detailed document that covers your complete academic and professional history. Unlike a resume, which is typically 1-2 pages, a CV can be many pages long and grows throughout your career.\n\nCVs are standard in academia, research, medicine, and many European countries. They include sections for publications, research experience, teaching experience, grants, conference presentations, and academic service that would not appear on a traditional resume.\n\nIn the United States, "resume" and "CV" are sometimes used interchangeably in casual conversation, but they are different documents. Use a CV when applying to academic or research positions, and a resume for industry roles.',
    example:
      'An academic CV might include: Education, Dissertation, Research Experience, Teaching Experience, Publications (15 peer-reviewed papers), Conference Presentations (22), Grants Awarded ($1.2M total), Professional Service, References.',
    resumeTip:
      'Only use a CV when explicitly requested or when applying to academic or research positions. For industry jobs, always use a targeted resume.',
    relatedTerms: ['professional-summary', 'education-section', 'federal-resume'],
  },
  {
    slug: 'chronological-resume',
    term: 'Chronological Resume',
    category: 'Resume Components',
    shortDefinition:
      'The most common resume format that lists work experience in reverse chronological order, from most recent to oldest.',
    fullDefinition:
      'A chronological resume (more accurately called "reverse chronological") organizes your work experience from your most recent position first, working backward through your career history. This is the most widely used and recommended resume format.\n\nHiring managers prefer this format because it clearly shows career progression, makes it easy to see your most recent experience first, and follows a familiar structure that ATS systems parse reliably. Approximately 90% of resumes should use this format.\n\nThe main drawback is that it can highlight employment gaps or a lack of career progression. If those are concerns, consider a combination resume format instead.',
    example:
      'A chronological resume lists: Summary → Work Experience (newest first) → Education → Skills. Each job entry shows clear dates and progression from Junior Developer → Developer → Senior Developer.',
    resumeTip:
      'Use chronological format unless you have a specific reason not to (career change, major gaps). It is the safest choice and what recruiters expect to see.',
    relatedTerms: ['functional-resume', 'combination-resume', 'work-experience'],
  },
  {
    slug: 'functional-resume',
    term: 'Functional Resume',
    category: 'Resume Components',
    shortDefinition:
      'A resume format organized by skill categories rather than chronological work history. Used by career changers and those with employment gaps.',
    fullDefinition:
      'A functional resume groups your experience and achievements by skill category (e.g., "Leadership," "Technical Skills," "Client Management") rather than by employer. Work history is listed separately with minimal detail — just company name, title, and dates.\n\nThis format is designed to highlight transferable skills rather than chronological work history, making it useful for career changers, people returning to work after long gaps, or those with non-linear career paths.\n\nHowever, many recruiters dislike functional resumes because they make it difficult to understand your career trajectory and can appear to hide information. ATS systems may also struggle to associate skills with specific roles. Use this format only when the benefits clearly outweigh these risks.',
    example:
      'A functional resume might organize achievements under: "Project Management" (5 bullet points from various roles), "Data Analysis" (4 bullet points), "Team Leadership" (3 bullet points), followed by a brief Work History section.',
    resumeTip:
      'If you are considering a functional resume, try a combination format first. It lets you lead with skills while still providing the chronological context recruiters want.',
    relatedTerms: ['chronological-resume', 'combination-resume', 'career-change'],
  },
  {
    slug: 'combination-resume',
    term: 'Combination Resume',
    category: 'Resume Components',
    shortDefinition:
      'A hybrid resume format that combines a skills-based section with a reverse chronological work history. Best for career changers with relevant transferable skills.',
    fullDefinition:
      'A combination (or hybrid) resume merges elements of both chronological and functional formats. It typically starts with a skills or qualifications summary that groups achievements by competency, followed by a standard reverse-chronological work history.\n\nThis format works well when you want to emphasize specific skills while still providing the career timeline that recruiters expect. It is particularly effective for career changers who have relevant transferable skills, senior professionals with diverse experience, and candidates applying for roles that require specific competencies.\n\nThe downside is that combination resumes can be longer than standard chronological resumes. Careful editing is needed to keep it focused and concise.',
    example:
      'A combination resume structure: Summary → Key Competencies (grouped skill achievements) → Professional Experience (reverse chronological with brief bullets) → Education.',
    resumeTip:
      'Use a combination format when changing industries or roles. The skills section lets you present transferable abilities prominently while the work history section maintains credibility.',
    relatedTerms: ['chronological-resume', 'functional-resume', 'career-change'],
  },

  // ── Job Search ────────────────────────────────────────────────────────
  {
    slug: 'job-description',
    term: 'Job Description',
    category: 'Job Search',
    shortDefinition:
      'A document from an employer outlining the responsibilities, qualifications, skills, and requirements for a specific position.',
    fullDefinition:
      'A job description is the employer\'s official outline of what a role involves. It typically includes the job title, company overview, key responsibilities, required qualifications, preferred qualifications, compensation range, and benefits.\n\nFor job seekers, the job description is your best tool for tailoring your resume. It tells you exactly what the employer is looking for, which keywords to include, and what qualifications to highlight. Study it carefully and mirror the language in your resume.\n\nPay attention to the difference between "required" and "preferred" qualifications. You should meet most required qualifications before applying, but do not need to match every preferred qualification.',
    example:
      'A job description might say: "Required: 5+ years Python experience, AWS certification. Preferred: Experience with Kubernetes, CI/CD pipelines." This tells you to prominently feature Python and AWS on your resume.',
    resumeTip:
      'Before writing your resume, highlight every skill, qualification, and keyword in the job description. Then ensure each highlighted item appears somewhere in your resume.',
    relatedTerms: ['resume-keywords', 'keyword-optimization', 'applicant-tracking-system'],
  },
  {
    slug: 'networking',
    term: 'Networking',
    category: 'Job Search',
    shortDefinition:
      'The practice of building and maintaining professional relationships to exchange information, advice, and job opportunities.',
    fullDefinition:
      'Professional networking involves building relationships with people in your industry or target field. Studies consistently show that 70-80% of jobs are filled through networking, making it the single most effective job search strategy.\n\nNetworking takes many forms: attending industry events, joining professional associations, participating in online communities, reaching out on LinkedIn, having informational interviews, and maintaining relationships with former colleagues and classmates.\n\nEffective networking is about giving as much as receiving. Share knowledge, make introductions, and offer help before asking for favors. Building genuine relationships over time is far more effective than transactional networking during a job search.',
    example:
      'Instead of messaging "Do you know of any open positions?", try: "I saw your article about machine learning in healthcare. I have been working on similar problems at my company. Would you be open to a 15-minute chat about your approach?"',
    resumeTip:
      'Keep your LinkedIn profile updated and aligned with your resume. Many networking contacts will check your profile before responding. A well-optimized LinkedIn profile extends your resume reach.',
    relatedTerms: ['informational-interview', 'linkedin-profile', 'employee-referral'],
  },
  {
    slug: 'informational-interview',
    term: 'Informational Interview',
    category: 'Job Search',
    shortDefinition:
      'A casual conversation with a professional in your target role or industry to learn about their work, career path, and advice — not to ask for a job directly.',
    fullDefinition:
      'An informational interview is a meeting (usually 20-30 minutes) where you ask a professional about their role, industry, and career advice. Unlike a job interview, you are the one asking questions, and the goal is learning, not landing a specific position.\n\nInformational interviews are powerful because they help you understand roles before applying, build relationships that may lead to referrals, learn about unadvertised opportunities, and gain insider knowledge about companies and industries.\n\nRequest them through LinkedIn, mutual connections, alumni networks, or professional associations. Keep the conversation focused on learning, thank them for their time, and follow up with a brief note.',
    example:
      'Questions to ask: "What does a typical day look like in your role?", "What skills are most important for success?", "What do you wish you had known before entering this field?", "What is the biggest challenge you face?"',
    resumeTip:
      'After an informational interview, ask "Based on what I have shared about my background, are there areas of my resume I should strengthen?" This can provide invaluable feedback.',
    relatedTerms: ['networking', 'linkedin-profile', 'career-change'],
  },
  {
    slug: 'employee-referral',
    term: 'Employee Referral',
    category: 'Job Search',
    shortDefinition:
      'A recommendation from a current employee of a company to hire a specific candidate. Referred candidates are significantly more likely to be hired.',
    fullDefinition:
      'An employee referral occurs when a current employee of a company recommends you for an open position. This is one of the most effective ways to get hired — referred candidates are 4-5 times more likely to be hired and tend to get interviewed faster.\n\nCompanies prefer referrals because they reduce hiring risk, speed up the process, and referred employees tend to stay longer. Many companies offer referral bonuses to employees, which means people are often willing to refer qualified candidates.\n\nTo get referrals, maintain a strong professional network, keep your contacts informed about your job search, and make it easy for people to refer you by sharing your resume and the specific roles you are interested in.',
    example:
      'A referral message might be: "Hi [Name], I noticed [Company] has an open Senior Engineer position. I have 5 years of experience in exactly that stack. Would you be open to referring me? I can send my resume and the specific job link."',
    resumeTip:
      'When you have a referral, mention it in your cover letter: "I was referred by [Name], who suggested my experience in [skill] would be a strong fit." This ensures the connection is noted.',
    relatedTerms: ['networking', 'job-application', 'linkedin-profile'],
  },
  {
    slug: 'linkedin-profile',
    term: 'LinkedIn Profile',
    category: 'Job Search',
    shortDefinition:
      'Your professional profile on LinkedIn that serves as an online resume, networking tool, and professional brand. Over 95% of recruiters use LinkedIn to find candidates.',
    fullDefinition:
      'Your LinkedIn profile is your professional identity online. Unlike a resume, which is tailored to specific jobs, your LinkedIn profile represents your overall professional brand and should appeal to a broader audience.\n\nKey sections to optimize: a professional headline (not just your job title), an engaging About section (your professional story), detailed Experience entries (similar to resume but can be more comprehensive), Skills & Endorsements, and Recommendations.\n\nLinkedIn profiles appear in Google searches for your name, so it is often the first impression people have of you professionally. Keep it current, complete, and aligned with your career goals.',
    example:
      'A strong headline: "Senior Data Engineer | Building Real-Time Pipelines at Scale | AWS & Spark | Open to Opportunities" — much better than just "Senior Data Engineer at Acme Corp."',
    resumeTip:
      'Your LinkedIn and resume should tell the same story but are not identical. LinkedIn can be more detailed and personal. Always include your LinkedIn URL on your resume.',
    relatedTerms: ['networking', 'personal-brand', 'employee-referral'],
  },
  {
    slug: 'salary-negotiation',
    term: 'Salary Negotiation',
    category: 'Job Search',
    shortDefinition:
      'The process of discussing and agreeing on compensation for a job offer. Most employers expect candidates to negotiate, and failing to do so leaves money on the table.',
    fullDefinition:
      'Salary negotiation is the discussion between a candidate and employer about compensation after a job offer is extended. Research shows that candidates who negotiate earn $5,000-$10,000 more on average than those who accept the first offer.\n\nEffective negotiation requires research (know the market rate for your role, location, and experience level using sites like Levels.fyi, Glassdoor, or Payscale), timing (negotiate after receiving a written offer, not during interviews), and confidence (frame requests in terms of your value, not your needs).\n\nRemember that total compensation includes base salary, bonuses, equity, benefits, PTO, remote work flexibility, and professional development budgets. If base salary cannot move, negotiate other components.',
    example:
      '"Thank you for the offer. I am very excited about this role. Based on my research and the value I will bring — particularly my experience leading the migration that saved $500K annually — I was hoping we could discuss a base salary of $145,000."',
    resumeTip:
      'Your resume is your strongest negotiation tool. Quantified achievements give you concrete evidence to justify higher compensation during salary discussions.',
    relatedTerms: ['job-offer', 'compensation-package', 'job-application'],
  },
  {
    slug: 'job-application',
    term: 'Job Application',
    category: 'Job Search',
    shortDefinition:
      'The formal process of applying for a job, typically involving submitting a resume, cover letter, and application form through an employer portal or job board.',
    fullDefinition:
      'A job application is the complete package you submit when applying for a position. This usually includes your resume, an optional or required cover letter, and an online application form that may ask for additional information.\n\nMost applications today go through an Applicant Tracking System (ATS) before reaching a human. This means your materials need to be optimized for both machine parsing and human reading.\n\nBest practices include tailoring your resume for each application, following instructions exactly, completing all fields in online forms, and applying as early as possible — studies show that applications submitted within the first 72 hours get 8x more views.',
    example:
      'A complete application typically includes: tailored resume (PDF), customized cover letter, completed online application form, and possibly a portfolio link or work samples.',
    resumeTip:
      'Never use the same resume for every application. At minimum, adjust your professional summary and skills section to match each job description.',
    relatedTerms: ['applicant-tracking-system', 'cover-letter', 'job-description'],
  },
  {
    slug: 'job-offer',
    term: 'Job Offer',
    category: 'Job Search',
    shortDefinition:
      'A formal proposal from an employer to hire you for a specific position, including details about compensation, benefits, start date, and employment terms.',
    fullDefinition:
      'A job offer is the formal communication from an employer extending an invitation to join their organization. It should include the position title, compensation (base salary, bonus structure, equity), benefits, start date, work location/arrangement, and reporting structure.\n\nAlways request the offer in writing before making a decision. Verbal offers are not binding. Once you receive a written offer, it is standard practice to ask for 3-5 business days to review it. Use this time to evaluate the total compensation package and prepare any negotiation points.\n\nNever accept or reject immediately unless you are absolutely certain. Rushing this decision is one of the most common mistakes job seekers make.',
    example:
      'A typical offer letter includes: "We are pleased to offer you the position of Senior Product Manager at a base salary of $155,000, with a 15% annual bonus target, 10,000 stock options, and comprehensive health benefits. Start date: April 14, 2026."',
    resumeTip:
      'Keep your resume updated even after accepting an offer. You may need it for internal promotions, conference speaking applications, or unexpected opportunities.',
    relatedTerms: ['salary-negotiation', 'compensation-package', 'job-application'],
  },
  {
    slug: 'personal-brand',
    term: 'Personal Brand',
    category: 'Job Search',
    shortDefinition:
      'The unique combination of skills, experience, and personality that you present professionally. It is how you are perceived in your industry.',
    fullDefinition:
      'Your personal brand is the professional reputation and image you cultivate across all touchpoints: your resume, LinkedIn profile, portfolio, social media, speaking engagements, and personal interactions. It answers the question "What do people say about you when you are not in the room?"\n\nA strong personal brand makes you memorable, attracts opportunities, and differentiates you from other candidates. It should be authentic, consistent across platforms, and aligned with your career goals.\n\nBuilding a personal brand involves identifying your unique value proposition, creating content in your area of expertise, maintaining an active professional presence online, and consistently delivering quality work.',
    example:
      'A developer might build a personal brand around "making complex distributed systems accessible" through blog posts, conference talks, open-source contributions, and a consistent LinkedIn presence sharing insights.',
    resumeTip:
      'Your resume is a key component of your personal brand. Ensure it tells a consistent story that aligns with your LinkedIn profile, portfolio, and online presence.',
    relatedTerms: ['linkedin-profile', 'networking', 'elevator-pitch'],
  },
  {
    slug: 'elevator-pitch',
    term: 'Elevator Pitch',
    category: 'Job Search',
    shortDefinition:
      'A 30-60 second verbal summary of who you are, what you do, and what value you bring. Named for the idea of impressing someone during a brief elevator ride.',
    fullDefinition:
      'An elevator pitch is a concise, rehearsed speech that summarizes your professional identity, key accomplishments, and what you are looking for. It should be 30-60 seconds (about 75-150 words) and feel conversational rather than scripted.\n\nA good formula: Who you are + What you do + Your key achievement + What you are looking for. For example: "I am a data scientist with 5 years of experience building ML models for e-commerce. At my current company, I built a recommendation engine that increased sales by 23%. I am looking for opportunities to lead a data science team at a consumer technology company."\n\nPractice your elevator pitch until it flows naturally. You will use it at networking events, career fairs, interviews, and even casual professional encounters.',
    example:
      '"I am a UX designer specializing in B2B SaaS products. Over the past 4 years, I have redesigned onboarding flows that improved activation rates by 45% at two different companies. I am passionate about making complex software intuitive and am looking for a senior role at a product-led company."',
    resumeTip:
      'Your elevator pitch and professional summary should tell the same story. Write one first and adapt it for the other to ensure consistency.',
    relatedTerms: ['professional-summary', 'networking', 'personal-brand'],
  },
  {
    slug: 'follow-up-email',
    term: 'Follow-Up Email',
    category: 'Job Search',
    shortDefinition:
      'An email sent after an interview or application to express continued interest, thank the interviewer, and reinforce your qualifications.',
    fullDefinition:
      'A follow-up email is a professional message sent after an interview, networking meeting, or application to maintain communication and demonstrate your interest in the role. The most common type is a post-interview thank-you email.\n\nSend a follow-up email within 24 hours of an interview. Keep it brief (3-4 sentences), mention something specific from the conversation, reiterate your interest, and thank them for their time. Personalize each email if you spoke with multiple interviewers.\n\nFollow-up emails serve dual purposes: they show professionalism and attention to detail, and they give you one more chance to reinforce a key qualification or address something you forgot to mention.',
    example:
      '"Thank you for taking the time to discuss the Senior Engineer role today. I especially enjoyed learning about your migration to event-driven architecture — it aligns perfectly with the work I led at [Company] where we reduced processing latency by 80%. I look forward to hearing about next steps."',
    resumeTip:
      'If you forgot to mention a relevant accomplishment during the interview, your follow-up email is the perfect place to briefly add it. Keep it natural and brief.',
    relatedTerms: ['thank-you-note', 'job-application', 'networking'],
  },
  {
    slug: 'thank-you-note',
    term: 'Thank-You Note',
    category: 'Job Search',
    shortDefinition:
      'A brief message of gratitude sent after an interview or professional interaction. A key professional courtesy that can influence hiring decisions.',
    fullDefinition:
      'A thank-you note is a brief message expressing appreciation for someone\'s time, especially after a job interview. While email is the standard format today, handwritten notes can still make a positive impression for senior or traditional roles.\n\nResearch shows that 68% of hiring managers say a thank-you note influences their decision, and 22% are less likely to hire someone who does not send one. It demonstrates professionalism, communication skills, and genuine interest in the role.\n\nKeep it concise (4-5 sentences max), personalize it with a specific detail from your conversation, and send it within 24 hours.',
    example:
      '"Dear [Name], Thank you for the insightful conversation about the product manager role today. Your description of the team\'s approach to customer discovery resonated with my experience leading user research at [Company]. I am excited about the opportunity to contribute to [specific project discussed]. Best regards, [Your name]"',
    resumeTip:
      'Always have your interviewer\'s email address before leaving. Ask the recruiter or hiring coordinator if you do not receive it during the process.',
    relatedTerms: ['follow-up-email', 'job-application', 'networking'],
  },

  // ── Interview ──────────────────────────────────────────────────────────
  {
    slug: 'behavioral-interview',
    term: 'Behavioral Interview',
    category: 'Interview',
    shortDefinition:
      'An interview style where candidates are asked to describe specific past experiences to predict future behavior. Questions typically start with "Tell me about a time when..."',
    fullDefinition:
      'Behavioral interviewing is based on the principle that past behavior is the best predictor of future performance. Instead of hypothetical questions ("What would you do if..."), you are asked to share specific examples from your experience.\n\nCommon behavioral questions include: "Tell me about a time you handled a conflict with a coworker," "Describe a situation where you had to meet a tight deadline," and "Give an example of a time you failed and what you learned."\n\nThe STAR method (Situation, Task, Action, Result) is the recommended framework for structuring your answers. Prepare 8-10 stories from your career that can be adapted to various behavioral questions.',
    example:
      'Question: "Tell me about a time you had to influence a decision without authority."\nSTAR response: Situation — cross-team project with misaligned priorities. Task — needed buy-in for new API design. Action — created data-driven proposal showing 3x performance improvement. Result — team adopted the approach, and it shipped 2 weeks early.',
    resumeTip:
      'The achievements on your resume should double as behavioral interview stories. For each bullet point, be ready to explain the situation, your actions, and the results in detail.',
    relatedTerms: ['star-method', 'technical-interview', 'phone-screening'],
  },
  {
    slug: 'star-method',
    term: 'STAR Method',
    category: 'Interview',
    shortDefinition:
      'A structured framework for answering behavioral interview questions: Situation, Task, Action, Result. Helps you give organized, complete answers.',
    fullDefinition:
      'The STAR method is a technique for structuring responses to behavioral interview questions. Each component serves a specific purpose:\n\nSituation: Set the context — where were you, what was happening?\nTask: What was your specific responsibility or goal?\nAction: What did you personally do? (This should be the longest part)\nResult: What was the outcome? Quantify whenever possible.\n\nThe key to using STAR effectively is keeping the Situation and Task brief (20% of your answer), spending the most time on Action (50%), and ending with a concrete Result (30%). Always use "I" rather than "we" to clearly communicate your individual contribution.',
    example:
      'S: "Our startup was losing 15% of users during onboarding." T: "I was asked to redesign the onboarding flow to improve retention." A: "I conducted 20 user interviews, mapped drop-off points, redesigned the flow with progressive disclosure, and A/B tested 3 variants over 4 weeks." R: "The new flow reduced drop-off by 40% and increased 30-day retention by 25%."',
    resumeTip:
      'Write your resume bullet points using a shortened STAR format: Action + Context + Result. For example: "Redesigned onboarding flow based on 20 user interviews, reducing drop-off by 40% and increasing 30-day retention by 25%."',
    relatedTerms: ['behavioral-interview', 'work-experience', 'phone-screening'],
  },
  {
    slug: 'phone-screening',
    term: 'Phone Screening',
    category: 'Interview',
    shortDefinition:
      'A brief 15-30 minute phone call with a recruiter to assess basic qualifications, salary expectations, and interest before advancing to full interviews.',
    fullDefinition:
      'A phone screening (or phone screen) is typically the first step in the interview process. A recruiter or HR representative calls to verify basic qualifications, discuss salary expectations, assess your interest in the role, and determine if you should advance to the next round.\n\nCommon questions include: "Tell me about yourself," "Why are you interested in this role?", "What are your salary expectations?", and "What is your availability?" The goal is not to stump you but to confirm a basic fit.\n\nPrepare by researching the company, having your resume in front of you, knowing your salary range, and being ready to articulate why you are interested in this specific role.',
    example:
      'A recruiter might ask: "Your resume mentions experience with Kubernetes. Can you briefly describe your level of expertise?" Have a concise answer ready: "I have 3 years of production Kubernetes experience, managing clusters of 200+ pods for microservices serving 5M daily requests."',
    resumeTip:
      'Have your resume in front of you during phone screenings. The recruiter is often looking at it while talking to you and may ask you to elaborate on specific points.',
    relatedTerms: ['behavioral-interview', 'technical-interview', 'job-application'],
  },
  {
    slug: 'technical-interview',
    term: 'Technical Interview',
    category: 'Interview',
    shortDefinition:
      'An interview focused on assessing technical skills through coding challenges, system design questions, or domain-specific problem solving.',
    fullDefinition:
      'A technical interview evaluates your technical abilities through hands-on problem solving. Formats vary by role and company: software engineers may face coding challenges and system design questions, data scientists may analyze datasets, and designers may complete design exercises.\n\nCommon formats include live coding (solving problems on a whiteboard or shared editor), take-home assignments (completing a project within a set timeframe), system design (architecting solutions to complex problems), and technical discussions (deep dives into your past work).\n\nPreparation involves practicing problem-solving, reviewing fundamentals, and being able to explain your thought process clearly. Companies care as much about how you think as whether you get the right answer.',
    example:
      'A system design question: "Design a URL shortener that handles 100M URLs." This tests your ability to discuss databases, caching, load balancing, and scalability — all while communicating your reasoning.',
    resumeTip:
      'The projects and technical skills listed on your resume may become talking points in technical interviews. Be prepared to discuss any technology, framework, or project you mention in depth.',
    relatedTerms: ['behavioral-interview', 'phone-screening', 'skills-section'],
  },

  // ── ATS & Technology ──────────────────────────────────────────────────
  {
    slug: 'applicant-tracking-system',
    term: 'Applicant Tracking System (ATS)',
    category: 'ATS & Technology',
    shortDefinition:
      'Software used by employers to collect, organize, scan, and rank job applications. Over 75% of companies use ATS to screen resumes before a human reviews them.',
    fullDefinition:
      'An Applicant Tracking System (ATS) is software that manages the entire hiring process for employers, from job posting through offer letter. For job seekers, the most important ATS function is resume parsing — the software extracts information from your resume and compares it to job requirements.\n\nPopular ATS platforms include Workday, Greenhouse, Lever, iCIMS, Taleo, and BambooHR. Each parses resumes slightly differently, but all prefer clean, standard formatting.\n\nATS can filter out qualified candidates whose resumes are not properly formatted. Common issues include using graphics or images (ATS cannot read them), non-standard section headers, complex layouts with tables or columns, and missing keywords that match the job description.',
    example:
      'When you apply through a company career page, your resume goes through their ATS. The system extracts your name, contact info, work history, education, and skills. It then scores your resume based on keyword matches with the job description.',
    resumeTip:
      'Use a single-column layout, standard section headers, simple formatting, and no graphics. Save as PDF unless directed otherwise. Test your resume with an ATS checker tool before applying.',
    relatedTerms: ['ats-friendly-resume', 'resume-keywords', 'keyword-optimization'],
  },
  {
    slug: 'ats-friendly-resume',
    term: 'ATS-Friendly Resume',
    category: 'ATS & Technology',
    shortDefinition:
      'A resume specifically formatted to be correctly parsed by Applicant Tracking Systems, using standard layouts, simple formatting, and relevant keywords.',
    fullDefinition:
      'An ATS-friendly resume is designed to be easily read and parsed by Applicant Tracking Systems. It follows specific formatting guidelines to ensure your information is correctly extracted and your candidacy is not rejected due to parsing errors.\n\nKey principles: use standard section headers (Professional Summary, Work Experience, Education, Skills), avoid tables, text boxes, graphics, and multi-column layouts, use common fonts (Arial, Calibri, Times New Roman), include keywords from the job description naturally, and save as PDF or .docx as directed.\n\nMany visually attractive resume templates are not ATS-friendly. A resume can look clean and professional while still being optimized for ATS — the two are not mutually exclusive.',
    example:
      'An ATS-friendly resume uses: single column layout, standard black text, clear section headers (bold or uppercase), bullet points for achievements, consistent date formatting, and no images, icons, or decorative elements.',
    resumeTip:
      'Use Magic Resume\'s editor to build an ATS-friendly resume automatically. The templates are designed to be both visually appealing and fully ATS-compatible.',
    relatedTerms: ['applicant-tracking-system', 'resume-keywords', 'resume-format'],
  },
  {
    slug: 'resume-keywords',
    term: 'Resume Keywords',
    category: 'ATS & Technology',
    shortDefinition:
      'Specific terms and phrases from job descriptions that ATS systems and recruiters look for when scanning resumes. Critical for passing automated screening.',
    fullDefinition:
      'Resume keywords are the specific words and phrases that Applicant Tracking Systems use to match your resume with job requirements. These include job titles, technical skills, certifications, industry terms, and soft skills mentioned in the job posting.\n\nKeywords can be categorized as: hard skills (Python, SQL, Salesforce), soft skills (leadership, communication, problem-solving), job titles (Senior Product Manager, Data Analyst), certifications (PMP, AWS Certified), and industry terms (agile, HIPAA compliance, SEO).\n\nThe most effective approach is to extract keywords directly from the target job description and incorporate them naturally throughout your resume — in your summary, skills section, and work experience bullet points.',
    example:
      'If a job description mentions "project management," "stakeholder communication," "Jira," and "agile methodology," these should all appear in your resume using the same exact phrasing.',
    resumeTip:
      'Copy the job description into a word frequency tool to identify the most important keywords. Ensure each high-frequency term appears at least once in your resume.',
    relatedTerms: ['applicant-tracking-system', 'keyword-optimization', 'job-description'],
  },
  {
    slug: 'keyword-optimization',
    term: 'Keyword Optimization',
    category: 'ATS & Technology',
    shortDefinition:
      'The process of strategically incorporating relevant keywords from job descriptions into your resume to improve ATS matching scores.',
    fullDefinition:
      'Keyword optimization is the practice of aligning your resume language with the terminology used in job descriptions to improve your chances of passing ATS screening and catching recruiter attention.\n\nThe process involves: (1) extracting key terms from the target job description, (2) identifying which terms you can honestly claim, (3) incorporating those terms naturally throughout your resume, and (4) using both the acronym and full term for common abbreviations (e.g., "Search Engine Optimization (SEO)").\n\nImportant: keyword optimization is not keyword stuffing. ATS systems are increasingly sophisticated and can detect unnatural keyword usage. Your resume must still read well to humans, who will review it if you pass the ATS filter.',
    example:
      'If a job description says "experience with CI/CD pipelines," do not just list "CI/CD" in your skills. Also describe it in your experience: "Built and maintained CI/CD pipelines using GitHub Actions, reducing deployment time from 4 hours to 15 minutes."',
    resumeTip:
      'Use exact matches for technical terms (do not paraphrase "Kubernetes" as "container orchestration") but vary your language for soft skills to keep the resume natural.',
    relatedTerms: ['resume-keywords', 'applicant-tracking-system', 'ats-friendly-resume'],
  },
  {
    slug: 'resume-parsing',
    term: 'Resume Parsing',
    category: 'ATS & Technology',
    shortDefinition:
      'The automated process by which ATS software extracts and categorizes information from your resume into structured data fields.',
    fullDefinition:
      'Resume parsing is the technology that allows ATS software to read your resume document (PDF, DOCX, or plain text) and extract structured information such as your name, contact details, work history, education, and skills into organized database fields.\n\nParsers work by identifying patterns, section headers, and formatting cues. When a parser encounters non-standard formatting — such as tables, graphics, unusual fonts, or creative layouts — it may misinterpret or skip information entirely.\n\nCommon parsing errors include: assigning work experience to the wrong employer, missing skills listed in graphic format, confusing multi-column layouts, and failing to extract dates in non-standard formats.',
    example:
      'A well-formatted entry like "Senior Developer | Acme Corp | Jan 2022 – Present" is easily parsed. But "ACME CORP senior developer 2022-now" in a text box might confuse the parser.',
    resumeTip:
      'Use a standard format for job entries: Job Title, Company Name — Location | Start Date – End Date. This pattern is universally recognized by ATS parsers.',
    relatedTerms: ['applicant-tracking-system', 'ats-friendly-resume', 'resume-format'],
  },

  // ── Career Development ─────────────────────────────────────────────────
  {
    slug: 'career-change',
    term: 'Career Change',
    category: 'Career Development',
    shortDefinition:
      'The process of transitioning from one industry or profession to a different one, requiring you to reframe your experience around transferable skills.',
    fullDefinition:
      'A career change involves moving from one professional field to another. This can range from a slight pivot (e.g., sales to marketing) to a complete shift (e.g., teaching to software engineering). Career changes are increasingly common, with the average person changing careers 3-7 times in their lifetime.\n\nThe biggest challenge is convincing employers that your existing skills transfer to the new role. This requires strategic resume writing that emphasizes transferable skills (leadership, analysis, communication, project management), relevant training or education, and any bridge experience (volunteer work, freelance projects, bootcamps).\n\nA combination resume format often works best for career changers, as it lets you lead with relevant skills before showing your chronological work history.',
    example:
      'A teacher transitioning to corporate training might reframe "Developed curriculum for 150 students" as "Designed and delivered training programs for diverse audiences of 150+, improving learning outcomes by 30% as measured by assessment scores."',
    resumeTip:
      'Use a combination resume format and write your summary targeting the new role. Focus bullet points on transferable skills and results rather than industry-specific duties.',
    relatedTerms: ['transferable-skills', 'combination-resume', 'functional-resume'],
  },
  {
    slug: 'transferable-skills',
    term: 'Transferable Skills',
    category: 'Career Development',
    shortDefinition:
      'Skills developed in one role or industry that are applicable to other roles and industries, such as leadership, communication, project management, and analysis.',
    fullDefinition:
      'Transferable skills are abilities that are valuable across different jobs, industries, and career paths. They are particularly important for career changers, new graduates, and anyone moving into a new type of role.\n\nCommon transferable skills include: leadership and team management, communication (written and verbal), data analysis and problem solving, project management and organization, client relationship management, training and mentoring, and strategic planning.\n\nThe key is identifying which of your transferable skills are most relevant to the target role and then providing concrete examples of how you have applied them. Simply listing "leadership" is not enough — you need evidence like "Led cross-functional team of 8 through product launch, delivering on time and 10% under budget."',
    example:
      'A military veteran transitioning to corporate might translate: "Commanded a platoon of 30 soldiers across 3 deployments" into "Led and developed a team of 30 professionals in high-pressure environments, managing logistics, training, and operations across multiple locations."',
    resumeTip:
      'When changing careers, dedicate a "Core Competencies" or "Relevant Skills" section near the top of your resume to immediately show the hiring manager your applicable abilities.',
    relatedTerms: ['career-change', 'skills-section', 'combination-resume'],
  },
  {
    slug: 'professional-development',
    term: 'Professional Development',
    category: 'Career Development',
    shortDefinition:
      'Ongoing learning and skill-building activities to advance your career, including courses, certifications, conferences, workshops, and self-directed learning.',
    fullDefinition:
      'Professional development encompasses all activities that help you grow your skills, knowledge, and career prospects. This includes formal education (degrees, certifications), structured learning (courses, bootcamps, workshops), and informal learning (reading, mentoring, side projects).\n\nIn rapidly evolving fields like technology, continuous professional development is essential to remain competitive. Employers value candidates who demonstrate a commitment to learning and staying current.\n\nKey professional development activities to highlight on your resume include: industry certifications, relevant courses and bootcamps, conference speaking or attendance, mentoring, side projects, and open-source contributions.',
    example:
      'A data analyst might pursue: Google Data Analytics Certificate, Tableau Desktop Specialist certification, DataCamp courses in Python and SQL, attendance at local data science meetups, and a personal project analyzing public health data.',
    resumeTip:
      'Include recent and relevant professional development in your education section or a separate "Professional Development" section. It signals that you are proactive about growing your skills.',
    relatedTerms: ['certifications', 'career-change', 'upskilling'],
  },
  {
    slug: 'upskilling',
    term: 'Upskilling',
    category: 'Career Development',
    shortDefinition:
      'Learning new skills or enhancing existing ones to stay competitive in your current role or advance to a higher position.',
    fullDefinition:
      'Upskilling refers to the process of acquiring new or advanced skills to improve your performance in your current role or qualify for more advanced positions. Unlike reskilling (learning entirely new skills for a different role), upskilling builds on your existing foundation.\n\nExamples include a marketer learning data analytics to become a growth marketer, a developer learning cloud architecture for a senior engineering role, or a manager taking leadership courses to prepare for a director role.\n\nIn a rapidly changing job market, upskilling is essential. Many companies offer learning stipends, and platforms like Coursera, LinkedIn Learning, and Udemy make it accessible. Including recent upskilling activities on your resume shows employers you are invested in growth.',
    example:
      'A web developer upskilling might learn: TypeScript (from JavaScript), Next.js (from React), AWS (from local hosting), and system design principles — all building on existing skills to qualify for senior roles.',
    resumeTip:
      'List recent courses and certifications in a "Professional Development" section, especially when they fill gaps between your current experience and target role requirements.',
    relatedTerms: ['professional-development', 'certifications', 'career-change'],
  },
  {
    slug: 'career-gap',
    term: 'Career Gap',
    category: 'Career Development',
    shortDefinition:
      'A period of time when you were not formally employed. Career gaps are increasingly common and accepted but should be addressed thoughtfully on your resume.',
    fullDefinition:
      'A career gap is any period on your resume where you were not working in a traditional employment arrangement. Common reasons include caregiving responsibilities, health issues, education, travel, personal projects, or layoffs.\n\nCareer gaps have become much more normalized, especially after the pandemic. However, long unexplained gaps can still raise questions. The best approach is to be honest, brief, and focus on what you did during the gap that demonstrates growth or continued relevance.\n\nStrategies for addressing gaps: use years instead of months for dates (2019 – 2021), list relevant activities during the gap (freelance work, courses, volunteering), address it briefly in your cover letter, and focus the conversation on your current skills and motivation.',
    example:
      'On a resume: "Career Break | 2023 – 2024\nCompleted Google UX Design Certificate, freelanced for 3 clients, and volunteered as a mentor for Code.org." This transforms a gap into evidence of initiative.',
    resumeTip:
      'Do not try to hide gaps with misleading dates. Be honest but strategic. If you did anything productive during the gap (courses, freelance, volunteer work), list it.',
    relatedTerms: ['career-change', 'functional-resume', 'transferable-skills'],
  },
  {
    slug: 'remote-work',
    term: 'Remote Work',
    category: 'Career Development',
    shortDefinition:
      'Working from a location outside of a traditional office, typically from home. Remote work has become a standard arrangement across many industries since 2020.',
    fullDefinition:
      'Remote work refers to professional work performed outside a centralized office, most commonly from home. Since the pandemic accelerated remote work adoption, it has become a permanent fixture in many industries, especially technology, marketing, finance, and creative fields.\n\nFor resume purposes, remote work experience is valuable to highlight when applying for remote positions. It signals that you are self-motivated, experienced with remote collaboration tools, and can work independently without direct supervision.\n\nWhen listing remote work on your resume, include "Remote" as the location next to your job title and company. If the role was hybrid, you can note "Hybrid (Remote/On-site)."',
    example:
      'On a resume: "Senior Software Engineer, Acme Corp — Remote | Jan 2022 – Present\n• Led a distributed team of 6 engineers across 4 time zones\n• Implemented asynchronous communication practices that improved sprint velocity by 20%"',
    resumeTip:
      'When applying for remote roles, highlight remote-specific skills: asynchronous communication, self-management, experience with remote tools (Slack, Zoom, Notion), and working across time zones.',
    relatedTerms: ['professional-development', 'career-change', 'linkedin-profile'],
  },

  // ── Employment ─────────────────────────────────────────────────────────
  {
    slug: 'compensation-package',
    term: 'Compensation Package',
    category: 'Employment',
    shortDefinition:
      'The total value of everything an employer offers you, including base salary, bonuses, equity, benefits, PTO, and other perks.',
    fullDefinition:
      'A compensation package is the complete set of financial and non-financial benefits an employer provides. It typically includes: base salary (fixed annual pay), variable compensation (bonuses, commissions), equity (stock options, RSUs), benefits (health insurance, retirement matching, life insurance), paid time off (vacation, sick leave, holidays), and additional perks (remote work, learning stipend, wellness benefits).\n\nWhen evaluating job offers, it is essential to consider the total compensation package rather than just base salary. A role with a lower base salary but strong equity, bonuses, and benefits could be worth significantly more overall.\n\nCommon components to compare: total cash compensation (base + bonus), equity value and vesting schedule, healthcare coverage and costs, retirement matching, PTO days, and professional development budget.',
    example:
      'Total comp comparison: Company A offers $150K base + $15K bonus + $50K RSUs = $215K total. Company B offers $170K base + no bonus + no equity = $170K total. Company A is worth $45K more despite lower base salary.',
    resumeTip:
      'Demonstrating your impact on company revenue, cost savings, or growth on your resume gives you leverage to negotiate a stronger total compensation package.',
    relatedTerms: ['salary-negotiation', 'job-offer', 'employee-benefits'],
  },
  {
    slug: 'onboarding',
    term: 'Onboarding',
    category: 'Employment',
    shortDefinition:
      'The process of integrating a new employee into an organization, including orientation, training, introductions, and setup for their new role.',
    fullDefinition:
      'Onboarding is the structured process companies use to help new hires become productive and integrated team members. It typically spans the first 30-90 days and includes administrative setup (HR paperwork, systems access), role-specific training, team introductions, goal setting, and cultural orientation.\n\nEffective onboarding significantly impacts retention — employees who experience strong onboarding are 82% more likely to stay with the company. As a new hire, you can contribute to a positive onboarding experience by being proactive, asking questions, scheduling introductory meetings, and documenting what you learn.\n\nIf you have experience designing or improving onboarding processes, this is a valuable achievement to highlight on your resume, as it demonstrates both leadership and organizational thinking.',
    example:
      'A resume bullet point: "Redesigned engineering onboarding program, reducing new hire ramp-up time from 8 weeks to 4 weeks and improving 90-day satisfaction scores by 35%."',
    resumeTip:
      'If you have mentored, trained, or onboarded new employees, include this experience on your resume. It signals leadership ability and investment in team success.',
    relatedTerms: ['professional-development', 'employee-referral', 'compensation-package'],
  },
  {
    slug: 'probationary-period',
    term: 'Probationary Period',
    category: 'Employment',
    shortDefinition:
      'An initial employment period (typically 30-90 days) during which the employer evaluates your performance and fit before confirming permanent employment.',
    fullDefinition:
      'A probationary period is a trial phase at the beginning of employment where both the employer and employee evaluate whether the role is a good fit. It typically lasts 30, 60, or 90 days, depending on the company and position.\n\nDuring probation, the employer assesses your performance, skills, and cultural fit. Some benefits may be limited during this period, and termination may be easier. Once you successfully complete probation, you typically gain full access to benefits and more job security.\n\nTo succeed during probation, focus on learning quickly, asking the right questions, building relationships with your team, and exceeding expectations on early deliverables. Document your achievements from day one — they may be needed for your probation review.',
    example:
      'A typical probation: "90-day probation period with formal review at 30 and 60 days. Full benefits begin upon successful completion. Performance evaluated on: technical skills, team collaboration, and delivery of onboarding milestones."',
    resumeTip:
      'You do not need to mention probationary periods on your resume. Simply list the role with your full start date. Focus on achievements during this period like any other timeframe.',
    relatedTerms: ['onboarding', 'job-offer', 'compensation-package'],
  },
  {
    slug: 'at-will-employment',
    term: 'At-Will Employment',
    category: 'Employment',
    shortDefinition:
      'An employment arrangement where either the employer or employee can terminate the relationship at any time, for any legal reason, with or without notice.',
    fullDefinition:
      'At-will employment means that the employment relationship can be ended by either party at any time and for any reason (as long as it is not illegal, such as discrimination). This is the default employment arrangement in most US states.\n\nFor employees, at-will employment means you can leave a job without legal obligation (though giving two weeks notice is professional courtesy). For employers, it means they can terminate employees without cause, though wrongful termination laws still apply.\n\nExceptions to at-will employment include union contracts, specific employment agreements, implied contracts, and public policy protections. If you have an employment contract, the terms of that contract supersede at-will provisions.',
    example:
      'Most US offer letters include: "This position is at-will employment, meaning either you or [Company] may terminate the employment relationship at any time, with or without cause or notice."',
    resumeTip:
      'At-will employment affects how you leave jobs. Always give proper notice and leave on good terms — your former employers may be contacted as references for future opportunities.',
    relatedTerms: ['job-offer', 'compensation-package', 'probationary-period'],
  },

  // ── Resume Formatting ──────────────────────────────────────────────────
  {
    slug: 'resume-format',
    term: 'Resume Format',
    category: 'Resume Formatting',
    shortDefinition:
      'The overall structure and layout of your resume, including which sections to include, their order, and how information is organized on the page.',
    fullDefinition:
      'Resume format refers to both the organizational structure (chronological, functional, or combination) and the visual layout (margins, fonts, spacing, columns) of your resume. The right format depends on your experience level, career goals, and the expectations of your target industry.\n\nThe three main organizational formats are: chronological (most common, lists experience newest first), functional (groups achievements by skill), and combination (leads with skills, followed by chronological history).\n\nVisual formatting best practices include: 0.5-1 inch margins, 10-12pt font size for body text, consistent spacing between sections, strategic use of bold and italic for emphasis, and clear visual hierarchy through heading sizes.',
    example:
      'A well-formatted resume uses: Professional Summary (top) → Skills (2-3 lines) → Work Experience (3-4 roles, newest first) → Education → Certifications. Each section has a clear bold header and consistent bullet point formatting.',
    resumeTip:
      'The chronological format works for 90% of job seekers. Only deviate if you have a specific reason. Always prioritize readability and ATS compatibility over visual creativity.',
    relatedTerms: ['chronological-resume', 'functional-resume', 'ats-friendly-resume'],
  },
  {
    slug: 'resume-bullet-points',
    term: 'Resume Bullet Points',
    category: 'Resume Formatting',
    shortDefinition:
      'Concise, achievement-oriented statements in your work experience section that describe what you accomplished in each role, ideally starting with action verbs and including metrics.',
    fullDefinition:
      'Resume bullet points are the individual achievement statements listed under each work experience entry. They are the most important content on your resume because they demonstrate your actual impact and capabilities.\n\nThe best bullet points follow the formula: Strong Action Verb + What You Did + Quantified Result. For example, "Developed" (action verb) + "automated testing framework" (what) + "reducing QA time by 60% and catching 3x more bugs before production" (result).\n\nAim for 3-5 bullet points per role (more for recent/relevant roles, fewer for older ones). Each bullet should be 1-2 lines maximum. Avoid starting bullets with "Responsible for" — this describes duties, not achievements.',
    example:
      'Weak: "Responsible for managing social media accounts."\nStrong: "Grew Instagram audience from 5K to 50K followers in 12 months through data-driven content strategy, increasing engagement rate by 340% and generating $200K in attributed revenue."',
    resumeTip:
      'For every bullet point, ask yourself: "So what?" If the bullet just describes a duty, rewrite it to show the impact. Every bullet should answer "What changed because of my work?"',
    relatedTerms: ['work-experience', 'professional-summary', 'resume-keywords'],
  },
  {
    slug: 'action-verbs',
    term: 'Action Verbs',
    category: 'Resume Formatting',
    shortDefinition:
      'Strong, specific verbs used to start resume bullet points that convey leadership, achievement, and impact. Examples: Led, Developed, Increased, Launched, Optimized.',
    fullDefinition:
      'Action verbs are dynamic words that describe specific accomplishments and demonstrate your proactive contribution. Starting each resume bullet point with a strong action verb immediately creates energy and focuses the reader on your achievements.\n\nCategories of action verbs include: Leadership (Led, Directed, Managed, Spearheaded), Achievement (Achieved, Surpassed, Exceeded, Won), Creation (Built, Designed, Developed, Launched), Improvement (Optimized, Streamlined, Enhanced, Transformed), and Analysis (Analyzed, Evaluated, Assessed, Identified).\n\nAvoid weak verbs like "helped," "assisted," "was responsible for," and "participated in." These diminish your contributions. Instead of "Helped with the product launch," write "Co-led product launch reaching 50K users in first month."',
    example:
      'Strong action verbs by category:\nLeadership: Spearheaded, Orchestrated, Championed\nGrowth: Accelerated, Expanded, Scaled\nEfficiency: Streamlined, Automated, Consolidated\nInnovation: Pioneered, Architected, Revolutionized',
    resumeTip:
      'Keep a list of 20-30 strong action verbs handy when writing your resume. Vary the verbs used — do not start every bullet with "Managed" or "Developed."',
    relatedTerms: ['resume-bullet-points', 'work-experience', 'professional-summary'],
  },
];

// ---------------------------------------------------------------------------
// Helper functions
// ---------------------------------------------------------------------------

export function getTermBySlug(slug: string): GlossaryTerm | undefined {
  return glossaryTerms.find((t) => t.slug === slug);
}

export function getAllTermSlugs(): string[] {
  return glossaryTerms.map((t) => t.slug);
}

export function getTermsByCategory(category: string): GlossaryTerm[] {
  return glossaryTerms.filter((t) => t.category === category);
}
