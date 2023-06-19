import Head from 'next/head';
import Image from 'next/image';

import Header from '@/components/header/Header';
import Navbar from '@/components/navigation/Navbar';
import Footer from '@/components/footer/Footer';
import PageHeader from '@/components/atoms/PageHeader';
import Container from '@/components/atoms/Container';
import Button from '@/components/atoms/Button';

import backgroundImage from '../../images/stock/9.jpg';
import img from './mr-olympia-2022.jpeg';

export default function BlogPost() {
  return (
    <>
      <Head>
        <title>Mr Olympia 2022 | Blog | British Powerlifting Federation</title>
      </Head>
      <Header />
      <Navbar />
      <main>
        <section>
          <PageHeader backgroundImage={backgroundImage} title='Mr Olympia 2022' />
          <Container className='py-10 xl:w-2/3'>
            <div className='flex flex-col lg:flex-row'>
              <div className='lg:w-2/3 mr-4'>
                <p className='mb-4'>
                  On December 12th I fly out to Mr Olympia Pro Las Vegas 2022. My journey was to say the hardest ever.
                  In 2018 I was diagnosed with Blood Cancer and started treatment in 2019 having Polyphemia Ruba Vera
                  rare cancer that comes from my bone marrow was tough to accept. In 2019 I had a major heart attack and
                  had 2 heart operations I died but the doctors saved me.
                </p>
                <p className='mb-4'>
                  I was told by guys' hospitals in London I would never lift a weight again I was devastated and then
                  found out I had cardiomyopathy and heart failure with heart disease. in 2020 I had another heart
                  attack and had more surgery.
                </p>
                <p className='mb-4'>
                  In 2021 December surgery again and more in January on May at the British Championships I qualified for
                  Mr Olympia in Las Vegas and broke John Neighbours 30 year old record with 8 week's training. In July I
                  had chemotherapy for my cancer and followed a DVT in September.
                </p>
                <p className='mb-4'>
                  I am going to Olympia and I have thought tooth and nail literally until my last breath, whatever
                  happens at Olympia I am proud to make the greatest stage on earth thank you to all that have stood by
                  me even when I was at my lowest in life and trust me some people did put the boot in so thank you too
                  for feeding me to pick myself up when I am staring death in its face.
                </p>
                <p className='mb-4'>
                  I will be on stage yes I am now disabled and have cancer and not much of my heart working but I love
                  this sport and love the IPL and what it stands for xxxxx
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
