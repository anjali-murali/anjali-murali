// pages/index.tsx (home)
import Image from 'next/image';
import Head from 'next/head';
import { NextPage } from 'next';

import TypeAnimation from '../components/TypeAnimation';
import { useIsMobile } from '../context/useIsMobile';
import Button from '../components/Button';
import { homeAnimatedStringDelay, homeAnimatedStrings, homeImgSrc, homePageDescription, homePageHeader, homeText } from '../../content/homeContent';
import { PORTFOLIO_OWNER_RESUME } from '../../content/siteConfig';

const Home: NextPage = () => {
  const { isMobile, viewportWidth } = useIsMobile();

  const imageWidth = isMobile ? 160 : Math.min(viewportWidth - 40, 300); 
  const imageHeight = imageWidth;

  return (
    <div className="flex flex-col items-center mt-[15vh] mx-auto">
      <Head>
        <title>{homePageHeader}</title>
        <meta name="description" content={homePageDescription} />
      </Head>
      <div className={`mb-8 relative ${isMobile ? 'w-40 h-40 rounded-full overflow-hidden' : 'w-60 h-100  md:rounded-tl-lg md:rounded-tr-lg md:rounded-bl-lg md:rounded-br-lg overflow-hidden max-w-xl'} mx-auto border-2 border-gray-200`}>
          <Image
            src={homeImgSrc}
            alt="Homepage Image"
            width={imageWidth}
            height={imageHeight}
            className={`${isMobile ? 'rounded-full' : 'md:rounded-tl-lg md:rounded-tr-lg md:rounded-bl-lg md:rounded-br-lg'}`}
            priority
            unoptimized
          />
      </div>

      <h1 className="text-4xl font-bold mb-2">{homeText}</h1>
      <div className="flex flex-col items-center">
        <TypeAnimation strings={homeAnimatedStrings} delay={homeAnimatedStringDelay} />
        <div className="flex space-x-4 mt-2">
          <Button text="Resume" href={PORTFOLIO_OWNER_RESUME} />
          <Button text="Contact Me" href="/contact" internal />
        </div>
      </div>
    </div>
  );
};

export default Home;
