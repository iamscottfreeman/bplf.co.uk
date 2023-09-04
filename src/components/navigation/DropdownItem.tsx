import React from 'react';

type Props = {
  href: string;
  target?: '_blank';
};

const DropdownItem = ({ href, target, children }: React.PropsWithChildren<Props>) => {
  return (
    <li>
      <a
        href={href}
        target={target ? target : ''}
        className='block text-gray-300 hover:bg-gray-600 hover:text-offwhite rounded-md p-2 text-sm font-medium'
      >
        {children}
      </a>
    </li>
  );
};

export default DropdownItem;
