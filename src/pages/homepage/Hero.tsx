import React from 'react';
import Link from 'next/link';

import { fonts } from '@/helpers/fonts';
import Button from '@/components/atoms/Button';
import backgroundImage from '../../images/stock/4.jpg';
import IconMember from '@/components/icons/IconMember';
import IconEvent from '@/components/icons/IconEvent';
import IconContact from '@/components/icons/IconContact';
import Container from '@/components/atoms/Container';

const Hero = () => {
  return (
    <section
      style={{
        backgroundImage: `url(${backgroundImage.src})`
      }}
      className='relative py-16 md:py-24 bg-cover bg-center'
    >
      <div className='absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-r from-black' />
      <Container className='relative z-10 text-offwhite text-center md:text-left text-shadow'>
        <h2 className={`${fonts.header.className} uppercase`}>
          <div className='text-offwhite text-5xl md:text-6xl lg:text-8xl'>Push harder today</div>
          <div className='text-red-600 text-3xl md:text-4xl lg:text-6xl'>if you want a different tomorrow</div>
        </h2>
        <div className='my-4 md:text-xl lg:text-2xl'>
          Compete with the best lifters in Great Britain and the world with the BPF &amp; IPL.
        </div>
        <div className='my-4 lg:text-xl'>
          Full power, single lifts, strict curl, raw, classic raw single-ply, multi-ply, para bench & para deadlift.
        </div>
        <div className='my-4 lg:text-xl'>Something for every level, age and gender.</div>
        <div className='my-4 lg:text-xl'>Separate tested and non-tested divisions.</div>
        <div className='my-4 lg:text-xl italic'>The BPF is the only UK route to Mr Olympia in the USA!</div>
        <div className='flex items-center flex-col md:flex-row space-y-4 md:flex md:space-y-0 md:space-x-6 mt-8'>
          <Link
            href='#'
            className={`${fonts.header.className} bg-red-700 rounded-md text-offwhite px-8 py-4 text-xl uppercase hover:bg-red-600 transition-colors`}
          >
            <IconMember className='inline mr-2' />
            Membership
          </Link>
          <Link
            href='#'
            className={`${fonts.header.className} bg-red-700 rounded-md text-offwhite px-8 py-4 text-xl uppercase hover:bg-red-600 transition-colors`}
          >
            <IconEvent className='inline mr-2' />
            Events
          </Link>
          <Button href='#'>
            <IconContact className='inline mr-2' />
            Contact Us
          </Button>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
