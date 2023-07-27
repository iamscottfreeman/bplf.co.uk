import React from 'react';

import { fonts } from '@/helpers/fonts';
import Container from '@/components/atoms/Container';
import Video from '@/components/atoms/Video';
import Button from '@/components/atoms/Button';

const WorldsPromo = () => {
  return (
    <div className='bg-cover bg-center worlds-promo--background'>
      <div className='bg-white text-black py-12 worlds-promo--overlay'>
        <Container className='flex items-center justify-center flex-col lg:flex-row'>
          <div className='lg:w-1/3 flex justify-center'>
            <Video file='/videos/worlds-promo.mp4' muted loop controls width={345} height={614} />
          </div>
          <div className='lg:w-2/3 flex flex-col justify-center text-center'>
            <h2
              className={`${fonts.header.className} text-3xl md:text-4xl lg:text-8xl uppercase text-red-600 mb-4 lg:mb-8 mt-8 lg:mt-0`}
            >
              IPL WORLD CHAMPIONSHIPS 2023
            </h2>
            <p
              className={`${fonts.header.className} text-2xl md:text-3xl lg:text-5xl uppercase text-red-600 lg:text-black mb-4 lg:mb-8`}
            >
              COMING TO COVENTRY, UK
            </p>
            <p
              className={`${fonts.header.className} text-2xl md:text-3xl lg:text-5xl uppercase text-red-600 lg:text-black mb-4 lg:mb-8`}
            >
              18 - 23 OCTOBER
            </p>
            <p>
              <Button href='https://ipl-tested-world-champs.scottfreeman.net/' target='_blank'>
                See Details
              </Button>
            </p>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default WorldsPromo;
