"use strict";

const DEFAULT_LANGUAGE = "en";
const LANGUAGE_STORAGE_KEY = "portfolio-language";

const SUPPORTED_LANGUAGES = ["en", "pt-BR", "es"];

const LANGUAGE_CODES = {
    en: "EN",
    "pt-BR": "PT",
    es: "ES"
};

const LANGUAGE_FLAG_PATHS = {
    en: "assets/images/flags/flag-en.svg",
    "pt-BR": "assets/images/flags/flag-pt-br.svg",
    es: "assets/images/flags/flag-es.svg"
};

const translations = {
    "en": {
        "nav": {
            "home": "Home",
            "intro": "Intro",
            "work": "Work",
            "skills": "Skills",
            "about": "About",
            "howIWork": "How I Work",
            "faq": "FAQ",
            "contact": "Contact",
            "contactMe": "Contact Me"
        },
        "language": {
            "select": "Select language"
        },
        "hero": {
            "availability": "Open to junior front-end opportunities",
            "titleWordOne": "Front-end",
            "titleWordTwo": "developer",
            "titleWordThree": "building",
            "titleWordFour": "real-world",
            "titleWordFive": "products.",
            "description": "I build responsive and accessible web applications with React, TypeScript and Next.js.",
            "descriptionHighlight": "I turn product ideas and interface designs into clear, reliable experiences for real users.",
            "location": "Dublin, Ireland · Open to opportunities across Europe",
            "viewWork": "View selected work"
        },
        "stack": {
            "ariaLabel": "My daily technology stack",
            "eyebrow": "MY DAILY STACK",
            "title": "Tools I use to build useful products"
        },
        "projects": {
            "titleWordOne": "Latest",
            "titleWordTwo": "Projects",
            "viewProject": "View Project",
            "viewAll": "View all my projects"
        },
        "skills": {
            "titleLineOne": "Skills I use",
            "titleLineTwo": "to build useful",
            "titleLineThree": "web products",
            "stackTitle": "My tech stack",
            "frontEnd": "Front-end Development",
            "responsiveApps": "Responsive Web Apps",
            "landingPages": "Landing Pages",
            "apiIntegration": "API Integration",
            "dashboardInterfaces": "Dashboard Interfaces",
            "figmaToCode": "Figma to Code",
            "versionControl": "Version Control"
        },
        "about": {
            "titleMuted": "Building useful products",
            "titleStrong": "that solve real problems.",
            "socialLinks": "Social media links",
            "whatsappLabel": "Message Felipe on WhatsApp",
            "role": "Junior Front-End Developer",
            "historyTitle": "My work history",
            "movedDublin": "Moved to Dublin",
            "buildingProjects": "Building MoneyPilot and Black Bull Steak House",
            "now": "Now",
            "openOpportunities": "Open to junior opportunities",
            "summaryOneHighlight": "My creative journey began with graphic design in 2019.",
            "summaryOneMuted": "I learned Photoshop, Illustrator and branding — and discovered Figma.",
            "summaryTwoHighlight": "In 2023, I started turning my designs into code.",
            "summaryTwoMuted": "I started with HTML, CSS and JavaScript. After moving to Dublin, I committed to becoming a front-end developer.",
            "summaryThreeHighlight": "Today, I combine design thinking with development.",
            "summaryThreeMuted": "I build responsive, accessible products with JavaScript, TypeScript, React and Next.js — and I’m ready to contribute, learn and grow."
        },
        "workProcess": {
            "titleMuted": "From an idea.",
            "titleStrong": "To a working product.",
            "introHighlight": "Clear process, thoughtful execution.",
            "introText": "I turn Figma designs and product ideas into responsive, maintainable web experiences.",
            "understandTitle": "Understand",
            "understandText": "Learn the goal, the user and the problem before writing code.",
            "buildTitle": "Build",
            "buildText": "Create responsive interfaces with React, Next.js and TypeScript.",
            "improveTitle": "Improve",
            "improveText": "Test, refine and document each decision as the product grows."
        },
        "faq": {
            "eyebrow": "FREQUENTLY ASKED QUESTIONS",
            "titleMuted": "Your questions",
            "titleStrong": "answered.",
            "contactMuted": "Still not sure?",
            "contactStrong": "Book a free discovery call.",
            "contactText": "Learn more about how I work and how I can help you and your business take the next step.",
            "whatsappLabel": "Send Felipe a message on WhatsApp",
            "sendMessage": "Send me a message",
            "questionOne": "Are you available for a junior front-end role?",
            "answerOne": "Yes. I’m based in Dublin and open to junior opportunities across Ireland and Europe.",
            "questionTwo": "Which technologies do you work with?",
            "answerTwo": "I work with HTML, CSS, JavaScript, TypeScript, React, Next.js, Tailwind CSS, Git and GitHub.",
            "questionThree": "Can you turn Figma designs into code?",
            "answerThree": "Yes. I translate Figma designs into responsive, accessible interfaces while preserving the intended layout and visual details.",
            "questionFour": "What are you building right now?",
            "answerFour": "I’m currently building MoneyPilot, a personal finance platform, and Black Bull, a digital restaurant experience.",
            "questionFive": "Are your projects responsive and accessible?",
            "answerFive": "Yes. I build mobile-first layouts with semantic HTML, keyboard-friendly interactions and adaptable components."
        },
        "finalCta": {
            "eyebrow": "OPEN TO JUNIOR OPPORTUNITIES",
            "titleOne": "Let’s build something",
            "titleAccent": "useful together.",
            "description": "I’m ready to contribute, learn and build thoughtful web experiences with a collaborative team.",
            "viewWork": "View my work",
            "opportunitiesTitle": "Ready to contribute",
            "juniorOpportunity": "Junior front-end opportunities",
            "figmaCode": "Figma to production code",
            "responsive": "Responsive web experiences",
            "components": "Clear, maintainable components",
            "location": "Dublin, Ireland",
            "openEurope": "Open across Europe"
        },
        "footer": {
            "titleOne": "Let’s design",
            "titleTwo": "Incredible work together.",
            "email": "Email",
            "social": "Social",
            "whatsappLabel": "Message Felipe on WhatsApp",
            "navigationLabel": "Footer navigation",
            "menu": "Menu",
            "legal": "Legal",
            "terms": "Terms of service",
            "privacy": "Privacy Policy"
        },
        "notFoundPage": {
            "meta": {
                "title": "Page Not Found | Felipe S Bephman",
                "description": "Page not found. Return to Felipe’s portfolio."
            },
            "hero": {
                "title": "Oops! Wrong turn.",
                "description": "The page you are looking for could not be found.",
                "home": "Homepage"
            }
        },
        "common": {
            "navigation": {
                "main": "Main navigation",
                "open": "Open navigation menu",
                "close": "Close navigation menu"
            },
            "images": {
                "portrait": "Portrait of Felipe S Bephman",
                "signature": "Felipe S Belphman signature"
            },
            "caseStudies": {
                "allProjects": "All projects",
                "role": "Role",
                "roleValue": "Product Design & Front-end Development",
                "type": "Type",
                "stack": "Stack",
                "status": "Status",
                "mvp": "MVP in development",
                "project": "The project",
                "challenge": "The challenge",
                "solution": "The solution",
                "next": "Next project"
            },
            "legal": {
                "updated": "Last updated:",
                "date": "15 September 2026",
                "introduction": "1. Introduction",
                "email": "Email:"
            }
        },
        "contact": {
            "close": "Close contact form",
            "title": "Let’s build something useful.",
            "description": "Tell me about your project or contact me directly.",
            "available": "Available",
            "name": "Name",
            "project": "Tell me about your project",
            "messagePlaceholder": "Share a few details — goals, ideas, timeline, or anything you think is relevant.",
            "help": "How can I help?",
            "options": {
                "prompt": "Select an option",
                "development": "Front-end development",
                "figma": "Figma to code",
                "responsive": "Responsive website",
                "job": "Junior job opportunity",
                "other": "Other"
            },
            "send": "Send Message",
            "whatsapp": "Message on WhatsApp",
            "reply": "I’ll reply as soon as possible.",
            "emailSubject": "Portfolio contact",
            "emailEnquiry": "Portfolio enquiry",
            "emailMessage": "Message"
        },
        "blackBullMobilePage": {
            "meta": {
                "title": "Black Bull Mobile Case Study | Felipe S Bephman",
                "description": "A responsive kitchen display designed to help restaurant teams receive, organize, prepare, and complete digital orders more efficiently."
            },
            "hero": {
                "eyebrow": "Restaurant technology — Kitchen display",
                "intro": "A responsive kitchen display designed to help restaurant teams receive, organize, prepare, and complete digital orders more efficiently."
            },
            "details": {
                "type": "Kitchen Display System"
            },
            "images": {
                "preview": "Black Bull Mobile project preview",
                "interface": "Black Bull kitchen display interface",
                "mobile": "Black Bull mobile restaurant interface"
            },
            "project": {
                "overview": "Black Bull Mobile connects the restaurant’s digital ordering experience with a dedicated kitchen workflow. New orders can be received and managed from one clear, responsive interface.",
                "environment": "The display is designed for practical use in a busy restaurant environment, including tablet-sized screens."
            },
            "challenge": {
                "orders": "Kitchen teams need to understand each order quickly without navigating through a complex system or losing track of its current preparation status.",
                "interface": "The interface needed strong visual hierarchy, clear order states, and controls that remain easy to use during fast-paced service."
            },
            "solution": {
                "workflow": "Orders are organized into clear stages such as new, preparing, and ready. Status indicators, timers, and focused order cards help the kitchen identify priorities and update progress.",
                "upcoming": "Additional workflow details, device mockups, and final interface screens will be added as the case study develops."
            }
        },
        "projectsPage": {
            "meta": {
                "title": "Selected Projects | Felipe S Bephman",
                "description": "Explore Felipe’s selected design and front-end development projects."
            },
            "hero": {
                "eyebrow": "Portfolio — Selected work",
                "titleStart": "Selected",
                "titleEnd": "Projects.",
                "description": "A collection of digital products created to solve real problems through thoughtful design and front-end development."
            },
            "collection": {
                "label": "Project collection"
            }
        },
        "blackBullPage": {
            "hero": {
                "eyebrow": "Restaurant technology — Digital menu",
                "intro": "A responsive digital restaurant menu designed to improve the customer experience and simplify communication between guests, waiters, and the kitchen."
            },
            "details": {
                "type": "Digital Restaurant Menu"
            },
            "images": {
                "preview": "Black Bull project preview",
                "interface": "Black Bull digital restaurant menu interface"
            },
            "project": {
                "overview": "Black Bull is a digital menu experience that customers can access using a QR code or NFC tag at their table. It presents categories, dishes, promotions, and popular items in a clear and responsive interface.",
                "audience": "The product is designed for restaurants that want to modernize service without making the experience more complicated for customers or staff."
            },
            "challenge": {
                "menus": "Traditional menus can be difficult to update, while poorly designed digital menus often make browsing slower and less enjoyable.",
                "branding": "The challenge was to combine strong restaurant branding with simple navigation, readable menu information, and practical table-service actions."
            },
            "solution": {
                "actions": "The interface organizes products into clear categories and introduces actions such as calling a waiter and requesting the bill directly from the table.",
                "integration": "The wider system also connects customer orders with a kitchen workflow, creating the foundation for a complete restaurant operations platform.",
                "upcoming": "Additional menu screens, mobile mockups, ordering flows, and NFC presentation images will be added as the case study develops."
            },
            "meta": {
                "title": "Black Bull Case Study | Felipe S Bephman",
                "description": "A responsive digital restaurant menu designed to improve the customer experience and simplify communication between guests, waiters, and the kitchen."
            }
        },
        "homePage": {
            "meta": {
                "title": "Felipe S Bephman | Front-end Developer",
                "description": "Felipe’s front-end development portfolio: selected projects, skills and contact information."
            },
            "images": {
                "projects": "Preview of Felipe's selected web development projects"
            }
        },
        "moneyPilotPage": {
            "images": {
                "interface": "MoneyPilot financial dashboard interface",
                "preview": "MoneyPilot project preview"
            },
            "meta": {
                "title": "MoneyPilot Case Study | Felipe S Bephman",
                "description": "A personal finance platform designed to help people understand their money, control spending, and make progress toward meaningful financial goals."
            },
            "hero": {
                "eyebrow": "Financial technology — Web application",
                "intro": "A personal finance platform designed to help people understand their money, control spending, and make progress toward meaningful financial goals."
            },
            "details": {
                "type": "Personal Finance Web App",
                "status": "In development"
            },
            "project": {
                "overview": "MoneyPilot brings financial information into one clear experience, helping users track transactions, plan budgets, organize goals, and understand their complete financial picture.",
                "approach": "The product combines software, data, artificial intelligence, and business intelligence to turn complex financial information into practical guidance."
            },
            "challenge": {
                "complexity": "Financial tools can feel complex and overwhelming. The challenge was to create a dashboard that presents detailed information without making users feel lost.",
                "consistency": "The interface also needed to remain consistent across desktop and mobile while supporting both day and night themes."
            },
            "solution": {
                "structure": "The solution uses clear visual hierarchy, reusable components, accessible navigation, and focused dashboards for transactions, budgets, insights, goals, and investments.",
                "upcoming": "Additional project details, process images, and final mockups will be added as the case study develops."
            },
            "content": {
                "heroSubtitle": "An AI-Assisted Financial Management Platform",
                "technologiesUsed": "Technologies used",
                "viewRepository": "View Repository",
                "activeDevelopment": "Active development",
                "previewFile": "product-preview.mp4",
                "heroVideo": "MoneyPilot authentication and dashboard demonstration",
                "previewCaption": "PRODUCT PREVIEW · AUTHENTICATION → DASHBOARD",
                "role": "ROLE",
                "type": "TYPE",
                "status": "STATUS",
                "focus": "FOCUS",
                "focusValue": "FinTech · Data · AI",
                "strategyEyebrow": "01 / PRODUCT STRATEGY",
                "strategyTitle": "From financial information to confident decisions.",
                "problemLabel": "THE PROBLEM",
                "problemText": "Personal finance tools often show numbers without helping people understand what those numbers mean. Users are left with fragmented transactions, unclear spending patterns, and goals that feel disconnected from everyday decisions.",
                "solutionLabel": "THE SOLUTION",
                "solutionText": "MoneyPilot brings transactions, budgets, goals, investments, and AI-assisted observations into one clear system—helping people move from financial visibility to practical action.",
                "mobileRegion": "MoneyPilot mobile experience",
                "mobileEyebrow": "01 / RESPONSIVE EXPERIENCE",
                "mobileTitle": "Mobile authentication flow",
                "mobileVideo": "MoneyPilot mobile authentication walkthrough",
                "mobilePlayback": "PLAY PRODUCT WALKTHROUGH",
                "experienceEyebrow": "02 / PRODUCT EXPERIENCE",
                "experienceTitle": "One financial workspace, designed for clarity.",
                "dayTitle": "DAY + NIGHT",
                "dayText": "A consistent interface adapts to different environments without changing the product hierarchy.",
                "languagesTitle": "7 LANGUAGES",
                "languagesText": "Designed for international users and future European expansion.",
                "currencyTitle": "MULTI-CURRENCY",
                "currencyText": "Financial information remains understandable across currencies and personal contexts.",
                "experienceFile": "authentication-to-dashboard.mp4",
                "experienceVideo": "MoneyPilot responsive product experience",
                "liveWalkthrough": "LIVE PRODUCT WALKTHROUGH",
                "authDashboard": "AUTHENTICATION → DASHBOARD",
                "desktopEyebrow": "02 / DESKTOP EXPERIENCE",
                "desktopTitle": "One workspace across every device.",
                "desktopBody": "The MoneyPilot dashboard preserves financial clarity, hierarchy, and usability from mobile to desktop without sacrificing detail.",
                "responsiveOverview": "Responsive financial overview",
                "darkThemes": "Consistent light and dark themes",
                "dataHierarchy": "Clear data hierarchy at larger scales",
                "featuresEyebrow": "03 / CORE PRODUCT EXPERIENCE",
                "featuresTitle": "A complete system for everyday financial decisions.",
                "dashboardTitle": "Dashboard",
                "dashboardText": "A decision-first overview of balances, income, expenses, cash flow, and progress.",
                "transactionsTitle": "Transactions",
                "transactionsText": "CSV import, categories, filters, and a clear history of financial activity.",
                "budgetsTitle": "Budgets",
                "budgetsText": "Spending limits and progress tracking that make financial plans visible.",
                "insightsTitle": "AI Insights",
                "insightsText": "Personalized observations designed to explain patterns and highlight better decisions.",
                "goalsTitle": "Goals",
                "goalsText": "Practical progress tracking for homes, travel, education, family, and other milestones.",
                "investmentsTitle": "Investments",
                "investmentsText": "A unified view of portfolio value, allocation, performance, and long-term growth.",
                "architectureEyebrow": "04 / ENGINEERING + TRUST",
                "architectureTitle": "Built as a real product, not a static dashboard.",
                "architectureLabel": "PROJECT ARCHITECTURE",
                "architectureTree": "MoneyPilot project architecture",
                "localTests": "LOCAL TESTS",
                "localTestsText": "Automated tests across product logic, contracts, and user-facing behavior.",
                "remoteTests": "REMOTE RLS TESTS",
                "remoteTestsText": "Row Level Security validates ownership and isolates each user's financial data.",
                "secureModel": "SECURE DATA MODEL",
                "secureModelText": "Hardened operations with ownership enforcement, validation, and sanitized errors.",
                "roadmapEyebrow": "05 / DEVELOPMENT ROADMAP",
                "roadmapTitle": "From interface foundation to intelligent financial guidance.",
                "complete": "COMPLETE",
                "inProgress": "IN PROGRESS",
                "next": "NEXT",
                "active": "ACTIVE",
                "planned": "PLANNED",
                "interfaceTitle": "Interface",
                "interfaceText": "Landing, responsive screens, authentication UI, and dashboard foundations.",
                "authenticationTitle": "Authentication",
                "authenticationText": "Supabase registration, sessions, recovery, protected routes, and Google auth.",
                "financialDataTitle": "Financial Data",
                "financialDataText": "Income, expenses, transactions, categories, goals, and real dashboard data.",
                "securityTitle": "Security + Testing",
                "securityText": "RLS, data isolation, validation, permission tests, and production review.",
                "pythonTitle": "Python Intelligence",
                "pythonText": "Financial analysis, calculations, pattern detection, and automated summaries.",
                "aiTitle": "AI Insights",
                "aiText": "Personalized observations, recommendations, and assistant experience.",
                "productionTitle": "Production",
                "productionText": "Accessibility, performance, security audit, and final deployment.",
                "contextEyebrow": "01 / PROJECT CONTEXT",
                "contextTitle": "Why I built MoneyPilot and what I owned.",
                "contextLabel": "PROJECT CONTEXT",
                "contextText": "MoneyPilot is a personal finance product created to help people understand spending, organize financial data, and build practical plans for meaningful life goals.",
                "contextMeta": "Personal product · 2026",
                "roleLabel": "MY ROLE",
                "roleText": "I own the product direction, UX/UI design, front-end development, design system, responsive implementation, Supabase integration, and product validation.",
                "roleMeta": "Product Designer + Front-End Developer",
                "goalsLabel": "GOALS + CONSTRAINTS",
                "goalsText": "The MVP avoids bank APIs, prioritizes privacy, supports international users, and must remain understandable across currencies, languages, devices, and financial experience levels.",
                "goalsMeta": "No bank connection required",
                "processLabel": "MoneyPilot product process",
                "discovery": "Discovery",
                "productStrategy": "Product Strategy",
                "uxUi": "UX + UI",
                "engineering": "Engineering",
                "validation": "Validation",
                "thinkingEyebrow": "04 / PRODUCT THINKING",
                "thinkingTitle": "Decisions behind the interface.",
                "decisionLabel": "DESIGN DECISION",
                "decisionTitle": "Decision-first hierarchy",
                "decisionText": "Instead of presenting every financial metric at once, the dashboard prioritizes the information that helps users decide what to do next: current balance, cash flow, unusual spending, goal progress, and recommended actions.",
                "accessibilityLabel": "ACCESSIBILITY",
                "accessibilityTitle": "Clarity across themes and devices",
                "accessibilityText": "Day and Night modes preserve hierarchy and contrast. Responsive layouts, visible focus states, understandable labels, reduced visual noise, and consistent interaction patterns support different devices and user needs.",
                "challengeLabel": "CORE CHALLENGE",
                "challengeTitle": "Complex data without complexity",
                "challengeText": "The main challenge was combining transactions, budgets, goals, investments, and AI guidance without creating an interface that feels like professional accounting software. Progressive disclosure keeps advanced information available without overwhelming the user.",
                "learningLabel": "KEY LEARNING",
                "learningTitle": "Trust must be designed and engineered",
                "learningText": "Financial products require more than polished screens. Clear language, predictable feedback, user-owned data, RLS policies, validation, error handling, and meaningful tests all contribute to the same product quality: trust.",
                "moreEyebrow": "NEXT / EXPLORE MORE WORK",
                "moreTitle": "More Projects",
                "blackBullLink": "View Black Bull Restaurant project",
                "blackBullAlt": "Black Bull Restaurant kitchen display system",
                "blackBullTitle": "Black Bull Restaurant",
                "blackBullType": "Restaurant Operations Platform",
                "devConnectLink": "View DevConnect project",
                "devConnectAlt": "DevConnect technology jobs platform",
                "devConnectTitle": "DevConnect",
                "devConnectType": "Technology Jobs Platform",
                "viewProject": "View Project",
                "viewAll": "View all my projects",
                "ctaEyebrow": "MONEYPILOT / ACTIVE DEVELOPMENT",
                "ctaTitle": "Building financial clarity into an intelligent product.",
                "ctaText": "Follow the project on GitHub to explore the codebase, architecture, testing strategy, and upcoming product phases.",
                "viewGithub": "View GitHub Repository",
                "backProjects": "Back to Projects",
                "mobileOneAlt": "MoneyPilot dashboard displayed on a smartphone",
                "mobileTwoAlt": "MoneyPilot financial dashboard on a mobile device",
                "desktopAlt": "MoneyPilot dashboard presented on a desktop computer"
            }
        },
        "petIdPage": {
            "images": {
                "interface": "Pet ID digital identification interface",
                "preview": "Pet ID project preview"
            },
            "meta": {
                "title": "Pet ID Case Study | Felipe S Bephman",
                "description": "A digital identification experience designed to make important pet information easy to access and help people reconnect lost pets with their guardians."
            },
            "hero": {
                "eyebrow": "Pet technology — Digital identification",
                "intro": "A digital identification experience designed to make important pet information easy to access and help people reconnect lost pets with their guardians."
            },
            "details": {
                "type": "Digital Pet Identification",
                "status": "Concept project"
            },
            "project": {
                "overview": "Pet ID explores a simple digital profile where important information about a pet can be presented clearly and accessed from different devices.",
                "approach": "The experience is designed around quick identification, clear contact information, and an interface that remains easy to understand during a stressful situation."
            },
            "challenge": {
                "urgency": "When a pet is lost, information needs to be communicated quickly. A complicated interface or unclear contact details can delay communication with the guardian.",
                "accessibility": "The challenge was to organize essential information in a friendly, accessible, and mobile-first experience."
            },
            "solution": {
                "priorities": "The interface prioritizes the pet’s identity, guardian contact options, and important details using clear hierarchy and responsive components.",
                "upcoming": "Additional project information, user flows, screens, and device mockups will be added when the final case study assets are prepared."
            }
        },
        "privacyPage": {
            "meta": {
                "title": "Privacy Policy | Felipe S Bephman",
                "description": "How Felipe S Bephman collects, uses and protects personal information on this portfolio."
            },
            "introduction": {
                "policy": "This Privacy Policy explains how Felipe S Bephman collects, uses, and protects personal information when you visit this portfolio or contact me about my services.",
                "purpose": "This portfolio is operated from Ireland and is intended to present my work and allow potential clients, employers, and collaborators to contact me."
            },
            "collection": {
                "title": "2. Information I Collect",
                "emailTitle": "2.1 Information you provide by email",
                "formIntro": "When you use the contact form, you may provide:",
                "name": "Your name",
                "email": "Your email address",
                "enquiry": "The type of enquiry",
                "message": "Your message",
                "other": "Any other information you choose to include",
                "mailto": "The contact form creates an email using your device’s email application. This website does not store the form submission in its own database.",
                "whatsappTitle": "2.2 Information shared through WhatsApp",
                "whatsapp": "If you choose to contact me through WhatsApp, your phone number, profile information, message, and any files you send will be processed through WhatsApp. WhatsApp’s own privacy terms also apply to that communication.",
                "technicalTitle": "2.3 Technical information",
                "technical": "The website does not currently use analytics or advertising trackers. The website hosting provider may process limited technical information, such as IP address, browser information, and server logs, to deliver and secure the website."
            },
            "cookies": {
                "title": "3. Cookies and Analytics",
                "usage": "This portfolio does not currently set analytics, advertising, or marketing cookies.",
                "external": "External services opened through links, including WhatsApp and social media platforms, may use their own cookies according to their privacy policies."
            },
            "usage": {
                "title": "4. How I Use Your Information",
                "intro": "I use the information you provide to:",
                "respond": "Respond to enquiries",
                "discuss": "Discuss projects or employment opportunities",
                "provide": "Provide information you request",
                "records": "Maintain records of relevant communications",
                "protect": "Protect the website and prevent misuse",
                "comply": "Comply with applicable legal obligations"
            },
            "bases": {
                "title": "5. Legal Bases for Processing",
                "intro": "Where the General Data Protection Regulation (GDPR) applies, personal information may be processed because:",
                "consent": "You have given consent",
                "contract": "Processing is necessary to respond to your request or take steps before entering a contract",
                "interests": "Processing is necessary for legitimate interests, such as communicating with potential clients or protecting the website",
                "obligation": "Processing is necessary to comply with a legal obligation"
            },
            "sharing": {
                "title": "6. How Information Is Shared",
                "intro": "I do not sell or rent your personal information. Information may be processed by services needed to operate communications and the website, including:",
                "email": "Email service providers",
                "whatsapp": "WhatsApp, when you choose to use it",
                "hosting": "The website hosting provider",
                "authorities": "Professional advisers or public authorities when required by law"
            },
            "transfers": {
                "title": "7. International Data Transfers",
                "description": "Some external service providers may process information outside Ireland or the European Economic Area. Where required, those providers are expected to use recognised safeguards for international data transfers."
            },
            "retention": {
                "title": "8. Data Retention",
                "duration": "Personal information is retained only for as long as reasonably necessary to respond to your enquiry, maintain relevant business records, resolve disputes, or comply with legal obligations.",
                "deletion": "You may request deletion of your personal information, subject to any information that must be retained by law."
            },
            "security": {
                "title": "9. Data Security",
                "description": "Reasonable technical and organisational measures are used to protect personal information. However, no internet transmission or electronic storage method can be guaranteed to be completely secure."
            },
            "rights": {
                "title": "10. Your Data Protection Rights",
                "intro": "Depending on applicable law, including the GDPR, you may have the right to:",
                "access": "Request access to your personal information",
                "correction": "Request correction of inaccurate information",
                "deletion": "Request deletion of your information",
                "restrict": "Restrict certain processing",
                "object": "Object to certain processing",
                "portability": "Request data portability where applicable",
                "withdraw": "Withdraw consent at any time",
                "complaint": "You may also lodge a complaint with the Irish Data Protection Commission or another competent supervisory authority."
            },
            "children": {
                "title": "11. Children’s Privacy",
                "description": "This portfolio and its services are not directed to children. I do not knowingly collect personal information from children through this website."
            },
            "links": {
                "title": "12. Third-Party Links",
                "description": "This website may contain links to external websites and services. I am not responsible for the privacy practices or content of those third parties."
            },
            "changes": {
                "title": "13. Changes to This Policy",
                "description": "This Privacy Policy may be updated when the website, its services, or legal requirements change. The date at the top of this page will show the latest revision."
            },
            "contact": {
                "title": "14. Contact",
                "description": "For privacy questions or requests, contact:"
            },
            "notice": "By using this website, you acknowledge that you have read this Privacy Policy."
        },
        "termsPage": {
            "meta": {
                "title": "Terms of Service | Felipe S Bephman",
                "description": "Terms governing the use of Felipe S Bephman’s portfolio and initial professional enquiries."
            },
            "title": "Terms of Service",
            "introduction": {
                "scope": "These Terms of Service govern your use of the portfolio website operated by Felipe S Bephman and any initial enquiry you make regarding freelance services or professional opportunities.",
                "acceptance": "By using this website, you agree to these terms. If you do not agree, please do not use the website."
            },
            "purpose": {
                "title": "2. Purpose of This Website",
                "intro": "This website is intended to:",
                "portfolio": "Present my professional portfolio and skills",
                "examples": "Show examples of previous and personal work",
                "enquiries": "Support employment and collaboration enquiries",
                "freelance": "Allow potential clients to request freelance work",
                "information": "Information displayed on this website is provided for general professional and informational purposes."
            },
            "employment": {
                "title": "3. Employment Opportunities",
                "enquiries": "Messages relating to employment, interviews, or recruitment do not create an employment relationship or guarantee acceptance of an opportunity.",
                "agreement": "Any employment relationship will be subject to a separate written employment agreement and applicable employment law."
            },
            "freelance": {
                "title": "4. Freelance Enquiries and Projects",
                "enquiryTitle": "4.1 Initial enquiries",
                "enquiry": "Contacting me through email or WhatsApp is an initial enquiry only. It does not create a binding service agreement or require either party to proceed.",
                "agreementTitle": "4.2 Project agreement",
                "agreementIntro": "Before freelance work begins, the project details should be confirmed in writing. Depending on the project, this may include:",
                "scope": "Project scope and deliverables",
                "timeline": "Estimated timeline",
                "fees": "Fees and payment schedule",
                "revisions": "Number and scope of revisions",
                "responsibilities": "Client responsibilities",
                "ownership": "Ownership and licensing terms",
                "cancellation": "Cancellation conditions",
                "binding": "A project becomes binding only when both parties accept the applicable proposal, quotation, or written agreement."
            },
            "services": {
                "title": "5. Services",
                "scope": "Services may include front-end development, responsive websites, user-interface implementation, HTML, CSS, JavaScript, React, Next.js, and related digital work agreed for a specific project.",
                "deliverables": "The exact services and deliverables will be described in the written proposal or project agreement."
            },
            "client": {
                "title": "6. Client Responsibilities",
                "intro": "For freelance projects, clients are responsible for:",
                "requirements": "Providing accurate project requirements",
                "materials": "Supplying required content and materials",
                "permissions": "Confirming they have permission to use supplied text, images, trademarks, and other assets",
                "feedback": "Providing feedback and approvals on time",
                "review": "Reviewing deliverables before final approval",
                "payment": "Paying agreed fees according to the project terms",
                "delays": "Delays in receiving required content, access, feedback, or approval may affect the project timeline."
            },
            "payment": {
                "title": "7. Fees and Payment",
                "website": "This website does not process payments and does not advertise a fixed subscription service.",
                "agreement": "Freelance fees, deposits, currencies, payment dates, and accepted payment methods will be agreed individually in writing before work begins.",
                "additional": "Additional work outside the agreed scope may require a revised quotation or separate written approval."
            },
            "timelines": {
                "title": "8. Timelines and Revisions",
                "estimates": "Project timelines are estimates unless a written agreement expressly states otherwise. Timelines may change when project requirements change or required feedback and materials are delayed.",
                "revisions": "The number of revisions and what qualifies as a revision will be defined for each project. Requests outside the agreed scope may be treated as additional work."
            },
            "property": {
                "title": "9. Intellectual Property",
                "portfolioTitle": "9.1 Portfolio content",
                "portfolio": "Unless otherwise stated, the original content, design, code, text, and presentation of this portfolio belong to Felipe S Bephman or are used under an applicable licence.",
                "permission": "You may view the portfolio for personal or professional evaluation, but you may not copy, republish, sell, or misrepresent its content without permission.",
                "deliverablesTitle": "9.2 Freelance deliverables",
                "deliverables": "Ownership and licensing of freelance deliverables will be defined in the relevant project agreement. Unless otherwise agreed, ownership transfer is conditional on full payment of the agreed fees.",
                "thirdParty": "Third-party materials, libraries, fonts, software, and open-source components remain subject to their respective licences."
            },
            "confidentiality": {
                "title": "10. Confidentiality",
                "care": "Information clearly identified as confidential will be handled with reasonable care and used only for the relevant enquiry or project, except where disclosure is required by law.",
                "agreement": "Additional confidentiality requirements should be documented in a separate written agreement."
            },
            "acceptable": {
                "title": "11. Acceptable Use",
                "intro": "You must not:",
                "unlawful": "Use the website for unlawful purposes",
                "security": "Attempt to interfere with website security",
                "malicious": "Introduce malicious code or automated attacks",
                "impersonation": "Impersonate another person or organisation",
                "content": "Copy or misuse portfolio content",
                "messages": "Send abusive, fraudulent, or misleading messages"
            },
            "thirdParty": {
                "title": "12. Third-Party Services and Links",
                "services": "This website may link to third-party platforms, including WhatsApp, GitHub, LinkedIn, and other websites. Those services operate under their own terms and privacy policies.",
                "responsibility": "I am not responsible for the availability, security, content, or practices of third-party services."
            },
            "availability": {
                "title": "13. Website Availability",
                "accuracy": "I aim to keep the website accurate and available, but I do not guarantee uninterrupted operation or that all information will always be complete, current, or error-free.",
                "maintenance": "The website may be changed, suspended, or removed when maintenance or updates are required."
            },
            "liability": {
                "title": "14. Limitation of Liability",
                "indirect": "To the extent permitted by law, I am not responsible for indirect or consequential loss arising solely from use of, or inability to use, this website or third-party links.",
                "rights": "Nothing in these terms excludes or limits any responsibility or legal right that cannot lawfully be excluded or limited.",
                "projects": "Liability relating to a freelance project will be governed by the separate project agreement and applicable law."
            },
            "privacy": {
                "title": "15. Privacy",
                "description": "Personal information is handled according to the"
            },
            "changes": {
                "title": "16. Changes to These Terms",
                "description": "These terms may be updated when the website, services, or legal requirements change. The date at the top of the page identifies the latest version."
            },
            "law": {
                "title": "17. Governing Law",
                "description": "These website terms are governed by the laws of Ireland. Any mandatory rights available under applicable law remain unaffected."
            },
            "contact": {
                "title": "18. Contact",
                "description": "For questions about these terms or a freelance enquiry, contact:"
            },
            "notice": "By using this website, you acknowledge that you have read and understood these Terms of Service."
        }
    },
    "pt-BR": {
        "nav": {
            "home": "Início",
            "intro": "Intro",
            "work": "Projetos",
            "skills": "Habilidades",
            "about": "Sobre",
            "howIWork": "Como trabalho",
            "faq": "Perguntas",
            "contact": "Contato",
            "contactMe": "Fale comigo"
        },
        "language": {
            "select": "Selecionar idioma"
        },
        "hero": {
            "availability": "Disponível para oportunidades júnior em front-end",
            "titleWordOne": "Desenvolvedor",
            "titleWordTwo": "front-end",
            "titleWordThree": "criando",
            "titleWordFour": "produtos",
            "titleWordFive": "reais.",
            "description": "Desenvolvo aplicações web responsivas e acessíveis com React, TypeScript e Next.js.",
            "descriptionHighlight": "Transformo ideias de produto e interfaces em experiências claras e confiáveis para usuários reais.",
            "location": "Dublin, Irlanda · Disponível para oportunidades em toda a Europa",
            "viewWork": "Ver projetos selecionados"
        },
        "stack": {
            "ariaLabel": "Minha stack de tecnologias do dia a dia",
            "eyebrow": "MINHA STACK DIÁRIA",
            "title": "Ferramentas que uso para criar produtos úteis"
        },
        "projects": {
            "titleWordOne": "Projetos",
            "titleWordTwo": "recentes",
            "viewProject": "Ver projeto",
            "viewAll": "Ver todos os projetos"
        },
        "skills": {
            "titleLineOne": "Habilidades que uso",
            "titleLineTwo": "para criar produtos",
            "titleLineThree": "digitais úteis",
            "stackTitle": "Minha stack tecnológica",
            "frontEnd": "Desenvolvimento front-end",
            "responsiveApps": "Aplicações web responsivas",
            "landingPages": "Landing pages",
            "apiIntegration": "Integração de APIs",
            "dashboardInterfaces": "Interfaces de dashboard",
            "figmaToCode": "Do Figma ao código",
            "versionControl": "Controle de versão"
        },
        "about": {
            "titleMuted": "Criando produtos úteis",
            "titleStrong": "que resolvem problemas reais.",
            "socialLinks": "Links das redes sociais",
            "whatsappLabel": "Enviar mensagem para Felipe no WhatsApp",
            "role": "Desenvolvedor Front-end Júnior",
            "historyTitle": "Minha trajetória profissional",
            "movedDublin": "Mudança para Dublin",
            "buildingProjects": "Desenvolvendo MoneyPilot e Black Bull Steak House",
            "now": "Agora",
            "openOpportunities": "Disponível para oportunidades júnior",
            "summaryOneHighlight": "Minha jornada criativa começou com o design gráfico em 2019.",
            "summaryOneMuted": "Aprendi Photoshop, Illustrator e criação de marcas — e conheci o Figma.",
            "summaryTwoHighlight": "Em 2023, comecei a transformar meus designs em código.",
            "summaryTwoMuted": "Comecei com HTML, CSS e JavaScript. Depois de me mudar para Dublin, decidi me tornar desenvolvedor front-end.",
            "summaryThreeHighlight": "Hoje, combino design e desenvolvimento.",
            "summaryThreeMuted": "Crio produtos responsivos e acessíveis com JavaScript, TypeScript, React e Next.js — e estou pronto para contribuir, aprender e evoluir."
        },
        "workProcess": {
            "titleMuted": "De uma ideia.",
            "titleStrong": "A um produto funcional.",
            "introHighlight": "Processo claro, execução cuidadosa.",
            "introText": "Transformo designs do Figma e ideias de produto em experiências web responsivas e fáceis de manter.",
            "understandTitle": "Entender",
            "understandText": "Compreender o objetivo, o usuário e o problema antes de escrever o código.",
            "buildTitle": "Desenvolver",
            "buildText": "Criar interfaces responsivas com React, Next.js e TypeScript.",
            "improveTitle": "Aprimorar",
            "improveText": "Testar, refinar e documentar cada decisão conforme o produto evolui."
        },
        "faq": {
            "eyebrow": "PERGUNTAS FREQUENTES",
            "titleMuted": "Suas perguntas",
            "titleStrong": "respondidas.",
            "contactMuted": "Ainda tem dúvidas?",
            "contactStrong": "Agende uma conversa gratuita.",
            "contactText": "Saiba mais sobre como trabalho e como posso ajudar você e sua empresa a dar o próximo passo.",
            "whatsappLabel": "Enviar uma mensagem para Felipe no WhatsApp",
            "sendMessage": "Envie uma mensagem",
            "questionOne": "Você está disponível para uma vaga júnior de front-end?",
            "answerOne": "Sim. Moro em Dublin e estou disponível para oportunidades júnior na Irlanda e em toda a Europa.",
            "questionTwo": "Com quais tecnologias você trabalha?",
            "answerTwo": "Trabalho com HTML, CSS, JavaScript, TypeScript, React, Next.js, Tailwind CSS, Git e GitHub.",
            "questionThree": "Você transforma designs do Figma em código?",
            "answerThree": "Sim. Transformo designs do Figma em interfaces responsivas e acessíveis, preservando o layout e os detalhes visuais planejados.",
            "questionFour": "O que você está desenvolvendo atualmente?",
            "answerFour": "Atualmente, estou desenvolvendo o MoneyPilot, uma plataforma de finanças pessoais, e o Black Bull, uma experiência digital para restaurantes.",
            "questionFive": "Seus projetos são responsivos e acessíveis?",
            "answerFive": "Sim. Desenvolvo layouts mobile-first com HTML semântico, interações acessíveis pelo teclado e componentes adaptáveis."
        },
        "finalCta": {
            "eyebrow": "DISPONÍVEL PARA OPORTUNIDADES JÚNIOR",
            "titleOne": "Vamos construir algo",
            "titleAccent": "útil juntos.",
            "description": "Estou pronto para contribuir, aprender e criar experiências web bem pensadas com uma equipe colaborativa.",
            "viewWork": "Ver meus projetos",
            "opportunitiesTitle": "Pronto para contribuir",
            "juniorOpportunity": "Oportunidades júnior em front-end",
            "figmaCode": "Do Figma ao código de produção",
            "responsive": "Experiências web responsivas",
            "components": "Componentes claros e fáceis de manter",
            "location": "Dublin, Irlanda",
            "openEurope": "Disponível em toda a Europa"
        },
        "footer": {
            "titleOne": "Vamos criar",
            "titleTwo": "um trabalho incrível juntos.",
            "email": "E-mail",
            "social": "Redes sociais",
            "whatsappLabel": "Enviar uma mensagem para Felipe no WhatsApp",
            "navigationLabel": "Navegação do rodapé",
            "menu": "Menu",
            "legal": "Legal",
            "terms": "Termos de serviço",
            "privacy": "Política de Privacidade"
        },
        "notFoundPage": {
            "meta": {
                "title": "Página não encontrada — Felipe S Bephman",
                "description": "Página não encontrada. Volte ao portfólio de Felipe."
            },
            "hero": {
                "title": "Ops! Caminho errado.",
                "description": "Não foi possível encontrar a página que você procura.",
                "home": "Página inicial"
            }
        },
        "common": {
            "navigation": {
                "main": "Navegação principal",
                "open": "Abrir menu de navegação",
                "close": "Fechar menu de navegação"
            },
            "images": {
                "portrait": "Retrato de Felipe S Bephman",
                "signature": "Assinatura de Felipe S Belphman"
            },
            "caseStudies": {
                "allProjects": "Todos os projetos",
                "role": "Função",
                "roleValue": "Design de produto e desenvolvimento front-end",
                "type": "Tipo",
                "stack": "Tecnologias",
                "status": "Situação",
                "mvp": "MVP em desenvolvimento",
                "project": "O projeto",
                "challenge": "O desafio",
                "solution": "A solução",
                "next": "Próximo projeto"
            },
            "legal": {
                "updated": "Última atualização:",
                "date": "15 de setembro de 2026",
                "introduction": "1. Introdução",
                "email": "E-mail:"
            }
        },
        "contact": {
            "close": "Fechar formulário de contato",
            "title": "Vamos criar algo útil.",
            "description": "Conte sobre seu projeto ou entre em contato diretamente.",
            "available": "Disponível",
            "name": "Nome",
            "project": "Conte sobre seu projeto",
            "messagePlaceholder": "Compartilhe alguns detalhes — objetivos, ideias, prazos ou o que considerar relevante.",
            "help": "Como posso ajudar?",
            "options": {
                "prompt": "Selecione uma opção",
                "development": "Desenvolvimento front-end",
                "figma": "Do Figma ao código",
                "responsive": "Site responsivo",
                "job": "Oportunidade de trabalho júnior",
                "other": "Outro"
            },
            "send": "Enviar mensagem",
            "whatsapp": "Enviar mensagem no WhatsApp",
            "reply": "Responderei assim que possível.",
            "emailSubject": "Contato pelo portfólio",
            "emailEnquiry": "Consulta pelo portfólio",
            "emailMessage": "Mensagem"
        },
        "blackBullMobilePage": {
            "meta": {
                "title": "Case Black Bull Mobile — Felipe S Bephman",
                "description": "Um painel de cozinha responsivo criado para ajudar equipes de restaurantes a receber, organizar, preparar e concluir pedidos digitais com mais eficiência."
            },
            "hero": {
                "eyebrow": "Tecnologia para restaurantes — Painel da cozinha",
                "intro": "Um painel de cozinha responsivo criado para ajudar equipes de restaurantes a receber, organizar, preparar e concluir pedidos digitais com mais eficiência."
            },
            "details": {
                "type": "Sistema de painel de cozinha"
            },
            "images": {
                "preview": "Prévia do projeto Black Bull Mobile",
                "interface": "Interface do painel de cozinha Black Bull",
                "mobile": "Interface mobile do restaurante Black Bull"
            },
            "project": {
                "overview": "Black Bull Mobile conecta a experiência de pedidos digitais do restaurante a um fluxo de trabalho dedicado à cozinha. Novos pedidos podem ser recebidos e gerenciados em uma única interface clara e responsiva.",
                "environment": "O painel foi projetado para uso prático em restaurantes movimentados, inclusive em telas de tablets."
            },
            "challenge": {
                "orders": "As equipes de cozinha precisam entender cada pedido rapidamente, sem navegar por um sistema complexo nem perder de vista a etapa atual do preparo.",
                "interface": "A interface precisava de uma hierarquia visual bem definida, estados de pedido claros e controles fáceis de usar mesmo nos momentos de maior movimento."
            },
            "solution": {
                "workflow": "Os pedidos são organizados em etapas claras, como novos, em preparo e prontos. Indicadores de status, temporizadores e cartões objetivos ajudam a cozinha a identificar prioridades e atualizar o andamento.",
                "upcoming": "Mais detalhes do fluxo de trabalho, mockups de dispositivos e telas finais da interface serão adicionados conforme o case evoluir."
            }
        },
        "projectsPage": {
            "meta": {
                "title": "Projetos selecionados — Felipe S Bephman",
                "description": "Conheça os projetos selecionados de design e desenvolvimento front-end de Felipe."
            },
            "hero": {
                "eyebrow": "Portfólio — Projetos selecionados",
                "titleStart": "Seleção de",
                "titleEnd": "projetos.",
                "description": "Uma seleção de produtos digitais criados para resolver problemas reais por meio de design cuidadoso e desenvolvimento front-end."
            },
            "collection": {
                "label": "Coleção de projetos"
            }
        },
        "blackBullPage": {
            "hero": {
                "eyebrow": "Tecnologia para restaurantes — Cardápio digital",
                "intro": "Um cardápio digital responsivo criado para melhorar a experiência dos clientes e simplificar a comunicação entre clientes, garçons e cozinha."
            },
            "details": {
                "type": "Cardápio digital para restaurantes"
            },
            "images": {
                "preview": "Prévia do projeto Black Bull",
                "interface": "Interface do cardápio digital Black Bull"
            },
            "project": {
                "overview": "Black Bull é uma experiência de cardápio digital que os clientes podem acessar por QR code ou etiqueta NFC na mesa. Apresenta categorias, pratos, promoções e itens populares em uma interface clara e responsiva.",
                "audience": "O produto foi pensado para restaurantes que desejam modernizar o atendimento sem complicar a experiência dos clientes ou da equipe."
            },
            "challenge": {
                "menus": "Cardápios tradicionais podem ser difíceis de atualizar, enquanto cardápios digitais mal projetados costumam tornar a navegação mais lenta e menos agradável.",
                "branding": "O desafio foi combinar uma identidade visual marcante com navegação simples, informações legíveis e ações práticas para o atendimento à mesa."
            },
            "solution": {
                "actions": "A interface organiza os produtos em categorias claras e oferece ações como chamar um garçom e pedir a conta diretamente da mesa.",
                "integration": "O sistema também conecta os pedidos dos clientes ao fluxo de trabalho da cozinha, criando a base para uma plataforma completa de operações do restaurante.",
                "upcoming": "Mais telas do cardápio, mockups mobile, fluxos de pedidos e imagens de apresentação do NFC serão adicionados conforme o case evoluir."
            },
            "meta": {
                "title": "Case Black Bull — Felipe S Bephman",
                "description": "Um cardápio digital responsivo criado para melhorar a experiência dos clientes e simplificar a comunicação entre clientes, garçons e cozinha."
            }
        },
        "homePage": {
            "meta": {
                "title": "Felipe S Bephman — Desenvolvedor front-end",
                "description": "Portfólio de desenvolvimento front-end de Felipe: projetos selecionados, habilidades e contato."
            },
            "images": {
                "projects": "Prévia dos projetos selecionados de desenvolvimento web de Felipe"
            }
        },
        "moneyPilotPage": {
            "images": {
                "interface": "Interface do painel financeiro MoneyPilot",
                "preview": "Prévia do projeto MoneyPilot"
            },
            "meta": {
                "title": "Case MoneyPilot — Felipe S Bephman",
                "description": "Uma plataforma de finanças pessoais criada para ajudar as pessoas a entender seu dinheiro, controlar gastos e avançar em direção a objetivos financeiros relevantes."
            },
            "hero": {
                "eyebrow": "Tecnologia financeira — Aplicação web",
                "intro": "Uma plataforma de finanças pessoais criada para ajudar as pessoas a entender seu dinheiro, controlar gastos e avançar em direção a objetivos financeiros relevantes."
            },
            "details": {
                "type": "Aplicação web de finanças pessoais",
                "status": "Em desenvolvimento"
            },
            "project": {
                "overview": "MoneyPilot reúne informações financeiras em uma experiência clara, ajudando os usuários a acompanhar transações, planejar orçamentos, organizar metas e ter uma visão completa de suas finanças.",
                "approach": "O produto combina software, dados, inteligência artificial e inteligência de negócios para transformar informações financeiras complexas em orientações práticas."
            },
            "challenge": {
                "complexity": "Ferramentas financeiras podem parecer complexas e difíceis de usar. O desafio foi criar um painel com informações detalhadas sem deixar os usuários perdidos.",
                "consistency": "A interface também precisava manter a consistência entre desktop e mobile, com suporte a temas claro e escuro."
            },
            "solution": {
                "structure": "A solução usa uma hierarquia visual clara, componentes reutilizáveis, navegação acessível e painéis específicos para transações, orçamentos, análises, metas e investimentos.",
                "upcoming": "Mais detalhes do projeto, imagens do processo e mockups finais serão adicionados conforme o case evoluir."
            },
            "content": {
                "heroSubtitle": "Uma plataforma de gestão financeira com assistência de IA", "technologiesUsed": "Tecnologias utilizadas", "viewRepository": "Ver repositório", "activeDevelopment": "Em desenvolvimento ativo", "previewFile": "product-preview.mp4", "heroVideo": "Demonstração da autenticação e do painel do MoneyPilot", "previewCaption": "PRÉVIA DO PRODUTO · AUTENTICAÇÃO → PAINEL", "role": "FUNÇÃO", "type": "TIPO", "status": "STATUS", "focus": "FOCO", "focusValue": "FinTech · Dados · IA",
                "strategyEyebrow": "01 / ESTRATÉGIA DO PRODUTO", "strategyTitle": "De informações financeiras a decisões mais seguras.", "problemLabel": "O PROBLEMA", "problemText": "Ferramentas de finanças pessoais muitas vezes exibem números sem ajudar as pessoas a entender o que eles significam. Os usuários ficam com transações fragmentadas, padrões de gastos pouco claros e metas desconectadas das decisões do dia a dia.", "solutionLabel": "A SOLUÇÃO", "solutionText": "O MoneyPilot reúne transações, orçamentos, metas, investimentos e observações assistidas por IA em um sistema claro, ajudando as pessoas a transformar visibilidade financeira em ação prática.",
                "mobileRegion": "Experiência mobile do MoneyPilot", "mobileEyebrow": "01 / EXPERIÊNCIA RESPONSIVA", "mobileTitle": "Fluxo de autenticação mobile", "mobileVideo": "Demonstração da autenticação mobile do MoneyPilot", "mobilePlayback": "REPRODUZIR DEMONSTRAÇÃO DO PRODUTO", "experienceEyebrow": "02 / EXPERIÊNCIA DO PRODUTO", "experienceTitle": "Um espaço financeiro, criado para trazer clareza.", "dayTitle": "DIA + NOITE", "dayText": "Uma interface consistente se adapta a diferentes ambientes sem alterar a hierarquia do produto.", "languagesTitle": "7 IDIOMAS", "languagesText": "Criado para usuários internacionais e para uma futura expansão europeia.", "currencyTitle": "MULTIMOEDA", "currencyText": "As informações financeiras continuam compreensíveis em diferentes moedas e contextos pessoais.", "experienceFile": "authentication-to-dashboard.mp4", "experienceVideo": "Experiência responsiva do produto MoneyPilot", "liveWalkthrough": "DEMONSTRAÇÃO DO PRODUTO AO VIVO", "authDashboard": "AUTENTICAÇÃO → PAINEL",
                "desktopEyebrow": "02 / EXPERIÊNCIA DESKTOP", "desktopTitle": "Um espaço de trabalho em todos os dispositivos.", "desktopBody": "O painel do MoneyPilot preserva clareza, hierarquia e usabilidade do mobile ao desktop sem sacrificar detalhes.", "responsiveOverview": "Visão financeira responsiva", "darkThemes": "Temas claro e escuro consistentes", "dataHierarchy": "Hierarquia de dados clara em telas maiores", "featuresEyebrow": "03 / EXPERIÊNCIA PRINCIPAL DO PRODUTO", "featuresTitle": "Um sistema completo para decisões financeiras do dia a dia.", "dashboardTitle": "Painel", "dashboardText": "Uma visão orientada à decisão sobre saldos, receitas, despesas, fluxo de caixa e progresso.", "transactionsTitle": "Transações", "transactionsText": "Importação de CSV, categorias, filtros e um histórico claro da atividade financeira.", "budgetsTitle": "Orçamentos", "budgetsText": "Limites de gastos e acompanhamento de progresso que tornam os planos financeiros visíveis.", "insightsTitle": "Insights de IA", "insightsText": "Observações personalizadas para explicar padrões e destacar decisões melhores.", "goalsTitle": "Metas", "goalsText": "Acompanhamento prático de progresso para casa, viagens, estudos, família e outros objetivos.", "investmentsTitle": "Investimentos", "investmentsText": "Uma visão unificada do valor da carteira, alocação, desempenho e crescimento de longo prazo.",
                "architectureEyebrow": "04 / ENGENHARIA + CONFIANÇA", "architectureTitle": "Construído como um produto real, não como um painel estático.", "architectureLabel": "ARQUITETURA DO PROJETO", "architectureTree": "Arquitetura do projeto MoneyPilot", "localTests": "TESTES LOCAIS", "localTestsText": "Testes automatizados sobre a lógica do produto, contratos e comportamento voltado ao usuário.", "remoteTests": "TESTES RLS REMOTOS", "remoteTestsText": "A Row Level Security valida a propriedade e isola os dados financeiros de cada usuário.", "secureModel": "MODELO DE DADOS SEGURO", "secureModelText": "Operações protegidas com controle de propriedade, validação e erros higienizados.",
                "roadmapEyebrow": "05 / ROADMAP DE DESENVOLVIMENTO", "roadmapTitle": "Da base da interface à orientação financeira inteligente.", "complete": "CONCLUÍDO", "inProgress": "EM ANDAMENTO", "next": "PRÓXIMO", "active": "ATIVO", "planned": "PLANEJADO", "interfaceTitle": "Interface", "interfaceText": "Landing page, telas responsivas, interface de autenticação e bases do painel.", "authenticationTitle": "Autenticação", "authenticationText": "Cadastro no Supabase, sessões, recuperação, rotas protegidas e autenticação do Google.", "financialDataTitle": "Dados financeiros", "financialDataText": "Receitas, despesas, transações, categorias, metas e dados reais do painel.", "securityTitle": "Segurança + testes", "securityText": "RLS, isolamento de dados, validação, testes de permissões e revisão para produção.", "pythonTitle": "Inteligência com Python", "pythonText": "Análise financeira, cálculos, detecção de padrões e resumos automatizados.", "aiTitle": "Insights de IA", "aiText": "Observações personalizadas, recomendações e experiência de assistente.", "productionTitle": "Produção", "productionText": "Acessibilidade, desempenho, auditoria de segurança e publicação final.",
                "contextEyebrow": "01 / CONTEXTO DO PROJETO", "contextTitle": "Por que criei o MoneyPilot e o que desenvolvi.", "contextLabel": "CONTEXTO DO PROJETO", "contextText": "MoneyPilot é um produto de finanças pessoais criado para ajudar as pessoas a entender gastos, organizar dados financeiros e construir planos práticos para objetivos importantes.", "contextMeta": "Produto pessoal · 2026", "roleLabel": "MINHA FUNÇÃO", "roleText": "Sou responsável pela direção do produto, design de UX/UI, desenvolvimento front-end, sistema de design, implementação responsiva, integração com Supabase e validação do produto.", "roleMeta": "Product Designer + Desenvolvedor Front-end", "goalsLabel": "OBJETIVOS + RESTRIÇÕES", "goalsText": "O MVP evita APIs bancárias, prioriza privacidade, atende usuários internacionais e deve ser compreensível em diferentes moedas, idiomas, dispositivos e níveis de experiência financeira.", "goalsMeta": "Sem conexão bancária necessária", "processLabel": "Processo do produto MoneyPilot", "discovery": "Descoberta", "productStrategy": "Estratégia do produto", "uxUi": "UX + UI", "engineering": "Engenharia", "validation": "Validação",
                "thinkingEyebrow": "04 / PENSAMENTO DE PRODUTO", "thinkingTitle": "Decisões por trás da interface.", "decisionLabel": "DECISÃO DE DESIGN", "decisionTitle": "Hierarquia orientada à decisão", "decisionText": "Em vez de apresentar todas as métricas financeiras de uma vez, o painel prioriza as informações que ajudam o usuário a decidir o próximo passo: saldo atual, fluxo de caixa, gastos incomuns, progresso das metas e ações recomendadas.", "accessibilityLabel": "ACESSIBILIDADE", "accessibilityTitle": "Clareza em temas e dispositivos", "accessibilityText": "Os modos Dia e Noite preservam hierarquia e contraste. Layouts responsivos, foco visível, labels compreensíveis, menos ruído visual e padrões consistentes de interação atendem a diferentes dispositivos e necessidades.", "challengeLabel": "DESAFIO PRINCIPAL", "challengeTitle": "Dados complexos sem complexidade", "challengeText": "O desafio principal foi combinar transações, orçamentos, metas, investimentos e orientação por IA sem criar uma interface que parecesse um software de contabilidade profissional. A divulgação progressiva mantém informações avançadas disponíveis sem sobrecarregar o usuário.", "learningLabel": "PRINCIPAL APRENDIZADO", "learningTitle": "Confiança precisa ser projetada e construída", "learningText": "Produtos financeiros exigem mais do que telas bem acabadas. Linguagem clara, feedback previsível, dados pertencentes ao usuário, políticas RLS, validação, tratamento de erros e testes relevantes contribuem para a mesma qualidade: confiança.",
                "moreEyebrow": "PRÓXIMO / EXPLORE MAIS TRABALHOS", "moreTitle": "Mais projetos", "blackBullLink": "Ver projeto do restaurante Black Bull", "blackBullAlt": "Sistema de tela de cozinha do restaurante Black Bull", "blackBullTitle": "Black Bull Restaurant", "blackBullType": "Plataforma de operações para restaurantes", "devConnectLink": "Ver projeto DevConnect", "devConnectAlt": "Plataforma de vagas de tecnologia DevConnect", "devConnectTitle": "DevConnect", "devConnectType": "Plataforma de vagas em tecnologia", "viewProject": "Ver projeto", "viewAll": "Ver todos os meus projetos", "ctaEyebrow": "MONEYPILOT / DESENVOLVIMENTO ATIVO", "ctaTitle": "Criando clareza financeira em um produto inteligente.", "ctaText": "Acompanhe o projeto no GitHub para explorar o código, a arquitetura, a estratégia de testes e as próximas fases do produto.", "viewGithub": "Ver repositório no GitHub", "backProjects": "Voltar aos projetos", "mobileOneAlt": "Painel do MoneyPilot exibido em um smartphone", "mobileTwoAlt": "Painel financeiro do MoneyPilot em um dispositivo mobile", "desktopAlt": "Painel do MoneyPilot exibido em um computador desktop"
            }
        },
        "petIdPage": {
            "images": {
                "interface": "Interface de identificação digital Pet ID",
                "preview": "Prévia do projeto Pet ID"
            },
            "meta": {
                "title": "Case Pet ID — Felipe S Bephman",
                "description": "Uma experiência de identificação digital criada para facilitar o acesso a informações importantes sobre pets e ajudar a reunir animais perdidos com seus tutores."
            },
            "hero": {
                "eyebrow": "Tecnologia para pets — Identificação digital",
                "intro": "Uma experiência de identificação digital criada para facilitar o acesso a informações importantes sobre pets e ajudar a reunir animais perdidos com seus tutores."
            },
            "details": {
                "type": "Identificação digital de pets",
                "status": "Projeto conceitual"
            },
            "project": {
                "overview": "Pet ID explora um perfil digital simples, com informações importantes sobre um pet apresentadas de forma clara e acessíveis em diferentes dispositivos.",
                "approach": "A experiência prioriza a identificação rápida, informações de contato claras e uma interface fácil de entender mesmo em situações de estresse."
            },
            "challenge": {
                "urgency": "Quando um pet se perde, as informações precisam ser comunicadas rapidamente. Uma interface complicada ou dados de contato pouco claros podem atrasar a comunicação com o tutor.",
                "accessibility": "O desafio foi organizar as informações essenciais em uma experiência acolhedora, acessível e pensada primeiro para dispositivos móveis."
            },
            "solution": {
                "priorities": "A interface prioriza a identidade do pet, as opções de contato com o tutor e os detalhes importantes, usando uma hierarquia clara e componentes responsivos.",
                "upcoming": "Mais informações do projeto, fluxos de usuários, telas e mockups de dispositivos serão adicionados quando os materiais finais do case estiverem prontos."
            }
        },
        "privacyPage": {
            "meta": {
                "title": "Política de Privacidade — Felipe S Bephman",
                "description": "Como Felipe S Bephman coleta, usa e protege informações pessoais neste portfólio."
            },
            "introduction": {
                "policy": "Esta Política de Privacidade explica como Felipe S Bephman coleta, usa e protege informações pessoais quando você visita este portfólio ou entra em contato sobre meus serviços.",
                "purpose": "Este portfólio é operado a partir da Irlanda e tem como objetivo apresentar meu trabalho e permitir que possíveis clientes, empregadores e colaboradores entrem em contato comigo."
            },
            "collection": {
                "title": "2. Informações que coleto",
                "emailTitle": "2.1 Informações fornecidas por e-mail",
                "formIntro": "Ao usar o formulário de contato, você pode fornecer:",
                "name": "Seu nome",
                "email": "Seu endereço de e-mail",
                "enquiry": "O tipo de solicitação",
                "message": "Sua mensagem",
                "other": "Outras informações que você decidir incluir",
                "mailto": "O formulário de contato cria um e-mail no aplicativo de e-mail do seu dispositivo. Este site não armazena os dados enviados pelo formulário em um banco de dados próprio.",
                "whatsappTitle": "2.2 Informações compartilhadas pelo WhatsApp",
                "whatsapp": "Se você optar por entrar em contato pelo WhatsApp, seu número de telefone, informações de perfil, mensagem e arquivos enviados serão processados pelo WhatsApp. Os próprios termos de privacidade do WhatsApp também se aplicam a essa comunicação.",
                "technicalTitle": "2.3 Informações técnicas",
                "technical": "Atualmente, o site não usa ferramentas de análise nem rastreadores de publicidade. O provedor de hospedagem pode processar informações técnicas limitadas, como endereço IP, dados do navegador e registros do servidor, para disponibilizar e proteger o site."
            },
            "cookies": {
                "title": "3. Cookies e análise de uso",
                "usage": "Este portfólio não define, atualmente, cookies de análise, publicidade ou marketing.",
                "external": "Serviços externos acessados por links, incluindo WhatsApp e plataformas de redes sociais, podem usar seus próprios cookies de acordo com suas políticas de privacidade."
            },
            "usage": {
                "title": "4. Como uso suas informações",
                "intro": "Uso as informações que você fornece para:",
                "respond": "Responder a solicitações",
                "discuss": "Conversar sobre projetos ou oportunidades de trabalho",
                "provide": "Fornecer as informações solicitadas",
                "records": "Manter registros de comunicações relevantes",
                "protect": "Proteger o site e evitar uso indevido",
                "comply": "Cumprir obrigações legais aplicáveis"
            },
            "bases": {
                "title": "5. Bases legais para o tratamento",
                "intro": "Quando o Regulamento Geral sobre a Proteção de Dados (GDPR) se aplicar, as informações pessoais poderão ser tratadas porque:",
                "consent": "Você deu seu consentimento",
                "contract": "O tratamento é necessário para responder à sua solicitação ou tomar medidas antes de celebrar um contrato",
                "interests": "O tratamento é necessário para interesses legítimos, como a comunicação com possíveis clientes ou a proteção do site",
                "obligation": "O tratamento é necessário para cumprir uma obrigação legal"
            },
            "sharing": {
                "title": "6. Como as informações são compartilhadas",
                "intro": "Não vendo nem alugo suas informações pessoais. As informações podem ser processadas por serviços necessários à comunicação e ao funcionamento do site, incluindo:",
                "email": "Provedores de serviços de e-mail",
                "whatsapp": "WhatsApp, quando você optar por usá-lo",
                "hosting": "O provedor de hospedagem do site",
                "authorities": "Assessores profissionais ou autoridades públicas quando exigido por lei"
            },
            "transfers": {
                "title": "7. Transferências internacionais de dados",
                "description": "Alguns provedores de serviços externos podem processar informações fora da Irlanda ou do Espaço Econômico Europeu. Quando exigido, espera-se que esses provedores usem salvaguardas reconhecidas para transferências internacionais de dados."
            },
            "retention": {
                "title": "8. Retenção de dados",
                "duration": "As informações pessoais são mantidas apenas pelo tempo razoavelmente necessário para responder à sua solicitação, manter registros comerciais relevantes, resolver disputas ou cumprir obrigações legais.",
                "deletion": "Você pode solicitar a exclusão de suas informações pessoais, ressalvadas as informações que devam ser mantidas por lei."
            },
            "security": {
                "title": "9. Segurança dos dados",
                "description": "São utilizadas medidas técnicas e organizacionais razoáveis para proteger as informações pessoais. No entanto, não é possível garantir que qualquer método de transmissão pela internet ou armazenamento eletrônico seja totalmente seguro."
            },
            "rights": {
                "title": "10. Seus direitos de proteção de dados",
                "intro": "Dependendo da legislação aplicável, incluindo o GDPR, você pode ter o direito de:",
                "access": "Solicitar acesso às suas informações pessoais",
                "correction": "Solicitar a correção de informações incorretas",
                "deletion": "Solicitar a exclusão de suas informações",
                "restrict": "Restringir determinados tratamentos",
                "object": "Opor-se a determinados tratamentos",
                "portability": "Solicitar a portabilidade dos dados, quando aplicável",
                "withdraw": "Retirar o consentimento a qualquer momento",
                "complaint": "Você também pode apresentar uma reclamação à Comissão de Proteção de Dados da Irlanda ou a outra autoridade supervisora competente."
            },
            "children": {
                "title": "11. Privacidade de crianças",
                "description": "Este portfólio e seus serviços não são direcionados a crianças. Não coleto intencionalmente informações pessoais de crianças por meio deste site."
            },
            "links": {
                "title": "12. Links de terceiros",
                "description": "Este site pode conter links para sites e serviços externos. Não sou responsável pelas práticas de privacidade nem pelo conteúdo desses terceiros."
            },
            "changes": {
                "title": "13. Alterações nesta política",
                "description": "Esta Política de Privacidade pode ser atualizada quando o site, seus serviços ou os requisitos legais mudarem. A data no início desta página indicará a revisão mais recente."
            },
            "contact": {
                "title": "14. Contato",
                "description": "Para dúvidas ou solicitações sobre privacidade, entre em contato:"
            },
            "notice": "Ao usar este site, você reconhece que leu esta Política de Privacidade."
        },
        "termsPage": {
            "meta": {
                "title": "Termos de Serviço — Felipe S Bephman",
                "description": "Termos de uso do portfólio de Felipe S Bephman e de contatos profissionais iniciais."
            },
            "title": "Termos de Serviço",
            "introduction": {
                "scope": "Estes Termos de Serviço regem o uso do site de portfólio operado por Felipe S Bephman e qualquer contato inicial sobre serviços freelance ou oportunidades profissionais.",
                "acceptance": "Ao usar este site, você concorda com estes termos. Se não concordar, não utilize o site."
            },
            "purpose": {
                "title": "2. Objetivo deste site",
                "intro": "Este site tem como objetivo:",
                "portfolio": "Apresentar meu portfólio profissional e minhas habilidades",
                "examples": "Mostrar exemplos de trabalhos anteriores e projetos pessoais",
                "enquiries": "Facilitar contatos sobre emprego e colaboração",
                "freelance": "Permitir que possíveis clientes solicitem trabalhos freelance",
                "information": "As informações exibidas neste site são fornecidas para fins profissionais e informativos gerais."
            },
            "employment": {
                "title": "3. Oportunidades de trabalho",
                "enquiries": "Mensagens relacionadas a emprego, entrevistas ou recrutamento não criam vínculo empregatício nem garantem a aceitação de uma oportunidade.",
                "agreement": "Qualquer vínculo empregatício estará sujeito a um contrato de trabalho escrito separado e à legislação trabalhista aplicável."
            },
            "freelance": {
                "title": "4. Contatos e projetos freelance",
                "enquiryTitle": "4.1 Contatos iniciais",
                "enquiry": "Entrar em contato por e-mail ou WhatsApp constitui apenas uma consulta inicial. Isso não cria um contrato de prestação de serviços vinculante nem obriga qualquer uma das partes a prosseguir.",
                "agreementTitle": "4.2 Acordo do projeto",
                "agreementIntro": "Antes do início do trabalho freelance, os detalhes do projeto devem ser confirmados por escrito. Dependendo do projeto, isso pode incluir:",
                "scope": "Escopo do projeto e entregáveis",
                "timeline": "Cronograma estimado",
                "fees": "Valores e cronograma de pagamento",
                "revisions": "Número e escopo das revisões",
                "responsibilities": "Responsabilidades do cliente",
                "ownership": "Termos de propriedade e licenciamento",
                "cancellation": "Condições de cancelamento",
                "binding": "Um projeto só se torna vinculante quando ambas as partes aceitam a proposta, o orçamento ou o acordo escrito aplicável."
            },
            "services": {
                "title": "5. Serviços",
                "scope": "Os serviços podem incluir desenvolvimento front-end, sites responsivos, implementação de interfaces, HTML, CSS, JavaScript, React, Next.js e trabalhos digitais relacionados acordados para um projeto específico.",
                "deliverables": "Os serviços e entregáveis exatos serão descritos na proposta escrita ou no acordo do projeto."
            },
            "client": {
                "title": "6. Responsabilidades do cliente",
                "intro": "Em projetos freelance, os clientes são responsáveis por:",
                "requirements": "Fornecer requisitos precisos para o projeto",
                "materials": "Fornecer o conteúdo e os materiais necessários",
                "permissions": "Confirmar que têm permissão para usar os textos, imagens, marcas e outros recursos fornecidos",
                "feedback": "Fornecer feedback e aprovações dentro do prazo",
                "review": "Revisar os entregáveis antes da aprovação final",
                "payment": "Pagar os valores acordados conforme os termos do projeto",
                "delays": "Atrasos no recebimento de conteúdo, acessos, feedback ou aprovações necessários podem afetar o cronograma do projeto."
            },
            "payment": {
                "title": "7. Valores e pagamento",
                "website": "Este site não processa pagamentos nem anuncia um serviço de assinatura com valor fixo.",
                "agreement": "Honorários freelance, adiantamentos, moedas, datas de pagamento e formas de pagamento aceitas serão acordados individualmente por escrito antes do início do trabalho.",
                "additional": "Trabalhos adicionais fora do escopo acordado podem exigir um orçamento revisado ou uma aprovação escrita separada."
            },
            "timelines": {
                "title": "8. Prazos e revisões",
                "estimates": "Os prazos do projeto são estimativas, salvo disposição expressa em contrário em um acordo escrito. Os prazos podem mudar quando os requisitos do projeto mudarem ou houver atraso no feedback e nos materiais necessários.",
                "revisions": "O número de revisões e o que constitui uma revisão serão definidos para cada projeto. Solicitações fora do escopo acordado podem ser tratadas como trabalho adicional."
            },
            "property": {
                "title": "9. Propriedade intelectual",
                "portfolioTitle": "9.1 Conteúdo do portfólio",
                "portfolio": "Salvo indicação em contrário, o conteúdo original, o design, o código, os textos e a apresentação deste portfólio pertencem a Felipe S Bephman ou são utilizados sob uma licença aplicável.",
                "permission": "Você pode visualizar o portfólio para avaliação pessoal ou profissional, mas não pode copiar, republicar, vender ou apresentar seu conteúdo de forma enganosa sem permissão.",
                "deliverablesTitle": "9.2 Entregáveis freelance",
                "deliverables": "A propriedade e o licenciamento dos entregáveis freelance serão definidos no acordo do projeto correspondente. Salvo acordo em contrário, a transferência de propriedade está condicionada ao pagamento integral dos valores acordados.",
                "thirdParty": "Materiais de terceiros, bibliotecas, fontes, software e componentes de código aberto continuam sujeitos às suas respectivas licenças."
            },
            "confidentiality": {
                "title": "10. Confidencialidade",
                "care": "Informações claramente identificadas como confidenciais serão tratadas com cuidado razoável e usadas apenas para a consulta ou o projeto correspondente, exceto quando a divulgação for exigida por lei.",
                "agreement": "Requisitos adicionais de confidencialidade devem ser documentados em um acordo escrito separado."
            },
            "acceptable": {
                "title": "11. Uso aceitável",
                "intro": "Você não deve:",
                "unlawful": "Usar o site para fins ilegais",
                "security": "Tentar interferir na segurança do site",
                "malicious": "Introduzir código malicioso ou ataques automatizados",
                "impersonation": "Fingir ser outra pessoa ou organização",
                "content": "Copiar ou usar indevidamente o conteúdo do portfólio",
                "messages": "Enviar mensagens abusivas, fraudulentas ou enganosas"
            },
            "thirdParty": {
                "title": "12. Serviços e links de terceiros",
                "services": "Este site pode conter links para plataformas de terceiros, incluindo WhatsApp, GitHub, LinkedIn e outros sites. Esses serviços operam sob seus próprios termos e políticas de privacidade.",
                "responsibility": "Não sou responsável pela disponibilidade, segurança, conteúdo ou práticas de serviços de terceiros."
            },
            "availability": {
                "title": "13. Disponibilidade do site",
                "accuracy": "Busco manter o site correto e disponível, mas não garanto o funcionamento ininterrupto nem que todas as informações estejam sempre completas, atualizadas ou livres de erros.",
                "maintenance": "O site pode ser alterado, suspenso ou removido quando forem necessárias manutenções ou atualizações."
            },
            "liability": {
                "title": "14. Limitação de responsabilidade",
                "indirect": "Na medida permitida por lei, não sou responsável por perdas indiretas ou consequenciais decorrentes exclusivamente do uso ou da impossibilidade de uso deste site ou de links de terceiros.",
                "rights": "Nada nestes termos exclui ou limita qualquer responsabilidade ou direito legal que não possa ser legalmente excluído ou limitado.",
                "projects": "A responsabilidade relacionada a um projeto freelance será regida pelo acordo separado do projeto e pela legislação aplicável."
            },
            "privacy": {
                "title": "15. Privacidade",
                "description": "As informações pessoais são tratadas de acordo com a"
            },
            "changes": {
                "title": "16. Alterações nestes termos",
                "description": "Estes termos podem ser atualizados quando o site, os serviços ou os requisitos legais mudarem. A data no início da página identifica a versão mais recente."
            },
            "law": {
                "title": "17. Legislação aplicável",
                "description": "Estes termos do site são regidos pelas leis da Irlanda. Quaisquer direitos obrigatórios previstos na legislação aplicável permanecem inalterados."
            },
            "contact": {
                "title": "18. Contato",
                "description": "Para dúvidas sobre estes termos ou consultas sobre trabalho freelance, entre em contato:"
            },
            "notice": "Ao usar este site, você reconhece que leu e compreendeu estes Termos de Serviço."
        }
    },
    "es": {
        "nav": {
            "home": "Inicio",
            "intro": "Intro",
            "work": "Proyectos",
            "skills": "Habilidades",
            "about": "Sobre mí",
            "howIWork": "Cómo trabajo",
            "faq": "Preguntas",
            "contact": "Contacto",
            "contactMe": "Hablemos"
        },
        "language": {
            "select": "Seleccionar idioma"
        },
        "hero": {
            "availability": "Disponible para oportunidades junior de front-end",
            "titleWordOne": "Desarrollador",
            "titleWordTwo": "front-end",
            "titleWordThree": "creando",
            "titleWordFour": "productos",
            "titleWordFive": "reales.",
            "description": "Desarrollo aplicaciones web adaptables y accesibles con React, TypeScript y Next.js.",
            "descriptionHighlight": "Convierto ideas de producto y diseños de interfaz en experiencias claras y fiables para usuarios reales.",
            "location": "Dublín, Irlanda · Disponible para oportunidades en toda Europa",
            "viewWork": "Ver proyectos seleccionados"
        },
        "stack": {
            "ariaLabel": "Mi stack tecnológico diario",
            "eyebrow": "MI STACK DIARIO",
            "title": "Herramientas que utilizo para crear productos útiles"
        },
        "projects": {
            "titleWordOne": "Proyectos",
            "titleWordTwo": "recientes",
            "viewProject": "Ver proyecto",
            "viewAll": "Ver todos los proyectos"
        },
        "skills": {
            "titleLineOne": "Habilidades que uso",
            "titleLineTwo": "para crear productos",
            "titleLineThree": "digitales útiles",
            "stackTitle": "Mi stack tecnológico",
            "frontEnd": "Desarrollo front-end",
            "responsiveApps": "Aplicaciones web adaptables",
            "landingPages": "Landing pages",
            "apiIntegration": "Integración de APIs",
            "dashboardInterfaces": "Interfaces de dashboard",
            "figmaToCode": "De Figma a código",
            "versionControl": "Control de versiones"
        },
        "about": {
            "titleMuted": "Creando productos útiles",
            "titleStrong": "que resuelven problemas reales.",
            "socialLinks": "Enlaces de redes sociales",
            "whatsappLabel": "Enviar un mensaje a Felipe por WhatsApp",
            "role": "Desarrollador front-end júnior",
            "historyTitle": "Mi trayectoria profesional",
            "movedDublin": "Me mudé a Dublín",
            "buildingProjects": "Desarrollando MoneyPilot y Black Bull Steak House",
            "now": "Ahora",
            "openOpportunities": "Disponible para oportunidades junior",
            "summaryOneHighlight": "Mi camino creativo comenzó con el diseño gráfico en 2019.",
            "summaryOneMuted": "Aprendí Photoshop, Illustrator y creación de marcas — y descubrí Figma.",
            "summaryTwoHighlight": "En 2023, empecé a convertir mis diseños en código.",
            "summaryTwoMuted": "Empecé con HTML, CSS y JavaScript. Después de mudarme a Dublín, decidí convertirme en desarrollador front-end.",
            "summaryThreeHighlight": "Hoy combino el diseño y el desarrollo.",
            "summaryThreeMuted": "Creo productos responsivos y accesibles con JavaScript, TypeScript, React y Next.js — y estoy listo para aportar, aprender y crecer."
        },
        "workProcess": {
            "titleMuted": "De una idea.",
            "titleStrong": "A un producto funcional.",
            "introHighlight": "Proceso claro, ejecución cuidadosa.",
            "introText": "Convierto diseños de Figma e ideas de producto en experiencias web adaptables y fáciles de mantener.",
            "understandTitle": "Comprender",
            "understandText": "Comprender el objetivo, el usuario y el problema antes de escribir código.",
            "buildTitle": "Desarrollar",
            "buildText": "Crear interfaces adaptables con React, Next.js y TypeScript.",
            "improveTitle": "Mejorar",
            "improveText": "Probar, perfeccionar y documentar cada decisión a medida que el producto evoluciona."
        },
        "faq": {
            "eyebrow": "PREGUNTAS FRECUENTES",
            "titleMuted": "Tus preguntas",
            "titleStrong": "respondidas.",
            "contactMuted": "¿Todavía tienes dudas?",
            "contactStrong": "Agenda una llamada gratuita.",
            "contactText": "Conoce mejor cómo trabajo y cómo puedo ayudarte a ti y a tu empresa a dar el siguiente paso.",
            "whatsappLabel": "Enviar un mensaje a Felipe por WhatsApp",
            "sendMessage": "Envíame un mensaje",
            "questionOne": "¿Estás disponible para un puesto junior de front-end?",
            "answerOne": "Sí. Vivo en Dublín y estoy disponible para oportunidades junior en Irlanda y en toda Europa.",
            "questionTwo": "¿Con qué tecnologías trabajas?",
            "answerTwo": "Trabajo con HTML, CSS, JavaScript, TypeScript, React, Next.js, Tailwind CSS, Git y GitHub.",
            "questionThree": "¿Puedes convertir diseños de Figma en código?",
            "answerThree": "Sí. Convierto diseños de Figma en interfaces adaptables y accesibles, preservando el layout y los detalles visuales previstos.",
            "questionFour": "¿Qué estás desarrollando actualmente?",
            "answerFour": "Actualmente, estoy desarrollando MoneyPilot, una plataforma de finanzas personales, y Black Bull, una experiencia digital para restaurantes.",
            "questionFive": "¿Tus proyectos son adaptables y accesibles?",
            "answerFive": "Sí. Creo layouts mobile-first con HTML semántico, interacciones accesibles mediante teclado y componentes adaptables."
        },
        "finalCta": {
            "eyebrow": "DISPONIBLE PARA OPORTUNIDADES JUNIOR",
            "titleOne": "Construyamos algo",
            "titleAccent": "útil juntos.",
            "description": "Estoy listo para contribuir, aprender y crear experiencias web bien pensadas con un equipo colaborativo.",
            "viewWork": "Ver mis proyectos",
            "opportunitiesTitle": "Listo para contribuir",
            "juniorOpportunity": "Oportunidades junior de front-end",
            "figmaCode": "De Figma a código de producción",
            "responsive": "Experiencias web adaptables",
            "components": "Componentes claros y fáciles de mantener",
            "location": "Dublín, Irlanda",
            "openEurope": "Disponible en toda Europa"
        },
        "footer": {
            "titleOne": "Diseñemos",
            "titleTwo": "un trabajo increíble juntos.",
            "email": "Correo",
            "social": "Redes sociales",
            "whatsappLabel": "Enviar un mensaje a Felipe por WhatsApp",
            "navigationLabel": "Navegación del pie de página",
            "menu": "Menú",
            "legal": "Legal",
            "terms": "Términos del servicio",
            "privacy": "Política de Privacidad"
        },
        "notFoundPage": {
            "meta": {
                "title": "Página no encontrada — Felipe S Bephman",
                "description": "Página no encontrada. Vuelve al portafolio de Felipe."
            },
            "hero": {
                "title": "¡Vaya! Te has desviado.",
                "description": "No se ha podido encontrar la página que buscas.",
                "home": "Página de inicio"
            }
        },
        "common": {
            "navigation": {
                "main": "Navegación principal",
                "open": "Abrir menú de navegación",
                "close": "Cerrar menú de navegación"
            },
            "images": {
                "portrait": "Retrato de Felipe S Bephman",
                "signature": "Firma de Felipe S Belphman"
            },
            "caseStudies": {
                "allProjects": "Todos los proyectos",
                "role": "Rol",
                "roleValue": "Diseño de producto y desarrollo front-end",
                "type": "Tipo",
                "stack": "Tecnologías",
                "status": "Estado",
                "mvp": "MVP en desarrollo",
                "project": "El proyecto",
                "challenge": "El desafío",
                "solution": "La solución",
                "next": "Siguiente proyecto"
            },
            "legal": {
                "updated": "Última actualización:",
                "date": "15 de septiembre de 2026",
                "introduction": "1. Introducción",
                "email": "Correo electrónico:"
            }
        },
        "contact": {
            "close": "Cerrar formulario de contacto",
            "title": "Creemos algo útil.",
            "description": "Cuéntame sobre tu proyecto o contáctame directamente.",
            "available": "Disponible",
            "name": "Nombre",
            "project": "Cuéntame sobre tu proyecto",
            "messagePlaceholder": "Comparte algunos detalles: objetivos, ideas, plazos o lo que consideres relevante.",
            "help": "¿Cómo puedo ayudarte?",
            "options": {
                "prompt": "Selecciona una opción",
                "development": "Desarrollo front-end",
                "figma": "De Figma a código",
                "responsive": "Sitio web adaptable",
                "job": "Oportunidad laboral júnior",
                "other": "Otro"
            },
            "send": "Enviar mensaje",
            "whatsapp": "Enviar mensaje por WhatsApp",
            "reply": "Responderé lo antes posible.",
            "emailSubject": "Contacto desde el portafolio",
            "emailEnquiry": "Consulta desde el portafolio",
            "emailMessage": "Mensaje"
        },
        "blackBullMobilePage": {
            "meta": {
                "title": "Caso de estudio Black Bull Mobile — Felipe S Bephman",
                "description": "Un panel de cocina adaptable diseñado para ayudar a los equipos de restaurantes a recibir, organizar, preparar y completar pedidos digitales con mayor eficiencia."
            },
            "hero": {
                "eyebrow": "Tecnología para restaurantes — Panel de cocina",
                "intro": "Un panel de cocina adaptable diseñado para ayudar a los equipos de restaurantes a recibir, organizar, preparar y completar pedidos digitales con mayor eficiencia."
            },
            "details": {
                "type": "Sistema de panel de cocina"
            },
            "images": {
                "preview": "Vista previa del proyecto Black Bull Mobile",
                "interface": "Interfaz del panel de cocina Black Bull",
                "mobile": "Interfaz móvil del restaurante Black Bull"
            },
            "project": {
                "overview": "Black Bull Mobile conecta la experiencia de pedidos digitales del restaurante con un flujo de trabajo dedicado a la cocina. Los nuevos pedidos se pueden recibir y gestionar desde una única interfaz clara y adaptable.",
                "environment": "El panel está diseñado para un uso práctico en restaurantes con mucha actividad, incluso en pantallas de tabletas."
            },
            "challenge": {
                "orders": "Los equipos de cocina necesitan entender cada pedido rápidamente, sin navegar por un sistema complejo ni perder de vista su estado de preparación.",
                "interface": "La interfaz necesitaba una jerarquía visual sólida, estados de pedido claros y controles fáciles de usar incluso durante los momentos de mayor actividad."
            },
            "solution": {
                "workflow": "Los pedidos se organizan en etapas claras, como nuevos, en preparación y listos. Los indicadores de estado, temporizadores y tarjetas concisas ayudan a la cocina a identificar prioridades y actualizar el progreso.",
                "upcoming": "Se añadirán más detalles del flujo de trabajo, mockups de dispositivos y pantallas finales de la interfaz a medida que avance el caso de estudio."
            }
        },
        "projectsPage": {
            "meta": {
                "title": "Proyectos seleccionados — Felipe S Bephman",
                "description": "Descubre los proyectos seleccionados de diseño y desarrollo front-end de Felipe."
            },
            "hero": {
                "eyebrow": "Portafolio — Proyectos seleccionados",
                "titleStart": "Selección de",
                "titleEnd": "proyectos.",
                "description": "Una selección de productos digitales creados para resolver problemas reales mediante un diseño cuidado y desarrollo front-end."
            },
            "collection": {
                "label": "Colección de proyectos"
            }
        },
        "blackBullPage": {
            "hero": {
                "eyebrow": "Tecnología para restaurantes — Menú digital",
                "intro": "Un menú digital adaptable diseñado para mejorar la experiencia de los clientes y simplificar la comunicación entre clientes, meseros y cocina."
            },
            "details": {
                "type": "Menú digital para restaurantes"
            },
            "images": {
                "preview": "Vista previa del proyecto Black Bull",
                "interface": "Interfaz del menú digital Black Bull"
            },
            "project": {
                "overview": "Black Bull es una experiencia de menú digital a la que los clientes pueden acceder mediante un código QR o una etiqueta NFC en su mesa. Presenta categorías, platos, promociones y productos populares en una interfaz clara y adaptable.",
                "audience": "El producto está pensado para restaurantes que quieren modernizar el servicio sin complicar la experiencia de los clientes o del personal."
            },
            "challenge": {
                "menus": "Los menús tradicionales pueden ser difíciles de actualizar, mientras que los menús digitales mal diseñados suelen hacer que la navegación sea más lenta y menos agradable.",
                "branding": "El desafío fue combinar una identidad de marca sólida con una navegación sencilla, información legible y acciones prácticas para el servicio en mesa."
            },
            "solution": {
                "actions": "La interfaz organiza los productos en categorías claras y ofrece acciones como llamar a un mesero y pedir la cuenta directamente desde la mesa.",
                "integration": "El sistema también conecta los pedidos de los clientes con el flujo de trabajo de la cocina, creando la base de una plataforma integral de operaciones del restaurante.",
                "upcoming": "Se añadirán más pantallas del menú, mockups móviles, flujos de pedidos e imágenes de presentación de NFC a medida que avance el caso de estudio."
            },
            "meta": {
                "title": "Caso de estudio Black Bull — Felipe S Bephman",
                "description": "Un menú digital adaptable diseñado para mejorar la experiencia de los clientes y simplificar la comunicación entre clientes, meseros y cocina."
            }
        },
        "homePage": {
            "meta": {
                "title": "Felipe S Bephman — Desarrollador front-end",
                "description": "Portafolio de desarrollo front-end de Felipe: proyectos seleccionados, habilidades y contacto."
            },
            "images": {
                "projects": "Vista previa de los proyectos seleccionados de desarrollo web de Felipe"
            }
        },
        "moneyPilotPage": {
            "images": {
                "interface": "Interfaz del panel financiero MoneyPilot",
                "preview": "Vista previa del proyecto MoneyPilot"
            },
            "meta": {
                "title": "Caso de estudio MoneyPilot — Felipe S Bephman",
                "description": "Una plataforma de finanzas personales diseñada para ayudar a las personas a entender su dinero, controlar gastos y avanzar hacia objetivos financieros significativos."
            },
            "hero": {
                "eyebrow": "Tecnología financiera — Aplicación web",
                "intro": "Una plataforma de finanzas personales diseñada para ayudar a las personas a entender su dinero, controlar gastos y avanzar hacia objetivos financieros significativos."
            },
            "details": {
                "type": "Aplicación web de finanzas personales",
                "status": "En desarrollo"
            },
            "project": {
                "overview": "MoneyPilot reúne la información financiera en una experiencia clara que ayuda a los usuarios a seguir transacciones, planificar presupuestos, organizar metas y obtener una visión completa de sus finanzas.",
                "approach": "El producto combina software, datos, inteligencia artificial e inteligencia de negocios para transformar información financiera compleja en orientación práctica."
            },
            "challenge": {
                "complexity": "Las herramientas financieras pueden resultar complejas y abrumadoras. El desafío fue crear un panel que presentara información detallada sin desorientar a los usuarios.",
                "consistency": "La interfaz también debía mantener la coherencia entre computadoras y dispositivos móviles, con soporte para temas claro y oscuro."
            },
            "solution": {
                "structure": "La solución utiliza una jerarquía visual clara, componentes reutilizables, navegación accesible y paneles específicos para transacciones, presupuestos, análisis, metas e inversiones.",
                "upcoming": "Se añadirán más detalles del proyecto, imágenes del proceso y mockups finales a medida que avance el caso de estudio."
            },
            "content": {
                "heroSubtitle": "Una plataforma de gestión financiera asistida por IA", "technologiesUsed": "Tecnologías utilizadas", "viewRepository": "Ver repositorio", "activeDevelopment": "Desarrollo activo", "previewFile": "product-preview.mp4", "heroVideo": "Demostración de autenticación y panel de MoneyPilot", "previewCaption": "VISTA PREVIA DEL PRODUCTO · AUTENTICACIÓN → PANEL", "role": "FUNCIÓN", "type": "TIPO", "status": "ESTADO", "focus": "ENFOQUE", "focusValue": "FinTech · Datos · IA",
                "strategyEyebrow": "01 / ESTRATEGIA DEL PRODUCTO", "strategyTitle": "De la información financiera a decisiones seguras.", "problemLabel": "EL PROBLEMA", "problemText": "Las herramientas de finanzas personales suelen mostrar números sin ayudar a entender qué significan. Los usuarios terminan con transacciones fragmentadas, patrones de gasto poco claros y metas desconectadas de las decisiones cotidianas.", "solutionLabel": "LA SOLUCIÓN", "solutionText": "MoneyPilot reúne transacciones, presupuestos, metas, inversiones y observaciones asistidas por IA en un sistema claro que ayuda a pasar de la visibilidad financiera a la acción práctica.",
                "mobileRegion": "Experiencia móvil de MoneyPilot", "mobileEyebrow": "01 / EXPERIENCIA ADAPTABLE", "mobileTitle": "Flujo de autenticación móvil", "mobileVideo": "Recorrido de autenticación móvil de MoneyPilot", "mobilePlayback": "REPRODUCIR RECORRIDO DEL PRODUCTO", "experienceEyebrow": "02 / EXPERIENCIA DEL PRODUCTO", "experienceTitle": "Un espacio financiero diseñado para la claridad.", "dayTitle": "DÍA + NOCHE", "dayText": "Una interfaz coherente se adapta a distintos entornos sin cambiar la jerarquía del producto.", "languagesTitle": "7 IDIOMAS", "languagesText": "Diseñada para usuarios internacionales y una futura expansión europea.", "currencyTitle": "MULTIMONEDA", "currencyText": "La información financiera sigue siendo comprensible en distintas monedas y contextos personales.", "experienceFile": "authentication-to-dashboard.mp4", "experienceVideo": "Experiencia adaptable del producto MoneyPilot", "liveWalkthrough": "RECORRIDO DEL PRODUCTO EN VIVO", "authDashboard": "AUTENTICACIÓN → PANEL",
                "desktopEyebrow": "02 / EXPERIENCIA DE ESCRITORIO", "desktopTitle": "Un espacio de trabajo en todos los dispositivos.", "desktopBody": "El panel de MoneyPilot conserva la claridad, la jerarquía y la usabilidad del móvil al escritorio sin sacrificar detalles.", "responsiveOverview": "Resumen financiero adaptable", "darkThemes": "Temas claro y oscuro coherentes", "dataHierarchy": "Jerarquía de datos clara en pantallas grandes", "featuresEyebrow": "03 / EXPERIENCIA PRINCIPAL DEL PRODUCTO", "featuresTitle": "Un sistema completo para las decisiones financieras diarias.", "dashboardTitle": "Panel", "dashboardText": "Una vista centrada en decisiones sobre saldos, ingresos, gastos, flujo de caja y progreso.", "transactionsTitle": "Transacciones", "transactionsText": "Importación de CSV, categorías, filtros y un historial claro de la actividad financiera.", "budgetsTitle": "Presupuestos", "budgetsText": "Límites de gasto y seguimiento del progreso que hacen visibles los planes financieros.", "insightsTitle": "Insights de IA", "insightsText": "Observaciones personalizadas para explicar patrones y destacar mejores decisiones.", "goalsTitle": "Metas", "goalsText": "Seguimiento práctico del progreso de vivienda, viajes, educación, familia y otros objetivos.", "investmentsTitle": "Inversiones", "investmentsText": "Una vista unificada del valor de la cartera, la distribución, el rendimiento y el crecimiento a largo plazo.",
                "architectureEyebrow": "04 / INGENIERÍA + CONFIANZA", "architectureTitle": "Construido como un producto real, no como un panel estático.", "architectureLabel": "ARQUITECTURA DEL PROYECTO", "architectureTree": "Arquitectura del proyecto MoneyPilot", "localTests": "PRUEBAS LOCALES", "localTestsText": "Pruebas automatizadas sobre la lógica del producto, los contratos y el comportamiento visible para el usuario.", "remoteTests": "PRUEBAS RLS REMOTAS", "remoteTestsText": "Row Level Security valida la propiedad y aísla los datos financieros de cada usuario.", "secureModel": "MODELO DE DATOS SEGURO", "secureModelText": "Operaciones reforzadas con control de propiedad, validación y errores saneados.",
                "roadmapEyebrow": "05 / HOJA DE RUTA DE DESARROLLO", "roadmapTitle": "De la base de la interfaz a la orientación financiera inteligente.", "complete": "COMPLETADO", "inProgress": "EN CURSO", "next": "SIGUIENTE", "active": "ACTIVO", "planned": "PLANIFICADO", "interfaceTitle": "Interfaz", "interfaceText": "Landing, pantallas adaptables, interfaz de autenticación y bases del panel.", "authenticationTitle": "Autenticación", "authenticationText": "Registro en Supabase, sesiones, recuperación, rutas protegidas y autenticación de Google.", "financialDataTitle": "Datos financieros", "financialDataText": "Ingresos, gastos, transacciones, categorías, metas y datos reales del panel.", "securityTitle": "Seguridad + pruebas", "securityText": "RLS, aislamiento de datos, validación, pruebas de permisos y revisión para producción.", "pythonTitle": "Inteligencia con Python", "pythonText": "Análisis financiero, cálculos, detección de patrones y resúmenes automatizados.", "aiTitle": "Insights de IA", "aiText": "Observaciones personalizadas, recomendaciones y experiencia de asistente.", "productionTitle": "Producción", "productionText": "Accesibilidad, rendimiento, auditoría de seguridad y despliegue final.",
                "contextEyebrow": "01 / CONTEXTO DEL PROYECTO", "contextTitle": "Por qué creé MoneyPilot y de qué me encargué.", "contextLabel": "CONTEXTO DEL PROYECTO", "contextText": "MoneyPilot es un producto de finanzas personales creado para ayudar a entender los gastos, organizar los datos financieros y elaborar planes prácticos para objetivos importantes.", "contextMeta": "Producto personal · 2026", "roleLabel": "MI FUNCIÓN", "roleText": "Me encargo de la dirección del producto, el diseño UX/UI, el desarrollo front-end, el sistema de diseño, la implementación adaptable, la integración con Supabase y la validación del producto.", "roleMeta": "Product Designer + Desarrollador Front-end", "goalsLabel": "OBJETIVOS + RESTRICCIONES", "goalsText": "El MVP evita las API bancarias, prioriza la privacidad, admite usuarios internacionales y debe ser comprensible en distintas monedas, idiomas, dispositivos y niveles de experiencia financiera.", "goalsMeta": "No requiere conexión bancaria", "processLabel": "Proceso del producto MoneyPilot", "discovery": "Descubrimiento", "productStrategy": "Estrategia del producto", "uxUi": "UX + UI", "engineering": "Ingeniería", "validation": "Validación",
                "thinkingEyebrow": "04 / PENSAMIENTO DE PRODUCTO", "thinkingTitle": "Decisiones detrás de la interfaz.", "decisionLabel": "DECISIÓN DE DISEÑO", "decisionTitle": "Jerarquía centrada en decisiones", "decisionText": "En lugar de mostrar todas las métricas financieras a la vez, el panel prioriza la información que ayuda a decidir el siguiente paso: saldo actual, flujo de caja, gastos inusuales, progreso de metas y acciones recomendadas.", "accessibilityLabel": "ACCESIBILIDAD", "accessibilityTitle": "Claridad en temas y dispositivos", "accessibilityText": "Los modos Día y Noche conservan la jerarquía y el contraste. Los diseños adaptables, el foco visible, las etiquetas claras, el menor ruido visual y los patrones coherentes de interacción responden a distintas necesidades.", "challengeLabel": "DESAFÍO PRINCIPAL", "challengeTitle": "Datos complejos sin complejidad", "challengeText": "El desafío principal fue combinar transacciones, presupuestos, metas, inversiones y orientación de IA sin crear una interfaz que pareciera un software de contabilidad profesional. La divulgación progresiva mantiene disponible la información avanzada sin abrumar.", "learningLabel": "APRENDIZAJE CLAVE", "learningTitle": "La confianza debe diseñarse y construirse", "learningText": "Los productos financieros necesitan más que pantallas pulidas. El lenguaje claro, la respuesta predecible, los datos del usuario, las políticas RLS, la validación, el manejo de errores y las pruebas significativas aportan la misma calidad: confianza.",
                "moreEyebrow": "SIGUIENTE / EXPLORA MÁS TRABAJOS", "moreTitle": "Más proyectos", "blackBullLink": "Ver proyecto del restaurante Black Bull", "blackBullAlt": "Sistema de pantalla de cocina del restaurante Black Bull", "blackBullTitle": "Black Bull Restaurant", "blackBullType": "Plataforma de operaciones para restaurantes", "devConnectLink": "Ver proyecto DevConnect", "devConnectAlt": "Plataforma de empleos tecnológicos DevConnect", "devConnectTitle": "DevConnect", "devConnectType": "Plataforma de empleos tecnológicos", "viewProject": "Ver proyecto", "viewAll": "Ver todos mis proyectos", "ctaEyebrow": "MONEYPILOT / DESARROLLO ACTIVO", "ctaTitle": "Creando claridad financiera en un producto inteligente.", "ctaText": "Sigue el proyecto en GitHub para explorar el código, la arquitectura, la estrategia de pruebas y las próximas fases del producto.", "viewGithub": "Ver repositorio en GitHub", "backProjects": "Volver a proyectos", "mobileOneAlt": "Panel de MoneyPilot mostrado en un teléfono inteligente", "mobileTwoAlt": "Panel financiero de MoneyPilot en un dispositivo móvil", "desktopAlt": "Panel de MoneyPilot presentado en un ordenador de escritorio"
            }
        },
        "petIdPage": {
            "images": {
                "interface": "Interfaz de identificación digital Pet ID",
                "preview": "Vista previa del proyecto Pet ID"
            },
            "meta": {
                "title": "Caso de estudio Pet ID — Felipe S Bephman",
                "description": "Una experiencia de identificación digital diseñada para facilitar el acceso a información importante sobre mascotas y ayudar a reunir a los animales perdidos con sus responsables."
            },
            "hero": {
                "eyebrow": "Tecnología para mascotas — Identificación digital",
                "intro": "Una experiencia de identificación digital diseñada para facilitar el acceso a información importante sobre mascotas y ayudar a reunir a los animales perdidos con sus responsables."
            },
            "details": {
                "type": "Identificación digital de mascotas",
                "status": "Proyecto conceptual"
            },
            "project": {
                "overview": "Pet ID explora un perfil digital sencillo donde la información importante de una mascota se presenta con claridad y es accesible desde distintos dispositivos.",
                "approach": "La experiencia prioriza la identificación rápida, datos de contacto claros y una interfaz fácil de entender incluso en situaciones de estrés."
            },
            "challenge": {
                "urgency": "Cuando una mascota se pierde, la información debe comunicarse rápidamente. Una interfaz complicada o datos de contacto poco claros pueden retrasar la comunicación con su responsable.",
                "accessibility": "El desafío fue organizar la información esencial en una experiencia cercana, accesible y pensada primero para dispositivos móviles."
            },
            "solution": {
                "priorities": "La interfaz prioriza la identidad de la mascota, las opciones de contacto con su responsable y los detalles importantes mediante una jerarquía clara y componentes adaptables.",
                "upcoming": "Se añadirán más información del proyecto, flujos de usuarios, pantallas y mockups de dispositivos cuando estén listos los materiales finales del caso de estudio."
            }
        },
        "privacyPage": {
            "meta": {
                "title": "Política de Privacidad — Felipe S Bephman",
                "description": "Cómo Felipe S Bephman recopila, utiliza y protege la información personal en este portafolio."
            },
            "introduction": {
                "policy": "Esta Política de Privacidad explica cómo Felipe S Bephman recopila, utiliza y protege la información personal cuando visitas este portafolio o me contactas acerca de mis servicios.",
                "purpose": "Este portafolio se gestiona desde Irlanda y tiene como objetivo presentar mi trabajo y permitir que posibles clientes, empleadores y colaboradores me contacten."
            },
            "collection": {
                "title": "2. Información que recopilo",
                "emailTitle": "2.1 Información que proporcionas por correo electrónico",
                "formIntro": "Al utilizar el formulario de contacto, puedes proporcionar:",
                "name": "Tu nombre",
                "email": "Tu dirección de correo electrónico",
                "enquiry": "El tipo de consulta",
                "message": "Tu mensaje",
                "other": "Cualquier otra información que decidas incluir",
                "mailto": "El formulario de contacto crea un correo en la aplicación de correo electrónico de tu dispositivo. Este sitio web no almacena los datos enviados mediante el formulario en una base de datos propia.",
                "whatsappTitle": "2.2 Información compartida a través de WhatsApp",
                "whatsapp": "Si decides contactarme a través de WhatsApp, tu número de teléfono, información de perfil, mensaje y los archivos que envíes se procesarán a través de WhatsApp. Los términos de privacidad de WhatsApp también se aplican a esa comunicación.",
                "technicalTitle": "2.3 Información técnica",
                "technical": "Actualmente, el sitio web no utiliza herramientas de análisis ni rastreadores publicitarios. El proveedor de alojamiento puede procesar información técnica limitada, como la dirección IP, datos del navegador y registros del servidor, para ofrecer y proteger el sitio web."
            },
            "cookies": {
                "title": "3. Cookies y análisis de uso",
                "usage": "Actualmente, este portafolio no establece cookies de análisis, publicidad ni marketing.",
                "external": "Los servicios externos a los que se accede mediante enlaces, incluidos WhatsApp y las plataformas de redes sociales, pueden utilizar sus propias cookies de acuerdo con sus políticas de privacidad."
            },
            "usage": {
                "title": "4. Cómo utilizo tu información",
                "intro": "Utilizo la información que proporcionas para:",
                "respond": "Responder a consultas",
                "discuss": "Conversar sobre proyectos u oportunidades laborales",
                "provide": "Proporcionar la información que solicites",
                "records": "Mantener registros de comunicaciones relevantes",
                "protect": "Proteger el sitio web y prevenir su uso indebido",
                "comply": "Cumplir las obligaciones legales aplicables"
            },
            "bases": {
                "title": "5. Bases jurídicas del tratamiento",
                "intro": "Cuando sea aplicable el Reglamento General de Protección de Datos (RGPD), la información personal podrá tratarse porque:",
                "consent": "Has dado tu consentimiento",
                "contract": "El tratamiento es necesario para responder a tu solicitud o tomar medidas antes de celebrar un contrato",
                "interests": "El tratamiento es necesario por intereses legítimos, como comunicarse con posibles clientes o proteger el sitio web",
                "obligation": "El tratamiento es necesario para cumplir una obligación legal"
            },
            "sharing": {
                "title": "6. Cómo se comparte la información",
                "intro": "No vendo ni alquilo tu información personal. La información puede ser procesada por servicios necesarios para las comunicaciones y el funcionamiento del sitio web, incluidos:",
                "email": "Proveedores de servicios de correo electrónico",
                "whatsapp": "WhatsApp, cuando decidas utilizarlo",
                "hosting": "El proveedor de alojamiento del sitio web",
                "authorities": "Asesores profesionales o autoridades públicas cuando lo exija la ley"
            },
            "transfers": {
                "title": "7. Transferencias internacionales de datos",
                "description": "Algunos proveedores de servicios externos pueden procesar información fuera de Irlanda o del Espacio Económico Europeo. Cuando sea necesario, se espera que estos proveedores utilicen garantías reconocidas para las transferencias internacionales de datos."
            },
            "retention": {
                "title": "8. Conservación de datos",
                "duration": "La información personal se conserva únicamente durante el tiempo razonablemente necesario para responder a tu consulta, mantener registros comerciales relevantes, resolver controversias o cumplir obligaciones legales.",
                "deletion": "Puedes solicitar la eliminación de tu información personal, salvo aquella que deba conservarse por ley."
            },
            "security": {
                "title": "9. Seguridad de los datos",
                "description": "Se utilizan medidas técnicas y organizativas razonables para proteger la información personal. Sin embargo, no se puede garantizar que ningún método de transmisión por internet o almacenamiento electrónico sea completamente seguro."
            },
            "rights": {
                "title": "10. Tus derechos de protección de datos",
                "intro": "Según la legislación aplicable, incluido el RGPD, puedes tener derecho a:",
                "access": "Solicitar acceso a tu información personal",
                "correction": "Solicitar la corrección de información inexacta",
                "deletion": "Solicitar la eliminación de tu información",
                "restrict": "Limitar determinados tratamientos",
                "object": "Oponerte a determinados tratamientos",
                "portability": "Solicitar la portabilidad de los datos cuando corresponda",
                "withdraw": "Retirar el consentimiento en cualquier momento",
                "complaint": "También puedes presentar una reclamación ante la Comisión de Protección de Datos de Irlanda u otra autoridad de control competente."
            },
            "children": {
                "title": "11. Privacidad de menores",
                "description": "Este portafolio y sus servicios no están dirigidos a menores. No recopilo intencionadamente información personal de menores a través de este sitio web."
            },
            "links": {
                "title": "12. Enlaces de terceros",
                "description": "Este sitio web puede contener enlaces a sitios y servicios externos. No soy responsable de las prácticas de privacidad ni del contenido de esos terceros."
            },
            "changes": {
                "title": "13. Cambios en esta política",
                "description": "Esta Política de Privacidad puede actualizarse cuando cambien el sitio web, sus servicios o los requisitos legales. La fecha al inicio de esta página indicará la revisión más reciente."
            },
            "contact": {
                "title": "14. Contacto",
                "description": "Para preguntas o solicitudes sobre privacidad, contacta con:"
            },
            "notice": "Al utilizar este sitio web, reconoces que has leído esta Política de Privacidad."
        },
        "termsPage": {
            "meta": {
                "title": "Términos de Servicio — Felipe S Bephman",
                "description": "Términos de uso del portafolio de Felipe S Bephman y de las consultas profesionales iniciales."
            },
            "title": "Términos de Servicio",
            "introduction": {
                "scope": "Estos Términos de Servicio regulan el uso del sitio web de portafolio gestionado por Felipe S Bephman y cualquier consulta inicial sobre servicios freelance u oportunidades profesionales.",
                "acceptance": "Al utilizar este sitio web, aceptas estos términos. Si no estás de acuerdo, no utilices el sitio web."
            },
            "purpose": {
                "title": "2. Finalidad de este sitio web",
                "intro": "Este sitio web tiene como finalidad:",
                "portfolio": "Presentar mi portafolio profesional y mis habilidades",
                "examples": "Mostrar ejemplos de trabajos anteriores y proyectos personales",
                "enquiries": "Facilitar consultas sobre empleo y colaboración",
                "freelance": "Permitir que posibles clientes soliciten trabajos freelance",
                "information": "La información que se muestra en este sitio web se proporciona con fines profesionales e informativos generales."
            },
            "employment": {
                "title": "3. Oportunidades laborales",
                "enquiries": "Los mensajes relacionados con empleo, entrevistas o selección de personal no crean una relación laboral ni garantizan la aceptación de una oportunidad.",
                "agreement": "Cualquier relación laboral estará sujeta a un contrato de trabajo escrito independiente y a la legislación laboral aplicable."
            },
            "freelance": {
                "title": "4. Consultas y proyectos freelance",
                "enquiryTitle": "4.1 Consultas iniciales",
                "enquiry": "Contactarme por correo electrónico o WhatsApp constituye únicamente una consulta inicial. No crea un contrato de servicios vinculante ni obliga a ninguna de las partes a continuar.",
                "agreementTitle": "4.2 Acuerdo del proyecto",
                "agreementIntro": "Antes de comenzar el trabajo freelance, los detalles del proyecto deben confirmarse por escrito. Según el proyecto, esto puede incluir:",
                "scope": "Alcance del proyecto y entregables",
                "timeline": "Plazos estimados",
                "fees": "Honorarios y calendario de pagos",
                "revisions": "Número y alcance de las revisiones",
                "responsibilities": "Responsabilidades del cliente",
                "ownership": "Condiciones de propiedad y licencia",
                "cancellation": "Condiciones de cancelación",
                "binding": "Un proyecto solo se vuelve vinculante cuando ambas partes aceptan la propuesta, el presupuesto o el acuerdo escrito correspondiente."
            },
            "services": {
                "title": "5. Servicios",
                "scope": "Los servicios pueden incluir desarrollo front-end, sitios web adaptables, implementación de interfaces, HTML, CSS, JavaScript, React, Next.js y trabajos digitales relacionados acordados para un proyecto específico.",
                "deliverables": "Los servicios y entregables concretos se describirán en la propuesta escrita o en el acuerdo del proyecto."
            },
            "client": {
                "title": "6. Responsabilidades del cliente",
                "intro": "En los proyectos freelance, los clientes son responsables de:",
                "requirements": "Proporcionar requisitos precisos para el proyecto",
                "materials": "Proporcionar el contenido y los materiales necesarios",
                "permissions": "Confirmar que tienen permiso para utilizar los textos, imágenes, marcas y otros recursos proporcionados",
                "feedback": "Proporcionar comentarios y aprobaciones a tiempo",
                "review": "Revisar los entregables antes de la aprobación final",
                "payment": "Pagar los honorarios acordados según las condiciones del proyecto",
                "delays": "Los retrasos en la recepción del contenido, los accesos, los comentarios o las aprobaciones necesarios pueden afectar los plazos del proyecto."
            },
            "payment": {
                "title": "7. Honorarios y pagos",
                "website": "Este sitio web no procesa pagos ni anuncia un servicio de suscripción de precio fijo.",
                "agreement": "Los honorarios freelance, anticipos, monedas, fechas de pago y métodos de pago aceptados se acordarán individualmente por escrito antes de comenzar el trabajo.",
                "additional": "Los trabajos adicionales fuera del alcance acordado pueden requerir un presupuesto revisado o una aprobación escrita independiente."
            },
            "timelines": {
                "title": "8. Plazos y revisiones",
                "estimates": "Los plazos del proyecto son estimaciones, salvo que un acuerdo escrito indique expresamente lo contrario. Pueden cambiar si se modifican los requisitos del proyecto o se retrasan los comentarios y materiales necesarios.",
                "revisions": "El número de revisiones y lo que se considera una revisión se definirán para cada proyecto. Las solicitudes fuera del alcance acordado podrán tratarse como trabajo adicional."
            },
            "property": {
                "title": "9. Propiedad intelectual",
                "portfolioTitle": "9.1 Contenido del portafolio",
                "portfolio": "Salvo que se indique lo contrario, el contenido original, el diseño, el código, los textos y la presentación de este portafolio pertenecen a Felipe S Bephman o se utilizan bajo una licencia aplicable.",
                "permission": "Puedes consultar el portafolio para una evaluación personal o profesional, pero no puedes copiar, volver a publicar, vender ni tergiversar su contenido sin permiso.",
                "deliverablesTitle": "9.2 Entregables freelance",
                "deliverables": "La propiedad y las licencias de los entregables freelance se definirán en el acuerdo del proyecto correspondiente. Salvo que se acuerde lo contrario, la transferencia de propiedad está condicionada al pago íntegro de los honorarios acordados.",
                "thirdParty": "Los materiales de terceros, bibliotecas, fuentes, software y componentes de código abierto siguen sujetos a sus respectivas licencias."
            },
            "confidentiality": {
                "title": "10. Confidencialidad",
                "care": "La información claramente identificada como confidencial se tratará con un cuidado razonable y se utilizará únicamente para la consulta o el proyecto correspondiente, salvo cuando la ley exija su divulgación.",
                "agreement": "Los requisitos adicionales de confidencialidad deben documentarse en un acuerdo escrito independiente."
            },
            "acceptable": {
                "title": "11. Uso aceptable",
                "intro": "No debes:",
                "unlawful": "Utilizar el sitio web con fines ilícitos",
                "security": "Intentar interferir en la seguridad del sitio web",
                "malicious": "Introducir código malicioso o ataques automatizados",
                "impersonation": "Suplantar a otra persona u organización",
                "content": "Copiar o utilizar indebidamente el contenido del portafolio",
                "messages": "Enviar mensajes abusivos, fraudulentos o engañosos"
            },
            "thirdParty": {
                "title": "12. Servicios y enlaces de terceros",
                "services": "Este sitio web puede incluir enlaces a plataformas de terceros, como WhatsApp, GitHub, LinkedIn y otros sitios web. Esos servicios operan bajo sus propios términos y políticas de privacidad.",
                "responsibility": "No soy responsable de la disponibilidad, seguridad, contenido ni prácticas de los servicios de terceros."
            },
            "availability": {
                "title": "13. Disponibilidad del sitio web",
                "accuracy": "Procuro mantener el sitio web preciso y disponible, pero no garantizo un funcionamiento ininterrumpido ni que toda la información esté siempre completa, actualizada o libre de errores.",
                "maintenance": "El sitio web puede modificarse, suspenderse o retirarse cuando sea necesario realizar tareas de mantenimiento o actualizaciones."
            },
            "liability": {
                "title": "14. Limitación de responsabilidad",
                "indirect": "En la medida permitida por la ley, no soy responsable de pérdidas indirectas o consecuentes derivadas únicamente del uso o de la imposibilidad de uso de este sitio web o de enlaces de terceros.",
                "rights": "Nada en estos términos excluye ni limita ninguna responsabilidad o derecho legal que no pueda excluirse o limitarse legalmente.",
                "projects": "La responsabilidad relacionada con un proyecto freelance se regirá por el acuerdo independiente del proyecto y la legislación aplicable."
            },
            "privacy": {
                "title": "15. Privacidad",
                "description": "La información personal se trata de acuerdo con la"
            },
            "changes": {
                "title": "16. Cambios en estos términos",
                "description": "Estos términos pueden actualizarse cuando cambien el sitio web, los servicios o los requisitos legales. La fecha al inicio de la página identifica la versión más reciente."
            },
            "law": {
                "title": "17. Legislación aplicable",
                "description": "Estos términos del sitio web se rigen por las leyes de Irlanda. Los derechos irrenunciables reconocidos por la legislación aplicable permanecen intactos."
            },
            "contact": {
                "title": "18. Contacto",
                "description": "Para preguntas sobre estos términos o consultas sobre trabajo freelance, contacta con:"
            },
            "notice": "Al utilizar este sitio web, reconoces que has leído y comprendido estos Términos de Servicio."
        }
    }
};

