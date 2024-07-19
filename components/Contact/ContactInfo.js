import React from "react";

const ContactInfo = () => {
  return (
    <>
      <div className="contact-box pt-100 pb-70">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6">
              <div className="single-contact-box">
                <i className="fa fa-map-marker"></i>
                <div className="content-title">
                  <h3>Address</h3>
                  <p>
                 UK:  65 devere garden IG1 3EF  London,Uk 
                 
                  </p>
                 
                </div>
                <div className="content-title">
                 
                  <p>
                  PK : PLAZA no. 496-E FIRST FLOOR   TAJPURA SCHEME LAHORE, PAKISTAN
                 
                  </p>
                 
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="single-contact-box">
                <i className="fa fa-envelope"></i>
                <div className="content-title">
                  <h3>Email</h3>
                  <p>lt.lathitech@gmail.com</p>
                  <p></p>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="single-contact-box">
                <i className="fa fa-phone"></i>
                <div className="content-title">
                  <h3>Phone</h3>
                  <p>Uk: +447301843557</p>
                  <p>Pk: +923077770014</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactInfo;
