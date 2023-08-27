// pages/index.tsx (home)
import Image from 'next/image';
import Head from 'next/head';
import { NextPage } from 'next';

import TypeAnimation from '../components/TypeAnimation';
import { useIsMobile } from '../context/useIsMobile';
import LinkButton from '../components/LinkButton';
import Button from '../components/Button';
import { homeAnimatedStrings, homeImgSrc, homePageHeader, homeText } from '../../content/homeContent';

const Home: NextPage = () => {
  const { isMobile, viewportWidth } = useIsMobile();

  const imageWidth = isMobile ? 160 : Math.min(viewportWidth - 40, 300); 
  const imageHeight = imageWidth;

  return (
    <div className="flex flex-col items-center mt-[15vh]">
      <Head>
        <title>{homePageHeader}</title>
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
        <TypeAnimation strings={homeAnimatedStrings} delay={2000} />
        <div className="space-x-4 mt-2">
          <Button text="Resume" href="resume/Resume_AnjaliMurali.pdf" />
          <LinkButton text="Contact Me" href="/contact" />
        </div>
      </div>
    </div>
  );
};

export default Home;
