import Head from 'next/head';

import { fonts } from '@/helpers/fonts';
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
        <title>Strength v Time | Blog | British Powerlifting Federation</title>
      </Head>
      <Header />
      <Navbar />
      <main>
        <section>
          <PageHeader backgroundImage={backgroundImage} title='Strength v Time' />
          <Container className='py-10 xl:w-2/3'>
            <div className='flex flex-col lg:flex-row lg:justify-center'>
              <div className='lg:w-2/3'>
                <p className='mb-4'>
                  So I understand that in the words of the infamous Louie Simmons "Big's not strong. Strong is strong"
                  But god damn... I can't help but notice that nearly ALL of the strength athletes from back in the day
                  have twice the amount of muscles than the athletes of today in general yet their numbers from back
                  then wouldn't even win a National competition In todays competitions. For example:
                </p>
                <p className='mb-4'>
                  Here we have Andy Bolton one of the greats of powerlifting (and this is not a dig at Andy he's an
                  amazing athlete in his time but someone had to be used as an example). As you can see here Andy is
                  built like a goddamn silverback gorilla and is about 300+ of solid muscle Andy's best squat was right
                  around 1,100 lbs which sounds like a lot but to be honest in today's competitions it's really not.
                </p>
                <p className='mb-4'>
                  There have been kids fresh out of college hitting this; hell I have a 21-year-old in my gym that can
                  hit this that has at least 60lbs less muscle than Andy... so what gives?
                </p>
                <h2 className={`${fonts.header.className} mb-4 text-2xl text-red-600 uppercase`}>Better Gear</h2>
                <p className='mb-4'>
                  Well in some instances this can be true of course but for the most part not really. Aside from the
                  newer band shirts which are in a category themselves powerlifting equipment really hasn't improved
                  much over the past 30 years. Arguably the best shirt on the market still is the Inzer/Titan which has
                  been around for 30+ years.
                </p>
                <h2 className={`${fonts.header.className} mb-4 text-2xl text-red-600 uppercase`}>Better Steroids</h2>
                <p className='mb-4'>
                  Again, this is not even remotely true. In fact, quite the opposite. Back then you could get British
                  pharmacy steroids when they were still prescribed before things like the Seoul Olympics steroid
                  scandals involving Ben Johnson/Linford Christie etc. Now, almost all of the steroids available are
                  either bathtub brew or imported from overseas.
                </p>
                <h2 className={`${fonts.header.className} mb-4 text-2xl text-red-600 uppercase`}>
                  Better Knowledge of Nutrition
                </h2>
                <p className='mb-4'>
                  Has science improved since those days? Of course! But has the quality of food increased? Not even
                  close. If anything the qualities of foods have decreased extensively since then with GMOs, Fillers,
                  preservatives, etc being added to anything and everything to increase profit.
                </p>
                <p className='mb-4'>
                  "You can't compare single ply to multi ply or raw etc" the same things can be witnessed across every
                  level of strength sports regardless of the category so that's not the case either.
                </p>
                <p className='mb-4'>
                  So what is it? Has the training methodologies really increase THAT much? Conjugate training in my
                  opinion is the best method of strength training and conjugate has been around since the 90's so what
                  is the big difference that's making all the guys of today more efficient smaller stronger athletes?
                </p>
                <p className='mb-4'>
                  Having over 30 years of competing in all federations around the globe and done 45+ meets any thoughts,
                  ladies & gents.
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
