import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import bpfLogo from '../../images/logo.png';
import iplLogo from '../../images/ipl-logo.jpg';
import Button from '../atoms/Button';
import { fonts } from '@/helpers/fonts';
import IconPin from '../icons/IconPin';
import IconPhone from '../icons/IconPhone';
import IconMail from '../icons/IconMail';
import IconFacebook from '../icons/IconFacebook';
import IconInstagram from '../icons/IconInstagram';
import IconYouTube from '../icons/IconYouTube';
import Container from '../atoms/Container';

const Footer = () => {
  return (
    <footer>
      <Container className='pt-4'>
        <div className='flex flex-col md:flex-row justify-between my-4 space-y-6 md:space-y-0'>
          <div className='flex flex-col mb-4 items-start'>
            <div className='mb-8 md:mb-0 flex items-center space-x-2 self-center'>
              <Image src={bpfLogo} alt='British Powerlifting Federation' width={150} />
              <Image src={iplLogo} alt='International Powerlifting League' width={150} />
            </div>
            <div className='flex flex-col items-start space-y-4'>
              <div>
                <Link
                  href='https://goo.gl/maps/ziGiLquFfupyB6XN8'
                  target='_blank'
                  className='text-gray-600 transition-colors hover:text-red-700 flex'
                >
                  <IconPin className='inline mr-1' />
                  The BPF Academy, <br className='lg:hidden' />
                  Unit 3 Baily Brook Business Park, <br />
                  Langley Mill, <br className='lg:hidden' />
                  NG16 4BE
                </Link>
              </div>
              <div>
                <Link href='tel:+441773687667' className='text-gray-600 transition-colors hover:text-red-700'>
                  <IconPhone className='inline mr-1' />
                  01773 687 667
                </Link>
              </div>
              <div className='mt-4'>
                <Link
                  href='mailto:bpf.secretary@gmail.com'
                  className='text-gray-600 transition-colors hover:text-red-700'
                >
                  <IconMail className='inline mr-1' />
                  bpf.secretary@gmail.com
                </Link>
              </div>
            </div>
          </div>
          <div>
            <h4 className={`${fonts.header.className} text-2xl uppercase mb-2`}>Quick Links</h4>
            <ul>
              <li className='mb-1'>Home</li>
              <li className='mb-1'>About</li>
              <li className='mb-1'>Membership</li>
              <li className='mb-1'>Events</li>
              <li className='mb-1'>Results</li>
              <li className='mb-1'>Blog</li>
              <li className='mb-1'>British Strict Curl Federation</li>
            </ul>
          </div>
          <div>
            <h4 className={`${fonts.header.className} text-2xl uppercase mb-2`}>Opening Hours</h4>
            <ul>
              <li className='mb-1'>Monday: 10am - 9pm</li>
              <li className='mb-1'>Tuesday: Closed</li>
              <li className='mb-1'>Wednesday: 10am - 9pm</li>
              <li className='mb-1'>Thursday: 10am - 9pm</li>
              <li className='mb-1'>Friday: 10am - 9pm</li>
              <li className='mb-1'>Saturday: 9am - 4pm</li>
              <li>Sunday: 9am - 2pm</li>
            </ul>
          </div>
        </div>
      </Container>
      <div className='bg-gray-800 text-offwhite py-4 text-sm'>
        <Container>
          <div className='flex flex-col lg:flex-row justify-between px-4'>
            <div className='text-center lg:text-left'>
              Copyright &copy; British Powerlifting Federation, 2023. <br className='lg:hidden' />
              All rights reserved.
            </div>
            <div className='flex flex-1 justify-center mt-4 lg:mt-0 lg:justify-end'>
              <div className='mr-2'>
                <Link href='https://www.facebook.com/bplf.co.uk/' target='_blank'>
                  <IconFacebook className='inline w-6 h-6 fill-gray-200 transition hover:fill-white' />
                </Link>
              </div>
              <div className='mr-2'>
                <Link href='https://www.instagram.com/bpf_ipl_gb/' target='_blank'>
                  <IconInstagram className='inline w-6 h-6 fill-gray-200 transition hover:fill-white' />
                </Link>
              </div>
              <div className='mr-2'>
                <Link
                  href='https://www.youtube.com/channel/UCnB13-MXZ7o9CX3ANKI39jg/videos?view=0&sort=p'
                  target='_blank'
                >
                  <IconYouTube className='inline w-6 h-6 fill-gray-200 transition hover:fill-white' />
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </footer>
  );
};

export default Footer;
