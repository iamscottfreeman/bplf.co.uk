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
                <h2 className={`${fonts.header.className} uppercase text-5xl mb-4`}>Join the BPF/WPU</h2>
                <p className='mb-4 text-2xl'>Join us at the BPF/WPU, and you'll get:</p>
                <ul className='mb-4 list-disc list-inside'>
                  <li>Access into WPU meets</li>
                  <li>Access into 100% Raw meets</li>
                  <li>Invites to Expo Pro meets</li>
                  <li>Drug Tested meets</li>
                  <li>Non Tested meets</li>
                  <li>All officials DBS checked</li>
                  <li>Free Record certificates</li>
                  <li>A Sports Academy for our members</li>
                  <li>A fully staffed head office</li>
                  <li>All employees and loading crew fully insured, along with public liability insurance</li>
                  <li>A free Team GB Shirt when competing abroad</li>
                  <li>Invites to Worlds & European Championships</li>
                </ul>
                <p className='mb-4 font-bold'>
                  Ask yourself this question: what do you actually gain from your membership? Are they working hard to
                  give a good quality service?
                </p>
                <p className='mb-4'>
                  Food for thought! Only the best for our members at the British Powerlifting Federation & Academy.
                </p>
                <h2 className={`${fonts.header.className} uppercase text-5xl mt-10 mb-4`}>Membership Details</h2>
                <p className='mb-4'>All BPF members will also be given WPU membership free of charge.</p>
                <p className='mb-4'>
                  All memberships purchased from the 1st November 2022 will run until the 1st November 2023.
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
                  We are a tested and non tested federation, it's your choice what you wish to lift as. If you wish to
                  be a tested lifter please specify.
                </p>
                <p className='mb-4'>
                  <Button href='https://forms.gle/UXePXxfwFc3wVi7k8' target='_blank'>
                    Individuals Membership Form
                  </Button>
                </p>
                <h2 className={`${fonts.header.className} uppercase text-5xl mt-20 mb-4`}>
                  Become Affiliated with the WPU
                </h2>
                <p className='mb-4'>Dear interested party,</p>
                <p className='mb-4'>
                  Most of you already know me and have been to several of my meets. I have decided to reopen the World
                  Powerlifting Union. This will give lots of opportunities at a affordable price to European and
                  commonwealth countries, along with a top quality service.
                </p>
                <p className='mb-4'>
                  The fee will be just a standard fee of £100. There will be no WPU member fee of £20. We want to give
                  as many opportunities as possible in growing your federations as well as the WPU in a fair and equal
                  manner.
                </p>
                <p className='mb-4'>I welcome you with open arms and look forward to working with you all again.</p>
                <p className='mb-4'>- Marcus Griffiths</p>
                <p className='mb-4'>
                  <Button
                    href='https://docs.google.com/forms/d/e/1FAIpQLSeNP456H9shkhC9FS6CB49bPKB7banKW0fh9RMLV7aKlEjK5A/viewform'
                    target='_blank'
                  >
                    Affiliation application
                  </Button>
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
