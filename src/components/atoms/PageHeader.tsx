import React, { useEffect, useState } from 'react';
import Container from './Container';
import { fonts } from '@/helpers/fonts';

type Props = {
  title: string;
  subTitle?: string;
};

const PageHeader = ({ title, subTitle }: React.PropsWithChildren<Props>) => {
  const [image, setImage] = useState<string | undefined>();

  useEffect(() => {
    fetch('/api/header')
      .then((res) => res.json())
      .then((data) => setImage(data));
  }, []);

  return (
    <div
      style={{
        backgroundImage: `url(/headers/${image})`
      }}
      className='relative py-16 md:py-24 bg-cover bg-center'
    >
      <div className='absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-r from-black' />
      <Container className='relative z-10 text-offwhite text-center md:text-left text-shadow-xl'>
        <h2 className={`${fonts.header.className} uppercase`}>
          <div className='text-offwhite text-5xl md:text-6xl lg:text-8xl'>{title}</div>
          {subTitle && <div className='-mt-2 text-offwhite text-4xl md:text-5xl lg:text-7xl'>{subTitle}</div>}
        </h2>
      </Container>
    </div>
  );
};

export default PageHeader;
