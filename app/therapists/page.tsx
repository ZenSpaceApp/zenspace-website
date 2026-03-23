'use client'
import Layout from '@/components/Layout';
import Image from 'next/image';
import FAQ from '@/components/FAQ';
import { useState } from 'react';
import Link from 'next/link';

import ZenNotesDashImg from '@/public/images/zen-platform@2x.png';
import CrossDevSyncImg from '@/public/images/home/cross-device-sync@2x.png';
import PersonalizedTherapyImg from '@/public/images/home/therapist-invites@2x.png';
import CollabMoodTrackingImg from '@/public/images/home/mood-tracking-cropped@2x.png';
import SetAvailabilityImg from '@/public/images/home/set-hours@2x.png';

import ZenNotesImg from '@/public/images/zennotes.png';

import WorkflowDashImg from '@/public/images/home/dash-view.jpg';
import WorkflowNotesImg from '@/public/images/home/zennotes-view.jpg';
import WorkflowHDVideoImg from '@/public/images/home/video-calling.png';
import WorkflowScheduleImg from '@/public/images/home/schedule-view.png';
import WorkflowClientsImg from '@/public/images/home/clients-view.jpg';

import IntegrationImg from '@/public/images/home/payment-screencap@2x.png';
import ConfigureSubsImg from '@/public/images/home/configure-plans.jpg';
import PromoteSubsImg from '@/public/images/home/booking-config.jpg';
import EarningsDashImg from '@/public/images/home/earnings-dash.jpg';
import WaveformIcon from '@/components/waveform/Waveform';

const WORKFLOW_IMAGES = [
  WorkflowDashImg,
  WorkflowScheduleImg,
  ZenNotesDashImg,
  WorkflowHDVideoImg,
  WorkflowClientsImg
]

import {
  UilUserCheck,
  UilVideo,
  UilEnvelopeCheck
} from '@iconscout/react-unicons';

//import icons 
import CostsIcon from '@/public/images/icons/costs.svg';
import ImpactIcon from '@/public/images/icons/impact.svg';
import NoShowIcon from '@/public/images/icons/no-show.svg';

import ZenNotesIcon from '@/public/images/icons/therapy-notes.svg';
import VideoIcon from '@/public/images/icons/video-calling.svg';
import ChatIcon from '@/public/images/icons/chat-bubble.svg';
import CreditCardIcon from '@/public/images/icons/credit-card.svg';
import CalendarIcon from '@/public/images/icons/calendar.svg';
import SecurityIcon from '@/public/images/icons/security.svg';
import ClientsIcon from '@/public/images/icons/clients.svg';
import DashIcon from '@/public/images/icons/dashboard.svg';
import ChevronUpIcon from '@/public/images/icons/chevron-up.svg';
import ChevronDownIcon from '@/public/images/icons/chevron-down.svg';
import IntegratonIcons from '@/public/images/icons/integration-icons@2x.png';
import WaveformIco from '@/public/images/icons/audio-tap.svg';


const ACI = () => {
  return (
    <div className='section bg-half-170' id="ai-efficiency">
      <div className='container '>
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '2rem', gap: "0.5rem" }}>        
          <WaveformIcon />
          
        </div>
        <h2 className='u-textcenter bold-accent color-accent'>Therapy Notes Just Got Smarter.</h2>
        <div className='subhead u-textcenter'>
          Stop reliving your sessions. From AI-assisted notes to fully ambient intelligence.
          <br/> <em><span className='bold-accent coloraccent'>Your session documents itself.</span></em>
        </div>

        <Image 
          alt="Agentic Clinical Intelligence (ACI) transforming therapy notes"
          src={ZenNotesImg}
          style={{
            display: 'block',
            margin: 'auto',
            marginTop: "3rem",
            maxWidth: "80%",
            height: "auto",
            border: "1px solid var(--green-200)",
            borderRadius: "12px",
            boxShadow: "0 4px 12px rgba(20, 129, 71, 0.1)",
            background: "var(--green-50)"

          }}
        />

      <Link href="/zennotes" passHref>
        <button
          className='btn btn-primary-dark-border'
          style={{ display: "block", margin: "auto", marginTop: "4rem" }}>
              See ZenNotes
        </button>
          </Link> 
      </div>
    </div>
  )
}

