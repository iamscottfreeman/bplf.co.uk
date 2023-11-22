import Head from 'next/head';

import Header from '@/components/header/Header';
import Navbar from '@/components/navigation/Navbar';
import Footer from '@/components/footer/Footer';
import PageHeader from '@/components/atoms/PageHeader';
import Container from '@/components/atoms/Container';
import Button from '@/components/atoms/Button';

export default function BlogPost() {
  return (
    <>
      <Head>
        <title>Density Training | Blog | British Powerlifting Federation</title>
      </Head>
      <Header />
      <Navbar />
      <main>
        <section>
          <PageHeader title='Density Training' />
          <Container className='py-10 xl:w-2/3'>
            <div className='flex flex-col lg:flex-row lg:justify-center'>
              <div className='lg:w-2/3'>
                <p className='mb-4'>
                  Density Training is a system for performing heavy but non-max single reps within a specific amount of
                  time. Progressively, over subsequent workouts, you either increase the number of singles in that time
                  frame or perform the same number of singles but decrease the amount of time.
                </p>
                <p className='mb-4'>
                  So, for example, you might start with three singles in 12 minutes (six minutes rest before reps two
                  and three) and add one single each workout until you get to seven reps in 12 minutes (two minutes rest
                  before reps two to seven). Or start with three singles in 12 minutes and progress to three singles in
                  four minutes (again progressing from six minutes rest to two minutes rest).
                </p>
                <p className='mb-4'>
                  Density training is all about packing in the heavy work with progressively less rest.
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
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
