// content/contactContent.tsx
import { ICON_LINKEDIN, ICON_GITHUB, ICON_EMAIL, PORTFOLIO_OWNER_NAME, PORTFOLIO_OWNER_LINKEDIN, PORTFOLIO_OWNER_GITHUB, PORTFOLIO_OWNER_EMAIL } from "./siteConfig";

// Contact page header
export const contactPageHeader = `${PORTFOLIO_OWNER_NAME} | Contact`;

// Contact page meta description
export const contactPageDescription = `This page contains contact information of ${PORTFOLIO_OWNER_NAME}.`;

export const contactSocials = [
    {
        iconSrc: '/icons/linkedin-icon.png',
        alt: ICON_LINKEDIN,
        link: PORTFOLIO_OWNER_LINKEDIN,
    },
    {
        iconSrc: ICON_GITHUB,
        alt: 'GitHub',
        link: PORTFOLIO_OWNER_GITHUB,
    },
    {
        iconSrc: ICON_EMAIL,
        alt: 'Email',
        link: `mailto:${PORTFOLIO_OWNER_EMAIL}`,
    },
];

export const contactCardContent = (
    <div>
        <p>Best way to reach out to me is,</p>
        <p className="mb-4 text-center"><b>{PORTFOLIO_OWNER_EMAIL}</b></p>
        <p>Feel free to reach out to me via:</p>
    </div>
);

