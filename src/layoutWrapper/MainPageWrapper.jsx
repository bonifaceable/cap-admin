"use client";
import React from "react";
import Script from "next/script";
// import { Head } from "next/document";
import NavBar from "@/components/NavBar";
import TradingViewTicker from "@/components/TradindViewTicker";
import Footer from "@/components/Footer";

const MainPageWrapper = ({ children }) => {
  return (
    <>
      <head>
        <link
          href="http://fonts.googleapis.com/css?family=Exo+2:300i,400,400i,500,500i,600,600i,700%7CRoboto:300i,400,400i,500,500i,700"
          rel="stylesheet"
          type="text/css"
        />

        {/* <!-- Stylesheets --> */}
        <link href="/main-assets/css/external.css" rel="stylesheet" />
        <link href="/main-assets/css/bootstrap.min.css" rel="stylesheet" />
        <link href="/main-assets/css/style.css" rel="stylesheet" />

        {/* <!-- RS5.0 Main Stylesheet --> */}
        <link
          rel="stylesheet"
          type="text/css"
          href="/main-assets/revolution/css/settings.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="/main-assets/revolution/css/layers.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="/main-assets/revolution/css/navigation.css"
        />
        <title>Cryptech | Bitcoin And Crypto Currency Html5 Template</title>

        <title>Cryptech | Bitcoin And Crypto Currency </title>
      </head>
      {/* <div className="preloader">
        <div className="signal" />
      </div> */}

      <div id="wrapper" className="wrapper clearfix">
        {/* <NavBar /> */}
        {children}
        {/* <TradingViewTicker /> */}
        {/* <Footer /> */}
      </div>
      <Script src="/main-assets/js/jquery-2.2.4.min.js"></Script>
      <Script src="/main-assets/js/plugins.js"></Script>
      <Script src="/main-assets/js/widgets.html"></Script>
      <Script src="/main-assets/js/functions.js"></Script>
      {/* <!-- RS5.0 Core JS Files --> */}
      <Script src="/main-assets/revolution/js/jquery.themepunch.tools.min838f.js?rev=5.0"></Script>
      <Script src="/main-assets/revolution/js/jquery.themepunch.revolution.min838f.js?rev=5.0"></Script>
      <Script src="/main-assets/revolution/js/extensions/revolution.extension.video.min.js"></Script>
      <Script src="/main-assets/revolution/js/extensions/revolution.extension.slideanims.min.js"></Script>
      <Script src="/main-assets/revolution/js/extensions/revolution.extension.actions.min.js"></Script>
      <Script src="/main-assets/revolution/js/extensions/revolution.extension.layeranimation.min.js"></Script>
      <Script src="/main-assets/revolution/js/extensions/revolution.extension.kenburn.min.js"></Script>
      <Script src="/main-assets/revolution/js/extensions/revolution.extension.navigation.min.js"></Script>
      <Script src="/main-assets/revolution/js/extensions/revolution.extension.migration.min.js"></Script>
      <Script src="/main-assets/revolution/js/extensions/revolution.extension.parallax.min.js"></Script>
      {/* <!-- RS Configration JS Files --> */}
      <Script src="/main-assets/js/rsconfig.js"></Script>
    </>
  );
};

export default MainPageWrapper;
