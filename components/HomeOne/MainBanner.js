import React from "react";
import Link from "next/link";

const MainBanner = () => {
  return (
    <>
      <div className="main-banner-two">
        <div className="d-table">
          <div className="d-table-cell">
            <div className="container-fluid">
              <div className="row align-items-center">
                <div className="col-lg-6 col-md-12">
                  <div className="main-banner-content">
                    <h1
                      data-aos="fade-up"
                      data-aos-delay="100"
                      data-aos-duration="1200"
                    >
                      LathiTech
                    </h1>

                    <div
                      data-aos="fade-up"
                      data-aos-delay="200"
                      data-aos-duration="1200"
                    >
                      <p>
                      
                      Empowering your business with cutting-edge native mobile and web applications. Our expertise in validation, design, and development ensures robust solutions tailored to drive growth and achieve your strategic objectives.
                      </p>
                    </div>

                    <div
                      className="banner-btn"
                      data-aos="fade-up"
                      data-aos-delay="300"
                      data-aos-duration="1200"
                    >
                      <Link href="/about-us">
                        <a className="default-btn-one">
                          About Us
                          <span></span>
                        </a>
                      </Link>

                      <Link href="/about-us">
                        <a className="default-btn" href="/contact">
                          Contact Us
                          <span></span>
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="col-lg-6 col-md-12">
                  <div className="banner-image">
                    {/* Shape images */}
                    {
                       <img
                       src="/images/banner.png"
                       alt="image"
                       data-aos="zoom-in"
                       data-aos-delay="100"
                       data-aos-duration="1200"
                        width="10"
                       style={{"width": "600px", marginTop: "40px", marginLeft:"0px"}}
                     />
 
                    /* <img
                      src="/images/home-two/home-two-shape1.png"
                      alt="image"
                      data-aos="fade-up"
                      data-aos-delay="100"
                      data-aos-duration="1200"
                    /> */}

                    {/* <img
                      src="/images/home-two/home-two-shape2.png"
                      alt="image"
                      data-aos="fade-left"
                      data-aos-delay="100"
                      data-aos-duration="1200"
                    /> */}

                    {/* <img
                      src="/images/home-two/home-two-shape3.png"
                      alt="image"
                      data-aos="fade-right"
                      data-aos-delay="100"
                      data-aos-duration="1200"
                    /> */}

                    {/* <img
                      src="/images/home-two/home-two-shape4.png"
                      alt="image"
                      data-aos="fade-up"
                      data-aos-delay="100"
                      data-aos-duration="1200"
                    /> */}

                 
                    {/* Main image */}

                    <img
                      src="/images/home-two/main-image2.png"
                      alt="image"
                      data-aos="zoom-in"
                      data-aos-delay="100"
                      data-aos-duration="1200"
                    />
                  </div>

                  <div className="circle-img" style={{ width: "850px", }}>
                    <img
                      src="/images/home-two/home-two-shape6.png"
                      alt="image"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Shape Images */}
        <div className="creative-shape">
          <img
            src="/images/main-banner-shape/home-shape-2.png"
            alt="main-image"
          />
        </div>
        <div className="shape-dot">
          <img
            src="/images/main-banner-shape/main-banner-dot.png"
            alt="main-image"
          />
        </div>
      </div>
    </>
  );
};

export default MainBanner;
