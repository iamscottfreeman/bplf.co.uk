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
              <RulesLink
                title='IPL Rule Book 2023'
                link='https://powerlifting-ipl.com/wp-content/uploads/2023/03/2023-IPL-RULE-BOOK-FINAL-1.pdf'
              />
              <RulesLink
                title='IPL Rule Book 2022'
                link='https://powerlifting-ipl.com/wp-content/uploads/2022/06/2022-IPL-RULE-BOOK-FINAL-V2.-1-1-2022.pdf'
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
