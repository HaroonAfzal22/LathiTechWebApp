import React, { useState } from "react";
import Link from "next/link";

const MainBanner = () => {
  const [isVideoVisible, setIsVideoVisible] = useState(false);

  const handleImageClick = () => {
    setIsVideoVisible(true);
  };

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

                    <div className="banner-btn" style={{ display: 'flex', alignItems: 'center' }}>
                      <Link href="/about-us">
                        <a className="default-btn-one">
                          About Us <span></span>
                        </a>
                      </Link>

                      <Link href="/contact" style={{ marginLeft: '20px' }}>
                        <a className="default-btn-one">
                          Contact Us <span></span>
                        </a>
                      </Link>

                      <img
                        src="CustomImages/playButton .png"
                        alt="image"
                        className="main_banner"
                        style={{ marginLeft: '20px', width: '200px', height: 'auto', cursor: 'pointer' }}
                        onClick={handleImageClick}
                      />
                    </div>

                    {isVideoVisible && (
                      <video width="320" height="240" controls autoPlay style={{ marginTop: '20px' }}>
                        <source src="/videos/IntroVideo.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                    )}
                  </div>
                </div>

                <div className="col-lg-6 col-md-12">
                  <div className="banner-image h">
                    <img
                      src="/images/banner.png"
                      alt="image"
                      className="main_banner"
                    />

                    <img
                      src="/images/banner.png"
                      alt="image"
                    />
                  </div>

                  <div className="circle-img">
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