const languageSwitcher = document.querySelector(
    ".language-switcher"
);

const languageTrigger = document.querySelector(
    ".language-switcher__trigger"
);

const languageMenu = document.querySelector(
    ".language-switcher__menu"
);

const languageCurrent = document.querySelector(
    "[data-language-current]"
);

const languageCurrentFlag = document.querySelector(
    "[data-language-current-flag]"
);

const languageOptions = document.querySelectorAll(
    "[data-language]"
);

function getTranslation(language, key) {
    const requestedTranslation = key
        .split(".")
        .reduce(
            (currentValue, currentKey) =>
                currentValue?.[currentKey],
            translations[language]
        );

    if (typeof requestedTranslation === "string") {
        return requestedTranslation;
    }

    const fallbackTranslation = key
        .split(".")
        .reduce(
            (currentValue, currentKey) =>
                currentValue?.[currentKey],
            translations[DEFAULT_LANGUAGE]
        );

    return typeof fallbackTranslation === "string"
        ? fallbackTranslation
        : null;
}

function applyTextTranslations(language) {
    const translatedElements =
        document.querySelectorAll("[data-i18n]");

    translatedElements.forEach((element) => {
        const translationKey = element.dataset.i18n;
        const translatedText = getTranslation(
            language,
            translationKey
        );

        if (translatedText) {
            element.textContent = translatedText;
        }
    });
}

