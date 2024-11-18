import React from 'react'

const Banner = () => {
  return (
    <>
     <>
  {/* Start Banner 
    ============================================= */}
  <div
    className="banner-style-one-area bg-gray"
    style={{ backgroundImage: "url(assets/img/shape/4.png)" }}
  >
    <div className="container">
      <div className="row align-items-center">
        <div className="col-lg-12">
          <div className="banner-style-one-items">
            <div className="info">
              <h1>I👋 am Dalton </h1>
              <h2>
                <span className="header-caption" id="page-top">
                  {/* type headline start*/}
                  <span className="cd-headline clip is-full-width">
                    {/* ROTATING TEXT */}
                    <span
                      className="cd-words-wrapper"
                      style={{ width: "203.64px", overflow: "hidden" }}
                    >
                      <b className="is-hidden">Web Developer</b>
                      <b className="is-visible">Professional Coder</b>
                      <b className="is-hidden">UI/UX Designer</b>
                    </span>
                  </span>
                  {/* type headline end */}
                </span>
              </h2>
              <p>
                Hi, my name is Dalton Grant and I began using WordPress when it
                first began. I’ve spent most of my waking hours for the last ten
                years designing, programming and operating WordPress sites.
              </p>
              <div className="flex-social mt-40">
                <div className="button">
                  <a
                    className="btn-style-regular"
                    href="https://validthemes.net/site-template/antux/index.html#contact"
                  >
                    <span>Hire Me Now</span>{" "}
                    <i className="fas fa-arrow-right" />
                  </a>
                </div>
                <ul className="social-info">
                  <li>
                    <a href="https://validthemes.net/site-template/antux/index.html#">
                      <i className="fab fa-facebook" />
                    </a>
                  </li>
                  <li>
                    <a href="https://validthemes.net/site-template/antux/index.html#">
                      <i className="fab fa-linkedin-in" />
                    </a>
                  </li>
                  <li>
                    <a href="https://validthemes.net/site-template/antux/index.html#">
                      <i className="fab fa-dribbble" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="thumb">
              <img src="./assets/images/1.png" alt="Image Not Found" />
              <img src="./assets/images/1(1).png" alt="Image Not Found" />
              <img src="./assets/images/3.png" alt="Image Not Found" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* End Banner */}
</>
 
    </>
  )
}

export default Banner
