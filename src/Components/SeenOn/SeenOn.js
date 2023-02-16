import React from 'react'
import Mint from '../../assets/seen/mint.png'
import Bct from '../../assets/seen/bct.png'
import Coin from '../../assets/seen/coin.png'
import Crypto from '../../assets/seen/crypto.png'
import Fina from '../../assets/seen/fina.png'
import Krypto from '../../assets/seen/krypto.png'
import Tet from '../../assets/seen/tet.png'
import './seen.css'

function SeenOn() {
  return (
    <section className='seenOn'>
        <div className='container'>
            <div className='seen-grid'>
                <h1>Seen on:</h1>
                <img src={Mint} alt="" className='mint'/>
                <img src={Fina} alt=""/>
                <img src={Krypto} alt="" className='krypto'/>
                <img src={Coin} alt=""/>
                <img src={Bct} alt=""/>
                <img src={Crypto} alt="" className='crypto'/>
                <img src={Tet} alt=""/>

            </div>

        </div>

    </section>
  )
}

export default SeenOn