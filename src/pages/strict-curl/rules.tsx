import Head from 'next/head';
import Image from 'next/image';

import Header from '@/components/header/Header';
import Navbar from '@/components/navigation/Navbar';
import Footer from '@/components/footer/Footer';
import PageHeader from '@/components/atoms/PageHeader';
import Container from '@/components/atoms/Container';
import RulesLink from '@/components/atoms/RulesLink';

export default function Rules() {
  return (
    <>
      <Head>
        <title>Strict Curl Rules | Strict Curl | British Powerlifting Federation</title>
      </Head>
      <Header />
      <Navbar />
      <main>
        <section>
          <PageHeader title='Strict Curl Rules' />
          <Container className='py-10'>
            <div className='md:grid grid-cols-2 items-center text-center gap-4'>
              <RulesLink
                title='Rule Book 2023'
                link='https://rawpowerlifting.com/wp-content/uploads/2023/05/2023-General-Rules.pdf'
                isLast
              />
            </div>
            <div>
              <div>
                <p className='mb-2'>
                  <strong>BRITISH STRICT CURL FEDERATION RULES</strong>
                </p>
                <p className='mb-2'>
                  <strong>Table of Contents</strong>
                </p>
                <ol className='list-decimal list-inside'>
                  <li>
                    <strong>GENERAL RULES</strong>
                  </li>
                  <li>Sanctioned validity</li>
                  <li>Championships recognized by the BSCF/BPF</li>
                  <li>BSCF recognition of World, and British Records</li>
                  <li>Age categories</li>
                  <li>Eligibility for specific age groups</li>
                  <li>Bodyweight categories</li>
                  <li>Men’s</li>
                  <li>Women’s</li>
                  <li>Team Compositions</li>
                  <li>Point scoring in team competition</li>
                  <li>World/National Championships</li>
                  <li>All Others</li>
                  <li>EQUIPMENT AND SPECIFICATIONS</li>
                  <li>Platform/Upright Pad (Wall)</li>
                  <li>Bars and discs</li>
                  <li>General Description</li>
                  <li>WSCF ruling on when Special Bar may be used</li>
                  <li>General rule on type of bar used</li>
                  <li>Disc specifications</li>
                  <li>Collars</li>
                  <li>Bar Saddles</li>
                </ol>
                <p className='mt-10 mb-2'>III. ATTIRE AND PERSONAL EQUIPMENT</p>
                <ol className='list-decimal list-inside'>
                  <li>Shirt</li>
                  <li>Singlet</li>
                  <li>Belt</li>
                  <li>Shoes/foot attire</li>
                  <li>Wraps/bandages</li>
                  <li>Gloves/hand attire</li>
                  <li>Questionable attire: procedures to follow</li>
                  <li>THE STRICT CURL AND THE RULES OF PERFORMANCE</li>
                  <li>Rules of Performance</li>
                  <li>Causes for disqualification</li>
                  <li>Illustrations</li>
                  <li>WEIGH-INS</li>
                  <li>BSCF/BPF 24-hour weigh-in rule</li>
                  <li>Duration of the weigh-in times</li>
                  <li>Weigh-in procedure</li>
                  <li>Personnel/lifter attendance</li>
                  <li>Lifter Requirements</li>
                  <li>Accessory Items</li>
                  <li>“Officially Making Weight”</li>
                  <li>Weigh-ins and re-weighs</li>
                  <li>Lifter responsibility</li>
                  <li>Weight class overweighs</li>
                  <li>Qualifying standards</li>
                  <li>Ties among lifters</li>
                  <li>Re-weigh procedure</li>
                  <li>Lifters re-weighing the same</li>
                  <li>Information to be given by lifter at weigh-in</li>
                  <li>Starting attempts</li>
                  <li>Attempt changes</li>
                  <li>ORDER OF COMPETITION</li>
                  <li>Officials to be appointed</li>
                  <li>By the meet director/organizer</li>
                  <li>By the BSCF appointed Head Referee in charge</li>
                  <li>Persons allowed on the platform</li>
                  <li>Progressive loading of the bar</li>
                  <li>Order of lifters taking the same weight</li>
                  <li>Attempts granted</li>
                  <li>Minimum amount weight increases between successful attempts</li>
                  <li>Standard procedure</li>
                  <li>Exception procedure for World or British Records</li>
                  <li>Granting of fifth attempts</li>
                  <li>Failure to successfully make an attempt</li>
                  <li>Prohibition of attempt change</li>
                </ol>
                <p className='mt-10 mb-2'>VII. REFEREES</p>
                <ol className='list-decimal list-inside'>
                  <li>Designation of the platform referees</li>
                  <li>Duties of the Chief Referee</li>
                  <li>Signals required for the Strict Curl</li>
                  <li>Positioning of referees</li>
                  <li>Responsibilities of Referees observing a fault of lifter</li>
                  <li>Side Referee’s</li>
                  <li>Chief Referee’s</li>
                  <li>Testing and Status</li>
                </ol>
                <p className='mt-10 mb-2'>VIII. RECORDS</p>
                <ol className='list-decimal list-inside'>
                  <li>World</li>
                  <li>British</li>
                  <li>Requirements for registration of a Record</li>
                  <li>Sanction requirement</li>
                  <li>Referee credentials</li>
                  <li>Current BPF card status</li>
                  <li>Video proof of World records</li>
                  <li>Current scale certification</li>
                  <li>Sole exception of a lifter being granted a fifth attempt</li>
                  <li>Procedure for two lifters lifting the same record weight</li>
                  <li>Minimum weight increase allowed over existing record</li>
                </ol>
                <h1 className='text-2xl mt-10 mb-2'>RULES</h1>
                <h2 className='text-xl mt-10 mb-2'>1. Sanctioned</h2>
                <p className='mb-2'>
                  The British Strict Curl federation (BSCF) will recognize as valid only those lifts that are performed
                  in accordance with BSCF rules at Strict Curl competitions in which the meet director has secured,
                  prior to the meet, an official BSCF sanction by lifters holding a current BPF membership card.
                </p>
                <h2 className='text-xl mt-10 mb-2'>2. Championships recognized</h2>
                <ol className='list-decimal list-inside'>
                  <li>
                    The BSCF conducts, sanctions, and maintains meet records for the BRITISH Strict Curl Championships.
                  </li>
                  <li>
                    The BSCF conducts, sanctions, and maintains meet records for the following Strict Curl
                    Championships:
                  </li>
                </ol>
                <p className='mb-2'>Men’s and Women’s OPEN qualifier</p>
                <p className='mb-2'>“ “ Jr. qualifier</p>
                <p className='mb-2'>“ “ Masters (over 40 years) qualifier</p>
                <p className='mb-2'>“ “ Teenage qualifier</p>
                <p className='mb-2'>
                  Qualifier<em>s currently held in conjunction with The British Powerlifting Federation</em>
                </p>
                <h2 className='text-xl mt-10 mb-2'>3. BSCF recognition of World,</h2>
                <p className='mb-2'>
                  The BSCF recognize World records for the Strict Curl within the age categories described below:
                </p>
                <ol className='list-decimal list-inside'>
                  <li>Age categories</li>
                </ol>
                <ul>
                  <li>Men and Women: Open</li>
                  <li>Teenage Men and Women: 13-15, 16-17, 18-19</li>
                  <li>
                    Master Men and Women: M1 40-44, M2 45-49, M3 50-54, M4 55-59, M5 60-64, M6 65-69, M7 70-74, M8
                    75-79, M9 80 and over
                  </li>
                </ul>
                <ol className='list-decimal list-inside'>
                  <li>Eligibility for specific age groups</li>
                </ol>
                <p className='mb-2'>
                  Lifting in competitions must be limited to competitors aged 13 years and older. The lifter must have
                  attained minimum age by the day of the competition where age limits are imposed.
                </p>
                <ol start={4}>
                  <li>
                    <strong> Bodyweight categories</strong>
                    <em> (effective January 1, 2022)</em>
                  </li>
                </ol>
                <p className='mb-2'>
                  The following are the <strong>upper limits </strong>for each weight class, which must be strictly
                  adhered to. Any lifter weighing over the weight class limits must compete in the next highest weight
                  class.
                </p>
                <ol className='list-decimal list-inside'>
                  <li>Men’s B. Women’s</li>
                </ol>
                <p className='mb-2'>52.5kg 115.75 lbs. 44.5kg 98.0 lbs.</p>
                <p className='mb-2'>56.5kg 124.5 lbs 48.5kg 107.0 lbs</p>
                <p className='mb-2'>60.5kg 133.25 lbs 52.5kg 115.75 lbs</p>
                <p className='mb-2'>68.0kg 149.75 lbs 56.5kg 124.5 lbs</p>
                <p className='mb-2'>75.5kg 166.5 lbs 60.5kg 133.25 lbs</p>
                <p className='mb-2'>83.0kg 183.0lbs 68.0kg 149.75</p>
                <p className='mb-2'>90.5kg 199.5lbs 75.5kg 166.5</p>
                <p className='mb-2'>100.5kg 221.5lds 83.0kg 183.0</p>
                <p className='mb-2'>110.5kg 243.5 lbs 90 KG 199.5</p>
                <p className='mb-2'>125.5kg 276.5lbs 100 KG 221.5</p>
                <p className='mb-2'>140 KG. 308.6lbs 110 KG 243.5</p>
                <p className='mb-2'>140+KG 308.7lbs 110+ KG 243.6</p>
                <h1 className='text-2xl mt-10 mb-2'>II. EQUIPMENT AND SPECIFICATIONS</h1>
                <h2 className='text-xl mt-10 mb-2'>1. Platform</h2>
                <ol className='list-decimal list-inside'>
                  <li>
                    All lifts must be performed on a wooden or metal platform measuring <strong>at least </strong>4 feet
                    by 2 feet.
                  </li>
                  <li>
                    The surface must be marked with a visible (to lifters and to officials) tape, indicating the maximum
                    heel distance from the wall. An adhesive sandpaper/non-slip tape is permissible.
                  </li>
                </ol>
                <h2 className='text-xl mt-10 mb-2'>Upright Pad (The Wall)</h2>
                <p className='mb-2'>
                  The width of the Wall shall be 32”, with a padding of no more than one inch. The height of the Wall
                  must be at least 6 feet), to accommodate taller lifters, and must have padding down to no more than
                  18” from the floor, to accommodate shorter lifters (see illustration). The pad covering shall be
                  pulled tight enough that no more than one half inch of “play” is detectable between the pad and
                  covering.
                </p>
                <h2 className='text-xl mt-10 mb-2'>2. Bars and discs</h2>
                <ol className='list-decimal list-inside'>
                  <li>General Description</li>
                </ol>
                <p className='mb-2'>
                  For all contests organized under the rules of the BSCF, only calibrated curl bars and calibrated
                  weights are permitted. The use of equipment that does not meet the specifications set forth by the
                  BSCF will invalidate the contest.
                </p>
                <ol className='list-decimal list-inside'>
                  <li>BSCF ruling on when Special Bar may be used</li>
                </ol>
                <p className='mb-2'>
                  Bar must be a Calibrated Z bar weigh 12.5kg with Calibrated collars of 2.5kg each ( total of 5kg
                  collars) and be 30mm in diameter,
                </p>
                <ol className='list-decimal list-inside'>
                  <li>General rule on type of bar used</li>
                  <li>Z Olympic curl bars.</li>
                  <li>Disc specifications</li>
                </ol>
                <ul>
                  <li>
                    All discs used in BSCF competition must weigh within one percent of their face value, regardless of
                    the level of contest.
                  </li>
                  <li>The hole size in the canter of the discs must range in between 51mm and 53mm.</li>
                  <li>
                    Discs must be in the following range: 25 KG. (the largest plate to be used), 10 KG., 5 KG., 2.5 KG.,
                    1.25 KG
                  </li>
                  <li>For record purposes only, also 1 KG, .5 KG and .25 KG . plates.</li>
                  <li>
                    For record purposes only, the three lighter discs may be used to achieve a weight of at least ½ KG.
                    More than the existing record.
                  </li>
                  <li>
                    The first and heaviest discs loaded on the bar must be loaded face in, with the rest of the discs
                    loaded face out.
                  </li>
                </ul>
                <ol className='list-decimal list-inside'>
                  <li>Collars</li>
                </ol>
                <p className='mb-2'>Collars must always be used in competition and tightened snug to the discs.</p>
                <h2 className='text-xl mt-10 mb-2'>3. Bar Saddles</h2>
                <p className='mb-2'>
                  Bar saddles (or bar rests) may be of any sturdy construction: wood, plastic, or metal. The BSCF
                  recommends a height of at least one foot.
                </p>
                <h1 className='text-2xl mt-10 mb-2'>III. ATTIRE AND PERSONAL EQUIPMENT</h1>
                <h2 className='text-xl mt-10 mb-2'>1. Shirt</h2>
                <p className='mb-2'>
                  A T shirt must be worn during competition. At local contests, However, the lifter will be required to
                  don an appropriate shirt on the lifter’s time, or the attempt will be forfeited. All must extend down
                  to the lower garment to be tucked into your singlet.
                </p>
                <h2 className='text-xl mt-10 mb-2'>2. Singlet</h2>
                <p className='mb-2'>
                  Any type of non-support wrestling/ weightlifting type suit. Cannot have any offensive emblems or
                  logos. (The meet director has
                </p>
                <p className='mb-2'>sole discretion on what is appropriate.</p>
                <h2 className='text-xl mt-10 mb-2'>3. Belt</h2>
                <p className='mb-2'>
                  A competitor may wear a belt. It must be worn on the outside of the lifter’s attire and may not exceed
                  6 inches in width. The belt may be of any type of material without any metal or other abrasive studs
                  and must be worn around the waist only. The belt buckle must always face toward the front.
                </p>
                <h2 className='text-xl mt-10 mb-2'>4. Shoes/foot attire</h2>
                <p className='mb-2'>
                  Shoes or other foot attire must be worn during competition; any type of un-cleated or un-spiked shoes
                  or boots with a sole is permissible. By definition, shoes shall be taken to include boots, sport
                  shoes, gymnastic slippers, or any other foot covering that has a patterned moulding or foot type
                  outline that provides an inner sole. Wearing socks is optional.
                </p>
                <h2 className='text-xl mt-10 mb-2'>5. Wraps/bandages</h2>
                <p className='mb-2'>
                  Only wraps or bandages of a one-ply commercially woven elastic that is covered with polyester, cotton,
                  or both, are permitted. Virtually any type of fastening device is legal, including adhesive tape,
                  which may wrap around once plus an additional one inch for overwrap. A lifter may wrap in 2 locations
                  on the body: wrists, knees, the wrist wrap must not exceed one meter (3’3”) in length; and the knee
                  wrap must not exceed two meters in length (6’6”). Adhesive tape shall not be used in place of wraps,
                  nor shall it be worn, in any case, underneath a wrap. Wraps shall not be used anywhere else on the
                  body other than the wrists, or knees.
                </p>
                <ol start={6}>
                  <li>
                    <strong> Gloves/hand attire</strong>
                  </li>
                </ol>
                <p className='mb-2'>Gloves of any kind are forbidden to lifters on the lifting platform.</p>
                <h2 className='text-xl mt-10 mb-2'>7. Questionable attire: procedures to follow</h2>
                <p className='mb-2'>
                  If a referee notices a lifter’s attire to be in violation of the rules, the referee has a
                  responsibility to inform the lifter <strong>before </strong>the lift is attempted. During this time
                  the lifter shall make any legal corrections within their 60 second time.
                </p>
                <h1 className='text-2xl mt-10 mb-2'>IV. THE STRICT CURL AND THE RULES OF PERFORMANCE</h1>
                <h2 className='text-xl mt-10 mb-2'>1. Rules of Performance</h2>
                <p className='mb-2'>
                  The lifter shall assume an upright standing position, Curl bar gripped in an underhand manner (palms
                  facing upward) with both hands. Upon removing bar from saddles, lifter shall move backward against the
                  wall to establish the following position, which must be maintained throughout the lift: head, thoracic
                  spine (erectors), and buttocks in contact with the wall, shoes flat on the floor, and heels at a
                  distance not to exceed 16 inches from the wall. Knees may be locked or slightly bent to a position
                  where the knee extends in line (parallel to wall) with the ankle, but may not extend out beyond the
                  ankle, with the bar held at a reasonably straight arms’ length downward. Lifter shall wait in this
                  position for the referee’s signal, which shall be given as soon as the lifter is{' '}
                  <strong>motionless</strong>. The referee’s signal shall consist of a hand motion and the word “
                  <strong>Lift!</strong>” Upon receiving this command, lifter shall curl the bar upward toward chest in
                  an arcing manner to a point where the sleeve of the bar closest to the lifter passes over the elbow
                  and hold this position motionless for the referee’s signal to replace the bar into the saddles, at
                  which time the lifter may come away from the wall without penalty. The referee’s signal shall consist
                  of a hand motion and the word “<strong>Down!</strong>”
                </p>
                <h2 className='text-xl mt-10 mb-2'>2. Causes for disqualification</h2>
                <p className='mb-2'>The following are causes for disqualification:</p>
                <ol className='list-decimal list-inside'>
                  <li>Failure to wait for the referee’s commands.</li>
                  <li>
                    During the lift, which is defined as from the moment the lifter receives the “<strong>Lift!</strong>
                    ” signal to the moment the “<strong>Down!</strong>” signal is given, failure to maintain contact
                    with the wall with the head, erectors, or buttocks. C. Heels exceeding 16 inches from the wall.
                  </li>
                  <li>Knees bent excessively.</li>
                  <li>
                    Any <strong>upward </strong>or <strong>downward </strong>sliding of body along wall.
                  </li>
                  <li>During the lift, any downward motion of the bar.</li>
                  <li>Any shifting of the feet during the lift.</li>
                  <li>Failure to maintain control of the bar at the finished position.</li>
                  <li>Any “slamming” of the bar down onto the saddles which is deemed unnecessary by referees.</li>
                  <li>
                    Any profanity deemed as such by the referees may subject the lifter to banishment from the
                    competition.
                  </li>
                </ol>
                <h1 className='text-2xl mt-10 mb-2'>V. WEIGH-INS</h1>
                <h2 className='text-xl mt-10 mb-2'>1. BSCF 24-hour weigh-in rule</h2>
                <p className='mb-2'>
                  The BSCF have a rule that it is optional at all competitions to allow weigh-ins to begin, at a maximum
                  of 24 hours, before the lifting session begins.
                </p>
                <h2 className='text-xl mt-10 mb-2'>2. Duration of the weigh-in times</h2>
                <p className='mb-2'>
                  The weigh-in session may be of any duration and may be broken up into several sessions, as long as no
                  more than 24 hours of time passes before the lifter’s first attempt is taken. Lifters must weigh in
                  within the designated times as listed on the entry forms ECT, and do not have the option of weighing
                  in, at their convenience, any time 24 hours before and up to 2 hours before their competitive session
                  begins. The 24-hour weigh-in rule is a privilege, and not a right. Any lifter whose competitive
                  session begins after 24 hours have passed since their weigh-in cannot set records.
                </p>
                <h2 className='text-xl mt-10 mb-2'>3. Weigh-in procedure</h2>
                <ol className='list-decimal list-inside'>
                  <li>Personnel/lifter attendance</li>
                </ol>
                <p className='mb-2'>
                  The weigh-in for all competitors must be carried out in a closed-door room with only the lifter,
                  his/her coach or manager, and the referees present. The lifters’ bodyweights must not be made public
                  until all lifters have weighed in.
                </p>
                <ol className='list-decimal list-inside'>
                  <li>Lifter Requirements</li>
                </ol>
                <p className='mb-2'>
                  Lifters must be weighed in nude or in standard underwear: briefs for men, bra and panties for women.
                  The weigh-in procedure will ensure that lifters are weighed in by officials, or appointed
                  representatives.
                </p>
                <ol className='list-decimal list-inside'>
                  <li>Accessory Items</li>
                </ol>
                <p className='mb-2'>
                  If it is determined that the clothing and/or other items such as jewellery worn on the scales during
                  the weigh-in does add enough weight to put the lifter in a higher weight class, then the lifter is to
                  remove all items on the body and be reweighed in the nude immediately.
                </p>
                <h2 className='text-xl mt-10 mb-2'>4. “Officially Making Weight”</h2>
                <ol className='list-decimal list-inside'>
                  <li>Weigh-ins and re-weighs</li>
                </ol>
                <p className='mb-2'>
                  Each lifter may be officially weighed only once. Only those whose bodyweight is{' '}
                  <strong>heavier </strong>or <strong>lighter </strong>than the limits of the weight class intended to
                  enter may return to the scales. They must return to the scales and make weight within the limits of
                  the hour and a half (90 min.) time allowed for weigh-in, otherwise they must lift in the next higher
                  or next lower weight class. Lifters attempting to make weight may be reweighed as often as time limits
                  allow, without disrupting the line of others waiting to be weighed in. An overweight lifter may, at
                  the referees’ discretion, be allowed one final attempt at making weight within 10 minutes after the
                  weigh-ins end.
                </p>
                <ol className='list-decimal list-inside'>
                  <li>Lifter responsibility</li>
                </ol>
                <p className='mb-2'>
                  A lifter may try to make weight as often as necessary until the weigh-in time has expired. It is the
                  lifter’s responsibility to inform the scales officials that they are “checking” their weight only, and
                  not officially weighing in. It is also the lifter’s responsibility to indicate that they are
                  officially on the scales for the referee to record their weight for the competition.
                </p>
                <ol className='list-decimal list-inside'>
                  <li>Weight class overweighs</li>
                </ol>
                <p className='mb-2'>
                  In the event of an overweight lifter, the lifter may move up to the <strong>next</strong>-highest
                  class only. A lifter who is too heavy for the desired weight class may move into the next-highest
                  class only provided that not more than one lifter from that team is already entered in that class, and
                  he/she has achieved the minimum qualifying standard required for the higher class, if one has been set
                  for that competition.
                </p>
                <h2 className='text-xl mt-10 mb-2'>5. Qualifying standards</h2>
                <p className='mb-2'>
                  At competitions where a qualifying standard has been determined and set, a lifter who weighs in
                  lighter than the <strong>lower </strong>limit of his weight class may drop into the lighter weight
                  class, provided that the necessary qualifying standard was achieved for the lower weight class at the
                  lighter bodyweight, Conversely, a lifter may move up a weight class, provided they weigh within the
                  higher limits of that particular weight class, if the standard they have achieved is equal to or
                  higher than the qualifying standard for that weight class.
                </p>
                <h2 className='text-xl mt-10 mb-2'>6. Ties among lifters</h2>
                <ol className='list-decimal list-inside'>
                  <li>Re-weigh procedure</li>
                </ol>
                <p className='mb-2'>
                  If two lifters record the same bodyweight during weigh-in, and through the course of the competition
                  achieve the same lift, they will be re-weighed after that particular flight is over, and the lighter
                  lifter will be declared a higher placing over the heavier lifter.
                </p>
                <ol className='list-decimal list-inside'>
                  <li>Lifters re-weighing the same</li>
                </ol>
                <p className='mb-2'>
                  If they still weigh the same after re-weighing, they will share the placing, and each receives an
                  award. In such cases, should two lifters tie for first place, the next lifter shall be placed third,
                  and so on
                </p>
                <ol start={7}>
                  <li>
                    <strong> Information to be given by lifter at weigh-in</strong>
                  </li>
                  <li>Starting attempts</li>
                </ol>
                <p className='mb-2'>
                  Starting weights shall be declared, without fail, by the lifter at weigh-in. This attempt may be
                  changed once, up until 5 minutes before the lifting for that flight begins.
                </p>
                <ol className='list-decimal list-inside'>
                  <li>Attempt changes</li>
                </ol>
                <p className='mb-2'>
                  No weight selection changes may be made on second attempts; however, one change of a third attempt and
                  two changes of a fourth attempt are allowed.
                </p>
                <h1 className='text-2xl mt-10 mb-2'>VI. ORDER OF COMPETITION</h1>
                <h2 className='text-xl mt-10 mb-2'>1. Officials to be appointed</h2>
                <ol className='list-decimal list-inside'>
                  <li>By the meet director/organizer</li>
                </ol>
                <p className='mb-2'>
                  The meet director/organizer shall appoint the personnel to accommodate the following positions:
                  Expeditors, Loaders, plus any other positions that may assist in smooth, safe, and orderly progression
                  of the competition.
                </p>
                <ol className='list-decimal list-inside'>
                  <li>By the BSCF appointed Head Referee in charge</li>
                </ol>
                <p className='mb-2'>
                  The BSCF appointed Head Referee will designate the certified chair referees, weigh-in referees, and
                  timekeeper.
                </p>
                <h2 className='text-xl mt-10 mb-2'>2. Persons allowed on the platform</h2>
                <p className='mb-2'>
                  During any competition taking place, whether on a stage or platform, only the lifter and their coach,
                  officiating referees, and loaders will be allowed on the stage or around the platform. During the
                  performance of the lift, only the lifter, referees, and loaders are allowed within the{' '}
                  <strong>vicinity </strong>of the lifting area (defined by rope or broad tape). Coaches must remain
                  outside the designated lifting area. An exception to this would be in the case of Special Athletes.
                </p>
                <h2 className='text-xl mt-10 mb-2'>3. Progressive loading of the bar</h2>
                <p className='mb-2'>
                  In all competitions the bar is loaded progressively, the lifter requesting the lightest weight lifting
                  first. The bar, except in rare cases, cannot be reduced in weight once a lift has been executed with
                  the weight announced.
                </p>
                <ol start={4}>
                  <li>
                    <strong> Order of lifters taking the same weight</strong>
                  </li>
                </ol>
                <p className='mb-2'>
                  When two or more lifters request the same weight during any of their attempts, the lighter lifter
                  shall lift first, and so on.
                </p>
                <h2 className='text-xl mt-10 mb-2'>5. Attempts granted</h2>
                <p className='mb-2'>
                  Each lifter shall be allowed a minimum of 3 attempts. In the Rounds System, all first attempts are
                  performed in Round One, second attempts in Round Two, third attempts in third round. Any 4 attempt
                  (only for record breaking purposes) must come at the end of the third round. Any records attempted
                  within the first four attempts will be taken in its normal round, even if the smaller plates are
                  needed to break the existing record by one-half (½) kg.
                </p>
                <ol start={6}>
                  <li>
                    <strong> Minimum amount weight increases between successful attempts</strong>
                  </li>
                  <li>Standard procedure</li>
                </ol>
                <p className='mb-2'>
                  In BSCF sanctioned competitions, the weight of the barbell must always be in multiples of 1.5 kg. The
                  progression must be <strong>at least </strong>1.5kg. between attempts.
                </p>
                <ol className='list-decimal list-inside'>
                  <li>Exception procedure for World Records</li>
                </ol>
                <p className='mb-2'>
                  The sole exception to this 1.5 KG. increase between attempts rule is that for a World Record attempt.
                  The weight may be increased for a record attempt of less than 1.5KG : 0.5, 1.0, 1.5 KG more than the
                  existing record. Such an attempt, if successful, shall be scored as the next lowest multiple of 1.5
                  KG. for contest purposes. The lifter may attempt a weight not in a multiple of 1.5KG. any time within
                  their four attempts, provided it is for a record. However, if this attempt proves unsuccessful, the
                  lifter must increase to the next higher multiple of 1.5 KG. (if the previous record weight is not
                  requested on the subsequent attempt).
                </p>
                <h2 className='text-xl mt-10 mb-2'>7. Granting of third attempts</h2>
                <p className='mb-2'>
                  A fourth attempt may be granted to a lifter who has, within their three attempts, had credit for a
                  successful lift within a maximum of 10kg. of the existing record. This attempt must be taken with a
                  minimum increase of 0.5 kg. over the existing record, in multiples of 0.5 kg. This attempt shall not
                  count toward the placement of the lifter.
                </p>
                <h2 className='text-xl mt-10 mb-2'>8. Failure to successfully make an attempt</h2>
                <p className='mb-2'>
                  Three unsuccessful attempts within the competition will automatically eliminate the lifter from
                  placing within their weight class and/or age group, and no record forth attempts will be allowed.
                </p>
                <h2 className='text-xl mt-10 mb-2'>9. Prohibition of attempt change</h2>
                <p className='mb-2'>
                  Once the bar has been loaded correctly to the weight requested and the lifter has been called to the
                  platform, and the clock started, the lifter may not change the attempt.
                </p>
                <h1 className='text-2xl mt-10 mb-2'>VII. REFEREES</h1>
                <h2 className='text-xl mt-10 mb-2'>1. Designation of the platform referees</h2>
                <p className='mb-2'>
                  The chair referees shall be selected by the BSCF designated official in charge. They shall be three in
                  number, the Chief Referee in the canter, and the two side referees.
                </p>
                <h2 className='text-xl mt-10 mb-2'>2. Duties of the Chief Referee</h2>
                <p className='mb-2'>
                  The Chief Referee is responsible for giving the necessary commencement and competition signals and is
                  in charge of the platform and all decisions regarding loading errors.
                </p>
                <h2 className='text-xl mt-10 mb-2'>3. Signals required for the Strict Curl</h2>
                <p className='mb-2'>
                  There are two signals given by the Referee. The first is given to start the lift and shall be given
                  when the lifter and bar are motionless. This starting signal shall consist of a visible arm motion
                  along with an audible signal of “<strong>Lift!</strong>” The second is the completion signal, given
                  when the lifter’s movement is completed, and shall consist of a visual downward arm motion along with
                  the audible signal of “<strong>Down!</strong>”
                </p>
                <h2 className='text-xl mt-10 mb-2'>4. Positioning of referees</h2>
                <p className='mb-2'>
                  The Chief Referee will be seated directly in front of the lifter; the two side judges shall position
                  themselves where they can see straight across the pad with no obstruction. This will ensure that the
                  three main points of contact with the pad are “adhered to.”
                </p>
                <h2 className='text-xl mt-10 mb-2'>5. Responsibilities of Referees observing a fault of lifter</h2>
                <ol className='list-decimal list-inside'>
                  <li>Side Referees’</li>
                </ol>
                <p className='mb-2'>
                  The side referees’ observation of a fault shall be made known to the Chief Referee with a raising of
                  the hand. This can be done before the starting signal is given if a fault is observed (such as arms
                  not in a straight position, heels too far away from the wall, etc.), or during the performance of the
                  lift.
                </p>
                <ol className='list-decimal list-inside'>
                  <li>Chief Referee’s</li>
                </ol>
                <p className='mb-2'>
                  If the fault is before the starting signal is given, the Chief Referee, observing a raised hand by one
                  or both side referees, shall not give the starting command, but rather instruct the lifter to replace
                  bar and inform the lifter of a fault. The Chief Referee will then give the signal when proper body
                  position of the lifter is achieved. If the observation of the raised hand/s is made during the
                  performance of the lift, the Chief Referee shall wait until the lifter completes the lift before
                  rendering a decision.
                </p>
                <h2 className='text-xl mt-10 mb-2'>6. Testing and Status</h2>
                <p className='mb-2'>
                  There are three levels of referee status, open to all those with a current BSCF Card: the first level
                  is Standard , second is National, and third is International.
                </p>
                <p className='mb-2'>
                  <strong>Standard </strong>level may referee State Championships and all local meets.
                </p>
                <p className='mb-2'>
                  <strong>National </strong>level may referee National and State Championships and all local meets.
                </p>
                <p className='mb-2'>
                  <strong>International </strong>level may referee World, National, and State Championships and all
                  local meets.
                </p>
                <p className='mb-2'>
                  Referees must keep their BSCF membership active and up to date to retain their status. Referees must
                  adjudicate at least two contests a year to maintain good standing.
                </p>
                <p className='mb-2'>
                  Standard Referee Testing will be given at local contests and at State Championships, consisting of a
                  practical test, where the candidate will sit and judge, under the scrutiny of the Referee in Charge.
                  National Referee Status, which will be given at National Championship Meets only. The same testing
                  procedure as that at the State level is given plus a Multiple-choice written test . After two years of
                  good standing at the National Referee level, the candidate will become eligible for the International
                  Referee testing. This test will be given at both National and World Championships, with once again the
                  same testing procedure as National.
                </p>
                <h1 className='text-2xl mt-10 mb-2'>VIII. RECORDS</h1>
                <h2 className='text-xl mt-10 mb-2'>1. World Records</h2>
                <p className='mb-2'>
                  World records may be set only when BSCF-recognized referees adjudicate the performance, provided only
                  that the lifter has weighed in properly on a certified scale before the competition, the weight of the
                  barbell and discs have been certified as within one percent (1%).
                </p>
                <h2 className='text-xl mt-10 mb-2'>2. British Records</h2>
                <p className='mb-2'>
                  British records may be set only when National- or International-recognized referees adjudicate the
                  lift. (See World Records above VIII-1.)
                </p>
                <h2 className='text-xl mt-10 mb-2'>
                  5. Requirements for registration of a Record A. Sanction requirement
                </h2>
                <p className='mb-2'>
                  The competition must be held under the sanction of the BSCF and be conducted under BSCF rules.
                </p>
                <ol className='list-decimal list-inside'>
                  <li>Referee credentials</li>
                </ol>
                <p className='mb-2'>
                  The adjudicating referees must hold current BSCF registration cards, with their status complementing
                  the level of the contest.
                </p>
                <ol className='list-decimal list-inside'>
                  <li>Current BPF card status</li>
                </ol>
                <p className='mb-2'>
                  The lifter must be a current BPF member holding a current BPF card (with the expiration date not
                  past).
                </p>
                <ol className='list-decimal list-inside'>
                  <li>Video proof of World records</li>
                </ol>
                <p className='mb-2'>
                  In order for a World or American Record to be recognized, a clear and unobstructed video recording
                  must be sent to USSCA headquarters for review. The recording must contain the following procedures: A
                  recording of the weights (plates being loaded onto the bar), then <strong>without </strong>turning off
                  the camera, move around to the side of the wall pad (without interfering with the side referee’s
                  vision) for full clear view of lifter’s position against the pad. (Must be in position to record all
                  three contact points.) The recording must include audio to pick up the Chief Referee’s commands. THIS
                  IS THE Responsibility of the lift up breaking the record
                </p>
                <ol className='list-decimal list-inside'>
                  <li>Current scale certification</li>
                </ol>
                <p className='mb-2'>
                  Scales must have current scale certification of no more than one year from last certify to be used for
                  weigh-ins of lifters attempting records.
                </p>
                <h2 className='text-xl mt-10 mb-2'>6. Sole exception of a lifter being granted a fourth attempt</h2>
                <p className='mb-2'>
                  A successful completion of a lift within 5kg. of an existing record within any of the four attempts
                  will entitle the lifter to an additional 4<sup>th </sup>attempt for a record. Also, a lifter may
                  attempt to break, by at least ½ kg, a record within their 3 regular attempts. However, this poundage
                  will be rounded <strong>back </strong>to the nearest 2.5 kg.
                </p>
                <p className='mb-2'>
                  increment for class, age group, or Best Lifter placings. (Example: Lifter requests 133.0 kg. to break
                  record by ½ kg. Lift is successful for record purposes only; lifter is credited for weight class
                  placings with 132.5 kg.)
                </p>
                <h2 className='text-xl mt-10 mb-2'>7. Procedure for two lifters lifting the same record weight</h2>
                <p className='mb-2'>
                  In the event of two or more lifters lifting the same record weight, the lighter of the two,
                  bodyweights determined at weigh-in, will be declared the record holder. If both lifters weigh the same
                  at weigh-in and each lifts the same record weight, then each lifter will be immediately reweighed,
                  with the lighter lifter declared the record holder. If, after the re-weigh, both lifters weigh the
                  same, they shall share the record and be declared co-record holders.
                </p>
                <ol start={8}>
                  <li>
                    <strong> Minimum weight increase allowed over existing record</strong>
                  </li>
                </ol>
                <p className='mb-2'>
                  The BSCF/BPF makes allowances to those attempting records to increase the weight a minimum of one-half
                  KG (½ KG.
                </p>{' '}
              </div>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
