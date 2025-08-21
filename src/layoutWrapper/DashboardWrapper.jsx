"use client";
import DashboardHeader from "@/components/DashComponents/DashboardHeader";
import SideBar from "@/components/DashComponents/SideBar";
import Script from "next/script";
import { useState } from "react";
import { Head } from "next/document";

const DashboardWrapper = ({ children }) => {
  const [showShowSidebar, setShowSidebar] = useState(false);
  const handleShowSidebar = () => {
    setShowSidebar(!showShowSidebar);
    // showShowSidebar = true;
  };
  return (
    <>
      <Head>
        <link rel="stylesheet" href="/assets/css/core/libs.min.css" />
        <link rel="stylesheet" href="/assets/css/coinex.min862f.css?v=4.1.0" />
        <link rel="stylesheet" href="/assets/css/custom.min862f.css?v=4.1.0" />
        {/* <link rel="preconnect" href="https://fonts.googleapis.com/" /> */}
        {/* <link rel="preconnect" href="https://fonts.gstatic.com/" crossorigin /> */}
      </Head>
      <SideBar handleHideSidebar={handleShowSidebar} show={showShowSidebar} />
      <main className="main-content">
        <div className="position-relative">
          <DashboardHeader handleShowSidebar={handleShowSidebar} />
          {children}
        </div>
      </main>
      {/* <Script src="/assets/js/core/libs.min.js"></Script> */}
      <Script src="/assets/js/core/external.min.js" />

      {/* <!-- widgetchart JavaScript --> */}
      <Script src="/assets/js/charts/widgetcharts.js"></Script>

      {/* <!-- GSAP Animation JS--> */}
      <Script src="/assets/vendor/gsap/gsap.min.js"></Script>
      <Script src="/assets/vendor/gsap/ScrollTrigger.min.js"></Script>

      {/* <!-- fslightbox JavaScript --> */}
      <Script src="/assets/js/fslightbox.js"></Script>

      {/* <!-- Mapchart JavaScript --> */}
      <Script src="/assets/js/charts/vector-chart.js"></Script>
      <Script src="/assets/js/charts/dashboard.js"></Script>

      {/* <!-- app JavaScript --> */}
      <Script src="/assets/js/coinex.js"></Script>

      {/* <!-- apexchart JavaScript --> */}
      <Script src="https://cdn.jsdelivr.net/npm/apexcharts"></Script>
      <Script src="/assets/js/charts/apexcharts.js"></Script>

      {/* <!-- Gsap Animation Init --> */}
      <Script src="/assets/js/gsap.js"></Script>
    </>
  );
};

export default DashboardWrapper;
