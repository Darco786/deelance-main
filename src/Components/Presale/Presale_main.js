import React, { useState ,useContext,useEffect, useRef} from 'react'
import { Link } from 'react-router-dom';
import UserContext from "../../UserContext";
import './Presale.css'
import { ethers } from "ethers";
import { TokenList } from "../../Constants/Constants";

function Presale_main() {
  const [showComp,setShowComp]=useState(false);
  const { connectWallet,provider, contracts, account } = useContext(UserContext);
  const [balances, setBalances] = useState({ BNB: 0 })
  const tokenElement = useRef()
  const nftAmountElement = useRef()

  const handleClick = async (e) => {
    e.preventDefault();
    if (!account) {
      const success = await connectWallet();
      if (!success) {
        alert('please connect to wallet')
      
      }
    }
    setShowComp(!showComp);
  };
  useEffect(() => {
    if (!account) {
      setBalances({
        BNB: 0,
        USDT: 0,
        USDC: 0,
        BUSD: 0,
        DAI: 0,
        IBAT: 0,
      })
    } else {
      const getBNBBalance = async () => {
        const balance = await provider.getBalance(account)
        return ethers.utils.formatEther(balance)
      }

      const getTokenBalances = async (token) => {
        console.log(token, " getting balance")
        const balance = await contracts[token].balanceOf(account)
        const decimals = (await contracts[token].decimals()).toNumber()
        console.log("success")
        return balance.div("1" + "0".repeat(decimals)).toNumber()
      }

      const getAllBalances = async () => {
        const balances = { BNB: await getBNBBalance() }
        for (const token of TokenList) {
          balances[token] = await getTokenBalances(token)
        }
        setBalances(balances)
      }

      getAllBalances()
    }

  }, [account])

  const buyNFT = async (e) => {
    e.preventDefault();

    if (!account) {
      return
    }

    const token = tokenElement.current.value
    const nftAmount = nftAmountElement.current.value

    try {
      let transaction = null;
      if (token == "BNB") {
        const bnbAmount = await contracts.Main.getBNBAmount(nftAmount)
        console.log(bnbAmount.toString())
        transaction = await contracts.Main.buyWithBNB(nftAmount, { value: bnbAmount.toString() })
      } else if (token == "IBAT") {
        const ibatAmount = await contracts.Main.getIBATAmount(nftAmount.toString())
        const all = await contracts['IBAT'].allowance(account, contracts.Main.address)
        console.log("allowance",all.toString())
       if (all.toString() < ibatAmount.toString()) {
        await contracts.IBAT.approve(contracts.Main.address, ibatAmount.toString())
        } else {
        transaction = await contracts.Main.buyWithIBAT(nftAmount.toString())
        }
      } else {
        const tokenIndex = TokenList.indexOf(token)
        const tokenAmount = await contracts.Main.getTokenAmount(nftAmount.toString(), tokenIndex)
        const alla = await contracts[token].allowance(account, contracts.Main.address)
        if (alla.toString() < tokenAmount.toString()) {
        await contracts[token].approve(contracts.Main.address, tokenAmount.toString())
        } else {
        transaction = await contracts.Main.buyWithUSD(nftAmount.toString(), tokenIndex)
        }
      }
      const tx_result = await transaction.wait()
      alert(`Successfully bought domain. TX: ${tx_result.transactionHash}`)
      console.log("transaction", tx_result.transactionHash)
    } catch (error) {
      alert("Error occured during transaction. Please check the browser console.\n" + error.reason)
      console.error("Transaction Error:", error.reason)
    }
  }
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
                <h3>Round-1 PreSale</h3>
                <span className="span-btn">$250 min / $20,000 max</span>
                <p>Deelance Official Contracts</p>
                <p className='green'> <Link to='/how-to-buy' target='_blank'>How To Buy</Link> </p>
              </div>
              <div className="price-box text-center">
                <h1>
                  $ 0.018 <span className="sp-white">/$DLANCE</span>
                </h1>
                
              </div>

              {showComp?
              <form>
                    <div class="form-row">
                      <div class="form-group ">
                        <label for="inputnumber">Select Currency:</label>
                        {/* <input
                          type="number"
                          class="form-control"
                          placeholder="ETH"
                        /> */}
                        <select class="form-control form-select" ref={tokenElement}>
                        <option value="BNB">Balance: {balances.BNB} BNB</option>
                      {TokenList.map(((token, index) => (
                        <option key={index} value={token}>Balance: {balances[token]} {token}</option>
                      )))}
                        </select>
                      </div>
                      <div class="form-group ">
                        <label for="inputnum">Enter $Dlance amount:</label>
                        <input
                          type="number"
                          class="form-control"
                          placeholder="1000"
                          ref={nftAmountElement}
                        />
                      </div>
                    </div>
                  </form>
           :
           <div>
            
           </div>}
              
              {showComp?  <div className="text-center align-items-center d-flex jsa ">
            
            <a href='/' className="p1-btn"
             onClick={buyNFT}>Buy Now</a>
            <a href="/" className="p1-btn">Buy with Card</a>
      

        </div> : 
         <div className="text-center align-items-center d-flex jsa ">
            
         <a href='/' className="p1-btn" onClick={handleClick}>{account ? "Presale" : "Connect Wallet"}</a>
   

     </div>}

             
            </div>
          
          </div>
          <p className='white count-down text-center'>
            <span className='green'>24</span> HOURS, <span className='green'>38</span> MINUTES, <span className='green'>0</span> SECONDS Remaining</p>
        </div>
       
     
      </div>
    </div>
  </section>
  )
}

export default Presale_main