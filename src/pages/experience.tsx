// pages/experience.tsx
import Image from 'next/image';
import Head from 'next/head';
import { NextPage } from 'next';

import { experiencePageDescription, experiencePageHeader, experienceTimelineItems } from '../../content/experienceContent';

const ExperiencePage: NextPage = () => {
  return (
    <div className="mx-auto mt-8">
      <Head>
        <title>{experiencePageHeader}</title>
        <meta name="description" content={experiencePageDescription} />
      </Head>
      <h1 className="text-4xl font-bold mt-[7.5vh] mb-8 text-center">My Work Experience</h1>
      <div className="w-full max-w-6xl mx-auto px-4 md:px-6 py-12">
        <div className="flex flex-col justify-center divide-y divide-gray-300 dark:divide-gray-600 space-y-8">
          <div className="-my-6">
            {experienceTimelineItems.map((item, index) => (
              <div key={index} className="relative pl-8 sm:pl-32 py-6 group">
                <div className="flex items-center mb-4">

                  <Image
                    src={item.company.logoUrl}
                    alt={`Logo of ${item.company.name}`}
                    width={64}
                    height={64}
                    className="mr-2"
                  />

                  <div className="font-medium text-2xl sm:mb-0">
                    <a
                      href={item.company.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-indigo-500 transition-colors"
                    >
                      {item.company.name}
                    </a>
                  </div>

                </div>
                <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-gray-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-indigo-600 after:border-4 after:box-content after:border-gray-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
                  <time className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-end text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 pr-2">
                    {item.date}
                  </time>
                  <div className="text-xl font-bold mt-2">{item.title}</div>
                </div>
                <ul className="list-disc list-inside">
                  {item.content.map((bullet, bulletIndex) => (
                    <li key={bulletIndex} className="pl-5 relative">{bullet}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperiencePage;
