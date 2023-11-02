import Head from 'next/head';
import Image from 'next/image';

import { fonts } from '@/helpers/fonts';
import Header from '@/components/header/Header';
import Navbar from '@/components/navigation/Navbar';
import Footer from '@/components/footer/Footer';
import PageHeader from '@/components/atoms/PageHeader';
import Container from '@/components/atoms/Container';
import Button from '@/components/atoms/Button';

import awards from '../../../public/gallery/380219207_265527036489640_6710489501146464722_n.jpg';

export default function Membership() {
  return (
    <>
      <Head>
        <title>Membership | British Powerlifting Federation</title>
      </Head>
      <Header />
      <Navbar />
      <main>
        <section>
          <PageHeader title='Membership' />
          <Container className='py-10'>
            <div className='flex flex-col lg:flex-row'>
              <div className='lg:w-2/3'>
                <h2 className={`${fonts.header.className} uppercase text-5xl mb-4`}>Join the BPF</h2>
                <p className='mb-4'>
                  <Button href='https://forms.gle/UXePXxfwFc3wVi7k8' target='_blank'>
                    Membership Form
                  </Button>
                </p>
                <h2 className={`${fonts.header.className} uppercase text-3xl mt-8 mb-4`}>Membership Information</h2>
                <p className='mb-4'>
                  All membership purchased from the 1st November 2022 will run until the 1st November 2023.
                </p>
                <p className='mb-4'>
                  All new 2023-2024 memberships will run until the 1st of November, 2024.
                  <br />
                  Please check your expiry dates on your membership card.
                </p>
                <p className='mb-4'>
                  You can pay your Membership Fees via bank transfer to:
                  <br />
                  BPF Academy LTD
                  <br />
                  A/N 87738971
                  <br />
                  S/C 60-83-71
                  <br />
                  Or via Paypal to marcusmro6@gmail.com.
                </p>
                <p className='mb-4'>
                  We are tested and non tested federation, it's your choice what you wish to lift as. If you wish to be
                  a tested lifter please specify.
                </p>

                <h2 className={`${fonts.header.className} uppercase text-3xl mt-8 mb-4`}>Anti-doping Policy</h2>
                <p className='mb-4'>
                  British Powerlifting Federation is unequivocal in its opposition to drugs in sport and strictly
                  adheres to the rules of Drug-free powerlifters. All international lifters are required to register and
                  are included in their Random Drug Testing at tested competitions. In addition, competitors for British
                  Championships are required to complete a Random Testing membership form as part of our new online
                  application process, to enable tested BPF athletes to compete at international meets and World
                  Championships in the time period preceding the championships. British Powerlifting Federation is the
                  only UK powerlifting organisation to have drug testing carried out.
                </p>
              </div>
              <div className='lg:w-1/3'>
                <Image src={awards} alt='' className='rounded-md' />
              </div>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
