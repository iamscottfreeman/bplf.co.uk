import Head from 'next/head';
import Image from 'next/image';

import Header from '@/components/header/Header';
import Navbar from '@/components/navigation/Navbar';
import Footer from '@/components/footer/Footer';
import PageHeader from '@/components/atoms/PageHeader';
import Container from '@/components/atoms/Container';
import Button from '@/components/atoms/Button';

import img from './21-advantages-of-box-squats.jpg';

export default function BlogPost() {
  return (
    <>
      <Head>
        <title>21 Advantages of Box Squats | Blog | British Powerlifting Federation</title>
      </Head>
      <Header />
      <Navbar />
      <main>
        <section>
          <PageHeader title='21 Advantages of Box Squats' />
          <Container className='py-10 xl:w-2/3'>
            <div className='flex flex-col lg:flex-row'>
              <div className='lg:w-2/3 mr-4'>
                <p className='mb-4'>1. You can sit back more, allowing you to emphasize the posterior chain.</p>
                <p className='mb-4'>
                  2. It can gauge that you are squatting to the same height each time regardless of the lifter's height.
                </p>
                <p className='mb-4'>3. Allows the lifter to stop midpoint for technical corrections.</p>
                <p className='mb-4'>4. Allows for a static to dynamic contraction.</p>
                <p className='mb-4'>
                  5. Most people can recover faster from box squats than other squats, so they can be trained more
                  frequently.
                </p>
                <p className='mb-4'>
                  6. It's easier to teach and for a lifter to adapt to a different stance, albeit wide to close or close
                  to wide.
                </p>
                <p className='mb-4'>
                  7. Done properly, it could allow lifters with joint issues to still be able to squat but control their
                  range of motion or allow joint angles they can no longer do with free squats.
                </p>
                <p className='mb-4'>
                  8. It allows the lifter to learn how to stay tight in the bottom position of the squat. making the
                  core stronger.
                </p>
                <p className='mb-4'>9. Is a great way to teach compensatory acceleration with the squat.</p>
                <p className='mb-4'>10. Easier to teach a straight concentric bar path. </p>
                <p className='mb-4'>11. Builds explosive strength & speed.</p>
                <p className='mb-4'>
                  12. For the general population, there is no easier way I've found to teach the squat as well as a
                  proper sit-to-stand for basic post-rehab.
                </p>
                <p className='mb-4'>13. Can be used for lifters from complete beginners to the most advanced.</p>
                <p className='mb-4'>
                  14. Great way to test different shin positions to see what will work best and/or what is the most
                  comfortable for each lifter.
                </p>
                <p className='mb-4'>
                  15. Can lower box height based on joint mobility and/or flexibility within the same set.
                </p>
                <p className='mb-4'>
                  16. Along with #15, lower boxes can allow for ballistic stretching at the bottom of the squat
                  position.
                </p>
                <p className='mb-4'>
                  17. Allows coach to cue flex on command from the bottom position without the group feeling like their
                  heads will pop off.
                </p>
                <p className='mb-4'>
                  18. Breaking of the eccentric-concentric chain, allowing for more power development.
                </p>
                <p className='mb-4'>19. They have stood the test of time.</p>
                <p className='mb-4'>20. Bigger stronger faster a massive confidence builder correcting all flaws.</p>
                <p className='mb-4'>21. Because Marcus says so...</p>
                <p className='mb-4'>
                  These assume you are box squatting, not squatting to a box. They are also in no specific order, as I'm
                  ripping these off the top of my head.
                </p>
                <p className='mb-4'>
                  <span className='font-bold'>Marcus Griffiths</span>
                  <br />
                  Strength Coach
                  <br />
                  BPF Academy
                </p>
                <p className='mb-4'>
                  <Button href='/blog'>Back to Blog</Button>
                </p>
              </div>
              <div className='lg:w-1/3'>
                <Image src={img} alt='' className='rounded-md' />
              </div>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
