import Head from 'next/head';
import Image from 'next/image';

import { fonts } from '@/helpers/fonts';
import Header from '@/components/header/Header';
import Navbar from '@/components/navigation/Navbar';
import Footer from '@/components/footer/Footer';
import PageHeader from '@/components/atoms/PageHeader';
import Container from '@/components/atoms/Container';
import Button from '@/components/atoms/Button';

import img01 from './01.jpg';
import img02 from './02.jpg';
import img03 from './03.jpg';
import img04 from './04.jpg';
import img05 from './05.jpg';
import img06 from './06.jpg';
import img07 from './07.jpg';
import img08 from './08.jpg';
import img09 from './09.jpg';
import img10 from './10.jpg';

export default function Events() {
  return (
    <>
      <Head>
        <title>Events | British Powerlifting Federation</title>
      </Head>
      <Header />
      <Navbar />
      <main>
        <section>
          <PageHeader title='Events' />
          <Container className='py-10'>
            <div className='lg:grid grid-cols-2 space-x-4 space-y-10 -ml-4 -mt-10'>
              <div className='ml-4 mt-10 flex flex-col items-center text-center'>
                <Image src={img01} alt='' className='w-3/4 rounded-md mb-4' />
                <h2 className={`${fonts.header.className} uppercase text-red-600 text-4xl mb-2`}>
                  IPL European and Commonwealth Championships
                </h2>
                <p className={`${fonts.header.className} text-3xl uppercase mb-2`}>30th June - 2nd July 2023</p>
                <p className='mb-2'>Tested and none tested platforms</p>
                <p className='mb-2'>
                  Old Tyme Strength
                  <br />
                  Unit 1E
                  <br />
                  Victoria Street
                  <br />
                  Mansfield
                  <br />
                  NG18 5RR
                </p>
                <p className='mb-2'>SORRY PRE ORDER T SHIRTS NOW SOLD OUT</p>
                <p className='mb-2'>
                  <Button href='https://forms.gle/UZg339LPBaBT6U9RA' target='_blank'>
                    Entry Form
                  </Button>
                </p>
              </div>
              <div className='ml-4 mt-10 flex flex-col items-center text-center'>
                <Image src={img02} alt='' className='w-3/4 rounded-md mb-4' />
                <h2 className={`${fonts.header.className} uppercase text-red-600 text-4xl mb-2`}>Mansfield Mania</h2>
                <p className={`${fonts.header.className} text-3xl uppercase mb-2`}>5th - 6th August 2023</p>
                <p className='mb-2'>Qualifier for 2024</p>
                <p className='mb-2'>
                  Old Tyme Strength
                  <br />
                  Unit 1E
                  <br />
                  Victoria Street
                  <br />
                  Mansfield
                  <br />
                  NG18 5RR
                </p>
                <p className='mb-2'>
                  <Button href='https://forms.gle/UZg339LPBaBT6U9RA' target='_blank'>
                    Entry Form
                  </Button>
                </p>
              </div>
              <div className='ml-4 mt-10 flex flex-col items-center text-center'>
                <Image src={img03} alt='' className='w-3/4 rounded-md mb-4' />
                <h2 className={`${fonts.header.className} uppercase text-red-600 text-4xl mb-2`}>Mayhem Summer Bash</h2>
                <p className={`${fonts.header.className} text-3xl uppercase mb-2`}>17th September 2023</p>
                <p className='mb-2'>Qualifier for 2024</p>
                <p className='mb-2'>
                  Mayhem Gym
                  <br />
                  6 Bittern Way
                  <br />
                  Boston
                  <br />
                  PE21 7NX
                </p>
                <p className='mb-2'>
                  <Button href='https://forms.gle/mKtLC9rL6t4PfjZe8' target='_blank'>
                    Entry Form
                  </Button>
                </p>
              </div>
              <div className='ml-4 mt-10 flex flex-col items-center text-center'>
                <Image src={img04} alt='' className='w-3/4 rounded-md mb-4' />
                <h2 className={`${fonts.header.className} uppercase text-red-600 text-4xl mb-2`}>Women of Iron</h2>
                <p className={`${fonts.header.className} text-3xl uppercase mb-2`}>27th August 2023</p>
                <p className='mb-2'>Prize meet</p>
                <p className='mb-2'>
                  The BPF Academy
                  <br />
                  Unit 3 Baily Brook Business Park
                  <br />
                  Langley Mill
                  <br />
                  NG16 4BE
                </p>
                <p className='mb-2'>
                  <Button href='https://forms.gle/MjNyoChmXHYdkQ1KA' target='_blank'>
                    Entry Form
                  </Button>
                </p>
              </div>
              <div className='ml-4 mt-10 flex flex-col items-center text-center'>
                <Image src={img05} alt='' className='w-3/4 rounded-md mb-4' />
                <h2 className={`${fonts.header.className} uppercase text-red-600 text-4xl mb-2`}>Day of the Dead</h2>
                <p className={`${fonts.header.className} text-3xl uppercase mb-2`}>1st October 2023</p>
                <p className='mb-2'>Prize meet</p>
                <p className='mb-2'>
                  The BPF Academy
                  <br />
                  Unit 3 Baily Brook Business Park
                  <br />
                  Langley Mill
                  <br />
                  NG16 4BE
                </p>
                <p className='mb-2'>
                  <Button
                    href='https://docs.google.com/forms/d/e/1FAIpQLSdLaND0TXR9AuWliDY57T-rKk02w74TGfJUAWgrwIAuy2Y6sQ/viewform'
                    target='_blank'
                  >
                    Entry Form
                  </Button>
                </p>
              </div>
              <div className='ml-4 mt-10 flex flex-col items-center text-center'>
                <Image src={img06} alt='' className='w-3/4 rounded-md mb-4' />
                <h2 className={`${fonts.header.className} uppercase text-red-600 text-4xl mb-2`}>
                  IPL Tested World Championships
                </h2>
                <p className={`${fonts.header.className} text-3xl uppercase mb-2`}>18th - 22nd October 2023</p>
                <p className='mb-2'>
                  Royal Court Hotel
                  <br />
                  Tamworth
                  <br />
                  Kersley
                  <br />
                  Coventry
                  <br />
                  CV7 8JG
                </p>
                <p className='mb-2'>
                  <Button href='https://ipl-tested-world-champs.scottfreeman.net/' target='_blank'>
                    Entry Form
                  </Button>
                </p>
              </div>
              <div className='ml-4 mt-10 flex flex-col items-center text-center'>
                <Image src={img07} alt='' className='w-3/4 rounded-md mb-4' />
                <h2 className={`${fonts.header.className} uppercase text-red-600 text-4xl mb-2`}>Mr Olympia</h2>
                <p className={`${fonts.header.className} text-3xl uppercase mb-2`}>2nd - 5th November 2023</p>
                <p className='mb-2'>Orlando, USA</p>
                <p className='mb-2'>By invite only</p>
              </div>
              <div className='ml-4 mt-10 flex flex-col items-center text-center'>
                <Image src={img08} alt='' className='w-3/4 rounded-md mb-4' />
                <h2 className={`${fonts.header.className} uppercase text-red-600 text-4xl mb-2`}>Record Breakers</h2>
                <p className={`${fonts.header.className} text-3xl uppercase mb-2`}>26th November 2023</p>
                <p className='mb-2'>Qualifier for 2024</p>
                <p className='mb-2'>
                  The BPF Academy
                  <br />
                  Unit 3 Baily Brook Business Park
                  <br />
                  Langley Mill
                  <br />
                  NG16 4BE
                </p>
                <p className='mb-2'>
                  <Button href='https://forms.gle/s2AEEvyQihuCYtqAA' target='_blank'>
                    Entry Form
                  </Button>
                </p>
              </div>
              <div className='ml-4 mt-10 flex flex-col items-center text-center'>
                <Image src={img09} alt='' className='w-3/4 rounded-md mb-4' />
                <h2 className={`${fonts.header.className} uppercase text-red-600 text-4xl mb-2`}>The Monty Crown</h2>
                <p className={`${fonts.header.className} text-3xl uppercase mb-2`}>3rd - 4th February 2024</p>
                <p className='mb-2'>
                  The BPF Academy
                  <br />
                  Unit 3 Baily Brook Business Park
                  <br />
                  Langley Mill
                  <br />
                  NG16 4BE
                </p>
                <p className='mb-2'>
                  <Button href='https://forms.gle/6hzVuQntesn4nchS6' target='_blank'>
                    Entry Form
                  </Button>
                </p>
              </div>
              <div className='ml-4 mt-10 flex flex-col items-center text-center'>
                <Image src={img10} alt='' className='w-3/4 rounded-md mb-4' />
                <h2 className={`${fonts.header.className} uppercase text-red-600 text-4xl mb-2`}>Mayhem in Boston</h2>
                <p className={`${fonts.header.className} text-3xl uppercase mb-2`}>25th March 2024</p>
                <p className='mb-2'>
                  This is the last qualifying comp for the 2024 British Championships, which is the only way to qualify
                  for the IPL tested world championships England 2024.
                </p>
                <p className='mb-2'>
                  Mayhem Gym
                  <br />
                  6 Bittern Way
                  <br />
                  Boston
                  <br />
                  PE21 7NX
                </p>
                <p className='mb-2'>
                  <Button href='https://forms.gle/s2AEEvyQihuCYtqAA' target='_blank'>
                    Entry Form
                  </Button>
                </p>
              </div>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
