/**
 * portfolioData.js — Centralized content configuration for the portfolio.
 *
 * HOW TO UPDATE THIS PORTFOLIO
 * ─────────────────────────────
 * • Profile details (name, headline, location, contact): edit `profile` below.
 * • Professional / soft-skill groups: edit `professionalSkills` below.
 * • Technology stack and certificates: edit SkillsAndCertsSection.js.
 * • Projects: edit the `projects` array in PortfolioSection.js.
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
    'remote assistance, and client service.' + '' +
    'Comfortable working both independently and ' +
    'as part of a team, with a strong drive to continuously learn new technologies and ' +
    'best practices. Adept at breaking down complex technical issues into clear, ' +
    'actionable steps for non-technical users, while maintaining a calm, courteous, and ' +
    'solutions-focused attitude even in high-pressure environments. Eager to grow within ' +
    'a supportive IT or development team, contribute to meaningful projects, and build a ' +
    'long-term career bridging technical support and software development.',
};

/**
 * Professional / soft-skill groups displayed alongside the technology stack
 * in the Technologies & Skills section.
 * Each group has a title and a list of skill strings.
 * Add a new object to this array to create an additional skill group card.
 */
export const professionalSkills = [
  {
    title: 'IT Support',
    skills: [
      'Basic troubleshooting & issue diagnosis',
      'Remote-assistance mindset',
      'Escalation awareness',
      'Hardware/software problem-solving',
    ],
  },
  {
    title: 'Microsoft & Office Tools',
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
    skills: [
      'Ticket / query logging',
      'Follow-ups & accurate records',
      'Written communication',
      'Afrikaans & English client support',
    ],
  },
];
