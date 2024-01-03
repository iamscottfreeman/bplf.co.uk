import Head from 'next/head';

import { fonts } from '@/helpers/fonts';
import Header from '@/components/header/Header';
import Navbar from '@/components/navigation/Navbar';
import Footer from '@/components/footer/Footer';
import PageHeader from '@/components/atoms/PageHeader';
import Container from '@/components/atoms/Container';
import ResultLink from '@/components/atoms/ResultLink';

export default function CompetitionResults() {
  return (
    <>
      <Head>
        <title>Competition Results 2023 | Results | British Powerlifting Federation</title>
      </Head>
      <Header />
      <Navbar />
      <main>
        <section>
          <PageHeader title='Competition Results 2023' />
          <Container className='py-10'>
            <div className='md:grid grid-cols-3 items-center text-center gap-4'>
              <ResultLink title='RECORD BREAKERS 2023' link='/downloads/RECORD-BRAKERS-2023.xlsx' />
              <ResultLink
                title='100% RAW STRICT CURL WORLD CUP 2023 GB'
                link='/downloads/100-RAW-STRICT-CURL-WORLD-CUP-2023-GB.xlsx'
              />
              <ResultLink
                title='Drug Tested World Championships 18th till 22nd October 2023'
                link='/downloads/DrugTestedWorldChampionships2023.xlsx'
              />
              <ResultLink title='Mayhem-in-Boston - 25th March 2023' link='/downloads/Mayhem-in-Boston-112233.xlsx' />
              <ResultLink
                title='Commonwealth and European Championships 2023 - Day 1'
                link='/downloads/E&C-Open-2023-Day1.xlsx'
              />
              <ResultLink
                title='Commonwealth and European Championships 2023 - Day 2'
                link='/downloads/E&C-Open-2023-Day2.xlsx'
              />
              <ResultLink
                title='Commonwealth and European Championships 2023 - Day 3'
                link='/downloads/E&C-Open-2023-Day3.xlsx'
              />
              <ResultLink title='BOSTON 2023' link='/downloads/BOSTON-17092023.xlsx' />
              <ResultLink title='WOMEN OF IRON 2023' link='/downloads/WOMEN-OF-IRON-2023.xlsx' />
              <ResultLink title='DAY OF THE DEAD 2023' link='/downloads/DAY-OF-THE-DEAD-FULL-COM.xls' />
              <ResultLink title='Mansfield May 2023' link='/downloads/mansfeild-21.05.2023.xlsx' />
              <ResultLink title='Monty Crown 2023' link='/downloads/Monty-Crown-05-02-2023.xlsx' />
              <ResultLink title='RECORD BREAKERS 2023' link='/downloads/record-brackets-nov-12-2022.xls' />
              <ResultLink title='MANSFIELD MANIA 2023' link='/downloads/Mansfield-Mania.xlsx' />
              <ResultLink
                title='BRITISH CHAMPIONSHIPS STRICT CURL 2023'
                link='/downloads/BRITISH-CHAMPIONSHIPS-STRICT-CURL-APRIL-2023.xlsx'
              />
              <ResultLink
                title='BRITISH CHAMPIONSHIPS 2023'
                link='/downloads/British-championships-2023-1.xlsx'
                isLast
              />
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
