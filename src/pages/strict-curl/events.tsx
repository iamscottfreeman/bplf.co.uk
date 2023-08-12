import Head from 'next/head';
import Image from 'next/image';

import { fonts } from '@/helpers/fonts';
import Header from '@/components/header/Header';
import Navbar from '@/components/navigation/Navbar';
import Footer from '@/components/footer/Footer';
import PageHeader from '@/components/atoms/PageHeader';
import Container from '@/components/atoms/Container';

import img01 from './img01.jpg';
import Button from '@/components/atoms/Button';

export default function Events() {
  return (
    <>
      <Head>
        <title>Strict Curl Events | Strict Curl | British Powerlifting Federation</title>
      </Head>
      <Header />
      <Navbar />
      <main>
        <section>
          <PageHeader title='Strict Curl Events' />
          <Container className='py-10'>
            <div className='md:grid grid-cols-2 items-center text-center gap-4'>
              <div className='ml-4 mt-10 flex flex-col items-center text-center'>
                <Image src={img01} alt='' className='w-3/4 rounded-md mb-4' />
                <h2 className={`${fonts.header.className} uppercase text-red-600 text-4xl mb-2`}>
                  Strict Curl World Cup
                </h2>
                <p className={`${fonts.header.className} text-3xl uppercase mb-2`}>21st October 2023</p>
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
                    href='https://docs.google.com/forms/d/e/1FAIpQLSfV5zuvVmjWV3HU4AIxQ2MkF5vOhBZipTo5Ed--CuksKNmEEg/viewform?pli=1'
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
