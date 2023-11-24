// content/siteConfig.tsx

// Site paths
export type SiteLink = {
    path: string;
    label: string;
  };

export const siteLinks: SiteLink[] = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/experience', label: 'Experience' },
    { path: '/projects', label: 'Projects' },
    { path: '/contact', label: 'Contact' }
  ];

// Name of portfolio owner
export const PORTFOLIO_OWNER_NAME = 'Anjali Murali';

// Resume of portfolio owner
export const PORTFOLIO_OWNER_RESUME = 'resume/Resume_AnjaliMurali.pdf';

// Place of portfolio owner
export const PORTFOLIO_OWNER_PLACE = "Fort Collins, Colorado";

// Location icon
export const ICON_LOCATION = "/icons/locationpin-icon.png";

// Email of portfolio owner
export const PORTFOLIO_OWNER_EMAIL = "Anjali.Murali@colostate.edu";

// Email icon
export const ICON_EMAIL = "/icons/email-icon.png";

// Linkedin account of portfolio owner
export const PORTFOLIO_OWNER_LINKEDIN = "https://www.linkedin.com/in/anjalimurali1997/";

// Linkedin icon
export const ICON_LINKEDIN = "/icons/linkedin-icon.png";

// Github account of portfolio owner
export const PORTFOLIO_OWNER_GITHUB = "https://github.com/anjali-murali";

// Github icon
export const ICON_GITHUB = "/icons/github-icon.jpg";