import Head from 'next/head';

import Header from '@/components/header/Header';
import Navbar from '@/components/navigation/Navbar';
import Footer from '@/components/footer/Footer';
import PageHeader from '@/components/atoms/PageHeader';
import Container from '@/components/atoms/Container';
import Video from '@/components/atoms/Video';
import { fonts } from '@/helpers/fonts';

export default function Videos() {
  return (
    <>
      <Head>
        <title>Video Gallery | British Powerlifting Federation</title>
      </Head>
      <Header />
      <Navbar />
      <main>
        <section>
          <PageHeader title='Video Gallery' />
          <Container className='py-10'>
            <div className='grid lg:grid-cols-2 space-x-4'>
              <div>
                <div>
                  <h2 className={`${fonts.header.className} text-center uppercase text-2xl mb-2`}>
                    National Sikh Powerlifting Championships 2023
                  </h2>
                </div>
                <Video
                  file='/videos/NationalSikhPowerliftingChampionship2023.mp4'
                  controls
                  playing={false}
                  className='videoWrapper'
                />
              </div>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
