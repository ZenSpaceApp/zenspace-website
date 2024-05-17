
import Layout from '../components/Layout';
import Image from 'next/image';
import { Metadata } from 'next';
import FAQ from '@/components/FAQ';
import ZenNotesImg from '../public/images/zen-notes@2x.png';
import StatsImg from '../public/images/stats.jpg';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "ZenSpaceApp",
  description: "Empowering mental wellness with a touch of Zen.",
};

const Discover = () => {
  return (
    <section className="section bg-half-170" id="platform">
      <div className="container text-center mb- mt-4" >
        <h3 className="display-5">Discover</h3>
        <div className="row mt-5" style={{ borderRadius: '12px', background: 'rgba(0, 128, 255, 0.1)', boxShadow: '0 6px 8px 0 rgba(0, 0, 0, 0.015), 0 6px 8px 0 rgba(0, 0, 0, 0.015) !important'}}>
        </div>
        {renderSectionSyncCalendars()}
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
function renderBenefits() {
  return (
    <div className="row justify-content-center align-items-center">
      {/* <div className="col-lg-10 col-md-12"> */}
        {/* <h5 className="sub-heading">Benefits</h5> */}
        <div className="row mt-4 pt-2">
          <div className="col-md-4 col-12" style={{borderRight: '1px solid #00000010', borderBottom: '1px solid #00000010'}}>
              <div className="media pt-4 pb-4">
                <div className="icon text-center  text-primary mr-3 mt-2">
                  <i className="uil uil-video d-block rounded h3 mb-0"></i>
                  </div>
                  <div className="media-body">
                    <h5>Seamless video calling</h5>
                    <p className="lead mb-0">Receive care from the comfort of your home. </p>
                  </div>
              </div>
          </div>
          <div className="col-md-4 col-12" style={{borderRight: '1px solid #00000010', borderBottom: '1px solid #00000010'}}>
              <div className="media  pt-4 pb-4">
                <div className="icon text-center text-primary mr-3 mt-2">
                  <i className="uil uil-comment d-block rounded h3 mb-0"></i>
                  </div>
                  <div className="media-body">
                    <h5 className="title">Effortless communications</h5>
                    <p className="lead mb-0">Stay connected, ask questions, and share updates.</p>
                  </div>
              </div>
          </div>
   
          <div className="col-md-4 col-12" style={{borderBottom: '1px solid #00000010'}}>
              <div className="media pt-4 pb-4">
                <div className="icon text-center  text-primary mr-3 mt-2">
                  <i className="uil uil-image-upload d-block rounded h3 mb-0" ></i>
                  </div>
                  <div className="media-body">
                    <h5 className="title">Share anything</h5>
                    <p className="lead mb-0">Securely exchange documents, prescriptions and photos.</p>
                  </div>
              </div>
          </div>
          
          <div className="col-md-4 col-12" style={{borderRight: '1px solid #00000010'}}>
              <div className="media pt-4 pb-4">
                <div className="icon text-center text-primary mr-3 mt-2">
                  <i className="uil uil-prescription-bottle d-block rounded h3 mb-0"></i>
                  </div>
                  <div className="media-body">
                    <h5 className="title">Refill prescriptions</h5>
                    <p className="lead mb-0">Get prescriptions delivered to your preferred pharmacy.</p>
                  </div>
              </div>
          </div>
          
          <div className="col-md-4 col-12" style={{borderRight: '1px solid #00000010'}}>
              <div className="media  pt-4 pb-4">
                <div className="icon text-center  text-primary mr-3 mt-2">
                  <i className="uil uil-selfie d-block rounded h3 mb-0" style={{lineHeight: '1.6'}}></i>
                  </div>
                  <div className="media-body">
                    <h5 className="title">Device agnostic</h5>
                    <p className="lead mb-0">Video consult on a myriad of devices and platforms.</p>
                  </div>
              </div>
          </div>

          <div className="col-md-4 col-12">
              <div className="media pt-4 pb-4">
                <div className="icon text-center  text-primary mr-3 mt-2">
                  <i className="uil uil-cloud-lock d-block rounded h3 mb-0"> </i>
                  </div>
                  <div className="media-body">
                    <h5 className="title">For your eyes only</h5>
                    <p className="lead mb-0">We protect and safeguard your data as if it was our own. </p>
                  </div>
              </div>
          </div>
        </div>
      </div>
    // </div>
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

const Benefits = () => {
  return (
    <section className="section bg-half-260">
      <div className="container">
        <div className="textcenter mb-4 mt-4" style={{maxWidth: "640px"}}>
          <h2 className="display-4">Unlock the potential of your practice.</h2>
          <div className="lead subheading mb-4 ">
            Save time, reduce no-shows, and streamline your workflow with ZenSpaceApp.
          </div>
        </div>
        
        {/* {renderPatientAppScreenshots()} */}
        {renderBenefits()}
        
        {/* <div className=" text-center mt-5">
          <a href="/insta-patients" className="btn btn-outline-primary mt-2 mr-2">Learn More</a>
          <a href="/insta-patients" className="btn btn-primary mt-2 mr-2">Download App</a>
        </div> */}
      </div>
    </section>
  )
}



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