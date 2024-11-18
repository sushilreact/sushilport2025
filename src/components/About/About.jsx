import React from 'react'

const About = () => {
  return (
    <>
      <>
  {/* Start About 
    ============================================= */}
  <div id="about" className="about-style-one-area bg-gray default-padding">
    <div className="shape-style-one">
      <img src="./assets/images/3.png" alt="Image Not Found" />
      <img
        className="upDownScrol"
        src="8.png"
        alt="Image Not Found"
        style={{
          translate: "none",
          rotate: "none",
          scale: "none",
          transform: "translate(0%, 105%)"
        }}
      />
    </div>
    <div className="container">
      <div className="row">
        <div className="col-lg-5">
          <div className="fun-fact-style-one-items">
            <div className="fun-fact">
              <div className="counter">
                <div className="timer" data-to={12} data-speed={1000}>
                  12
                </div>
                <div className="operator">+</div>
              </div>
              <span className="medium">Years of Experience</span>
            </div>
            <div className="fun-fact">
              <div className="counter">
                <div className="timer" data-to={138} data-speed={1000}>
                  138
                </div>
                <div className="operator">+</div>
              </div>
              <span className="medium">Projects completed on 30 countries</span>
            </div>
          </div>
          <div className="clieents-list mt-40">
            <div className="d-flex">
              <div className="thumb">
                <img src="./assets/images/14.jpg" alt="Image Not Found" />
                <img src="./assets/images/15.jpg" alt="Image Not Found" />
                <img src="./assets/images/16.jpg" alt="Image Not Found" />
                <img src="./assets/images/17.jpg" alt="Image Not Found" />
              </div>
              <div className="info">
                <h5>20K+ Clients</h5>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-7 pl-80 pl-md-15 pl-xs-15">
          <div className="about-style-one-info">
            <p>
              As a skilled web developer, I specialize in creating responsive,
              user-friendly websites with a focus on modern design and efficient
              code. I excel in front-end development, with a deep understanding
              of HTML, CSS, JavaScript, and various frameworks. My passion is
              turning ideas into functional and aesthetically pleasing digital
              experiences.
            </p>
            <a
              className="btn-style-regular btn-border"
              href="https://validthemes.net/site-template/antux/index.html#"
            >
              <span>Learn More</span>
              <i className="fas fa-arrow-right" />
            </a>
          </div>
        </div>
      </div>
      <div className="about-style-one-bottom-info mt-50">
        <div className="row">
          <div className="col-lg-8 pr-60 pr-md-15 pr-xs-15">
            <div className="img-container">
              <img
                src="./assets/images/1.jpg"
                alt="Image Not Found"
                style={{
                  translate: "none",
                  rotate: "none",
                  scale: "none",
                  transform:
                    "translate(-50%, -60%) translate(-0.083px, 0px) scale(1.4, 1.4)"
                }}
              />
              <a
                href="https://www.youtube.com/watch?v=aTC_RNYtEb0"
                className="popup-youtube video-play-button"
              >
                <i className="fas fa-play" />
                <div className="effect" />
              </a>
            </div>
          </div>
          <div className="col-lg-4">
            <img src="./assets/images/2.jpg" alt="Image Not Found" />
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* End About */}
</>

    </>
  )
}

export default About
