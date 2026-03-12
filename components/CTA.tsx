import Image from "next/image";
import CTAIconsGroup from '../public/images/cta-icons@2x.png';
import { left } from "@popperjs/core";
import Link from "next/link";
import WaveformIcon from "./waveform/Waveform";


export const CTA = () => {
  return <section id="cta">
    <div className="cta-container" style={{position: "relative"}}>
      <div style={{
        display: "flex",
        justifyContent: "center",
      }}
      >
      {/* <Image 
        alt="cta icons"
        src={CTAIconsGroup}
        height={35}
          width={0}
          style={{
            marginTop: "-115px",
          }}
      /> */}
        <div style={{ marginTop: "-110px", background: "var(--bg--alt--1)", paddingLeft: "10px", paddingRight: "10px" }}>
          <WaveformIcon  />
        </div>
      {/* </div> */}
      <div className="gradient-overlay" style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        background: "linear-gradient(180deg, rgba(255, 255, 255, 0.6) 0%, rgba(255, 255, 255, 0.8) 100%)",
        zIndex: -1,
      }}></div>

      </div>
      <div className="content">
        <span style={{ fontSize: "1.75rem", fontWeight: "700", fontFamily: "Syne", marginBottom: "1rem" }}>
          Ready to Transform Your Practice?
        </span>
        <p style={{fontSize: "1.25rem", fontWeight: "500", marginBottom: "1.5rem"}}>
          
          Try ZenspaceApp <span className="underline">free for 30 days</span> - no commitment, no risk.
        </p>
        <div className="text-center">
          <Link
            href="https://docs.google.com/forms/d/e/1FAIpQLSfwzPnrq_3K4zCOhyUdhwroBsw-haYHsY6Xn4wgRUXCCB8Urw/viewform?usp=header"
            className="btn btn-primary-dark-border mt-2"
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
