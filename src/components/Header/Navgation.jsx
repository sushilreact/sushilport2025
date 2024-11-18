import React from 'react'

import MenuLi from './MenuLi'


const Navgation = () => {
  return (
    <>
      
    <nav className="navbar mobile-sidenav navbar-box navbar-default validnavs navbar-sticky on no-full">
     
      <div className="top-search">
        <div className="container-xl">
          <div className="input-group">
            <span className="input-group-addon">
              <i className="fa fa-search" />
            </span>
            <input type="text" className="form-control" placeholder="Search" />
            <span className="input-group-addon close-search">
              <i className="fa fa-times" />
            </span>
          </div>
        </div>
      </div>
     
      <div className="container nav-box d-flex justify-content-between align-items-center">
        
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle"
            data-toggle="collapse"
            data-target="#navbar-menu"
          >
            <i className="fa fa-bars" />
          </button>
          <a className="navbar-brand" href="#">
            <img src="./assets/images/logo.png" className="logo" alt="Logo" />
          </a>
        </div>
        
        <div className="collapse navbar-collapse" id="navbar-menu">
          <img src="./assets/images/logo.png" alt="Logo" />
          <button
            type="button"
            className="navbar-toggle"
            data-toggle="collapse"
            data-target="#navbar-menu"
          >
            <i className="fa fa-times" />
          </button>
          <ul
            className="nav navbar-nav navbar-right"
            data-in="fadeInDown"
            data-out="fadeOutUp"
          >
            <MenuLi linkText="Home" linkurl="/" />
            <MenuLi linkText="About" linkurl="/about"/>
            <MenuLi linkText="Services" linkurl="/services"/>
            <MenuLi linkText="Portfolio" linkurl="/portfolio"/>
            <MenuLi linkText="Blog" linkurl="/blog"/>
            <MenuLi linkText="Contact" linkurl="/contact" />
          </ul>
        </div>
        {/* /.navbar-collapse */}
        <div className="nav-right">
          <div className="attr-right">
            {/* Start Atribute Navigation */}
            <div className="attr-nav attr-box">
              <ul>
                <li className="button">
                  <a
                    className="smooth-menu"
                    href="#contact"
                  >
                    Let's Talk <i className="fas fa-comment-alt" />
                  </a>
                </li>
              </ul>
            </div>
            {/* End Atribute Navigation */}
          </div>
        </div>
      </div>
      {/* Overlay screen for menu */}
      <div className="overlay-screen" />
      {/* End Overlay screen for menu */}
    </nav>
    {/* End Navigation */}
    </>
  )
}

export default Navgation
