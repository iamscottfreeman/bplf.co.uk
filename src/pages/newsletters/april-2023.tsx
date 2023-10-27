import Head from 'next/head';
import Image from 'next/image';

import { fonts } from '@/helpers/fonts';
import Header from '@/components/header/Header';
import Navbar from '@/components/navigation/Navbar';
import Footer from '@/components/footer/Footer';
import PageHeader from '@/components/atoms/PageHeader';
import Container from '@/components/atoms/Container';

import marcus from './marcus.jpg';
import marcus2 from './marcus2.jpg';
import petra from './petra.jpg';
import nicola from './nicola.jpg';

import img1 from './001/img3.png';
import img2 from './001/img4.png';
import img3 from './001/img5.png';
import img4 from './001/img6.png';
import img5 from './001/img7.png';
import img6 from './001/img8.png';
import img7 from './001/img9.png';
import chimamaxwell from './001/chimamaxwell.png';
import finleyroberts from './001/finleyroberts.png';
import thimaschenery from './001/thomaschenery.png';
import imrankhan from './001/imrankhan.png';
import Button from '@/components/atoms/Button';

export default function BlogPost() {
  return (
    <>
      <Head>
        <title>April 2023 | Newsletters | British Powerlifting Federation</title>
      </Head>
      <Header />
      <Navbar />
      <main>
        <section>
          <PageHeader title='April 2023' subTitle='Newsletter' />
          <Container className='py-10 text-lg'>
            <div>
              <h2 className={`${fonts.header.className} uppercase text-3xl lg:text-5xl mb-4`}>
                A Message From Our President
              </h2>
              <div className='lg:flex lg:space-x-4'>
                <div className='lg:w-2/3 '>
                  <p className='mb-2'>Dear Members,</p>
                  <p className='mb-2'>
                    Firstly I would like to say thank for your support and also welcome all old and new members into the
                    BPF family . The British Powerlifting Federation started in 2010 from ground zero in our first year
                    we had only 19 members. I started a federation that would treat all equal with no favourites and all
                    would get opportunities regardless of their age sex colour or religion. We are a family and all are
                    treated equally starting from the President down to the youngest member .
                  </p>
                  <p className='mb-2'>
                    We do not tolerate any form of bullying fed bashing of others or discrimination of other lift- ers
                    any of these would result in a suspension or ban . We have two divisions tested and also non tested
                    with the random drug testing program firmly in place .
                  </p>
                  <p className='mb-2'>
                    We are also the only organisation that can send athletes through to Mr Olympia pro in the USA . At
                    current we now have over a 150 members and our very own head office based in Nottinghamshire and
                    also a Training Academy. I am very proud of our future and we are al- ways moving forward.
                  </p>
                  <p className='mb-2'>
                    Our Moto is to promote from within and give our members the opportunity to be part of a much bigger
                    picture. This year we have the Drug Tested Worlds first time in the United Kingdom in October in
                    Coventry.
                  </p>
                  <p className='mb-2'>
                    I would like to reassure all our members that the future is very bright and I am so proud of you all
                    . Have a great year and see you all on the platform.
                  </p>
                  <p>Marcus Griffiths</p>
                </div>
                <div className='lg:w-1/3'>
                  <Image src={marcus} alt='Marcus' className='rounded-xl' />
                </div>
              </div>
            </div>

            <div className='mt-20'>
              <h2 className={`${fonts.header.className} uppercase text-3xl lg:text-5xl mb-4`}>
                Welcome to the Newsletter!
              </h2>
              <div className='lg:flex lg:space-x-4'>
                <div className='lg:w-2/3'>
                  <div>
                    <p className='mb-2'>I hope you enjoy reading it as much as I have compiling it.</p>
                    <p className='mb-2'>All our technical info and events can be found on www.bplf.co.uk</p>
                    <p className='mb-2'>
                      In the following months I will be featuring our officials and introducing everyone.
                    </p>
                    <p className='mb-2'>
                      To introduce myself. My father Mike Davies competed in the first ever International Powerlifting
                      Team in the 1960s competing in The USA and they won. He went on to become World Champion. My mum
                      Maureen Davies remains to this day one of my top fans and My husband Chris Elding as well as
                      winning Powerlifting titles is my coach. A life of powerlifting and bodybuilding - winning The
                      NABBA Figure North East and Natural British titles and third in The Euro Couples with Chris. I
                      have won Euro and World Powerlifting titles.
                    </p>
                    <p className='mb-2'>
                      So proud to be the current British Champion in my class in Deadlift and Strict Curl. I am looking
                      forward to all out British Powerlifting Federation adventures. I encourage you all to send your
                      stories and photos for publication. This newsletter is for the members by the members. All members
                      can contribute to future publications.
                    </p>
                  </div>
                </div>
                <div className='lg:w-1/3'>
                  <Image src={nicola} alt='Nicola' className='rounded-xl' />
                </div>
              </div>
            </div>

            <div className='mt-20'>
              <h2 className={`${fonts.header.className} uppercase text-3xl lg:text-5xl mb-4`}>Meet The Founders</h2>
              <div className='lg:flex space-y-10 lg:space-y-0 lg:space-x-4'>
                <div className='lg:w-1/2'>
                  <p className='hidden lg:block float-right w-72 p-4'>
                    <Image src={marcus2} alt='Marcus' className='inline rounded-xl' />
                  </p>
                  <p className='text-xl font-bold'>MARCUS GRIFFITHS</p>
                  <p className='mb-2'>President</p>
                  <p className='lg:hidden mb-4'>
                    <Image src={marcus2} alt='Marcus' className='inline rounded-xl' />
                  </p>
                  <p className='mb-2'>
                    A members focused organisation where fairness is the beating heart. He created an organisation that
                    enables qualification for Olympia Powerlifting in the USA. He is the only person ever to have won 5
                    times.
                  </p>
                  <p className='mb-2'>
                    Two categories—drug tested and non tested. If found to be positive competing in the tested
                    competition there is a £500 fine and a life time ban.
                  </p>
                  <p className='mb-2'>
                    All tests are World Anti Doping Agency approved and not in house, the swab is independently
                    administered by a doping official.
                  </p>
                  <p className='mb-2'>The BPF are to date proud that all tests taken have been negative.</p>
                </div>
                <div className='lg:w-1/2'>
                  <p className='hidden lg:block float-right w-72 p-4'>
                    <Image src={petra} alt='Petra' className='inline rounded-xl' />
                  </p>
                  <p className='text-xl font-bold'>LADY PETRA KENT</p>
                  <p className='mb-2'>Vice President</p>
                  <p className='lg:hidden mb-4'>
                    <Image src={petra} alt='Petra' className='inline rounded-xl' />
                  </p>
                  <p className='mb-2'>
                    She is the most sincere person you will ever meet. She is always on the lifters side and her and
                    Marcus make a great team. So many bodybuilding and powerlifting titles. She is one of the only
                    people I know who is pleased if someone breaks one of her records as in her own words "that is what
                    they are there for to be broken".
                  </p>
                  <p className='mb-2'>
                    She is the glue within The BPF, working the desk at competitions and everything behind the scenes.
                    She works tirelessly at the Academy often putting in 12 hour shifts. Her & Marcus take no monetary
                    reward ploughing all back into the organisation. These two are amazing, and Monty her great dog is
                    always at competitions and he even has a contest of his own.
                  </p>
                </div>
              </div>
            </div>

            <div className='mt-20'>
              <h2 className={`${fonts.header.className} uppercase text-3xl lg:text-5xl mb-4`}>Hall of Fame</h2>
              <p className='mb-2'>
                Where all our greats are there to inspire young lifters. I would like to introduce my late dad Mike
                Davies to you all.
              </p>
              <div className='lg:flex space-y-4 lg:space-y-0 lg:space-x-4 justify-center items-center'>
                <div className='lg:w-1/3 text-center'>
                  <Image src={img1} alt='Mike David' className='inline rounded-xl' />
                </div>
                <div className='lg:w-1/3 text-center'>
                  <Image src={img2} alt='Mike David' className='inline rounded-xl' />
                </div>
                <div className='lg:w-1/3 text-center'>
                  <Image src={img3} alt='Mike David' className='inline rounded-xl' />
                </div>
              </div>
            </div>

            <div className='mt-20'>
              <h2 className={`${fonts.header.className} uppercase text-3xl lg:text-5xl mb-4`}>Recipe Corner</h2>
              <p className='mb-2'>Your performance is linked to the foods you eat.</p>
              <p className='mb-2'>
                Thank you Chris Elding for this excellent Spanish Omelette recipe. An all-round nutritious meal. High
                protein and low cost.
              </p>
              <div className='lg:flex space-y-4 lg:space-y-0 lg:space-x-4 justify-center items-center'>
                <div className='lg:w-1/2 text-center'>
                  <Image src={img4} alt='Recipe Corner' className='inline rounded-xl' />
                </div>
                <div className='lg:w-1/2 text-center'>
                  <Image src={img5} alt='Recipe Corner' className='inline rounded-xl' />
                </div>
                <div className='lg:w-1/2 text-center'>
                  <Image src={img6} alt='Recipe Corner' className='inline rounded-xl' />
                </div>

                <div className='lg:w-1/2 text-center'>
                  <Image src={img7} alt='Recipe Corner' className='inline rounded-xl' />
                </div>
              </div>
            </div>

            <div className='mt-20'>
              <h2 className={`${fonts.header.className} uppercase text-3xl lg:text-5xl mb-4`}>Meet The Members</h2>
            </div>

            <div className='mt-10'>
              <h2 className={`${fonts.header.className} uppercase text-3xl lg:text-5xl mb-4`}>Chima Maxwell</h2>
              <div className='lg:flex lg:space-x-4'>
                <div className='lg:w-2/3'>
                  <p className='mb-2 italic'>
                    I had the pleasure of meeting this great guy and witnessed the biggest strict curl 94KG, he
                    preformed at the British Championships. He will be invited to The World Strict Curl event at The
                    Olympia in Las Vegas.
                  </p>
                  <p className='mb-2'>
                    I started lifting weights at 15 in my back garden. All I used to do were bicep curls, but I realised
                    that I was really good at it and worked hard to get stronger. I was diagnosed with Paranoid
                    Schizophrenia at 19 but I found that lifting weights made me feel better, so I started going the gym
                    a lot more. I’m competitive so after 10/12 years of lifting weights (mainly Bicep curls), I wanted
                    to start competing. I didn’t know there was a competition for strict curling, but then I found bpf.
                    Their federation was the only one I could find that did strict curling. So I thought I would go to
                    my first competition. After getting the British record in strict curling I thought I would try bench
                    press even though I had only benched for a year or so. I found out I was strong at that too. So I
                    now do strict curl and bench press, and have set British records for both.
                  </p>
                  <p className='mb-2'>
                    I really want to be the strongest tested powerlifter in the world. I know that’s a big dream but I’m
                    going to try my best to reach it. This year is a big year for me and I have been training really
                    hard. I hope I can break new records.
                  </p>
                </div>
                <div className='lg:w-1/3'>
                  <Image src={chimamaxwell} alt='Chima Maxwell' className='inline rounded-xl' />
                </div>
              </div>
            </div>

            <div className='mt-10'>
              <h2 className={`${fonts.header.className} uppercase text-3xl lg:text-5xl mb-4`}>Finley Roberts</h2>
              <div className='lg:flex lg:space-x-4'>
                <div className='lg:w-2/3'>
                  <p className='mb-2 italic'>A first time competitor with us at Mayhem Gym in Boston.</p>
                  <p className='mb-2'>
                    My journey with physical training, like so many people’s, has involved a gradually deeper plunge
                    into the world of strength. Around the age of 12, I stumbled upon a set of dumbbells, in our loft.
                    The heaviest pair weighed a mighty 4.5kg each and as such proved a stretch on lateral raises and
                    several other exercises. Nonetheless I persevered most evenings with a mixture of basic dumbbell and
                    bodyweight exercises. I soon started to love that feeling of getting stronger. As such, in my
                    mid-teens, I was happy to give going to the gym a go when my best friend suggested that I went with
                    him during the school holidays. It only took one session for me to decide to get a membership. I
                    loved the thought of getting stronger to help my karate, which I still do today, and my rugby. One
                    of the PTs at the gym wrote
                  </p>
                  <p className='mb-2'>
                    a basic programme for me and, having done some research online, I promptly decided that I knew all
                    that there was to know about training. I remember, like most of us do, seeing a little of the
                    World’s Strongest Man on TV as a child. It was social media, though, which really introduced me to
                    the worlds of strongman and powerlifting. I remember being both mind blown and humbled by seeing a
                    video of Eddie Hall pressing a 200kg axle overhead, having felt that I
                  </p>
                  <p className='mb-2'>
                    was strong as I was doing my strict presses with about 30kg which my school friends could not
                    manage. From there I read more and more about the records in the strength world and the history of
                    strength sports. My interest grew rapidly but it was a few years before I started thinking about the
                    idea of competing one day.
                  </p>
                  <p className='mb-2'>
                    At the start of 2020, having recently done my first 200kg deadlift, a relative made me aware of a
                    local strongman competition which was being advertised on Facebook. I decided to sign up. That was
                    it. The summer of 2020 would see me do my first strongman competition. I went and tried some of the
                    events and then carried on training completely normally in the commercial gym where I had always
                    trained. They didn’t have the kit. I didn’t have a clue. I felt fairly determined, though, and I
                    thought that I was working hard. I was full of excitement and pride, being able to tell people that
                    I was going to be a strongman. You can probably see where this is going. The Covid-19 pandemic
                    struck and the contest was cancelled. I put aside any thoughts of competing for a while, knowing
                    that that September I was going off to Durham University to study law. Unfortunately my time there
                    was short lived, having openly struggled to adapt to the isolation with the university allegedly
                    having the worst Covid rate of any in the country at the time and making the national news for its
                    handling of students who were isolating. It was shortly after leaving that, as and when lockdown
                    restrictions allowed, I forced myself back in the gym more than I had been able to at Durham. I know
                    that I’m one of many who finds the gym is as much a benefit to their mental health as their physical
                    one and looks to it for routine and normality when other things are going wrong in life. Having
                    started getting back into training more seriously, I decided to give the strongman a go. I went all
                    in and signed up for three contests that summer. I trained hard, bought the right kit, did my
                    research and surely enough… they went terribly. I was inside the bottom four at all three contests.
                    The fact that I had enjoyed them in spite of that and not normally being the best loser in the world
                    told me this was something that I wanted to do more of, though. I went away, improved my training
                    and recovery, planned my meals for the first time in my life and gained over 20kg in around a year.
                    This paid off and in 2022 I competed in 7 contests, including the final of Britain’s Strongest
                    Novice where I was the youngest competitor by around 5 years, and finished in the top three on three
                    occasions. At this point I had thought about trying powerlifting many times but I didn’t do so
                    seriously until Mayhem Gym, where I had been training for a few months, announced that they would be
                    hosting a BPF competition. Sadly it was too soon for me after a busy summer of strongman, so I was
                    excited to learn that this wasn’t set to be a one off.
                  </p>
                  <p className='mb-2'>
                    Mayhem in Boston on 25/03/23 fell at the perfect time for me really, with most amateur strongman
                    contests taking place through the summer months. I started training for it in early January. It was
                    a strange experience, as a strongman, as normally bench press didn’t really matter for me in its own
                    right, back squats were often shunned in favour of front squats or safety-bar variations and
                    deadlifts took place with straps. I was firmly out of my comfort zone, yet I was completely in my
                    element. My squat training flew throughout the prep. I’ve always wished that squats were more common
                    in strongman, unlike bench press. Bench press continued to feel as unnatural to me as it always had.
                    I actually found myself, someone who has always considered their grip a weak link in their
                    strongman, loving deadlifting without straps, though. That was up until I tore a callus and half of
                    each deadlift or SBD session was taken up by applying and fiddling with tape in a race against time
                    to get both my hand to heal and my grip strength to increase before the contest. Having always been
                    a fan of learning about different training methods and programmes and acknowledging that peaking for
                    a powerlifting contest was surprisingly different to preparing for a strongman one, I decided to do
                    some research to find a peaking programme which I thought would work for me. Yuri Verkhoshansky’s
                    6-week peaking programme seemed to fit the bill, so I settled on that. Powerlifters, my respect for
                    you increased immeasurably. I naively and arrogantly, assumed as a strongman, that it must be easy
                    to train for just three lifts all of the time. In fact what I learned is that it just means that the
                    same muscles and movement patterns receive a hammering all of the time. I stuck to the plan, though,
                    missing just one rep on bench press and none on squats or deadlifts in six weeks.
                  </p>
                  <p className='mb-2'>
                    Contest week arrived. While I felt well prepared, I was unsure as to what numbers I really had in
                    me. I was actually most nervous about the weigh-in day, though. Lifting weights competitively was
                    something which I had already done many times before, but weigh ins and kit checks were new to me. I
                    knew that I wouldn’t properly relax until I was on the platform and locking in for that first squat.
                    Weigh-in day was a success, however. I made weight comfortably, which I expected, and all of my kit
                    was acceptable. I did, however, have to make up my openers on the spot after forgetting that I would
                    be asked for them. It was a relief to find out how friendly all of the organisers and referees were,
                    I met a whole host of friendly and welcoming individuals. We were there to lift, though, and on that
                    front I couldn’t really have been happier with what happened. All three squats felt comfortable, in
                    spite of the last lift of 225kg being a 20kg increase on anything which I had squatted before the
                    contest. I managed to grind out a 2.5kg PB on my final bench at 132.5kg too. I was confident going
                    in to deadlifts that, if my grip would hold it, I would be able to deadlift 242.5kg for a nice round
                    600kg total. Fortunately the bar felt much better in the hands than the one which I had trained on
                    and I was able to get the lift to go 9/9, with all of the lifts being British records. At that point
                    I knew that I had put up the biggest total of the day however, not knowing what formula was being
                    used to calculate the victors, I remained on edge up until I was announced as the overall winner in
                    the male group. To go home with the trophy, a medal, the British records and a 600kg total is
                    something which I genuinely don’t think that I will ever forget as, as I suggested earlier, I always
                    felt that powerlifting really didn’t play to my strengths. As such, it was just as satisfying as any
                    of my performances in strongman.
                  </p>
                  <p className='mb-2'>
                    Along with the other accolades, I came home with an invitation to the British Championships in
                    April. Competing there was never part of my plan for this year. Mayhem in Boston was meant to be my
                    only powerlifting contest this year. I signed up as a chance to test the waters before potentially
                    doing more in future years. It just so happens that I have found the waters to be those of a
                    perfectly heated spa pool as opposed to the icy shark-infested ocean which I feared that they might
                    be. I was completely taken aback by how much more I enjoyed the contest than I expected to. Whether
                    it be at this year’s British Championships or next year with a push to qualify for the British,
                    European and World Championships and total 700kg, I intend to do a lot more powerlifting in the
                    future. Just to end, I just wanted to thank you all for being such a welcoming organisation for us
                    newcomers. Also, if I don’t see you beforehand or there, good luck to everyone competing at next
                    month’s British Championships.
                  </p>
                </div>
                <div className='lg:w-1/3'>
                  <Image src={finleyroberts} alt='Finley Roberts' className='inline rounded-xl' />
                </div>
              </div>
            </div>

            <div className='mt-10'>
              <h2 className={`${fonts.header.className} uppercase text-3xl lg:text-5xl mb-4`}>Thomas Chenery</h2>
              <div className='lg:flex lg:space-x-4'>
                <div className='lg:w-2/3'>
                  <p className='mb-2'>
                    Thomas is the proud owner of Mayhem Gym in Boston, and runs many successful shows for the BPF and
                    raises a lot of money for charity.
                  </p>
                  <p className='mb-2'>
                    He qualified for the Olympia this week and broke a British Bench Press Record 192.5kg
                  </p>
                  <p className='mb-2'>
                    Although not a BPF competition Thomas runs this in memory of his father who sadly left us due to
                    this condition. Thomas has turned this into a positive and raises money for the charity. Marcus and
                    Lady Petra hope to see you here to support this event.
                  </p>
                </div>
                <div className='lg:w-1/3'>
                  <Image src={thimaschenery} alt='Thomas Chenery' className='inline rounded-xl' />
                </div>
              </div>
            </div>

            <div className='mt-10'>
              <h2 className={`${fonts.header.className} uppercase text-3xl lg:text-5xl mb-4`}>Imran Khan</h2>
              <div className='lg:flex lg:space-x-4'>
                <div className='lg:w-2/3'>
                  <p className='mb-2'>
                    One of my favourite moments on sat with some of the BPF academy members and our amazing Coach, you
                    only have to look at the picture to see how proud coach is and how proud each and every single one
                    of us are too after the British Championship.
                  </p>
                  <p className='mb-2'>
                    This picture right here shows passion, unity, respect, loyalty, love, trust and equality everything
                    that the BPF stands for and all thanks to Mr O.
                  </p>
                  <p className='mb-2'>
                    If only we can all stick to these values not only in the gym but any where and every where day to
                    day, be patient and understanding surely we can lead by example and each person we pass these values
                    on to can pass it on to some one else then before you know it the world can become a better place.
                  </p>
                  <p className='mb-2'>
                    Thank you to The BPF president MarcusMro Griffiths for making his BPF dream a reality and leading
                    the BPF family, thank you to vice president Lady-Petra Kent for all the amazing hard work you do
                    keeping every thing running smoothly.
                  </p>
                  <p className='mb-2'>
                    Thank you to all the refs, loaders who make the lifts possible for the lifters and most of all thank
                    you to the amazing supporters who come, watch and cheer the lifters on this wouldn’t work with out
                    your support so thank you.
                  </p>
                  <p className='mb-2'>
                    The BPF is the only UK federation that qualifies lifters to compete at the Mr Olympia, so what are
                    you waiting for? Come on down to the BPF academy and start your journey with the BPF family.
                  </p>
                </div>
                <div className='lg:w-1/3'>
                  <Image src={imrankhan} alt='Imran Khan' className='inline rounded-xl' />
                </div>
              </div>
            </div>

            <div className='mt-20'>
              <h2 className={`${fonts.header.className} uppercase text-3xl lg:text-5xl mb-4`}>Final Thoughts</h2>
              <p className='mb-2'>
                If you have anything you would like to send in for the newsletter, please contact{' '}
                <strong>nicola.eldingmediaadvisor@yahoo.com</strong>
              </p>
              <p className='mb-2'>Train hard, and may all your lights be white! Next newsletter out in August.</p>
            </div>

            <div className='mt-10'>
              <Button href='/newsletters/'>Back to Newsletters</Button>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