function applyAttributeTranslations(language) {
    ["alt", "content"].forEach((attribute) => {
        document.querySelectorAll(`[data-i18n-${attribute}]`).forEach((element) => {
            const translatedText = getTranslation(language, element.getAttribute(`data-i18n-${attribute}`));
            if (translatedText !== null) element.setAttribute(attribute, translatedText);
        });
    });
    const ariaElements = document.querySelectorAll(
        "[data-i18n-aria-label]"
    );

    ariaElements.forEach((element) => {
        const translationKey =
            element.dataset.i18nAriaLabel;

        const translatedText = getTranslation(
            language,
            translationKey
        );

        if (translatedText) {
            element.setAttribute(
                "aria-label",
                translatedText
            );
        }
    });

    const placeholderElements = document.querySelectorAll(
        "[data-i18n-placeholder]"
    );

    placeholderElements.forEach((element) => {
        const translationKey =
            element.dataset.i18nPlaceholder;

        const translatedText = getTranslation(
            language,
            translationKey
        );

        if (translatedText) {
            element.setAttribute(
                "placeholder",
                translatedText
            );
        }
    });
}

function updateLanguageControls(language) {
    if (languageCurrent) {
        languageCurrent.textContent =
            LANGUAGE_CODES[language];
    }

    if (languageCurrentFlag) {
        languageCurrentFlag.src =
            LANGUAGE_FLAG_PATHS[language];
    }

    languageOptions.forEach((option) => {
        const isActive =
            option.dataset.language === language;

        option.classList.toggle(
            "is-active",
            isActive
        );

        option.setAttribute(
            "aria-pressed",
            String(isActive)
        );
    });
}

