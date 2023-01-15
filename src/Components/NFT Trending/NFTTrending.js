import React from "react";
import "./NFTTrending.css";


function NFTTrending() {
  return (
    <>
      <section className="nft-trending">
        <div className="container ">
          {/* <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide> */}
          <div className="nft-trending-head text-center ">
            <h1>
              Trending <span className="green">NFTs</span>
            </h1>
          </div>
          <div className="trending-nft-outerbox">
            <div className="justify-content-center align-items-center test">
              <div className="trending-nft-grid-container ">

                <div className="trending-nft-box">                  
                  <div className="trending-nf-img-green "><img src='https://ik.imagekit.io/cforcrypto/Dework/nft_market/Rectangle_138.png?ik-sdk-version=javascript-1.4.3&updatedAt=1670059984626' alt="" /></div>
                  <div className="trending-nft-text-wrap">
                      <div className="">Defraudment <div>0.09 ETH  1/14</div></div>
                      <div>91</div>
                  </div>
                </div>

                <div className="trending-nft-box">                  
                  <div className="trending-nf-img-yellow "><img src='https://ik.imagekit.io/cforcrypto/Dework/nft_market/Rectangle_139.png?ik-sdk-version=javascript-1.4.3&updatedAt=1670059984666' alt="" /></div>
                  <div className="trending-nft-text-wrap">
                      <div className="">Defraudment <div>0.09 ETH  1/14</div></div>
                      <div>91</div>
                  </div>
                </div>

                <div className="trending-nft-box">                  
                  <div className="trending-nf-img-green "><img src='https://ik.imagekit.io/cforcrypto/Dework/nft_market/Rectangle_140.png?ik-sdk-version=javascript-1.4.3&updatedAt=1670059985040'  alt=""/></div>
                  <div className="trending-nft-text-wrap">
                      <div className="">Defraudment <div>0.09 ETH  1/14</div></div>
                      <div>91</div>
                  </div>
                </div>

                <div className="trending-nft-box">                  
                  <div className="trending-nf-img-yellow"><img src='https://ik.imagekit.io/cforcrypto/Dework/nft_market/Rectangle_141.png?ik-sdk-version=javascript-1.4.3&updatedAt=1670059984849' alt="" /></div>
                  <div className="trending-nft-text-wrap">
                      <div className="">Defraudment <div>0.09 ETH  1/14</div></div>
                      <div>91</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="nft-border-dashed-cover">{ Array.from({ length:20}).map((_, index) => {
            return(<span key={index} className ="nft-border-dashed"> </span>)
          })
        }</div>
        </div>
      </section>
    </>
  );
}

export default NFTTrending;
