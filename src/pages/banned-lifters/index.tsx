import Head from 'next/head';

import Header from '@/components/header/Header';
import Navbar from '@/components/navigation/Navbar';
import Footer from '@/components/footer/Footer';
import PageHeader from '@/components/atoms/PageHeader';
import Container from '@/components/atoms/Container';

import Button from '@/components/atoms/Button';

export default function BannedLifters() {
  return (
    <>
      <Head>
        <title>Banned Lifters | British Powerlifting Federation</title>
      </Head>
      <Header />
      <Navbar />
      <main>
        <section>
          <PageHeader title='Banned Lifters' />
          <Container className='py-10'>
            <p className='mb-4'>The following lifters have been banned for life from the BPF and IPL.</p>
            <ul className='mb-4 ml-4 list-outside list-disc space-y-2'>
              <li>CHRIS LANE (2016)</li>
              <li>PATRICIA HURST (2019)</li>
              <li>HANNER BINGLE (2020)</li>
              <li>JOHN LOCK (2021)</li>
              <li>CHANELLE COLLIER (2021)</li>
              <li>LIAM WHEELER (September 2021)</li>
              <li>ROSS ROOCK (September 2021)</li>
              <li>SAM SOLOMI (September 2021)</li>
              <li>ADRIAN POTYKUS (January 2022)</li>
              <li>NICOLAS MELLOR (January 2022)</li>
              <li>VLADIMIR AGASARGAN (June 2022)</li>
            </ul>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
