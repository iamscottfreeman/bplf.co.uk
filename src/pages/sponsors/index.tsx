import Head from 'next/head';
import Image from 'next/image';

import { fonts } from '@/helpers/fonts';
import Header from '@/components/header/Header';
import Navbar from '@/components/navigation/Navbar';
import Footer from '@/components/footer/Footer';
import PageHeader from '@/components/atoms/PageHeader';
import Container from '@/components/atoms/Container';

import backgroundImage from '../../images/stock/9.jpg';
import strengthShop from './strength-shop.jpg';
import kabuki from './kabuki.webp';
import zkc from './zkc.webp';
import strictCurl from './strict-curl.webp';

export default function Sponsors() {
  return (
    <>
      <Head>
        <title>Sponsors | British Powerlifting Federation</title>
      </Head>
      <Header />
      <Navbar />
      <main>
        <section>
          <PageHeader backgroundImage={backgroundImage} title='Sponsors' />
          <Container className='grid grid-cols-1 justify-center w-fit py-10'>
            <div>
              <h2 className={`${fonts.header.className} uppercase text-3xl mb-4`}>We are proudly supported by</h2>
              <div className='grid grid-cols-2 lg:grid-cols-4 items-center space-x-4'>
                <div>
                  <Image src={strengthShop} alt='' className='w-80' />
                </div>
                <div>
                  <Image src={kabuki} alt='' className='w-80' />
                </div>
                <div>
                  <Image src={zkc} alt='' className='w-80' />
                </div>
                <div>
                  <Image src={strictCurl} alt='' className='w-80' />
                </div>
              </div>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
