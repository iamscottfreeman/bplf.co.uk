import Head from 'next/head';

import Header from '@/components/header/Header';
import Navbar from '@/components/navigation/Navbar';
import Footer from '@/components/footer/Footer';
import PageHeader from '@/components/atoms/PageHeader';
import Container from '@/components/atoms/Container';
import ResultLink from '@/components/atoms/ResultLink';
import { fonts } from '@/helpers/fonts';

export default function Results() {
  return (
    <>
      <Head>
        <title>World Records 2023 | Results | British Powerlifting Federation</title>
      </Head>
      <Header />
      <Navbar />
      <main>
        <section>
          <PageHeader title='World Records 2023' />
          <Container className='py-10'>
            <div className='md:grid grid-cols-3 items-center text-center gap-4'>
              <ResultLink
                title='TESTED FULL POWER CLASSIC RAW NOVEMBER 2023'
                link='/downloads/world-records/TESTED-FP-CLASSIC-RAW.xlsx'
              />
              <ResultLink
                title='TESTED FULL POWER RAW NOVEMBER 2023'
                link='/downloads/world-records/TESTED-FP-RAW.xlsx'
              />
              <ResultLink
                title='TESTED CLASSIC CLASSIC RAW SINGLE LIFTS NOVEMBER 2023'
                link='/downloads/world-records/TESTED-CLASSIC-RAW-SINGLE-LIFTS.xlsx'
              />
              <ResultLink
                title='TESTED CLASSIC POWER RAW SINGLE LIFTS NOVEMBER 2023'
                link='/downloads/world-records/TESTED-RAW-SINGLE-LIFTS.xlsx'
              />
              <ResultLink
                title='TESTED STRICT CURL NOVEMBER 2023'
                link='/downloads/world-records/TESTED-STRICT-CURL.xlsx'
              />
              <ResultLink
                title='NON-TESTED FULL POWER CLASSIC RAW NOVEMBER 2023'
                link='/downloads/world-records/NON-TESTED-FP-CLASSIC-RAW.xlsx'
              />
              <ResultLink
                title='NON-TESTED FULL POWER RAW NOVEMBER 2023'
                link='/downloads/world-records/NON-TESTED-FP-RAW.xlsx'
              />
              <ResultLink
                title='TESTED CLASSIC CLASSIC RAW SINGLE LIFTS NOVEMBER 2023'
                link='/downloads/world-records/NON-TESTED-CLASSIC-RAW-SINGLE-LIFTS.xlsx'
              />
              <ResultLink
                title='NON-TESTED CLASSIC POWER RAW SINGLE LIFTS NOVEMBER 2023'
                link='/downloads/world-records/NON-TESTED-RAW-SINGLE-LIFTS.xlsx'
              />
              <ResultLink
                title='NON-TESTED STRICT CURL NOVEMBER 2023'
                link='/downloads/world-records/NON-TESTED-STRICT-CURL.xlsx'
              />
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
