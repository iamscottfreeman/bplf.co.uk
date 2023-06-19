import Head from 'next/head';

import { fonts } from '@/helpers/fonts';
import Header from '@/components/header/Header';
import Navbar from '@/components/navigation/Navbar';
import Footer from '@/components/footer/Footer';
import PageHeader from '@/components/atoms/PageHeader';
import Container from '@/components/atoms/Container';
import ResultLink from '@/components/atoms/ResultLink';

import backgroundImage from '../../images/stock/9.jpg';

export default function CompetitionResults() {
  return (
    <>
      <Head>
        <title>Competition Results | Results | British Powerlifting Federation</title>
      </Head>
      <Header />
      <Navbar />
      <main>
        <section>
          <PageHeader backgroundImage={backgroundImage} title='Competition Results' />
          <Container className='py-10'>
            <h2 className={`${fonts.header.className} uppercase text-center text-5xl mb-4 text-red-600`}>2023</h2>
            <div className='md:grid grid-cols-3 items-center text-center gap-4'>
              <ResultLink title='RECORD BREAKERS 2023' link='/downloads/record-brackets-nov-12-2022.xls' />
              <ResultLink title='MANSFIELD MANIA 2023' link='/downloads/Mansfield-Mania.xlsx' />
              <ResultLink
                title='BRITISH CHAMPIONSHIPS 2023'
                link='/downloads/British-championships-2023-1.xlsx'
                isLast
              />
            </div>
            <h2 className={`${fonts.header.className} uppercase text-center text-5xl mt-20 mb-4 text-red-600`}>2022</h2>
            <div className='md:grid grid-cols-3 items-center text-center gap-4'>
              <ResultLink title='RECORD BREAKERS 2022' link='/downloads/RECORD-BREAKERS12.22.xlsx' />
              <ResultLink title='DAY OF THE DEAD 2022' link='/downloads/DAY-OF-THE-DEAD-FULL-COM.xls' />
              <ResultLink title='MAYHEM IN BOSTON 2022' link='/downloads/MAYHEM-IN-BOSTON-.opl-1.xlsx' />
              <ResultLink
                title='THE BPF ACADEMY CUT 2022'
                link='/downloads/THE-BPF-ACADEMY-CUT-2nd-April-2022-1.xlsx'
              />
              <ResultLink
                title='MIDLANDS BPF QUALIFIER 2022'
                link='/downloads/MIDLANDS-BPF-QUALIFIER-2nd-March-2022-1.xlsx'
              />
              <ResultLink
                title='BPF ULTIMATE BRITISH CHAMPIONSHIPS 2022'
                link='/downloads/BPF-Ultimate-British-Championships-full-power-2021-1.xlsx'
              />
              <ResultLink
                title='WARRIORS NORTHERN BPF QUALIFIER 2022'
                link='/downloads/warriors-northern-BPF-qualifier-December-2021-1.xlsx'
              />
              <ResultLink title='THE MONTY CROWN 2022' link='/downloads/The-Monty-Crown-9th-april-2022-1.xlsx' />
              <ResultLink
                title='BRITISH SINGLE LIFTS FINALS 2022'
                link='/downloads/British-Single-Lifts-Finals-2021-1.xlsx'
              />
              <ResultLink
                title='BPF NORTHERN QUALIFIER 2022'
                link='/downloads/BPF-NORTHEN-QUOLIFIER-6th-march-2022-1.xlsx'
              />
              <ResultLink
                title='BPF ACADEMY 2022 QUALIFIER'
                link='/downloads/BPF-academy-2022-qualifier-2.xlsx'
                isLast
              />
            </div>
            <h2 className={`${fonts.header.className} uppercase text-center text-5xl mt-20 mb-4 text-red-600`}>2021</h2>
            <div className='md:grid grid-cols-3 items-center text-center gap-4'>
              <ResultLink title='SPARTAN SUMMER BASH 2021' link='/downloads/spartan-summer-bash.opl-2.xlsx' />
              <ResultLink
                title='WARRIORS NORTHERN BPF QUALIFIER 2021'
                link='/downloads/warriors-northern-BPF-qualifier.opl_-1.xlsx'
              />
              <ResultLink title='BPF ACADEMY PUSH PULL 2021' link='/downloads/BPF-Academy-push-pull.opl_.xlsx' />
              <ResultLink
                title='MR UNIVERSE 2021'
                link='/downloads/Mr-Universe-2021-prize-money-meet.opl_.xlsx'
                isLast
              />
            </div>
            <h2 className={`${fonts.header.className} uppercase text-center text-5xl mt-20 mb-4 text-red-600`}>2020</h2>
            <div className='md:grid grid-cols-3 items-center text-center gap-4'>
              <ResultLink
                title='BATTLE OF THE DRAGONS WALES 2020'
                link='/downloads/Battel-of-the-dragons-Wales-2020.opl-1-5.xlsx'
                isLast
              />
            </div>
            <h2 className={`${fonts.header.className} uppercase text-center text-5xl mt-20 mb-4 text-red-600`}>2016</h2>
            <div className='md:grid grid-cols-3 items-center text-center gap-4'>
              <ResultLink title='BRITISH 2016 & 2018' link='/downloads/British.zip' />
              <ResultLink title='PL_MEN 90KG 2016' link='/downloads/PL_Men_90kg-1.pdf' />
              <ResultLink title='BRITISH-QUALIFIERS 2016' link='/downloads/British-Qualifier.zip' />
              <ResultLink
                title='WPU EUROPEAN CHAMPIONSHIPS 2016 BENCHPRESS RESULTS'
                link='/downloads/WPU-European-Championships-2016_BenchPress_results-1.pdf'
              />
              <ResultLink
                title='WPU EUROPEAN CHAMPIONSHIPS 2016 POWERLIFTING RESULTS'
                link='/downloads/WPU-European-Championships-2016_Powerlifting_results-1.pdf'
              />
              <ResultLink
                title='WPU EUROPEAN CHAMPIONSHIPS 2016 DEADLIFT RESULTS'
                link='/downloads/WPU-European-Championships-2016_Deadlift_results-1.pdf'
              />
              <ResultLink title='RESULTS_2 2016' link='/downloads/Results-2.zip' isLast />
            </div>
            <h2 className={`${fonts.header.className} uppercase text-center text-5xl mt-20 mb-4 text-red-600`}>2015</h2>
            <div className='md:grid grid-cols-3 items-center text-center gap-4'>
              <ResultLink title='RESULTS WPU WORLDS 2015' link='/downloads/ResultsWPU-Worlds.zip' />
              <ResultLink title='EUROPEAN 2015' link='/downloads/European.zip' />
              <ResultLink title='DERBY 14.11.15' link='/downloads/Derby-14.11.15.xls' />
              <ResultLink title='APRIL 2015' link='/downloads/April-2015.zip' />
              <ResultLink title='DERBY 01.03.15' link='/downloads/DERBY-01.03.15.xls' />
              <ResultLink title='WALES MARCH 2015' link='/downloads/WALES-08.03.15.xls' isLast />
            </div>
            <h2 className={`${fonts.header.className} uppercase text-center text-5xl mt-20 mb-4 text-red-600`}>2014</h2>
            <div className='md:grid grid-cols-3 items-center text-center gap-4'>
              <ResultLink title='MANSFIELD APRIL 2014' link='/downloads/British-Qualifier-1.zip' />
              <ResultLink title='WORLD 2014' link='/downloads/Worlds.zip' isLast />
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
