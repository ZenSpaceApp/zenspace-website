'use client';
import { useState } from "react";
const faqs = [
  [
    "What is ZenSpaceApp and how does it work?",
    ""
  ],
  [
    "How secure is my data on ZenSpaceApp?",
    ""
  ],
  [
    "How easy is it to get started with ZenSpaceApp?",
    ""
  ],
  [
    "Does ZenSpaceApp integrate with my existing therapy tools and workflows?",
    ""
  ],
  [
    "What types of therapists and practices can benefit from using ZenSpaceApp?",
    ""
  ],
  [
    "Can I try ZenSpaceApp before committing to a subscription?",
    ""
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
      </div>
    </section>
}