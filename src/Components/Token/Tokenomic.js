import React from 'react'
import './Tokenomic.css'
import {AiOutlineArrowRight} from 'react-icons/ai'


function Tokenomic() {

  return (
    <section className='token'>
        <div className='container justify-content-center text-center'>
          <div className='token-head text-center'>
            <h1>Tokenomics</h1>
            <img src="https://ik.imagekit.io/cforcrypto/Dework/icons/Group_427325103.png" alt=""/>
          </div>
          <div className='row align-items-center'>

            <div className='col-md-4'>
              <div className='to-1'>
                <p>Team - 10% <img src="https://ik.imagekit.io/cforcrypto/Dework/token/Ellipse_22-6.png?ik-sdk-version=javascript-1.4.3&updatedAt=1672652602964" alt=""/> </p>
                <p>Reserved/Ecosystem - 15% <img src="https://ik.imagekit.io/cforcrypto/Dework/token/Ellipse_22-4.png?ik-sdk-version=javascript-1.4.3&updatedAt=1672652603018" alt=""/></p>
                <p className='ml-6'>Cex - 16% <img src="https://ik.imagekit.io/cforcrypto/Dework/token/Ellipse_22-7.png?ik-sdk-version=javascript-1.4.3&updatedAt=1672652602977" alt=""/></p>
                <p className='ml-6'>Advisor/Partnership - 6% <img src="https://ik.imagekit.io/cforcrypto/Dework/token/Ellipse_22-5.png?ik-sdk-version=javascript-1.4.3&updatedAt=1672652602962" alt=""/></p>

              </div>
              
            </div>

            <div className='col-md-4 text-center'>
            <img src="https://ik.imagekit.io/cforcrypto/Dework/Group_1261152779.png" alt="" className='token-img'/>
            {/* <ReactApexChart options={state.options} series={state.series} type="polarArea" width={600} /> */}
            <div style={{margin:'auto'}} className='main-sub-btn'>
            <a href="#team" className="demo-btn">BUY NOW  <AiOutlineArrowRight/></a>
            </div>
              </div>

              <div className='col-md-4'>
              <div className='to-2 '>
                <p><img src="https://ik.imagekit.io/cforcrypto/Dework/token/Ellipse_22.png?ik-sdk-version=javascript-1.4.3&updatedAt=1672652602987" alt=""/> Rewards / Airdrop - 2%  </p>
                <p><img src="https://ik.imagekit.io/cforcrypto/Dework/token/Ellipse_22-2.png?ik-sdk-version=javascript-1.4.3&updatedAt=1672652602973" alt=""/> Liquidity - 15%</p>
                <p><img src="https://ik.imagekit.io/cforcrypto/Dework/token/Ellipse_22-1.png?ik-sdk-version=javascript-1.4.3&updatedAt=1672652602976" alt=""/> Presale - 33%</p>
                <p><img src="https://ik.imagekit.io/cforcrypto/Dework/token/Ellipse_22-3.png?ik-sdk-version=javascript-1.4.3&updatedAt=1672652602935" alt=""/> Private - 3%</p>

              </div>
              <div className='to-3 '>
                <p>Rewards / Airdrop - 2%  <img src="https://ik.imagekit.io/cforcrypto/Dework/token/Ellipse_22.png?ik-sdk-version=javascript-1.4.3&updatedAt=1672652602987" alt=""/>  </p>
                <p>Liquidity - 15% <img src="https://ik.imagekit.io/cforcrypto/Dework/token/Ellipse_22-2.png?ik-sdk-version=javascript-1.4.3&updatedAt=1672652602973" alt=""/> </p>
                <p className='ml-48'>Presale - 33% <img src="https://ik.imagekit.io/cforcrypto/Dework/token/Ellipse_22-1.png?ik-sdk-version=javascript-1.4.3&updatedAt=1672652602976" alt=""/> </p>
                <p className='ml-8'>Private - 3% <img src="https://ik.imagekit.io/cforcrypto/Dework/token/Ellipse_22-3.png?ik-sdk-version=javascript-1.4.3&updatedAt=1672652602935" alt=""/> </p>

              </div>
              
            </div>
            
          </div>
      
        </div>
        
        </section>
  )
}

export default Tokenomic