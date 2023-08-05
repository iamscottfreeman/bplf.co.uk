import Head from 'next/head';
import Image from 'next/image';

import { fonts } from '@/helpers/fonts';
import Header from '@/components/header/Header';
import Navbar from '@/components/navigation/Navbar';
import Footer from '@/components/footer/Footer';
import PageHeader from '@/components/atoms/PageHeader';
import Container from '@/components/atoms/Container';

import Member from './Member';
import marcus from './marcus.jpg';
import petra from './petra.jpg';
import julie from './julie.jpg';
import charlotte from './charlotte.jpg';
import chris from './chris.jpg';
import scott from './scott.jpg';
import jodi from './jodi.jpg';
import paul from './paul.jpg';
import placeholder from './placeholder.png';

export default function MeetTheTeam() {
  return (
    <>
      <Head>
        <title>Meet the Team | British Powerlifting Federation</title>
      </Head>
      <Header />
      <Navbar />
      <main>
        <section>
          <PageHeader title='Meet the Team' />
          <Container className='grid grid-cols-1 justify-center w-fit py-10'>
            <div className='mb-10'>
              <div className='md:flex'>
                <div className='w-80 mr-4 mb-4'>
                  <Image src={marcus} alt='' className='w-80 rounded-md' />
                </div>
                <div>
                  <h2 className={`${fonts.header.className} uppercase text-red-600 text-5xl mb-4`}>Marcus Griffith</h2>
                  <p className='mb-4 text-2xl font-bold'>President of the British Powerlifting Federation</p>
                  <p className='mb-4 text-xl font-bold'>European President of the International Powerlifting League</p>
                  <p className='mb-4'>Founder of British Powerlifting Federation & World Powerlifting Union</p>
                  <p className='mb-4'>International referee for the WPU, WRPF & IPL</p>
                  <p className='mb-4'>Olympic weightlifting athlete</p>
                  <p className='mb-4'>The only man to have won Mr Olympia 5 times</p>
                  <p className='mb-4'>21 x World Powerlifting Champion</p>
                </div>
              </div>
            </div>

            <div className='mb-10'>
              <div className='md:flex'>
                <div className='w-80 mr-4 mb-4'>
                  <Image src={petra} alt='' className='w-80 rounded-md' />
                </div>
                <div>
                  <h2 className={`${fonts.header.className} uppercase text-red-600 text-5xl mb-4`}>Lady Petra Kent</h2>
                  <p className='mb-4 text-2xl font-bold'>Vice President of the British Powerlifting Federation</p>
                  <p className='mb-4 text-xl font-bold'>General Secretary of the International Powerlifting League</p>
                  <p className='mb-4'>IPL European & Commonwealth President Assistant</p>
                  <p className='mb-4'>International WRPF & BPF referee</p>
                  <p className='mb-4'>16 x World titles</p>
                  <p className='mb-4'>13 x British titles</p>
                  <p className='mb-4'>12 x European titles</p>
                  <p className='mb-4'>Records in all titles</p>
                </div>
              </div>
            </div>

            <div className='mb-10 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 space-x-4 -ml-4'>
              <Member name='Peter Battle' title='BPF Referee & Complaints Officer' image={placeholder} />
              <Member name='Julie Churm' title='Staff Official' image={placeholder} />
              <Member name='Damian Copeland' title='Staff Official' image={placeholder} />
              <Member name='Izzy Cotton' title='Staff Official' image={placeholder} />
              <Member name='Jodi Duncan' title='Staff Official' image={placeholder} />
              <Member name='Dan Eccles' title='BPF National Referee' image={placeholder} />
              <Member
                name='Nicola Eldridge'
                title='BPF/ IPL National Referee & Newsletter Editor in Chief'
                image={placeholder}
              />
              <Member name='Scott Freeman' title='Staff Official & Website Manager' image={placeholder} />
              <Member name='John Griffiths' title='BPF / IPL National Referee' image={placeholder} />
              <Member name='Philip Hadley' title='IPL National Referee ' image={placeholder} />
              <Member name='Jake Henderson' title='BPF/ IPL National Referee' image={placeholder} />
              <Member name='Toni Knot' title='Staff Official' image={placeholder} />
              <Member
                name='David Mannering'
                title='Technical Officer & Senior BPF / IPL National Referee'
                image={placeholder}
              />
              <Member name='Jane Mannering' title='BPF Senior Referee & Staff Official' image={placeholder} />
              <Member name='Lucy Moore' title='Staff Official' image={placeholder} />
              <Member name='Jim Nuttall' title='Trainee Referee' image={placeholder} />
              <Member
                name='Tony Power'
                title='Trainee Technical Officer & Senior BPF / IPL International Referee'
                image={placeholder}
              />
              <Member name='Chris Roberts' title='BPF / IPL International Referee' image={placeholder} />
              <Member name='Bekkie Roughton' title='Staff Official' image={placeholder} />
              <Member name='Heather Swane' title='BPF Referee' image={placeholder} />
              <Member name='Paul Wardally' title='Platform Crew Manager' image={placeholder} />
              <Member name='Charlotte Wearing' title='BPF / IPL National Referee ' image={placeholder} />
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
