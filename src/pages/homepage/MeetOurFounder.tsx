import React from 'react';
import Image from 'next/image';

import { fonts } from '@/helpers/fonts';
import Button from '@/components/atoms/Button';
import Container from '@/components/atoms/Container';

import backgroundImage from '../../images/stock/6.jpg';
import marcus from '../../images/marcus.jpg';

const MeetOurFounder = () => {
  return (
    <section
      style={{
        backgroundImage: `url(${backgroundImage.src})`
      }}
      className='relative py-16 md:py-24 bg-cover bg-center'
    >
      <div className='absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-r from-black' />
      <Container className='relative z-10 text-offwhite'>
        <div className='flex flex-col lg:flex-row justify-center items-center'>
          <div className='text-center lg:text-left lg:w-1/2'>
            <div
              className={`${fonts.header.className} text-3xl md:text-4xl lg:text-5xl uppercase text-red-600 mb-4 text-shadow`}
            >
              A Word From The President
            </div>
            <div className='text-xl pr-4 mb-4 text-shadow xl:pr-8 lg:leading-10'>
              Sports Prep began in 2011 as a Sports and Mentoring Outreach. Sports Prep was founded by former Olympic
              Weightlifter and Coach, Marcus Griffiths. We have evolved over the years as hundreds of athletes, youths
              and adults have utilized Sports Prep to prepare for competitive level sports, participate in Powerlifting
              recreational sports, or to simply maintain a healthy lifestyle. From day one, we have always strived to
              meet the wellness needs of athletes, families and communities.
            </div>
            <div className='flex flex-col md:flex-row justify-center md:justify-start space-x-4 space-y-4 -ml-4'>
              <div>
                <Button href='/meet-the-team' className='ml-4 mt-4'>
                  Meet the team
                </Button>
              </div>
              <div>
                <Button href='/blog'>Read the Blog</Button>
              </div>
            </div>
          </div>
          <div className='text-center mt-4 lg:mt-0 lg:text-left lg:w-1/2'>
            <Image src={marcus} alt='' className='rounded-md' />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default MeetOurFounder;
