import React from "react";
import Marquee from "react-fast-marquee";

function DisclaimerHeader() {
  return (
    <div>
      <div className="container">
        <Marquee
          gradientColor={[17, 24, 39]}
          speed={50}
          style={{ height: "var(--disclaimer-height)" }}
        >
          {" "}
          <p className="white mb-0">
            {" "}
            We would like to inform our website visitors and social media
            followers that our official website and social media accounts are
            the only authorized platforms for sharing information and engaging
            with our audience.
          </p>
          <p className="white mb-0">
            {" "}
            Any other website or social media account claiming to represent us
            is fraudulent and unauthorized. We take no responsibility for any
            misinformation or harm caused by such impersonation.
          </p>
          <p className="white mb-0">
            {" "}
            Please ensure that you only interact with our verified accounts to
            stay updated on our latest news, products, and services
          </p>
          <p className="white mb-0">
            {" "}
            Report us on{" "}
            <a href="info@deelance.com" className="green" target="_blank">
              info@deelance.com
            </a>{" "}
          </p>
        </Marquee>
      </div>
    </div>
  );
}

export default DisclaimerHeader;
