import Head from 'next/head';

import Header from '@/components/header/Header';
import Navbar from '@/components/navigation/Navbar';
import Footer from '@/components/footer/Footer';

import Hero from './Hero';
import Welcome from './Welcome';
import Testimonials from './Testimonials';
import MeetOurFounder from './MeetOurFounder';
import FreeAffiliation from './Video';

export default function Homepage() {
  return (
    <>
      <Head>
        <title>British Powerlifting Federation</title>
      </Head>
      <Header />
      <Navbar />
      <main>
        <Hero />
        <Welcome />
        <FreeAffiliation />
        <Testimonials />
        <MeetOurFounder />
      </main>
      <Footer />
    </>
  );
}
