import React from 'react'

const Pricing = () => {
  return (
    <>
    {/* Start Pricing 
      ============================================= */}
    <div id="pricing" className="pricing-style-one-area default-padding bg-light">
      <div className="shape-right-top">
        <img src="./assets/images/15.png" alt="Image Not Found" />
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-6 offset-lg-3">
            <div className="site-heading text-center">
              <h4 className="sub-title">Pricing</h4>
              <h2 className="title">The best pricing plans to get your best</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          {/* Single Item */}
          <div className="col-lg-6 pricing-one-single">
            <div
              className="pricing-style-one wow fadeInUp"
              style={{ visibility: "hidden", animationName: "none" }}
            >
              <div className="pricing-top">
                <div className="right">
                  <i className="fab fa-wordpress" />
                </div>
                <div className="left">
                  <h4>WordPress Development</h4>
                  <p>Simple and flexible per - user pricing</p>
                </div>
              </div>
              <div className="content">
                <div className="price">
                  <h2>
                    <sup>$</sup>48
                  </h2>
                </div>
                <ul>
                  <li>1 Page with Elementor</li>
                  <li>Design Customization</li>
                  <li>Responsive Design</li>
                  <li>1 Page with Elementor</li>
                  <li>Design Customization</li>
                  <li>Responsive Design</li>
                </ul>
                <div className="button mt-30">
                  <a
                    className="btn-style-regular"
                    href="https://validthemes.net/site-template/antux/index.html#contact"
                  >
                    <span>Order Now</span> <i className="fas fa-arrow-right" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* End Single Item */}
          {/* Single Item */}
          <div className="col-lg-6 pricing-one-single">
            <div
              className="pricing-style-one wow fadeInUp"
              data-wow-delay="200ms"
              style={{
                visibility: "hidden",
                animationDelay: "200ms",
                animationName: "none"
              }}
            >
              <div className="pricing-top">
                <div className="right">
                  <i className="fab fa-bootstrap" />
                </div>
                <div className="left">
                  <h4>Static frontend design</h4>
                  <p>Simple and flexible per - user pricing</p>
                </div>
              </div>
              <div className="content">
                <div className="price">
                  <h2>
                    <sup>$</sup>28
                  </h2>
                </div>
                <ul>
                  <li>2 Page with Bootstrap5</li>
                  <li>Design implement</li>
                  <li>Responsive Design</li>
                  <li>2 Page with Bootstrap5</li>
                  <li>Design implement</li>
                  <li>Responsive Design</li>
                </ul>
                <div className="button mt-30">
                  <a
                    className="btn-style-regular btn-border"
                    href="https://validthemes.net/site-template/antux/index.html#contact"
                  >
                    <span>Order Now</span> <i className="fas fa-arrow-right" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* End Single Item */}
        </div>
      </div>
    </div>
    {/* End Pricing */}
  </>
  
  )
}

export default Pricing
