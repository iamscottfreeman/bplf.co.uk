import React from 'react';
import Image from 'next/image';

import { fonts } from '@/helpers/fonts';
import Container from '@/components/atoms/Container';
import Video from '@/components/atoms/Video';
import Button from '@/components/atoms/Button';

import img from '../../images/wpu-banner.jpg';

const FreeAffiliation = () => {
  return (
    <div className='bg-cover bg-center worlds-promo--background'>
      <div className='bg-white text-black py-12 worlds-promo--overlay'>
        <Container className='flex items-center justify-center flex-col-reverse lg:flex-row'>
          <div className='lg:w-1/3 flex flex-col justify-center'>
            <Video file='/videos/free-affiliation-2024.mp4' controls width={345} height={614} />
            <p className='lg:hidden mt-4'>
              <Button
                href='https://docs.google.com/forms/d/e/1FAIpQLSeNP456H9shkhC9FS6CB49bPKB7banKW0fh9RMLV7aKlEjK5A/viewform?vc=0&c=0&w=1&flr=0'
                target='_blank'
              >
                Affiliation Membership Form
              </Button>
            </p>
          </div>
          <div className='lg:w-2/3 flex flex-col justify-center text-center px-4'>
            <Image
              src={img}
              alt={'World Powerlifting Union'}
              className='rounded-lg mb-4 mt-4 lg:mt-0 hidden lg:block w-fit'
            />
            <h2 className={`${fonts.header.className} text-4xl md:text-6xl uppercase text-red-600 mb-4`}>
              Free WPU Affiliation 2024
            </h2>
            <p
              className={`${fonts.header.className} text-xl md:text-2xl lg:text-3xl uppercase text-red-600 lg:text-black mb-6`}
            >
              A very special message from Marcus Griffiths
            </p>
            <p className='hidden lg:block'>
              <Button
                href='https://docs.google.com/forms/d/e/1FAIpQLSeNP456H9shkhC9FS6CB49bPKB7banKW0fh9RMLV7aKlEjK5A/viewform?vc=0&c=0&w=1&flr=0'
                target='_blank'
              >
                Affiliation Membership Form
              </Button>
            </p>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default FreeAffiliation;
