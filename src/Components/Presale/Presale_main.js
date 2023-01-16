import React from 'react'
import './Presale.css'
function Presale_main() {
  return (
    <section className="main-page">
    <div className="container">

      <div className="row justify-content-center presale-section"  >
       
        <div className="col-md-12">
          <div className="head-bar">
            <div className="fill-bar">

            </div>
            <img src="https://ik.imagekit.io/cforcrypto/fire.webp" alt="" className="fire-1" />
            <img src="https://ik.imagekit.io/cforcrypto/Group_64.png" alt="" className="bullet-1" />
          </div>
          <p className='bar-info'>progress(<span className='green'> $0</span> / $700,000 )</p>
          <div className="pre-box-1">
            <div className="pre-box-2">
              <div className="head-title text-center">
                <h3>PreSale Sale</h3>
                <span className="span-btn">$250 min / $20,000 max</span>
                <p>Deelance Official Contracts</p>
              </div>
              <div className="price-box text-center">
                <h1>
                  $ 0.018 <span className="sp-white">/$DLANCE</span>
                </h1>
              </div>

              <div className="text-center align-items-center d-flex jsa ">
            
                  <a href='/' className="p1-btn">Connect Wallet</a>
            

              </div>
            </div>
          
          </div>
          <p className='white'><span className='green'>24</span> HOURS, <span className='green'>38</span> MINUTES, <span className='green'>0</span> SECONDS Remaining</p>
        </div>
       
     
      </div>
    </div>
  </section>
  )
}

export default Presale_main