import Image from "next/image";
import CTAIconsGroup from '../public/images/cta-icons@2x.png';
import { left } from "@popperjs/core";


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
        height={44}
          width={0}
          style={{
            marginTop: "-120px",
          }}
      />

      </div>
      <div className="content">
        <h3>
          Reclaim your time and streamline your practice.
          Try ZenSpaceApp <span className="underline">free for 30-days</span> - no commitment, no risk.</h3>
        <div className="text-center">
          <a className="btn btn-outline-dark mt-2" href="/pricing">
            Start free trial</a>
        </div>
      </div>
    </div>
  </section>;
};
