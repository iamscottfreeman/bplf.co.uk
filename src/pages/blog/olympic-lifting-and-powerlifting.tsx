import Head from 'next/head';

import Header from '@/components/header/Header';
import Navbar from '@/components/navigation/Navbar';
import Footer from '@/components/footer/Footer';
import PageHeader from '@/components/atoms/PageHeader';
import Container from '@/components/atoms/Container';
import Button from '@/components/atoms/Button';

import backgroundImage from '../../images/stock/9.jpg';

export default function BlogPost() {
  return (
    <>
      <Head>
        <title>Olympic Lifting & Powerlifting | Blog | British Powerlifting Federation</title>
      </Head>
      <Header />
      <Navbar />
      <main>
        <section>
          <PageHeader backgroundImage={backgroundImage} title='Olympic Lifting & Powerlifting' />
          <Container className='py-10 xl:w-2/3'>
            <div className='flex flex-col lg:flex-row lg:justify-center'>
              <div className='lg:w-2/3'>
                <p className='mb-4'>
                  This is Your Quick Training Tip, a chance to learn how to work smarter in just a few moments so you
                  can get right to your workout.
                </p>
                <p className='mb-4'>
                  Most guys in the gym view lifting weights as a means to a leaner, more muscular end. They don't
                  typically think about their training as a sport. But if you've ever entertained the idea of pitting
                  your strength and power against those of others—and prefer competitions that involve barbells instead
                  of atlas stones, kegs, and logs—two of the most popular options available to you are powerlifting and
                  Olympic lifting.
                </p>
                <p className='mb-4'>
                  But even if you never plan to turn pumping iron into a competitive event, understanding the difference
                  between powerlifting and Olympic lifting can help you not only earn kudos around the weight rack, but
                  also reach your fitness goals faster by informing the way you train.
                </p>
                <p className='mb-4'>
                  If you've ever watched strength athletes compete on the international stage, you're already familiar
                  with Olympic lifting. The sport encompasses two events: the snatch and the clean and jerk. Both
                  movements are complex and explosive, relying as much on power and technique as on brute physical
                  strength.
                </p>
                <p className='mb-4'>
                  Powerlifting is a different beast. It's not an Olympic sport—and its name is a bit of a misnomer, as
                  it relies primarily on strength, not power—but you're likely familiar with its trio of events: the
                  deadlift, the squat, and the bench press. Indeed, you probably perform some version of each exercise
                  (collectively known as the “big three”) in your weekly routine if you're doing any type of strength
                  training.
                </p>
                <p className='mb-4'>
                  But if you're not prepping for a powerlifting meet, your routine could use some variety for the best
                  possible results. For a truly balanced workout split, you should also take a page from the training
                  manuals of Olympic lifters, rounding out your strength program (and athletic skillset) with moves that
                  build explosive power as well.
                </p>
                <p className='mb-4'>
                  Your move: Incorporate power-focused exercises in your workout plan a couple of times per week to go
                  along with your strength training plan.
                </p>
                <p className='mb-4'>
                  This primer on Olympic lifting is a good place to start, and it includes plenty of alternatives to the
                  traditional lifts if you're not quite ready to tackle the snatch and the clean and jerk. Also, make
                  sure to fine-tune your form for the big three—your back squat, deadlift, and bench press can serve as
                  the bedrock to your overall success in the weight room .
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
