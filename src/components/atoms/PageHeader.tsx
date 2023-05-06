import React from 'react';
import Container from './Container';
import { fonts } from '@/helpers/fonts';

type Props = {
  backgroundImage: any;
  title: string;
};

const PageHeader = ({ backgroundImage, title }: React.PropsWithChildren<Props>) => {
  return (
    <div
      style={{
        backgroundImage: `url(${backgroundImage.src})`
      }}
      className='relative py-16 md:py-24 bg-cover bg-center'
    >
      <div className='absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-r from-black' />
      <Container className='relative z-10 text-offwhite text-center md:text-left text-shadow'>
        <h2 className={`${fonts.header.className} uppercase`}>
          <div className='text-offwhite text-5xl md:text-6xl lg:text-8xl'>{title}</div>
        </h2>
      </Container>
    </div>
  );
};

export default PageHeader;
