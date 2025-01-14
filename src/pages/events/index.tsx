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
import wpo from './wpo.jpg';
import expowales from './expowales.jpg';
import rhinos from './rhinos.png';
import britchamps2024 from './britchamps2024.png';
import rhinos2 from './rhinos.jpeg';
import montycrown from './montycrown.jpeg';
import menofsteel from './menofsteel.jpeg';
import dayofthedead from './dayofthedead.jpeg';
import recordbreakers from './recordbreakers.jpeg';
import strictcurl from './strictcurl.jpeg';
import wpuspain from './wpuspain.jpg';

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
                <Image src={img10} alt='' className='w-3/4 rounded-md mb-4' />
                <h2 className={`${fonts.header.className} uppercase text-red-600 text-4xl mb-2`}>Mayhem in Boston</h2>
                <p className={`${fonts.header.className} text-3xl uppercase mb-2`}>3 March 2024</p>
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
                <Image src={wpuspain} alt='' className='w-3/4 rounded-md mb-4' />
                <h2 className={`${fonts.header.className} uppercase text-red-600 text-4xl mb-2`}>
                  WPU Spain Open Powerlifting 2024
                </h2>
                <p className={`${fonts.header.className} text-3xl uppercase mb-2`}>4 May 2024</p>
              </div>
              <div className='ml-4 mt-10 flex flex-col items-center text-center'>
                <Image src={wpo} alt='' className='w-3/4 rounded-md mb-4' />
                <h2 className={`${fonts.header.className} uppercase text-red-600 text-4xl mb-2`}>
                  WPO Semi-Final 2024
                </h2>
                <p className={`${fonts.header.className} text-3xl uppercase mb-2`}>4 - 5 May 2024</p>
                <p className='mb-2'>Portugal</p>
              </div>
              <div className='ml-4 mt-10 flex flex-col items-center text-center'>
                <Image src={britchamps2024} alt='' className='w-3/4 rounded-md mb-4' />
                <h2 className={`${fonts.header.className} uppercase text-red-600 text-4xl mb-2`}>
                  BPF British DT Championships
                </h2>
                <p className={`${fonts.header.className} text-3xl uppercase mb-2`}>18 - 19 May 2024</p>
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
                <Image src={expowales} alt='' className='w-3/4 rounded-md mb-4' />
                <h2 className={`${fonts.header.className} uppercase text-red-600 text-4xl mb-2`}>Expo Wales</h2>
                <p className={`${fonts.header.className} text-3xl uppercase mb-2`}>29 - 30 June 2024</p>
                <p className='mb-2'>100% Raw powerlifting (drug tested)</p>
                <p className='mb-2'>Mr & Mrs Universe, Full Power, Single Lifts, Strict Curl, Non-Raw, World Cup</p>
                <p className='mb-2'>ICC Wales</p>
                <p className='mb-2'>
                  <Button href='https://events.bplf.co.uk/wales2024' target='_blank'>
                    More Details
                  </Button>
                </p>
              </div>
              <div className='ml-4 mt-10 flex flex-col items-center text-center'>
                <Image src={strictcurl} alt='' className='w-3/4 rounded-md mb-4' />
                <h2 className={`${fonts.header.className} uppercase text-red-600 text-4xl mb-2`}>
                  Boston Strict Curl Championship
                </h2>
                <p className={`${fonts.header.className} text-3xl uppercase mb-2`}>13 July 2024</p>
                <p className='mb-2'>Boston, Lincolnshire</p>
                <p className='mb-2'>
                  <Button
                    href='https://docs.google.com/forms/d/e/1FAIpQLSfsRu7NEo9z8vqoVu2KhhyfR-d10Okq18aX9CeKwUxGanyZTA/viewform?vc=0&c=0&w=1&flr=0'
                    target='_blank'
                  >
                    Entry Form
                  </Button>
                </p>
              </div>
              <div className='ml-4 mt-10 flex flex-col items-center text-center'>
                <h2 className={`${fonts.header.className} uppercase text-red-600 text-4xl mb-2`}>
                  Women Of Iron Pro Prize Meet
                </h2>
                <p className={`${fonts.header.className} text-3xl uppercase mb-2`}>20 July 2024</p>
                <p className='mb-2'>BPF Academy</p>
                <p className='mb-2'>
                  <Button
                    href='https://docs.google.com/forms/d/e/1FAIpQLSetJ1W6_vlnE-MyCQIVBYxYUHWW3Paf4Kid1kkaqjLigPUVIg/viewform?vc=0&c=0&w=1&flr=0'
                    target='_blank'
                  >
                    Entry Form
                  </Button>
                </p>
              </div>
              <div className='ml-4 mt-10 flex flex-col items-center text-center'>
                <Image src={menofsteel} alt='' className='w-3/4 rounded-md mb-4' />
                <h2 className={`${fonts.header.className} uppercase text-red-600 text-4xl mb-2`}>
                  Men Of Steel Prize Meet
                </h2>
                <p className={`${fonts.header.className} text-3xl uppercase mb-2`}>21 July 2024</p>
                <p className='mb-2'>BPF Academy</p>
                <p className='mb-2'>
                  <Button
                    href='https://docs.google.com/forms/d/e/1FAIpQLSdtVBfJycwSRwuitt3PGzPjWSRv8jpG-MHKZFslUUPu_1TQpg/viewform?vc=0&c=0&w=1&flr=0'
                    target='_blank'
                  >
                    Entry Form
                  </Button>
                </p>
              </div>
              <div className='ml-4 mt-10 flex flex-col items-center text-center'>
                <Image src={rhinos} alt='' className='w-3/4 rounded-md mb-4' />
                <h2 className={`${fonts.header.className} uppercase text-red-600 text-4xl mb-2`}>Rhinos Gym</h2>
                <p className={`${fonts.header.className} text-3xl uppercase mb-2`}>28 July 2024</p>
                <p className='mb-2'>
                  <Button
                    href='https://docs.google.com/forms/d/e/1FAIpQLSfzM5iN_CtXVpknHk2NRK9zdr6jCFD9rPTBLMiRWucJO_ehMw/viewform?vc=0&c=0&w=1&flr=0'
                    target='_blank'
                  >
                    Entry Form
                  </Button>
                </p>
              </div>
              <div className='ml-4 mt-10 flex flex-col items-center text-center'>
                <h2 className={`${fonts.header.className} uppercase text-red-600 text-4xl mb-2`}>
                  British N/T Championships
                </h2>
                <p className={`${fonts.header.className} text-3xl uppercase mb-2`}>3 - 4 August 2024</p>
              </div>
              <div className='ml-4 mt-10 flex flex-col items-center text-center'>
                <Image src={dayofthedead} alt='' className='w-3/4 rounded-md mb-4' />
                <h2 className={`${fonts.header.className} uppercase text-red-600 text-4xl mb-2`}>Day of the Dead</h2>
                <p className={`${fonts.header.className} text-3xl uppercase mb-2`}>31 August 2024</p>
                <Button
                  href='https://docs.google.com/forms/d/e/1FAIpQLSejox95uCCDzw1UJY0rAuhN23QoBAgpibUbeXxQiUobG5NQHw/viewform?vc=0&c=0&w=1&flr=0'
                  target='_blank'
                >
                  Entry Form
                </Button>
              </div>
              <div className='ml-4 mt-10 flex flex-col items-center text-center'>
                <Image src={recordbreakers} alt='' className='w-3/4 rounded-md mb-4' />
                <h2 className={`${fonts.header.className} uppercase text-red-600 text-4xl mb-2`}>Record Breakers</h2>
                <p className={`${fonts.header.className} text-3xl uppercase mb-2`}>21 - 22 September 2024</p>
                <Button
                  href='https://docs.google.com/forms/d/e/1FAIpQLScZZaRLfML3kurT4-na0TUD4Zv6qYXXAQs_O6v2rq08cfpB5Q/viewform?vc=0&c=0&w=1&flr=0'
                  target='_blank'
                >
                  Entry Form
                </Button>
              </div>
              <div className='ml-4 mt-10 flex flex-col items-center text-center'>
                <h2 className={`${fonts.header.className} uppercase text-red-600 text-4xl mb-2`}>
                  WPU Non-Tested World Championships
                </h2>
                <p className={`${fonts.header.className} text-3xl uppercase mb-2`}>25 - 27 October 2024</p>
              </div>
              <div className='ml-4 mt-10 flex flex-col items-center text-center'>
                <h2 className={`${fonts.header.className} uppercase text-red-600 text-4xl mb-2`}>
                  World Strict Curl, Bench Press, and Deadlift
                </h2>
                <p className={`${fonts.header.className} text-3xl uppercase mb-2`}>9 November 2024</p>
                <p className='mb-2'>Virginia USA</p>
              </div>
              <div className='ml-4 mt-10 flex flex-col items-center text-center'>
                <h2 className={`${fonts.header.className} uppercase text-red-600 text-4xl mb-2`}>
                  100% Raw Powerlifting Tested World Championships
                </h2>
                <p className={`${fonts.header.className} text-3xl uppercase mb-2`}>21 - 24 November 2024</p>
                <p className='mb-2'>Virginia USA</p>
              </div>
              <div className='ml-4 mt-10 flex flex-col items-center text-center'>
                <h2 className={`${fonts.header.className} uppercase text-red-600 text-4xl mb-2`}>
                  100% Raw Powerlifting
                </h2>
                <p className={`${fonts.header.className} text-3xl uppercase mb-2`}>March 2025</p>
                <p className='mb-2'>Dubai</p>
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
