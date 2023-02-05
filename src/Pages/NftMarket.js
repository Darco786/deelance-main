import NFT from "Components/NFT/NFT";
import NFTTrending from "Components/NFT Trending/NFTTrending";
import NFTPopCat from "Components/NFT Popular cat/NFTPopCat";
import React from "react";
import Navbar from "Components/Navbar/Navbar";
import Footer from "Components/Footer/Footer";
import Warning from "Components/Common/Warning";

function NftMarket() {
  return (
    <>
      
        
       
       <Navbar/>
        <NFT />
        <NFTPopCat />
        <NFTTrending />
      <Warning/>
      <Footer/>
      
    </>
  );
}

export default NftMarket;
