import Head from 'next/head';

import Header from '@/components/header/Header';
import Navbar from '@/components/navigation/Navbar';
import Footer from '@/components/footer/Footer';
import PageHeader from '@/components/atoms/PageHeader';
import Container from '@/components/atoms/Container';

import Button from '@/components/atoms/Button';

export default function Testing() {
  return (
    <>
      <Head>
        <title>Drug Testing and Results | British Powerlifting Federation</title>
      </Head>
      <Header />
      <Navbar />
      <main>
        <section>
          <PageHeader title='Drug Testing and Results' />
          <Container className='py-10'>
            <h2 className='text-4xl mb-4'>Results</h2>
            <div className='flex space-x-4'>
              <p className='mb-4'>
                <Button href='/downloads/DRUG-TEST-OUTCOME-2023.xlsx'>Testing Results 2023</Button>
              </p>
              <p className='mb-4'>
                <Button href='/downloads/TESTING-RESOLTS.xlsx'>Testing Results 2022</Button>
              </p>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
