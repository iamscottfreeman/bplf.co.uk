import Head from 'next/head';
import Image from 'next/image';

import { fonts } from '@/helpers/fonts';
import Header from '@/components/header/Header';
import Navbar from '@/components/navigation/Navbar';
import Footer from '@/components/footer/Footer';
import PageHeader from '@/components/atoms/PageHeader';
import Container from '@/components/atoms/Container';
import Button from '@/components/atoms/Button';

import backgroundImage from '../../images/stock/9.jpg';
import iplLogo from '../../images/ipl-logo.jpg';

export default function Ipl() {
  return (
    <>
      <Head>
        <title>About the IPL | British Powerlifting Federation</title>
      </Head>
      <Header />
      <Navbar />
      <main>
        <section>
          <PageHeader backgroundImage={backgroundImage} title='About the IPL' />
          <Container className='py-10'>
            <div className='flex flex-col lg:flex-row space-x-4'>
              <div className='lg:w-3/5'>
                <h3 className={`${fonts.header.className} uppercase text-4xl text-red-600 mb-2`}>Mission Statement</h3>
                <p className='mb-4'>
                  The International Powerlifting League (IPL) is a leading powerlifting organization with representation
                  in several foreign countries. It is the mission of the IPL to provide a world-class international
                  platform, affiliation opportunity, and governing body for affiliates across the globe.
                </p>
                <p className='mb-4'>
                  The IPL is the governing body responsible for international powerlifting competitions and the
                  management of International Referees, Affiliates, and World Records. The IPL provides tested and
                  non-tested powerlifting competition of uniform high quality which is available to all athletes who
                  meet the criteria for membership.
                </p>
                <p className='mb-4'>
                  The IPL is a premier powerlifting federation created by lifters, with the goal of ensuring lifters are
                  provided an opportunity and location of showcasing the result of their efforts in a safe and
                  competitive environment. The IPL provides opportunities for a range of lifters from the beginner, to
                  the elite level. Participate in an IPL event for example The Mr Olympia, “We Are the Leader.”
                </p>
                <p className='mb-4'>BPF & IPL European President</p>
                <p className='mb-4'>Marcus Griffiths</p>
                <p className='mb-4'>
                  <Button href='/downloads/2023-IPL-RULE-BOOK-FINAL-1-1.pdf' target='_blank'>
                    Download IPL Rule Book
                  </Button>
                </p>
              </div>
              <div className='hidden lg:block lg:w-2/5'>
                <Image src={iplLogo} alt='' className='rounded-md' />
              </div>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
