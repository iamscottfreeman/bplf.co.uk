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
        <title>British Records 2024 | Results | British Powerlifting Federation</title>
      </Head>
      <Header />
      <Navbar />
      <main>
        <section>
          <PageHeader title='British Records 2024' />
          <Container className='py-10'>
            <div className='text-center text-xl'>No records set yet... Check back soon!</div>
            <div className='mt-20 mb-4'>
              <h2 className={`${fonts.header.className} uppercase text-5xl mb-4`}>
                BPF / WPU Competition Classifications 2024
              </h2>
              <ul className='list-disc list-inside'>
                <li>British Qualifier top 3 in all classes will qualify for National Championships</li>
                <li>National Championships top 3 qualify for European & World Championships</li>
                <li>European & World Championships top 2 qualify Pro Invitational Expo & International meets</li>
                <li>Our aim is to give all National & International Athletes the chance to compete on every level.</li>
              </ul>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
