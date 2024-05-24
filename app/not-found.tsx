import Image from "next/image";

import YinYangIcon from '../public/images/icons/yin-yang.svg';

export default function Show404() {
  return <div className="show fade"
    style={{
      display: "grid",
      background: "#222",
      placeItems: "center",
      height: "100%",
    }}>
    <div style={{maxWidth: "540px", width: "90vw", color: "wheat"}}>
    <Image 
      alt="yin-yang"
      src={YinYangIcon}
      height={0}
        width={0} 
        style={{
          marginBottom: "2rem"
        }}
        
        
    />
      <h2>We&apos;re sorry, this page isn&apos;t ready yet.</h2>
      <p>Our team is working behind the scenes to bring ZenSpaceApp
        to life. Sign up for early access to be notified when we launch!</p>
    </div>
  </div>
}