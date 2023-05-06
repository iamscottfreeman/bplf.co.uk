import React from 'react';

import { fonts } from '@/helpers/fonts';

type Props = {
  author: string;
};

const Testimonial = ({ author, children }: React.PropsWithChildren<Props>) => {
  return (
    <div className='p-5 lg:p-10'>
      <div className='bg-white shadow lg:shadow-xl rounded-md p-4 lg:p-8 text-center'>
        <blockquote className='text-2xl text-red-600'>{children}</blockquote>
        <div className={`${fonts.header.className} mt-4 text-xl uppercase`}>{author}</div>
      </div>
    </div>
  );
};

export default Testimonial;
