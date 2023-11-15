import Head from 'next/head';

import Header from '@/components/header/Header';
import Navbar from '@/components/navigation/Navbar';
import Footer from '@/components/footer/Footer';
import PageHeader from '@/components/atoms/PageHeader';
import Container from '@/components/atoms/Container';
import { fonts } from '@/helpers/fonts';

import Button from '@/components/atoms/Button';

export default function Testing() {
  return (
    <>
      <Head>
        <title>Drug Testing and Results | British Powerlifting Federation</title>
      </Head>
      <Header />
      <Navbar />
      <main>
        <section>
          <PageHeader title='Drug Testing and Results' />
          <Container className='py-10'>
            <h2 className={`${fonts.header.className} uppercase text-4xl mb-4`}>Results</h2>
            <div className='flex space-x-4'>
              <p className='mb-4'>
                <Button href='/downloads/DRUG-TEST-OUTCOME-2023.xlsx'>Testing Results 2023</Button>
              </p>
              <p className='mb-4'>
                <Button href='/downloads/TESTING-RESOLTS.xlsx'>Testing Results 2022</Button>
              </p>
            </div>
            <h2 className={`${fonts.header.className} uppercase text-3xl mt-10 mb-4`}>Anti-doping Policy</h2>
            <p className='mb-4'>
              British Powerlifting Federation is unequivocal in its opposition to drugs in sport and strictly adheres to
              the rules of Drug-free powerlifters. All international lifters are required to register and are included
              in their Random Drug Testing at tested competitions. In addition, competitors for British Championships
              are required to complete a Random Testing membership form as part of our new online application process,
              to enable tested BPF athletes to compete at international meets and World Championships in the time period
              preceding the championships. British Powerlifting Federation is the only UK powerlifting organisation to
              have drug testing carried out.
            </p>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
