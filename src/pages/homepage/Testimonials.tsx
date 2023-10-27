import React from 'react';

import { fonts } from '@/helpers/fonts';
import Slider from '@/components/atoms/Slider';
import IconStar from '@/components/icons/IconStar';

import Testimonial from './Testimonial';

const Testimonials = () => {
  return (
    <section className='bg-offwhite text-offblack'>
      <div className='py-10 flex flex-col justify-center items-center'>
        <div className={`${fonts.header.className} uppercase text-3xl md:text-4xl lg:text-5xl mb-4 flex items-center`}>
          <div className='hidden md:flex'>
            <IconStar />
            <IconStar />
            <IconStar />
          </div>
          <span className='md:px-4'>Testimonials</span>
          <div className='hidden md:flex'>
            <IconStar />
            <IconStar />
            <IconStar />
          </div>
        </div>
        <div className='w-full md:w-3/4 2xl:w-1/2'>
          <Slider interval={6}>
            <Testimonial author='Chris Roberts'>
              As a promoter, I can not recommend working with BPF enough. If you want to see a qualifier in your gym,
              get in touch! DON&apos;T FORGET, BPF IS THE ONLY UK ROUTE TO THE OLYMPIA (VEGAS)!
            </Testimonial>
            <Testimonial author='Phil Watkins'>
              Thank you Marcus MrO Griffiths the organisers/loaders/refs etc for a well run comp.
            </Testimonial>
            <Testimonial author='Chris Jenkins'>
              Fantastic weekend competing at the British powerlifting British championships. Felt great get back on the
              platform after lockdown. Thank you to the event organisers and everyone that wished me well.
            </Testimonial>
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
