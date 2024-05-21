
import Layout from '../components/Layout';
import Image from 'next/image';
import { Metadata } from 'next';
import FAQ from '@/components/FAQ';

import Link from 'next/link';

import ZenNotesImg from '../public/images/zen-notes@2x.png';
import StatsImg from '../public/images/stats.jpg';
import TherapistDashImg from '../public/images/home/web-app.gif';
import CrossDevSyncImg from '../public/images/home/cross-device-sync@2x.png';
import PersonalizedTherapyImg from '../public/images/home/personsalized-therapy@2x.png';
import CollabMoodTrackingImg from '../public/images/home/mood-tracking-cropped@2x.png';


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


const CrossDeviceSync = () => {
  return (
    <div className="container bg-half-170 overflow-hidden">
      <div className="row align-items-center">
        <div className="offset-lg-1 col-lg-5 col-md-7 order-2 order-md-1 mt-5 mt-sm-0">
          <div className="org-benefits">
            <h2 className="display-6">Cross-device Syncing.</h2>
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
          <div className="app-feature-shape-left position-relative">
            <div className="text-center text-md-right">
            <Image
                className="img-fluid"
                alt="Cross device sync"
                src={CrossDevSyncImg}
                height={0}
                width={0}
                style={{
                  maxWidth: "80%"
                }}
              />
            </div>
          </div>
      </div>
    </div>
  </div>

  )
}

