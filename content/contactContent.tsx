// content/contactContent
import { ICON_LINKEDIN, ICON_GITHUB, ICON_EMAIL, PORTFOLIO_OWNER_NAME, PORTFOLIO_OWNER_LINKEDIN, PORTFOLIO_OWNER_GITHUB, PORTFOLIO_OWNER_EMAIL } from "./siteConfig";

// Contact page header
export const contactPageHeader = `${PORTFOLIO_OWNER_NAME} | Contact`;

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
        <p>Best way to reach out to me is via email.</p>
        <p className="mb-4 text-center"><b>{PORTFOLIO_OWNER_EMAIL}</b></p>
        <p>Feel free to reach out to me via the following:</p>
    </div>
);

