'use client'
import Layout from '@/components/Layout';
import Image from 'next/image';
import FAQ from '@/components/FAQ';
import { useState } from 'react';
import Link from 'next/link';

import ZenNotesImg from '@/public/images/home/zen-notes-ipad.jpg';
import CrossDevSyncImg from '@/public/images/home/cross-device-sync@2x.png';
import PersonalizedTherapyImg from '@/public/images/home/therapist-invites@2x.png';
import CollabMoodTrackingImg from '@/public/images/home/mood-tracking-cropped@2x.png';

import WorkflowDashImg from '@/public/images/home/dash-view.jpg';
import WorkflowNotesImg from '@/public/images/home/zennotes-view.jpg';
import WorkflowHDVideoImg from '@/public/images/home/video-calling.jpg';
import WorkflowScheduleImg from '@/public/images/home/schedule-view.jpg';
import WorkflowClientsImg from '@/public/images/home/clients-view.jpg';
import IntegrationImg from '@/public/images/home/payment-screencap@2x.png';

const WORKFLOW_IMAGES = [
  WorkflowDashImg,
  WorkflowNotesImg,
  WorkflowHDVideoImg,
  WorkflowScheduleImg,
  WorkflowClientsImg
]

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
import ChartBarIcon from '@/public/icons/chart-bar.svg';
import IntegratonIcons from '@/public/images/icons/integration-icons@2x.png';

// import {
//   UilChartBar,
//   UilUsdCircle
// } from '@iconscout/react-unicons';


