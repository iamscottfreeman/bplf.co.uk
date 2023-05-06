import { fonts } from '@/helpers/fonts';
import Link from 'next/link';
import React from 'react';

type Props = {
  href: string;
};

const Button = ({ href, children }: React.PropsWithChildren<Props>) => {
  return (
    <Link
      href={href}
      className={`${fonts.header.className} text-shadow inline-block bg-red-700 rounded-md text-offwhite px-8 py-4 text-xl uppercase hover:bg-red-600 transition-colors`}
    >
      {children}
    </Link>
  );
};

export default Button;
