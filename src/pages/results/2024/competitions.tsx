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
            <div className='md:grid grid-cols-3 items-center text-center gap-4'>
              <ResultLink title='BPF/WPU MAYHEM IN BOSTON 03/03/2024' link='/downloads/BOSTON-03032024.xslx' />
              <ResultLink title='Monty Crown 2024' link='/downloads/MONTY-CROWN-2024-FULL-COMP-OUTCOME.csv' isLast />
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