const CrossDeviceSync = () => {
  return (<>
    <h2 className='display-5 u-textcenter mb-4'>
      Explore the App.
    </h2>
    <div className="container bg-half-170 overflow-hidden">
      <div className="row align-items-center ">
        <div className="offset-lg-1 col-lg-5 col-md-7 order-2 order-md-1 mt-5 mt-sm-0">
          <div className="explore-app">
            <h3 className="display-6">Cross-device Syncing.</h3>
            <ul className="list-unstyled">
              <li>  
                  ZenSpaceApp works seamlessly across multiple devices and platforms, so you can use the tools you&apos;re most comfortable with.
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
                  maxWidth: "80%",
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



const PersonalizedTherapyExperience = () => {
  return (
    <div className="container bg-half-170 overflow-hidden">
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
                  maxWidth: "80%",
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
              <li>ZenSpaceApp&apos;s dedicated mobile apps for client allow for greater engagement and collaboration, improving outcomes and strengthening the therapy experience.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
  )
}


const CollabMoodTracking = () => {
  return (
    <section className="bg-half-260 overflow-hidden" >
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
  const [currIdx, setIndex] = useState<number>(0);
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
              alt='ChatGPT-powered Therapy Notes'
              src={ZenNotesIcon}
              height={0}
              width={0}
            />
            </div>
            <p>AI</p>  
          </li>
          <li
            key={2}
            className={(currIdx === 2) ? "active" : "disabled"}
            onClick={() => showView(2)}
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
          key={3}
          className={(currIdx === 3) ? "active" : "disabled"}
          onClick={() => showView(3)}
        > 
          <div className='pill'>
            <Image 
              alt='Seamless schdeuling'
              src={CalendarIcon}
              height={0}
              width={0}
            />
          </div>
          <p>Scheduler</p>  
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
    case 4: imgSrc = WORKFLOW_IMAGES[4]; break;
  }
  
  const ZenNotes = () => {

    const notesHighLights = [
      [
        "No ChatGPT Account Required",
        "Leveraging the power of AI without requiring a separate ChatGPT account makes it easy for therapists to reap the benefits of advanced technology."
      ],
      [
        "Seamless Organization",
        "Effective organization of notes is crucial for therapy sessions, and ZenNotes makes this process effortless."
      ],
      [
        "Self-Reflection Tools",
        "Encouraging self-reflection is essential for personal growth, and having built-in tools to support this is a valuable addition."
      ],
      [
        "User-Friendly Design",
        "Ensuring that the app is easy to navigate and use is key for both therapists and clients."
      ],
      [
        "Making the Most of Notes",
        "ZenNotes helps therapists and clients get the most out of their therapy sessions by providing an optimized note-taking experience."
      ]
    ]

    return <div
      className="zen-notes"
    >
      <div className='desc'>
        <h3
          className='display-6 pt-3'>
          Introducing <span className='bold-accent'>
            ZenNotes</span>, ChatGPT-powered therapy notes.
        </h3>
        <ul>
          {notesHighLights.map((feature, idx) => (
            <li key={idx}>
              <div>

              <h5 className="heading">{feature[0]}</h5>
              <div>{feature[1]}</div>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div
        className=''
        style={{
          paddingRight: 0,
          marginRight: 0
        }}>
        <Image
          alt="Workflow images"
          key={currIdx}
          src={WORKFLOW_IMAGES[currIdx]}
          className="show fade images"
          width={0}
          height={0}
          style={{
            borderRadius: 0,
            maxWidth: "100%",
            width: "100%"
          }}
          />
      </div>
    </div>
  }

  return (
    <div className="workflow-container">
      <Pills />
      {currIdx === 1 ? (        
          <ZenNotes />
      )
        : (
        <div className='image-container'>
          <Image
            alt="Workflow images"
            key={currIdx}
            src={WORKFLOW_IMAGES[currIdx]}
            className="show fade images"
            />
        </div>
      )}
    </div>
  )
}

const SimpleWorkflow = () => {
  return (
    <section id="zen-workflow">
      <h3 className="u-textcenter">
        Simple Workflow.<br />
        <span style={{color: "var(--green-500)"}}>Powerful Capabilities.</span>
      </h3>
      <div className="subhead">
        Secure, AI-powered platform connecting therapists and clients for seamless
        practice management and care.
      </div>
      <WorkflowCarousel />
    </section>
  )
}

/**
 * 
 */
function Benefits() {
  const iconsAlt = [
    [ZenNotesIcon, "ZenNotes app icon for AI-Powered therapy notes"],
    [VideoIcon, "Video call icon for telehealth consultations"],
    [ChatIcon, "Chat message icon for therapist-client communication"],
    [CreditCardIcon, "Credit card icon for secure online payments" ],
    [CalendarIcon, "Calendar icon for appointment scheduling"],
    [SecurityIcon, "Shield icon representing secure and confidential telehealth services"]
  ]

  const benefits: Array<[string, string]> = [
    [
      "ChatGPT-Powered Therapy Notes",
      "Experience the power of AI in your practice, makes taking notes and creating summaries\
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
      "Create and manage your own customizable subscription service on ZenSpaceApp,\
       allowing you to earn predictable, recurring income."
    ],
    [
      "On-the-go Access",
      "Access ZenSpaceApp from anywhere and at any time,\
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
    <section id="unlock-practice" className="bg-half-260">
      <div className="container">
        <div className="mb-4 mt-4 u-textcenter"  >
          <h2 className="display-4" style={{width: "100%", maxWidth: "860px", display: 'block', margin: "auto"}}>
            Everything Integrated. <br />
            <span style={{color: "var(--green-500)"}}>Unlock Your Potential.</span>
          </h2>
          <div className="subhead mb-4" style={{width: "100%", maxWidth: "640px", display: 'block', margin: "auto", marginTop: "18px", marginBottom: "32px" }}>
            Save time, reduce no-shows, and streamline your workflow with ZenSpaceApp.
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
  return <section id="stats">
    <div className='container'> 
      <div className="sub-heading">Telehealth By the numbers</div>
      <div className='grid-container'>
        <div className="grid-item">
          <Image 
            alt='ChatGPT-powered Therapy Notes'
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
            alt='ChatGPT-powered Therapy Notes'
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
            alt='ChatGPT-powered Therapy Notes'
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

const Hero = () => {
  const Heading = () => {
    return (
      <div className="headline title-heading grid-item">
        <h1
          style={{
            // fontWeight:"700 !important",
            paddingTop: "0px",
            lineHeight: '1.0 !important',
            letterSpacing: "-1px"
          }}>
          One App to <span className='color-accent'>Streamline</span> and <span className='color-accent'>Grow</span> Your Therapy Practice.
        </h1>
      </div>
    )
  }

  const Features = () => {
    return (
      <div className="feature-pills">
        <ul>
            <li>
              <Image 
                alt='ChatGPT-powered Therapy Notes'
                src={CalendarIcon}
                height={16}
                width={0}
                />
              Seamless Scheduling
            </li>
            <li>
              <Image 
                alt='ChatGPT-powered Therapy Notes'
                src={ZenNotesIcon}
                height={16}
                width={0}
                />
              AI-Powered Therapy Notes
            </li>
            <li>
              <Image 
                alt='ChatGPT-powered Therapy Notes'
                src={VideoIcon}
                height={16}
                width={0}
                />
              <div>
                HD-Video
              </div>
            </li>
            {/* <li>
              <Image 
                alt='ChatGPT-powered Therapy Notes'
                src={ChatIcon}
                height={18}
                width={0}
                />
              Messaging
            </li> */}
            <li>
              <Image 
                alt='ChatGPT-powered Therapy Notes'
                src={SecurityIcon}
                height={18}
                width={0}
                />
              HIPAA
            </li>
            <li>
              <Image 
                alt='ChatGPT-powered Therapy Notes'
                src={CreditCardIcon}
                height={16}
                width={0}
                />
              Subscriptions
            </li>
           
          </ul>
        </div>
    )
  }

  const HeroImage = () => {
    return (
      <div className="heroImg">
        <Image
          src={ZenNotesImg}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          alt='ZenNotes'
          priority
          style={{
            maxWidth: "100%",
            height: "auto",
            margin: "auto",
          }}
        />
      </div>
    )
  }

  const CtaButtons = () => {
    return (
      <div className="ctaButtons grid-item">
        <Link
          href="https://form.typeform.com/to/RXZdaaEP"
          className="btn btn-primary-dark-border  mt-2"
          >
          Sign up for early access
        </Link>
        <Link
          className="btn btn-outline-dark ml-md-4 mt-2"
          href="/contact/#book-demo">
          Book a demo
        </Link>
      </div>
    )
  }

  return (
    <section id="hero-main" className="d-table w-100 overflow-hidden show fade">
      <div className="container">
        <div className='grid-container'>
          <Heading />
          <Features />
          <CtaButtons />
          <HeroImage />
        </div>
      </div>
    </section>
  )
}

const Integrations = () => {
  return <section id="integrations" className='bg-half-170 slideanim'>
    <div className='container'>
      <div className='heading'>
        <h2>Integrates with Your Favorite Apps.</h2>
        <div className='subhead'>
          Bring all your favorite apps together with our seamless integrations with a myriad of tools.
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

export default function HomePage() {
  return (
    <Layout>
      <Hero/>
      <Stats />
      <Benefits />
      <CrossDeviceSync />
      <SimpleWorkflow/>
      <PersonalizedTherapyExperience />
      <CollabMoodTracking />
      <Integrations/>
      <FAQ />
    </Layout>   
  )
}