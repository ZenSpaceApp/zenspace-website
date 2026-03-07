import Link from "next/link";
import ZenSpaceAppLogo from '../public/images/logo/zenspaceapp.svg';
import Image
  from "next/image";
export default function Footer() {
  
  return (
    <>
      <div className="footer">
        <div className="container">
          <div className="row" style={{   padding: '100px 0' }}>
            <div className="col-lg-3 col-md-12 col-12 mb-0 mb-md-4 pb-0 pb-md-2">
              <div>
                <Link
                  href="/"
                  className="logo-footer"
                >
                  <Image
                    className="logo-only"
                    alt="ZenSpaceApp logo"
                    src={ZenSpaceAppLogo}
                    height={20}
                    width={0}
                  />  
                </Link>
                <div className="slogan">
                  Empowering mental wellness with a touch of Zen.
                </div>
                <div className="mt-4">
                  <Link
                    className="btn btn-outline-secondary"
                    style={{
                      padding: "12px 2rem !important",
                      lineHeight: "1.2 !important"
                    }}
                href="/contact/#book-demo">
                    
                    Book a Demo
                  </Link>
                </div>
              </div>
            </div>
            
            <div className="col-lg-2 col-md-6 col-12 mt-4 mt-sm-0 pt-2 pt-sm-0 offset-lg-1">
              <h5 className="text-dark  mb-4"><b>Solutions</b></h5>
              <ul className="list-unstyled footer-list mt-2">
                <li><a href="/" className="text-muted">Clients</a></li>
                <li><a href="/therapists" className="text-muted">Therapists</a></li>
                <li><a href="/zennotes" className="text-muted">ZenNotes</a></li>
                <li><a href="/" className="text-muted">ZenPath</a></li>
                <li><a href="/" className="text-muted">ZenList</a></li>
              </ul>
            </div>    
            <div className="col-lg-2 col-md-6 col-12 mt-4 mt-sm-0 pt-2 pt-sm-0">
            <h5 className="text-dark  mb-4"><b>Company</b></h5>
              <ul className="list-unstyled footer-list mt-2">
                <li><a href="/" className="text-muted">About Us</a></li>
                <li><a href="/" className="text-muted">Careers</a></li>
                <li><a href="/planet-health" className="text-muted">Planet Health</a></li>
              </ul>
            </div>
            <div className="col-lg-2 col-md-6 col-12 mt-4 mt-sm-0 pt-2 pt-sm-0">
              <h5 className="text-dark  mb-4"><b>Resources</b></h5>
              <ul className="list-unstyled footer-list mt-2">
                <li><a href="/pricing" className="text-muted">Pricing and Plans</a></li>
                <li><a href="/security" className="text-muted">Data Security and Privacy</a></li>
                <li><a href="/hipaa-compliance" className="text-muted">HIPAA Compliance</a></li>
                {/* <li><a href="/cookie-prefs" className="text-muted">Cookie Preferences</a></li>  */}
              </ul>
            </div>
            <div className="col-lg-2 col-md-6 col-12 mt-4 mt-sm-0 pt-2 pt-sm-0">
              <h5 className="text-dark mb-4"><b>Support</b></h5>
                <ul className="list-unstyled footer-list mt-2">
                  {/* <li><a href="/help" className="text-muted">Help</a></li> */}
                <li><a href="/contact-us" className="text-muted">Contact Us</a></li>
                <li><a href="./faqs" className="text-muted">FAQs</a></li>
                </ul>
            </div>
          </div>
          <div className="subfooter">
            <div>©2024 ZenSpaceApp Inc. All Rights Reserved.</div>
            <ul>
              <li>
                <a href="/privacy" className="text-muted">Cookies</a></li> 
              <li><a href="/privacy" className="text-muted">Privacy Policy</a></li>
              <li><a href="/service-terms" className="text-muted">Service Terms</a></li>    
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}