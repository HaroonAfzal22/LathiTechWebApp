import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";

const Testimonial = () => {
  return (
    <>
      <div className="testimonial-section ptb-100">
        <div className="container">
          <div className="section-title">
            <span>Testimonials</span>
            <h2>What Our Client Say</h2>
          </div>

          <Swiper
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            className="testimonial-slider"
          >
            <SwiperSlide>
              <div className="testimonial-single-item">
                <div className="testimonial-image">
                  <img src="/images/clients/client1.jpg" alt="image" />
                </div>

                <div className="testimonial-info">
                  <h3>Richard Denial</h3>
                  <span>Ux/Ui Design</span>
                </div>

                <div className="testimonial-content">
                  <div className="icon">
                    <i className="flaticon-quote"></i>
                  </div>
                  <p>
                  LathiTech's UX/UI design services exceeded our expectations. Their expertise and creativity transformed our software, resulting in an intuitive and visually stunning product. The team is highly professional, innovative, and a pleasure to work with.
                  </p>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="testimonial-single-item">
                <div className="testimonial-image">
                  <img src="/images/clients/client2.jpg" alt="image" />
                </div>

                <div className="testimonial-info">
                  <h3>Sarah Taylor</h3>
                  <span>Mobile App Development(Android/Ios)</span>
                </div>

                <div className="testimonial-content">
                  <div className="icon">
                    <i className="flaticon-quote"></i>
                  </div>
                  <p>
                  LathiTech delivered outstanding mobile app development for both iOS and Android. Their team demonstrated exceptional expertise, creating a seamless and user-friendly app. Highly professional, responsive, and committed to excellence. Highly recommend their services.
                  </p>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="testimonial-single-item">
                <div className="testimonial-image">
                  <img src="/images/clients/client3.jpg" alt="image" />
                </div>
                <div className="testimonial-info">
                  <h3>Alastair Cook</h3>
                  <span>Web App Development</span>
                </div>
                <div className="testimonial-content">
                  <div className="icon">
                    <i className="flaticon-quote"></i>
                  </div>
                  <p>
                  LathiTech's web app development services are top-notch. They built a robust and user-friendly application tailored to our needs. The team's professionalism, technical expertise, and dedication to quality are truly impressive. Highly recommended.
                  </p>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>

        {/* Shape Images */}
        <div className="testimonial-shape">
          <img src="/images/shape/testimonial-shape-1.png" alt="main-image" />
        </div>
        <div className="testimonial-shape-img1">
          <img src="/images/shape/testimonial-shape-2.png" alt="main-image" />
        </div>
        <div className="testimonial-shape-img2">
          <img src="/images/shape/testimonial-shape-3.png" alt="main-image" />
        </div>
      </div>
    </>
  );
};

export default Testimonial;
