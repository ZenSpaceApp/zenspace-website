import Head from 'next/head';
import Layout from '@/components/Layout';
import Image from 'next/image';
import Link from 'next/link';
import CharityImg from '@/public/images/charities.png'
import VolunteeeImg from '@/public/images/volunteer-hero.png'

function renderSectionHero() {
  return (
    <section className="section bg-half-170" style={{background: "var(--bg--alt--1)" }}>
      
      <div className="container position-relative" >
      <h1 className='u-textcenter'>Towards a Healthy Planet.</h1>
        <div className="row mt-md-5 pt-md-3 mt-4 pt-2 mt-sm-0 pt-sm-0 justify-content-center">
          <div className="col-lg-5 col-md-6 mt-4 pt-2 mt-sm-0 pt-sm-0">
            <div className="classic-saas-image position-relative">
              <div className="bg-saas-shap position-relative">
                <Image 
                  alt="Image show pledge to charities"
                  src={CharityImg}
                  className='img-fluid'
                />
                {/* <img src="/images/charities.png" style={{ maxWidth: '100%' }} className="mx-auto d-block" alt="" /> */}
              </div>
            </div>
          </div>
          <div className="col-12 text-center">
            <div className="section-title">
              <p className="lead mx-auto mt-2" style={{ maxWidth: '60%' }}>
                <mark>We pledge</mark> to donate 1% of our total sales to bring health services and care
               to the underserved places around the world.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function renderSectionVolunteer() {
  return (

    <section className="bg-half-260 d-table w-100 overflow-hidden" id="home">
      <div className="container">
        <div className="row align-items-center" style={{ minHeight: '50vh' }}>
          <div className="col-lg-6 col-md-6">
            <div className="title-heading mt-4">
              <h2 className="display-4 my-3">Spare an Hour or Two!</h2>
              {/* <p className="lead">Calling all medical professionals</p> */}
              <div className="watch-video mt-4 pt-2">
                <a href="javascript:void(0)" className="btn btn-outline-dark m-1">Volunteer</a>
              </div>
            </div>
          </div>

          <div className="col-lg-6 col-md-6 mt-4 pt-2 mt-sm-0 pt-sm-0">
            <div className="classic-app-image position-relative">
              <div className="bg-saas-shape saas-feature-shape-right position-relative">
                <Image
                  alt="Image showing call for health professionals to volunteer."
                  src={VolunteeeImg}
                  className='img-fluid'
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default function PlanetHealth() {
  return (
    <Layout showCTA={false}>
      <Head>
        <title>Planet Health</title>
      </Head>
      {renderSectionHero()}
      {renderSectionVolunteer()}
    </Layout>
  )
}