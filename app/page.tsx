'use client'

import Layout from '@/components/Layout';
import Image from 'next/image';
import styles from './HomePage.module.scss'

import Link from 'next/link';

import HeroImg from '@/public/images/hero-img.png';
import ClientAppsImg from '@/public/images/home/client-apps@2x.png'
import SetAvailabilityImg from '@/public/images/home/set-hours@2x.png';
// import ClientQRCodeImg from '@/public/images/home/client-QR.png';

import SearchTherapistImg from '@/public/images/home/search.png';
import BookTherapistImg from '@/public/images/home/pay.png';
import StartSessionImg from '@/public/images/home/start-session@2x.png';

import Avatar0 from '@/public/images/home/avatar-0.png';
import Avatar1 from '@/public/images/home/avatar-1.png';
import Avatar2 from '@/public/images/home/avatar-2.png';

const avatars = [Avatar0, Avatar1, Avatar2];

import {
  UilArrowUpRight
} from '@iconscout/react-unicons';

const ForClients = () => {
  return <section id="for-clients" className='bg-half-170'>
    <div className='container'>
      <div className='grid-container'>
        <div className='desc-item vetical-center'>
          <div>
            <h6>For Clients</h6>
            <h2>Why Zenspace</h2>
          </div>
          <ul className="list-unstyled ">
            <li>Immediate access to therapists</li>
            <li>Flexible scheduling</li>
            <li>Secure and confidential</li> 
            <li>Support you need without the delay</li>
            <li>Myriad ways to pay</li>
          </ul>
          <div style={{ display: "flex", alignItems: "center", flexWrap: "wrap"}}>
            <ClientQRButton />
            <Link
              className="btn btn-outline-dar ml-md-4 mt-2"
              href="/zenlist">
              Learn More
              <UilArrowUpRight height={8} width={10} style={{ color: "#474747", height: "22px"}} />
            </Link>

          </div>
        </div>
        <div className='image-item'> 
          <Image 
            alt="Clients using ZenSpaceApp to find therapists on-dmand"
            src={ClientAppsImg}
          />
        </div>
      </div>
    </div>
  </section>
}

const ForTherapists = () => {
  return <section id="for-therapists" className='bg-half-170'>
    <div className='container'>
      <div className='grid-container'>
        <div className='image-container'> 
          <Image 
            alt="Clients using ZenSpaceApp to find therapists on-dmand"
            src={SetAvailabilityImg}
          />
        </div>
        <div className='grid-item vetical-center'>
          <div>
          <h6>For Therapists</h6>
          <h2>Zenspace Platform and Tools</h2>
          </div>
          <ul className="list-unstyled ">
            <li>Be in control of your revenue</li>
            <li>Set your own hours</li>
            <li>Set your own rates</li>
            <li>No long-term contract or employment required</li>
            <li>Comprehensive practice management tools</li> 
          </ul>
          <div style={{ display: "flex", alignItems: "center", flexWrap: "wrap"}}>
            <Link
              className="btn btn-outline-dark ml-md-4 mt-2"
              href="/therapists#therapist-sign-up">
                Join as Therapist
            </Link>
            <Link
              className="btn btn-outline-dar ml-md-4 mt-2"
              href="/therapists">
              Learn More 
              <UilArrowUpRight height={8} width={10} style={{ color: "#474747", height: "22px"}} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  </section>
}

const GetStarted = () => {
  return <section id="get-started" className={`${styles.getStarted} bg-half-170`}>
    <div className='container u-textcenter'>
      <h3 style={{ fontSize: "1.75rem !important" }}>Get Started Today.</h3>
      <div className={`subhead ${styles.subhead}`}>
        Whether you&apos;re seeking support or looking to expand your practice, Zenspace makes it easy to get started.
      </div>
      <div style={{ display: "flex", justifyContent: "center", marginTop: "2rem"}}>
        <CtaButtons />
      </div>
    </div>
  </section>
}

const HowItWorks = ({ }) => {
  return <section id="how-it-works" className='bg-half-170'>
    <div className='container'>
      <h2 className='u-textcenter'>How it Works.</h2>
      <p className='u-textcenter' style={{ maxWidth: "600px", display: "block", margin: "2rem auto", fontWeight: "500" }} >
        ZenspaceApp connects clients with licensed therapists through a simple 3-step process:
      </p>


      <div className='grid-container'>
          <div style={{display: "flex", flexDirection: "column", justifyContent: "center"}}>
              <h3>Search and Find</h3>
              <div>
                Use our filters to find the 
                right therapist for you.
              </div>
            </div>
          
          <div>
            <Image
              alt=""
              src={SearchTherapistImg}
            style={{
              maxWidth: "100%",
              height: "auto",
              gridRow: "1"
            }}
            />
          
        </div>
      </div>
        
      <div className='grid-container'>
          <div >
            <Image
              alt=""
            src={BookTherapistImg}
            style={{
              maxWidth: "100%",
              height: "auto"
            }}
            />
          </div>
        <div style={{display: "flex", flexDirection: "column", justifyContent: "center", }}>
            <h3>Book Instantly</h3>
            <div>
            Schedule a session with available therapists now.
            </div>
          </div>

      </div>
      <div className='grid-container'>
        <div style={{display: "flex", flexDirection: "column", justifyContent: "center"}}>
            <h3>Start Your Session</h3>
            <div>
              Connect via secure video call.
            </div>
          </div>
          <div >
            <Image
              alt=""
            src={StartSessionImg}
            
            />
          </div>
        </div>
    </div>
  </section>
}


