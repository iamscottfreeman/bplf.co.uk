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
        <title>Can You Get Addicted to Exercise? | Blog | British Powerlifting Federation</title>
      </Head>
      <Header />
      <Navbar />
      <main>
        <section>
          <PageHeader title='Can You Get Addicted to Exercise?' />
          <Container className='py-10 xl:w-2/3'>
            <div className='flex flex-col lg:flex-row lg:justify-center'>
              <div className='lg:w-2/3'>
                <p className='mb-4'>
                  At present, exercise addiction is not officially recognized in any medical or psychological diagnostic
                  frameworks such as the Psychiatric Association's Diagnostic and Statistical Manual (DSM) or the World
                  Health Association's International Classification of Diseases. However, there has been a lot of
                  research into whether exercise can be classed as a bona fide addiction.
                </p>
                <p className='mb-4'>
                  In spite of the widespread usage of the term 'exercise addiction', there are many terminologies that
                  describe excessive exercise syndrome. Such terms include exercise dependence, obligatory exercising,
                  exercise abuse, and compulsive exercise. Exercise addiction has been conceptualized as a behavioral
                  addiction. The symptoms and consequences of exercise addiction have often been characterized by six
                  common components of addiction: salience, mood modification, tolerance, withdrawal symptoms, personal
                  conflict, and relapse.
                </p>
                <p className='mb-4'>
                  For some people, exercise addiction is a primary problem in the person's life whereas in others it can
                  be a secondary problem as a consequence of other psychological dysfunctions (like eating disorders,
                  such as anorexia nervosa).
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
