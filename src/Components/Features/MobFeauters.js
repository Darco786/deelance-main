import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import {Pagination,Autoplay } from "swiper";
function MobFeauters() {
  return (
    <>
    <Swiper  pagination={true}  autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
         modules={[Pagination,Autoplay]} className="mySwiper mob-feat">
      <SwiperSlide>
        <div className='container'>
        <div className="row justify-content-center align-items-center">
        <div className="col-md-4">
         
            
         <div className="feat-box">
           <div className="feat-img">
             <img
               src="https://ik.imagekit.io/cforcrypto/Dework/icons/Asset_11-8.png?ik-sdk-version=javascript-1.4.3&updatedAt=1672928695067"
               alt=""
             />
           </div>

           <h3 className="green">Business simplified</h3>
           <p> 
             Post a job or apply for one in{" "}
             a minute.No browser plugins, 3rd
             party apps, credit card details, or wallet-linking necessary.
             Fast, efficient & easy the way
             blockchain is meant to be
           </p>
           <p> </p>
         </div>
       </div>
       <div className="col-md-4">
         <div className="feat-box">
           <div className="feat-img">
             <img
               src="https://ik.imagekit.io/cforcrypto/Dework/icons/Asset_12-8.png?ik-sdk-version=javascript-1.4.3&updatedAt=1672928695065"
               alt=""
             />
           </div>

           <h3 className="green">Transparency</h3>
           <p>
             By implementing an{" "}
           automated dispute system and
             reputation stored on the blockchain. we’re building a{" "}
             trustworthy platform all
             stakeholders can rely on.
           </p>
           <p></p>
         </div>
       </div>
      </div>
            
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className='container'>
            <div className='row justify-content-center align-items-center'>
      
            <div className="col-md-4">
            <div className="feat-box">
              <div className="feat-img">
                <img
                  src="https://ik.imagekit.io/cforcrypto/Dework/icons/Asset_16-8.png?ik-sdk-version=javascript-1.4.3&updatedAt=1672928695045"
                  alt=""
                />
              </div>

              <h3 className="green">Ownership</h3>
              <p>
                With NFT (NFT) get ownership of the underlying{" "}
                asset or piece of work.{" "}
                 NFTs can represent: art, music,
                photographs, designs, web pages, animations, videos, royalty or
                copyright of work etc.
              </p>
              <p></p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="feat-box">
              <div className="feat-img">
                <img
                  src="https://ik.imagekit.io/cforcrypto/Dework/icons/Asset_15-8.png?ik-sdk-version=javascript-1.4.3&updatedAt=1672928695083"
                  alt=""
                />
              </div>

              <h3 className="green">Low Fees</h3>
              <p>
                Our decentralized and reputation
                stored on the blockchain. freelance market
               ecosystem alower fees by
                directly connecting Employers and Freelancers.
              </p>
              <p></p>
            </div>
          </div>
        
            </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className='container'>
        <div className="row justify-content-center align-items-center mtf-60">
     
        <div className="col-md-4">
            <div className="feat-box">
              <div className="feat-img">
                <img
                  src="https://ik.imagekit.io/cforcrypto/Dework/icons/Asset_13-8.png?ik-sdk-version=javascript-1.4.3&updatedAt=1672928695075"
                  alt=""
                />
              </div>

              <h3 className="green">Escrow</h3>
              <p>
                With escrow, Freelancers have the{" "}
                guarantee of payment for their
                services, while the Employer’s funds are safe until the
                Freelancer produces the expected work. As it’s based on{" "}
                smart contracts.
              </p>
              <p> </p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="feat-box">
              <div className="feat-img">
                <img
                  src="https://ik.imagekit.io/cforcrypto/Dework/icons/Asset_14-8.png?ik-sdk-version=javascript-1.4.3&updatedAt=1672928695073"
                  alt=""
                />
              </div>

              <h3 className="green">Fast Payments</h3>
              <p>
                You can use Crypto get paid for
                your services quickly and avoid currency{" "}
                exchange and possible commission
                rates{" "}
              </p>
            </div>
          </div>
        </div>
        </div>
      </SwiperSlide>
    
      
    </Swiper>
  </>
  )
}

export default MobFeauters