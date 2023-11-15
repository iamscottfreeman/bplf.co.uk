import Head from 'next/head';
import Link from 'next/link';

import { fonts } from '@/helpers/fonts';
import Header from '@/components/header/Header';
import Navbar from '@/components/navigation/Navbar';
import Footer from '@/components/footer/Footer';
import PageHeader from '@/components/atoms/PageHeader';
import Container from '@/components/atoms/Container';
import Button from '@/components/atoms/Button';
import IconPhone from '@/components/icons/IconPhone';
import IconMail from '@/components/icons/IconMail';
import IconPin from '@/components/icons/IconPin';
import ContactForm from '@/components/atoms/ContactForm';

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact Us | British Powerlifting Federation</title>
      </Head>
      <Header />
      <Navbar />
      <main>
        <section>
          <PageHeader title='Contact Us' />
          <Container className='py-10'>
            <div className='flex flex-col lg:flex-row space-y-10 lg:space-y-0 lg:space-x-4'>
              <div className='lg:w-1/3 text-xl'>
                <h2 className={`${fonts.header.className} uppercase text-3xl mb-4`}>We're here to help</h2>
                <p className='mb-6'>
                  <Link href='mailto:bpf.secretary@gmail.com'>
                    <IconMail className='inline mr-2' />
                    BPF Email: <span className='hover:underline'>bpf.secretary@gmail.com</span>
                  </Link>
                </p>
                <p className='mb-6'>
                  <Link href='mailto:wpuheadoffice@gmail.com'>
                    <IconMail className='inline mr-2' />
                    WPU Email: <span className='hover:underline'>wpuheadoffice@gmail.com</span>
                  </Link>
                </p>
                <p className='mb-6'>
                  <Link href='tel:+441773687667'>
                    <IconPhone className='inline mr-2' />
                    Tel: <span className='hover:underline'>01773 687 667</span>
                  </Link>
                </p>
                <p className='mb-6'>
                  <Link href='https://goo.gl/maps/ziGiLquFfupyB6XN8' target='_blank'>
                    <IconPin className='inline mr-2' />
                    Address:
                    <br />
                    <span className='ml-8 inline-block hover:underline'>
                      The BPF Academy, Unit 3 Baily Brook Business Park, Langley Mill, NG16 4BE
                    </span>
                  </Link>
                </p>
              </div>
              <div className='lg:w-1/3'>
                <h2 className={`${fonts.header.className} uppercase text-3xl mb-4`}>Contact Form</h2>
                <ContactForm />
              </div>
              <div className='lg:w-1/3'>
                <h2 className={`${fonts.header.className} uppercase text-3xl mb-4`}>Event Feedback</h2>
                <p className='mb-4'>
                  If you attended a British Powerlifting Federation event and would like to leave feedback on your
                  experience, please do so in our feedback form.
                </p>
                <p>
                  <Button href='https://forms.gle/6P8iuGb4NBfzueLV7' target='_blank'>
                    Event Feedback Form
                  </Button>
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
