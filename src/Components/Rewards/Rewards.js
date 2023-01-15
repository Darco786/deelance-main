import React from "react";
import "./Rewards.css";
import {
  FaTwitter,
  FaFacebookSquare,
  FaMedium,
  FaTelegramPlane,
  FaLinkedin,
  FaDiscord,
  FaInstagram

} from "react-icons/fa";

function Rewards() {
  return (
    <section className="reward">
      <div className="container">
        <div className="reward-head text-center">
        <img
              src="https://ik.imagekit.io/cforcrypto/Dework/find_jobs/logo-white.png?ik-sdk-version=javascript-1.4.3&updatedAt=1669995470971"
              alt=""
              className=""
            />
                  <div className='social-hero reward-hero d-flex'>
          <a href="https://twitter.com/deelance_com" target="_blank" rel="noreferrer">
                    <FaTwitter />
                  </a>
                  <a
                    href="https://www.facebook.com/profile.php?id=100087266006183"
                    target="_blank" rel="noreferrer"
                  >
                    <FaFacebookSquare />
                  </a>
                  <a href="https://medium.com/@deeLance" target="_blank" rel="noreferrer">
                    <FaMedium />
                  </a>
                  <a href="https://t.me/deelancer" target="_blank" rel="noreferrer">
                    <FaTelegramPlane />
                  </a>
                  <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">
                    <FaLinkedin />
                  </a>
                  <a href="https://discord.gg/vhH3Sbt9NQ" target="_blank" rel="noreferrer">
                    <FaDiscord />
                  </a>
                  <a href="https://www.instagram.com/deelanceofficial/" target="_blank" rel="noreferrer">
                    <FaInstagram/>
                  </a>
            
          </div>
          <div className="header-btn">
            <h2>Win $100,000</h2>

          </div>


        </div>
        <div className="row justify-content-center align-items-center">
          <div className="col-md-6">
            <div className="re-box1">
              <h1>
                Try your luck and enter a drawing for $100,000 worth of $Dlance
              </h1>
              <p>
                To celebrate our pre-sale and our rapidly growing community,
                we’re giving 3 lucky people a chance to split $100,000 worth of
                $Dlance.
              </p>
              <p>
                All you have to do is follow the steps described in the widget
                on this page to receive multiple entries, and hold at least $100
                of $Dlance at the time of the draw.
              </p>
              <p>
                Good luck, and remember eligible entries must hold the
                equivalent of $100 of $Dlance at the time of the prize draw. You
                can buy $Dlance by clicking the button below:
              </p>
              <div className="re-btn text-center justify-content-center">
                <a href="/" className="buy-reward">BUY NOW</a>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="reward-box">
              <img src="https://ik.imagekit.io/cforcrypto/Dework/Rectangle_173.png?ik-sdk-version=javascript-1.4.3&updatedAt=1671108234911" alt=""/>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Rewards;
