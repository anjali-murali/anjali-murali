// pages/about.tsx
import Head from 'next/head';
import Image from 'next/image';
import { NextPage } from 'next';

import { useIsMobile } from '../context/useIsMobile';
import { aboutImgSrc, aboutPageHeader, aboutPageDescription, backgroundContent, educationData, skillsData, volunteeringData } from '../../content/aboutContent';

const About: NextPage = () => {
  const { isMobile } = useIsMobile();

  const photoContainerStyles = {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '4rem',
  };

  const photoStyles = {
    borderRadius: '16px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1) dark:rgba(255, 255, 255, 0.1)'
  };

  const sectionStyles = {
    marginBottom: '2rem',
    marginLeft: isMobile ? '2rem' : '16rem',
    marginRight: isMobile ? '2rem' : '16rem',
  };

  return (
    <div className="mx-auto mt-8">
      <Head>
        <title>{aboutPageHeader}</title>
        <meta name="description" content={aboutPageDescription} />
      </Head>
      <h1 className="text-4xl font-bold mt-[7.5vh] mb-8 text-center">About Me</h1>
      {/*About photo section*/}
      <div style={photoContainerStyles}>
        <Image
          src={aboutImgSrc}
          alt="About Image"
          width={isMobile ? 300 : 600}
          height={isMobile ? 300 : 300}
          style={photoStyles}
          priority
          unoptimized
        />
      </div>
      <div className="border-t border-gray-300 dark:border-gray-700 my-8"></div>
      {/*Background section*/}
      <div style={sectionStyles}>
        <h2 className="text-xl font-bold mb-2">Background</h2>
        {backgroundContent}
      </div>
      <div className="border-t border-gray-300 dark:border-gray-700 my-8"></div>
      {/*Education section*/}
      <div style={sectionStyles}>
        <h2 className="text-xl font-bold mb-4">Education</h2>
        {educationData.map((education, index) => (
          <div key={index} className="flex-item-start mb-4">
            <div className="flex items-start">
              <Image
                src={education.logoSrc}
                alt={`Logo of ${education.collegeName}`}
                width={48}
                height={48}
                className="mr-2"
              />
              <div>
                <h3 className="font-semibold mb-1">{education.collegeName}</h3>
                {education.course && <p>{education.course}</p>}
                {education.date && <p>{education.date}</p>}
                {education.gpa && <p>GPA: {education.gpa}</p>}
                {education.relevantCoursework && <p>Relevant Coursework: {education.relevantCoursework}</p>}
                {education.accomplishments && education.accomplishments.length > 0 && (
                  <div>
                    <p>Accomplishments:</p>
                    {education.accomplishments.map((accomplishment: string, index: number) => (
                      <li key={index}>{accomplishment}</li>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="border-t border-gray-300 dark:border-gray-700 my-8"></div>
      {/*Skills section*/}
      <div style={sectionStyles}>
        <h2 className="text-xl font-semibold mb-2">Skills</h2>
        {skillsData.map((skillCategory, categoryIndex) => (
          <div key={categoryIndex}>
            <p>
              <u>{skillCategory.category}</u>: {skillCategory.items.join(', ')}
            </p>
          </div>
        ))}
      </div>
      <div className="border-t border-gray-300 dark:border-gray-700 my-8"></div>
      {/* Volunteering section */}
      <div style={sectionStyles}>
        <h2 className="text-xl font-semibold mb-2">Volunteering</h2>
        {volunteeringData.map((volunteering, index) => (
          <div key={index} className="flex-item-start mb-4">
            <div className="flex items-start">
              <Image
                src={volunteering.logoSrc}
                alt={`Logo of ${volunteering.organizationName}`}
                width={48}
                height={48}
                className="mr-2"
              />
              <div>
                <h3 className="font-semibold mb-1">{volunteering.organizationName}</h3>
                {volunteering.title && <p>{volunteering.title}</p>}
                {volunteering.duration && <p>{volunteering.duration}</p>}
                {volunteering.bulletPoints && volunteering.bulletPoints.length > 0 && (
                  <div>
                    {volunteering.bulletPoints.map((point: string, index: number) => (
                      <li key={index}>{point}</li>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
