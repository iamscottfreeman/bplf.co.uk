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
import tony from './tony.jpg';
import nicola from './nicola.jpg';
import jake from './jake.jpg';
import heather from './heather.jpg';
import izzy from './izzy.jpg';
import lucy from './lucy.jpg';
import bekkie from './bekkie.jpg';
import jim from './jim.jpg';
import john from './john.jpg';
import damian from './damian.jpg';
import david from './david.jpg';
import peter from './peter.jpg';
import charlie from './charlie.jpg';
import imran from './imran.jpg';
import dan from './dan.jpg';
import phil from './phil.jpg';
import freddie from './freddie.jpg';
import nicky from './nicky.jpg';
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
                  <h2 className={`${fonts.header.className} uppercase text-red-600 text-5xl mb-4`}>Marcus Griffiths</h2>
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

            <h2 className={`${fonts.header.className} uppercase text-5xl mb-4`}>IPL International Referees</h2>
            <div className='mb-10 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 space-x-4 -ml-4'>
              <Member name='Tony Power' title='IPL International Referee & Trainee Technical Officer' image={tony} />
              <Member name='Chris Roberts' title='IPL International Referee' image={chris} />
            </div>

            <h2 className={`${fonts.header.className} uppercase text-5xl mb-4`}>IPL National Referees</h2>
            <div className='mb-10 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 space-x-4 -ml-4'>
              <Member name='Dan Eccles' title='IPL National Referee' image={dan} />
              <Member name='Nicola Elding' title='IPL National Referee & Newsletter Editor in Chief' image={nicola} />
              <Member name='John Griffiths' title='IPL National Referee' image={john} />
              <Member name='Philip Hadley' title='IPL National Referee ' image={phil} />
              <Member name='Jake Henderson' title='IPL National Referee' image={jake} />
              <Member name='David Mannering' title='IPL National Referee & Technical Officer' image={david} />
              <Member name='Heather Swain' title='IPL National Referee' image={heather} />
              <Member name='Charlotte Wearing' title='IPL National Referee ' image={charlotte} />
            </div>

            <h2 className={`${fonts.header.className} uppercase text-5xl mb-4`}>BPF National Referees</h2>
            <div className='mb-10 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 space-x-4 -ml-4'>
              <Member name='Peter Battle' title='BPF National Referee & Complaints Officer' image={peter} />
              <Member name='Jane Mannering' title='BPF National Referee' image={placeholder} />
            </div>

            <h2 className={`${fonts.header.className} uppercase text-5xl mb-4`}>Trainee Referees</h2>
            <div className='mb-10 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 space-x-4 -ml-4'>
              <Member name='Jim Nuttall' title='Trainee Referee' image={jim} />
            </div>

            <h2 className={`${fonts.header.className} uppercase text-5xl mb-4`}>Staff Officials</h2>
            <div className='mb-10 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 space-x-4 -ml-4'>
              <Member name='Damian Copeland' title='Staff Official' image={damian} />
              <Member name='Izzy Cotton' title='Staff Official' image={izzy} />
              <Member name='Jodi Duncan' title='Staff Official' image={jodi} />
              <Member name='Julie Churm' title='Staff Official' image={julie} />
              <Member name='Scott Freeman' title='Staff Official &amp; Webmaster' image={scott} />
              <Member name='Toni Knot' title='Staff Official' image={placeholder} />
              <Member name='Lucy Moore' title='Staff Official' image={lucy} />
              <Member name='Bekkie Roughton' title='Staff Official' image={bekkie} />
              <Member name='Nicky Shore' title='Official Drug Tester' image={nicky} />
            </div>

            <h2 className={`${fonts.header.className} uppercase text-5xl mb-4`}>Platform Crew</h2>
            <div className='mb-10 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 space-x-4 -ml-4'>
              <Member name='Paul Wardally' title='Platform Crew Manager' image={paul} />
              <Member name='Imran Khan' title='Platform Crew' image={imran} />
              <Member name='Charlie Simon' title='Platform Crew' image={charlie} />
              <Member name='Freddy Simons' title='Platform Crew' image={freddie} />
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
