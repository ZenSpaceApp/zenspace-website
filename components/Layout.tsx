import NavBar from "./Navbar";
import Footer from "./Footer";

import { ReactNode } from "react";
import { CTA } from "./CTA";

const Layout = ({showCTA = true, children } : { children: ReactNode, showCTA?: boolean} ) => {  
  
  return <>
    <div className="show fade">
      <header id="navbar" className="defaultscroll sticky">
        <NavBar home=""></NavBar>
      </header>
      {children}
      {showCTA && <CTA /> }
      <footer>
        <Footer />
      </footer>
    </div>
  </>
}

export default Layout;