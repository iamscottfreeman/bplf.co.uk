import Head from 'next/head';
import Image from 'next/image';

import { fonts } from '@/helpers/fonts';
import Header from '@/components/header/Header';
import Navbar from '@/components/navigation/Navbar';
import Footer from '@/components/footer/Footer';
import PageHeader from '@/components/atoms/PageHeader';
import Container from '@/components/atoms/Container';
import Button from '@/components/atoms/Button';

import img10 from './10.jpg';
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
                <p className={`${fonts.header.className} text-3xl uppercase mb-2`}>3rd March 2024</p>
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
              <div className='ml-4 mt-10 flex flex-col items-center text-center'>
                <h2 className={`${fonts.header.className} uppercase text-red-600 text-4xl mb-2`}>
                  BPF British DT Championships
                </h2>
                <p className={`${fonts.header.className} text-3xl uppercase mb-2`}>17 - 19 May 2024</p>
                <p className='mb-2'>
                  Coventry Rugby Club
                  <br />
                  Butts Park Arena
                  <br />
                  Coventry
                  <br />
                  CV1 3GE
                </p>
                <p className='mb-2'>
                  <Button href='https://events.bplf.co.uk/brits2024' target='_blank'>
                    More Details
                  </Button>
                </p>
              </div>
              <div className='ml-4 mt-10 flex flex-col items-center text-center'>
                <h2 className={`${fonts.header.className} uppercase text-red-600 text-4xl mb-2`}>Welsh Expo</h2>
                <p className={`${fonts.header.className} text-3xl uppercase mb-2`}>29 - 30 June 2024</p>
                <p className='mb-2'>ICC Wales</p>
              </div>
              <div className='ml-4 mt-10 flex flex-col items-center text-center'>
                <h2 className={`${fonts.header.className} uppercase text-red-600 text-4xl mb-2`}>Strong in Boston</h2>
                <p className={`${fonts.header.className} text-3xl uppercase mb-2`}>14 July 2024</p>
                <p className='mb-2'>Boston, Lincolnshire</p>
              </div>
              <div className='ml-4 mt-10 flex flex-col items-center text-center'>
                <h2 className={`${fonts.header.className} uppercase text-red-600 text-4xl mb-2`}>
                  Women Of Iron Pro Prize Meet
                </h2>
                <p className={`${fonts.header.className} text-3xl uppercase mb-2`}>20 July 2024</p>
                <p className='mb-2'>BPF Academy</p>
              </div>
              <div className='ml-4 mt-10 flex flex-col items-center text-center'>
                <h2 className={`${fonts.header.className} uppercase text-red-600 text-4xl mb-2`}>
                  Men Of Steel Prize Meet
                </h2>
                <p className={`${fonts.header.className} text-3xl uppercase mb-2`}>21 July 2024</p>
                <p className='mb-2'>BPF Academy</p>
              </div>
            </div>
            <div className='mt-20 mb-4'>
              <h2 className={`${fonts.header.className} uppercase text-5xl mb-4`}>
                BPF / WPU Competition Classifications 2024
              </h2>
              <ul className='list-disc list-inside'>
                <li>British Qualifier top 3 in all classes will qualify for National Championships</li>
                <li>National Championships top 3 qualify for European & World Championships</li>
                <li>European & World Championships top 2 qualify Pro Invitational Expo & International meets</li>
                <li>Our aim is to give all National & International Athletes the chance to compete on every level.</li>
              </ul>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
