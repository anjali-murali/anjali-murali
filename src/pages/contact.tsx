// pages/contact.tsx
import Head from 'next/head';
import Image from 'next/image';
import { NextPage } from 'next';

import { PORTFOLIO_OWNER_EMAIL, PORTFOLIO_OWNER_NAME, PORTFOLIO_OWNER_PLACE } from '../../content/siteConfig';
import Button from '../components/Button';
import { contactCardContent, contactPageDescription, contactPageHeader, contactSocials } from '../../content/contactContent';


const Contact: NextPage = () => {

  return (
    <>
      <Head>
        <title>{contactPageHeader}</title>
        <meta name="description" content={contactPageDescription} />
      </Head>
      <h1 className="text-4xl font-bold mt-[7.5vh] mb-8 text-center">Contact Me</h1>
      <div className="flex justify-center items-center">
        <div className="w-full max-w-[800px] bg-white dark:bg-gray-800 rounded-md shadow-md flex mb-8">
          <div className='w-2/5 h-full overflow-hidden rounded-md'>
            <Image
              src="/images/contact-img.jpeg"
              alt="Contact Picture"
              width='300'
              height='400'
              unoptimized
              priority
            />
          </div>
          <div className="w-3/5 p-4 flex flex-col justify-center items-center">
            <h1 className="text-xl font-semibold">{PORTFOLIO_OWNER_NAME}</h1>
            <div className="flex items-center mb-4">
              <Image src="/icons/locationpin-icon.png" width="48" height="48" alt="Location" className="w-6 h-6" />
              <p className="ml-2">{PORTFOLIO_OWNER_PLACE}</p>
            </div>
            {contactCardContent}
            <div className="flex items-center space-x-2">
              {contactSocials.map((method, index) => (
                <a key={index} href={method.link} target="_blank" rel="noopener noreferrer">
                  <Image src={method.iconSrc} width="48" height="48" alt={method.alt} className="w-6 h-6" />
                </a>
              ))}
            </div>
            <div className="flex items-center space-x-2 mt-4">
              <Button text="Send a message" href={`mailto:${PORTFOLIO_OWNER_EMAIL}`} icon={<Image src="/icons/send-icon.png" width="32" height="32" alt='send icon' className="w-5 h-5" />} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