const FeaturedTherapists = () => {

  const therapists: string[][] = [
    ["Dr. Emily Foster, PhD", "Cognitive Behavioral Therapy, Anxiety, Depression", "New York, NY", "Rating: 4.5 | 81  Reviews"],
    ["Sophia Turner, LMFT", "Couples Therapy, LGBTQ+ Issues, Mindfulness", "Seattle, WA", "Rating: 4.0 | 17 Reviews"],
    ["John Miller, LCSW", "Family Therapy, Trauma, Grief Counseling", "Los Angeles, CA", "Rating: 5.0 | 8 Reviews"]
  ]

  return <section className='bg-half-170'>
    <div className='container'>
      <div className="u-textcenter mb-5">
        <h2>Featured Therapists of the Week.</h2>
        <div className={`subhead ${styles.subhead}`}>
          Discover some of our standout therapists who are making a difference in their clients&apos; lives.
        </div>
      </div>
      <div className={styles.gridContainer}>
        {therapists.map((therapist, idx) => (
          <div key={idx} className={styles.gridItem}>
            <div className={styles.avatar}>
              <Image
                alt=""
                src={avatars[idx]}
                height={60}
                width={60}
              />
            </div>
            <div className={styles.details}>
              <h5>{therapist[0]}</h5>
              <div>{therapist[1]}</div>
              <div className='mt-4'>{therapist[2]}</div>
              <div>{therapist[3]}</div>
            </div>
          </div>
        ))}
      </div>
      
      <div className='u-textcenter mt-5'>
        <Link
          className="btn btn-outline-dark underline"
          href="/zenlist">
          Explore More Therapists
        </Link>
          {/* <UilArrowUpRight  style={{ color: "white !important", height: '24px' }}  /> */}
      </div>
    </div>
  </section>
}


const ClientQRButton = () => {
  return <>
    <div style={{display: "flex", alignItems: "center", gap: "2rem", border: "2px solid", padding: '4px 12px', borderRadius: "6px"}}> 
      <div>
        {/* Find a Therapist<br /> */}
        {/* <div style={{ fontSize: "0.9rem", fontWeight: "600", textAlign: "left" }}> */}
          Download App
        {/* </div> */}
      </div>
      <div>
        {/* <Image
          alt=""
          src={ClientQRCodeImg}
          height={32}
          width={32}
        /> */}
      </div>
    </div>
  </>
}

const CtaButtons = () => {
  return (
    <div className="cta" style={{display: "flex", gap: "1rem"}} >
      {/* <ClientQRButton /> */}
      <Link
        className="btn btn-outline-secondary"
        href="/">
        Download App
      </Link>
      <Link
        className="btn btn-primary-dark-border"
        href="/therapists/#therapist-sign-up">
        Join as Therapist
      </Link>
    </div>
  )
}

const OnDemandHero = () => {
  return <section id="on-demand-hero" className='bg-half-170'>
    <div className='container'>
      <div className='gridcontainer' style={{ display: "grid", gridTemplateColumns: "1fr 1fr", alignItems: "center", gap: "2rem"  }}>
        <div className="grid-item" >
          <h1 style={{paddingTop: "3rem"}}>
             Therapists.<br/> <span className='color-accent'>On-demand.</span>
          </h1>
          <div className='subhead mt-2' style={{ maxWidth: "80%", fontWeight: "500" }}>
            Instantly connect with licensed therapists anytime, anywhere through our app.
          </div>
          <CtaButtons />
        </div>
        <div className="grid-item" style={{background: "var(--green-500)", borderRadius: "24px", padding: "40px"  }}>
          <Image
            alt='Image showing a supportive therapist helping a client.'
            src={HeroImg}
            className='hero-img'
            height={550}
            width={550}
          />
        </div>
      </div>
    </div>
  </section>
}



export default function HomePage() {
  return (
    <Layout showCTA={false}>
      <OnDemandHero />
      <FeaturedTherapists />
      <HowItWorks />
      <ForClients />
      <ForTherapists />
      <GetStarted />
    </Layout>   
  )
}