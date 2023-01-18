import React, { useState } from 'react'
import './Presale.css'
function Presale_main() {
  const [showComp,setShowComp]=useState(false)

  const handleClick = (e) => {
    e.preventDefault();
    setShowComp(!showComp);
  };
  return (
    <section className="main-page">
    <div className="">

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
                <p>How To Claim</p>
              </div>
              <div className="price-box text-center">
                <h1>
                  $ 0.018 <span className="sp-white">/$DLANCE</span>
                </h1>
                
              </div>

              {showComp?<form>
                    <div class="form-row">
                      <div class="form-group ">
                        <label for="inputnumber">Select Currency:</label>
                        {/* <input
                          type="number"
                          class="form-control"
                          placeholder="ETH"
                        /> */}
                        <select class="form-control">
                          <option>ETH</option>
                          <option>USDT</option>
                        </select>
                      </div>
                      <div class="form-group ">
                        <label for="inputnum">Enter $Dlance amount:</label>
                        <input
                          type="number"
                          class="form-control"
                          placeholder="1000"
                        />
                      </div>
                    </div>
                  </form>
           :
           <div>
            
           </div>}
              
              {showComp?  <div className="text-center align-items-center d-flex jsa ">
            
            <a href='/' className="p1-btn">Buy Now</a>
            <a href="/" className="p1-btn">Buy with Card</a>
      

        </div> : 
         <div className="text-center align-items-center d-flex jsa ">
            
         <a href='/' className="p1-btn" onClick={handleClick}>Connect Wallet</a>
   

     </div>}

             
            </div>
          
          </div>
          <p className='white count-down text-center'><span className='green'>24</span> HOURS, <span className='green'>38</span> MINUTES, <span className='green'>0</span> SECONDS Remaining</p>
        </div>
       
     
      </div>
    </div>
  </section>
  )
}

export default Presale_main