import Link from "next/link";
import ZenSpaceAppLogo from '../public/images/logo/zenspaceapp.svg';
import Image
  from "next/image";
import WaveformIcon from "../public/images/icons/audio-tap.svg";
import ZenspaceLogo from "./ZenspaceLogo";
import AppStore from '../public/images/app-store.svg';
import GooglePlay from '../public/images/play-store.svg';

export default function Footer() {

  const DownloadApps = () => {
    return (
      <div className=" mt-2 mb-4">
        <div className="d-flex gap-3 gap-sm-4" style={{ gap: "12px" }} >
          <a href="https://apps.apple.com/app/zenspaceapp/id6444890867" target="_blank" rel="noopener noreferrer">
            <Image
              alt="Download on the App Store"
              src={AppStore}
              width={150}
              height={50}
            />
          </a>
          <a href="https://play.google.com/store/apps/details?id=com.zenspaceapp" target="_blank" rel="noopener noreferrer">
            <Image
              alt="Get it on Google Play"
              src={GooglePlay}
              width={150}
              height={50}
            />
          </a>
        </div>
      </div>
    )
  }
  
  return (
    <div className="footer">
      <div className="container">
        <div className="row" >
          <div className="col-lg-4 col-md-6 col-12 mt-4 mt-sm-0 pt-2 pt-sm-0 ">
            <span style={{fontSize: "1.25rem"}}>
              <ZenspaceLogo />
            </span>
          </div>
            
          <div className="col-lg-2 col-md-6 col-12 mt-4 mt-sm-0 pt-2 pt-sm-0 ">
            <h5 className="text-dark  mb-3">Solutions</h5>
            <ul className="list-unstyled footer-list mt-2">
              <li><a href="/#for-clients" className="text-muted">Clients</a></li>
              <li><a href="/therapists" className="text-muted">Therapists</a></li>
              <li><a href="/zennotes" className="text-muted">ZenNotes</a></li>
              {/* <li><a href="/" className="text-muted">ZenPath</a></li> */}
              {/* <li><a href="/" className="text-muted">ZenList</a></li> */}
            </ul>
          </div>    
          <div className="col-lg-2 col-md-6 col-12 mt-4 mt-sm-0 pt-2 pt-sm-0">
          <h5 className="text-dark  mb-3">Company</h5>
            <ul className="list-unstyled footer-list mt-2">
              <li><a href="/" className="text-muted">About Us</a></li>
              <li><a href="/" className="text-muted">Careers</a></li>
              {/* <li><a href="/planet-health" className="text-muted">Planet Health</a></li> */}
            </ul>
          </div>
          <div className="col-lg-2 col-md-6 col-12 mt-4 mt-sm-0 pt-2 pt-sm-0">
            <h5 className="text-dark  mb-3">Resources</h5>
            <ul className="list-unstyled footer-list mt-2">
              <li><a href="/pricing" className="text-muted">Pricing</a></li>
              <li><a href="/security" className="text-muted">Security</a></li>
              <li><a href="/hipaa-compliance" className="text-muted">HIPAA</a></li>
              {/* <li><a href="/cookie-prefs" className="text-muted">Cookie Preferences</a></li>  */}
            </ul>
          </div>
          <div className="col-lg-2 col-md-6 col-12 mt-4 mt-sm-0 pt-2 pt-sm-0">
            <h5 className="text-dark mb-3">Support</h5>
              <ul className="list-unstyled footer-list mt-2">
                <li><a href="/help" className="text-muted">Help</a></li>
              <li><a href="/contact-us" className="text-muted">Contact Us</a></li>
              <li><a href="./faqs" className="text-muted">FAQ</a></li>
              </ul>
          </div>
        </div>
        {/* <DownloadApps /> */}
        <div className="subfooter">
          <div>©2026 ZenspaceApp Inc. All Rights Reserved.</div>
          <ul>
            <li>
              <a href="/privacy" className="text-muted">Cookies</a></li> 
            <li><a href="/privacy" className="text-muted">Privacy Policy</a></li>
            <li><a href="/service-terms" className="text-muted">Service Terms</a></li>    
          </ul>
        </div>
      </div>
    </div>
  )
}