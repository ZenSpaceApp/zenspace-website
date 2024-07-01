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


const PayAsYouGo = () => {
  return <div className="price-option border-gray">
    <div className='mb-4'>
      <div className="price-heading">Pay-as-you-go</div>
      <h2 className="display-4">$79 <span style={{fontSize: "1rem"}}>/yr</span> </h2>
      <div>
        Perfect for therapists with a flexible workload or those just starting out.
      </div>
    </div>
    <div>
      <h6 className="mt-4">What&apos;s included</h6>
      <ul className="list-unstyled mb-0 pl-0">
        <li>$5/month per active client (up to 50 clients included).</li>
        {/* <li>$5/month for each additional client.</li> */}
        <li>HIPAA-compliant video calls and messaging</li>
        <li>Therapy notes (ChatGPT-powered and Standard)</li>
        <li>4% payment processing fee applies</li>
        <li>Document uploads and patient intake forms</li>
        <li>Basic customer support: Email support with a 12-hour response time</li>
        <li>Cancel anytime.</li>
      </ul>
    </div>
    <div className="pt-4">
      <Link
        style={{display: "flex", justifyContent: "center"}}
        href="https://form.typeform.com/to/RXZdaaEP"
        className="btn btn-primary-dark-border  mt-2">
        Sign up for early access
      </Link>
    </div>
  </div>
}

const Yearly = () => {

  return <div className="price-option styling-yearly">
    <div className='mb-4'>
      <div className='price-heading'>Yearly</div>
      <h2 className="display-4">$1325 <span style={{fontSize: "1rem"}}>/yr (-30%) </span> </h2>
      <div>
        Ideal for therapists committed to ZenSpaceApp for the long term.
      </div>
    </div>
    <div style={{ display: "flex",  flexDirection: "column", flex: "1 1 0"}}>
      <h6 className="mt-4">What&apos;s included</h6>
      <ul className="list-unstyled mb-0 pl-0">
        <li>Unlimited HIPAA-compliant HD-video calling</li>
        <li>Unlimited HIPAA-compliant messaging</li>
        <li>Therapy notes (ChatGPT-powered and Standard)</li>
        <li>Document uploads and patient intake forms</li>
        <li>Payment processing fee included</li> 
        <li>Premium customer support: Email, live chat, and phone support with a 6-hour response time</li>
      </ul>
    </div>
    <div className="pt-4">
      <Link
        style={{display: "flex", justifyContent: "center"}}
        href="https://form.typeform.com/to/RXZdaaEP"
        className="btn btn-primary-dark-border mt-2">
        Sign up for early access
      </Link>
    </div>
  </div>
}

const Monthly = () => {

  return <div className="price-option border-gray">
  <div className='mb-4'>
    <div className='price-heading'>Monthly</div>
    <h2 className="display-4">$158 <span style={{fontSize: "1rem"}}>/mo</span> </h2>
    <div>
      Ideal for therapists who prefer predictable monthly costs.
    </div>
  </div>
  <div>
    <h6 className="mt-4">What&apos;s included</h6>
    <ul className="list-unstyled mb-0 pl-0">
      <li>Unlimited HIPAA-compliant HD-video calling</li>
      <li>Unlimited HIPAA-compliant messaging</li>
      <li>Therapy notes (ChatGPT-powered and Standard)</li>
      <li>Document uploads and patient intake forms</li>
      <li>Payment processing fee included</li> 
      <li>Enhanced customer support: Email and live chat support with a 12-hour response time</li>
      <li>Cancel anytime.</li>
    </ul>
  </div>
  <div className="pt-4">
      <Link
        style={{display: "flex", justifyContent: "center"}}
        href="https://form.typeform.com/to/RXZdaaEP"
        className="btn btn-primary-dark-border  mt-2">
        Sign up for early access
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
      <div className="container">
        <div className="pricing-tiers">
          <PayAsYouGo />
          <Yearly />
          <Monthly />
        </div>
      </div>
    </section>
  )
}

export default function Pricing() {
  return (
    <Layout showCTA={false}>
      <h1 className="display-3 mt-5 text-center" style={{ paddingTop: "16rem" }}>
        Pricing and Plans.
      </h1>
      <div className="subhead mt-3 text-center" >Choose the perfect plan for your practice.</div>
      <TherapistPlans />
      <PricingFAQ />
    </Layout>   
  )
}

