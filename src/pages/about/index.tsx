import Head from 'next/head';

import Header from '@/components/header/Header';
import Navbar from '@/components/navigation/Navbar';
import Footer from '@/components/footer/Footer';
import backgroundImage from '../../images/stock/9.jpg';
import PageHeader from '@/components/atoms/PageHeader';
import Container from '@/components/atoms/Container';

export default function Home() {
  return (
    <>
      <Head>
        <title>About | British Powerlifting Federation</title>
      </Head>
      <Header />
      <Navbar />
      <main>
        <section>
          <PageHeader backgroundImage={backgroundImage} title='About Us' />
          <Container className='py-10'>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora quo aliquam numquam nisi ea expedita
              voluptatibus veniam asperiores nihil dignissimos beatae autem possimus, consectetur obcaecati magnam! Fuga
              cumque iste quas!
            </p>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
