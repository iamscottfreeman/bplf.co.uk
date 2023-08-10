import React from 'react';
import Image, { StaticImageData } from 'next/image';

import { fonts } from '@/helpers/fonts';

type Props = {
  name: string;
  title: string;
  image: StaticImageData;
};

const Member = ({ name, title, image }: Props) => {
  return (
    <div className='ml-4 mb-4'>
      <div className='flex'>
        <div className='w-1/3 md:w-40 mr-4 mb-4 flex-shrink-0'>
          <Image src={image} alt={name} className='w-80 rounded-md' />
        </div>
        <div className='w-2/3 md:w-auto'>
          <h2 className={`${fonts.header.className} uppercase text-red-600 text-2xl mb-2`}>{name}</h2>
          <p className='mb-4'>{title}</p>
        </div>
      </div>
    </div>
  );
};

export default Member;
