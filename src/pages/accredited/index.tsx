import Head from 'next/head';
import Image from 'next/image';

import { fonts } from '@/helpers/fonts';
import Header from '@/components/header/Header';
import Navbar from '@/components/navigation/Navbar';
import Footer from '@/components/footer/Footer';
import PageHeader from '@/components/atoms/PageHeader';
import Container from '@/components/atoms/Container';

import chris from './chris.webp';
import joe from './joe.jpg';
import sam from './sam.jpg';
import jim from './jim.jpg';

export default function Accredited() {
  return (
    <>
      <Head>
        <title>Accredited Gyms & Trainers | British Powerlifting Federation</title>
      </Head>
      <Header />
      <Navbar />
      <main>
        <section>
          <PageHeader title='Accredited Gyms & Trainers' />
          <Container className='grid grid-cols-1 justify-center w-fit py-10'>
            <div className='mb-10'>
              <div className='md:flex'>
                <div className='w-80 mr-4 mb-4 shrink-0'>
                  <Image src={chris} alt='' className='w-80 rounded-md' />
                </div>
                <div>
                  <h2 className={`${fonts.header.className} uppercase text-red-600 text-5xl mb-4`}>Chris</h2>
                  <p className='mb-4 text-2xl font-bold'>Manager / Head Coach</p>
                  <p className='mb-4 font-bold'>Qualification:</p>
                  <p className='mb-4'>
                    BSc Applied Sport Science (Loughborough) (Including: Applied Performance Analysis, Advanced topics
                    in Exercise Psychology, Strength & Conditioning Training, Advanced Topics in Physical Activity &
                    Health, Performance Nutrition, Performance Physiology) (Research Project: Sticking Points in Squat,
                    Benchpress and Deadlift)
                  </p>
                  <p className='mb-4'>
                    FdSc Sports Science (Derby ) (Including: Sports Nutrition, Sports Conditioning, Sports Psychology,
                    Applied Sports Psychology, Physiology, Biomechanics)
                  </p>
                  <p className='mb-4'>Lv 4 Strength & Conditioning (KBT Education)</p>
                  <p className='mb-4'>Lv 4 Remedial Therapy (Premier Global)</p>
                  <p className='mb-4'>Lv 3 Sports Massage Therapy (Premier Global)</p>
                  <p className='mb-4'>Lv 3 Advanced Personal Trainer (Premier Global)</p>
                  <p className='mb-4'>Lv 1 Powerlifting Coach (British Drug Free Powerlifting Association)</p>
                  <p className='mb-4'>Lv 2 Powerlifting Coach (British Powerlifting)</p>
                  <p className='mb-4'>Group Exercise Instructor (Premier Global)</p>
                  <p className='mb-4'>Specialist Populations Instructor (Premier Global)</p>
                  <p className='mb-4'>Kettlebell Instructor (Various)</p>
                  <p className='mb-4'>Registered Clean Coach (WADA)</p>
                  <p className='mb-4'>Anti-Doping advisor</p>
                  <p className='mb-4'>Currently Studying: MSc Musculoskeletal Sports Science & Health</p>
                  <p className='mb-4 font-bold'>Experience:</p>
                  <p className='mb-4'>
                    Army Veteran, Coach - AWPC European Championships, Coach - ABPU British Championships, Coach - ABPU
                    Qualifiers, Coach - BP 4 Counties, Coach - Strongman/Woman (Various)
                  </p>
                  <p className='mb-4 font-bold'>Specialist Areas:</p>
                  <p className='mb-4'>
                    Strength & Conditioning, Injury Rehabilitation, Weight loss / Body Composition Change
                  </p>
                </div>
              </div>
            </div>

            <div className='mb-10'>
              <div className='md:flex'>
                <div className='w-80 mr-4 mb-4 shrink-0'>
                  <Image src={joe} alt='' className='w-80 rounded-md' />
                </div>
                <div>
                  <h2 className={`${fonts.header.className} uppercase text-red-600 text-5xl mb-4`}>Joe Wright</h2>
                  <p className='mb-4 text-2xl font-bold'>Coach</p>
                  <p className='mb-4 font-bold'>Qualifications:</p>
                  <p className='mb-4'>
                    FdSc Sports Science & Coaching (Nottingham Trent) (Including: Strength & Conditioning, Biomechanics,
                    Sports Psychology, Coaching in youth talent Development, Physiology, Sports Talent Development,
                    Sports Nutrition, Sports Coaching),
                  </p>
                  <p className='mb-4'>Lv3 Sports Leadership,</p>
                  <p className='mb-4'>Lv2 Wheelchair Basketball Coach, Lv2 Wheelchair Basketball Officiating,</p>
                  <p className='mb-4'>Lv1 Hockey Coach,</p>
                  <p className='mb-4'>Lv1 Rugby Coach,</p>
                  <p className='mb-4'>Dodgeball Coach.</p>
                  <p className='mb-4 font-bold'>Experience:</p>
                  <p className='mb-4'>
                    Assistant Coach - NTU Wheelchair Basketball, Coach - Junior Nottingham Tennis Open, Coach -
                    Sainsburies School Games, Coach - Change 4 Life Initiative, Former Athlete - County level Wheelchair
                    Athletics & Para - Powerlifting, Former Athlete - East Midlands Wheelchair Basketball U19's, Former
                    Athlete - East Midlands Boccia.
                  </p>
                  <p className='mb-4'>Anti - Doping Advisor</p>
                  <p className='mb-4 font-bold'>Specialist Areas:</p>
                  <p className='mb-4'>Strength Training, Para-Powerlifting, Disability Sports, Youth Development.</p>
                </div>
              </div>
            </div>

            <div className='mb-10'>
              <div className='md:flex'>
                <div className='w-80 mr-4 mb-4 shrink-0'>
                  <Image src={jim} alt='' className='w-80 rounded-md' />
                </div>
                <div>
                  <h2 className={`${fonts.header.className} uppercase text-red-600 text-5xl mb-4`}>Jim Nuttall</h2>
                  <p className='mb-4 text-2xl font-bold'>Coach</p>
                  <p className='mb-4 font-bold'>Qualifications:</p>
                  <p className='mb-4'>Personal Trainer/ Health Related Fitness HNC</p>
                  <p className='mb-4'>Sports Massage NVQ level 2 Achievements</p>
                  <p className='mb-4'>
                    Multiple British Title Winner World Champion Jnr / Open Multiple national, European and World
                    Records
                  </p>
                  <p className='mb-4'>
                    Former Biggest Equipped Bench Presser in British History National record and Title holder across 5
                    weight classes - only man in British history to do so!
                  </p>
                  <p className='mb-4'>
                    Offering online coaching and 1-2-1 hands-on training for technique work or equipment specialist
                    training.
                  </p>
                </div>
              </div>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
