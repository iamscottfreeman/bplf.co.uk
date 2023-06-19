import React from 'react';
import Link from 'next/link';

import { fonts } from '@/helpers/fonts';
import Button from '@/components/atoms/Button';

type Props = {
  title: string;
  link: string;
  isLast?: boolean;
};

const Result = ({ title, link, isLast = false }: Props) => {
  return (
    <>
      <h2 className={`${fonts.header.className} uppercase text-center md:text-right text-3xl col-span-2`}>
        <Link href={link} target='_blank'>
          {title}
        </Link>
      </h2>
      <div className='ml-4 md:w-56 text-center mt-4 md:mt-0 md:text-left'>
        <Button href={link} target='_blank'>
          Download
        </Button>
      </div>
      {!isLast && <hr className='border-red-800 col-span-3 my-4 md:my-0' />}
    </>
  );
};

export default Result;
