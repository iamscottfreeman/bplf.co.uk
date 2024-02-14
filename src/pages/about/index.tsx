import Head from 'next/head';
import Image from 'next/image';

import { fonts } from '@/helpers/fonts';
import Header from '@/components/header/Header';
import Navbar from '@/components/navigation/Navbar';
import Footer from '@/components/footer/Footer';
import PageHeader from '@/components/atoms/PageHeader';
import Container from '@/components/atoms/Container';

import aboutUs1 from './about-us-1.jpg';
import aboutUs2 from './about-us-2.jpg';

export default function About() {
  return (
    <>
      <Head>
        <title>About | British Powerlifting Federation</title>
      </Head>
      <Header />
      <Navbar />
      <main>
        <section>
          <PageHeader title='About Us' />
          <Container className='py-10'>
            <h2 className={`${fonts.header.className} uppercase text-center text-6xl mb-4`}>
              We are the British Powerlifting Federation
            </h2>
            <div className='flex flex-col lg:flex-row space-x-4'>
              <div className='lg:w-3/5'>
                <h3 className={`${fonts.header.className} uppercase text-4xl text-red-600 mb-2`}>Our Mission</h3>
                <p className='mb-4'>
                  To use sports to serve and impact the lives of communities at the British Powerlifting Federation &
                  Academy.
                </p>
                <h3 className={`${fonts.header.className} uppercase text-4xl text-red-600 mb-2`}>Our Vision</h3>
                <p className='mb-4'>
                  Our vision is to set the standard of excellence for sports by providing first class programs,
                  professional instruction, and life skills. These sports opportunities and programs will contribute in
                  a unique way to their development as athletes and citizens for the future.
                </p>
                <h3 className={`${fonts.header.className} uppercase text-4xl text-red-600 mb-4`}>Our History</h3>
                <p className='mb-4'>
                  The BPF began in 2011 as a Sports and Mentoring Outreach. The BPF was founded by former Olympic
                  Weightlifter /Coach, Marcus Griffiths . We have evolved over the years as hundreds of athletes, youth
                  and adults have utilized The BPF to prepare for competitive level sports, participate in Powerlifting
                  recreational sports, or to simply maintain a healthy lifestyle. From day one, we have always strived
                  to meet the wellness needs of athletes, families and communities.
                </p>
                <h3 className={`${fonts.header.className} uppercase text-4xl text-red-600 mb-4`}>Our Philosophy</h3>
                <p className='mb-4'>
                  We believe sports is one of the greatest "Training Grounds" for life. When the intrinsic values of
                  sports are properly modeled and taught, kids will then have the groundwork needed to be successful in
                  life. This is why we train the total athlete by incorporating the best skill instruction with
                  character, core values At our Academy and leadership training. With involvement in Sports in the
                  British Powerlifting Federation & Academy Prep programs,seeds will have been planted and cultivated to
                  develop well rounded people.
                </p>
                <h3 className={`${fonts.header.className} uppercase text-4xl text-red-600 mb-4`}>Our Values</h3>
                <p className='mb-4'>
                  Most companies are identified by what they value. Values are what drive our decisions and set the
                  directional course for our organization. Here are some core values we deeply believe in at The BPF: At
                  the Academy & British Powerlifting Federation since 2011. We value the powerful leadership of a coach
                  and president Marc Griffiths stated, "A coach will influence more people in a year than most people do
                  in a lifetime." Coaches serve as a trusted mentor to help navigate people through the land mines of
                  sports and life. The impact of coaches and their influence on athletes will far transcend the
                  boundaries of "playing sports" in Powerlifting & health.
                </p>
              </div>
              <div className='hidden lg:block lg:w-2/5'>
                <Image src={aboutUs2} alt='' className='rounded-md' />
              </div>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
