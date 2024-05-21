import Head from 'next/head';
import Layout from '../../components/Layout';
import Link from 'next/link';
import { useEffect } from 'react';
import { Metadata } from 'next';
import PricingFAQ from '@/components/PricingFAQ';

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

const PayAsYouGo = () => {
  return <div className="price-option border-gray">
    <div>
      <h3 className="display-6">Pay-as-you-go</h3>
      <span style={{ display: 'block', opacity: '0.6', fontSize: '0.8rem', fontWeight: 'bold' }} className="mt-4">Single sign-on</span>
      <h2 className="display-4">$79.00/mo</h2>
      <div>
        Perfect for therapists with a flexible workload or those just starting out.
      </div>
    </div>
    <div>
      <h6 className="mt-4">What&apos;s included</h6>
      <ul className="list-unstyled mb-0 pl-0">
        <li>$5/month per active client (up to 50 clients included).</li>
        <li>$5/month for each additional client.</li>
        <li>HIPPA-compliant video calls and messaging</li>
        <li>Therapy notes (ChatGPT-powered and Standard)</li>
        <li>4% payment processing fee applies</li>
        <li>Document uploads and patient intake forms</li>
        <li>Basic customer support: Email support with a 12-hour response time</li>
        <li>Cancel anytime.</li>
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
}

const Yearly = () => {

  return <div className="price-option styling-yearly">
    <div>
      <h3><b>Yearly</b></h3>
      <span style={{ display: 'block', opacity: '0.6', fontSize: '0.8rem', fontWeight: '800' }} className="mt-4">Single sign-on</span>
      <h2 className="display-4">$1740/yr </h2>
      <div>
        Ideal for therapists committed to ZenSpaceApp for the long term.
        <b className="text-primary"> (Save 30%)</b>
      </div>
    </div>
    <div>
      <h6 className="mt-4">What&apos;s included</h6>
      <ul className="list-unstyled mb-0 pl-0">
        <li>HIPPA-compliant HD-video calling</li>
        <li>HIPPA-compliant messaging</li>
        <li>Therapy notes (ChatGPT-powered and Standard)</li>
        <li>Document uploads and patient intake forms</li>
        <li>Payment processing fee included</li> 
        <li>Premium customer support: Email, live chat, and phone support with a 6-hour response time</li>
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
}

const Monthly = () => {

  return <div className="price-option border-gray">
  <div>
    <h3 className="display-6">Monthly</h3>
    <span style={{ display: 'block', opacity: '0.6', fontSize: '0.8rem', fontWeight: 'bold' }} className="mt-4">Single sign-on</span>
    <h2 className="display-4">$79.00/mo</h2>
    <div>
      Well-suited for therapists with a consistent client base who prefer predictable monthly costs.
    </div>
  </div>
  <div>
    <h6 className="mt-4">What&apos;s included</h6>
    <ul className="list-unstyled mb-0 pl-0">
      <li>HIPPA-compliant HD-video calling</li>
      <li>HIPPA-compliant messaging</li>
      <li>Therapy notes (ChatGPT-powered and Standard)</li>
      <li>Document uploads and patient intake forms</li>
      <li>Payment processing fee included</li> 
      <li>Enhanced customer support: Email and live chat support with a 12-hour response time</li>
      <li>Cancel anytime.</li>
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
}


/**
 * Therapist Plans
 * @returns 
 */
const TherapistPlans = () => {
  return (
    <section className="bg-half-170">
      <div className="container" style={{ paddingBottom: '170px' }}>
        <div className="row mb-5 mt-4">
          <div className="col-12 col-md-4 pb-4 pt-2">
            <PayAsYouGo />
          </div>
          <div className="col-12 col-md-4 pb-4 pt-2">
            <Yearly />
          </div>
          <div className="col-12 col-md-4 pb-4 pt-2">
            <Monthly />
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
      <PricingFAQ />
    </Layout>   
  )
}

