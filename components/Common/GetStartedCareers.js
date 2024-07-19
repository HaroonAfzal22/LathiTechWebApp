import React from "react";
import Link from 'next/link';

const GetStartedProject = () => {
  return (
    <>
      <div className="productive-section pt-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="productive-content">
                <span>Let’s Get Started</span>
                <h3>Be a part of LathiTech. Be a force for good </h3>
                <p>
                Help us make a real difference on a global scale. With a presence in almost 190 countries, we’re dedicated to our purpose of unlocking the power of food to enhance quality of life for everyone. Whether you're starting or continuing your career, explore how you can work with us.
                </p>

                <div className="productive-btn">
                  <Link href="/projects">
                    <a className="productive-btn">
                      Get Started Project
                      <span></span>
                    </a>
                  </Link>

                  <Link href="/contact">
                    <a className="productive-btn-one">
                      Contact With Us
                      <span></span>
                    </a>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="productive-image">
                <img src="/images/productive.png" alt="image" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GetStartedProject;
