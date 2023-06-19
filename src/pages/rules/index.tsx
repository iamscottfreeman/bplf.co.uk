import Head from 'next/head';
import Image from 'next/image';

import Header from '@/components/header/Header';
import Navbar from '@/components/navigation/Navbar';
import Footer from '@/components/footer/Footer';
import PageHeader from '@/components/atoms/PageHeader';
import Container from '@/components/atoms/Container';
import RulesLink from '@/components/atoms/RulesLink';

import backgroundImage from '../../images/stock/9.jpg';

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
          <PageHeader backgroundImage={backgroundImage} title='Rules' />
          <Container className='py-10'>
            <div className='md:grid grid-cols-2 items-center text-center gap-4'>
              <RulesLink
                title='IPL Rule Book 2023'
                link='https://www.bplf.co.uk/wp-content/uploads/sites/21/2023/05/2023-IPL-RULE-BOOK-FINAL-1-1.pdf.pagespeed.ce.UVd1cDcUTu.pdf'
              />
              <RulesLink
                title='IPL Rule Book 2022'
                link='https://www.bplf.co.uk/wp-content/uploads/sites/21/2022/04/2022-IPL-RULE-BOOK-FINAL-V1.-1-1-2022-2.pdf.pagespeed.ce.Gin6lYYlEe.pdf'
              />
              <RulesLink
                title='IPL Rule Book 2021'
                link='https://www.bplf.co.uk/wp-content/uploads/sites/21/2022/04/2021-IPL-RULE-BOOK-FINAL-1-1-21.pdf.pagespeed.ce.jYmo-lc0hA.pdf'
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
