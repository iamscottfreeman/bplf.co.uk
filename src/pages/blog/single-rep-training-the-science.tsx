import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

import Header from '@/components/header/Header';
import Navbar from '@/components/navigation/Navbar';
import Footer from '@/components/footer/Footer';
import PageHeader from '@/components/atoms/PageHeader';
import Container from '@/components/atoms/Container';
import Button from '@/components/atoms/Button';

import img from './single-rep-training-the-science.jpg';

export default function BlogPost() {
  return (
    <>
      <Head>
        <title>Single Rep Training: The Science | Blog | British Powerlifting Federation</title>
      </Head>
      <Header />
      <Navbar />
      <main>
        <section>
          <PageHeader title='Single Rep Training: The Science' />
          <Container className='py-10 xl:w-2/3'>
            <div className='flex flex-col lg:flex-row'>
              <div className='lg:w-2/3 mr-4'>
                <p className='mb-4'>
                  The ideal range for building muscle is 6-12 reps per set. It's sometimes effective to go lower or
                  higher, but not extremely low or extremely high. Routinely do very high reps and science has proven
                  your body will shut down muscle growth. Conversely, if you routinely do very low reps you'll never
                  stimulate much growth.
                </p>
                <p className='mb-4'>
                  Exercise scientist{' '}
                  <Link href='https://www.jimstoppani.com/' className='text-red-600' target='_blank'>
                    Jim Stoppani, PhD
                  </Link>
                  , explains: "Although using a heavy enough weight to complete just one rep provides the most overload
                  on a muscle, it doesn't result in the most growth or strength gains. Overload is important for both
                  muscle growth and strength, but other factors also play a key role. To build muscle, you need to
                  perform multiple reps with a given weight. Research shows that the best rep range for building muscle
                  is about 6-12 reps per set. The reason that multiple reps lead to greater muscle growth as compared to
                  single reps has to do with biochemical events within the muscle."
                </p>
                <p className='mb-4'>
                  <span className='font-bold'>Marcus Griffiths</span>
                  <br />
                  Strength Coach
                  <br />
                  BPF Academy
                </p>
                <p className='mb-4'>
                  <Button href='/blog'>Back to Blog</Button>
                </p>
              </div>
              <div className='lg:w-1/3'>
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
