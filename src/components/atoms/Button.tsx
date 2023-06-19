import { fonts } from '@/helpers/fonts';
import Link from 'next/link';
import React from 'react';

type Props = {
  href: string;
  target?: string;
  className?: string;
};

const Button = ({ href, target, className, children }: React.PropsWithChildren<Props>) => {
  return (
    <Link
      href={href}
      target={target}
      className={`${fonts.header.className} text-shadow inline-block bg-red-700 rounded-md text-offwhite px-8 py-4 text-xl uppercase hover:bg-red-600 transition-colors ${className}`}
    >
      {children}
    </Link>
  );
};

export default Button;
