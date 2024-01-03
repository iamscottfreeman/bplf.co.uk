import Head from 'next/head';

import { fonts } from '@/helpers/fonts';
import Header from '@/components/header/Header';
import Navbar from '@/components/navigation/Navbar';
import Footer from '@/components/footer/Footer';
import PageHeader from '@/components/atoms/PageHeader';
import Container from '@/components/atoms/Container';
import ResultLink from '@/components/atoms/ResultLink';

export default function CompetitionResults() {
  return (
    <>
      <Head>
        <title>Competition Results 2024 | Results | British Powerlifting Federation</title>
      </Head>
      <Header />
      <Navbar />
      <main>
        <section>
          <PageHeader title='Competition Results 2024' />
          <Container className='py-10'>
            <div className='text-center text-2xl'>None yet...</div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
