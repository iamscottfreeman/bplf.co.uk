import Head from 'next/head';

import Header from '@/components/header/Header';
import Navbar from '@/components/navigation/Navbar';
import Footer from '@/components/footer/Footer';
import Hero from './homepage/Hero';
import Welcome from './homepage/Welcome';
import Testimonials from './homepage/Testimonials';
import MeetOurFounder from './homepage/MeetOurFounder';

export default function Home() {
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
        <Testimonials />
        <MeetOurFounder />
      </main>
      <Footer />
    </>
  );
}
