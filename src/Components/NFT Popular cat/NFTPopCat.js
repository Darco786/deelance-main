import React from "react";
import "./NFTPopCat.css";



function NFTPopCat() {
  return (
    <>
      <section className="pop-cat">
     
        <div className="container ">
        <img src="https://ik.imagekit.io/cforcrypto/Dework/Vector_6.png?ik-sdk-version=javascript-1.4.3&updatedAt=1670059241889" alt="" className="border-green"/>
          {/* <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide> */}
          <div className="pop-cat-head text-center ">
            <h1>
              Popular <span className="green">Categories</span>
            </h1>
          </div>
          <div className="pop-cat-nft-outerbox">
            <div className="justify-content-center align-items-center">
              <div className="pop-cat-grid-container ">

                <div className="pop-cat-nft-box">                  
                  <div className="pop-cat-nft-img ">
                  <img src="https://ik.imagekit.io/cforcrypto/Dework/nft_market/Vector.png?ik-sdk-version=javascript-1.4.3&updatedAt=1670059984662" alt="" className="music"/>                   
               
                  </div>
                  <div className="pop-cat-nft-text">
                      ART
                  </div>
                </div>

                <div className="pop-cat-nft-box">                  
                  <div className="pop-cat-nft-img ">
                  <img src="https://ik.imagekit.io/cforcrypto/Dework/nft_market/Vector-1.png?ik-sdk-version=javascript-1.4.3&updatedAt=1670059984626" alt="domain" className="domain"/>  
                  </div>
                  <div className="pop-cat-nft-text">
                      MUSIC
                  </div>
                </div>

                <div className="pop-cat-nft-box">                  
                  <div className="pop-cat-nft-img ">
                  <img src="https://ik.imagekit.io/cforcrypto/Dework/nft_market/Vector-3.png?ik-sdk-version=javascript-1.4.3&updatedAt=1670059984853" alt="" className="art"/>    
                
                  </div>
                  <div className="pop-cat-nft-text">
                      DOMAIN NAMES
                  </div>
                </div> 

                <div className="pop-cat-nft-box">                  
                  <div className="pop-cat-nft-img ">
                    <img src="https://ik.imagekit.io/cforcrypto/Dework/nft_market/Vector-2.png?ik-sdk-version=javascript-1.4.3&updatedAt=1670059984631" alt=""/>                   
                  </div>
                  <div className="pop-cat-nft-text">
                      VIRTUAL WORLDS
                  </div>
                </div> 

                <div className="pop-cat-nft-box">                  
                  <div className="pop-cat-nft-img ">
                    <img src="https://ik.imagekit.io/cforcrypto/Dework/nft_market/Union.png?ik-sdk-version=javascript-1.4.3&updatedAt=1670059984626" alt="" className="trend"/>                  
                  </div>
                  <div className="pop-cat-nft-text">
                      TRADING CARDS
                  </div>
                </div> 

                <div className="pop-cat-nft-box">                  
                  <div className="pop-cat-nft-img ">
                    <img src="https://ik.imagekit.io/cforcrypto/Dework/nft_market/Union-1.png?ik-sdk-version=javascript-1.4.3&updatedAt=1670059984638" alt="" className="more"/>                
                  </div>
                  <div className="pop-cat-nft-text">
                      MORE
                  </div>
                </div> 


              </div>
            </div>
          </div>
       
         <img src="https://ik.imagekit.io/cforcrypto/Dework/Vector_6.png?ik-sdk-version=javascript-1.4.3&updatedAt=1670059241889" alt="" className="border-green-2"/>
        </div>
      </section>
    </>
  );
}

export default NFTPopCat;
