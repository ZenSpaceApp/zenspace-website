
import Layout from '../components/Layout';
import Image from 'next/image';
import { Metadata } from 'next';
import FAQ from '@/components/FAQ';
import ZenNotesImg from '../public/images/zen-notes@2x.png';
import StatsImg from '../public/images/stats.jpg';
import Link from 'next/link';

//import icons 
import ZenNotesIcon from '../public/images/icons/therapy-notes.svg';
import VideoIcon from '../public/images/icons/video-calling.svg';
import ChatIcon from '../public/images/icons/chat-bubble.svg';
import CreditCardIcon from '../public/images/icons/credit-card.svg';
import CalendarIcon from '../public/images/icons/calendar.svg';
import SecurityIcon from '../public/images/icons/security.svg';

  
export const metadata: Metadata = {
  title: "ZenSpaceApp",
  description: "Empowering mental wellness with a touch of Zen.",
};

const Discover = () => {
  return (
    <section className="section bg-half-170" id="platform">
      <div className="container mt-4" >
        <div className="row mt-5" style={{ borderRadius: '12px', background: 'rgba(0, 128, 255, 0.1)', boxShadow: '0 6px 8px 0 rgba(0, 0, 0, 0.015), 0 6px 8px 0 rgba(0, 0, 0, 0.015) !important'}}>
        </div>
        {/* {renderSectionSyncCalendars()} */}
      </div>
    </section>
  )
}

function renderSectionSyncCalendars() {
  return (
    <div className="g-half-170" style={{paddingTop: '170px'}}>
      <h2>Pro</h2>
      <p className="lead subheading mb-5">Stay connected with existing patients on web, mobile or tablet.</p>
      {/* <img src="/images/syncd-calendars.jpg" style={{maxWidth: '100%', border: '1px solid #00000010', boxShadow: '0 0px 0px 0 rgba(0, 0, 0, 0.2), 0 18px 48px 0 rgba(0, 0, 1, 0.1)'}} /> */}
      <div className="text-center mt-5">
        <a className="btn btn-primary-dark-border  mt-2" href="/pricing">Start free trial</a>
      </div>
    </div>
  )
}

/**
 * 
 */
function Benefits() {
  return (
    <section className="section bg-half-260">
      <div className="container">
        <div className="mb-4 mt-4" style={{maxWidth: "760px"}}>
          <h2 className="display-4">Unlock the potential of your practice with our all-in-one solution.</h2>
          <div className="lead subheading mb-4 ">
            Save time, reduce no-shows, and streamline your workflow with ZenSpaceApp.
          </div>
        </div>

    <div className="row justify-content-center align-items-center" style={{padding: "0 16px"}}>
      {/* <div className="col-lg-10 col-md-12"> */}
        {/* <h5 className="sub-heading">Benefits</h5> */}
        <div className="row mt-4 pt-2">
          <div className="col-md-4 col-12" style={{borderRight: '1px solid #00000010', borderBottom: '1px solid #00000010'}}>
            <div className="media pt-4 pb-4" >
              <div className="text-center icon text-primary mr-3 mt-2 mb-4">
                <Image 
                  alt='ChatGPT-powered Therapy Notes'
                  src={ZenNotesIcon}
                  height={28}
                  width={0}
                  />
              </div>
              <div className="media-body">
                <h5>ChatGPT-powered Therapy Notes</h5>
                <p className="lead mb-0">Experience the power of AI in your practice, making documentation a breeze so you can focus on your clients&apos; needs. </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-12" style={{borderRight: '1px solid #00000010', borderBottom: '1px solid #00000010'}}>
              <div className="media  pt-4 pb-4">
              <div className="text-center icon text-primary mr-3 mt-2 mb-4">
                <Image 
                  alt='ChatGPT-powered Therapy Notes'
                  src={VideoIcon}
                  height={28}
                  width={0}
                  />
              </div>
                  <div className="media-body">
                    <h5 className="title">Convenience</h5>
                <p className="lead mb-0">
                Offer remote sessions and streamline scheduling to make therapy more accessible for patients and more efficient for providers.</p>
                  </div>
              </div>
          </div>
   
          <div className="col-md-4 col-12" style={{borderBottom: '1px solid #00000010'}}>
              <div className="media pt-4 pb-4">
              <div className="text-center icon text-primary mr-3 mt-2 mb-4">
                <Image 
                  alt='ChatGPT-powered Therapy Notes'
                  src={ChatIcon}
                  height={32}
                  width={0}
                  />
              </div>
                  <div className="media-body">
                    <h5 className="title">Communication</h5>
                    <p className="lead mb-0">Secure messaging and document sharing help keep everyone on the same page and facilitate better collaboration between therapists and patients.</p>
                  </div>
              </div>
          </div>
          
          <div className="col-md-4 col-12" style={{borderRight: '1px solid #00000010'}}>
              <div className="media pt-4 pb-4">
              <div className="text-center icon text-primary mr-3 mt-2 mb-4">
                <Image 
                  alt='ChatGPT-powered Therapy Notes'
                  src={CreditCardIcon}
                  height={30}
                  width={0}
                  />
              </div>
                  <div className="media-body">
                    <h5 className="title">Financial Management</h5>
                    <p className="lead mb-0">Payments to help therapists get paid faster and with less hassle, so they can focus on what they do best.</p>
                  </div>
              </div>
          </div>
          
          <div className="col-md-4 col-12" style={{borderRight: '1px solid #00000010'}}>
              <div className="media  pt-4 pb-4">
              <div className="text-center icon text-primary mr-3 mt-2 mb-4">
                <Image 
                  alt='ChatGPT-powered Therapy Notes'
                  src={CalendarIcon}
                  height={30}
                  width={0}
                  />
              </div>
                  <div className="media-body">
                    <h5 className="title">Streamlined Scheduling</h5>
                    <p className="lead mb-0">Video consult on a myriad of devices and platforms.</p>
                  </div>
              </div>
          </div>

          <div className="col-md-4 col-12">
              <div className="media pt-4 pb-4">
              <div className="text-center icon text-primary mr-3 mt-2 mb-4">
                <Image 
                  alt='ChatGPT-powered Therapy Notes'
                  src={SecurityIcon}
                  height={30}
                  width={0}
                  />
              </div>
                  <div className="media-body">
                    <h5 className="title">Built-in Security for Peace of Mind</h5>
                    <p className="lead mb-0">All sensitive information is encrypted while in transit [TLS] or at rest using 256-bit encryption. </p>
                  </div>
              </div>
          </div>
        </div>
      </div>
      </div>
      </section>
  )
}