const SimpleWorkflow = () => {
  return (
    <section id="med-group--dashboard" className="bg-half-170" style={{color: "#fafafa"}}>
      <div
        className="text-center"
        style={{ padding: "4rem 0rem", width:"90%", maxWidth: "1800px", margin:"auto", background: "#373836", borderRadius: "20px", color: "white !important"}}
      >
      <h2 className="display-6">Simple workflow. Built for scale.</h2>
        <div className="subheading mb-5 narrow" style={{maxWidth: "640px", margin: "auto"}}>Secure multi-cloud architecture, integrated full-service solution
        to keep therapists and clients connected.</div>
        
        <div className="row text-left pb-5">
          <div className=" col-lg-6 col-12 order-1 pt-4 order-lg-2" style={{display: 'flex', alignItems: 'center'}}>
            <div>
              <Image
                className="img-fluid "
                alt="Therapist workflow and dashboard"
                src={TherapistDashImg}
                height={0}
                width={0}
                style={{
                  maxWidth: "95%",
                  margin: "auto",
                  display: "block"
                }}
              />
            </div>
          </div>
          
          <div className="offset-lg-1 col-lg-4 col-12 order-1 mt-4 pt-2 mt-lg-0 pt-lg-0">
            <div className="section-title mr-lg-4">
              <div className="row pt-4">
                <div className="col-12">
                    <div className="d-flex align-items-center pt-4">
                      <h2><i className="uil uil-video align-middle text-primary"></i></h2>
                      <div className="ml-3">
                        <h6><b>Integrated video-calling</b></h6>
                        <p className=" mb-0">Built from scratch as a video-first tool. End-to-end encryption and HIPAA-compliance baked-in.</p>
                      </div>
                    </div>
                </div>
                <div className="col-12">
                  <div className="d-flex d-flex feature-card align-items-center pt-4">
                    <h2><i className="uil uil-user-plus align-middle text-primary"></i></h2>
                    <div className="ml-3">
                      <h6><b>BYOP (bring your own patients)</b></h6>
                      <p className="para mb-0">Extend virtual care to your existing patients.</p>
                    </div>
                  </div>
                </div>
                <div className="col-12">
                  <div className="d-flex align-items-center pt-4">
                    <h5><i className="uil uil-user-arrows align-middle h2 text-primary"></i></h5>
                    <div className="ml-3">
                      <h6><b>In-app messaging</b></h6>
                      <p className="para mb-0">Answer questions. Share tips and articles. Engage patients
                      in their care.</p>
                    </div>
                  </div>
                </div>
                <div className="col-12">
                  <div className="d-flex align-items-center pt-4">
                    <h2><i className="uil uil-shield-check align-middle text-primary"></i></h2>
                      <div className="ml-3">
                        <h6><b>Robust security</b></h6>
                        <p className="para mb-0">Encrypted health information and communications, stored on HIPAA-compliant cloud and servers.</p>
                      </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

const PersonalizedTherapyExperience = () => {
  return (
    <div className="container bg-half-170 overflow-hidden">
        <div className="row align-items-center">
          <div className="offset-lg-1 col-lg-6 col-md-5">
            <div className="app-feature-shape-right position-relative">
              <div className="text-center text-md-left">
              <Image
                className="img-fluid "
                alt="Personalized Therapy"
                src={PersonalizedTherapyImg}
                height={0}
                width={0}
                style={{
                  maxWidth: "80%"
                }}
              />
              </div>
            </div>
          </div>

          <div className="col-lg-5 col-md-7 mt-5 mt-sm-0">
            <div className="org-benefits">
              <h2 className="display-6">Personalized Therapy Experience</h2>
              <ul className="list-unstyled">
              <li>Dedicated client apps tailored to each individual&apos;s needs and preferences.</li>
              <li>ZenSpaceApp&apos;s dedicated mobile apps for patients allow for greater engagement and collaboration, improving outcomes and strengthening the therapy experience.</li>
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
            <div className="org-benefits">
              <h2 className="display-6">Collaborative Mood Tracking</h2>
              <ul className="list-unstyled">
                <li>
                  <span>
                    Empower patients to actively engage in their therapy by tracking and sharing their mood levels.
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
                    maxWidth: "80%"
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
/**
 * 
 */
function Benefits() {
  return (
    <section className="bg-half-260">
      <div className="container">
        <div className="mb-4 mt-4" style={{maxWidth: "760px"}}>
          <h2 className="display-4">Unlock the potential of your practice with our all-in-one solution.</h2>
          <div className="lead subheading mb-4 ">
            Save time, reduce no-shows, and streamline your workflow with ZenSpaceApp.
          </div>
        </div>

    <div className="row justify-content-center align-items-center" style={{padding: "0 16px"}}>
        <div className="row mt-4 pt-2">
          <div className="col-md-4 col-12" style={{borderRight: '1px solid #00000010', borderBottom: '1px solid #00000010'}}>
            <div className="media pt-4 pb-4" >
              <div className="text-center icon text-primary mr-3 mt-2 mb-4">
                <Image 
                  alt='ChatGPT-powered Therapy Notes'
                  src={ZenNotesIcon}
                  height={0}
                  width={0}
                  />
              </div>
              <div className="media-body">
                <h5>ChatGPT-powered Therapy Notes</h5>
                <p className="mb-0">Experience the power of AI in your practice, making documentation a breeze so you can focus on your clients&apos; needs. </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-12" style={{borderRight: '1px solid #00000010', borderBottom: '1px solid #00000010'}}>
              <div className="media  pt-4 pb-4">
              <div className="text-center icon text-primary mr-3 mt-2 mb-4">
                <Image 
                  alt='ChatGPT-powered Therapy Notes'
                  src={VideoIcon}
                  height={0}
                  width={0}
                  />
              </div>
                  <div className="media-body">
                    <h5 className="title">Convenience</h5>
                <p className=" mb-0">
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
                  height={0}
                  width={0}
                  />
              </div>
                  <div className="media-body">
                    <h5 className="title">Communication</h5>
                    <p className="mb-0">Secure messaging and document sharing help keep everyone on the same page and facilitate better collaboration between therapists and patients.</p>
                  </div>
              </div>
          </div>
          
          <div className="col-md-4 col-12" style={{borderRight: '1px solid #00000010'}}>
              <div className="media pt-4 pb-4">
              <div className="text-center icon text-primary mr-3 mt-2 mb-4">
                <Image 
                  alt='ChatGPT-powered Therapy Notes'
                  src={CreditCardIcon}
                  height={0}
                  width={0}
                  />
              </div>
                  <div className="media-body">
                    <h5 className="title">Financial Management</h5>
                    <p className="mb-0">Payments to help therapists get paid faster and with less hassle, so they can focus on what they do best.</p>
                  </div>
              </div>
          </div>
          
          <div className="col-md-4 col-12" style={{borderRight: '1px solid #00000010'}}>
              <div className="media  pt-4 pb-4">
              <div className="text-center icon text-primary mr-3 mt-2 mb-4">
                <Image 
                  alt='ChatGPT-powered Therapy Notes'
                  src={CalendarIcon}
                  height={0}
                  width={0}
                  />
              </div>
                  <div className="media-body">
                    <h5 className="title">Streamlined Scheduling</h5>
                    <p className="mb-0">Video consult on a myriad of devices and platforms.</p>
                  </div>
              </div>
          </div>

          <div className="col-md-4 col-12">
              <div className="media pt-4 pb-4">
              <div className="text-center icon text-primary mr-3 mt-2 mb-4">
                <Image 
                  alt='ChatGPT-powered Therapy Notes'
                  src={SecurityIcon}
                  height={0}
                  width={0}
                  />
              </div>
                  <div className="media-body">
                    <h5 className="title">Built-in Security for Peace of Mind</h5>
                    <p className="mb-0">All sensitive information is encrypted while in transit [TLS] or at rest using 256-bit encryption. </p>
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
    <section  className="section bg-half-170" style={{borderBottom: "1px solid #00000010", background: "#ffa533"}}>
      <div className="container">
        <h5 className="sub-heading ml-10 mb-4 offset-md-1">By the numbers</h5>
        <div className="row align-items-center pt-4 ">
          <div className="col-12 col-md-5 offset-md-1 order-2 order-lg-2 p-lg-5"  style={{ borderRadius: "20px", border: "2px solid"}}>
            <div className="section-title mr-lg-4">
              <div className="row">
                <div className="col-12">
                  <div className="d-flex feature-card align-items-center pt-4 ">
                    <div className="ml-3">
                      <h5>Costs</h5>
                      <p className="">
                        <span className="">Virtual visits saved patients</span> a median of <b>88 minutes</b> and <b>33 miles</b> compared to usual care, this according to a random trial
                        done on Parkinson&apos;s patients.</p>
                    </div>
                  </div>
                </div>

                <div className="col-12 mt-5 ">
                <div className="d-flex feature-card align-items-center pt-4 ">
                    <div className="ml-3">
                      <h5>No-show</h5>
                      <p className="">
                        Of the ~23k scheduled visits <span className="underline">20% of patients</span> missed their appointments.
                        <em> Increasing the burden of care and healthcare costs.</em> Medicaid missed appts (28%). Medicare missed appts (15.3%).
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 offset-md1 order-lg-2 " style={{ padding: 0}}>
            <Image 
              alt='telehealth benefits by number'
              src={StatsImg}
              style={{
                borderRadius: '20px',
                maxWidth: "510px",
                width: "100%",
                height: "auto",
                display: "block",
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

/**
 * Hero - above the fold
 */
const Hero = () => {
  return (
    <section className="bg-half-260 d-table w-100 overflow-hidden" id="hero-cover-main" style={{ borderBottom: '1px solid #00000010' }}>
      <div className="container">
        <div className="row mt-5 align-items-center">
          <div className="col-md-6 col-12 order-2 order-lg-1">
            <div className="title-heading">
              <h1 className="my-3 display-2 mt-6" style={{ lineHeight: '1.0 !important' }}>
                Transform your therapy practice with ZenSpace.
              </h1>
              <div className="lead subheading mt-3">
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
                  className="btn btn-outline-dark ml-md-4 mt-2"
                  href="/">
                  Schedule a demo
                </Link>
              </div>
            </div>
          </div>

          <div className="col-md-6 mt-4 pt-2 mt-sm-0 pt-sm-0 col-12 order-1 " >
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

export default function HomePage() {
  return (
    <Layout>
      <Hero />
      <Stats/>
      <Benefits />
      <CrossDeviceSync />
      <SimpleWorkflow />
      <PersonalizedTherapyExperience />
      <CollabMoodTracking />
      <FAQ />
    </Layout>   
  )
}