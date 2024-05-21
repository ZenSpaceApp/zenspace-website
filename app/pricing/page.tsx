import Head from 'next/head';
import Layout from '../../components/Layout';
import Link from 'next/link';
import { useEffect } from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Pricing and Plans",
  description: "Check out our competitive and affordable pricing and plans.",
};

const PatientPlans = () => {
  return (
    <div className="container">
      <h1 className="display-2 mt-5 mb-5 text-center">
          Pricing and Plans
        </h1>
      <div className="row mb-5 mt-5">
        <div className="col-12 col-md-4">
          <div className="price-option border-gray">
            <div className="price-card">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}><h3 className="display-6">Video consultation</h3><h3 style={{ color: '#0080ff', fontWeight: 'bold' }}>$79</h3> </div>
              <h6 className="mt-4">What&apos;s included</h6>
              <ul className="list-unstyled mb-0 pl-0">
                <li>Video consultation with a follow-up call</li>
                <li>Message your doctor</li>
                <li><mark>Add family members</mark></li>
                <li>Refill prescriptions</li>
                <li>All your treatment history, in one place.</li>
                <li>100% refundable</li>
                <li>Cancel/reschedule (2 hrs before) to avoid a fee</li>
              </ul>
              <Link href="pt-4">
                <a href="/contact" className="btn btn-primary mt-4">Get the App</a>
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* <hr></hr> */}
    </div>
  )
}

const TherapistPlans = () => {
  return (
    <section className="bg-half-260">

      <div className="container" style={{ paddingBottom: '170px' }}>
        {/* <h5 className="mt-5 mb-5">PHYSICIANS</h5> */}
        <div className="row mb-5 mt-4">
          <div className="col-12 col-md-4 pb-4 pt-2">
            <div className="price-option border-gray">
              <div>
                <h3 className="display-6">Pay-as-you-go</h3>
                <span style={{ display: 'block', opacity: '0.6', fontSize: '0.8rem', fontWeight: 'bold' }} className="mt-4">Single sign-on</span>
                {/* <h5 className="mt-">Platform fee (17%) per booking</h5> */}
              </div>
              <div>
                <h6 className="mt-4">What&apos;s included</h6>
                <ul className="list-unstyled mb-0 pl-0">
                  <li>Get matched with people looking to triage
                  or get treatment</li>
                  <li><mark>Seamless video calling experience</mark></li>
                  <li>In-app messaging</li>
                  <li>Control your availability</li>
                  <li>Practice from anywhere/anytime</li>
                </ul>
              </div>
              <div className="pt-4">
                <Link
                  href=""
                  className="btn btn-primary-dark-border  mt-2">
                  Sign Up
              </Link>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-4 pb-4 pt-2">
            <div className="price-option border-azure" style={{border: "3px solid", boxShadow: "10px 10px rgba(0, 0,0, 0.8)" }}>
              <div>
                <h3>Yearly</h3>
                <span style={{ display: 'block', opacity: '0.6', fontSize: '0.8rem', fontWeight: '800' }} className="mt-4">Single license</span>
                <h2 className="display-4">$2275/yr </h2> <b className="text-primary">(save 20%)</b>
              </div>
              <div>
                <h6 className="mt-4">What&apos;s included</h6>
                <ul className="list-unstyled mb-0 pl-0">
                  <li>Practice on the platform or off the platform</li>
                  <li>Unlimited video-calling and in-app messaging</li>
                  <li>Built-in mini-EHR</li>
                  <li>Dedicated webpage to promote telehealth option</li>
                  <li>Schedule follow-up appts</li>
                </ul>
              </div>
              <div className="pt-4">
                <Link
                  href=""
                  className="btn btn-primary-dark-border  mt-2">
                  Sign Up
                </Link>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-4 pb-4 pt-2">
            <div className="price-option">
              <div>
                <h3>Monthly</h3>
                <span style={{ display: 'block', opacity: '0.6', fontSize: '0.8rem', fontWeight: 'bold' }} className="mt-4">Single license</span>
                <h2 className="display-4">$237</h2>
              </div>
              <div>
                <h6 className="mt-4">What&apos;s included</h6>
                <p style={{ paddingRight: '20px' }}>Contact us to learn more about how InstaDR platform can power your organization or medical group.</p>
              </div>
              <div className="pt-4">
                <Link
                  href=""
                  className="btn btn-primary-dark-border  mt-2">
                  Sign Up
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default function Pricing() {

  
  return (
    <Layout>
      <h1 className="display-3 mt-5 text-center" style={{paddingTop: "170px"}}>
        Pricing and Plans
      </h1>
      <TherapistPlans />
    </Layout>   
  )
}

