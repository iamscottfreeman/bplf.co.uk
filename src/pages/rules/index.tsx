import Head from 'next/head';
import Image from 'next/image';

import Header from '@/components/header/Header';
import Navbar from '@/components/navigation/Navbar';
import Footer from '@/components/footer/Footer';
import PageHeader from '@/components/atoms/PageHeader';
import Container from '@/components/atoms/Container';
import RulesLink from '@/components/atoms/RulesLink';

export default function Rules() {
  return (
    <>
      <Head>
        <title>Rules | British Powerlifting Federation</title>
      </Head>
      <Header />
      <Navbar />
      <main>
        <section>
          <PageHeader title='Rules' />
          <Container className='py-10'>
            <div className='md:grid grid-cols-2 items-center text-center gap-4'>
              <RulesLink title='Rule Book 2023' link='/downloads/Rulebook-2023.pdf' isLast />
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
