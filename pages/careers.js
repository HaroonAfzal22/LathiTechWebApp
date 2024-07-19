import React from "react";
import Navbar from "../components/Layouts/Navbar";
import PageBanner from "../components/Common/PageBanner";
import CareersContent from "../components/careers/careersContent";
import CareersFunFacts from "../components/Common/CareersFunFacts";
import GetStartedCareers from "../components/Common/GetStartedCareers";
import Customers from "../components/Common/Customers";
import SubscribeStyleThree from "../components/Common/SubscribeStyleThree";
import Footer from "../components/Layouts/Footer";

const Projects = () => {
  return (
    <>
      <Navbar />

      <PageBanner
        pageTitle="Careers"
        breadcrumbTextOne="Home"
        breadcrumbTextTwo="Careers"
        breadcrumbUrl="/"
        bgImage="/images/page-title-bg-2.jpg"
      />

      <CareersContent />

      <CareersFunFacts />

      <div className="pb-100">
        <GetStartedCareers />
      </div>

      <Customers />

      <div className="ptb-100">
        <SubscribeStyleThree />
      </div>

      <Footer />
    </>
  );
};

export default Projects;
