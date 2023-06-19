import Head from 'next/head';

import Header from '@/components/header/Header';
import Navbar from '@/components/navigation/Navbar';
import Footer from '@/components/footer/Footer';
import PageHeader from '@/components/atoms/PageHeader';
import Container from '@/components/atoms/Container';
import ResultLink from '@/components/atoms/ResultLink';

import backgroundImage from '../../images/stock/9.jpg';

export default function Results() {
  return (
    <>
      <Head>
        <title>British Records 2023 | Results | British Powerlifting Federation</title>
      </Head>
      <Header />
      <Navbar />
      <main>
        <section>
          <PageHeader backgroundImage={backgroundImage} title='British Records 2023' />
          <Container className='py-10'>
            <div className='md:grid grid-cols-3 items-center text-center gap-4'>
              <ResultLink
                title='NON TESTED RAW SINGLE LIFT RECORDS MAY 2023'
                link='/downloads/NON-TESTED-RAW-SINGAL-LIFT-records-28-MAY-2023-1.xlsx'
              />
              <ResultLink
                title='NON TESTED FP CLASSIC RECORDS MAY 2023'
                link='/downloads/NON-Tested-FP-CLASSIC-RAW-records.xlsx'
              />
              <ResultLink
                title='TESTED STRICT CURL APRIL 2023'
                link='/downloads/TESTED-STRICKED-CURL-23-APRIL-2023.xlsx'
              />
              <ResultLink
                title='NON TESTED STRICT CURL APRIL 2023'
                link='/downloads/NON-TESTED-STRICKED-CURL-23-APRIL-2023.xlsx'
                isLast
              />
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
