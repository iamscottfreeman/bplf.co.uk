import Head from 'next/head';
import Image from 'next/image';

import Header from '@/components/header/Header';
import Navbar from '@/components/navigation/Navbar';
import Footer from '@/components/footer/Footer';
import PageHeader from '@/components/atoms/PageHeader';
import Container from '@/components/atoms/Container';
import NewsletterLink from '@/components/atoms/NewsletterLink';

import img from '../../images/logo.png';

export default function Newsletter() {
  return (
    <>
      <Head>
        <title>Newsletters | British Powerlifting Federation</title>
      </Head>
      <Header />
      <Navbar />
      <main>
        <section>
          <PageHeader title='Newsletters' />
          <Container className='py-10'>
            <div className='flex flex-col lg:flex-row'>
              <div className='lg:w-2/3 lg:mr-4'>
                <div className='md:grid grid-cols-3 items-center text-center gap-4'>
                  <NewsletterLink
                    title='September 2023'
                    link='/downloads/newsletters/september-2023.pdf'
                    extract='What a great few months we have had and pleased we have captured the moments!'
                  />
                  <NewsletterLink
                    title='April 2023'
                    link='/newsletters/april-2023'
                    extract='Welcome to our first Newsletter! Meet the BPF founders and be introduced to some of our members.'
                    isLast
                  />
                </div>
              </div>
              <div className='hidden lg:block lg:w-1/3'>
                <Image src={img} alt='' className='rounded-md' />
              </div>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
