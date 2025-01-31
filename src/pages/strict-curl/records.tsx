import Head from 'next/head';

import Header from '@/components/header/Header';
import Navbar from '@/components/navigation/Navbar';
import Footer from '@/components/footer/Footer';
import PageHeader from '@/components/atoms/PageHeader';
import Container from '@/components/atoms/Container';
import ResultLink from '@/components/atoms/ResultLink';
import { fonts } from '@/helpers/fonts';

export default function Records() {
  return (
    <>
      <Head>
        <title>Strict Curl Records | Strict Curl | British Powerlifting Federation</title>
      </Head>
      <Header />
      <Navbar />
      <main>
        <section>
          <PageHeader title='Strict Curl Records' />
          <Container className='py-10'>
            <div className='md:grid grid-cols-3 items-center text-center gap-4'>
              <ResultLink title='MAYHEM IN BOSTON 2024' link='/downloads/STRICT-CURL-Mayhem-boston-03_03_2024.xlsx' />
              <ResultLink title='WORLD TESTED STRICT CURL NOVEMBER 2023' link='/downloads/TESTED-STRICT-CURL.xlsx' />
              <ResultLink
                title='WORLD NON-TESTED STRICT CURL NOVEMBER 2023'
                link='/downloads/NON-TESTED-STRICT-CURL.xlsx'
              />
              <ResultLink
                title='TESTED STRICT CURL APRIL 2023'
                link='/downloads/TESTED-STRICKED-CURL-23-APRIL-2023.xlsx'
              />
              <ResultLink
                title='NON TESTED STRICT CURL APRIL 2023'
                link='/downloads/NON-TESTED-STRICKED-CURL-23-APRIL-2023.xslx'
                isLast
              />
            </div>
            <h2 className={`${fonts.header.className} uppercase text-5xl mt-20 mb-8 text-center`}>
              Previous Competition Results
            </h2>
            <div className='md:grid grid-cols-3 items-center text-center gap-4'>
              <ResultLink
                title='MAYHEM IN BOSTON 2023'
                link='/downloads/Mayhem-in-Boston-strict-curl-17092023.csv'
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
