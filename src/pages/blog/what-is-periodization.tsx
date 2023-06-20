import Head from 'next/head';

import { fonts } from '@/helpers/fonts';
import Header from '@/components/header/Header';
import Navbar from '@/components/navigation/Navbar';
import Footer from '@/components/footer/Footer';
import PageHeader from '@/components/atoms/PageHeader';
import Container from '@/components/atoms/Container';
import Button from '@/components/atoms/Button';

export default function BlogPost() {
  return (
    <>
      <Head>
        <title>What is Periodization? | Blog | British Powerlifting Federation</title>
      </Head>
      <Header />
      <Navbar />
      <main>
        <section>
          <PageHeader title='What is Periodization?' />
          <Container className='py-10 xl:w-2/3'>
            <div className='flex flex-col lg:flex-row lg:justify-center'>
              <div className='lg:w-2/3'>
                <p className='mb-4'>
                  Periodized Training works on the concept of overload and adaptation; by stressing the body over time,
                  allowing it to recover, and then stressing it again, athletes can gradually build fitness.
                </p>
                <p className='mb-4'>Periodization consists of three types of cycles:</p>
                <ul className='mb-4 ml-4 list-outside list-disc'>
                  <li>A macro-cycle refers to your season as a whole.</li>
                  <li>
                    A mesocycle refers to a particular training block within that season; e.g. the endurance phase.
                  </li>
                  <li>A micro-cycle refers to the smallest unit within a mesocycle; usually a week of training.</li>
                </ul>
                <p className='mb-4'>
                  By structuring your season with these cycles in mind, you can ensure that you're building and
                  recovering adequately for optimal adaptation.
                </p>
                <p className='mb-4'>
                  Read on to learn the theory behind periodization and how you can apply it to your annual training
                  plan.
                </p>
                <h2 className={`${fonts.header.className} mb-4 text-2xl text-red-600 uppercase`}>
                  Periodized Training
                </h2>
                <p className='mb-4'>
                  Periodization is the process of dividing an annual training plan into specific time blocks, where each
                  block has a particular goal and provides your body with different types of stress. This allows you to
                  create some hard training periods and some easier periods to facilitate recovery. Periodization also
                  helps you develop different physiological abilities during various phases of training. For instance,
                  during base training you focus on the development of aerobic and muscular endurance. During the
                  intensity phase, this focus switches to lactate threshold and aerobic capacity (i.e., VO2 max), and as
                  you enter the competition phase, greater emphasis is placed on boosting anaerobic capacity and
                  neuromuscular power.
                </p>
                <p className='mb-4'>
                  Most significantly, periodization is the best way to promote the training effect, which consists of
                  changes in your cardiopulmonary and musculoskeletal systems that result in greater speed and endurance
                  on the bike. To develop an effective training program, it is important to understand the foundation of
                  periodization. This foundation consists of three cycles: macro-cycles, mesocycles, and micro-cycles.
                </p>
                <h2 className={`${fonts.header.className} mb-4 text-2xl text-red-600 uppercase`}>MACROCYCLES</h2>
                <p className='mb-4'>
                  The macrocycle is the longest of the three cycles and includes all four stages of a periodized
                  training program (e.g., endurance, intensity, competition and recovery). Because macro-cycles
                  incorporate all 52 weeks of your annual plan, they provide you with a bird's-eye view of your training
                  regimen and allow you to facilitate long-range planning. For example, if you want to peak for a
                  national championship event one year from now, you can mark that date on your calendar and work
                  backward to create a program that allows you to peak at that time. You can use the same process to
                  identify several major events throughout the year and develop a plan that facilitates multiple fitness
                  peaks. Remember, because of its length, you will always make changes to your macro-cycle throughout
                  the year.
                </p>
                <h2 className={`${fonts.header.className} mb-4 text-2xl text-red-600 uppercase`}>MESOCYCLES</h2>
                <p className='mb-4'>
                  The mesocycle represents a specific block of training that is designed to accomplish a particular
                  goal. For instance, during the endurance phase, you might develop a mesocycle designed to enhance your
                  muscular endurance on the bike (the ability to pedal relatively big gears, at a moderate cadence, for
                  an extended period). This mesocycle might consist of six workouts over three weeks focused on pedaling
                  big gears, with one week of recovery. Similarly, you could develop a mesocycle for the intensity phase
                  that is designed to improve your functional threshold power, or FTP (the highest average power,
                  measured in watts, that you can sustain for one hour). This mesocycle might include three weeks of
                  threshold intervals followed by a week of recovery.
                </p>
                <p className='mb-4'>
                  During the competition phase, you could develop a mesocycle that improves your neuromuscular power,
                  which is the ability to pedal a very big gear, at a very high cadence for a short period of time
                  (i.e., sprinting). This mesocycle might include four long sprint interval workouts and four short
                  sprint interval workouts over a three week period. You can even develop a mesocycle for the recovery
                  stage of training. Of course, the primary goal of this mesocycle will be to rest and recuperate, but
                  it will also include a series of easy rides designed to enhance the recovery process.
                </p>
                <p className='mb-4'>
                  Mesocycles are typically three or four weeks in length. Two very common mesocycles consist of 21 and
                  28-day training blocks. For example, a 25-year old experienced competitor might use a 23/5 training
                  pattern (i.e., a 28-day mesocycle). This consists of 23 days of relatively hard work followed by 5
                  days of recovery and easy spinning. Conversely, an older or less experienced cyclist may opt for a
                  16/5 training pattern (i.e., a 21-day mesocycle) that includes 16 days of hard training followed by 5
                  days of recovery. If you are unsure about which option to choose, I suggest you begin with a 21-day
                  mesocycle and shift to the longer option when you are ready for a harder challenge. Conversely, if you
                  are currently using a 28-day mesocycle and are dealing with recurring fatigue, use the shorter
                  mesocycle, which provides you with more time to recover.
                </p>
                <h2 className={`${fonts.header.className} mb-4 text-2xl text-red-600 uppercase`}>MICROCYCLES</h2>
                <p className='mb-4'>
                  A micro-cycle is the shortest training cycle, typically lasting a week with the goal of facilitating a
                  focused block of training. An example of this is an endurance block where a cyclist strings three or
                  four long rides together within one week to progressively overload training volume. Another example
                  incorporates block training, which consists of very hard workouts for two or three consecutive days
                  followed by an equal amount of recovery (days off or very easy rides). This would constitute an
                  intensity micro-cycle where the goal is to improve key physiological abilities such as lactate
                  threshold (the highest intensity a fit cyclist can maintain for 60 minutes) and aerobic capacity (the
                  maximum amount of oxygen the body can consume during high-intensity exercise). Generally speaking,
                  three or four micro-cycles are tied together to form a mesocycle.
                </p>
                <p className='mb-4'>
                  In conclusion, you can get the most out of your training by having a good understanding of each of the
                  three cycles of periodization and then using these cycles to create a plan that allows you to peak for
                  your most important events throughout the year.
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
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
