import Head from 'next/head';
import Image from 'next/image';

import Header from '@/components/header/Header';
import Navbar from '@/components/navigation/Navbar';
import Footer from '@/components/footer/Footer';
import PageHeader from '@/components/atoms/PageHeader';
import Container from '@/components/atoms/Container';
import BlogLink from '@/components/atoms/BlogLink';

import marcus from './marcus.jpg';

export default function Blog() {
  return (
    <>
      <Head>
        <title>Blog | British Powerlifting Federation</title>
      </Head>
      <Header />
      <Navbar />
      <main>
        <section>
          <PageHeader title='Blog' />
          <Container className='py-10'>
            <div className='flex flex-col lg:flex-row'>
              <div className='lg:w-2/3 lg:mr-4'>
                <BlogLink
                  title='Testing Your Strength'
                  link='/blog/testing-your-strength'
                  extract='Marcus shares some tips and advice on how to safely test your maximum strength.'
                />
                <BlogLink title='21 Advantages of Box Squats' link='/blog/21-advantages-of-box-squats' extract='' />
                <BlogLink
                  title='Single Rep Training: The Science'
                  link='/blog/single-rep-training-the-science'
                  extract=''
                />
                <BlogLink title='Mr Olympia 2022' link='/blog/mr-olympia-2022' extract='' />
                <BlogLink title='Strength v Time' link='/blog/strength-v-time' extract='' />
                <BlogLink title='What is Periodization?' link='/blog/what-is-periodization' extract='' />
                <BlogLink
                  title='Can You Get Addicted to Exercise?'
                  link='/blog/can-you-get-addicted-to-exercise'
                  extract=''
                />
                <BlogLink
                  title='Olympic Lifting & Powerlifting'
                  link='/blog/olympic-lifting-and-powerlifting'
                  extract=''
                  isLast
                />
              </div>
              <div className='lg:w-1/3'>
                <Image src={marcus} alt='' className='rounded-md' />
              </div>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
