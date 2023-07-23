import Head from 'next/head';

import Header from '@/components/header/Header';
import Navbar from '@/components/navigation/Navbar';
import Footer from '@/components/footer/Footer';
import PageHeader from '@/components/atoms/PageHeader';
import Container from '@/components/atoms/Container';

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
            <h2 className='text-4xl mb-4'>Results</h2>
            <div className='flex space-x-4'>
              <p className='mb-4'>
                <Button href='/downloads/DRUG-TEST-OUTCOME-2023.xlsx'>Testing Results 2023</Button>
              </p>
              <p className='mb-4'>
                <Button href='/downloads/TESTING-RESOLTS.xlsx'>Testing Results 2022</Button>
              </p>
            </div>
            <h2 className='text-4xl mt-12'>Rules</h2>
            <p className='mb-4'>
              1.8.1 At the discretion of the IPL World Office, Meet Directors will have the option to hold drug tested
              meets if they 1) apply for and pay the sanction fee to conduct a drug tested meet, and 2) follow all IPL
              testing guidelines. 1.8.2
            </p>
            <p className='mb-4'>
              1.8.2 The title or name of any drug-tested competition must be clearly distinguished from a non-tested
              meet. The contest name must be preceded by the phrase “Drug Tested.” For example, “Drug Tested
              Region/Country Championships.”
            </p>
            <p className='mb-4'>
              1.8.3 Drug tested, and non-tested competitions cannot be held together and/or on the same day. If a tested
              and non-tested contest is held over a weekend, one day can be untested, and one day can be tested, each
              being a separate contest for all records, awards, and Best Lifters. Each contest may be performed under
              one sanction, but two separate entry registration forms are required.
            </p>
            <p className='mb-4'>
              1.8.4 The Meet Director must submit to the lab the same number of drug tests that were ordered. For
              example, if the meet director ordered 6 tests, he/she must test 6 athletes and submit to the lab 6
              completed drug test kits.
            </p>
            <p className='mb-4'>
              1.8.5 Testing must be performed on all lifters who achieve a Wilks, DOTS, or other formula score within
              the top 10% of competitors on each day of competition. Example of 10% ratio: if the meet has 40-44
              lifters, then it would be rounded down to mandatory 4 lifters tested; if the meet has 45-50 lifters it
              will be rounded up to mandatory 5 lifters tested. A meet director also has the option of testing any
              athlete that establishes a world record on any lift each day of competition, regardless of whether their
              Wilks score is within the top 10%.
            </p>
            <p className='mb-4'>
              1.8.6 In competitions where there are both male and female participants, the top 10% of Wilks, DOTS, or
              other formula scores that are targeted for testing must include both male and female lifters based on the
              percentage of participation of each gender. 1.8.7 Meet Directors have the option of testing up to a
              maximum of 10% of Master, Junior, and Single Lift (Bench Press and Deadlift) competitors based on their
              Wilks, DOTS, or other team scoring formula.
            </p>
            <p className='mb-4'>
              1.8.8 All tests must be administered immediately after lifting has been completed, conducted by an IPL
              official of the same gender. No out-of-meet testing will be performed unless, due to extenuating
              circumstances, alternative testing arrangements are mandated by the IPL World office.
            </p>
            <p className='mb-4'>
              1.8.9 Any Meet Director who conducts a drug-tested contest and fails to perform the required testing will
              be 1) ineligible to hold another drug tested contest for 12-months, and 2) must thereafter satisfy the IPL
              World Office that any administrative deficiencies have been corrected.
            </p>
            <p className='mb-4'>
              1.8.10 It is the lifter's responsibility to remain at the competition venue following a drug-tested
              contest to determine if he/she has been selected for drug testing. If the athlete fails, 10 IPL Technical
              Rules 2020v1 refuses, or is not available when the testing occurs, their lack of testing will be treated
              as a drug test failure subject to a lifetime ban without an opportunity to appeal.
            </p>
            <p className='mb-4'>
              1.8.11 Testing with minor lifters under the age of 18 will be performed with two IPL officials present,
              along with the lifter's parent, guardian, or coach.
            </p>
            <p className='mb-4'>1.8.12 Testing is to be performed by urinalysis using an approved IPL lab.</p>
            <p className='mb-4'>
              1.8.13 If a lifter enters a drug tested meet and fails their test, or the appeal period expires or affirms
              the positive test results, the lifter will be banned for life from ever competing in an IPL tested meet.
            </p>
            <p className='mb-4'>
              1.8.14 Lifters can appeal a positive test and request that the sample B be used to retest at the lifter's
              expense. The appeal must be requested, and all required fees paid in full within 30 days following a
              positive test. The right to appeal expires after 30 days. If a lifter is successful in appealing a drug
              test, the lifter will be reinstated in good standing and all lifts and/or records will be reinstated.
            </p>
            <p className='mb-4'>
              1.8.15 A lifter that has failed a drug test will be allowed to continue to compete in the untested
              divisions after paying a $500 fine for having falsely competed in a tested division.
            </p>
            <p className='mb-4'>
              1.8.16 The IPL does not allow any therapeutic use exemptions. This means no lifter using a prescribed
              hormone or other banned substance (see sec. 12) will be allowed to compete in the drug tested division.
            </p>
            <p className='mb-4'>
              1.8.17 The IPL will recognize drug tested suspension lists from other organizations if the suspension
              resulted from use of a substance prohibited by the IPL. Any lifter on a suspension or banned list from any
              other organization for use of a substance prohibited by the IPL will not be allowed to compete in any
              tested divisions but may compete in the non-tested divisions. Lifters that served their full term of
              suspension in another organization and have met all eligibility requirements, other than paying said
              organization a fine or reinstatement fee, are eligible to participate in the IPL drug tested division
              under the condition that they are subject to drug testing at any time immediately following any IPL drug
              tested event in which they participate.
            </p>
            <p className='mb-4'>
              1.8.18 If at any time it's determined that a lifter failed a drug test, for a substance prohibited by the
              IPL, in another organization and despite such failure participated in an IPL drug tested event, said
              athlete will be treated as a failure subject to a lifetime ban.
            </p>
            <p className='mb-4'>
              1.8.19 The IPL will maintain a private list of everyone tested, including both positive and negative test
              results, on our Meet Director portal at the IPL website. This list will be available to Region/Country
              Chairs and Meet Directors as a reference to screen lifters entered in drug tested meets.
            </p>
            <p className='mb-4'>1.8.20 Drug testing is only available at drug-tested meets.</p>
            <p className='mb-4'>1.8.21 Drug-tested records may only be established in drug-tested competitions.</p>
            <p className='mb-4'>
              1.8.22 Non-Tested records can be broken in drug-tested meets. See Section 12 for banned substance list.
            </p>
            <p className='mb-4'>
              1.8.23 Any lifter who fails a drug test and fails to appeal and/or pay the applicable fine for
              reinstatement in the non-tested division, will be permanently banned from all IPL competitions (both
              tested and non-tested) if he subsequently registers, attempts to register, or through oversight,
              participate in a IPL event without paying the applicable fine. This will be deemed a blatant disregard of
              the IPL rules.
            </p>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
