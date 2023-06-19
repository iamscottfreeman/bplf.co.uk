import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import { fonts } from '@/helpers/fonts';
import logo from '../../images/logo.png';
import IconPin from '../icons/IconPin';
import IconMail from '../icons/IconMail';
import IconPhone from '../icons/IconPhone';
import IconFacebook from '../icons/IconFacebook';
import IconInstagram from '../icons/IconInstagram';
import IconYouTube from '../icons/IconYouTube';
import Container from '../atoms/Container';

const Header = () => {
  return (
    <header className='bpf-header sticky top-0 z-50 md:relative'>
      <Container>
        <div className='flex items-center'>
          <Link href='/'>
            <Image src={logo} alt='British Powerlifting Federation' width={144} className='w-20 md:w-36' />
          </Link>
          <div className='md:ml-2 flex flex-col flex-1'>
            <h1
              className={`${fonts.header.className} m-0 text-center text-3xl md:text-4xl lg:text-5xl md:text-left uppercase font-bold md:mb-4 leading-7`}
            >
              <Link href='/'>British Powerlifting Federation</Link>
            </h1>
            <div className='hidden md:flex space-x-4 text-sm'>
              <div className='flex items-center whitespace-nowrap'>
                <Link href='tel:+441773687667' className='text-gray-600 transition-colors hover:text-red-700'>
                  <IconPhone className='inline mr-1' />
                  01773 687 667
                </Link>
              </div>
              <div className='flex items-center whitespace-nowrap'>
                <Link
                  href='mailto:bpf.secretary@gmail.com'
                  className='text-gray-600 transition-colors hover:text-red-700'
                >
                  <IconMail className='inline mr-1' />
                  bpf.secretary@gmail.com
                </Link>
              </div>
              <div className='items-center hidden lg:flex'>
                <Link
                  href='https://goo.gl/maps/ziGiLquFfupyB6XN8'
                  target='_blank'
                  className='text-gray-600 transition-colors hover:text-red-700'
                >
                  <IconPin className='inline mr-1' />
                  The BPF Academy
                  <span className='hidden 2xl:inline'>, Unit 3 Baily Brook Business Park</span>, Langley Mill, NG16 4BE
                </Link>
              </div>
              <div className='flex flex-1 justify-end'>
                <div className='mr-2'>
                  <Link href='https://www.facebook.com/bplf.co.uk/' target='_blank'>
                    <IconFacebook className='inline w-6 h-6 fill-gray-700 transition hover:fill-red-700' />
                  </Link>
                </div>
                <div className='mr-2'>
                  <Link href='https://www.instagram.com/bpf_ipl_gb/' target='_blank'>
                    <IconInstagram className='inline w-6 h-6 fill-gray-700 transition hover:fill-red-700' />
                  </Link>
                </div>
                <div className='mr-2'>
                  <Link
                    href='https://www.youtube.com/channel/UCnB13-MXZ7o9CX3ANKI39jg/videos?view=0&sort=p'
                    target='_blank'
                  >
                    <IconYouTube className='inline w-6 h-6 fill-gray-700 transition hover:fill-red-700' />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
