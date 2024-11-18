import React from 'react'

const Blog = () => {
  return (
    <>
  {/* Start Blog 
    ============================================= */}
  <div id="blog" className="blog-area home-blog default-padding bottom-less">
    <div className="container">
      <div className="row">
        <div className="col-xl-6 offset-xl-3 col-lg-8 offset-lg-2">
          <div className="site-heading text-center">
            <h4 className="sub-title">Blog Insight</h4>
            <h2 className="title">
              Valuable insights to change your startup idea
            </h2>
          </div>
        </div>
      </div>
    </div>
    <div className="container">
      <div className="row">
        {/* Single Item */}
        <div className="col-xl-4 col-md-6 col-lg-6 mb-30">
          <div
            className="home-blog-style-one-item wow fadeInUp"
            style={{ visibility: "hidden", animationName: "none" }}
          >
            <div className="home-blog-thumb">
              <img src="./assets/images/1(5).jpg" alt="Image not Found" />
            </div>
            <div className="content">
              <ul className="home-blog-meta">
                <li>
                  <a href="https://validthemes.net/site-template/antux/index.html#">
                    Design
                  </a>
                </li>
                <li>July 24, 2024</li>
              </ul>
              <div className="info">
                <h4 className="blog-title">
                  <a href="https://validthemes.net/site-template/antux/blog-single-with-sidebar.html">
                    Picked up brussels burger signications with ham efforts.
                  </a>
                </h4>
                <a
                  href="https://validthemes.net/site-template/antux/blog-single-with-sidebar.html"
                  className="btn-read-more"
                >
                  Read More <i className="fas fa-long-arrow-right" />
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* End Single Item */}
        {/* Single Item */}
        <div className="col-xl-4 col-md-6 col-lg-6 mb-30">
          <div
            className="home-blog-style-one-item wow fadeInUp"
            style={{ visibility: "hidden", animationName: "none" }}
          >
            <div className="home-blog-thumb" data-wow-delay="200ms">
              <img src="./assets/images/2(4).jpg" alt="Image not Found" />
            </div>
            <div className="content">
              <ul className="home-blog-meta">
                <li>
                  <a href="https://validthemes.net/site-template/antux/index.html#">
                    Mockup
                  </a>
                </li>
                <li>October 18, 2024</li>
              </ul>
              <div className="info">
                <h4 className="blog-title">
                  <a href="https://validthemes.net/site-template/antux/blog-single-with-sidebar.html">
                    This prefabrice passive house is highly sustainable with
                    intent
                  </a>
                </h4>
                <a
                  href="https://validthemes.net/site-template/antux/blog-single-with-sidebar.html"
                  className="btn-read-more"
                >
                  Read More <i className="fas fa-long-arrow-right" />
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* End Single Item */}
        {/* Single Item */}
        <div className="col-xl-4 col-md-6 col-lg-6 mb-30">
          <div
            className="home-blog-style-one-item wow fadeInUp"
            data-wow-delay="400ms"
            style={{
              visibility: "hidden",
              animationDelay: "400ms",
              animationName: "none"
            }}
          >
            <div className="home-blog-thumb">
              <img src="./assets/images/3(5).jpg" alt="Image not Found" />
            </div>
            <div className="content">
              <ul className="home-blog-meta">
                <li>
                  <a href="https://validthemes.net/site-template/antux/index.html#">
                    Discuss
                  </a>
                </li>
                <li>August 26, 2024</li>
              </ul>
              <div className="info">
                <h4 className="blog-title">
                  <a href="https://validthemes.net/site-template/antux/blog-single-with-sidebar.html">
                    Announcing if attachment resolution sentim commercial.
                  </a>
                </h4>
                <a
                  href="https://validthemes.net/site-template/antux/blog-single-with-sidebar.html"
                  className="btn-read-more"
                >
                  Read More <i className="fas fa-long-arrow-right" />
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* End Single Item */}
      </div>
    </div>
  </div>
  {/* End Blog */}
</>

  )
}

export default Blog