const Stats = () => {
  return (
    <section  className="section bg-half-260" style={{borderBottom: "1px solid #00000010"}}>
      <div className="container">
        <h5 className="sub-heading mb-4">By the numbers</h5>
        <div className="row align-items-center pt-4 ">
          <div className="col-12 col-md-5 offset-md-1 order-2 order-lg-2 card" style={{ background: "none", padding: 0, border: "2px solid #474747 !important", margin: '0'}}>
            <div className="section-title mr-lg-4">
              <div className="row">
                <div className=" col-12">
                  <div className="d-flex featurecard align-items-center pt-4">
                    <div className="ml-3">
                      <h5>Costs</h5>
                      <p className="lead t-2">
                        <span className="">Virtual visits saved patients</span> a median of <b>88 minutes</b> and <b>33 miles</b> compared to usual care, this according to a random trial
                        done on Parkinson&apos;s patients.</p>
                    </div>
                  </div>
                </div>

                <div className="col-12 mt-5">
                  <div className="d-flex feature-card align-items-center pt-4">
                    <div className="ml-3">
                      <h5>No-show</h5>
                      <p className="lead mt-2">
                        Of the ~23k scheduled visits <span className="underline">20% of patients</span> missed their appointments.
                        <em> Increasing the burden of care and healthcare costs.</em> Medicaid missed appts (28%). Medicare missed appts (15.3%).
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-5 offset-md-1 order-lg-2" >
            <Image 
              alt='telehealth benefits by number'
              src={StatsImg}
              style={{
                borderRadius: '20px',
                maxWidth: "100%",
                height: "auto",
                display: "flex",
                margin: "auto",
                marginBottom: "20px"

              }}
            />
            {/* <img src="/images/stats.jpg" style={{borderRadius: '12px'}} className="img-fluid bordered-img" alt="" /> */}
          </div>
        </div>
      </div>
    </section>
  )
}

// const Benefits = () => {
//   return (
//     <section className="section bg-half-260">
//       <div className="container">
//         <div className="textcenter mb-4 mt-4" style={{maxWidth: "760px"}}>
//           <h2 className="display-4">Unlock the potential of your practice with our all-in-one solution.</h2>
//           <div className="lead subheading mb-4 ">
//             Save time, reduce no-shows, and streamline your workflow with ZenSpaceApp.
//           </div>
//         </div>
        
//         {renderBenefits()}
        
//         <div className=" text-center mt-5">
//           <a href="/insta-patients" className="btn btn-outline-primary mt-2 mr-2">Learn More</a>
//           <a href="/insta-patients" className="btn btn-primary mt-2 mr-2">Download App</a>
//         </div>
//       </div>
//     </section>
//   )
// }



/**
 * Page cover
 */
const Hero = () => {
  return (
    <section className="bg-half-170 d-table w-100 overflow-hidden" id="hero-cover-main" style={{ borderBottom: '1px solid #00000010' }}>
      <div className="container">
        <div className="row mt-5 align-items-center">
          <div className="col-md-6 col-12">
            <div className="title-heading">
              <h1 className="my-3 display-2" style={{lineHeight: '0.9'}}>
                Transform your therapy practice with ZenSpace.
              </h1>
              <div className="lead subheading mt-5">
                Discover a simpler, more integrated way to manage your practice with telehealth,
                ChatGPT-powered therapy notes, streamlined scheduling, and seamless
                patient communication. Explore what&apos;s possible with ZenSpaceApp.
              </div>
              <div className="mt-4 pt-2">
                <Link
                  className="btn btn-primary-dark-border  mt-2"
                  href="/pricing">
                  Start 30-day free trial
                </Link>
                <Link
                  className="btn btn-outline-dark  mt-2"
                  href="/">
                  Schedule a demo
                </Link>
              </div>
            </div>
          </div>

          <div className="col-md-6 mt-4 pt-2 mt-sm-0 pt-sm-0 col-12" >
            <div className="classic-saas-image saas-feature-shape-right position-relative">
              <Image
                src={ZenNotesImg}
                alt='ZenNotes'
                height={590}
                width={0}
                style={{
                  display: "flex",
                  maxWidth: "100%",
                  height: "auto",
                  margin: "auto",
                }}
              />
            </div>
          </div>
        </div>
        

      </div>
    </section>
  )
}

const Faqs = () => {
  return <>
    <div className="container">
      
    </div>
  </>
}

export default function HomePage() {
  return (
    <Layout>
      <Hero />
      <Stats/>
      <Benefits />
      <Discover />
      <FAQ />
    </Layout>   
  )
}