import React from "react";
import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <>
      {/* Top Footer Section */}
      <footer className="footer-section ptb-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-footer-widget">
                <div className="footer-heading">
                  <h3>About Us</h3>
                </div>
                <p>
                LathiTech is dedicated to delivering innovative mobile, web, and desktop app solutions, coupled with exceptional UX/UI design, to enhance user experience and drive business success.
                </p>

                <ul className="footer-social">
                  <li>
                    <a href="https://www.facebook.com/" target="_blank">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                  </li>

                  <li>
                    <a href="https://www.twitter.com/" target="_blank">
                      <i className="fab fa-twitter"></i>
                    </a>
                  </li>

                  <li>
                    <a href="https://www.pinterest.com/" target="_blank">
                      <i className="fab fa-pinterest"></i>
                    </a>
                  </li>

                  <li>
                    <a href="https://www.linkedin.com/" target="_blank">
                      <i className="fab fa-linkedin"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-2 col-md-6 col-sm-6">
              <div className="single-footer-widget">
                <div className="footer-heading">
                  <h3>Important Links</h3>
                </div>

                <ul className="footer-quick-links">
                  <li>
                    <Link href="/about-us">
                      <a>About Us</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/projects">
                      <a>Project</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/services">
                      <a>Services</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/team">
                      <a>Team</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact">
                      <a>Contact</a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-2 col-md-6 col-sm-6">
              <div className="single-footer-widget">
                <div className="footer-heading">
                  <h3>Featured Service</h3>
                </div>

                <ul className="footer-quick-links">
                  <li>
                    <Link href="/">
                      <a>Home</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/blog">
                      <a>Blog</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/services">
                      <a>Services</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/partner">
                      <a>Client</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact">
                      <a>Contact</a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-footer-widget">
                <div className="footer-heading">
                  <h3>Contact Info</h3>
                </div>

                <div className="footer-info-contact">
                  <i className="flaticon-call-answer"></i>
                  <h3> Phone</h3>
                  <span>Uk  : +447301843557</span>
                  
                </div>
                <div className="footer-info-contact">
                 
                 
                  <span>Pk : +923077770014</span>
                  
                </div>

                <div className="footer-info-contact">
                  <i className="flaticon-envelope"></i>
                  <h3>Email</h3>
                  <span>lt.lathitech@gmail.com</span>
                </div>
                

                <div className="footer-info-contact">
                  <i className="flaticon-maps-and-flags"></i>
                  <h3>Address</h3>
                  <span>32 65 devere garden, IG1 3EF  London,Uk</span>
                </div>
                <div className="footer-info-contact">
                  
                  <span>PLAZA no. 496-E FIRST FLOOR   TAJPURA SCHEME LAHORE, PAKISTAN</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="lines">
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>

        <div className="partner-shape-img1">
          <img src="/images/shape/partnar-shape-2.png" alt="image" />
        </div>
      </footer>
    
      <div className="copyright-area">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-6">
              <p>
                &copy; {currentYear} Raxr. All Rights Reserved by
                <a href="https://envytheme.com/" target="_blank">
                  EnvyTheme
                </a>
              </p>
            </div>

            <div className="col-lg-6 col-md-6">
              <ul>
                <li>
                  <Link href="/terms-condition">
                    <a>Terms & Conditions</a>
                  </Link>
                </li>
                <li>
                  <Link href="/privacy-policy">
                    <a>Privacy Policy</a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* End Bottom Footer Section */}
    </>
  );
};

export default Footer;
