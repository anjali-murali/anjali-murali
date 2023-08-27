// content/experienceContent.tsx
import { PORTFOLIO_OWNER_NAME } from "./siteConfig";

// Experience page header
export const experiencePageHeader = `${PORTFOLIO_OWNER_NAME} | Experience`;

export const experienceTimelineItems = [
  {
    company: {
      name: 'WiSilica',
      logoUrl: '/logos/wisilica-logo.jpg',
      website: 'https://www.wisilica.com',
    },
    title: 'Embedded Software Engineer',
    date: 'August 2019 - February 2023',
    content: [
      'Designed, developed and validated embedded software blocks within WiSilica IOT device platform.',
      'Collaborated with core engineering teams on system-level investigation, issue tracking and resolution.',
      'Participated in the definition of both functional and non-functional requirements of the system and translated those into software in line with project vision.',
      'Reduced development time and bugs in release cycles by refactoring parts of code base and tools.',
      'Created portable code for bare-metal and RTOS based solutions across multiple MCUs using embedded C.',
      'Revamped device production support scripts and test firmware to reduce production process time by 50%.'
    ],
    isAlternate: true,
  },
  {
    company: {
      name: 'Ubio Biotechnology',
      logoUrl: '/logos/ubio-logo.jpg',
      website: 'https://www.ubio.in/',
    },
    title: 'Project Intern',
    date: 'June 2018 - July 2018',
    content: [
      'Assisted in developing a prototype of a fully automated portable low cost fluorescent reader for rapid test of Dengue disease.',
      'Built a GUI enabling patient detail entry for the patient management system using python tkinter.',
      'Added functionality allowing sample cartridges to be moved through the analysis equipment using stepper motors, improving usability',
    ],
    isAlternate: true,
  },
];