import Head from 'next/head';
import Image from 'next/image';

import { fonts } from '@/helpers/fonts';
import Header from '@/components/header/Header';
import Navbar from '@/components/navigation/Navbar';
import Footer from '@/components/footer/Footer';
import PageHeader from '@/components/atoms/PageHeader';
import Container from '@/components/atoms/Container';
import Button from '@/components/atoms/Button';
import IconBook from '@/components/icons/IconBook';

import img1 from '././img1.jpeg';
import img2 from './img2.jpg';

export default function About() {
  return (
    <>
      <Head>
        <title>BPF Acadamy | British Powerlifting Federation</title>
      </Head>
      <Header />
      <Navbar />
      <main>
        <section>
          <PageHeader title='BPF Acadamy' />
          <Container className='py-10'>
            <div className='flex flex-col lg:flex-row space-x-4 items-center'>
              <div className='lg:w-3/5'>
                <h3 className={`${fonts.header.className} uppercase text-4xl text-red-600 mb-2`}>
                  Take your training to the next level
                </h3>
                <p className='mb-4'>
                  The first ever powerlifting and weightlifting academy in England founded in 2000 by the British
                  Powerlifting Federation.
                </p>
                <h3 className={`${fonts.header.className} uppercase text-4xl text-red-600 mb-2`}>
                  Coaching from world-class athletes
                </h3>
                <p className='mb-4'>
                  From beginners to advanced, we work towards your goals with you in our Teaching Facility.
                </p>
                <p className='mb-4'>
                  Increase fitness, fat loss, and everyday functional strength, whilst also having an emphasis on
                  mobility work, to not only keep you moving as you get older but even regain your former glory.
                  Allowing you to stay fit and active long into life.
                </p>
                <p className='mb-4'>
                  We also cater for British, World, Commonwealth, and Olympic athletes. Honing skills and Technique.
                </p>
                <h3 className={`${fonts.header.className} uppercase text-4xl text-red-600 mb-2`}>
                  Learn to lift correctly, efficiently, and safely, at the BPF Academy
                </h3>
              </div>
              <div className='hidden lg:block lg:w-2/5'>
                <Image src={img1} alt='' className='rounded-md' />
              </div>
            </div>
            <div className='flex justify-center my-10 text-center bg-red-900 text-black p-10 rounded-md'>
              <div className=''>
                <h2 className={`${fonts.header.className} uppercase text-white text-6xl mb-2`}>
                  Book Your Next Session
                </h2>
                <div>
                  <Button
                    href='https://www.picktime.com/fa097385-2756-4a36-a822-b7d866da754f'
                    target='_blank'
                    className='shadow-2xl shadow-black'
                    xl
                  >
                    Book Now
                    <IconBook className='ml-4 inline-block align-middle w-9 h-9' />
                  </Button>
                </div>
              </div>
            </div>
            <div className='flex flex-col justify-center my-10'>
              <div>
                <h2 className={`${fonts.header.className} uppercase text-5xl mb-4 text-center`}>
                  Tailor-made Packages Just For You
                </h2>
              </div>
              <div className='grid lg:grid-cols-2 xl:grid-cols-4 space-x-4 space-y-4 -ml-4 -mt-4'>
                <div className='ml-4 mt-4 border-2 border-slate-300 rounded-md'>
                  <div className='bg-slate-300 text-black overflow-hidden p-2 text-center'>
                    <h3 className={`${fonts.header.className} uppercase text-5xl`}>Silver</h3>
                    <p className='text-sm uppercase'>Standard</p>
                  </div>
                  <div className='text-center'>
                    <div className={`${fonts.header.className} uppercase text-4xl p-4`}>£200</div>
                    <p className='mb-4'>10 sessions</p>
                    <p className='mb-4'>60 minute sessions</p>
                    <p className='mb-4'>
                      10 sessions must be used
                      <br />
                      in an 8 week period
                    </p>
                    <p className='mb-4'>
                      <Button href='https://www.picktime.com/fa097385-2756-4a36-a822-b7d866da754f' target='_blank'>
                        Book Now
                      </Button>
                    </p>
                  </div>
                </div>
                <div className='border-2 border-slate-200 rounded-md'>
                  <div className='bg-slate-200 text-black overflow-hidden p-2 text-center'>
                    <h3 className={`${fonts.header.className} uppercase text-5xl`}>Silver</h3>
                    <p className='text-sm uppercase'>Premium</p>
                  </div>
                  <div className='text-center'>
                    <div className={`${fonts.header.className} uppercase text-4xl p-4`}>£300</div>
                    <p className='mb-4'>18 sessions</p>
                    <p className='mb-4'>60 minute sessions</p>
                    <p className='mb-4'>
                      18 sessions must be used
                      <br />
                      in an 8 week period
                    </p>
                    <p className='mb-4'>
                      <Button href='https://www.picktime.com/fa097385-2756-4a36-a822-b7d866da754f' target='_blank'>
                        Book Now
                      </Button>
                    </p>
                  </div>
                </div>
                <div className='border-2 border-yellow-500 rounded-md'>
                  <div className='bg-yellow-500 text-black overflow-hidden p-2 text-center'>
                    <h3 className={`${fonts.header.className} uppercase text-5xl`}>Gold</h3>
                    <p className='text-sm uppercase'>Standard</p>
                  </div>
                  <div className='text-center'>
                    <div className={`${fonts.header.className} uppercase text-4xl p-4`}>£320</div>
                    <p className='mb-4'>16 sessions</p>
                    <p className='mb-4'>60 minute sessions</p>
                    <p className='mb-4'>
                      16 sessions must be used
                      <br />
                      in an 12 week period
                    </p>
                    <p className='mb-4'>
                      <Button href='https://www.picktime.com/fa097385-2756-4a36-a822-b7d866da754f' target='_blank'>
                        Book Now
                      </Button>
                    </p>
                  </div>
                </div>
                <div className='border-2 border-yellow-400 rounded-md'>
                  <div className='bg-yellow-400 text-black overflow-hidden p-2 text-center'>
                    <h3 className={`${fonts.header.className} uppercase text-5xl`}>Gold</h3>
                    <p className='text-sm uppercase'>Premium</p>
                  </div>
                  <div className='text-center'>
                    <div className={`${fonts.header.className} uppercase text-4xl p-4`}>£400</div>
                    <p className='mb-4'>24 sessions</p>
                    <p className='mb-4'>60 minute sessions</p>
                    <p className='mb-4'>
                      24 sessions must be used
                      <br />
                      in an 12 week period
                    </p>
                    <p className='mb-4'>
                      <Button href='https://www.picktime.com/fa097385-2756-4a36-a822-b7d866da754f' target='_blank'>
                        Book Now
                      </Button>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className='flex flex-col lg:flex-row justify-center items-center'>
              <div className='lg:w-1/2 shrink-0 lg:px-10'>
                <h3 className={`${fonts.header.className} uppercase text-4xl p-4 lg:leading-relaxed text-center`}>
                  HOME OF 5 TIMES MR OLYMPIA MR MARCUS GRIFFITHS AND THE BRITISH POWERLIFTING TEAM
                </h3>
              </div>
              <div className='lg:w-1/2 shrink-0'>
                <Image src={img2} alt='' className='rounded-md' />
              </div>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
