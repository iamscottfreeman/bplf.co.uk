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
            <div className='md:grid grid-cols-2 items-center text-center gap-4'>No Strict Curl events listed.</div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
