import React from 'react';
import Link from 'next/link';

import Button from '@/components/atoms/Button';
import { fonts } from '@/helpers/fonts';

type Props = {
  title: string;
  link: string;
  extract: string;
  isLast?: boolean;
};

const BlogLink = ({ title, link, extract, isLast = false }: Props) => {
  return (
    <>
      <div className='mb-4'>
        <div className='flex flex-col lg:flex-row justify-between lg:items-center'>
          <div className='mr-4'>
            <h2 className={`${fonts.header.className} uppercase text-4xl`}>
              <Link href={link}>{title}</Link>
            </h2>
            <p className='mb-2'>{extract}</p>
          </div>

          <div className='whitespace-nowrap'>
            <Button href={link}>Read More</Button>
          </div>
        </div>
      </div>
      {!isLast && <hr className='border-red-800 col-span-3 my-4' />}
    </>
  );
};

export default BlogLink;
