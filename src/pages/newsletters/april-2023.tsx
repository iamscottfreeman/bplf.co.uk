import Head from 'next/head';

import { fonts } from '@/helpers/fonts';
import Header from '@/components/header/Header';
import Navbar from '@/components/navigation/Navbar';
import Footer from '@/components/footer/Footer';
import PageHeader from '@/components/atoms/PageHeader';
import Container from '@/components/atoms/Container';
import Button from '@/components/atoms/Button';

import backgroundImage from '../../images/stock/9.jpg';

export default function BlogPost() {
  return (
    <>
      <Head>
        <title>April 2023 | Newsletters | British Powerlifting Federation</title>
      </Head>
      <Header />
      <Navbar />
      <main>
        <section>
          <PageHeader backgroundImage={backgroundImage} title='April 2023' />
          <Container className='py-10'>Newsletter coming soon...</Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
