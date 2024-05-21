import Link from "next/link";
import Image from "next/image";
import ZenSpaceAppLogo from '../public/images/logo/zenspaceapp@2x.png';


export default function Navbar({ home }: { home: string} ) {
  
  let mega_menu_visible = false;
  
  function handleMouseOver(e: MouseEvent) {
    
    function hideVisibleMenuItem() {
      let elems = document.getElementsByClassName('show mega-menu');
      if (elems.length > 0) {
        elems[0].classList.add('hide');
        elems[0].classList.remove('show');
      }
    }
    hideVisibleMenuItem();
    
    function showNewMenuItem() {
      const element = e.target as HTMLElement;
      if (document !== null) { document.getElementById(element.id)?.classList.remove('hide'); }
      if (document !== null) { document.getElementById(element.id)?.classList.add('show'); }
    }
    showNewMenuItem();
    mega_menu_visible = true;
  }
  
  function handleMouseOut() {
    if (mega_menu_visible) {

      const elems = document.getElementsByClassName('mega-menu show');
      if (elems.length === 0) return;
      elems[0].classList.add('hide');
      elems[0].classList.remove('show');
    }
  }

  function renderLogo() {
    return (
      <a className="logo-center" href="/" style={{ paddingRight: '15px', zIndex: '9999'  }}>
        <Image
          alt="ZenSpaceApp logo"
          src={ZenSpaceAppLogo}
          height={32}
          width={0}
        />
      </a>
    )
  }

  function openMenu() {
    // animate the toggle button to open and close 
    document.getElementsByClassName("navbar-toggle")[0].classList.toggle("open");
    document.getElementsByClassName("nav-submenu")[0].classList.toggle("open");
  }

  function renderToggleMenu() {
    return (
      <div className="menu-extras">
        <div className="menuitem" style={{zIndex: 9999}}>
          {/* <a className="navbar-toggle" onClick={(e) => openMenu(e)}> */}
          <a className="navbar-toggle">
            {/* // onClick={(e) => openMenu(e)}> */}
            <div className="lines">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </a>
        </div>
      </div>
    )
  }


  function renderMegaMenu() {
    return (
      <div className="container">  
        <div style={{
          display: 'flex',
          alignItems: "center",
          justifyContent: "space-between"
        }}>
          
        {renderLogo()}   
        {/* {renderToggleMenu()} */}
        <div className="nav-submenu" id="nav" >   
          <ul className="list-unstyled">
            {/* onMouseLeave={() => handleMouseOut()}> */}
            <li>
              {/* onMouseOver={() => handleMouseOver('products')} > */}
              <a>Features</a>
              {renderProducts()}
            </li>
            <li>
              {/* onMouseOver={() => handleMouseOver('resources')}> */}
              <a>Patients</a>
              {renderResources()}
            </li>
            <li>
              {/* onMouseOver={() => handleMouseOver('company')} > */}
              <a>ZenMatch</a>
              {renderCompany()}
            </li>
            <li><Link href='/pricing'>Pricing</Link></li>
          </ul>
        </div>
            <div>
              <Link
                href="/login"
              className="btn btn-outline-secondary"
              
              >
                Login
              </Link>
              </div>  
        </div>
      </div>
    )
  }

  /**
   * 
   */
  function renderProducts() {
   
    return (
      <div id="products" style={{ display: 'flex' }} className='hide mega-menu'>
        <div className="sub-menu">
          <div>
            <h5>PRODUCTS</h5>
            <ul className="list-unstyled">
              <Link href="/"><li>Platform</li></Link> 
              <li>Apps</li>
              <Link href='/insta-security'><li>Privacy and Data security</li></Link>
            </ul>
          </div>
          <div>
            <h5>SOLUTIONS</h5>
            <ul className="list-unstyled">
              <Link href='/insta-patients'>
                <li>Patients</li>
              </Link>
              <Link href='/insta-physicians'><li>Physicians</li></Link>
              <Link href="/medical-groups"><li>Medical groups & Organizations</li></Link>
            </ul>
          </div>
        </div>
      </div>
    )
  }

  function renderResources() {
    return (
      <div id="resources" style={{display: 'flex'}} className="hide mega-menu">
        <div className="sub-menu">
          <div>
            <h5>OUR POLICIES</h5>
            <ul className="list-unstyled">
              <Link href='/hipaa-compliance'>
                <li>HIPAA Compliance</li>
              </Link>
              <Link href='/privacy'>
                <li>Privacy Policy</li>
              </Link>
              <Link href='/service-terms'>
                <li>Service Terms</li>
              </Link>
              {/* <Link href='/cookie-prefs'>
                <li>Cookie Preferences</li>
              </Link> */}
            </ul>
          </div>
          <div>
            <h5>RESEARCH</h5>
            <ul className="list-unstyled">
              <li>Diagnostic Navigator</li>
            </ul>
          </div>
        </div>
      </div>
    )
  }

  function renderCompany() {
    return (
      <div id="company"  className='hide mega-menu' >
        <div className="sub-menu">
          <div>
            <h5>OUR COMPANY</h5>
            {/* <div tyle={{display: 'flex', justifyContent: 'space-between'}}> */}
            <ul className="list-unstyled">
              <Link href='/about-us'>
                <li>About us</li>
              </Link>
              <Link href='/careers'>
                <li>Careers</li>
              </Link>
              <Link href='/planet-health'>
                <li>Planet Health</li>
              </Link>
            </ul>
          </div>
        </div>
      </div>
    )
  }

  return (
    <>
      {renderMegaMenu()}
    </>
  )
}