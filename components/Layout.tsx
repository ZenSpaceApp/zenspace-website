import NavBar from "./Navbar";
import Footer from "./Footer";

import { ReactNode } from "react";
import { CTA } from "./CTA";

const Layout = ({children } : { children: ReactNode} ) => {  
  
  return <>
    <div className="show fade">
      <header id="navbar" className="defaultscroll sticky">
        <NavBar home=""></NavBar>
      </header>
      {children}
      <CTA />
      <footer>
        <Footer />
      </footer>
    </div>
  </>
}

export default Layout;