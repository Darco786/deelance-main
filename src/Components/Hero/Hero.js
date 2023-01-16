import React, { useState } from "react";
import "./Hero.css";

import {AiOutlineArrowRight} from 'react-icons/ai'
import Model from "Components/Popup/Model";
import Lottie from 'react-lottie';
import Hero_lot from './bg'
import PresaleMain from "Components/Presale/Presale_main";
function Hero() {
  const [isModal, setIsModal] = useState(false);
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: Hero_lot,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };
  return (
    <>
      <section className="hero">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-6">
              <h1>
                Creating <span className="green"> Web3 Space </span>For Better
                World To <span className="green">Work Together</span>
              </h1>
              <div className="hero-btn">
                <button href="/" className="hero-btn-1" onClick={() => setIsModal(true)}>
               Sign Up  <AiOutlineArrowRight/>
                </button>
                <button className="hero-btn-2" >
                Buy Now
                </button>
              </div>
              
            </div>
            <div className="col-md-6 text-center align-items-center">
              {/* <img
                className="hero-img"
                src={Heroe}
                alt=""
              /> */}
              <Lottie 
	    options={defaultOptions}
        className='loti-1'
      />
            </div>
          </div>
        </div>

        <div className="pop-up-sign">
          {isModal && <Model setIsModal={setIsModal} />}
        </div>
        <div className="presale-hero-box">
<PresaleMain/>
              </div>
      </section>
    </>
  );
}

export default Hero;
