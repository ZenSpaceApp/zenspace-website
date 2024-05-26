'use client';
import Link from "next/link";
import { useState } from "react";
import { block } from "sharp";
const faqs = [
  [
    "What is ZenSpaceApp and how does it work?",
    "ZenSpaceApp is an innovative platform designed to help mental health professionals\
    streamline their practice management, enhance patient communication, and simplify\
    therapy documentation. By combining telehealth capabilities, AI-powered therapy notes,\
    scheduling features, and integrated patient communication tools into a single,\
    user-friendly solution, ZenSpaceApp enables therapists to focus on providing exceptional\
    care to their clients."
  ],
  [
    "How secure is my data on ZenSpaceApp?",
    "At ZenSpaceApp, we take data security and privacy seriously. Our platform is fully HIPAA-compliant,\
    ensuring that we meet the highest standards for safeguarding sensitive patient information.\
    We implement robust security measures, including end-to-end encryption for data in transit and at rest. This means that your data is encrypted when it's being transferred between your device and our servers, as well as when it's stored on our servers.\
    In addition to encryption, we regularly monitor our systems for potential threats and vulnerabilities to maintain a secure environment for your practice's data. You can trust that your information is protected and secure when using ZenSpaceApp."
  ],
  [
    "How easy is it to get started with ZenSpaceApp?",
    "ZenSpaceApp is designed to be user-friendly and easy to get started with. The sign-up process\
     is quick, taking just a few minutes, and the onboarding process will guide you through the\
      platform's features and help you customize your settings to best suit your practice's needs.\
       The platform's clean and organized design makes it simple to navigate and access all of its features, while our dedicated support team is always available to assist you. With these features, you can quickly and easily start using ZenSpaceApp to streamline your practice management, enhance patient communication, and simplify therapy documentation."
  ],
  [
    "Does ZenSpaceApp integrate with my existing therapy tools and workflows?",
    "Yes, ZenSpaceApp is designed to seamlessly integrate with your existing therapy tools and\
     workflows. We understand the importance of maintaining continuity in your practice, which\
    is why we offer calendar integration with popular services like Google and Apple. This allows\
    you to manage your appointments and client bookings within ZenSpaceApp while keeping your\
    existing calendars up-to-date.\
    Additionally, ZenSpaceApp integrates with common payment gateways such as PayPal and Stripe,\
    enabling you to manage client payments directly within the platform. By offering these integrations,\
    we aim to streamline your practice management and simplify your daily tasks, allowing you t\
     focus on providing exceptional care to your clients."
  ],
  [
    "What types of therapists and practices can benefit from using ZenSpaceApp?",
    "ZenSpaceApp is designed to benefit a wide range of therapists and practices within the\
     mental health field. Whether you're a solo practitioner or part of a larger therapy practice,\
      ZenSpaceApp can help streamline your practice management and enhance your overall workflow.\
    From psychologists, psychiatrists, and counselors to social workers, marriage and family\
     therapists, and more, any mental health professional seeking a comprehensive solution for\
      telehealth, therapy notes, scheduling, and patient communication can benefit from using ZenSpaceApp."
  ],
  [
    "Can I try ZenSpaceApp before committing to a subscription?",
    "Absolutely! We believe in letting potential users experience the full potential of ZenSpaceApp\
    before committing to a subscription. That's why we offer a 30-day free trial, allowing you to\
    test out all of the platform's features and ensure it's the right fit for your practice.\
    During the trial period, you'll have access to all of ZenSpaceApp's functionality, including\
    telehealth, AI-powered therapy notes, scheduling, and patient communication tools. This gives\
    you plenty of time to explore the platform and see how it can benefit your practice.\
    In some cases, such as for Lighthouse customers, we may be able to extend the trial period\
     beyond 30 days. If you're interested in a longer trial, feel free to reach out to our support\
      team to discuss your options."
  ],
  
]

export default function FAQ() {

  const [selIdx, setIndex] = useState<number | null>();

  // ref.current
  const expandAnswer = (idx : null | number) => {
    if (selIdx === idx) {      
      setIndex(null)
    } else {
      setIndex(idx)
    }  
  }

  return <section id="faqs">
      <div className='container'>
        <div className='Grid Grid--full small-Grid--1of2' >
          <div className='Grid-cell' >
            <h2 className="u-textcenter display-4">FAQs</h2>
            <div className='psa'>
            Some of the Most Asked Questions (but don&apos;t hesitate to <a className="anchor" href="mailto:rupesh@zenspaceapp.com" target="_blank">
            email 
          </a> us if you have a question)
            </div>
          </div>
          <div className='Grid-cell content'>    
          {faqs.map((faq, idx) => (
            <div
              className="expandable-single-faq"
              key={idx}
              onClick={() => expandAnswer(idx)}
            >
              <div className="expandable-top">
                <div className="heading-expandable">
                  {faq[0]}
                </div>
                <div className="expandable-icon">
                  {selIdx === idx ? "-" : "+"}
                </div>
              </div>
              <div className={selIdx === idx ? "expandable-bottom open" : "expandable-bottom"}>
                <div className="faq-paragraph">
                  {faq[1]}
                </div>
              </div>
            </div>
          ))}
          </div>
      </div>
      <div style={{ display: "flex", margin: "auto", justifyContent: 'center', paddingTop: "2rem", fontFamily: "Syne"}}>
        Read a detailed version of our 
        <span>
          <Link
            style={{marginLeft: "4px"}}
            href="https://zenspaceapp.notion.site/FAQs-ab76283d23394fe3be19624835214574">
            FAQs.
          </Link>
        </span>  
      </div>
    </div>
  </section>
}