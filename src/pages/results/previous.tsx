import Head from 'next/head';

import { fonts } from '@/helpers/fonts';
import Header from '@/components/header/Header';
import Navbar from '@/components/navigation/Navbar';
import Footer from '@/components/footer/Footer';
import PageHeader from '@/components/atoms/PageHeader';
import Container from '@/components/atoms/Container';
import ResultLink from '@/components/atoms/ResultLink';

export default function Results() {
  return (
    <>
      <Head>
        <title>Previous British Records | Results | British Powerlifting Federation</title>
      </Head>
      <Header />
      <Navbar />
      <main>
        <section>
          <PageHeader title='Previous British Records' />
          <Container className='py-10'>
            <h2 className={`${fonts.header.className} uppercase text-center text-5xl mb-4 text-red-600`}>2022</h2>
            <div className='md:grid grid-cols-3 items-center text-center gap-4'>
              <ResultLink
                title='BRITISH RAW NON-TESTED RECORDS'
                link='/downloads/BPF-NONE-TESTED-CLASSIC-RAW-RECORDS-5-3.xlsx'
              />
              <ResultLink title='BRITISH RAW TESTED RECORDS' link='/downloads/BPF-BRITISH-TESTED-RAW-RECORDES-6.xlsx' />
              <ResultLink
                title='TESTED SINGLE PLY BRITISH RECORDS'
                link='/downloads/TESTED-SPLY-BRITISH-RECORDS-3.xlsx'
              />
              <ResultLink
                title='BPF NON-TESTED SINGLE PLY BRITISH RECORDS'
                link='/downloads/SP-NON-TESTED-APRIL-6.xlsx'
              />
              <ResultLink
                title='BPF TESTED CLASSIC RAW BRITISH RECORDS 2022'
                link='/downloads/BPF-TESTED-RAWCLASSIC-RECORDS-2022-British-Updated-FEB-Copy-5.xlsx'
              />
              <ResultLink
                title='BPF CLASSIC RAW NON-TESTED BRITISH RECORDS'
                link='/downloads/BPF-NONE-TESTED-CLASSIC-RAW-RECORDS-5.xlsx'
              />
              <ResultLink
                title='MENS PARA BENCH BRITISH RECORDS'
                link='/downloads/MENS-PARA-BENCH-TESTED-MAY-2022-2.xlsx'
              />
              <ResultLink
                title='MENS STRICT CURL RECORDS TESTED & UNTESTED'
                link='/downloads/Mens-strict-curl-records-tested-and-non-tested-MAY-2022-6.xlsx'
              />
              <ResultLink
                title='WOMENS STRICT CURL RECORDS TESTED & UNTESTED'
                link='/downloads/Womens-strict-curl-records-tested-and-non-tested-MAY-2022-6.xlsx'
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
