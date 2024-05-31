import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';

import Image from 'next/image';
import Link from 'next/link';

import SecureArchIcon from '../../public/images/icons/secure-cloud-blue.svg';
import DataPrivacyIcon from '../../public/images/icons/data_privacy.svg';
import EndToEndIcon from '../../public/images/icons/end_to_end_encryption.svg';
import AppSecurityImg from '../../public/images/app-data-security.svg';

function renderSectionHero() {
  return (
    <section className="bg-half-170 bg-teal show fade">
      <div className="container">
        <div className="row align-items-center pt-5">
          <div className="col-lg-6 col-md-6 order-2 order-md-1">
            <div className="title-heading">
              <h1 className="display-4" style={{ lineHeight: 1.0 }}>
                Your Trustworthy Partner in <span className="text-danger">Safeguarding</span> Your Health Information.</h1>
              <p className="lead mt-5">We are a <Link href="/hipaa-compliance" style={{color:"#474747 !important", borderBottom: "2px solid"}}>HIPAA-compliant</Link> company.</p>
            </div>
          </div>
          <div className="col-lg-5 col-md-6 mt-4 pt-2 order-1 order-md-2 mt-sm-0 pt-sm-0 mb-5">
            <div className="classic-saas-image position-relative">  
              <Image
                className="img-fluid d-block"
                alt=""
                src={SecureArchIcon}
                height={0}
                width={0}
                style={{
                  width: '80%',
                  margin: "auto",
                  display: "flex"
                }}  />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function renderSectionFeatures() {
  return (
    <section className="bg-half-170" style={{borderBottom: '1px solid #00000010'}}>
      <div className="container pb-5 pt-5">
        <div className="row">
          <div className="col-md-4 col-12 p-3">
            <div className="feature-card text-left">
              <div className="d-inline-block">
              <Image
                  alt="Secure architectur"
                  src={EndToEndIcon}
                  height={32}
                  width={32}
                />
              </div>

              <div className="content mt-4">
                <h4 className="title"><b>Industry-standards</b></h4>
                <p className=" mb-0">All sensitive information is encrypted while in transit [TLS] or at
                rest using 256-bit encryption.</p>
              </div>
            </div>
          </div>

          <div className="col-md-4 col-12 mt-5 mt-sm-0 p-3">
            <div className="feature-card text-left">
              <div className="d-inline-block">
                <Image
                  alt="Secure architectur"
                  src={SecureArchIcon}
                  height={32}
                  width={32}
                />
              </div>

              <div className="content mt-4">
                <h4 className="title"><b>Secure architecture</b></h4>
                <p className=" mb-0">Protected health information (ePHI), and all communications 
                are stored on HIPAA-compliant cloud and servers.</p>
              </div>
            </div>
          </div>

          <div className="col-md-4 col-12 mt-5 mt-sm-0 p-3">
            <div className="feature-card text-left">
              <div className="d-inline-block">
              <Image
                  alt="Secure architecture"
                  src={DataPrivacyIcon}
                  height={32}
                  width={32}
                />
              </div>

              <div className="content mt-4">
                <h4 className="title"><b>For your eyes only</b></h4>
                <p className=" mb-0">Employees or personnel at ZenSpaceApp cannot access or read any identifiable personal health information.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function renderSectionAppSecurity() {
  return (
    <section id="app-security" className="section bg-half-170" style={{borderBottom: '1px solid #00000010'}}>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 col-md-6 mt-4 pt-2 mt-lg-0 pt-lg-0">
            <div className="section-title ml-lg-4">
              <h2 className="display-5 mb-4">App and Data Security</h2>
              <ul className="list-unstyled">
                <li style={{ display: 'flex' }} className="mb-0"><h5 className="mr-2"><i className="uil uil-padlock align-middle text-primary"></i></h5>
                  <p>All patient data and communications is encrypted using 256-bit encryption. Hence no one at ZenSpaceApp can read or tamper with your data.</p>
                </li>
                <li style={{ display: 'flex' }} className="mb-0"><h5 className="mr-2"><i className="uil uil-padlock align-middle text-primary"></i></h5>
                  <p>We never analyze, sell or share ePHI with a third-party. It is also not feasible since any identifiable data is encrypted.</p></li>
                <li style={{ display: 'flex' }} className="mb-0"><h5 className="mr-2"><i className="uil uil-analytics align-middle text-primary"></i></h5>
                  <p>Any information used for research purposes is first sufficiently stripped of details that can trace back to its owner.</p></li>
                
                <li style={{ display: 'flex' }} className="mb-0"><h5 className="mr-2"><i className="uil uil-user-check align-middle text-primary"></i></h5>
                  <p>We get your permission prior to sending any kind of marketing communications.</p></li>
                
                <li style={{ display: 'flex' }} className="mb-0"><h5 className="mr-2"><i className="uil uil-shield-plus align-middle text-primary"></i></h5>
                  <p>We fully adhere to and compliant with <mark>HIPAA Security and Privacy rules</mark> specifications as per
                   <Link className="underline" href='https://www.law.cornell.edu/cfr/text/45/164.306'> HIPAA by-laws.</Link></p>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-5  col-md-6  col-md-5 order-1 order-md-2">
            <div className="app-fature-shape-right position-relative">
              <div className="text-center text-md-right">
              <Image
                className="img-fluid d-block"
                alt="App security"
                src={AppSecurityImg}
                height={0}
                width={0}
                style={{
                  width: '60%',
                  margin: "auto",
                  display: "flex"
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

function renderPlatformSecurity() {
  return (
    <section className="section bg-half-170" style={{borderBottom: '1px solid #00000010'}}>
      <div className="container platform-security ">
        {/* <div>
          <h2><i className="uil uil-lock-alt d-block rounded h2 text-primary mb-0"></i></h2>
        </div> */}
        <div className="row align-items-center mt-4">
          <div className="col-12 order-2 order-lg-1 mt-4 pt-2 mt-lg-0 pt-lg-0">
            <div className="section-title mr-lg-4">
              <h2 className="display-5 mb-4">Platform Security</h2>

              <div className="row">
                <div className="col-lg-6  col-12 p-3"  style={{borderBottom: '1px solid #00000010', borderRight: '1px solid #00000010'}}>
                  <div className="d-flex feature-card align-items-center pt-4" style={{ boxShadow: 'none !important', border: 'none !important' }}>
                    <h2><i className="uil uil-shield-check d-block rounded h2 text-primary mb-0"></i></h2>
                    <div className="ml-3">
                      <h5>Full HIPAA compliance</h5>
                      <p className="mb-0">ePHI and communications is stored on HIPAA-compliant cloud and servers.</p>
                    </div>
                  </div>
                </div>

                <div className="col-lg-6 col-12 p-3" style={{borderBottom: '1px solid #00000010'}}>
                  <div className="d-flex feature-card align-items-center pt-4" style={{ boxShadow: 'none !important', border: 'none !important' }}>
                    <h2><i className="uil uil-cloud-shield d-block rounded h2 text-primary mb-0"></i></h2>
                    <div className="ml-3">
                      <h5>Database security</h5>
                      <p className="mb-0">Any stored ePHI or communications is first encrypted using multiple layers of
                      encryption.</p>
                    </div>
                  </div>
                </div>
              
              
                <div className="col-lg-6  col-12 p-3" style={{borderRight: '1px solid #00000010'}}>
                  <div className="d-flex feature-card align-items-center pt-4" style={{ boxShadow: 'none !important', border: 'none !important' }}>
                    <h2><i className="uil uil-database-alt d-block rounded h2 text-primary mb-0"></i></h2>
                    <div className="ml-3">
                      <h5>De-centralized storage</h5>
                      <p className="mb-0">NO <mark>single-source-of-truth</mark>. Any ePHI, appointments and communications are stored on different
                       databases. </p>
                    </div>
                  </div>
                </div>

                <div className="col-lg-6 col-12 p-3">
                  <div className="d-flex feature-card align-items-center pt-4" style={{ boxShadow: 'none !important', border: 'none !important' }}>
                    <h2><i className="uil uil-server-network-alt d-block rounded h2 text-primary mb-0"></i></h2>
                    <div className="ml-3">
                      <h5>Secure communications</h5>
                      <p className="mb-0">[256-bit] end-to-end encryption for video calling.</p>
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

function renderHipaaCompliance() {
  
    return (
      <section className="section overflow-hidden bg-half-170">
        <div className="container platform-security ">
          {/* <div>
            <h2><i className="uil uil-lock-alt d-block rounded h2 text-primary mb-0"></i></h2>
          </div> */}
          <div className="row align-items-center mt-4">
            <div className="col-12 order-2 order-lg-1 mt-4 pt-2 mt-lg-0 pt-lg-0">
              <div className="section-title mr-lg-4">
                <h2 className="display-5 mb-4">HIPAA Compliance</h2>
                <p className='lead'>
                  We have implemented <mark>HIPAA Privacy and Security rules</mark> to ensure ePHI is protected and secured at all times.
                </p>
                <div className="row mb-4">
                  <div className="col-lg-6  col-12 p-3"  style={{borderBottom: '1px solid #00000010', borderRight: '1px solid #00000010'}}>
                    <div className="d-flex feature-card align-items-center pt-4" style={{ boxShadow: 'none !important', border: 'none !important' }}>
                      <h2><i className="uil uil-cloud-data-connection d-block rounded h2 text-primary mb-0"></i></h2>
                      <div className="ml-3">
                        <h5>Transport Encryption</h5>
                        <p className="mb-0">Data is encrypted before it is transmitted using 256-bit encryption.</p>
                      </div>
                    </div>
                  </div>
  
                  <div className="col-lg-6 col-12 p-3"  style={{borderBottom: '1px solid #00000010'}}>
                    <div className="d-flex feature-card align-items-center pt-4" style={{ boxShadow: 'none !important', border: 'none !important' }}>
                      <h2><i className="uil uil-cloud-lock text-primary mb-0"></i></h2>
                      <div className="ml-3">
                        <h5>Backup</h5>
                        <p className="mb-0">Data is backed up daily and retrieveable.</p>
                      </div>
                    </div>
                  </div>
               
                  <div className="col-lg-6  col-12 p-3"  style={{borderBottom: '1px solid #00000010', borderRight: '1px solid #00000010'}}>
                    <div className="d-flex feature-card align-items-center pt-4" style={{ boxShadow: 'none !important', border: 'none !important' }}>
                      <h2><i className="uil uil-padlock text-primary mb-0"></i></h2>
                      <div className="ml-3">
                        <h5>Authorization</h5>
                        <p className="mb-0">Data can only ever be accessed by authorized personnel. </p>
                      </div>
                    </div>
                  </div>
  
                  <div className="col-lg-6 col-12 p-3"  style={{borderBottom: '1px solid #00000010'}}>
                    <div className="d-flex feature-card align-items-center pt-4" style={{ boxShadow: 'none !important', border: 'none !important' }}>
                      <h2><i className="uil uil-cloud-data-connection d-block rounded h2 text-primary mb-0"></i></h2>
                      <div className="ml-3">
                        <h5>Integrity</h5>
                        <p className="mb-0">Data is transmitted using TLS and 256-bit End-to-End Encryption and cannot me tampered with in-flight.</p>
                      </div>
                    </div>
                  </div>
               
                  <div className="col-lg-6  col-12 p-3" style={{borderRight: '1px solid #00000010'}}>
                    <div className="d-flex feature-card align-items-center pt-4" style={{ boxShadow: 'none !important', border: 'none !important' }}>
                      <h2><i className="uil uil-database text-primary mb-0"></i></h2>
                      <div className="ml-3">
                        <h5>Storage Encryption</h5>
                        <p className="mb-0">Data (ePHI and communications) is first encrypted and then stored.</p>
                      </div>
                    </div>
                  </div>
  
                  <div className="col-lg-6 col-12 p-3">
                    <div className="d-flex feature-card align-items-center pt-4" style={{ boxShadow: 'none !important', border: 'none !important' }}>
                    <h2><i className="uil uil-cloud-download d-block rounded h2 text-primary mb-0"></i></h2>
                      <div className="ml-3">
                        <h5>Sharing</h5>
                        <p className="mb-0">Data is stored on HIPAA-compliant cloud/servers. We have signed
                        Business Associate Agreement (BAA) with our partners who also guarantee HIPAA compliance.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="mt-5 text-center">
              <Link href="/hipaa-compliance">
                <button className="btn btn-outline-secondary mt-2 mr-2">Learn More</button>
              </Link>
				    </div>
          </div>
        </div>
      </section>
  )
}


export default function Security() {
  return (
    <>
       <header id="navbar" className="defaultscroll sticky">
        <Navbar home= "" />
      </header>
      {renderSectionHero()}
      {renderSectionFeatures()}
      {renderSectionAppSecurity()}
      {renderPlatformSecurity()}
      {renderHipaaCompliance()}
      <footer>
        <Footer/>
      </footer>
    </>
  )
}