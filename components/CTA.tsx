import Image from "next/image";
import CTAIconsGroup from '../public/images/cta-icons@2x.png';
import { left } from "@popperjs/core";
import Link from "next/link";


export const CTA = () => {
  return <section id="cta">
    <div className="cta-container" style={{position: "relative"}}>
      <div style={{
        display: "flex",
        justifyContent: "center",
      }}
      >
      <Image 
        alt="cta icons"
        src={CTAIconsGroup}
        height={35}
          width={0}
          style={{
            marginTop: "-115px",
          }}
      />

      </div>
      <div className="content">
        <h3>
          Reclaim your time and streamline your practice.
          Try ZenspaceApp <span className="underline">free for 30 days</span> - no commitment, no risk.</h3>
        <div className="text-center">
          <Link
            href="https://docs.google.com/forms/d/e/1FAIpQLSfwzPnrq_3K4zCOhyUdhwroBsw-haYHsY6Xn4wgRUXCCB8Urw/viewform?usp=header"
            className="btn btn-outline-dark mt-2"
            target="_blank"
            rel="noopener noreferrer" 
          >
            Get Early Access
          </Link>
        </div>
      </div>
    </div>
  </section>;
};
