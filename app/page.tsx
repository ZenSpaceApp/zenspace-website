'use client'

import Layout from '@/components/Layout';
import Image from 'next/image';

import { useState } from 'react';
import Link from 'next/link';

import HeroImg from '@/public/images/right-banner.png';
import ClientAppsImg from '@/public/images/home/client-apps@2x.png'
import SetAvailabilityImg from '@/public/images/home/set-hours@2x.png';
import ClientQRCodeImg from '@/public/images/home/client-QR.png';

import SearchTherapistImg from '@/public/images/home/search.png';
import BookTherapistImg from '@/public/images/home/pay.png';
import StartSessionImg from '@/public/images/home/start-session.png';

import {
  UilArrowUpRight
} from '@iconscout/react-unicons';

const ForClients = () => {
  return <section id="for-clients" className='bg-half-260'>
    <div className='container'>
      <div className='grid-container'>
        <div className='vetical-center'>
          <div>
            <h6>For Clients</h6>
            <h2>Why Choose ZenList?</h2>
          </div>
          <ul className="list-unstyled ">
            <li>Immediate Access to Therapists</li>
            <li>Flexible Scheduling</li>
            <li>Secure and Confidential</li> 
            <li>Get the support you need without delay</li>
            <li>Pay using credit card, Venmo, Cashapp</li>
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
        <div> 
          <Image 
            alt="Clients using ZenSpaceApp to find therapists on-dmand"
            src={ClientAppsImg}
            style={{
              maxWidth: "70%",
              height: "auto"
            }}
          />
        </div>
      </div>
    </div>
  </section>
}

const ForTherapists = () => {
  return <section id="for-clients" className='bg-half-260'>
    <div className='container'>
      <div className='grid-container'>
        <div> 
          <Image 
            alt="Clients using ZenSpaceApp to find therapists on-dmand"
            src={SetAvailabilityImg}
            style={{
              maxWidth: "70%",
              height: "auto"
            }}
          />
        </div>
        <div className='grid-item vetical-center'>
          <div>
          <h6>For Therapists</h6>
          <h2>Why Join ZenSpaceApp?</h2>
          </div>
          <ul className="list-unstyled ">
            <li>Be in control of your revenue</li>
            <li>Set Your Own Hours</li>
            <li>Dynamic Pricing</li>
            <li>Comprehensive Practice Management Tools</li> 
          </ul>
          <div style={{ display: "flex", alignItems: "center", flexWrap: "wrap"}}>
            <Link
              className="btn btn-outline-dark ml-md-4 mt-2"
              href="/therapists">
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



const HowItWorks = ({ }) => {
  return <section id="how-it-works" className='bg-half-170'>
    <div className='container'>
      <h2 className='u-textcenter'>How it Works.</h2>


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
              height: "auto"
            }}
            ></Image>
        </div>
      </div>
        
      <div className='grid-container'>
        <div style={{display: "flex", flexDirection: "column", justifyContent: "center"}}>
            <h3>Book Instantly</h3>
            <div>
            Schedule a session with available therapists now.
            </div>
          </div>
          <div>
            <Image
              alt=""
            src={BookTherapistImg}
            style={{
              maxWidth: "100%",
              height: "auto"
            }}
            />
          </div>

      </div>
      <div className='grid-container'>
        <div style={{display: "flex", flexDirection: "column", justifyContent: "center"}}>
            <h3>Start Your Session</h3>
            <div>
              Connect via secure video call.
            </div>
          </div>
          <div>
            <Image
              alt=""
            src={StartSessionImg}
            style={{
              maxWidth: "100%",
              height: "auto"
            }}
            />
          </div>
        </div>
        
          
          
      
      
    </div>
  </section>
}

const ClientQRButton = () => {
  return <>
    <div style={{display: "flex", alignItems: "center", gap: "2rem", border: "2px solid", padding: '4px 12px', borderRadius: "6px"}}> 
      <div>
        Find a Therapist<br />
        <div style={{fontSize: "0.9rem", fontWeight: "600"}}>Download App</div>
      </div>
      <div>
        <Image
          alt=""
          src={ClientQRCodeImg}
        />
      </div>
    </div>
  </>
}

const CtaButtons = () => {
  return (
    <div style={{ display: "flex", alignItems: "center", flexWrap: "wrap", gap: "2rem"}}>
      <ClientQRButton />
      <Link
        className="btn btn-primary-dark-border"
        href="/therapists">
        Join as Therapist
      </Link>
    </div>
  )
}

const OnDemandHero = () => {
  return <section id="ondemand-hero" className='bg-half-260'>
    <div className='container'>
      <div className='grid-container'>
        <div style={{display: "flex", flexDirection:"column", justifyContent: "center", gap: "2rem"}}>
          <h1>
            Therapists at Your <span className='color-accent'>Fingertips</span>.
          </h1>
          <div className='subheading'>
            Instantly connect with licensed therapists anytime, anywhere through our app.
          </div>
          <CtaButtons />
        </div>
        <div>
        <Image
          alt='Image showing a supportive therapist helping a client.'
          src={HeroImg}
            style={{
              maxWidth: "70%",
              height: "auto",
              margin: "auto",
              display: "block"
          }}
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
      <HowItWorks />
      <ForClients />
      <ForTherapists />
    </Layout>   
  )
}