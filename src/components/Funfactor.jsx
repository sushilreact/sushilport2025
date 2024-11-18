import React from 'react'

const Funfactor = () => {
  return (
    <>
  {/* Start Fun Fact 
    ============================================= */}
  <div className="fun-factor-area default-padding overflow-hidden">
    <div className="container">
      <div className="row">
        <div className="col-lg-8 offset-lg-2">
          <div className="site-heading text-center">
            <h4 className="sub-title">Top Skills</h4>
            <h2 className="title">See my expertise</h2>
          </div>
        </div>
      </div>
    </div>
    <div className="container">
      <div className="fun-fact-style-two-items text-center">
        {/* Single item */}
        <div
          className="funfact-style-two-item wow fadeInUp"
          style={{ visibility: "visible", animationName: "fadeInUp" }}
        >
          <div className="icon">
            <img src="./assets/images/xd.png" alt="Image Not Found" />
          </div>
          <div className="fun-fact">
            <div className="counter">
              <div className="timer" data-to={80} data-speed={2000}>
                80
              </div>
              <div className="operator">%</div>
            </div>
            <span className="medium">Adobe XD</span>
          </div>
        </div>
        {/* End Single item */}
        {/* Single item */}
        <div
          className="funfact-style-two-item wow fadeInUp"
          data-wow-delay="100ms"
          style={{
            visibility: "visible",
            animationDelay: "100ms",
            animationName: "fadeInUp"
          }}
        >
          <div className="icon">
            <img src="./assets/images/figma.png" alt="Image Not Found" />
          </div>
          <div className="fun-fact">
            <div className="counter">
              <div className="timer" data-to={90} data-speed={2000}>
                90
              </div>
              <div className="operator">%</div>
            </div>
            <span className="medium">Figma</span>
          </div>
        </div>
        {/* End Single item */}
        {/* Single item */}
        <div
          className="funfact-style-two-item wow fadeInUp"
          data-wow-delay="200ms"
          style={{
            visibility: "visible",
            animationDelay: "200ms",
            animationName: "fadeInUp"
          }}
        >
          <div className="icon">
            <img src="./assets/images/wordpress.png" alt="Image Not Found" />
          </div>
          <div className="fun-fact">
            <div className="counter">
              <div className="timer" data-to={70} data-speed={2000}>
                70
              </div>
              <div className="operator">%</div>
            </div>
            <span className="medium">WordPress</span>
          </div>
        </div>
        {/* End Single item */}
        {/* Single item */}
        <div
          className="funfact-style-two-item wow fadeInUp"
          data-wow-delay="300ms"
          style={{
            visibility: "visible",
            animationDelay: "300ms",
            animationName: "fadeInUp"
          }}
        >
          <div className="icon">
            <img src="./assets/images/photoshop.png" alt="Image Not Found" />
          </div>
          <div className="fun-fact">
            <div className="counter">
              <div className="timer" data-to={80} data-speed={2000}>
                80
              </div>
              <div className="operator">%</div>
            </div>
            <span className="medium">Photoshop</span>
          </div>
        </div>
        {/* End Single item */}
        {/* Single item */}
        <div
          className="funfact-style-two-item wow fadeInUp"
          data-wow-delay="400ms"
          style={{
            visibility: "visible",
            animationDelay: "400ms",
            animationName: "fadeInUp"
          }}
        >
          <div className="icon">
            <img src="./assets/images/diamon.png" alt="Image Not Found" />
          </div>
          <div className="fun-fact">
            <div className="counter">
              <div className="timer" data-to={60} data-speed={2000}>
                60
              </div>
              <div className="operator">%</div>
            </div>
            <span className="medium">Sketch</span>
          </div>
        </div>
        {/* End Single item */}
        {/* Single item */}
        <div
          className="funfact-style-two-item wow fadeInUp"
          data-wow-delay="500ms"
          style={{
            visibility: "visible",
            animationDelay: "500ms",
            animationName: "fadeInUp"
          }}
        >
          <div className="icon">
            <img src="./assets/images/ai.png" alt="Image Not Found" />
          </div>
          <div className="fun-fact">
            <div className="counter">
              <div className="timer" data-to={90} data-speed={2000}>
                90
              </div>
              <div className="operator">%</div>
            </div>
            <span className="medium">Illustrator</span>
          </div>
        </div>
        {/* End Single item */}
      </div>
    </div>
  </div>
  {/* End Fun Factor */}
</>

  )
}

export default Funfactor
