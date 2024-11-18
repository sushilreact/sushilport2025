import React from 'react'

const Footer = () => {
  return (
    <>
  {/* Start Footer 
    ============================================= */}
  <footer
    className="default-padding bg-cover"
    style={{ backgroundImage: "url(assets/img/shape/1.jpg)" }}
  >
    <div className="container">
      <div className="row">
        <div className="col-lg-8 offset-lg-2">
          <div className="footer-items text-center">
            <a
              href="https://validthemes.net/site-template/antux/index.html#"
              className="footer-logot"
            >
              <img src="logo.png" alt="Image Not Found" />
            </a>
            <ul className="foter-menu">
              <li>
                <a href="https://validthemes.net/site-template/antux/index.html">
                  Home
                </a>
              </li>
              <li>
                <a href="https://validthemes.net/site-template/antux/service.html">
                  Services
                </a>
              </li>
              <li>
                <a href="https://validthemes.net/site-template/antux/projects.html">
                  Portfolio
                </a>
              </li>
              <li>
                <a href="https://validthemes.net/site-template/antux/blog-with-sidebar.html">
                  Blog
                </a>
              </li>
              <li>
                <a href="https://validthemes.net/site-template/antux/contact.html">
                  Contact
                </a>
              </li>
            </ul>
            <p>Copyright © 2024 Antux. All Rights Reserved</p>
          </div>
        </div>
      </div>
    </div>
  </footer>
  {/* End Footer */}
  
</>

    
  )
}

export default Footer
