import Head from 'next/head';
import Image from 'next/image';

import { fonts } from '@/helpers/fonts';
import Header from '@/components/header/Header';
import Navbar from '@/components/navigation/Navbar';
import Footer from '@/components/footer/Footer';
import PageHeader from '@/components/atoms/PageHeader';
import Container from '@/components/atoms/Container';
import Button from '@/components/atoms/Button';

import img06 from './06.jpg';
import img07 from './07.jpg';
import img10 from './10.jpg';
import recordbreakers from './recordbreakers.jpg';
import montycrown from './montycrown.jpg';

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
                <Image src={recordbreakers} alt='' className='w-3/4 rounded-md mb-4' />
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
                  Weigh in: 25th November 2023
                  <br />
                  10:00 - 12:00 - No appointment required
                  <br />
                  17:00 - 18:00 - By appointment only
                </p>
                <p className='mb-2'>
                  <Button href='https://forms.gle/s2AEEvyQihuCYtqAA' target='_blank'>
                    Entry Form
                  </Button>
                </p>
              </div>
              <div className='ml-4 mt-10 flex flex-col items-center text-center'>
                <Image src={montycrown} alt='' className='w-3/4 rounded-md mb-4' />
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
                <p className='mb-2'>Weigh in: 2nd February 2024</p>
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
                  Mayhem Gym
                  <br />
                  6 Bittern Way
                  <br />
                  Boston
                  <br />
                  PE21 7NX
                </p>
                <p className='mb-2'>
                  <Button
                    href='https://docs.google.com/forms/d/e/1FAIpQLSepFqkr1v5QdY3BvBOHUKeFY1qdVFD821uEi2hNkjq5kKXbRA/viewform?vc=0&c=0&w=1&flr=0'
                    target='_blank'
                  >
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
