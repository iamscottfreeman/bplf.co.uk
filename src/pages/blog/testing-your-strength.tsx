import Head from 'next/head';
import Image from 'next/image';

import Header from '@/components/header/Header';
import Navbar from '@/components/navigation/Navbar';
import Footer from '@/components/footer/Footer';
import PageHeader from '@/components/atoms/PageHeader';
import Container from '@/components/atoms/Container';
import Button from '@/components/atoms/Button';

import img from './testing-your-strength.jpg';

export default function BlogPost() {
  return (
    <>
      <Head>
        <title>Testing Your Strength | Blog | British Powerlifting Federation</title>
      </Head>
      <Header />
      <Navbar />
      <main>
        <section>
          <PageHeader title='Testing Your Strength' />
          <Container className='py-10 xl:w-2/3'>
            <div className='flex flex-col lg:flex-row'>
              <div className='lg:w-2/3 mr-4'>
                <p className='mb-4'>
                  First, a safety warning. You're more likely to injure yourself doing a maximum single rep than by
                  doing an 8-to-12 rep set to failure.
                </p>
                <p className='mb-4'>
                  Not only does the greater weight increase the odds of injury, but, whereas in an eight-rep set you
                  have seven reps to access your strength, set your technique, and develop a rhythm, with a single rep
                  your first rep is your last rep. Fail in the squat or bench press and—until the weight is racked
                  again—your spotters become the most important people in your life.
                </p>
                <p className='mb-4'>
                  If you still want to test your strength with single reps, do so only occasionally and only in the
                  deadlift, squat, power clean, or bench press.
                </p>
                <p className='mb-4'>
                  Pyramid your sets with at least three progressively heavier, lower rep sets before your max single.
                </p>
                <p className='mb-4'>
                  The heavier you lift the more crucial your equipment and spotters become, so make certain at least one
                  experienced spotter (more, if you lift especially heavy) is right next to you for any max squat or
                  bench press. Good luck and great strength!
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
