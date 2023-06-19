import React from 'react';
import Image from 'next/image';

import { fonts } from '@/helpers/fonts';
import Container from '@/components/atoms/Container';
import Slider from '@/components/atoms/Slider';

import img1 from '../../images/stock/1.jpg';
import img2 from '../../images/stock/2.jpg';
import img3 from '../../images/stock/3.jpg';
import img4 from '../../images/stock/4.jpg';
import img5 from '../../images/stock/5.jpg';
import img6 from '../../images/stock/6.jpg';
import img7 from '../../images/stock/7.jpg';
import img8 from '../../images/stock/8.jpg';
import img9 from '../../images/stock/9.jpg';

const Welcome = () => {
  return (
    <section className='my-20'>
      <Container className='flex flex-col md:flex-row justify-center items-center'>
        <div className='w-full md:w-2/3 px-4'>
          <div
            className={`${fonts.header.className} text-3xl md:text-4xl lg:text-5xl mb-4 text-center uppercase text-red-600`}
          >
            Welcome to the
            <br />
            British Powerlifting Federation
          </div>
          <div className={`${fonts.header.className} text-2xl lg:text-3xl mb-4 text-center uppercase`}>
            The BPF is the only federation with its own academy for lifters in the UK
          </div>
          <div className={`${fonts.header.className} text-xl mb-4 text-center uppercase`}>
            Obey the law. Take care of the members. Take care of our employees.
            <br />
            Respect our Sponsors. Welcome people to the BPF/IPL family.
          </div>
          <div className={`${fonts.header.className} text-3xl mb-4 text-center uppercase text-red-600`}>
            The lifters federation
          </div>
        </div>
        <div className='w-full md:w-1/3 px-4'>
          <Slider>
            <Image src={img1} alt='' className='rounded-md' />
            <Image src={img2} alt='' className='rounded-md' />
            <Image src={img3} alt='' className='rounded-md' />
            <Image src={img4} alt='' className='rounded-md' />
            <Image src={img5} alt='' className='rounded-md' />
            <Image src={img6} alt='' className='rounded-md' />
            <Image src={img7} alt='' className='rounded-md' />
            <Image src={img8} alt='' className='rounded-md' />
            <Image src={img9} alt='' className='rounded-md' />
          </Slider>
        </div>
      </Container>
    </section>
  );
};

export default Welcome;
