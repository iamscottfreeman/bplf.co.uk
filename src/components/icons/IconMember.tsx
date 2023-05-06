import React from 'react';

type Props = {
  className?: string;
};

const IconMember = ({ className }: Props) => {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='currentColor' className={`w-6 h-6 ${className}`}>
      <path d='M10 8a3 3 0 100-6 3 3 0 000 6zM3.465 14.493a1.23 1.23 0 00.41 1.412A9.957 9.957 0 0010 18c2.31 0 4.438-.784 6.131-2.1.43-.333.604-.903.408-1.41a7.002 7.002 0 00-13.074.003z' />
    </svg>
  );
};

export default IconMember;
