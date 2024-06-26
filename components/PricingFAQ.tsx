'use client';
import { useState } from "react";
import Link from "next/link";

const faqs = [
  [
    "Is there a free trial available?",
    "Absolutely! We offer a 3-day no-commitment, no-fee trial for our yearly plan,\
    allowing you to experience the full range of ZenSpaceApp's features without any\
    financial commitment. We believe the yearly plan provides the best value and most\
    comprehensive experience for our users. However, if you'd like to explore our other\
    options, we can also discuss a trial for our pay-as-you-go and monthly plans.\
    Feel free to reach out to us to find the perfect fit for your needs"
  ],
  [
    "What is the difference between the pay-as-you-go, monthly, and yearly plans?",
    "The main differences between our plans are the pricing structure, the level of commitment, and the included features.\
    Pay-as-you-go: This plan offers the most flexibility, as you only pay for the clients and features you use each month. It's perfect for therapists with variable client loads or those just starting out.\
    Monthly: With a fixed monthly fee, this plan includes a set number of clients and all features. It's ideal for therapists with a consistent client base who prefer predictable monthly costs.\
    Yearly: By paying a one-time fee, you enjoy unlimited clients and all features for the entire year. This plan is best for therapists who are committed to using ZenSpaceApp long-term and value cost savings.\
    Choose the plan that suits your needs and budget, and remember that you can always switch plans if your requirements change."
  ],
  [
    "Can I switch between plans at any time?",
    "You can switch between the pay-as-you-go, monthly, and yearly plans at any time, with one exception: since the yearly plan is a prepaid, one-time payment, you cannot downgrade from it until the subscription period has ended. Once your yearly plan expires, you're free to switch to any of the other plans. This ensures that our plans remain flexible and tailored to your evolving needs as a therapist."
  ],
  [
    "How many users are included in each plan?",
    "Each of our plans—pay-as-you-go, monthly, and yearly—includes a single user license.\
    If you're interested in purchasing multiple licenses or discussing bulk pricing options,\
    please don't hesitate to contact our sales team directly. We're happy to work with you to\
    find a solution that meets your specific needs."
  ],
  [
    "Are there any additional fees for using payment processing services?",
    "To ensure a seamless and secure payment experience for you and your clients,\
     ZenSpaceApp utilizes a payment processing service that charges a small fee.\
    The fee for using our payment processing service is 4% of the transaction amount.\
    This fee is necessary to cover the costs associated with processing payments and\
    maintaining a secure platform for financial transactions. The fee applies to\
    all plans and is not included in the base subscription cost."
  ],
  [
    "Are there any long-term contracts or commitments?",
    "At ZenSpaceApp, we believe in providing flexible solutions that adapt to your needs.\
     That's why none of our plans—pay-as-you-go, monthly, or yearly—require any long-term\
    contracts or commitments. You're free to subscribe to the plan that best suits your\
    requirements and adjust your subscription as your needs evolve. We want you to feel\
    confident in choosing ZenSpaceApp, knowing that you have the freedom to make changes as necessary."
  ],
  [
    "Is there a discount for paying annually?",
    "Yes, we offer a discounted rate for therapists who choose to subscribe to our yearly plan.\
     By paying a one-time fee of $1740 for the entire year, you'll enjoy a savings of\
    30% compared to the monthly plan. This equates to $145 per month,\
    providing you with substantial savings while still offering all the features and\
    benefits of ZenSpaceApp. It's the perfect choice for therapists who are committed\
    to using our platform for the long term."
  ],
  [
    "Can I cancel my subscription at any time?",
    "Pay-as-you-go: Yes, cancel anytime.\
    Monthly: Yes, cancel anytime.\
    Yearly: Yes, you may cancel your subscription at any time, but\
    please note that we do not offer refunds for unused portions of\
    yearly subscriptions. However, you will still have access to the platform\
    until the end of your subscription period."
  ],
  [
    "Are there any additional features or integrations available for purchase?",
    "Currently, we do not offer any additional features or integrations for purchase.\
    However, we are actively working on adding new Add-ons in the future. At present,\
   ZenSpaceApp integrates with Google and Apple calendars, as well as popular payment gateways."
  ],
  [
    "Is there a limit to the number of clients I can have in the system?",
    "Yes, there is a limit on the number of clients depending on your subscription plan.\
     The Pay-as-you-go plan limits you to 50 clients, while the Monthly and Yearly plans\
    allow for an unlimited number of clients."
  ]
]

export default function PricingFAQ() {

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
            <h2 className="u-textcenter display-4" style={{marginBottom: "64px"}}>Pricing Questions?</h2>
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
        <div style={{ display: "flex", margin: "auto", justifyContent: 'center', paddingTop: "2rem"}}>
        Read a detailed version of our 
        <span>
          <Link
            style={{marginLeft: "4px", borderBottom: "2px solid"}}
            href="https://zenspaceapp.notion.site/Pricing-FAQs-e502ea568b43406888e25fabe94450c3?pvs=4">
            Pricing and Plans.
          </Link>
        </span>  
      </div>
      </div>
    </section>
}