function applyLanguage(language) {
    const selectedLanguage =
        SUPPORTED_LANGUAGES.includes(language)
            ? language
            : DEFAULT_LANGUAGE;

    document.documentElement.lang = selectedLanguage;

    applyTextTranslations(selectedLanguage);
    applyAttributeTranslations(selectedLanguage);
    updateLanguageControls(selectedLanguage);
    const navigationToggle = document.querySelector(".navigation__toggle");
    if (navigationToggle) {
        const key = navigationToggle.getAttribute("aria-expanded") === "true"
            ? "common.navigation.close" : "common.navigation.open";
        navigationToggle.setAttribute("aria-label", getTranslation(selectedLanguage, key));
    }

    try {
        localStorage.setItem(LANGUAGE_STORAGE_KEY, selectedLanguage);
    } catch {
        // Translation still works when browser storage is unavailable.
    }
}

function setLanguageMenuOpen(isOpen) {
    if (
        !languageSwitcher ||
        !languageTrigger ||
        !languageMenu
    ) {
        return;
    }

    languageSwitcher.classList.toggle(
        "language-switcher--open",
        isOpen
    );

    languageTrigger.setAttribute(
        "aria-expanded",
        String(isOpen)
    );

    languageMenu.setAttribute(
        "aria-hidden",
        String(!isOpen)
    );
}

