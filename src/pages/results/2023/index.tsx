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
        <title>British Records 2023 | Results | British Powerlifting Federation</title>
      </Head>
      <Header />
      <Navbar />
      <main>
        <section>
          <PageHeader title='British Records 2023' />
          <Container className='py-10'>
            <div className='md:grid grid-cols-3 items-center text-center gap-4'>
              <ResultLink
                title='TESTED FULL POWER CLASSIC RAW NOVEMBER 2023'
                link='/downloads/TESTED-FP-CLASSIC-RAW.xlsx'
              />
              <ResultLink title='TESTED FULL POWER RAW NOVEMBER 2023' link='/downloads/TESTED-FP-RAW.xlsx' />
              <ResultLink
                title='TESTED CLASSIC CLASSIC RAW SINGLE LIFTS NOVEMBER 2023'
                link='/downloads/TESTED-CLASSIC-RAW-SINGLE-LIFTS.xlsx'
              />
              <ResultLink
                title='TESTED CLASSIC POWER RAW SINGLE LIFTS NOVEMBER 2023'
                link='/downloads/TESTED-RAW-SINGLE-LIFTS.xlsx'
              />
              <ResultLink title='TESTED STRICT CURL NOVEMBER 2023' link='/downloads/TESTED-STRICT-CURL.xlsx' />
              <ResultLink
                title='NON-TESTED FULL POWER CLASSIC RAW NOVEMBER 2023'
                link='/downloads/NON-TESTED-FP-CLASSIC-RAW.xlsx'
              />
              <ResultLink title='NON-TESTED FULL POWER RAW NOVEMBER 2023' link='/downloads/NON-TESTED-FP-RAW.xlsx' />
              <ResultLink
                title='TESTED CLASSIC CLASSIC RAW SINGLE LIFTS NOVEMBER 2023'
                link='/downloads/NON-TESTED-CLASSIC-RAW-SINGLE-LIFTS.xlsx'
              />
              <ResultLink
                title='NON-TESTED CLASSIC POWER RAW SINGLE LIFTS NOVEMBER 2023'
                link='/downloads/NON-TESTED-RAW-SINGLE-LIFTS.xlsx'
              />
              <ResultLink title='NON-TESTED STRICT CURL NOVEMBER 2023' link='/downloads/NON-TESTED-STRICT-CURL.xlsx' />

              <ResultLink title='Mens Para Bench May 2023' link='/downloads/mens-para-bench-2023.xlsx' />
              <ResultLink title='Mens Para Deadlift May 2023' link='/downloads/mens-para-deadlift-2023.xlsx' isLast />
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
