import Image from "next/image";
import Link from "next/link";

import ZenspaceLogo from '../public/images/logo/zenspace-logo@2x.png';
import YinYangIcon from '../public/images/icons/yin-yang.svg';

export default function Show404() {
  return <div className="show fade" style={{position: "relative", height: "100vh"}}>
    <div>
      <Link
        href="./"
        style={{fontWeight: "500", position: "absolute", marginTop: "20px", marginLeft: "25px", color: "white !important"}}
      >
        <Image
          alt="ZenSpaceApp logo"
          src={ZenspaceLogo}
          height={22}
          width={22}
          style={{
            marginRight: "10px"
          }}
        />
        ZenSpaceApp
      </Link>
    </div>
    <div
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
      <p style={{marginTop: "1rem", lineHeight: 1.6}}>Our team is working behind the scenes to bring ZenSpaceApp
        to life. <Link
        href="./pricing"
        style={{
          color: "wheat !important",
          fontWeight: "700",
          borderBottom: "2px solid"
          }}>Sign up</Link> for Early Access and a special offer!
      </p>
    </div>
    </div>
  </div>
}