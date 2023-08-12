import Head from 'next/head';

import Header from '@/components/header/Header';
import Navbar from '@/components/navigation/Navbar';
import Footer from '@/components/footer/Footer';
import PageHeader from '@/components/atoms/PageHeader';
import Container from '@/components/atoms/Container';
import ResultLink from '@/components/atoms/ResultLink';

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
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