languageTrigger?.addEventListener("click", (event) => {
    event.stopPropagation();

    const isOpen = languageSwitcher.classList.contains(
        "language-switcher--open"
    );

    setLanguageMenuOpen(!isOpen);
});

languageOptions.forEach((option) => {
    option.addEventListener("click", () => {
        const selectedLanguage =
            option.dataset.language;

        applyLanguage(selectedLanguage);
        setLanguageMenuOpen(false);
        languageTrigger?.focus();
    });

    option.addEventListener("keydown", (event) => {
        const optionIndex = Array.from(languageOptions).indexOf(option);

        if (event.key === "ArrowDown" || event.key === "ArrowUp") {
            event.preventDefault();

            const direction = event.key === "ArrowDown" ? 1 : -1;
            const nextIndex = (optionIndex + direction + languageOptions.length) % languageOptions.length;

            languageOptions[nextIndex].focus();
        }

        if (event.key === "Home" || event.key === "End") {
            event.preventDefault();

            const nextIndex = event.key === "Home" ? 0 : languageOptions.length - 1;
            languageOptions[nextIndex].focus();
        }
    });
});

document.addEventListener("click", (event) => {
    if (!languageSwitcher?.contains(event.target)) {
        setLanguageMenuOpen(false);
    }
});

document.addEventListener("keydown", (event) => {
    if (
        event.key === "Escape" &&
        languageSwitcher?.classList.contains(
            "language-switcher--open"
        )
    ) {
        setLanguageMenuOpen(false);
        languageTrigger?.focus();
    }
});

let savedLanguage;
try {
    savedLanguage = localStorage.getItem(LANGUAGE_STORAGE_KEY);
} catch {
    savedLanguage = DEFAULT_LANGUAGE;
}

applyLanguage(savedLanguage || DEFAULT_LANGUAGE);

window.portfolioI18n = {
    applyLanguage,
    getTranslation
};
