/**
 * portfolioData.js — Centralized content configuration for the portfolio.
 *
 * HOW TO UPDATE THIS PORTFOLIO
 * ─────────────────────────────
 * • Profile details (name, headline, location, contact): edit `profile` below.
 * • Professional / soft-skill groups: edit `professionalSkills`.
 * • Technology stack (shown in the Technologies banner): edit the
 *   `techCategories` object in TechnologiesBanner.js.
 * • Projects: edit the `projects` array in PortfolioSection.js.
 * • Certificates: edit the `certificates` array in CertificatesSection.js.
 *
 * All data-driven sections re-render automatically when you save the file —
 * no template markup needs to be duplicated or manually kept in sync.
 */

export const profile = {
  name: 'Ulrich Snyman',
  headline: 'Junior IT & Technical Support Technician | Junior Full-Stack Developer',
  location: 'Pretoria, South Africa',
  locationUrl: 'https://www.google.com/maps/place/Pretoria',
  email: 'ulrichsnymancode@gmail.com',
  phone: '+27 71 545 0776',
  portfolio: 'https://ulsnportfolio.netlify.app',
  github: 'https://github.com/UlrichSnyman',
  githubHandle: 'UlrichSnyman',
  linkedin: 'https://www.linkedin.com/in/ulrich-snyman-a5a980368/',
  linkedinHandle: 'Ulrich Snyman',
  profileImage: require('../assets/images/Pfp.jpg'),

  professionalSummary:
    'Motivated entry-level IT Support Technician and Junior Full-Stack Developer with ' +
    'hands-on training in Java, Python, JavaScript, databases, and full-stack projects. ' +
    'Brings real-world experience in depot operations, customer communication, ' +
    'administration, stock control, security oversight, and problem-solving under ' +
    'pressure. Fluent in Afrikaans and English, with a professional, patient, and ' +
    'organised approach to technical support, ticket logging, Microsoft 365 concepts, ' +
    'remote assistance, and client service.',

  languages: [
    { name: 'Afrikaans', level: 'Native' },
    { name: 'English', level: 'Fluent' },
  ],
};

/**
 * Professional / soft-skill groups displayed in the Professional Skills section.
 * Each group has a title and a list of skill strings.
 * Add a new object to this array to create an additional skill group card.
 */
export const professionalSkills = [
  {
    title: 'IT Support',
    icon: '🖥️',
    skills: [
      'Basic troubleshooting & issue diagnosis',
      'Remote-assistance mindset',
      'Escalation awareness',
      'Hardware/software problem-solving',
    ],
  },
  {
    title: 'Microsoft & Office Tools',
    icon: '📊',
    skills: [
      'Microsoft Office suite',
      'Microsoft 365 familiarity',
      'Outlook / email concepts',
      'OneDrive concepts',
      'General computer literacy',
    ],
  },
  {
    title: 'Customer & Admin Support',
    icon: '🤝',
    skills: [
      'Ticket / query logging',
      'Follow-ups & accurate records',
      'Written communication',
      'Afrikaans & English client support',
    ],
  },
];
