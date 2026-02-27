export interface JobTitle {
  slug: string;
  title: string;
  category: string;
  summaryExamples: string[];
  skills: string[];
  tips: string[];
  relatedTitles: string[];
  faqItems: Array<{ question: string; answer: string }>;
}

export const jobTitles: JobTitle[] = [
  // ==================== TECHNOLOGY ====================
  {
    slug: "software-engineer",
    title: "Software Engineer",
    category: "Technology",
    summaryExamples: [
      "Results-driven software engineer with 6+ years of experience designing and implementing scalable microservices that handle over 10 million daily requests. Reduced system downtime by 42% through proactive monitoring and code optimization at a Fortune 500 company.",
      "Full-cycle software engineer skilled in Java, Python, and TypeScript with a track record of delivering enterprise applications on time and under budget. Led a team of 8 engineers to ship a payment processing platform that processes $2.3B annually.",
      "Innovative software engineer with deep expertise in distributed systems and cloud-native architectures. Improved API response times by 65% and cut infrastructure costs by $180K per year through strategic refactoring and migration to Kubernetes.",
    ],
    skills: [
      "Java",
      "Python",
      "TypeScript",
      "React",
      "Node.js",
      "AWS",
      "Docker",
      "Kubernetes",
      "CI/CD",
      "SQL",
      "Git",
      "Agile/Scrum",
    ],
    tips: [
      "Quantify your impact with metrics such as performance improvements, cost savings, or user growth numbers.",
      "List specific programming languages, frameworks, and tools in a dedicated skills section to pass ATS screening.",
      "Highlight contributions to system design and architecture decisions, not just coding tasks.",
      "Include links to your GitHub profile, portfolio, or notable open-source contributions.",
      "Tailor your resume to each job description by mirroring the exact technologies and keywords listed in the posting.",
    ],
    relatedTitles: ["frontend-developer", "backend-developer", "full-stack-developer", "devops-engineer"],
    faqItems: [
      {
        question: "What should a software engineer put on a resume?",
        answer:
          "A software engineer resume should include a concise professional summary, a skills section listing programming languages and tools, work experience with quantified achievements, relevant projects, and education. Focus on measurable impact such as performance gains, revenue generated, or efficiency improvements.",
      },
      {
        question: "How long should a software engineer resume be?",
        answer:
          "For most software engineers, a one-page resume is ideal if you have fewer than 10 years of experience. Senior engineers with 10+ years may use two pages to adequately cover their career history, leadership roles, and technical accomplishments.",
      },
      {
        question: "How do I make my software engineer resume stand out?",
        answer:
          "Differentiate your resume by leading with measurable results, showcasing system-level impact rather than just task lists, including links to live projects or GitHub repositories, and tailoring every application to the specific job description and tech stack.",
      },
    ],
  },
  {
    slug: "data-scientist",
    title: "Data Scientist",
    category: "Technology",
    summaryExamples: [
      "Data scientist with 5+ years of experience building predictive models that drive business strategy. Developed a customer churn model that saved $4.2M annually by identifying at-risk accounts with 93% accuracy.",
      "Analytical data scientist proficient in Python, R, and SQL with expertise in machine learning and statistical modeling. Built a recommendation engine that increased e-commerce conversion rates by 28% across 15 million monthly users.",
      "Results-oriented data scientist specializing in NLP and deep learning. Designed and deployed a sentiment analysis pipeline processing 500K+ customer reviews daily, enabling real-time product feedback loops that reduced negative reviews by 35%.",
    ],
    skills: [
      "Python",
      "R",
      "SQL",
      "TensorFlow",
      "PyTorch",
      "Scikit-learn",
      "Pandas",
      "Data Visualization",
      "Statistical Modeling",
      "Machine Learning",
      "NLP",
      "Big Data (Spark/Hadoop)",
    ],
    tips: [
      "Emphasize business outcomes your models delivered, not just the algorithms you used.",
      "Include specific model metrics like accuracy, precision, recall, or AUC scores when describing projects.",
      "Mention the scale of data you worked with to demonstrate your ability to handle production workloads.",
      "List both technical tools and domain expertise to show you can bridge the gap between data and business.",
      "Add links to published research, Kaggle profiles, or public notebooks to showcase your analytical thinking.",
    ],
    relatedTitles: ["data-analyst", "software-engineer", "business-analyst", "cybersecurity-analyst"],
    faqItems: [
      {
        question: "What skills should a data scientist highlight on a resume?",
        answer:
          "Key skills to highlight include programming languages like Python and R, machine learning frameworks such as TensorFlow or PyTorch, SQL for data querying, statistical analysis, data visualization tools like Tableau or Matplotlib, and domain-specific knowledge relevant to the industry you are targeting.",
      },
      {
        question: "Should a data scientist include projects on their resume?",
        answer:
          "Yes, including relevant projects is highly recommended, especially if you have limited professional experience. Describe the problem, your approach, the tools used, and the quantified results. Link to GitHub repositories or published notebooks when possible.",
      },
      {
        question: "How do I transition into data science on my resume?",
        answer:
          "Highlight transferable skills such as statistical analysis, programming, and problem-solving from your current role. Include relevant certifications, online courses, or bootcamp completions. Feature personal or academic projects that demonstrate hands-on machine learning and data analysis skills.",
      },
    ],
  },
  {
    slug: "web-developer",
    title: "Web Developer",
    category: "Technology",
    summaryExamples: [
      "Creative web developer with 4+ years of experience building responsive, accessible websites for clients across e-commerce, SaaS, and media industries. Delivered 30+ projects with an average client satisfaction rating of 4.9/5.",
      "Detail-oriented web developer proficient in HTML, CSS, JavaScript, and modern frameworks. Increased organic traffic by 150% for a mid-size retailer through performance optimization, reducing page load times from 4.2s to 1.1s.",
      "Versatile web developer experienced in both front-end and back-end technologies. Built and maintained a web application serving 200K+ monthly active users with 99.9% uptime across a 12-month period.",
    ],
    skills: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "Node.js",
      "REST APIs",
      "Git",
      "Responsive Design",
      "Web Accessibility",
      "SEO",
    ],
    tips: [
      "Include live links to websites you have built or contributed to so hiring managers can see your work directly.",
      "Highlight performance metrics such as load times, Lighthouse scores, or Core Web Vitals improvements.",
      "Demonstrate knowledge of web accessibility standards (WCAG) and responsive design principles.",
      "Show your range by including projects that span different industries and technology stacks.",
      "List CMS platforms, build tools, and deployment pipelines you have experience with.",
    ],
    relatedTitles: ["frontend-developer", "full-stack-developer", "ux-designer", "graphic-designer"],
    faqItems: [
      {
        question: "What is the difference between a web developer and a software engineer resume?",
        answer:
          "A web developer resume typically focuses on web-specific technologies like HTML, CSS, JavaScript, and web frameworks, along with design sensibility and client-facing project delivery. A software engineer resume tends to emphasize broader computer science fundamentals, system design, and backend architectures.",
      },
      {
        question: "Should I include a portfolio link on my web developer resume?",
        answer:
          "Absolutely. A portfolio link is one of the most important elements on a web developer resume. It allows hiring managers to see the quality of your work firsthand. Include 3-5 of your best projects with brief descriptions of the technologies used and problems solved.",
      },
      {
        question: "How do I list freelance web development work on a resume?",
        answer:
          "List freelance work under a heading like 'Freelance Web Developer' with the date range. Include 3-5 bullet points highlighting your most impressive projects, client types, and measurable outcomes such as traffic increases, conversion improvements, or client retention rates.",
      },
    ],
  },
  {
    slug: "product-manager",
    title: "Product Manager",
    category: "Technology",
    summaryExamples: [
      "Strategic product manager with 7+ years of experience driving product vision and roadmap execution for B2B SaaS platforms. Launched a flagship product that generated $12M in ARR within 18 months and grew the user base by 340%.",
      "Data-informed product manager skilled in translating customer insights into high-impact features. Led cross-functional teams of 15+ across engineering, design, and marketing to deliver a mobile app that achieved 1M+ downloads in its first quarter.",
      "Customer-obsessed product manager with deep expertise in agile methodologies and user research. Improved NPS from 32 to 67 over two product cycles by prioritizing usability enhancements identified through 200+ customer interviews.",
    ],
    skills: [
      "Product Strategy",
      "Roadmap Planning",
      "Agile/Scrum",
      "User Research",
      "A/B Testing",
      "Data Analysis",
      "Stakeholder Management",
      "Jira",
      "SQL",
      "Wireframing",
      "Go-to-Market Strategy",
      "OKRs",
    ],
    tips: [
      "Lead with business outcomes such as revenue growth, user acquisition, or retention improvements.",
      "Demonstrate your ability to work cross-functionally by mentioning the teams and stakeholders you collaborated with.",
      "Show your data fluency by referencing specific metrics, A/B tests, or analytics tools you used to make decisions.",
      "Include examples of products or features you took from ideation to launch.",
      "Tailor your resume to highlight domain expertise relevant to the company you are applying to.",
    ],
    relatedTitles: ["project-manager", "ux-designer", "business-analyst", "marketing-manager"],
    faqItems: [
      {
        question: "What makes a strong product manager resume?",
        answer:
          "A strong product manager resume combines business impact metrics with evidence of cross-functional leadership. Highlight revenue growth, user engagement improvements, and successful product launches. Show your ability to balance customer needs, business goals, and technical constraints.",
      },
      {
        question: "Should product managers include technical skills on their resume?",
        answer:
          "Yes, listing technical skills like SQL, data analysis tools, prototyping software, and familiarity with engineering concepts demonstrates that you can effectively communicate with development teams and make data-driven decisions. These skills differentiate you from non-technical candidates.",
      },
      {
        question: "How do I write a product manager resume with no PM experience?",
        answer:
          "Emphasize transferable skills from your current role such as project ownership, stakeholder management, data analysis, and customer interaction. Highlight any side projects, product launches, or cross-functional initiatives you led. Include relevant certifications like Pragmatic Institute or product management bootcamps.",
      },
    ],
  },
  {
    slug: "ux-designer",
    title: "UX Designer",
    category: "Technology",
    summaryExamples: [
      "User-centered UX designer with 5+ years of experience crafting intuitive digital experiences for web and mobile platforms. Redesigned the onboarding flow for a fintech app, increasing completion rates by 58% and reducing support tickets by 40%.",
      "Research-driven UX designer skilled in usability testing, wireframing, and interaction design. Led design for a healthcare platform serving 500K+ patients, achieving a System Usability Scale score of 87 and a 4.8-star app rating.",
      "Collaborative UX designer experienced in working with cross-functional teams to deliver accessible, data-informed designs. Conducted 150+ user interviews and created design systems that reduced development time by 30% across 3 product teams.",
    ],
    skills: [
      "Figma",
      "Sketch",
      "Adobe XD",
      "User Research",
      "Usability Testing",
      "Wireframing",
      "Prototyping",
      "Information Architecture",
      "Design Systems",
      "Accessibility (WCAG)",
      "HTML/CSS",
      "Interaction Design",
    ],
    tips: [
      "Include a link to your portfolio with 3-5 detailed case studies showing your design process from research to final implementation.",
      "Quantify your design impact with metrics like conversion rate improvements, task completion rates, or usability scores.",
      "Describe your research methods and how findings informed design decisions.",
      "Highlight your ability to create and maintain design systems for scalable product development.",
      "Show proficiency in prototyping tools and any front-end development skills that help you communicate with engineers.",
    ],
    relatedTitles: ["graphic-designer", "product-manager", "web-developer", "frontend-developer"],
    faqItems: [
      {
        question: "What should a UX designer resume look like?",
        answer:
          "A UX designer resume should be clean, well-organized, and visually polished without being over-designed. Include a professional summary, a skills section, work experience with measurable outcomes, education, and most importantly, a prominent link to your portfolio. Let your portfolio demonstrate your visual skills while keeping the resume content-focused.",
      },
      {
        question: "How important is a portfolio for a UX designer resume?",
        answer:
          "A portfolio is essential and arguably more important than the resume itself. Hiring managers expect to see 3-5 detailed case studies that walk through your design process including research, ideation, testing, and iteration. Without a portfolio link, most UX design applications will not advance past initial screening.",
      },
      {
        question: "What metrics should a UX designer include on their resume?",
        answer:
          "Include metrics that demonstrate the business impact of your design work such as conversion rate increases, task completion time reductions, user satisfaction scores (NPS, SUS), support ticket reductions, and engagement improvements. These metrics prove that your designs solve real problems.",
      },
    ],
  },
  {
    slug: "devops-engineer",
    title: "DevOps Engineer",
    category: "Technology",
    summaryExamples: [
      "DevOps engineer with 6+ years of experience building and maintaining CI/CD pipelines for enterprise applications. Reduced deployment frequency from monthly to multiple daily releases while maintaining 99.99% uptime across 50+ microservices.",
      "Infrastructure-focused DevOps engineer skilled in AWS, Terraform, and Kubernetes. Automated infrastructure provisioning that cut server setup time from 3 days to 15 minutes and reduced cloud costs by $240K annually through right-sizing and spot instance strategies.",
      "Security-minded DevOps engineer experienced in implementing DevSecOps practices across the software delivery lifecycle. Integrated automated vulnerability scanning that caught 95% of critical issues before production, reducing security incidents by 72%.",
    ],
    skills: [
      "AWS/Azure/GCP",
      "Docker",
      "Kubernetes",
      "Terraform",
      "Ansible",
      "Jenkins/GitHub Actions",
      "Linux",
      "Python/Bash",
      "Monitoring (Prometheus/Grafana)",
      "CI/CD",
      "Infrastructure as Code",
      "Networking",
    ],
    tips: [
      "Emphasize automation achievements and the scale of infrastructure you manage.",
      "Quantify improvements in deployment frequency, lead time, mean time to recovery, and change failure rate.",
      "List specific cloud platforms and services you have hands-on experience with.",
      "Highlight cost optimization initiatives and the dollar amounts saved.",
      "Include relevant certifications such as AWS Solutions Architect, CKA, or HashiCorp Terraform Associate.",
    ],
    relatedTitles: ["software-engineer", "cloud-architect", "cybersecurity-analyst", "backend-developer"],
    faqItems: [
      {
        question: "What certifications should a DevOps engineer list on a resume?",
        answer:
          "High-value certifications include AWS Certified DevOps Engineer Professional, Certified Kubernetes Administrator (CKA), HashiCorp Terraform Associate, Azure DevOps Engineer Expert, and Google Professional Cloud DevOps Engineer. These certifications validate your skills and can significantly improve your chances of getting interviews.",
      },
      {
        question: "How do I describe DevOps achievements on a resume?",
        answer:
          "Use the DORA metrics framework: describe improvements to deployment frequency, lead time for changes, mean time to recovery, and change failure rate. Also quantify cost savings, uptime improvements, and the scale of systems you manage in terms of servers, containers, or requests per second.",
      },
      {
        question: "What is the difference between a DevOps engineer and a site reliability engineer resume?",
        answer:
          "While there is significant overlap, DevOps engineer resumes tend to emphasize CI/CD pipelines, infrastructure automation, and developer tooling. SRE resumes focus more on reliability engineering, SLOs/SLIs, incident management, and capacity planning. Tailor your resume based on which role you are targeting.",
      },
    ],
  },
  {
    slug: "frontend-developer",
    title: "Frontend Developer",
    category: "Technology",
    summaryExamples: [
      "Frontend developer with 5+ years of experience building performant, accessible web applications using React and TypeScript. Improved Core Web Vitals scores by 60% for an e-commerce platform, directly contributing to a 22% increase in organic search traffic.",
      "Creative frontend developer passionate about pixel-perfect UI implementation and smooth user interactions. Built a component library used across 8 product teams that reduced frontend development time by 40% and ensured brand consistency.",
      "Performance-focused frontend developer experienced in Next.js, React, and modern CSS. Led the migration of a legacy jQuery application to React, reducing bundle size by 55% and improving time-to-interactive from 6.8s to 1.9s.",
    ],
    skills: [
      "React",
      "TypeScript",
      "JavaScript",
      "Next.js",
      "HTML5",
      "CSS3/Tailwind",
      "State Management (Redux/Zustand)",
      "Testing (Jest/Cypress)",
      "Webpack/Vite",
      "REST/GraphQL",
      "Web Accessibility",
      "Performance Optimization",
    ],
    tips: [
      "Showcase your understanding of web performance by mentioning specific metrics like Lighthouse scores or Core Web Vitals.",
      "Highlight experience with design systems, component libraries, and reusable architecture patterns.",
      "Include your approach to testing with specific frameworks and coverage metrics.",
      "Demonstrate accessibility knowledge by referencing WCAG standards and assistive technology testing.",
      "Link to deployed applications, CodePen profiles, or open-source contributions.",
    ],
    relatedTitles: ["web-developer", "full-stack-developer", "ux-designer", "software-engineer"],
    faqItems: [
      {
        question: "What frameworks should a frontend developer list on a resume in 2025?",
        answer:
          "The most in-demand frameworks include React, Next.js, Vue.js, Angular, and Svelte. TypeScript proficiency is now expected rather than optional. Also list meta-frameworks, state management solutions, and testing tools. Tailor your framework list to match the job description while being honest about your proficiency level.",
      },
      {
        question: "How do I show frontend performance skills on a resume?",
        answer:
          "Reference specific improvements you achieved in Core Web Vitals (LCP, FID, CLS), Lighthouse scores, bundle size reductions, and time-to-interactive improvements. Mention techniques you have used such as code splitting, lazy loading, image optimization, and caching strategies.",
      },
      {
        question: "Should frontend developers include design skills on their resume?",
        answer:
          "Yes, listing design tools like Figma and demonstrating understanding of UI/UX principles can be a strong differentiator. It shows you can collaborate effectively with designers and independently make sound design decisions. However, keep the focus on your development skills.",
      },
    ],
  },
  {
    slug: "backend-developer",
    title: "Backend Developer",
    category: "Technology",
    summaryExamples: [
      "Backend developer with 7+ years of experience designing RESTful APIs and microservices architectures. Built a payment processing system handling 50K+ transactions per hour with zero data loss and 99.99% availability.",
      "Scalability-focused backend developer proficient in Node.js, Python, and Go. Optimized database queries that reduced average API response time from 800ms to 120ms, supporting a 3x increase in concurrent users without additional infrastructure.",
      "Security-conscious backend developer experienced in building HIPAA-compliant healthcare platforms. Designed an event-driven architecture processing 2M+ daily events that reduced data pipeline latency by 75% and enabled real-time analytics.",
    ],
    skills: [
      "Node.js",
      "Python",
      "Java",
      "Go",
      "PostgreSQL",
      "MongoDB",
      "Redis",
      "REST APIs",
      "GraphQL",
      "Docker",
      "Message Queues (RabbitMQ/Kafka)",
      "Microservices Architecture",
    ],
    tips: [
      "Emphasize system design experience including database selection, caching strategies, and scalability decisions.",
      "Quantify API performance with metrics like requests per second, response times, and uptime percentages.",
      "Highlight security practices such as authentication implementations, data encryption, and compliance standards.",
      "Describe the scale of systems you have built or maintained in terms of users, transactions, or data volume.",
      "Include experience with testing strategies, particularly integration testing and load testing.",
    ],
    relatedTitles: ["software-engineer", "full-stack-developer", "devops-engineer", "cloud-architect"],
    faqItems: [
      {
        question: "What databases should a backend developer know for their resume?",
        answer:
          "List databases you have production experience with, including relational databases like PostgreSQL and MySQL, NoSQL options like MongoDB and DynamoDB, caching layers like Redis, and search engines like Elasticsearch. Mention your experience with database design, query optimization, and migration strategies.",
      },
      {
        question: "How do I describe API development experience on a resume?",
        answer:
          "Describe the APIs you built by mentioning the architecture style (REST, GraphQL, gRPC), the scale of usage, performance characteristics, and any documentation or versioning strategies you implemented. Include metrics like the number of endpoints, requests served, and reliability percentages.",
      },
      {
        question: "Should backend developers list DevOps skills on their resume?",
        answer:
          "Yes, listing DevOps-adjacent skills like Docker, CI/CD, cloud services, and infrastructure as code demonstrates that you understand the full deployment lifecycle. This is increasingly expected as the line between backend development and operations continues to blur.",
      },
    ],
  },
  {
    slug: "full-stack-developer",
    title: "Full Stack Developer",
    category: "Technology",
    summaryExamples: [
      "Full stack developer with 6+ years of experience building end-to-end web applications using React, Node.js, and PostgreSQL. Architected and launched a SaaS platform that grew to 50K+ users and $2M ARR within the first year.",
      "Versatile full stack developer proficient in both frontend and backend technologies. Delivered a real-time collaboration tool supporting 10K concurrent users with sub-100ms latency, reducing team communication overhead by 45%.",
      "Entrepreneurial full stack developer experienced in taking products from concept to production. Built and scaled an e-commerce marketplace handling $500K+ in monthly transactions across 3 payment gateways with PCI-DSS compliance.",
    ],
    skills: [
      "React",
      "Node.js",
      "TypeScript",
      "Python",
      "PostgreSQL",
      "MongoDB",
      "AWS",
      "Docker",
      "REST APIs",
      "GraphQL",
      "CI/CD",
      "System Design",
    ],
    tips: [
      "Show depth in both frontend and backend rather than appearing as a generalist who is shallow in both areas.",
      "Highlight end-to-end project ownership from database design to user interface implementation.",
      "Include system architecture decisions you made and the trade-offs you considered.",
      "Demonstrate your ability to context-switch between frontend and backend concerns effectively.",
      "Mention deployment and DevOps experience to show you can handle the full development lifecycle.",
    ],
    relatedTitles: ["frontend-developer", "backend-developer", "software-engineer", "web-developer"],
    faqItems: [
      {
        question: "How do I organize a full stack developer resume?",
        answer:
          "Organize your skills into clear categories such as Frontend, Backend, Database, and DevOps to show breadth. In your experience section, highlight projects where you owned the entire stack. Use a professional summary that positions you as someone who can deliver complete solutions rather than just writing code on one side.",
      },
      {
        question: "Should a full stack developer specialize on their resume?",
        answer:
          "It depends on the role. If the job leans frontend-heavy or backend-heavy, emphasize that side while still showing full stack capability. For true full stack roles, demonstrate equal proficiency. Having a slight specialization can actually be an advantage as it shows depth alongside breadth.",
      },
      {
        question: "What projects should a full stack developer include on a resume?",
        answer:
          "Include projects that showcase your ability to work across the entire stack. Highlight projects where you designed the database schema, built the API layer, implemented the frontend, and handled deployment. Personal SaaS projects, open-source contributions, and freelance work all demonstrate end-to-end capability.",
      },
    ],
  },
  {
    slug: "data-analyst",
    title: "Data Analyst",
    category: "Technology",
    summaryExamples: [
      "Detail-oriented data analyst with 4+ years of experience transforming raw data into actionable business insights. Created automated reporting dashboards that saved the marketing team 20 hours per week and identified $1.8M in revenue optimization opportunities.",
      "SQL-proficient data analyst experienced in building ETL pipelines and interactive visualizations for executive stakeholders. Analyzed customer behavior data across 2M+ records to inform a pricing strategy that increased average order value by 18%.",
      "Business-minded data analyst with expertise in statistical analysis and data storytelling. Developed a predictive inventory model that reduced overstock by 32% and stockouts by 28%, saving $650K annually for a retail chain.",
    ],
    skills: [
      "SQL",
      "Python",
      "Excel/Google Sheets",
      "Tableau",
      "Power BI",
      "Statistical Analysis",
      "Data Cleaning",
      "ETL Processes",
      "A/B Testing",
      "Data Modeling",
      "Presentation Skills",
      "Google Analytics",
    ],
    tips: [
      "Lead with business outcomes rather than technical processes to show the value of your analysis.",
      "Include examples of how your insights directly influenced business decisions or strategy.",
      "Mention the scale of data you work with and the tools you use for analysis and visualization.",
      "Highlight communication skills by describing how you presented findings to non-technical stakeholders.",
      "Show progression from basic reporting to more complex analytical projects throughout your career.",
    ],
    relatedTitles: ["data-scientist", "business-analyst", "financial-analyst", "marketing-manager"],
    faqItems: [
      {
        question: "What is the difference between a data analyst and data scientist resume?",
        answer:
          "A data analyst resume emphasizes business reporting, SQL querying, data visualization, and translating data into actionable recommendations. A data scientist resume focuses more on machine learning, predictive modeling, and advanced statistical methods. Data analyst roles typically require strong communication and business acumen alongside technical skills.",
      },
      {
        question: "What tools should a data analyst list on their resume?",
        answer:
          "Essential tools include SQL for data querying, Excel or Google Sheets for analysis, and a visualization tool like Tableau or Power BI. Python or R for advanced analysis, Google Analytics for web data, and knowledge of cloud data warehouses like BigQuery or Snowflake are increasingly valuable additions.",
      },
      {
        question: "How do I write a data analyst resume with no experience?",
        answer:
          "Highlight analytical projects from coursework, bootcamps, or personal exploration using public datasets. Emphasize transferable skills like Excel proficiency, attention to detail, and problem-solving from previous roles. Include certifications like Google Data Analytics Professional Certificate to validate your skills.",
      },
    ],
  },
  {
    slug: "cybersecurity-analyst",
    title: "Cybersecurity Analyst",
    category: "Technology",
    summaryExamples: [
      "Cybersecurity analyst with 5+ years of experience protecting enterprise networks and sensitive data assets. Led incident response for 200+ security events, reducing mean time to containment from 4 hours to 45 minutes through automated playbook implementation.",
      "Threat-focused cybersecurity analyst skilled in SIEM management, vulnerability assessment, and compliance frameworks. Conducted penetration testing that identified 35 critical vulnerabilities before exploitation, preventing an estimated $3M in potential breach costs.",
      "Proactive cybersecurity analyst experienced in building security operations centers from the ground up. Implemented a zero-trust architecture across a 5,000-employee organization, reducing unauthorized access incidents by 89% within the first year.",
    ],
    skills: [
      "SIEM (Splunk/QRadar)",
      "Penetration Testing",
      "Vulnerability Assessment",
      "Incident Response",
      "Firewall Management",
      "Network Security",
      "Python/PowerShell",
      "Compliance (SOC 2/ISO 27001)",
      "Threat Intelligence",
      "Risk Assessment",
      "Forensic Analysis",
      "Cloud Security",
    ],
    tips: [
      "Highlight certifications prominently as they carry significant weight in cybersecurity hiring.",
      "Quantify your impact with metrics such as incidents detected, response times, and vulnerabilities remediated.",
      "Describe the scale and complexity of the environments you have protected.",
      "Include experience with compliance frameworks and regulatory requirements relevant to the target industry.",
      "Demonstrate continuous learning by listing recent training, conferences, or research in emerging threats.",
    ],
    relatedTitles: ["devops-engineer", "cloud-architect", "software-engineer", "data-scientist"],
    faqItems: [
      {
        question: "What certifications should a cybersecurity analyst list on a resume?",
        answer:
          "The most valued certifications include CompTIA Security+, Certified Information Systems Security Professional (CISSP), Certified Ethical Hacker (CEH), GIAC certifications, and CompTIA CySA+. For entry-level analysts, Security+ is often the minimum requirement. CISSP is highly valued for senior roles.",
      },
      {
        question: "How do I write a cybersecurity resume with no professional experience?",
        answer:
          "Highlight hands-on experience from home labs, CTF competitions, and platforms like HackTheBox or TryHackMe. List relevant certifications like CompTIA Security+ or CEH. Include coursework, capstone projects, and any volunteer security assessments. Emphasize transferable IT skills from help desk or system administration roles.",
      },
      {
        question: "What should a cybersecurity analyst put in their skills section?",
        answer:
          "Organize skills into categories: Security Tools (SIEM, IDS/IPS, firewalls), Technical Skills (scripting, networking, OS), Frameworks (NIST, MITRE ATT&CK, ISO 27001), and Soft Skills (incident communication, risk assessment). Tailor the list to match the specific job posting requirements.",
      },
    ],
  },
  {
    slug: "cloud-architect",
    title: "Cloud Architect",
    category: "Technology",
    summaryExamples: [
      "Cloud architect with 8+ years of experience designing and implementing enterprise cloud strategies across AWS and Azure. Led a multi-cloud migration for a Fortune 500 company, moving 200+ applications to the cloud while reducing infrastructure costs by 35%.",
      "Solutions-oriented cloud architect with deep AWS expertise and 5 professional certifications. Designed a serverless architecture processing 100M+ daily events that scaled automatically to handle 10x traffic spikes during peak periods with zero manual intervention.",
      "Security-first cloud architect experienced in building compliant cloud environments for financial services. Implemented a landing zone framework adopted across 50+ AWS accounts that reduced security audit findings by 80% and achieved SOC 2 Type II certification.",
    ],
    skills: [
      "AWS",
      "Azure",
      "GCP",
      "Terraform",
      "CloudFormation",
      "Kubernetes",
      "Serverless Architecture",
      "Multi-Cloud Strategy",
      "Cost Optimization",
      "Security Architecture",
      "Networking (VPC/VPN)",
      "Solution Design",
    ],
    tips: [
      "Lead with certifications and the scale of cloud environments you have designed or managed.",
      "Quantify cost savings, performance improvements, and migration scope with specific numbers.",
      "Describe architectural decisions and trade-offs you evaluated when designing cloud solutions.",
      "Highlight multi-cloud and hybrid cloud experience as enterprises increasingly adopt these strategies.",
      "Include experience with governance, compliance, and security frameworks specific to cloud environments.",
    ],
    relatedTitles: ["devops-engineer", "backend-developer", "cybersecurity-analyst", "software-engineer"],
    faqItems: [
      {
        question: "What certifications are most valuable for a cloud architect resume?",
        answer:
          "The top certifications are AWS Solutions Architect Professional, Azure Solutions Architect Expert, and Google Cloud Professional Cloud Architect. Specialty certifications in security, networking, or data analytics add additional value. Having certifications across multiple providers demonstrates versatility.",
      },
      {
        question: "How do I describe cloud migration experience on a resume?",
        answer:
          "Describe the scope (number of applications, data volume, timeline), strategy (lift-and-shift, re-platform, or re-architect), challenges overcome, and measurable outcomes such as cost reduction, performance improvement, and downtime during migration. Mention specific AWS or Azure migration services used.",
      },
      {
        question: "What is the difference between a cloud architect and a DevOps engineer resume?",
        answer:
          "A cloud architect resume focuses on strategic design decisions, enterprise architecture patterns, cost optimization, and stakeholder communication. A DevOps engineer resume emphasizes automation, CI/CD pipelines, monitoring, and operational excellence. Cloud architects operate at a higher abstraction level with broader organizational impact.",
      },
    ],
  },
  // ==================== HEALTHCARE ====================
  {
    slug: "registered-nurse",
    title: "Registered Nurse",
    category: "Healthcare",
    summaryExamples: [
      "Compassionate registered nurse with 8+ years of experience in critical care and emergency departments. Maintained a 98% patient satisfaction score while managing care for an average of 6 high-acuity patients per shift in a Level I trauma center.",
      "Dedicated RN with expertise in cardiac care and patient education. Implemented a post-discharge follow-up protocol that reduced 30-day readmission rates by 24% and improved medication adherence compliance to 91% among heart failure patients.",
      "Evidence-based registered nurse with 5+ years of experience in pediatric oncology. Coordinated care for 150+ patients annually, mentored 12 new graduate nurses, and contributed to a quality improvement project that decreased central line infections by 45%.",
    ],
    skills: [
      "Patient Assessment",
      "IV Therapy",
      "Electronic Health Records (Epic/Cerner)",
      "Medication Administration",
      "Critical Thinking",
      "Patient Education",
      "Wound Care",
      "BLS/ACLS Certification",
      "Care Coordination",
      "Infection Control",
      "Team Leadership",
      "Clinical Documentation",
    ],
    tips: [
      "Include your nursing license number, state, and expiration date in the header or credentials section.",
      "Highlight specialty certifications such as CCRN, CEN, or OCN that align with the position.",
      "Quantify patient outcomes, satisfaction scores, and quality improvement contributions.",
      "List specific EHR systems you have used, as this is a common screening criterion.",
      "Emphasize both clinical skills and soft skills like communication, empathy, and teamwork.",
    ],
    relatedTitles: ["nurse-practitioner", "physician-assistant", "medical-assistant", "physical-therapist"],
    faqItems: [
      {
        question: "What should a registered nurse put on a resume?",
        answer:
          "Include your nursing license details, certifications (BLS, ACLS, specialty certs), clinical skills, EHR proficiency, and quantified achievements. Highlight patient outcomes, satisfaction scores, and quality improvement projects. List specific departments and patient populations you have experience with.",
      },
      {
        question: "How do I write a new graduate nurse resume?",
        answer:
          "Focus on clinical rotations, preceptorship experiences, and relevant skills gained during nursing school. Highlight your capstone project, any patient care metrics from clinical placements, and leadership roles in nursing organizations. Include your NCLEX pass date and state license information.",
      },
      {
        question: "Should nurses include volunteer experience on their resume?",
        answer:
          "Yes, especially if it involves healthcare-related volunteering such as health fairs, community clinics, or medical mission trips. Volunteer experience demonstrates compassion, community involvement, and clinical skills applied in diverse settings, which are all valued by healthcare employers.",
      },
    ],
  },
  {
    slug: "nurse-practitioner",
    title: "Nurse Practitioner",
    category: "Healthcare",
    summaryExamples: [
      "Board-certified family nurse practitioner with 10+ years of clinical experience managing complex chronic conditions. Maintains a patient panel of 800+ with a 96% patient satisfaction rating and HbA1c improvement rates exceeding national benchmarks by 15%.",
      "Autonomous nurse practitioner with prescriptive authority and expertise in urgent care medicine. Evaluated and treated 25+ patients daily with diagnostic accuracy rates of 97%, reducing unnecessary specialist referrals by 30% and saving the clinic $420K annually.",
      "Research-active psychiatric nurse practitioner specializing in anxiety and mood disorders. Developed an integrated telehealth program that expanded access to 300+ rural patients and reduced no-show rates from 22% to 8% through digital engagement strategies.",
    ],
    skills: [
      "Advanced Health Assessment",
      "Differential Diagnosis",
      "Prescriptive Authority",
      "Chronic Disease Management",
      "Patient Education",
      "EHR Documentation",
      "Evidence-Based Practice",
      "Telehealth",
      "Procedure Skills",
      "Care Coordination",
      "Quality Improvement",
      "Clinical Research",
    ],
    tips: [
      "List your NP certification, state license, DEA number, and national board certification prominently.",
      "Highlight your autonomous practice capabilities and the complexity of cases you manage independently.",
      "Include your patient panel size and specific outcome metrics that demonstrate clinical effectiveness.",
      "Mention collaborative agreements, specialty training, and any procedures you perform independently.",
      "Describe practice settings and patient populations to help employers assess your fit for their clinic.",
    ],
    relatedTitles: ["registered-nurse", "physician-assistant", "pharmacist", "medical-assistant"],
    faqItems: [
      {
        question: "What credentials should a nurse practitioner list on a resume?",
        answer:
          "List your highest degree (MSN or DNP), board certification (FNP-BC, AGACNP-BC, PMHNP-BC), state license number, DEA registration, and any specialty certifications. Place these credentials after your name in the header. Include BLS, ACLS, and any procedural certifications relevant to your specialty.",
      },
      {
        question: "How do I transition from RN to NP on my resume?",
        answer:
          "Highlight your NP education, clinical hours completed, and board certification. Reframe your RN experience to emphasize advanced assessment, clinical decision-making, and patient management skills that transfer to the NP role. Include any preceptorship experiences and the patient populations you managed during your NP training.",
      },
      {
        question: "What makes a nurse practitioner resume stand out to employers?",
        answer:
          "Employers look for evidence of clinical autonomy, strong patient outcomes, and the ability to manage a full patient panel. Include specific metrics such as patient satisfaction scores, quality measures you have met or exceeded, panel sizes, and any revenue generation data. Demonstrating telehealth experience and EHR proficiency is increasingly important.",
      },
    ],
  },
  {
    slug: "medical-assistant",
    title: "Medical Assistant",
    category: "Healthcare",
    summaryExamples: [
      "Certified medical assistant with 4+ years of experience in high-volume primary care settings. Managed patient intake for 40+ patients daily with a 99.5% accuracy rate in vital sign documentation and insurance verification.",
      "Bilingual medical assistant (English/Spanish) skilled in both clinical and administrative duties. Streamlined the appointment scheduling process, reducing patient wait times by 35% and increasing daily patient throughput by 20% without sacrificing care quality.",
      "Detail-oriented medical assistant with phlebotomy certification and EKG expertise. Trained 8 new medical assistants on clinical protocols and contributed to a quality initiative that improved vaccination rates among pediatric patients by 28%.",
    ],
    skills: [
      "Vital Signs",
      "Phlebotomy",
      "EKG Administration",
      "Patient Intake",
      "EHR (Epic/eClinicalWorks)",
      "Insurance Verification",
      "Medication Administration",
      "Appointment Scheduling",
      "Medical Terminology",
      "Specimen Collection",
      "HIPAA Compliance",
      "Bilingual Communication",
    ],
    tips: [
      "Include your CMA or RMA certification and CPR/BLS credentials prominently on your resume.",
      "Highlight both clinical and administrative skills to show your versatility in the medical office.",
      "Quantify your daily patient volume and accuracy rates for procedures like phlebotomy or vitals.",
      "Mention specific EHR systems you are proficient in, as many clinics use this as a hiring filter.",
      "Include any specialized training such as phlebotomy certification, EKG, or injection administration.",
    ],
    relatedTitles: ["registered-nurse", "dental-hygienist", "pharmacist", "physical-therapist"],
    faqItems: [
      {
        question: "What certifications should a medical assistant have on their resume?",
        answer:
          "The most recognized certifications include Certified Medical Assistant (CMA) from AAMA, Registered Medical Assistant (RMA) from AMT, and the National Certified Medical Assistant (NCMA). Additionally, CPR/BLS certification is typically required. Phlebotomy certification is a valuable bonus that expands your clinical capabilities.",
      },
      {
        question: "How do I write a medical assistant resume with no experience?",
        answer:
          "Focus on skills gained during your medical assistant training program, including clinical rotations and externship experiences. Highlight hands-on skills like phlebotomy, vital signs, and EHR navigation. Include any customer service or administrative experience from previous jobs that demonstrates patient interaction abilities.",
      },
      {
        question: "What is the best resume format for a medical assistant?",
        answer:
          "A reverse-chronological format works best for experienced medical assistants, placing your most recent clinical experience first. For new graduates, a combination format that leads with a skills summary followed by education and externship experience is more effective. Keep it to one page and use clear section headings.",
      },
    ],
  },
  {
    slug: "pharmacist",
    title: "Pharmacist",
    category: "Healthcare",
    summaryExamples: [
      "Licensed pharmacist with 7+ years of experience in high-volume retail pharmacy dispensing 400+ prescriptions daily. Achieved a medication error rate of less than 0.01% and consistently exceeded patient consultation targets by counseling 95% of new prescription patients.",
      "Clinical pharmacist with expertise in anticoagulation management and medication therapy management. Managed a warfarin clinic of 250+ patients, maintaining therapeutic INR ranges 82% of the time and reducing adverse bleeding events by 40%.",
      "Innovative pharmacist with experience in pharmacy operations and workflow optimization. Implemented an automated dispensing system that increased daily prescription capacity by 30% and reduced patient wait times from 25 minutes to 12 minutes.",
    ],
    skills: [
      "Medication Dispensing",
      "Clinical Consultation",
      "Drug Interaction Analysis",
      "Pharmacy Management",
      "Immunization Administration",
      "Medication Therapy Management",
      "Regulatory Compliance",
      "Inventory Management",
      "Patient Counseling",
      "Pharmacy Software Systems",
      "Compounding",
      "Insurance/PBM Processing",
    ],
    tips: [
      "List your PharmD, state licenses, and any board certifications (BCPS, BCOP, etc.) prominently.",
      "Include your daily prescription volume to help employers assess your experience with high-volume environments.",
      "Highlight patient safety achievements such as error reduction rates and quality metrics.",
      "Mention immunization certification and any specialty clinical services you provide.",
      "Describe any leadership experience including technician supervision and workflow improvements.",
    ],
    relatedTitles: ["nurse-practitioner", "registered-nurse", "physician-assistant", "medical-assistant"],
    faqItems: [
      {
        question: "What should a pharmacist include on their resume?",
        answer:
          "Include your PharmD degree, active state licenses with numbers, board certifications, daily prescription volume, and patient safety metrics. Highlight clinical services like immunizations, MTM, and specialty consulting. List pharmacy software systems and any automation tools you have experience with.",
      },
      {
        question: "How do I write a clinical pharmacist resume vs. a retail pharmacist resume?",
        answer:
          "A clinical pharmacist resume should emphasize direct patient care, drug therapy management, rounding with medical teams, and clinical outcome improvements. A retail pharmacist resume should focus on dispensing volume, patient consultations, workflow management, and team leadership. Both should include patient safety metrics.",
      },
      {
        question: "What are the most important skills for a pharmacist resume?",
        answer:
          "Essential skills include medication dispensing accuracy, clinical knowledge, patient counseling, drug interaction analysis, and regulatory compliance. Increasingly valuable skills include immunization administration, medication therapy management, specialty pharmacy knowledge, and proficiency with pharmacy automation systems.",
      },
    ],
  },
  {
    slug: "physical-therapist",
    title: "Physical Therapist",
    category: "Healthcare",
    summaryExamples: [
      "Licensed physical therapist with 6+ years of experience in orthopedic and sports rehabilitation. Maintained a caseload of 50+ patients weekly with a 92% functional outcome achievement rate and 4.9/5 patient satisfaction scores across 500+ reviews.",
      "Evidence-based physical therapist specializing in post-surgical rehabilitation and chronic pain management. Developed a group exercise program that improved patient outcomes by 25% while reducing per-patient treatment costs by 18%.",
      "Pediatric physical therapist with 8+ years of experience treating developmental delays and neuromuscular conditions. Created individualized treatment plans for 200+ children annually, achieving an 88% milestone attainment rate documented through standardized assessments.",
    ],
    skills: [
      "Manual Therapy",
      "Therapeutic Exercise",
      "Patient Assessment",
      "Treatment Planning",
      "Orthopedic Rehabilitation",
      "Sports Medicine",
      "Neurological Rehabilitation",
      "EMR Documentation",
      "Patient Education",
      "Modalities (Ultrasound/E-stim)",
      "Gait Training",
      "Functional Outcome Measurement",
    ],
    tips: [
      "Include your PT license, state, and any specialty certifications like OCS, SCS, or NCS.",
      "Quantify patient outcomes using standardized measures and functional improvement percentages.",
      "Describe your typical caseload, patient populations, and treatment settings.",
      "Highlight evidence-based approaches and any continuing education in specialized techniques.",
      "Include any supervisory experience with PTAs, students, or support staff.",
    ],
    relatedTitles: ["registered-nurse", "medical-assistant", "physician-assistant", "dental-hygienist"],
    faqItems: [
      {
        question: "What certifications should a physical therapist list on a resume?",
        answer:
          "List your DPT degree, state license, and ABPTS specialist certifications (OCS for orthopedic, SCS for sports, NCS for neurologic). Include advanced certifications such as dry needling, manual therapy certifications (FAAOMPT), and any Certified Strength and Conditioning Specialist (CSCS) credentials.",
      },
      {
        question: "How do I describe patient outcomes on a physical therapy resume?",
        answer:
          "Use standardized outcome measures and percentages, such as functional improvement rates, discharge disposition data, and patient satisfaction scores. For example, state that 90% of your patients achieved their functional goals within the planned number of visits, or that you reduced average length of care by a specific percentage.",
      },
      {
        question: "What makes a physical therapist resume stand out?",
        answer:
          "Standout PT resumes combine clinical expertise with evidence of practice efficiency and patient outcomes. Include specialty certifications, outcome data, patient volume metrics, and any contributions to clinical programs or protocols. Research publications, mentorship roles, and community involvement also differentiate you from other candidates.",
      },
    ],
  },
  {
    slug: "dental-hygienist",
    title: "Dental Hygienist",
    category: "Healthcare",
    summaryExamples: [
      "Licensed dental hygienist with 5+ years of experience performing comprehensive oral assessments and prophylaxis treatments. Maintained a patient recall rate of 88% by building strong patient relationships and implementing effective recare communication strategies.",
      "Detail-oriented dental hygienist skilled in periodontal therapy and digital radiography. Increased practice revenue by 22% through identification and treatment of periodontal cases, performing scaling and root planing for 30+ patients monthly.",
      "Patient-centered dental hygienist with expertise in pediatric and geriatric populations. Developed an oral health education program that improved patient compliance with home care instructions by 40% as measured through 6-month follow-up assessments.",
    ],
    skills: [
      "Prophylaxis",
      "Periodontal Therapy",
      "Scaling and Root Planing",
      "Digital Radiography",
      "Oral Health Assessment",
      "Patient Education",
      "Dental Software (Dentrix/Eaglesoft)",
      "Sealant Application",
      "Fluoride Treatment",
      "Infection Control",
      "Local Anesthesia",
      "Charting/Documentation",
    ],
    tips: [
      "Include your dental hygiene license, state, and any additional certifications like local anesthesia or nitrous oxide.",
      "Highlight patient retention rates and practice growth metrics you contributed to.",
      "Mention specific dental software systems and digital imaging technologies you are proficient in.",
      "Describe your experience with different patient populations and specialty areas of practice.",
      "Include continuing education hours and any expanded function certifications.",
    ],
    relatedTitles: ["registered-nurse", "medical-assistant", "physical-therapist", "pharmacist"],
    faqItems: [
      {
        question: "What should a dental hygienist put on their resume?",
        answer:
          "Include your dental hygiene degree, state license, CPR certification, and any expanded function permits. Highlight daily patient volume, recall rates, periodontal case identification rates, and patient education initiatives. List dental software proficiency and digital radiography experience.",
      },
      {
        question: "How do I write a dental hygienist resume for my first job?",
        answer:
          "Focus on clinical skills developed during your dental hygiene program, including patient counts from clinical rotations. Highlight your board exam scores, any awards received during school, volunteer dental care experience, and externship placements. Include your portfolio of radiographs if the program produced one.",
      },
      {
        question: "What skills are most important for a dental hygienist resume?",
        answer:
          "Critical skills include prophylaxis and periodontal therapy, patient assessment and radiographic interpretation, patient education and communication, infection control procedures, and proficiency with dental practice management software. Soft skills like empathy and patient rapport are equally important for this patient-facing role.",
      },
    ],
  },
  {
    slug: "physician-assistant",
    title: "Physician Assistant",
    category: "Healthcare",
    summaryExamples: [
      "NCCPA-certified physician assistant with 7+ years of experience in emergency medicine. Evaluated and managed 20+ patients per shift across all acuity levels, maintaining a 98.5% diagnostic concordance rate with attending physicians and reducing average door-to-disposition time by 18 minutes.",
      "Surgical physician assistant with expertise in orthopedic procedures and post-operative care. First-assisted in 300+ surgeries annually, managed a post-surgical patient panel of 150+, and developed a pre-operative screening protocol that reduced surgical cancellations by 22%.",
      "Primary care physician assistant with a focus on preventive medicine and chronic disease management. Built and managed a patient panel of 1,200+ with a Medicare HEDIS quality score in the 95th percentile and patient satisfaction consistently above the 90th percentile nationally.",
    ],
    skills: [
      "Patient Examination",
      "Differential Diagnosis",
      "Prescriptive Authority",
      "Surgical Assistance",
      "Procedure Performance",
      "EHR Documentation",
      "Chronic Disease Management",
      "Emergency Medicine",
      "Patient Education",
      "Lab/Imaging Interpretation",
      "Team Collaboration",
      "Evidence-Based Medicine",
    ],
    tips: [
      "List your PA-C certification, NCCPA status, state license, and DEA registration prominently.",
      "Include specific procedures you are trained and privileged to perform independently.",
      "Quantify your patient panel size, daily patient volume, and clinical outcome metrics.",
      "Highlight your collaborative practice experience and the specialties you have worked in.",
      "Mention CME credits, specialty CAQs, and any additional certifications relevant to your target role.",
    ],
    relatedTitles: ["nurse-practitioner", "registered-nurse", "pharmacist", "medical-assistant"],
    faqItems: [
      {
        question: "What should a physician assistant put on their resume?",
        answer:
          "Include your PA-C credential, NCCPA certification status, state license numbers, DEA registration, and specialty experience. Highlight patient volume, diagnostic accuracy, procedure lists, and quality metrics. List your supervising physician relationships and collaborative practice experience.",
      },
      {
        question: "How do I format a physician assistant resume?",
        answer:
          "Use a clean, professional format with your PA-C credentials after your name. Lead with a summary highlighting your specialty and years of experience. List certifications prominently, followed by clinical experience with quantified achievements, procedures, and patient outcomes. Keep it to 1-2 pages depending on experience level.",
      },
      {
        question: "What makes a PA resume different from a nurse practitioner resume?",
        answer:
          "PA resumes typically emphasize the medical model training, surgical assisting experience, and specialty rotation breadth. NP resumes often highlight nursing background and holistic care approach. Both should include prescriptive authority, patient management metrics, and clinical outcome data. Focus on the strengths unique to your training and experience.",
      },
    ],
  },
  // ==================== BUSINESS & FINANCE ====================
  {
    slug: "accountant",
    title: "Accountant",
    category: "Business & Finance",
    summaryExamples: [
      "CPA-certified accountant with 6+ years of experience managing financial reporting and tax compliance for mid-size companies with revenues up to $50M. Identified $320K in tax savings through strategic deductions and credits while maintaining 100% compliance with GAAP and IRS regulations.",
      "Detail-oriented accountant with expertise in accounts payable, accounts receivable, and month-end closing processes. Reduced monthly close cycle from 12 days to 5 days by implementing automated reconciliation workflows and streamlining journal entry procedures.",
      "Senior accountant with experience in audit preparation and internal controls. Led the implementation of a new ERP system that improved financial reporting accuracy by 99.8% and reduced manual data entry by 60% across a 15-person accounting department.",
    ],
    skills: [
      "GAAP",
      "Financial Reporting",
      "Tax Preparation",
      "QuickBooks/Xero",
      "Excel (Advanced)",
      "ERP Systems (SAP/Oracle)",
      "Accounts Payable/Receivable",
      "Budgeting & Forecasting",
      "Audit Preparation",
      "Month-End Close",
      "Payroll Processing",
      "Regulatory Compliance",
    ],
    tips: [
      "Include your CPA license, state, and any additional certifications such as CMA or CIA.",
      "Quantify the scope of your responsibilities with revenue figures, budget sizes, and transaction volumes.",
      "Highlight process improvements that reduced close times, error rates, or audit findings.",
      "List specific accounting software and ERP systems you are proficient in.",
      "Demonstrate progression from staff accountant to senior roles with increasing responsibility.",
    ],
    relatedTitles: ["financial-analyst", "business-analyst", "operations-manager", "management-consultant"],
    faqItems: [
      {
        question: "What certifications should an accountant list on a resume?",
        answer:
          "The CPA (Certified Public Accountant) is the most important certification for accountants. Other valuable certifications include CMA (Certified Management Accountant), CIA (Certified Internal Auditor), and EA (Enrolled Agent) for tax specialists. Always include your license state and active status.",
      },
      {
        question: "How do I write an accountant resume with no experience?",
        answer:
          "Highlight your accounting degree, relevant coursework, and any internship experience. Include proficiency in accounting software like QuickBooks and advanced Excel skills. Mention any volunteer bookkeeping or treasurer roles. If you have passed CPA exam sections, list those as well.",
      },
      {
        question: "What software should an accountant list on their resume?",
        answer:
          "List accounting software (QuickBooks, Xero, Sage), ERP systems (SAP, Oracle, NetSuite), tax software (Lacerte, ProConnect), advanced Excel skills (pivot tables, VLOOKUP, macros), and data analysis tools. Tailor the list to match the tools mentioned in the job description.",
      },
    ],
  },
  {
    slug: "financial-analyst",
    title: "Financial Analyst",
    category: "Business & Finance",
    summaryExamples: [
      "Financial analyst with 5+ years of experience in corporate finance and strategic planning. Built financial models that supported $200M+ in investment decisions and delivered quarterly variance analyses that identified $4.5M in cost reduction opportunities.",
      "Results-driven financial analyst with expertise in budgeting, forecasting, and performance reporting. Developed a rolling 12-month forecast model that improved budget accuracy from 85% to 96%, enabling leadership to make more confident capital allocation decisions.",
      "Investment-focused financial analyst with strong DCF and comparable company analysis skills. Evaluated 50+ potential acquisitions, presenting recommendations to C-suite leadership that resulted in 3 successful transactions totaling $75M in combined value.",
    ],
    skills: [
      "Financial Modeling",
      "Excel (Advanced)",
      "Budgeting & Forecasting",
      "Variance Analysis",
      "SQL",
      "Power BI/Tableau",
      "Valuation (DCF/Comps)",
      "Financial Reporting",
      "SAP/Oracle",
      "Presentation Skills",
      "Risk Analysis",
      "Bloomberg Terminal",
    ],
    tips: [
      "Highlight the dollar value of budgets, investments, or transactions you have analyzed or influenced.",
      "Demonstrate proficiency in financial modeling by describing specific models you have built and their impact.",
      "Include technical tools beyond Excel such as SQL, Python, or BI tools to stand out from other candidates.",
      "Show your communication skills by mentioning presentations to leadership or cross-functional collaboration.",
      "Tailor your resume to the specific type of finance role: corporate finance, investment banking, or equity research.",
    ],
    relatedTitles: ["accountant", "data-analyst", "business-analyst", "management-consultant"],
    faqItems: [
      {
        question: "What skills should a financial analyst highlight on their resume?",
        answer:
          "Essential skills include advanced Excel (modeling, pivot tables, macros), financial modeling and valuation, data visualization, SQL for data analysis, and strong communication for presenting findings. Industry-specific knowledge and familiarity with ERP systems or Bloomberg Terminal are also highly valued.",
      },
      {
        question: "How important is Excel proficiency on a financial analyst resume?",
        answer:
          "Excel proficiency is critical. Specify advanced capabilities like complex financial modeling, VBA macros, pivot tables, sensitivity analysis, and scenario modeling. Many employers test Excel skills during interviews, so listing specific functions and model types you have built adds credibility.",
      },
      {
        question: "Should a financial analyst get a CFA for their resume?",
        answer:
          "The CFA designation is highly valued, especially for roles in investment management, equity research, and corporate development. Even listing CFA Level I or II Candidate shows commitment to the profession. For corporate finance roles, an MBA or CPA may be equally or more relevant depending on the specific position.",
      },
    ],
  },
  {
    slug: "marketing-manager",
    title: "Marketing Manager",
    category: "Business & Finance",
    summaryExamples: [
      "Strategic marketing manager with 8+ years of experience driving brand growth and revenue through integrated marketing campaigns. Led a product launch that generated $5.2M in first-year revenue and grew the email subscriber base from 50K to 250K in 18 months.",
      "Data-driven marketing manager with expertise in digital marketing, content strategy, and marketing automation. Increased organic traffic by 180% and reduced customer acquisition cost by 42% through SEO optimization and targeted content marketing initiatives.",
      "Creative marketing manager with a track record of building brand awareness and market share. Developed and executed a rebrand strategy that increased brand recognition by 65% in target demographics and contributed to a 28% year-over-year revenue increase.",
    ],
    skills: [
      "Marketing Strategy",
      "Digital Marketing",
      "Content Marketing",
      "SEO/SEM",
      "Marketing Automation (HubSpot/Marketo)",
      "Social Media Management",
      "Brand Management",
      "Campaign Analytics",
      "Budget Management",
      "Team Leadership",
      "Email Marketing",
      "CRM (Salesforce)",
    ],
    tips: [
      "Lead with revenue impact, ROI metrics, and growth numbers to demonstrate business value.",
      "Highlight your experience managing marketing budgets and the return you generated on that spend.",
      "Include specific marketing tools and platforms you are proficient in to pass ATS filters.",
      "Describe the team size you managed and cross-functional partnerships you led.",
      "Tailor your resume to the specific marketing focus of the role: brand, digital, product, or growth marketing.",
    ],
    relatedTitles: ["digital-marketing-specialist", "brand-manager", "social-media-manager", "product-manager"],
    faqItems: [
      {
        question: "What metrics should a marketing manager include on their resume?",
        answer:
          "Include ROI on marketing spend, revenue generated from campaigns, customer acquisition cost, conversion rates, organic traffic growth, email open and click rates, social media engagement, and brand awareness metrics. Connect every metric to a business outcome rather than listing vanity metrics.",
      },
      {
        question: "How do I transition from specialist to marketing manager on my resume?",
        answer:
          "Emphasize leadership experience such as mentoring team members, managing projects, and coordinating cross-functional campaigns. Highlight strategic thinking by showing how your specialist work contributed to broader business goals. Include any budget management, vendor coordination, or stakeholder communication experience.",
      },
      {
        question: "Should a marketing manager include technical skills on their resume?",
        answer:
          "Yes, listing marketing technology skills like HubSpot, Google Analytics, SEO tools, CRM systems, and data analysis capabilities demonstrates that you can both strategize and execute. Technical proficiency is increasingly required as marketing becomes more data-driven and technology-dependent.",
      },
    ],
  },
  {
    slug: "project-manager",
    title: "Project Manager",
    category: "Business & Finance",
    summaryExamples: [
      "PMP-certified project manager with 9+ years of experience delivering complex projects on time and within budget. Successfully managed a portfolio of 12 concurrent projects totaling $15M, achieving a 95% on-time delivery rate and 98% stakeholder satisfaction.",
      "Agile project manager with deep experience in software development and IT transformation projects. Led a cloud migration program involving 5 cross-functional teams across 3 time zones, delivering the $4M initiative 2 weeks ahead of schedule and 8% under budget.",
      "Results-oriented project manager with expertise in construction and capital improvement projects. Managed the build-out of 8 retail locations simultaneously with a combined budget of $22M, negotiating vendor contracts that saved 12% on material costs.",
    ],
    skills: [
      "Project Planning",
      "Risk Management",
      "Agile/Scrum/Waterfall",
      "Budget Management",
      "Stakeholder Communication",
      "Jira/Asana/MS Project",
      "Resource Allocation",
      "Scope Management",
      "Vendor Management",
      "Team Leadership",
      "Change Management",
      "Executive Reporting",
    ],
    tips: [
      "Include your PMP, PRINCE2, or Agile certifications prominently as they are often required.",
      "Quantify project scope with budget sizes, team sizes, timelines, and delivery metrics.",
      "Describe your methodology experience including Agile, Waterfall, and hybrid approaches.",
      "Highlight risk management by describing how you identified and mitigated potential project threats.",
      "Show cross-functional leadership by mentioning the departments and stakeholders you coordinated.",
    ],
    relatedTitles: ["product-manager", "operations-manager", "business-analyst", "management-consultant"],
    faqItems: [
      {
        question: "Is PMP certification important for a project manager resume?",
        answer:
          "PMP certification is one of the most recognized credentials in project management and is required or preferred for many roles. It demonstrates standardized knowledge and commitment to the profession. Other valuable certifications include PRINCE2, CSM (Certified ScrumMaster), and PMI-ACP for Agile-focused roles.",
      },
      {
        question: "How do I describe project management experience on a resume?",
        answer:
          "For each role, describe your most impactful projects using metrics: budget managed, team size led, timeline adherence, and stakeholder satisfaction. Use the CAR format (Challenge, Action, Result) to show how you navigated obstacles. Include methodology, tools used, and the business outcome of successful delivery.",
      },
      {
        question: "What is the best resume format for a project manager?",
        answer:
          "A reverse-chronological format works best, with a strong summary highlighting certifications and years of experience. Include a key achievements section for your most impressive project metrics. Organize experience by role, listing 2-3 major projects per position with quantified results. Keep to 1-2 pages.",
      },
    ],
  },
  {
    slug: "business-analyst",
    title: "Business Analyst",
    category: "Business & Finance",
    summaryExamples: [
      "Business analyst with 6+ years of experience bridging the gap between business stakeholders and technical teams. Gathered and documented requirements for a CRM implementation that increased sales team productivity by 35% and reduced lead response time from 48 hours to 4 hours.",
      "Data-savvy business analyst skilled in process mapping, requirements elicitation, and user acceptance testing. Analyzed operational workflows and identified automation opportunities that saved 2,400 labor hours annually and reduced processing errors by 67%.",
      "Strategic business analyst with Agile and Waterfall methodology experience. Led requirements gathering for a $3M digital transformation initiative, creating 150+ user stories and facilitating workshops with 40+ stakeholders to align priorities across 5 business units.",
    ],
    skills: [
      "Requirements Gathering",
      "Process Mapping (BPMN)",
      "SQL",
      "Data Analysis",
      "Stakeholder Management",
      "User Stories/Use Cases",
      "Agile/Scrum",
      "Jira/Confluence",
      "Visio/Lucidchart",
      "UAT Coordination",
      "Gap Analysis",
      "Business Case Development",
    ],
    tips: [
      "Highlight your ability to translate business needs into technical requirements with specific examples.",
      "Include the scope of projects you have analyzed in terms of budget, users impacted, and business units involved.",
      "Show proficiency in both technical tools (SQL, data analysis) and communication (workshops, stakeholder management).",
      "Describe the methodologies you have used for requirements gathering and documentation.",
      "Include CBAP, CCBA, or PMI-PBA certifications if you hold them.",
    ],
    relatedTitles: ["data-analyst", "project-manager", "product-manager", "financial-analyst"],
    faqItems: [
      {
        question: "What is the difference between a business analyst and a data analyst resume?",
        answer:
          "A business analyst resume emphasizes requirements gathering, process improvement, stakeholder management, and bridging business and IT teams. A data analyst resume focuses on data querying, statistical analysis, visualization, and deriving insights from datasets. Business analysts may use data but focus more on process and requirements.",
      },
      {
        question: "What tools should a business analyst list on their resume?",
        answer:
          "Essential tools include requirements management (Jira, Confluence), process modeling (Visio, Lucidchart, BPMN), data analysis (SQL, Excel), prototyping (Balsamiq, Figma), and project management (MS Project, Asana). Listing these tools shows you can document, analyze, and communicate requirements effectively.",
      },
      {
        question: "How do I become a business analyst with no BA experience?",
        answer:
          "Highlight transferable skills from your current role such as problem-solving, stakeholder communication, process documentation, and analytical thinking. Get certified with IIBA entry-level credentials or complete a BA bootcamp. Include any experience writing requirements, testing software, or analyzing data even in non-BA titles.",
      },
    ],
  },
  {
    slug: "operations-manager",
    title: "Operations Manager",
    category: "Business & Finance",
    summaryExamples: [
      "Operations manager with 10+ years of experience optimizing business processes and managing teams of 50+ across manufacturing and distribution facilities. Implemented lean manufacturing principles that increased production efficiency by 28% and reduced waste by $1.2M annually.",
      "Results-driven operations manager skilled in supply chain optimization and quality management. Reduced order fulfillment cycle time by 40% and improved on-time delivery from 82% to 97% by redesigning warehouse workflows and implementing a new WMS platform.",
      "Strategic operations manager with P&L responsibility for a $30M business unit. Led cross-functional process improvement initiatives that reduced operating costs by 18% while maintaining customer satisfaction scores above 4.7/5 across 10K+ annual transactions.",
    ],
    skills: [
      "Operations Strategy",
      "Process Improvement",
      "Team Leadership",
      "P&L Management",
      "Supply Chain Management",
      "Lean/Six Sigma",
      "Budget Management",
      "Vendor Management",
      "Quality Assurance",
      "KPI Tracking",
      "ERP Systems",
      "Change Management",
    ],
    tips: [
      "Quantify your operational impact with metrics such as cost reductions, efficiency gains, and quality improvements.",
      "Include the size of teams, budgets, and facilities you have managed.",
      "Highlight Lean Six Sigma or similar certifications that demonstrate your process improvement expertise.",
      "Describe specific operational challenges you solved and the measurable results you achieved.",
      "Show progression from tactical operations to strategic leadership responsibilities.",
    ],
    relatedTitles: ["project-manager", "human-resources-manager", "management-consultant", "construction-manager"],
    faqItems: [
      {
        question: "What should an operations manager put on their resume?",
        answer:
          "Include metrics showing your impact on efficiency, cost reduction, and quality. Describe the scale of operations you manage including team size, budget, and facility footprint. Highlight process improvement methodologies, technology implementations, and leadership of cross-functional initiatives.",
      },
      {
        question: "What certifications are valuable for an operations manager resume?",
        answer:
          "Lean Six Sigma Green Belt or Black Belt certifications are highly valued for operations roles. Other useful certifications include PMP for project management, APICS CSCP for supply chain, and OSHA certifications for safety-focused roles. These demonstrate your commitment to operational excellence.",
      },
      {
        question: "How do I describe process improvements on an operations manager resume?",
        answer:
          "Use the before-and-after format: describe the initial state (problem or metric), the actions you took (methodology, tools, team involved), and the measurable result (percentage improvement, dollar savings, time reduction). Use Lean Six Sigma terminology when applicable to demonstrate methodology knowledge.",
      },
    ],
  },
  {
    slug: "human-resources-manager",
    title: "Human Resources Manager",
    category: "Business & Finance",
    summaryExamples: [
      "Strategic HR manager with 8+ years of experience leading talent acquisition, employee engagement, and organizational development for companies with 500-2,000 employees. Reduced annual turnover from 28% to 14% by implementing a comprehensive retention program including stay interviews and career pathing.",
      "SHRM-SCP certified HR manager with expertise in compensation, benefits, and compliance. Managed a total rewards budget of $12M, designed a pay equity framework that closed the gender pay gap by 96%, and ensured 100% compliance across federal and state employment regulations.",
      "Employee-focused HR manager with a track record of building inclusive workplace cultures. Launched a DEI program that increased underrepresented leadership representation by 40% in 2 years and improved employee engagement scores from 3.2 to 4.4 out of 5.",
    ],
    skills: [
      "Talent Acquisition",
      "Employee Relations",
      "Compensation & Benefits",
      "HRIS (Workday/ADP)",
      "Employment Law Compliance",
      "Performance Management",
      "Organizational Development",
      "DEI Initiatives",
      "Training & Development",
      "Succession Planning",
      "Conflict Resolution",
      "HR Analytics",
    ],
    tips: [
      "Include HR certifications like SHRM-SCP, SHRM-CP, or PHR/SPHR prominently on your resume.",
      "Quantify your impact with turnover reduction rates, engagement score improvements, and hiring metrics.",
      "Highlight compliance expertise and the employment laws and regulations you have navigated.",
      "Describe the size of the employee population you supported and the breadth of HR functions you managed.",
      "Show strategic business partnership by describing how HR initiatives aligned with company goals.",
    ],
    relatedTitles: ["operations-manager", "management-consultant", "project-manager", "marketing-manager"],
    faqItems: [
      {
        question: "What certifications should an HR manager list on their resume?",
        answer:
          "The most recognized certifications are SHRM-SCP and SHRM-CP from the Society for Human Resource Management, and SPHR and PHR from HRCI. Specialized certifications like CEBS for benefits or CPLP for learning and development add value for focused HR roles. Always list the certifying body and current status.",
      },
      {
        question: "How do I quantify HR achievements on a resume?",
        answer:
          "Use metrics such as turnover reduction percentages, time-to-fill for open positions, cost-per-hire, employee engagement scores, training completion rates, and compliance audit results. Connect these metrics to business impact like productivity improvements, reduced litigation risk, or revenue saved through retention.",
      },
      {
        question: "What HR software should I list on my resume?",
        answer:
          "List HRIS platforms like Workday, ADP, BambooHR, or UKG. Include ATS experience with tools like Greenhouse, Lever, or iCIMS. Mention performance management platforms, learning management systems, and any HR analytics or reporting tools. Tailor the list to match the systems mentioned in the job posting.",
      },
    ],
  },
  {
    slug: "management-consultant",
    title: "Management Consultant",
    category: "Business & Finance",
    summaryExamples: [
      "Management consultant with 5+ years of experience at a Big Four firm advising Fortune 500 clients on operational efficiency and digital transformation. Led 20+ engagements generating $8M in consulting revenue, with client satisfaction scores averaging 4.8/5.",
      "Strategy-focused management consultant specializing in M&A integration and organizational restructuring. Designed a post-merger integration playbook that was adopted firm-wide, reducing integration timelines by 30% and preserving $50M in synergy value for 3 major acquisitions.",
      "Data-driven management consultant with expertise in supply chain optimization and cost reduction. Identified and implemented $25M in annual savings across 4 manufacturing clients through process redesign, vendor consolidation, and technology adoption initiatives.",
    ],
    skills: [
      "Strategy Development",
      "Business Case Analysis",
      "Stakeholder Management",
      "Financial Modeling",
      "Process Optimization",
      "Change Management",
      "Executive Presentations",
      "Data Analysis",
      "Project Management",
      "Market Research",
      "Workshop Facilitation",
      "Organizational Design",
    ],
    tips: [
      "Lead with the value you delivered to clients measured in revenue, cost savings, or efficiency gains.",
      "Name the industries and types of organizations you have advised without breaching confidentiality.",
      "Highlight your ability to structure ambiguous problems and deliver actionable recommendations.",
      "Include the size and revenue of engagements you have led or contributed to.",
      "Demonstrate thought leadership through published insights, speaking engagements, or firm contributions.",
    ],
    relatedTitles: ["business-analyst", "project-manager", "financial-analyst", "operations-manager"],
    faqItems: [
      {
        question: "What should a management consultant put on their resume?",
        answer:
          "Focus on client impact metrics like cost savings, revenue growth, and efficiency improvements. Describe engagement scope including team size, duration, and client industry. Highlight frameworks and methodologies used, leadership of client workshops, and C-suite presentation experience. Include firm-level contributions like recruiting or training roles.",
      },
      {
        question: "How do I write a consulting resume for McKinsey, BCG, or Bain?",
        answer:
          "Top-tier consulting firms expect a clean, one-page resume with quantified impact statements. Lead each bullet with a result, followed by context and action. Include leadership and extracurricular activities that demonstrate drive. Show analytical skills through specific examples of data-driven problem-solving and recommendation development.",
      },
      {
        question: "How do I transition from consulting to industry on my resume?",
        answer:
          "Reframe consulting experience in terms of functional expertise rather than project-based work. Emphasize skills that translate directly to the target role such as strategy development, P&L analysis, team leadership, and stakeholder management. Highlight industry-specific engagements and deep domain knowledge gained from multiple client projects.",
      },
    ],
  },
  // ==================== EDUCATION ====================
  {
    slug: "teacher",
    title: "Teacher",
    category: "Education",
    summaryExamples: [
      "Dedicated teacher with 7+ years of experience in K-8 education, specializing in differentiated instruction and project-based learning. Improved standardized test scores by 22% across 3 consecutive years while maintaining a 95% student engagement rate in a Title I school.",
      "Creative and technology-savvy teacher skilled in blended learning and curriculum design. Developed a STEM enrichment program adopted by 12 classrooms district-wide that increased student participation in science fairs by 150% and earned a district innovation award.",
      "Student-centered teacher with a passion for inclusive education and social-emotional learning. Managed classrooms of 28+ students with diverse learning needs, implementing individualized education plans that helped 90% of students with IEPs meet annual goals.",
    ],
    skills: [
      "Curriculum Design",
      "Differentiated Instruction",
      "Classroom Management",
      "Lesson Planning",
      "Student Assessment",
      "IEP Implementation",
      "Google Classroom/LMS",
      "Parent Communication",
      "Project-Based Learning",
      "Data-Driven Instruction",
      "SEL Integration",
      "EdTech Tools",
    ],
    tips: [
      "Include your teaching license, endorsements, and the grade levels and subjects you are certified to teach.",
      "Quantify student achievement improvements using test scores, graduation rates, or proficiency levels.",
      "Highlight curriculum or program development that was adopted beyond your classroom.",
      "Describe your classroom management philosophy and specific strategies you implement.",
      "Include extracurricular involvement such as coaching, club advising, or committee leadership.",
    ],
    relatedTitles: ["professor", "school-counselor", "instructional-designer", "tutor"],
    faqItems: [
      {
        question: "What should a teacher put on their resume?",
        answer:
          "Include your teaching license and certifications, grade levels and subjects taught, student achievement data, curriculum development experience, and technology integration skills. Highlight extracurricular involvement, professional development, and any awards or recognitions received.",
      },
      {
        question: "How do I write a teacher resume for a career change?",
        answer:
          "Emphasize transferable skills like communication, project management, training and development, data analysis, and leadership. Reframe teaching accomplishments in business terms: managing stakeholders (parents, admin), meeting performance targets (test scores), and coordinating teams (department collaboration).",
      },
      {
        question: "What makes a teacher resume stand out to principals?",
        answer:
          "Principals look for evidence of student achievement gains, innovative teaching practices, data-driven instruction, collaboration with colleagues, and alignment with school mission. Include specific metrics, describe your teaching philosophy briefly, and highlight any initiatives you led that impacted the broader school community.",
      },
    ],
  },
  {
    slug: "professor",
    title: "Professor",
    category: "Education",
    summaryExamples: [
      "Tenured professor of computer science with 15+ years of academic experience and a publication record of 45+ peer-reviewed papers. Secured $2.1M in NSF and DARPA research funding, mentored 12 PhD students to completion, and consistently achieved student evaluation scores of 4.7/5.",
      "Associate professor of marketing with expertise in consumer behavior and digital strategy. Published research in top-tier journals (JMR, JCR) with an h-index of 18, taught courses enrolling 200+ students per semester, and served as department curriculum committee chair for 4 years.",
      "Research-active professor specializing in renewable energy systems with 30+ publications and 4 patents. Established a university research lab that attracted $3.5M in industry partnerships and produced 8 graduates who now hold faculty positions at R1 universities.",
    ],
    skills: [
      "Research Design",
      "Grant Writing",
      "Academic Publishing",
      "Curriculum Development",
      "Mentorship",
      "Statistical Analysis",
      "Lecture Delivery",
      "Peer Review",
      "Committee Service",
      "Doctoral Supervision",
      "Conference Presentations",
      "Interdisciplinary Collaboration",
    ],
    tips: [
      "Structure your CV around research, teaching, and service as these are the three pillars of academic evaluation.",
      "Include your complete publication list with citation counts and impact factors for key journals.",
      "Highlight funded grants with agency names, amounts, and your role (PI, Co-PI).",
      "Describe your teaching portfolio including courses developed, enrollment numbers, and evaluation scores.",
      "List doctoral and master's students supervised and their current positions.",
    ],
    relatedTitles: ["teacher", "instructional-designer", "school-counselor", "data-scientist"],
    faqItems: [
      {
        question: "How long should an academic CV be for a professor?",
        answer:
          "Unlike industry resumes, academic CVs have no page limit. They should comprehensively list all publications, grants, teaching experience, service activities, and academic achievements. A mid-career professor typically has a 5-15 page CV, while senior professors may have 20+ pages.",
      },
      {
        question: "What should a professor include in a CV for a tenure-track position?",
        answer:
          "Include a research statement summary, complete publication list organized by type, funded grants with amounts, teaching experience with evaluations, invited talks, conference presentations, committee service, student mentorship records, and professional memberships. Highlight your research agenda and its alignment with the department.",
      },
      {
        question: "How is a professor CV different from an industry resume?",
        answer:
          "A professor CV is comprehensive and includes all academic output (publications, grants, talks), while an industry resume is concise (1-2 pages) and results-focused. Academic CVs emphasize research impact, teaching evaluations, and service, whereas industry resumes focus on business outcomes and transferable skills.",
      },
    ],
  },
  {
    slug: "school-counselor",
    title: "School Counselor",
    category: "Education",
    summaryExamples: [
      "Licensed school counselor with 6+ years of experience supporting academic, social-emotional, and career development for 450+ students in grades 9-12. Increased four-year college enrollment by 35% and reduced chronic absenteeism by 20% through targeted intervention programs.",
      "Data-driven school counselor skilled in crisis intervention and comprehensive counseling program development. Implemented a tier-based mental health screening system that identified 85% of at-risk students earlier, reducing crisis incidents by 40% over two academic years.",
      "Student-centered school counselor with expertise in college and career readiness programming. Secured $120K in scholarship awards for seniors through personalized guidance, facilitated 500+ individual college application sessions, and maintained a 98% graduation rate in an underserved community.",
    ],
    skills: [
      "Individual Counseling",
      "Group Counseling",
      "Crisis Intervention",
      "College/Career Planning",
      "Academic Advising",
      "504/IEP Coordination",
      "Data Analysis",
      "ASCA Framework",
      "Conflict Resolution",
      "Parent/Family Engagement",
      "Naviance/SCOIR",
      "Social-Emotional Learning",
    ],
    tips: [
      "Include your school counseling license, NCC credential, and any state certifications.",
      "Quantify your impact with graduation rates, college enrollment data, and program participation numbers.",
      "Highlight your student-to-counselor ratio to show the scale of your caseload.",
      "Describe comprehensive counseling programs you have developed aligned with the ASCA framework.",
      "Include crisis intervention training, mental health certifications, and trauma-informed practice experience.",
    ],
    relatedTitles: ["teacher", "librarian", "instructional-designer", "tutor"],
    faqItems: [
      {
        question: "What qualifications should a school counselor list on their resume?",
        answer:
          "List your master's degree in school counseling, state licensure or certification, NCC (National Certified Counselor) credential, and any specialized endorsements. Include training in crisis intervention, mental health first aid, and specific programs like ASCA recognized programs you have implemented.",
      },
      {
        question: "How do I quantify school counseling achievements on a resume?",
        answer:
          "Use metrics like graduation rates, college acceptance and enrollment percentages, scholarship amounts secured, reduction in disciplinary referrals or absenteeism, program participation numbers, and student survey results. Connect your interventions to measurable student outcomes whenever possible.",
      },
      {
        question: "What is the ASCA framework and should I mention it on my resume?",
        answer:
          "The American School Counselor Association (ASCA) National Model is the standard framework for school counseling programs. Mentioning ASCA alignment demonstrates professional standards knowledge. Describe how your programs address the four components: foundation, management, delivery, and accountability.",
      },
    ],
  },
  {
    slug: "instructional-designer",
    title: "Instructional Designer",
    category: "Education",
    summaryExamples: [
      "Instructional designer with 5+ years of experience creating engaging e-learning courses for corporate training programs. Designed 40+ courses covering compliance, leadership, and technical skills, achieving average learner satisfaction scores of 4.6/5 and 92% course completion rates.",
      "Technology-savvy instructional designer with expertise in ADDIE and SAM methodologies. Led the development of a blended learning program for 5,000+ employees that reduced onboarding time from 6 weeks to 3 weeks while improving new hire proficiency assessment scores by 34%.",
      "Creative instructional designer specializing in gamification and interactive multimedia learning. Built a gamified sales training program that increased product knowledge quiz scores by 45% and contributed to a 20% improvement in first-quarter sales performance for new hires.",
    ],
    skills: [
      "ADDIE/SAM Methodology",
      "Articulate Storyline/Rise",
      "Adobe Captivate",
      "LMS Administration",
      "Storyboarding",
      "Learning Needs Analysis",
      "Video Production",
      "Accessibility (Section 508)",
      "Assessment Design",
      "xAPI/SCORM",
      "Graphic Design",
      "Project Management",
    ],
    tips: [
      "Showcase specific courses or programs you designed and their measurable learning outcomes.",
      "List authoring tools, LMS platforms, and multimedia production software you are proficient in.",
      "Describe your instructional design process and the methodologies you apply (ADDIE, SAM, Agile).",
      "Include metrics like completion rates, learner satisfaction scores, and performance improvements.",
      "Highlight your ability to design for accessibility and diverse learner populations.",
    ],
    relatedTitles: ["teacher", "professor", "content-writer", "graphic-designer"],
    faqItems: [
      {
        question: "What tools should an instructional designer list on their resume?",
        answer:
          "Essential tools include authoring tools (Articulate Storyline/Rise, Adobe Captivate), LMS platforms (Canvas, Blackboard, Cornerstone), graphic design (Adobe Creative Suite, Canva), video tools (Camtasia, Vyond), and project management tools. List tools that match the job description and demonstrate your range.",
      },
      {
        question: "How do I transition into instructional design from teaching?",
        answer:
          "Highlight transferable skills like curriculum development, assessment design, differentiated instruction, and technology integration. Build a portfolio with 2-3 e-learning samples created with tools like Articulate or Captivate. Get certified through ATD or ISTE programs to demonstrate your commitment to the field.",
      },
      {
        question: "Should an instructional designer have a portfolio?",
        answer:
          "Yes, a portfolio is crucial for instructional designers. Include 3-5 diverse samples showing different formats (e-learning modules, videos, instructor-led materials) and design approaches. For each sample, describe the learning objectives, target audience, tools used, and measurable outcomes achieved.",
      },
    ],
  },
  {
    slug: "tutor",
    title: "Tutor",
    category: "Education",
    summaryExamples: [
      "Experienced tutor with 4+ years of providing personalized academic support in mathematics and science for students in grades 6-12. Helped 90% of students improve by at least one letter grade, with SAT math scores increasing by an average of 120 points across 50+ students.",
      "Patient and adaptive tutor specializing in test preparation for SAT, ACT, and GRE exams. Maintained a client base of 30+ students with a 95% referral rate and helped 85% of SAT students achieve their target scores within 3 months of tutoring.",
      "Certified tutor with expertise in supporting students with learning disabilities including dyslexia and ADHD. Developed individualized learning strategies for 100+ students that improved reading comprehension scores by an average of 2.5 grade levels over one academic year.",
    ],
    skills: [
      "Subject Matter Expertise",
      "Individualized Instruction",
      "Test Preparation",
      "Study Skills Coaching",
      "Learning Disability Support",
      "Patience & Communication",
      "Progress Tracking",
      "Curriculum Adaptation",
      "Online Tutoring Platforms",
      "Parent Communication",
      "Assessment & Evaluation",
      "Time Management",
    ],
    tips: [
      "Lead with measurable student outcomes such as grade improvements, test score increases, and goal achievement rates.",
      "Specify the subjects, grade levels, and standardized tests you are qualified to tutor.",
      "Highlight your tutoring approach and any specialized methods for different learning styles.",
      "Include client retention and referral rates to demonstrate effectiveness and rapport.",
      "Mention certifications from tutoring organizations or subject-specific credentials.",
    ],
    relatedTitles: ["teacher", "school-counselor", "professor", "instructional-designer"],
    faqItems: [
      {
        question: "How do I write a tutor resume with no formal teaching experience?",
        answer:
          "Highlight subject matter expertise from your education, any informal tutoring you have done for peers or family, volunteer tutoring experience, and relevant coursework. Include your GPA or test scores in subjects you tutor to establish credibility. Emphasize communication skills and patience.",
      },
      {
        question: "What makes a tutor resume effective?",
        answer:
          "An effective tutor resume leads with student outcome data: average grade improvements, test score increases, and satisfaction ratings. Include the number of students you have worked with, subjects covered, and your approach to individualized learning. Client testimonials or referral rates add credibility.",
      },
      {
        question: "Should tutors list their own test scores on a resume?",
        answer:
          "Yes, if you tutor standardized tests like the SAT, ACT, GRE, or GMAT, listing your own high scores builds credibility with parents and students. For subject tutoring, listing relevant degrees, certifications, or advanced coursework demonstrates your expertise in the material.",
      },
    ],
  },
  {
    slug: "librarian",
    title: "Librarian",
    category: "Education",
    summaryExamples: [
      "MLIS-certified librarian with 8+ years of experience managing public library services and collections. Increased library card registrations by 40% through community outreach programs and launched a digital literacy series that served 2,000+ patrons annually.",
      "Technology-forward librarian with expertise in digital resource management and information literacy instruction. Migrated the library catalog to a cloud-based ILS that reduced processing time by 50% and implemented a makerspace program that attracted 500+ new teen patrons.",
      "Research-focused academic librarian with specialization in health sciences. Provided instruction and research support to 3,000+ students and faculty, taught 60+ information literacy sessions per year, and curated a digital collection of 15,000+ electronic resources.",
    ],
    skills: [
      "Collection Development",
      "Information Literacy",
      "Cataloging (MARC/RDA)",
      "Library Management Systems",
      "Research Assistance",
      "Program Development",
      "Digital Resources Management",
      "Community Outreach",
      "Budgeting",
      "Grant Writing",
      "Database Management",
      "Youth/Adult Services",
    ],
    tips: [
      "Include your MLIS degree and any additional certifications or subject specializations.",
      "Quantify your impact with circulation statistics, program attendance, and patron engagement metrics.",
      "Highlight technology skills including ILS systems, digital resource platforms, and data management.",
      "Describe programs you developed and their community impact.",
      "Include grant writing experience with amounts secured and funding agencies.",
    ],
    relatedTitles: ["teacher", "school-counselor", "content-writer", "instructional-designer"],
    faqItems: [
      {
        question: "What degree does a librarian need on their resume?",
        answer:
          "Most professional librarian positions require a Master of Library and Information Science (MLIS) or equivalent from an ALA-accredited program. Some specialized roles may also require a second master's degree in a subject area. Include your MLIS prominently along with any specialized coursework or concentrations.",
      },
      {
        question: "How do I make a librarian resume stand out?",
        answer:
          "Emphasize technology skills, program development achievements, and community impact metrics. Highlight any grants secured, innovative services launched, or digital initiatives led. Show how you have adapted to changing patron needs through data-driven collection decisions and new service models.",
      },
      {
        question: "What skills should a librarian highlight on their resume?",
        answer:
          "Core skills include information literacy instruction, collection development, cataloging and metadata, research assistance, and community programming. Increasingly important skills include digital resource management, data literacy, technology instruction, grant writing, and experience with emerging technologies in library settings.",
      },
    ],
  },
  // ==================== ENGINEERING ====================
  {
    slug: "mechanical-engineer",
    title: "Mechanical Engineer",
    category: "Engineering",
    summaryExamples: [
      "PE-licensed mechanical engineer with 8+ years of experience in product design and manufacturing process optimization. Led the redesign of a consumer product line that reduced manufacturing costs by 22% and improved product reliability by 35%, generating $4M in additional annual revenue.",
      "Innovation-driven mechanical engineer with expertise in CAD modeling, FEA analysis, and rapid prototyping. Designed 15+ products from concept to production, including a medical device that received FDA 510(k) clearance and generated $8M in first-year sales.",
      "Sustainability-focused mechanical engineer specializing in HVAC systems and energy efficiency. Engineered a building systems retrofit that reduced energy consumption by 40% across a 500,000 sq. ft. commercial campus, saving $600K annually in utility costs.",
    ],
    skills: [
      "SolidWorks/AutoCAD",
      "Finite Element Analysis",
      "GD&T",
      "Product Design",
      "Manufacturing Processes",
      "Thermodynamics",
      "Project Management",
      "Prototyping",
      "Material Selection",
      "Quality Control",
      "DFMEA/PFMEA",
      "Lean Manufacturing",
    ],
    tips: [
      "Include your PE license, EIT certification, and any specialized industry certifications.",
      "Quantify your engineering impact with cost savings, performance improvements, and patent numbers.",
      "List specific CAD, CAE, and simulation software you are proficient in.",
      "Describe projects from concept through production to demonstrate full product development lifecycle experience.",
      "Include any patents filed or granted to highlight innovation and intellectual contributions.",
    ],
    relatedTitles: ["electrical-engineer", "civil-engineer", "industrial-engineer", "chemical-engineer"],
    faqItems: [
      {
        question: "Should a mechanical engineer include a PE license on their resume?",
        answer:
          "Yes, a Professional Engineer (PE) license should be prominently displayed if you have one, as it significantly increases your credibility and is required for many roles. If you have passed the FE exam, list your EIT (Engineer in Training) status. Include the license state and number.",
      },
      {
        question: "What CAD software should a mechanical engineer list on their resume?",
        answer:
          "List the CAD tools you are proficient in, with the most common being SolidWorks, AutoCAD, CATIA, Creo (Pro/E), and Inventor. Also include simulation tools like ANSYS or Abaqus, CAM software, and PLM systems. Match your list to the tools specified in the job posting.",
      },
      {
        question: "How do I write a mechanical engineer resume for entry level?",
        answer:
          "Focus on senior design projects, internships, and relevant coursework. Include hands-on experience with CAD, manufacturing, and testing. Describe specific projects with quantified outcomes. Highlight lab skills, technical certifications, and engineering competition participation. List your FE exam status if applicable.",
      },
    ],
  },
  {
    slug: "electrical-engineer",
    title: "Electrical Engineer",
    category: "Engineering",
    summaryExamples: [
      "Licensed electrical engineer with 7+ years of experience designing power distribution systems and control circuits for industrial applications. Engineered a motor control system that improved energy efficiency by 28% across a manufacturing facility, saving $350K annually.",
      "Embedded systems electrical engineer with expertise in PCB design and firmware development. Designed 20+ circuit boards from schematic to production, including a wearable medical device that achieved IP67 rating and maintained 99.97% signal accuracy in field testing.",
      "Power systems electrical engineer with experience in renewable energy integration and grid modernization. Led the electrical design for a 50MW solar farm installation, coordinating with utility companies to ensure seamless grid interconnection and NEC code compliance.",
    ],
    skills: [
      "Circuit Design",
      "PCB Layout (Altium/KiCad)",
      "MATLAB/Simulink",
      "PLC Programming",
      "Power Systems Analysis",
      "Embedded Systems",
      "AutoCAD Electrical",
      "Signal Processing",
      "NEC/IEEE Standards",
      "Oscilloscope/Multimeter",
      "VHDL/Verilog",
      "Control Systems",
    ],
    tips: [
      "Include your PE license, FE certification, and any specialized industry credentials.",
      "List specific EDA tools, simulation software, and test equipment you are proficient in.",
      "Quantify your designs with performance metrics such as efficiency improvements, power ratings, or signal quality.",
      "Describe your experience with relevant standards and codes (NEC, IEEE, UL).",
      "Highlight cross-disciplinary collaboration with mechanical, software, and manufacturing teams.",
    ],
    relatedTitles: ["mechanical-engineer", "software-engineer", "civil-engineer", "industrial-engineer"],
    faqItems: [
      {
        question: "What tools should an electrical engineer list on their resume?",
        answer:
          "Include EDA tools (Altium Designer, KiCad, Eagle), simulation software (MATLAB/Simulink, SPICE, ANSYS), programming languages (C/C++, Python, VHDL/Verilog), PLC platforms (Allen-Bradley, Siemens), and test equipment (oscilloscopes, spectrum analyzers). Tailor the list to your specialty area.",
      },
      {
        question: "How do I describe electrical engineering projects on a resume?",
        answer:
          "Describe each project with the challenge, your technical approach, tools used, and measurable outcome. Include specifications like voltage/current ratings, efficiency percentages, and compliance standards met. For PCB projects, mention board complexity, layer count, and production volume.",
      },
      {
        question: "Should electrical engineers list programming skills on their resume?",
        answer:
          "Yes, programming skills are increasingly essential for electrical engineers. List languages like C/C++ for embedded systems, Python for automation and data analysis, MATLAB for simulations, and HDL languages for FPGA work. These skills demonstrate versatility and are often required in modern electrical engineering roles.",
      },
    ],
  },
  {
    slug: "civil-engineer",
    title: "Civil Engineer",
    category: "Engineering",
    summaryExamples: [
      "PE-licensed civil engineer with 10+ years of experience managing infrastructure projects with budgets ranging from $5M to $80M. Delivered a highway interchange reconstruction project 3 months ahead of schedule and $2M under budget while maintaining zero lost-time incidents.",
      "Structural civil engineer specializing in seismic retrofit and building design. Designed structural systems for 25+ commercial buildings totaling 2M+ sq. ft., including a hospital expansion that met essential facility seismic requirements under the latest building codes.",
      "Water resources civil engineer with expertise in stormwater management and sustainable design. Designed a green infrastructure system that reduced runoff by 60% for a 200-acre development, saving the client $3.5M in conventional detention infrastructure costs.",
    ],
    skills: [
      "AutoCAD Civil 3D",
      "Structural Analysis",
      "Project Management",
      "Geotechnical Engineering",
      "Hydrology & Hydraulics",
      "Building Codes (IBC/ASCE 7)",
      "Construction Management",
      "Surveying",
      "Environmental Compliance",
      "Cost Estimation",
      "BIM (Revit)",
      "Site Design",
    ],
    tips: [
      "Include your PE license and state(s) of licensure prominently as it is essential for many civil engineering roles.",
      "Describe project scope with dollar values, square footage, and infrastructure metrics.",
      "Highlight code compliance experience and specific standards you work with (IBC, ASCE, ACI).",
      "Show project management skills including scheduling, budgeting, and subcontractor coordination.",
      "Include safety records and environmental compliance achievements.",
    ],
    relatedTitles: ["mechanical-engineer", "environmental-engineer", "construction-manager", "electrical-engineer"],
    faqItems: [
      {
        question: "How important is a PE license for a civil engineer resume?",
        answer:
          "A PE license is essential for career advancement in civil engineering. It is required to sign and seal drawings, manage projects independently, and take on leadership roles. List it prominently on your resume with your license number and state(s). If you are pursuing your PE, list your FE/EIT status.",
      },
      {
        question: "What software should a civil engineer list on their resume?",
        answer:
          "Core software includes AutoCAD Civil 3D, Revit for BIM, and structural analysis programs like SAP2000, ETABS, or RISA. Also list specialized tools for your focus area such as HEC-RAS for hydrology, STAAD for structural, or GIS software for site analysis. MS Project or Primavera for project scheduling add value.",
      },
      {
        question: "How do I describe civil engineering project experience on a resume?",
        answer:
          "Describe each project with its type, scope (dollar value, size), your specific role and responsibilities, challenges you overcame, and measurable outcomes such as cost savings, schedule performance, or safety records. Include the client type (public/private) and any relevant codes or standards you worked with.",
      },
    ],
  },
  {
    slug: "chemical-engineer",
    title: "Chemical Engineer",
    category: "Engineering",
    summaryExamples: [
      "Chemical engineer with 6+ years of experience in process design and optimization for petrochemical facilities. Led a distillation column redesign that increased throughput by 25% and reduced energy consumption by $1.2M annually without capital expenditure.",
      "Safety-focused chemical engineer skilled in HAZOP analysis and process safety management. Conducted 30+ hazard analyses for a chemical manufacturing plant, identifying and mitigating critical risks that reduced safety incidents by 55% over a 3-year period.",
      "R&D-driven chemical engineer specializing in pharmaceutical process development. Scaled up a drug synthesis process from bench to commercial production, achieving 98.5% purity and reducing manufacturing cost per unit by 40% through solvent recycling and process intensification.",
    ],
    skills: [
      "Process Design",
      "Aspen Plus/HYSYS",
      "Mass & Energy Balance",
      "HAZOP/PHA",
      "Process Safety Management",
      "Six Sigma",
      "P&ID Development",
      "Scale-Up",
      "Quality Control",
      "Reaction Engineering",
      "MATLAB",
      "Environmental Compliance",
    ],
    tips: [
      "Include your PE license and any specialized certifications relevant to your industry sector.",
      "Quantify process improvements with production increases, cost reductions, and safety metrics.",
      "List process simulation software and other technical tools you are proficient in.",
      "Highlight safety achievements and regulatory compliance experience.",
      "Describe your experience with scale-up, technology transfer, and continuous improvement initiatives.",
    ],
    relatedTitles: ["environmental-engineer", "mechanical-engineer", "industrial-engineer", "pharmacist"],
    faqItems: [
      {
        question: "What industries hire chemical engineers and how should I tailor my resume?",
        answer:
          "Chemical engineers work in petrochemicals, pharmaceuticals, food processing, materials, and environmental services. Tailor your resume by emphasizing industry-specific experience: GMP compliance for pharma, process safety for petrochemical, or sustainability metrics for environmental roles. Use industry-specific terminology.",
      },
      {
        question: "What software should a chemical engineer list on their resume?",
        answer:
          "Essential software includes process simulators (Aspen Plus, HYSYS, ChemCAD), data analysis tools (MATLAB, Minitab), CAD software for P&IDs, and Microsoft Excel for engineering calculations. Also list any specialized tools for your focus area such as CFD software, reaction kinetics tools, or statistical process control platforms.",
      },
      {
        question: "How do I write a chemical engineer resume for entry level?",
        answer:
          "Highlight internships, co-op experiences, and senior design projects with quantified results. Include lab skills, safety training, and process simulation coursework. Describe your senior capstone project in detail including scope, methodology, and outcomes. List your EIT certification and any industry-relevant certifications.",
      },
    ],
  },
  {
    slug: "environmental-engineer",
    title: "Environmental Engineer",
    category: "Engineering",
    summaryExamples: [
      "PE-licensed environmental engineer with 7+ years of experience in water treatment design and environmental remediation. Designed a wastewater treatment system serving 50,000 residents that reduced effluent contaminants by 95% while operating 20% below budget.",
      "Sustainability-focused environmental engineer with expertise in air quality management and regulatory compliance. Developed emissions reduction strategies for 10+ industrial clients, achieving a cumulative 45% reduction in greenhouse gas emissions while maintaining production levels.",
      "Remediation-specialist environmental engineer with experience managing contaminated site cleanups under EPA oversight. Led remediation projects totaling $15M, successfully closing out 8 Superfund sites and achieving no-further-action status 2 years ahead of projected timelines.",
    ],
    skills: [
      "Water/Wastewater Treatment",
      "Environmental Remediation",
      "Air Quality Modeling",
      "EIA/NEPA Compliance",
      "Regulatory Permitting",
      "GIS/Spatial Analysis",
      "Soil & Groundwater Sampling",
      "AutoCAD",
      "Risk Assessment",
      "Sustainability Planning",
      "EPA/State Regulations",
      "Stormwater Management",
    ],
    tips: [
      "Include your PE license and environmental-specific certifications (40-hour HAZWOPER, etc.).",
      "Quantify environmental outcomes such as contaminant reduction percentages, emissions reductions, and remediation milestones.",
      "Highlight regulatory experience with EPA, state agencies, and specific environmental laws.",
      "Describe the scale of projects with budgets, site acreage, and populations served.",
      "Show technical versatility across water, air, soil, and waste management disciplines.",
    ],
    relatedTitles: ["civil-engineer", "chemical-engineer", "mechanical-engineer", "industrial-engineer"],
    faqItems: [
      {
        question: "What certifications should an environmental engineer list on their resume?",
        answer:
          "Key certifications include PE license, 40-hour HAZWOPER with 8-hour refresher, LEED accreditation for green building projects, Certified Environmental Professional (CEP), and state-specific environmental certifications. Also list any specialized training in environmental sampling, GIS, or risk assessment methodologies.",
      },
      {
        question: "How do I describe environmental remediation experience on a resume?",
        answer:
          "Describe each remediation project with the contaminant type, site characteristics, remediation technology selected, regulatory framework (CERCLA, RCRA), and measurable outcomes such as contaminant reduction levels, site closure achievements, and cost versus budget. Include the regulatory agency oversight involved.",
      },
      {
        question: "What is the job outlook for environmental engineers and how should my resume reflect it?",
        answer:
          "Environmental engineering is growing due to climate change, sustainability mandates, and stricter regulations. Position your resume to highlight experience in emerging areas like PFAS remediation, carbon capture, sustainability consulting, and renewable energy environmental compliance. Show adaptability to evolving regulations and technologies.",
      },
    ],
  },
  {
    slug: "industrial-engineer",
    title: "Industrial Engineer",
    category: "Engineering",
    summaryExamples: [
      "Industrial engineer with 6+ years of experience optimizing manufacturing operations and supply chain logistics. Implemented a facility layout redesign that increased production throughput by 32% and reduced material handling costs by $800K annually across 3 production lines.",
      "Lean Six Sigma Black Belt industrial engineer specializing in process improvement and quality management. Led 15+ continuous improvement projects that generated $5M in cumulative savings through waste reduction, cycle time optimization, and defect elimination.",
      "Data-driven industrial engineer with expertise in simulation modeling and capacity planning. Developed a discrete-event simulation model that identified bottlenecks in a distribution center, leading to workflow changes that increased order fulfillment capacity by 40% without additional staffing.",
    ],
    skills: [
      "Lean Manufacturing",
      "Six Sigma (DMAIC)",
      "Process Optimization",
      "Simulation Modeling (Arena)",
      "Time & Motion Studies",
      "Capacity Planning",
      "Quality Management",
      "Supply Chain Analysis",
      "Ergonomics",
      "AutoCAD/Facility Layout",
      "Statistical Analysis (Minitab)",
      "Value Stream Mapping",
    ],
    tips: [
      "Highlight your Lean Six Sigma certification level and quantify the impact of improvement projects.",
      "Describe efficiency gains with specific metrics like throughput increases, cost savings, and cycle time reductions.",
      "Include experience with simulation and optimization tools used for decision-making.",
      "Show your ability to work across manufacturing, logistics, healthcare, and service industries.",
      "Include any PE license, ASQ certifications, or APICS credentials you hold.",
    ],
    relatedTitles: ["mechanical-engineer", "operations-manager", "chemical-engineer", "civil-engineer"],
    faqItems: [
      {
        question: "What certifications are valuable for an industrial engineer resume?",
        answer:
          "Lean Six Sigma Green Belt or Black Belt is the most impactful certification for industrial engineers. Other valuable credentials include PE license, ASQ Certified Quality Engineer (CQE), APICS CSCP for supply chain, and Certified Ergonomics Professional. These certifications validate your process improvement and systems optimization expertise.",
      },
      {
        question: "How do I describe Lean Six Sigma projects on a resume?",
        answer:
          "Use the DMAIC framework to structure your bullet points: describe the problem (Define/Measure), your analysis approach (Analyze), the solution implemented (Improve), and the sustained results (Control). Include specific metrics like sigma level improvements, defect reductions, and financial savings.",
      },
      {
        question: "What industries hire industrial engineers?",
        answer:
          "Industrial engineers work across manufacturing, healthcare, logistics, technology, finance, and consulting. Tailor your resume by emphasizing industry-relevant experience: production optimization for manufacturing, process improvement for healthcare, supply chain for logistics, or systems efficiency for technology companies.",
      },
    ],
  },
  // ==================== CREATIVE & DESIGN ====================
  {
    slug: "graphic-designer",
    title: "Graphic Designer",
    category: "Creative & Design",
    summaryExamples: [
      "Creative graphic designer with 6+ years of experience developing visual identities and marketing collateral for B2B and B2C brands. Designed brand guidelines adopted across 50+ touchpoints for a startup that grew from $2M to $15M in revenue during the rebrand period.",
      "Versatile graphic designer skilled in print, digital, and motion design. Produced 500+ creative assets per quarter for a marketing agency, maintaining a 97% client approval rate on first presentations and contributing to a 30% increase in agency revenue.",
      "Brand-focused graphic designer with expertise in packaging design and product visualization. Created packaging for 25+ consumer products, including a redesign that increased shelf visibility by 40% and contributed to a 22% sales lift in the first quarter post-launch.",
    ],
    skills: [
      "Adobe Creative Suite (Photoshop/Illustrator/InDesign)",
      "Figma",
      "Brand Identity Design",
      "Typography",
      "Layout Design",
      "Print Production",
      "Motion Graphics (After Effects)",
      "UI Design",
      "Packaging Design",
      "Color Theory",
      "Photography/Image Editing",
      "Presentation Design",
    ],
    tips: [
      "Include a portfolio link as the most critical element of your graphic designer resume.",
      "Quantify your design impact with metrics like engagement increases, conversion improvements, or client satisfaction ratings.",
      "List specific Adobe Creative Suite applications and other design tools at your proficiency level.",
      "Describe your design process from brief to delivery to show strategic thinking beyond execution.",
      "Highlight experience across multiple media types: print, digital, packaging, and motion.",
    ],
    relatedTitles: ["ux-designer", "art-director", "web-developer", "video-editor"],
    faqItems: [
      {
        question: "How important is a portfolio for a graphic designer resume?",
        answer:
          "A portfolio is the single most important component of a graphic designer's job application. Include a link prominently on your resume. Curate 8-12 of your best projects with variety across different media. Each portfolio piece should include context about the brief, your process, and the results achieved.",
      },
      {
        question: "What software should a graphic designer list on their resume?",
        answer:
          "Essential software includes Adobe Photoshop, Illustrator, and InDesign as the industry standard. Also list Figma for digital design, After Effects for motion, and any specialized tools like Procreate, Sketch, or Canva. Show proficiency levels and mention any Adobe certification you hold.",
      },
      {
        question: "How do I write a graphic designer resume with no experience?",
        answer:
          "Build a portfolio with personal projects, redesign concepts, or volunteer work for nonprofits. Focus on your design education, software proficiency, and creative thinking skills. Include freelance work, contest entries, or social media design projects. Your portfolio quality matters more than years of experience.",
      },
    ],
  },
  {
    slug: "content-writer",
    title: "Content Writer",
    category: "Creative & Design",
    summaryExamples: [
      "SEO-savvy content writer with 5+ years of experience producing high-performing blog posts, landing pages, and email campaigns. Wrote 300+ articles that generated 2.5M+ organic pageviews and contributed to a 180% increase in organic traffic over 18 months.",
      "Versatile content writer skilled in B2B SaaS and technology topics. Produced thought leadership content for 15+ clients, including whitepapers that generated 1,200+ qualified leads and blog posts that ranked on page 1 for 85% of targeted keywords.",
      "Brand-voice content writer with expertise in storytelling and audience engagement. Developed a content strategy and editorial calendar for a D2C brand that grew email subscribers from 10K to 85K and increased email-attributed revenue by 45%.",
    ],
    skills: [
      "SEO Writing",
      "Blog & Article Writing",
      "Copywriting",
      "Content Strategy",
      "Keyword Research",
      "CMS (WordPress/Webflow)",
      "Email Marketing",
      "Social Media Content",
      "Editing & Proofreading",
      "Google Analytics",
      "AP Style",
      "Research & Fact-Checking",
    ],
    tips: [
      "Include links to published work or a portfolio showcasing your best content pieces.",
      "Quantify your content performance with traffic numbers, engagement rates, and conversion metrics.",
      "Highlight your SEO knowledge by mentioning keyword research, on-page optimization, and ranking achievements.",
      "Describe the industries and content types you specialize in to help employers assess fit.",
      "Show your content strategy skills beyond just writing: planning, analytics, and optimization.",
    ],
    relatedTitles: ["copywriter", "seo-specialist", "social-media-manager", "digital-marketing-specialist"],
    faqItems: [
      {
        question: "What should a content writer include on their resume?",
        answer:
          "Include links to published work, content performance metrics (traffic, engagement, conversions), SEO skills, CMS proficiency, and industry expertise. Highlight your writing process including research, keyword optimization, and revision. List the content types you excel at: blog posts, whitepapers, case studies, email campaigns.",
      },
      {
        question: "How do I show SEO skills on a content writer resume?",
        answer:
          "Mention specific SEO achievements like page 1 rankings, organic traffic growth percentages, and keyword targets met. List tools you use like Ahrefs, SEMrush, or Google Search Console. Describe your approach to keyword research, on-page optimization, and content refresh strategies.",
      },
      {
        question: "Should content writers include a portfolio on their resume?",
        answer:
          "Yes, a portfolio is essential. Include 5-10 diverse writing samples across different formats and industries. For each piece, note the publication, target audience, and performance metrics if available. If your work is behind paywalls, create a personal website or use a platform like Contently to showcase clips.",
      },
    ],
  },
  {
    slug: "copywriter",
    title: "Copywriter",
    category: "Creative & Design",
    summaryExamples: [
      "Persuasive copywriter with 5+ years of experience crafting high-converting copy for e-commerce and SaaS brands. Wrote product descriptions and landing pages that increased conversion rates by 35% and generated $3.8M in attributed revenue across 10+ brand clients.",
      "Creative copywriter skilled in brand storytelling and advertising campaigns. Developed the campaign concept and copy for a product launch that achieved 50M+ impressions, 2M+ social engagements, and a 28% increase in brand awareness in the target demographic.",
      "Direct-response copywriter with expertise in email marketing and sales funnels. Crafted email sequences that achieved 42% open rates and 8.5% click-through rates, generating $1.2M in revenue from a single product launch funnel over 30 days.",
    ],
    skills: [
      "Advertising Copy",
      "Brand Messaging",
      "Landing Page Copy",
      "Email Copywriting",
      "Social Media Copy",
      "A/B Testing",
      "Tone of Voice Development",
      "Direct Response",
      "UX Writing",
      "Headline Writing",
      "Storytelling",
      "Client Communication",
    ],
    tips: [
      "Lead with conversion metrics and revenue impact to demonstrate your copy's business value.",
      "Include a portfolio link with diverse samples: ads, emails, landing pages, and brand campaigns.",
      "Highlight A/B testing experience and data-driven approaches to refining messaging.",
      "Describe your process for understanding target audiences and developing brand voice.",
      "Mention industries you specialize in and the types of copy you are strongest at producing.",
    ],
    relatedTitles: ["content-writer", "art-director", "brand-manager", "digital-marketing-specialist"],
    faqItems: [
      {
        question: "What is the difference between a copywriter and a content writer resume?",
        answer:
          "A copywriter resume emphasizes persuasion, conversion rates, and revenue impact from advertising and marketing copy. A content writer resume focuses on SEO, traffic growth, and informational content like blogs and articles. Copywriters sell, content writers educate. Tailor your resume to the specific role you are targeting.",
      },
      {
        question: "How do I build a copywriting portfolio for my resume?",
        answer:
          "Include diverse samples: headlines, landing pages, email campaigns, social ads, and brand messaging. For each sample, provide context about the brief, target audience, and results. If you lack professional samples, create spec ads for well-known brands or offer pro bono work to build your book.",
      },
      {
        question: "What metrics should a copywriter include on their resume?",
        answer:
          "Include conversion rates, click-through rates, revenue attributed to your copy, A/B test results, engagement metrics, and ROAS. Be specific: instead of saying you wrote emails, say your emails achieved a 42% open rate and generated $500K in revenue. Concrete numbers make your copy skills credible.",
      },
    ],
  },
  {
    slug: "video-editor",
    title: "Video Editor",
    category: "Creative & Design",
    summaryExamples: [
      "Creative video editor with 5+ years of experience producing content for YouTube, social media, and broadcast television. Edited 200+ videos that accumulated 50M+ views, including a brand documentary series that won a regional Emmy nomination.",
      "Fast-paced video editor specializing in social media content and short-form video. Produced 40+ videos per month for a media company, growing their TikTok following from 50K to 1.2M and achieving an average engagement rate of 8.5% across platforms.",
      "Technical video editor with expertise in color grading, motion graphics, and sound design. Led post-production for a $2M advertising campaign with deliverables across TV, digital, and cinema, completing all edits on time with a 100% client approval rate.",
    ],
    skills: [
      "Adobe Premiere Pro",
      "After Effects",
      "DaVinci Resolve",
      "Final Cut Pro",
      "Color Grading",
      "Motion Graphics",
      "Sound Design/Mixing",
      "Video Compression/Encoding",
      "Storyboarding",
      "YouTube/Social Media Optimization",
      "Project Management",
      "Client Communication",
    ],
    tips: [
      "Include a demo reel link as the most important element of your video editor resume.",
      "Quantify your work with view counts, engagement metrics, and the volume of content produced.",
      "List specific editing software, plugins, and hardware you are proficient in.",
      "Highlight your ability to work under tight deadlines and manage multiple projects simultaneously.",
      "Describe the types of content you edit: narrative, commercial, documentary, social media, or corporate.",
    ],
    relatedTitles: ["graphic-designer", "photographer", "art-director", "content-writer"],
    faqItems: [
      {
        question: "How important is a demo reel for a video editor resume?",
        answer:
          "A demo reel is essential and arguably more important than the resume itself. Keep it under 2 minutes, lead with your strongest work, and show variety in editing styles and content types. Update it regularly and tailor it to the type of work you are applying for. Include a link prominently on your resume.",
      },
      {
        question: "What software should a video editor list on their resume?",
        answer:
          "List primary editing software (Premiere Pro, Final Cut Pro, DaVinci Resolve), motion graphics tools (After Effects), audio tools (Audition, Pro Tools), and any specialized software for color grading or visual effects. Mention your proficiency level and any certifications from Adobe or other vendors.",
      },
      {
        question: "How do I describe video editing experience on a resume?",
        answer:
          "For each role, describe the content type, volume of work, and measurable impact. Include view counts, engagement rates, and client satisfaction metrics. Mention your end-to-end capabilities including ingest, assembly, color, audio, graphics, and delivery. Describe the team you worked with and your specific responsibilities.",
      },
    ],
  },
  {
    slug: "photographer",
    title: "Photographer",
    category: "Creative & Design",
    summaryExamples: [
      "Professional photographer with 7+ years of experience in commercial and editorial photography. Shot campaigns for 30+ brands including 5 Fortune 500 companies, with images published in Vogue, GQ, and Architectural Digest, generating $500K+ in annual studio revenue.",
      "Award-winning photographer specializing in product and food photography for e-commerce brands. Produced 10,000+ product images that contributed to a 45% increase in online conversion rates across 20+ client websites and reduced product return rates by 18%.",
      "Versatile photographer with expertise in event, portrait, and corporate photography. Delivered 200+ event shoots with a 100% on-time delivery record, built a client base of 50+ recurring corporate accounts, and maintained a 4.9/5 average rating across 300+ client reviews.",
    ],
    skills: [
      "Digital Photography",
      "Lighting & Composition",
      "Adobe Lightroom",
      "Adobe Photoshop",
      "Studio Photography",
      "Location Scouting",
      "Color Correction",
      "Photo Retouching",
      "Client Relations",
      "Equipment Management",
      "Video Production",
      "Creative Direction",
    ],
    tips: [
      "Include a portfolio link showcasing your strongest and most diverse work.",
      "Quantify your business impact with client numbers, revenue generated, and publication credits.",
      "List your equipment, lighting setups, and post-processing software proficiency.",
      "Highlight your specialization while showing versatility across different photography genres.",
      "Include any awards, publications, or exhibitions that validate your professional reputation.",
    ],
    relatedTitles: ["video-editor", "graphic-designer", "art-director", "content-writer"],
    faqItems: [
      {
        question: "What should a photographer include on their resume?",
        answer:
          "Include a portfolio link, specialization areas, client list or types, technical equipment and software proficiency, and business metrics. List notable publications, exhibitions, or awards. Describe your end-to-end process from concept development through shooting and post-production delivery.",
      },
      {
        question: "How do I write a photographer resume for freelance work?",
        answer:
          "List your freelance business as a position with the date range. Highlight your client base size, annual shoot volume, and revenue or growth metrics. Include notable clients or publications. Describe the types of shoots you specialize in and your end-to-end service including planning, shooting, editing, and delivery.",
      },
      {
        question: "Should a photographer have a website portfolio?",
        answer:
          "Yes, a professional website portfolio is essential for photographers. It should feature curated galleries organized by category, an about section, client testimonials, and contact information. Platforms like Squarespace, Format, or SmugMug offer photography-specific templates. Quality over quantity applies heavily to portfolio curation.",
      },
    ],
  },
  {
    slug: "art-director",
    title: "Art Director",
    category: "Creative & Design",
    summaryExamples: [
      "Visionary art director with 10+ years of experience leading creative teams for advertising agencies and in-house brand teams. Directed campaigns for 50+ clients that won 12 industry awards including 3 Cannes Lions and generated a combined $200M+ in client revenue.",
      "Brand-focused art director with expertise in digital and print creative for consumer brands. Led a 6-person creative team that produced 1,000+ assets per quarter, maintaining brand consistency across 15 markets while increasing creative team efficiency by 25%.",
      "Innovation-driven art director specializing in experiential and interactive design. Conceptualized and directed a product launch experience that attracted 50K+ attendees, generated 10M+ social media impressions, and was featured in Communication Arts and Creativity magazine.",
    ],
    skills: [
      "Creative Direction",
      "Team Leadership",
      "Brand Strategy",
      "Adobe Creative Suite",
      "Typography & Layout",
      "Campaign Development",
      "Client Presentation",
      "Photography Direction",
      "Video Production Oversight",
      "Budget Management",
      "Vendor Management",
      "Design Systems",
    ],
    tips: [
      "Lead with the impact of campaigns you directed: awards, revenue, and brand metrics.",
      "Highlight your leadership skills including team size, mentorship, and creative development.",
      "Include a portfolio link featuring campaigns and projects you conceptualized and directed.",
      "Describe your ability to translate business objectives into compelling visual narratives.",
      "Show progression from designer to art director to demonstrate your creative leadership journey.",
    ],
    relatedTitles: ["graphic-designer", "ux-designer", "brand-manager", "copywriter"],
    faqItems: [
      {
        question: "What should an art director portfolio contain?",
        answer:
          "An art director portfolio should showcase campaign-level work rather than individual design pieces. Include 5-8 campaigns with the creative brief, your conceptual approach, key deliverables, and measurable results. Show your ability to direct teams, maintain brand consistency, and solve creative problems at a strategic level.",
      },
      {
        question: "How do I transition from graphic designer to art director on my resume?",
        answer:
          "Emphasize leadership, strategic thinking, and team management experience. Highlight projects where you directed other designers, presented to clients, or developed creative concepts. Show progression from executing designs to conceptualizing campaigns and managing creative processes. Include any mentorship or team development contributions.",
      },
      {
        question: "What skills distinguish an art director from a senior designer on a resume?",
        answer:
          "Art directors demonstrate strategic vision, team leadership, client management, and campaign-level thinking rather than individual design execution. Highlight your ability to develop creative briefs, direct photoshoots and video productions, manage budgets, and present creative strategies to C-level stakeholders.",
      },
    ],
  },
  // ==================== SALES & MARKETING ====================
  {
    slug: "sales-representative",
    title: "Sales Representative",
    category: "Sales & Marketing",
    summaryExamples: [
      "Top-performing sales representative with 5+ years of experience in B2B SaaS sales. Consistently exceeded quota by 130%+, closing $3.2M in new business ARR and managing a pipeline of 150+ enterprise accounts with an average deal size of $45K.",
      "Relationship-driven sales representative specializing in medical device sales. Built a territory from zero to $1.8M in annual revenue within 18 months, developing partnerships with 40+ hospitals and maintaining a 92% client retention rate year over year.",
      "Results-oriented sales representative with expertise in complex consultative selling cycles. Shortened average sales cycle from 90 days to 52 days through improved qualification processes, resulting in a 40% increase in annual closed-won deals.",
    ],
    skills: [
      "Prospecting & Lead Generation",
      "Consultative Selling",
      "Pipeline Management",
      "CRM (Salesforce/HubSpot)",
      "Negotiation & Closing",
      "Account Management",
      "Cold Calling & Email Outreach",
      "Sales Presentations",
      "Territory Management",
      "Contract Negotiation",
      "Forecasting",
      "Relationship Building",
    ],
    tips: [
      "Lead every bullet point with numbers: quota attainment, revenue closed, deals won, and pipeline value.",
      "Highlight your sales methodology experience (SPIN, Challenger, MEDDIC, Sandler).",
      "Include your CRM proficiency and how you used data to manage your pipeline.",
      "Describe the complexity of your sales cycle: deal sizes, decision-makers involved, and timeline.",
      "Show career progression from SDR/BDR to AE or enterprise sales roles.",
    ],
    relatedTitles: ["account-executive", "digital-marketing-specialist", "brand-manager", "marketing-manager"],
    faqItems: [
      {
        question: "What metrics should a sales representative include on their resume?",
        answer:
          "Include quota attainment percentage, total revenue closed, number of deals won, average deal size, sales cycle length, pipeline value managed, and client retention rate. Year-over-year growth and rankings among peers are also compelling. Every bullet on a sales resume should include a number.",
      },
      {
        question: "How do I write a sales resume with no sales experience?",
        answer:
          "Highlight transferable skills like customer interaction, persuasion, goal achievement, and communication from previous roles. Include any experience with meeting targets, managing relationships, or influencing decisions. Mention sales-related coursework, certifications, or a willingness to pursue them.",
      },
      {
        question: "What is the best format for a sales representative resume?",
        answer:
          "Use a reverse-chronological format with a strong summary highlighting your top revenue number and quota attainment. Include a key achievements section with your best metrics before diving into work experience. Bold or highlight numbers to make them scannable. Keep to one page for under 10 years of experience.",
      },
    ],
  },
  {
    slug: "digital-marketing-specialist",
    title: "Digital Marketing Specialist",
    category: "Sales & Marketing",
    summaryExamples: [
      "Data-driven digital marketing specialist with 4+ years of experience managing multi-channel campaigns across paid search, social, and display. Managed $500K+ in annual ad spend with a blended ROAS of 5.2x, generating $2.6M in attributed revenue.",
      "Performance marketing specialist skilled in Google Ads, Meta Ads, and programmatic advertising. Optimized a PPC campaign structure that reduced CPA by 38% while increasing lead volume by 65%, directly contributing to a $1.5M increase in sales pipeline.",
      "Growth-focused digital marketing specialist with expertise in marketing automation and conversion rate optimization. Built automated nurture sequences that improved MQL-to-SQL conversion rates from 12% to 28% and shortened the sales cycle by 15 days.",
    ],
    skills: [
      "Google Ads/PPC",
      "Meta Ads (Facebook/Instagram)",
      "Google Analytics 4",
      "SEO",
      "Email Marketing",
      "Marketing Automation (HubSpot/Marketo)",
      "A/B Testing",
      "Conversion Rate Optimization",
      "Content Marketing",
      "Social Media Advertising",
      "Data Analysis",
      "Landing Page Optimization",
    ],
    tips: [
      "Quantify campaign performance with ROAS, CPA, CTR, conversion rates, and revenue attributed.",
      "List specific advertising platforms and marketing tools you manage campaigns in.",
      "Highlight your analytical skills by describing how data informed your optimization decisions.",
      "Include budget sizes managed to demonstrate your level of responsibility.",
      "Show your ability to work across multiple channels and integrate campaign strategies.",
    ],
    relatedTitles: ["seo-specialist", "social-media-manager", "marketing-manager", "content-writer"],
    faqItems: [
      {
        question: "What certifications should a digital marketing specialist list on a resume?",
        answer:
          "Valuable certifications include Google Ads Certification, Google Analytics Certification, HubSpot Inbound Marketing, Meta Blueprint, and Hootsuite Social Marketing. These certifications validate platform-specific skills and are often listed as requirements in job postings. Keep certifications current as they typically expire annually.",
      },
      {
        question: "How do I quantify digital marketing achievements on a resume?",
        answer:
          "Use platform-specific metrics: ROAS and CPA for paid advertising, organic traffic growth and ranking improvements for SEO, open and click rates for email, engagement and follower growth for social, and conversion rate improvements for CRO. Always tie metrics to business outcomes like revenue or lead generation.",
      },
      {
        question: "What tools should a digital marketing specialist know?",
        answer:
          "Essential tools include Google Ads, Google Analytics 4, Meta Business Suite, email platforms (Mailchimp, HubSpot), SEO tools (SEMrush, Ahrefs), social media management (Hootsuite, Sprout Social), and CRM systems (Salesforce, HubSpot). Data visualization tools like Google Data Studio or Looker are increasingly valuable.",
      },
    ],
  },
  {
    slug: "seo-specialist",
    title: "SEO Specialist",
    category: "Sales & Marketing",
    summaryExamples: [
      "Technical SEO specialist with 5+ years of experience driving organic growth for e-commerce and SaaS websites. Increased organic traffic by 250% and organic revenue by $3.4M through technical audits, content strategy, and link building for sites with 10K+ pages.",
      "Data-driven SEO specialist skilled in keyword research, content optimization, and technical SEO. Achieved page 1 rankings for 500+ target keywords, including 85 featured snippets, resulting in 1.2M+ monthly organic sessions for a B2B technology company.",
      "Strategic SEO specialist with expertise in enterprise-level SEO and international markets. Led SEO for a global brand across 12 markets and 8 languages, growing organic traffic by 180% and establishing the company as the top-ranking domain for 200+ industry terms.",
    ],
    skills: [
      "Technical SEO",
      "Keyword Research",
      "Content Strategy",
      "Link Building",
      "Google Search Console",
      "Ahrefs/SEMrush",
      "Google Analytics 4",
      "On-Page Optimization",
      "Schema Markup",
      "Site Architecture",
      "Core Web Vitals",
      "International SEO",
    ],
    tips: [
      "Lead with traffic and revenue growth numbers directly attributable to your SEO work.",
      "List specific SEO tools you use daily and your proficiency level with each.",
      "Describe your approach to technical SEO, content strategy, and link building as distinct competencies.",
      "Include case studies of significant ranking improvements or traffic growth achievements.",
      "Show your ability to communicate SEO value to non-technical stakeholders and leadership.",
    ],
    relatedTitles: ["digital-marketing-specialist", "content-writer", "web-developer", "social-media-manager"],
    faqItems: [
      {
        question: "What skills should an SEO specialist highlight on their resume?",
        answer:
          "Highlight technical SEO (site audits, crawling, indexing, Core Web Vitals), on-page optimization, keyword research and content strategy, link building, and analytics. Also list tools like Ahrefs, SEMrush, Screaming Frog, and Google Search Console. Show both technical and strategic capabilities.",
      },
      {
        question: "How do I prove SEO results on my resume?",
        answer:
          "Use specific metrics: percentage increase in organic traffic, number of page 1 rankings achieved, organic revenue growth, featured snippets won, and domain authority improvements. Provide timeframes for achievements and describe the strategies that produced results. Before-and-after comparisons are particularly compelling.",
      },
      {
        question: "What is the difference between an SEO specialist and a digital marketing specialist?",
        answer:
          "An SEO specialist focuses exclusively on organic search visibility through technical optimization, content strategy, and link building. A digital marketing specialist manages broader channels including paid advertising, email, and social media. SEO specialists typically have deeper technical skills while digital marketers have broader channel expertise.",
      },
    ],
  },
  {
    slug: "social-media-manager",
    title: "Social Media Manager",
    category: "Sales & Marketing",
    summaryExamples: [
      "Strategic social media manager with 5+ years of experience growing brand presence across Instagram, TikTok, LinkedIn, and Twitter. Grew a D2C brand's social following from 25K to 500K+ in 2 years, driving $1.2M in social-attributed revenue through organic and paid strategies.",
      "Creative social media manager skilled in content creation, community management, and influencer partnerships. Managed 15+ brand accounts with a combined following of 2M+, maintaining an average engagement rate of 4.5% compared to the industry average of 1.5%.",
      "Analytics-driven social media manager with expertise in social advertising and performance optimization. Managed $300K in annual social ad spend, achieving a 4.8x ROAS and generating 25K+ qualified leads through targeted campaigns across Meta and LinkedIn platforms.",
    ],
    skills: [
      "Content Strategy & Creation",
      "Community Management",
      "Social Media Advertising",
      "Influencer Marketing",
      "Analytics & Reporting",
      "Hootsuite/Sprout Social",
      "Video Content (Reels/TikTok)",
      "Copywriting",
      "Brand Voice Development",
      "Crisis Communication",
      "Photography/Graphic Design",
      "Trend Analysis",
    ],
    tips: [
      "Quantify your social media impact with follower growth, engagement rates, and revenue attributed to social channels.",
      "Highlight your content creation skills and the types of content you produce (video, graphics, stories, etc.).",
      "Include experience with social advertising and the budgets and returns you managed.",
      "Describe your community management approach and any crisis communication experience.",
      "Show your ability to analyze social data and adjust strategies based on performance insights.",
    ],
    relatedTitles: ["digital-marketing-specialist", "content-writer", "brand-manager", "marketing-manager"],
    faqItems: [
      {
        question: "What metrics should a social media manager include on their resume?",
        answer:
          "Include follower growth rates, engagement rates (compared to industry benchmarks), reach and impressions, click-through rates, social-attributed revenue or leads, ad spend ROAS, and community sentiment metrics. Show both organic and paid performance. Always provide context by comparing to industry averages.",
      },
      {
        question: "What tools should a social media manager list on their resume?",
        answer:
          "List scheduling tools (Hootsuite, Sprout Social, Buffer), analytics platforms (native analytics, Google Analytics), design tools (Canva, Adobe Creative Suite), video editing tools, advertising managers (Meta Business Suite, LinkedIn Campaign Manager), and social listening tools (Brandwatch, Mention).",
      },
      {
        question: "How do I show social media management skills without professional experience?",
        answer:
          "Build and document personal brand accounts or volunteer to manage social media for local nonprofits or small businesses. Create case studies showing your growth strategies and results. Complete platform certifications (Meta Blueprint, Hootsuite). Track your metrics carefully to have concrete numbers for your resume.",
      },
    ],
  },
  {
    slug: "brand-manager",
    title: "Brand Manager",
    category: "Sales & Marketing",
    summaryExamples: [
      "Strategic brand manager with 7+ years of experience in CPG brand management for household name products. Managed a $50M brand P&L, launching 3 product line extensions that captured 8% market share in the first year and exceeded revenue targets by 15%.",
      "Consumer-insights-driven brand manager with expertise in brand positioning and go-to-market strategy. Led a brand repositioning initiative that increased unaided brand awareness from 22% to 41% and drove a 30% increase in premium product line sales.",
      "Cross-functional brand manager skilled in marketing communications, trade marketing, and category management. Developed and executed a $10M integrated marketing campaign that grew market share by 3.5 points and achieved the highest brand health scores in the category.",
    ],
    skills: [
      "Brand Strategy",
      "P&L Management",
      "Market Research",
      "Product Launches",
      "Consumer Insights",
      "Marketing Campaign Management",
      "Cross-Functional Leadership",
      "Competitive Analysis",
      "Pricing Strategy",
      "Trade Marketing",
      "Agency Management",
      "Category Management",
    ],
    tips: [
      "Quantify brand performance with market share, revenue growth, brand awareness, and P&L metrics.",
      "Describe product launches from strategy through execution including market sizing and results.",
      "Highlight your ability to use consumer insights and market research to drive brand decisions.",
      "Show cross-functional leadership across marketing, sales, supply chain, and finance teams.",
      "Include agency management experience and the budgets you directed.",
    ],
    relatedTitles: ["marketing-manager", "product-manager", "art-director", "social-media-manager"],
    faqItems: [
      {
        question: "What should a brand manager include on their resume?",
        answer:
          "Include brand P&L size, market share data, campaign ROI, product launch results, and brand health metrics. Describe your strategic responsibilities including positioning, pricing, and go-to-market planning. Highlight consumer research experience and cross-functional team leadership across marketing, sales, and product development.",
      },
      {
        question: "How is a brand manager resume different from a marketing manager resume?",
        answer:
          "Brand manager resumes focus on brand equity, market share, P&L ownership, and product strategy within CPG or consumer-focused companies. Marketing manager resumes tend to be broader, covering channel management, campaign execution, and team leadership. Brand managers emphasize strategic brand stewardship and consumer insights.",
      },
      {
        question: "What is the typical career path for a brand manager?",
        answer:
          "The typical path progresses from Marketing Coordinator to Assistant Brand Manager to Brand Manager to Senior Brand Manager to Director of Marketing to VP of Marketing/CMO. Your resume should show this progression clearly, with each role demonstrating increased P&L responsibility, team size, and strategic scope.",
      },
    ],
  },
  {
    slug: "account-executive",
    title: "Account Executive",
    category: "Sales & Marketing",
    summaryExamples: [
      "Enterprise account executive with 6+ years of experience selling complex SaaS solutions to Fortune 1000 companies. Consistently exceeded annual quota of $2M+, closing the company's largest deal at $850K ARR and maintaining a 120% average quota attainment over 4 years.",
      "Strategic account executive specializing in mid-market sales with average deal sizes of $75K-$250K. Built and managed a $5M pipeline, converting 35% of opportunities to closed-won and expanding existing accounts by an average of 40% through cross-sell and upsell strategies.",
      "Consultative account executive with deep expertise in financial services technology. Developed relationships with 50+ C-level executives, navigating 6-9 month sales cycles with multiple stakeholders and achieving a 95% customer renewal rate across a $4M book of business.",
    ],
    skills: [
      "Enterprise Sales",
      "Consultative Selling",
      "Pipeline Management",
      "Salesforce CRM",
      "Contract Negotiation",
      "C-Suite Selling",
      "Solution Selling",
      "Account Planning",
      "Sales Forecasting",
      "Presentation Skills",
      "Cross-Selling/Upselling",
      "MEDDIC/SPIN Methodology",
    ],
    tips: [
      "Lead with quota attainment percentages and total revenue closed as the most important metrics.",
      "Describe your largest and most complex deals to demonstrate your capability with enterprise sales.",
      "Highlight your sales methodology and how you apply it to manage complex buying committees.",
      "Include customer retention and expansion metrics to show you deliver value beyond the initial sale.",
      "Describe the industries you sell into and the stakeholder levels you engage with.",
    ],
    relatedTitles: ["sales-representative", "brand-manager", "marketing-manager", "digital-marketing-specialist"],
    faqItems: [
      {
        question: "What makes a strong account executive resume?",
        answer:
          "A strong AE resume leads with numbers: quota attainment, revenue closed, deal sizes, and pipeline value. Show progression from smaller to larger deals. Highlight your sales methodology, ability to navigate complex buying committees, and customer success metrics. Include specific industries and technologies sold.",
      },
      {
        question: "How do I describe deal sizes and sales cycles on my resume?",
        answer:
          "Be specific about average deal size, largest deal closed, typical sales cycle length, and number of stakeholders involved. Example: 'Managed enterprise deals averaging $150K with 6-month sales cycles involving 5+ stakeholders.' This helps employers assess your experience level and fit for their sales motion.",
      },
      {
        question: "Should account executives include CRM experience on their resume?",
        answer:
          "Yes, list your CRM platform (Salesforce, HubSpot, etc.) and describe how you use it for pipeline management, forecasting, and reporting. Mention any sales tools in your tech stack like Outreach, Gong, LinkedIn Sales Navigator, or ZoomInfo. Technology proficiency demonstrates professional sales discipline.",
      },
    ],
  },
  // ==================== TRADES & LABOR ====================
  {
    slug: "electrician",
    title: "Electrician",
    category: "Trades & Labor",
    summaryExamples: [
      "Licensed journeyman electrician with 10+ years of experience in commercial and industrial electrical installation, maintenance, and troubleshooting. Completed wiring for 50+ commercial build-outs averaging $200K each, maintaining 100% code compliance across all inspections.",
      "Safety-focused master electrician with expertise in high-voltage systems and renewable energy installations. Led a team of 8 electricians on a 500-unit residential development, completing the project 3 weeks ahead of schedule with zero safety incidents and zero code violations.",
      "Versatile electrician with experience in both new construction and retrofit projects. Installed and maintained electrical systems for a 200,000 sq. ft. manufacturing facility, reducing energy costs by 25% through LED retrofitting and smart lighting control systems.",
    ],
    skills: [
      "Electrical Installation",
      "NEC Code Compliance",
      "Blueprint Reading",
      "Troubleshooting",
      "Panel & Switchgear",
      "Conduit Bending",
      "Motor Controls",
      "PLC/Automation",
      "Fire Alarm Systems",
      "Renewable Energy/Solar",
      "OSHA Safety",
      "Team Leadership",
    ],
    tips: [
      "Include your electrical license type (apprentice, journeyman, master) and state(s) of licensure.",
      "Highlight safety records including hours worked without incidents and code inspection pass rates.",
      "Describe the types and scale of projects you have worked on: residential, commercial, or industrial.",
      "List specialized skills like solar installation, fire alarm systems, or PLC programming.",
      "Include OSHA certifications and any manufacturer-specific training credentials.",
    ],
    relatedTitles: ["hvac-technician", "plumber", "construction-manager", "welder"],
    faqItems: [
      {
        question: "What license should an electrician list on their resume?",
        answer:
          "List your current electrical license level (apprentice, journeyman, or master), the issuing state(s), and license number. Include your license expiration date if applicable. If you hold licenses in multiple states, list all active ones. Also include any specialty licenses for fire alarm, low voltage, or solar installation.",
      },
      {
        question: "How do I write an electrician resume with no experience?",
        answer:
          "Highlight your electrical apprenticeship program enrollment or completion, vocational training, and any hands-on experience from school projects or volunteer work. Include your electrical theory knowledge, tool proficiency, and safety training. List your OSHA 10 or 30 certification and any manufacturer training courses completed.",
      },
      {
        question: "What certifications should an electrician include on their resume?",
        answer:
          "Include your state electrical license, OSHA 10/30, CPR/First Aid, and any specialty certifications like NABCEP for solar, NICET for fire alarm systems, or manufacturer certifications from Square D, Eaton, or Siemens. Continuing education hours demonstrate your commitment to staying current with code changes.",
      },
    ],
  },
  {
    slug: "plumber",
    title: "Plumber",
    category: "Trades & Labor",
    summaryExamples: [
      "Licensed master plumber with 12+ years of experience in residential and commercial plumbing installation and repair. Managed projects totaling $1.5M+ annually, maintaining a 98% first-visit repair success rate and a 4.9/5 customer satisfaction rating across 1,000+ service calls.",
      "Experienced plumber specializing in commercial new construction and medical gas systems. Led plumbing installation for 3 hospital projects with combined budgets of $4M, passing all inspections on the first attempt and completing work ahead of schedule.",
      "Service-focused plumber with expertise in water heater installation, drain cleaning, and fixture replacement. Built a service territory generating $600K in annual revenue with a 75% repeat customer rate and 200+ five-star reviews on Google Business.",
    ],
    skills: [
      "Pipe Installation & Repair",
      "Blueprint Reading",
      "Plumbing Code Compliance",
      "Drain Cleaning",
      "Water Heater Installation",
      "Backflow Prevention",
      "Soldering/Brazing",
      "PVC/Copper/PEX",
      "Commercial Plumbing",
      "Medical Gas Systems",
      "Customer Service",
      "Estimating & Bidding",
    ],
    tips: [
      "Include your plumbing license type and state(s), as licensing requirements vary significantly by location.",
      "Highlight your inspection pass rates and code compliance record.",
      "Describe the types of projects you specialize in: residential service, commercial new construction, or industrial.",
      "Include any specialized certifications like backflow prevention, medical gas, or green plumbing.",
      "Quantify your customer satisfaction ratings and repeat business rates for service roles.",
    ],
    relatedTitles: ["electrician", "hvac-technician", "carpenter", "construction-manager"],
    faqItems: [
      {
        question: "What license should a plumber list on their resume?",
        answer:
          "List your plumbing license level (apprentice, journeyman, or master), issuing state or municipality, and license number. Include specialty endorsements like backflow certifier, medical gas installer, or natural gas certification. Master plumber licenses are particularly valuable as they allow you to pull permits and run your own business.",
      },
      {
        question: "How do I make a plumber resume stand out?",
        answer:
          "Lead with your license level and years of experience. Include specific project types and scales, code inspection pass rates, customer satisfaction metrics, and safety records. List specialized skills beyond basic plumbing such as hydronics, medical gas, or green plumbing technologies. Customer reviews and referral rates add credibility.",
      },
      {
        question: "What skills are most important for a plumber resume?",
        answer:
          "Core skills include pipe installation and repair, blueprint reading, plumbing code knowledge, troubleshooting, and customer service. Specialized skills like backflow testing, camera inspection, hydro-jetting, and tankless water heater installation differentiate you. Physical stamina, problem-solving, and communication skills are also valued.",
      },
    ],
  },
  {
    slug: "carpenter",
    title: "Carpenter",
    category: "Trades & Labor",
    summaryExamples: [
      "Skilled carpenter with 8+ years of experience in residential and commercial framing, finish work, and custom cabinetry. Completed 100+ projects ranging from $10K to $500K, consistently delivering within 5% of estimated timelines and budgets.",
      "Detail-oriented finish carpenter specializing in high-end residential renovations and custom millwork. Crafted custom built-ins, staircases, and trim packages for luxury homes valued at $2M+, earning repeat business from 15+ builders and architects.",
      "Versatile carpenter with expertise in both rough and finish carpentry for commercial construction. Led a crew of 6 carpenters on a $3M office build-out, completing all framing, drywall, and finish work on schedule with zero punch list items on final inspection.",
    ],
    skills: [
      "Rough Framing",
      "Finish Carpentry",
      "Blueprint Reading",
      "Custom Cabinetry",
      "Trim & Molding",
      "Drywall Installation",
      "Power & Hand Tools",
      "Measurements & Layout",
      "Deck & Stair Construction",
      "Wood Finishing",
      "Project Estimation",
      "OSHA Safety",
    ],
    tips: [
      "Describe the types and scale of carpentry projects you specialize in.",
      "Highlight your accuracy and quality by mentioning inspection pass rates and punch list results.",
      "Include both rough and finish carpentry skills to demonstrate versatility.",
      "List specific certifications, apprenticeship completion, and safety training.",
      "Quantify your work with project values, crew sizes managed, and timeline adherence.",
    ],
    relatedTitles: ["construction-manager", "electrician", "plumber", "welder"],
    faqItems: [
      {
        question: "What should a carpenter include on their resume?",
        answer:
          "Include your specialization (rough framing, finish carpentry, cabinetry), years of experience, types of projects completed, and any certifications or apprenticeship credentials. List specific tools and techniques you are proficient in. Include safety training (OSHA), and quantify your work with project values and crew sizes.",
      },
      {
        question: "How do I write a carpenter resume for a union position?",
        answer:
          "Highlight your union membership, apprenticeship completion, and journeyman or master carpenter status. Include your hours of training, specialty endorsements, and safety certifications. Describe your experience on union job sites including project types, scale, and the general contractors you have worked with.",
      },
      {
        question: "What certifications help a carpenter resume stand out?",
        answer:
          "Valuable certifications include OSHA 10/30, First Aid/CPR, union journeyman or master carpenter credentials, LEED certification for green building, and manufacturer certifications for specific products or systems. Forklift, scaffold, and aerial lift certifications add value for commercial construction roles.",
      },
    ],
  },
  {
    slug: "hvac-technician",
    title: "HVAC Technician",
    category: "Trades & Labor",
    summaryExamples: [
      "EPA-certified HVAC technician with 9+ years of experience installing, maintaining, and repairing residential and commercial heating and cooling systems. Completed 1,500+ service calls with a 95% first-visit resolution rate and maintained a 4.8/5 customer satisfaction rating.",
      "Commercial HVAC technician specializing in rooftop units, chillers, and building automation systems. Managed preventive maintenance contracts for 30+ commercial properties totaling 2M+ sq. ft., reducing HVAC-related energy costs by an average of 20% per building.",
      "Installation-focused HVAC technician with expertise in high-efficiency systems and ductwork design. Installed 200+ residential HVAC systems ranging from $8K to $25K, with 100% permit inspection pass rate and zero warranty callbacks in the past 2 years.",
    ],
    skills: [
      "System Installation",
      "Preventive Maintenance",
      "Troubleshooting & Repair",
      "Refrigerant Handling (EPA 608)",
      "Ductwork Design & Installation",
      "Building Automation Systems",
      "Electrical Diagnostics",
      "Load Calculations",
      "Heat Pumps",
      "Commercial Rooftop Units",
      "Sheet Metal Fabrication",
      "Customer Service",
    ],
    tips: [
      "Include your EPA 608 certification and NATE certification prominently as they are industry requirements.",
      "Highlight your first-visit resolution rate and customer satisfaction metrics.",
      "Describe the types of systems you work on: residential, commercial, industrial, and specific equipment brands.",
      "Include safety records and inspection pass rates to demonstrate quality workmanship.",
      "List manufacturer certifications for specific brands like Carrier, Trane, Lennox, or Daikin.",
    ],
    relatedTitles: ["electrician", "plumber", "construction-manager", "welder"],
    faqItems: [
      {
        question: "What certifications should an HVAC technician list on their resume?",
        answer:
          "Essential certifications include EPA 608 (Universal preferred), NATE certification, OSHA 10/30, and state-specific HVAC licenses. Manufacturer certifications from Carrier, Trane, Lennox, or Daikin add significant value. R-410A certification and building automation system credentials are increasingly important for modern HVAC work.",
      },
      {
        question: "How do I describe HVAC experience on a resume?",
        answer:
          "Describe the types of systems (split systems, heat pumps, chillers, RTUs), the scale of properties served, and your specific responsibilities. Include service call volume, resolution rates, maintenance contract sizes, and installation counts. Mention brands worked on and tonnage ranges for commercial systems.",
      },
      {
        question: "What is the career path for an HVAC technician and how should my resume reflect it?",
        answer:
          "The typical path progresses from apprentice to journeyman technician to lead technician to service manager or business owner. Show progression through your resume with increasing system complexity, customer responsibility, and team leadership. Include training, certifications, and specializations acquired at each stage.",
      },
    ],
  },
  {
    slug: "welder",
    title: "Welder",
    category: "Trades & Labor",
    summaryExamples: [
      "AWS-certified welder with 8+ years of experience in structural steel, pipe welding, and fabrication. Maintained a 99.5% pass rate on weld inspections across 500+ joints, including ASME Section IX certified pressure vessel welds for oil and gas applications.",
      "Versatile welder proficient in MIG, TIG, stick, and flux-cored welding processes. Fabricated and installed structural steel for 20+ commercial buildings, leading a crew of 4 welders and completing all work within schedule and with zero safety incidents.",
      "Precision welder specializing in aerospace and medical device manufacturing. Performed TIG welding on exotic alloys (titanium, Inconel, stainless steel) with tolerances of +/-0.005 inches, maintaining 100% quality inspection pass rates across 10,000+ welds.",
    ],
    skills: [
      "MIG/TIG/Stick Welding",
      "Blueprint Reading",
      "Structural Steel",
      "Pipe Welding",
      "Fabrication",
      "Weld Inspection (Visual/NDT)",
      "ASME/AWS Standards",
      "CNC Plasma/Oxy-fuel Cutting",
      "Metal Fitting",
      "Quality Control",
      "OSHA Safety",
      "Equipment Maintenance",
    ],
    tips: [
      "Include your welding certifications with specific processes, positions, and materials (e.g., '6G Pipe, SMAW, Carbon Steel').",
      "Highlight inspection pass rates and quality metrics as they are the most important performance indicators.",
      "List all welding processes you are certified in and the materials you have experience with.",
      "Describe the types of projects and industries you have worked in.",
      "Include safety records and any specialized training for hazardous environments.",
    ],
    relatedTitles: ["electrician", "carpenter", "construction-manager", "plumber"],
    faqItems: [
      {
        question: "What certifications should a welder list on their resume?",
        answer:
          "List AWS (American Welding Society) certifications with specific designations including welding process (SMAW, GMAW, GTAW), position (1G through 6G), and material type. ASME Section IX certifications for pressure vessel welding are highly valued. Include your certification numbers, issuing bodies, and expiration dates.",
      },
      {
        question: "How do I describe welding skills on a resume?",
        answer:
          "List each welding process you are proficient in (MIG, TIG, stick, flux-core) along with the materials (carbon steel, stainless, aluminum, exotic alloys) and positions (flat, horizontal, vertical, overhead, pipe). Include your weld inspection pass rates, joint types, and any thickness ranges you work with.",
      },
      {
        question: "What industries hire welders and how should I tailor my resume?",
        answer:
          "Welders work in construction, manufacturing, oil and gas, aerospace, shipbuilding, and automotive industries. Tailor your resume by emphasizing relevant certifications: ASME for pressure vessels, AWS D1.1 for structural steel, aerospace welding specs for aviation. Include industry-specific safety training and quality standards experience.",
      },
    ],
  },
  {
    slug: "construction-manager",
    title: "Construction Manager",
    category: "Trades & Labor",
    summaryExamples: [
      "Licensed construction manager with 12+ years of experience overseeing commercial and residential projects valued at $5M to $100M. Delivered 30+ projects with an average of 5% under budget and 98% on-time completion rate while maintaining OSHA recordable incident rates 60% below industry average.",
      "Results-driven construction manager with expertise in ground-up commercial construction and tenant improvements. Managed a portfolio of 8 concurrent projects totaling $45M, coordinating 100+ subcontractors and achieving LEED Gold certification on 3 projects.",
      "Client-focused construction manager with a track record of building long-term owner relationships. Grew repeat client business to 70% of annual revenue by delivering transparent communication, proactive risk management, and consistent project quality across 50+ completed projects.",
    ],
    skills: [
      "Project Planning & Scheduling",
      "Budget Management",
      "Subcontractor Coordination",
      "Blueprint & Spec Review",
      "Safety Management (OSHA)",
      "Quality Control",
      "Contract Negotiation",
      "Procore/MS Project",
      "Building Codes & Permits",
      "Client Relations",
      "Risk Management",
      "LEED/Green Building",
    ],
    tips: [
      "Lead with the dollar value of projects managed and your track record for budget and schedule adherence.",
      "Include your construction manager license, PMP, or CCM certification.",
      "Highlight safety performance with OSHA recordable rates and incident statistics.",
      "Describe the types of projects managed: commercial, residential, industrial, healthcare, or infrastructure.",
      "Show client management skills through repeat business rates and satisfaction metrics.",
    ],
    relatedTitles: ["civil-engineer", "operations-manager", "electrician", "carpenter"],
    faqItems: [
      {
        question: "What certifications should a construction manager list on their resume?",
        answer:
          "Key certifications include CCM (Certified Construction Manager) from CMAA, PMP from PMI, OSHA 30, and LEED AP for green building. State-specific general contractor licenses are essential where required. First Aid/CPR and any specialized safety certifications add value for safety-focused organizations.",
      },
      {
        question: "How do I describe construction management experience on a resume?",
        answer:
          "For each role, describe the project types, total dollar value managed, team and subcontractor size, schedule and budget performance, and safety records. Use specific metrics: describe a $25M mixed-use project delivered 2 months early and 8% under budget rather than simply stating you managed construction projects.",
      },
      {
        question: "What software should a construction manager list on their resume?",
        answer:
          "List project management software (Procore, PlanGrid, Buildertrend), scheduling tools (MS Project, Primavera P6), BIM tools (Revit, Navisworks), estimating software (Bluebeam, ProEst), and document management systems. Technology proficiency is increasingly important as construction becomes more digitized.",
      },
    ],
  },
];

// ==================== HELPER FUNCTIONS ====================

export function getJobTitleBySlug(slug: string): JobTitle | undefined {
  return jobTitles.find((jt) => jt.slug === slug);
}

export function getAllJobTitleSlugs(): string[] {
  return jobTitles.map((jt) => jt.slug);
}

export function getJobTitlesByCategory(category: string): JobTitle[] {
  return jobTitles.filter((jt) => jt.category === category);
}
