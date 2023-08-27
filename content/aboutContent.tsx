// content/aboutContent.ts
import React from 'react';
import { PORTFOLIO_OWNER_NAME } from './siteConfig';

// About page header
export const aboutPageHeader = `${PORTFOLIO_OWNER_NAME} | About`;

// About page image 
export const aboutImgSrc = "/images/about-img.jpg";

// Background section data
export const backgroundContent = (
    <div>
        <p>
            Hi, I'm {PORTFOLIO_OWNER_NAME}, an Electronics and Biomedical Engineering graduate with over three years of experience in{' '}
            <b>Embedded systems and IoT</b>. I am passionate about improving the healthcare industry through technology.
        </p>
        <p>
            Currently, I'm pursuing my Master's in Computer Engineering at <b>Colorado State University</b>.
        </p>
    </div>
);

// Education section data
export const educationData = [
    {
        logoSrc: '/logos/colostate-logo.png',
        collegeName: 'Colorado State University',
        course: 'Master of Science (M.S.) in Computer Engineering',
        date: 'August 2023 - May 2025',
        gpa: '',
        relevantCoursework: '',
        accomplishments: [],

    },
    {
        logoSrc: '/logos/mec-logo.jpg',
        collegeName: 'Goverment Model Engineering College',
        course: 'Bachelor of Technology (B.Tech.) in Electronics and Biomedical Engineering',
        date: 'July 2019 - May 2019',
        gpa: '8.09/10',
        relevantCoursework: '',
        accomplishments: [
            'Secured university rank 8 for B.Tech. Electronics and Biomedical Engineering class of 2019.',
        ],
    },
];

// Skill section data
export const skillsData = [
    {
        category: 'Programming Languages',
        items: ['Python', 'C/C++', 'MATLAB'],
    },
    {
        category: 'Software Tools',
        items: ['Eclipse', 'Keil', 'STM32 ST-LINK Utility', 'SEGGER'],
    },
    {
        category: 'Hardware Tools',
        items: ['Logic Analyser', 'BLE TI Sniffer', 'DSO'],
    },
    {
        category: 'Communication Protocols',
        items: ['BLE', 'I2C', 'UART', 'DALI', 'SPI'],
    },
    {
        category: 'Operating System',
        items: ['Windows', 'Linux'],
    },
    {
        category: 'Server Tools',
        items: ['GIT', 'JIRA'],
    },
];

// Volunteering section data
export const volunteeringData = [
    {
        organizationName: 'Make A Difference',
        logoSrc: '/logos/makeadiff-logo.png',
        title: 'Academic Support Volunteer - TR',
        duration: 'January 2022 - Present',
        bulletPoints: [
            'Contributed to community outreach initiatives.',
            'Coordinated and participated in fundraising events.',
            'Tutored underprivileged high school (Grade 11 & Grade 12) students.'
        ],
    },

];