const ExpTheDifference = () => {
  return (
    <section className="bg-half-170" style={{background: "var(--green-50)"}}>
      <h2 className=' container u-textcenter'>
        <span className='bold-accent color-accent'>
          Experience the Difference.
        </span>
        <br />
        Comprehensive Mobile and Desktop Apps.
      </h2>
      <CrossDeviceSync />
      <PersonalizedTherapyExperience />
      <CollabMoodTracking />
    </section>   
  )
}

const CrossDeviceSync = () => {
  return (<>
    <div className="container  overflow-hidden" style={{padding: "4rem 2rem"}}>
      <div className="row align-items-center ">
        <div className="offset-lg-1 col-lg-5 col-md-7 order-2 order-md-1 mt-5 mt-sm-0">
          <div className="explore-app">
            <h3 className="display-6">Cross-device Syncing.</h3>
            <ul className="list-unstyled">
              <li>  
                  ZenspaceApp works seamlessly across multiple devices and platforms, so you can use the tools you&apos;re most comfortable with.
              </li>
              <li>
                Access your practice data from your iPad, iPhone, or web browser, anytime, anywhere.
              </li>
              <li>
                Keep your data in sync across all your devices, so you never miss a beat.
              </li>
            </ul>
          </div>
        </div>

        <div className="col-lg-6 col-md-5 order-1 order-md-2">
          <div className="app-feature-shapeleft position-relative">
            <div className="text-center text-md-right">
            <Image
                className="img-fluid"
                alt="Cross device sync"
                src={CrossDevSyncImg}
                height={0}
                width={0}
                style={{
                  maxWidth: "70%",
                  display: "block",
                  margin: "auto"
                }}
              />
            </div>
          </div>
      </div>
    </div>
  </div>
  </>
  )
}


const Subscriptions = () => {
  const [selIdx, setIndex] = useState<number | null>(0);
  // const [featureImg, setFeatutedImg] = useState<string | ''>(ConfigureSubsImg)

  // ref.current
  const expandAnswer = (idx : null | number) => {
    if (selIdx === idx) {      
      setIndex(0)
    } else {
      setIndex(idx)
      // setImg(images[idx])
    }  
  }

  let imgSrc = ConfigureSubsImg;
  switch (selIdx) {
    case 0: imgSrc = ConfigureSubsImg; break;
    case 1: imgSrc = PromoteSubsImg; break;
    case 2: imgSrc = EarningsDashImg; break;
  }

  const features = [
    [
      "Customize Your Plans",
      "Tailor your subscription plans to suit your clients' needs and your therapy offerings. \
      Set pricing, session frequency, and additional perks to make your plans stand out."
    ],
    [
      "Promote Your Service",
      "Showcase your subscription plans via your custom page and domain with our Zen Sites suite\
       and share them with potential clients. We make it easy to spread the word about your practice and attract new subscribers.",
    ],
    [
      "Maximize your Earnings",
      "Focus on what you do best – helping your clients. ZenPath handles recurring billing\
       and client management, allowing you to grow your practice and build long-lasting relationships with your subscribers."
    ]
  ]
  
  return (<section id="subscriptions">
    <div className="container bg-half-170">
      <div className='u-textcenter mb-5'>
        <h2>
          {/* Grow Your Business. <br /> */}
          <span className='bold-accent color-accent'>ZenPath Subscriptions.</span> </h2>
        <div className='subhead'>
          Launch custom site with subscription plans in minutes &mdash; <em><span className='color-accent bold-accent'>no coding required</span>.</em>
        </div>
      </div>

      <div className='flex-container'>
        <div className="row align-items-center ">
          <div className="col-lg-3 col-md-7 order-2 order-md-1 mt-5 mt-sm-0">
            <div >
              <ul>
                {features.map((feature, idx) => (
                  <li
                    key={idx}
                    onClick={() => expandAnswer(idx)}
                  >
                    <div className='expandable-heading'>
                      <div>{feature[0]}</div>
                      <Image
                        alt='Icon used to show the content'
                        src={selIdx === idx ? ChevronUpIcon : ChevronDownIcon}
                        height={8}
                      />
                    </div>
                    <div className={selIdx === idx ? "expandable-bottom open" : "expandable-bottom"}>
                      <div>{feature[1]}</div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className=" col-lg-9 col-md-5 order-1 order-md-2">
            <div className="app-feature-shapeleft position-relative">
              <div className="text-center text-md-right">
              <Image
                  className="img-fluid"
                  alt="Cross device sync"
                  src={imgSrc}
                  style={{
                    maxWidth: "90%",
                    height: "auto",
                    display: "block",
                    margin: "auto"
                  }}
                />
              </div>
            </div>
        </div>
        </div>
      </div>
        <div style={{display: 'flex', justifyContent: "center", marginTop: "3rem"}}>
          <a className='btn btn-dark' style={{display: "flex", alignItems: "center"}}>
            Get Started
          </a>
        </div>
  </div>
  </section>
  )
}


const PersonalizedTherapyExperience = () => {
  return (
    <div className="container overflow-hidden" style={{padding: "4rem 2rem"}}>
        <div className="row align-items-center">
          <div className="offset-lg-1 col-lg-6 col-md-5">
            <div className="app-feature-shaperight position-relative">
              <div className="text-center text-md-left">
              <Image
                className="img-fluid "
                alt="Personalized Therapy"
                src={PersonalizedTherapyImg}
                height={0}
                width={0}
                style={{
                  maxWidth: "70%",
                  // height: "auto",
                  display: "block",
                  margin: "auto"
                }}
              />
              </div>
            </div>
          </div>

          <div className="col-lg-5 col-md-7 mt-5 mt-sm-0">
            <div className="explore-app">
              <h3>Personalized Therapy Experience.</h3>
              <ul className="list-unstyled">
              <li>Dedicated client apps tailored to each individual&apos;s needs and preferences.</li>
              <li>ZenspaceApp&apos;s dedicated mobile apps for client allow for greater engagement and collaboration, improving outcomes and strengthening the therapy experience.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
  )
}


const CollabMoodTracking = () => {
  return (
    <section className="overflow-hidden" style={{padding: "4rem 2rem"}}>
      <div className="container mt-100">
        <div className="row align-items-center">
          <div className="offset-lg-2 col-lg-4 col-md-7 order-2 order-md-1 mt-5 mt-sm-0">
            <div className="explore-app">
              <h3 className="display-6">Collaborative Mood Tracking.</h3>
              <ul className="list-unstyled">
                <li>
                  <span>
                    Empower clients to actively engage in their therapy by tracking and sharing their mood levels.
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-lg-4 col-md-5 order-1 order-md-2">
             <div>
              <div className="text-center text-md-right">
              <Image
                  className="img-fluid"
                  alt="Collaborative mood tracking"
                  src={CollabMoodTrackingImg}
                  height={0}
                  width={0}
                  style={{
                    maxWidth: "70%"
                  }}
                />
              </div>
            </div>
        </div>
      </div>
    </div>
  </section>

  )
}


function WorkflowCarousel() {
  const [currIdx, setIndex] = useState<number>(2);
  let imgSrc;

  function showView(atIdx : number) {
    setIndex(atIdx);
  }
  
  const Pills = () => {
    return (
      <div className="pills">
        <ul>
          <li
            key={0}
            className={(currIdx === 0) ? "active" : "disabled"}
            onClick={() => showView(0)}
          > 
            <div className='pill'>
              <Image 
                alt='Integrated Dashboard'
                src={DashIcon}
                height={0}
                width={0}
              />
            </div>
            <p>Dashboard</p>  
          </li>
          <li
          key={1}
          className={(currIdx === 1) ? "active" : "disabled"}
          onClick={() => showView(1)}
        > 
          <div className='pill'>
            <Image 
              alt='Seamless schdeuling'
              src={CalendarIcon}
              height={0}
              width={0}
            />
          </div>
          <p>Scheduling</p>  
          </li>
        <li
          key="2"
          className={(currIdx === 2) ? "active" : "disabled"}
          onClick={() => showView(2)}
        >
          <div className='pill'>
            <Image 
              alt='Clients View'
              src={WaveformIco}
              height={0}
              width={0}
            />
          </div>
          <p>Therapy Notes</p>  
        </li>
          <li
            key={3}
            className={(currIdx === 3) ? "active" : "disabled"}
            onClick={() => showView(3)}
          >
          <div className='pill'>
            <Image 
              alt='HD-Video Calling'
              src={VideoIcon}
              height={0}
              width={0}
            />
          </div>
          <p>Video</p>  
          </li>
    
        <li
          key="4"
          className={(currIdx === 4) ? "active" : "disabled"}
          onClick={() => showView(4)}
        >
          <div className='pill'>
            <Image 
              alt='Clients View'
              src={ClientsIcon}
              height={0}
              width={0}
            />
          </div>
          <p>Clients</p>  
        </li>
      </ul>
    </div>
    )
  }
  
  switch (currIdx) {
    case 0: imgSrc = WORKFLOW_IMAGES[0]; break;
    case 1: imgSrc = WORKFLOW_IMAGES[1]; break;
    case 2: imgSrc = WORKFLOW_IMAGES[2]; break;
    case 3: imgSrc = WORKFLOW_IMAGES[3]; break;
  }
  
  

  return (
    <div className="workflow-container">
      <Pills />
        <div className='image-container'>
          <Image
            alt="Workflow images"
            key={currIdx}
            src={WORKFLOW_IMAGES[currIdx]}
            className="show fade images"
            />
        </div>
    </div>
  )
}

const SimpleWorkflow = () => {
  return (
    <section id="zen-workflow">
      <WorkflowCarousel />
    </section>
  )
}

/**
 * 
 */
function Benefits() {
  const iconsAlt = [
    [WaveformIco, "ZenNotesImg app icon for AI-Powered therapy notes"],
    [VideoIcon, "Video call icon for telehealth consultations"],
    [ChatIcon, "Chat message icon for therapist-client communication"],
    [CreditCardIcon, "Credit card icon for secure online payments" ],
    [CalendarIcon, "Calendar icon for appointment scheduling"],
    [SecurityIcon, "Shield icon representing secure and confidential telehealth services"]
  ]

  const benefits: Array<[string, string]> = [
    [
      "Ambient Clinical Intelligence (ACI)",
      "Experience the power of ambient AI in your practice, makes taking notes and creating summaries\
       a breeze so you can focus on your clients' needs."
    ],
    [
      "Convenience",
      "Remote sessions and streamlined scheduling make therapy more accessible\
       for clients and boost efficiency for therapists."
    ],
    [
      "Seamless Communication",
      "Secure messaging and document sharing help keep everyone on the same page and\
      facilitate better collaboration between therapists and their clients."
    ],
    [
      "Grow Your Therapy Business", 
      "Create and manage your own customizable subscription service on ZenspaceApp,\
       allowing you to earn predictable, recurring income."
    ],
    [
      "On-the-go Access",
      "Access ZenspaceApp from anywhere and at any time,\
       ensuring that you can manage and book therapy sessions even when\
        you're on the move."
    ],
    [
      "Built-in Security",
      "All personal information is always protected with industry-leading encryption,\
       ensuring secure data transmission and storage."
    ]
  ]

  return (
    <section id="unlock-practice" className="bg-half-170">
      <div className="container">
        <div className="mb-4 mt-4 u-textcenter"  >
          <h2 className="display-4" style={{width: "100%", maxWidth: "860px", display: 'block', margin: "auto"}}>
            Everything Integrated. <br />
            <span
              className='bold-accent color-accent'>
              Unlock Your Potential.
            </span>
          </h2>
          <div className="subhead mb-4" style={{width: "100%", maxWidth: "640px", display: 'block', margin: "auto", marginTop: "18px", marginBottom: "32px" }}>
            Save time, reduce no-shows, and streamline your workflow with ZenspaceApp.
          </div>
        </div>

        <div className='grid-container'>
          {benefits.map((benefit, idx) => (
            <div key={idx} className='benefit'>
              <Image 
                  src={iconsAlt[idx][0]}
                  alt={iconsAlt[idx][1]}
                  height={28}
                  width={0}
              />
              <h3 className='heading'>{benefit[0]}</h3>
              <div>{benefit[1]}</div>
            </div>
          ))}  
        </div>
      </div>
    </section>
  )
}

const Stats = () => {
  return <section id="stats" className='bg-half-170'>
    <div className='container'> 
      <div className="sub-heading">Telehealth By the numbers</div>
      <div className='grid-container'>
        <div className="grid-item">
          <Image 
            alt='Ambient Clinical Intelligence (ACI) Powered Notes'
            src={CostsIcon}
            height={32}
            width={0}
            style={{marginBottom: "rem"}}
          />
          <h3>Costs</h3>
          <div className="">
            <span className="">Virtual visits saved patients</span> a median of <b>88 minutes</b> and <b>33 miles</b> compared to usual care, this according to a random trial
            done on Parkinson&apos;s patients.
          </div>
        </div>
        <div className="grid-item">
          <Image 
            alt='Telehealth impact on patient satisfaction and access to care'
            src={ImpactIcon}
            height={32}
            width={0}
            style={{marginBottom: "rem"}}
          />
          <h3>Impact</h3>
          <div>
            Higher patient satisfaction rates than in-person therapy. <span className="underline">Reduced wait times</span> for mental
            health services, especially in areas with limited access.</div>
        </div>
        <div className="grid-item">
          <Image 
            alt='reduce no-shows with telehealth appointments'
            src={NoShowIcon}
            height={32}
            width={0}
            style={{marginBottom: "rem"}}
          />
          <h3>No-show</h3>
          <div className="">
            Of the ~23k scheduled visits <span className="underline">20% of patients</span> missed their appointments.
            <em> Increasing the burden of care and healthcare costs.</em>.
          </div>
        </div>
      </div>
    </div>
  </section>
}


const OnDemandPlatform = () => {
  return <>
    <section id="on-demand" className="bg-half-170">
      <div className="container profile-submit pb-5" style={{border: 'none'}}>
        <div style={{ marginLeft: '10px'}}>
          {/* <img src="/images/stetho.svg" width="30px" /> */}
        </div>
        <div className="row justify-content-center">
          <div className="col-12">
            <div className="section-title text-center mb-4 pb-2">
              <h2>How the <span className='color-accent'>On-Demand</span> Platform Works.</h2>
              <div className="subhead">
                In just a few steps start <span className="bold-accent color-accent">growing</span> your practice on our <span className="underline">platform</span>.
              </div>
            </div>
          </div>
        </div>

        
          <div> 
            <Image 
              alt="Clients using ZenspaceApp to find therapists on-dmand"
              src={SetAvailabilityImg}
            />
          </div>
        

        <div className="row">
          <div className="col-md-4 mt-4 pt-2">
            <div className=" features feature-clean work-process bg-transparent process-arrow border-0 text-center">
              <div className="icons text-primary text-center mx-auto">
              <UilEnvelopeCheck/>
              </div>

              <div className="card-body">
                <h3 className="text-dark">Sign Up</h3>
                <p className="mb-2">Select a plan and create a profile.</p>
              </div>
            </div>
          </div>
        
          <div className="col-md-4 mt-md-5 pt-md-3 mt-4 pt-2">
            <div className="features feature-clean work-process bg-transparent process-arrow border-0 text-center">
              <div className="icons text-primary text-center mx-auto">
                <UilUserCheck />
              </div>

              <div className="card-body">
                <h3 className="text-dark">Get Verified</h3>
                <p className="mb-2">Upload your professional license and ID. Once verified, you’ll receive a badge on your profile.</p>
              </div>
            </div>
          </div>
        
          <div className="col-md-4 mt-md-5 pt-md-5 mt-4 pt-2">
            <div className=" features feature-clean work-process bg-transparent d-none-arrow border-0 text-center">
              <div className="icons text-primary text-center mx-auto">
              <UilVideo />
              </div>

              <div className="card-body">
                <h3 className="text-dark">Start Offering Sessions</h3>
                <p className="mb-2">Manage your schedule, connect with clients instantly, and provide sessions.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center mt-4">   
          <a className="btn btn-primary-dark-border" href="/pricing">Get Started</a>
        </div>
      </div>
    </section>
  </>
}

const HeroHeading = () => {
    return (
      <div className="grid-item ">
        <h1 className="headline">
          
          One App to <span className='bold-accent color-accent'>Streamline</span> Your Therapy Practice
        </h1>
      </div>
    )
  }

const Hero = () => {
  const Heading = () => {
    return (
      <div className="grid-item ">
        <h1 className="headline">
          One App to <span className='bold-accent color-accent'>Streamline</span> Your Therapy Practice
        </h1>
      </div>
    )
  }

  // const Features = () => {
  //   return (
  //     <div className="feature-pills">
  //       <ul>
  //           <li>
  //             <Image 
  //               alt='ambient clinical intelligence powered therapy notes'
  //               src={CalendarIcon}
  //               height={16}
  //               width={0}
  //               />
  //             Seamless Scheduling
  //           </li>
  //           <li>
  //             <Image 
  //               alt='HD-video calling for telehealth sessions'
  //               src={VideoIcon}
  //               height={16}
  //               width={0}
  //               />
  //             <div>
  //               HD-Video
  //             </div>
  //           </li>
  //           <li>
  //             <Image 
  //               alt='Ambient Clinical Intelligence (ACI) powered therapy notes'
  //               src={ZenNotesIcon}
  //               height={16}
  //               width={0}
  //               />
  //             Ambient Notes
  //           </li>
  //           <li>
  //             <Image 
  //               alt='HIPAA-compliant security for telehealth sessions'
  //               src={SecurityIcon}
  //               height={18}
  //               width={0}
  //               />
  //             HIPAA
  //           </li>
  //           <li>
  //             <Image 
  //               alt='subscription management for therapists and clients'
  //               src={CreditCardIcon}
  //               height={16}
  //               width={0}
  //               />
  //             Subscriptions
  //           </li>
  //         </ul>
  //       </div>
  //   )
  // }

  // const HeroImage = () => {
  //   return (
  //     <div className="heroImg">
  //       <Image
  //         src={WorkflowDashImg}
  //         sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
  //         alt='AI-Powered therapy notes on ZenNotesImg platform'
  //         priority
  //         style={{
  //           maxWidth: "100%",
  //           height: "auto",
  //           margin: "auto",
  //         }}
  //       />
  //     </div>
  //   )
  // }

  
  return (
    <section id="hero-main" className="show fade">
      <div className="container">
        <div className='grid-container'>
          <Heading />
          <SimpleWorkflow />
          {/* <Features /> */}
          {/* <HeroImage /> */}
          <CtaButtons />
        </div>
      </div>
    </section>
  )
}

const CtaButtons = () => {
    return (
      <div className="ctaButtons grid-item">
        <Link
          // href="https://form.typeform.com/to/RXZdaaEP"
          href="https://docs.google.com/forms/d/e/1FAIpQLSfwzPnrq_3K4zCOhyUdhwroBsw-haYHsY6Xn4wgRUXCCB8Urw/viewform?usp=header_1  "
          className="btn btn-primary-dark-border  mt-2"
          target="_blank"
          rel="noopener noreferrer"
          >
          Get Early Access
        </Link>
        <Link
          className="btn btn-outline-dark ml-md-4 mt-2"
          href="https://calendly.com/rp2701-dev/30min"
          target="_blank"
          rel="noopener noreferrer"
          >
          Book a Demo
        </Link>
      </div>
    )
  }

const Integrations = () => {
  return <section id="integrations" className='bg-half-170'>
    <div className='container'>
      <div className='heading'>
        <h2>Integrates with Your <span className='bold-accent color-accent'>Favorite Apps.</span></h2>
        <div className='subhead'>
          Bring all your favorite apps like quickbooks, google calendar and paypal
          together with our seamless integrations.
        </div>
      </div>
    <div className='grid-container'>
      <div className='grid-item'>
        <Image
          alt='Ingeration with popular apps icons'
          src={IntegratonIcons}
          className='intg-icons'
        />
      </div>
      <div className='grid-item'>
        <Image 
          alt="Image of stripe and paypal integrations."
          src={IntegrationImg}
          className='intg-img'
        />
      </div>
      </div>
    </div>
  </section> 
}

export default function Therapists() {
  return (
    <Layout>
      <Hero />
      <Stats />
      <Benefits />
      <ExpTheDifference />
      <ACI />
      <OnDemandPlatform />
      <Subscriptions />
      <Integrations/>
      <FAQ />
    </Layout>   
  )
}