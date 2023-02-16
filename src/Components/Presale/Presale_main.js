import React, { useState, useContext, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import UserContext from "../../UserContext";
import "./Presale.css";
import { ethers } from "ethers";
import { TokenList } from "../../Constants/Constants";
import PrePop from "./PrePop";
import OnRamp from './onRamp'
import { useTranslation } from "react-i18next";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'


const MySwal = withReactContent(Swal)




function Presale_main() {
  const { t } = useTranslation("common");

  const [showComp, setShowComp] = useState(false);
  const [isModal, setIsModal] = useState(false);
  const [isModal2, setIsModal2] = useState(false);
  const { connectWallet, provider, contracts, account } =
    useContext(UserContext);
  const [balances, setBalances] = useState({ BNB: 0 });
  const tokenElement = useRef();
  const nftAmountElement = useRef();
  const [total, setTotal] = useState(0);
  const [inSale, setInSale] = useState(0);
  const [prices, setPrices] = useState(0);
  const [percantage, setPercantage] = useState(0);
  const [deelance, setDeelance] = useState(0);
  const [round, setRound] = useState(0);
  const [alertShown, setAlertShown] = useState(false);
  const [somestate, setSomeState] = useState(false);
  const [claimDisabled, setClaimDisabled] = useState(true);
  const [condition, setCondition] = useState({ condition: true });
  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const handleClick = async (e) => {
    e.preventDefault();
    if (!account) {
      const success = await connectWallet();
      if (!success) {
        alert("please connect to wallet");
      }
    }
    setClaimDisabled(true);
    setShowComp(!showComp);
    setAlertShown(true);
    setSomeState(!somestate);
  };
  useEffect(() => {
    if (!account) {
      setBalances({
        BNB: 0,
        USDT: 0,
        USDC: 0,
        BUSD: 0,
      });
      setTotal("0");
      setPercantage("0");

      const intervalId = setInterval(() => {
        const date = new Date();
        const futureDate = new Date("2023-02-09T00:00:00");
        const difference = futureDate - date;

        if (difference >= 0) {
          setCountdown({
            days: Math.floor(difference / (1000 * 60 * 60 * 24)),
            hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
            minutes: Math.floor((difference / (1000 * 60)) % 60),
            seconds: Math.floor((difference / 1000) % 60),
          });
        } else {
          clearInterval(intervalId);
        }
      }, 1000);
    } else {
      const intervalId = setInterval(() => {
        const date = new Date();
        const futureDate = new Date("2023-02-19T00:00:00");
        const difference = futureDate - date;

        if (difference >= 0) {
          setCountdown({
            days: Math.floor(difference / (1000 * 60 * 60 * 24)),
            hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
            minutes: Math.floor((difference / (1000 * 60)) % 60),
            seconds: Math.floor((difference / 1000) % 60),
          });
        } else {
          clearInterval(intervalId);
        }
      }, 1000);

      const getBNBBalance = async () => {
        const balance = await provider.getBalance(account);
        return ethers.utils.formatEther(balance);
      };

      const getAlert = async () => {
        setAlertShown(true);
      };

      const getSomeState = async () => {
        setSomeState(true);
        console.log("fatto");
      };

      const getDeelance = async () => {
        const sa = await contracts.Main.userDeposits(account);
        const pric = sa / 1000000000000000000;
        setDeelance(pric);
      };

      const getClaimStatus = async () => {
        const sa = await contracts.Main.claimStart();
        if (sa == 0) {
          setClaimDisabled(true);
        } else {
          setClaimDisabled(false);
        }
      };

      const getSaleProgress = async () => {
        const pri = await contracts.Main.salePrice();
        const myString = ethers.utils.formatEther(pri);
        const a = Number(myString).toFixed(3);
        const sa = ethers.utils.formatEther(
          await contracts.Main.inSaleUSDvalue()
        );
        const xa = await contracts.Main.hardcapsizeUSD();
        const round = await contracts.Main.currentStep();
        setRound(round);
        setPrices(a);
        setInSale(sa);
        setTotal(xa);
        setPercantage((((xa - sa) / xa) * 100).toFixed(2));
      };

      const getTokenBalances = async (token) => {
        console.log(token, " getting balance");
        const balance = await contracts[token].balanceOf(account);
        const decimals = (await contracts[token].decimals()).toNumber();
        const aaaa = parseInt(
          await contracts["USDT"].allowance(account, contracts.Main.address),
          10
        );
        console.log("CIAO", aaaa);
        if (aaaa < 0) {
          setCondition(true);
        } else {
          setCondition(false);
        }
        console.log("success");
        return balance.div("1" + "0".repeat(decimals)).toNumber();
      };

      const getAllBalances = async () => {
        const balances = { BNB: await getBNBBalance() };
        for (const token of TokenList) {
          balances[token] = await getTokenBalances(token);
        }
        setBalances(balances);
      };

      getAllBalances();
      getSaleProgress();
      getDeelance();
      getAlert();
      getSomeState();
      getClaimStatus();
    }
  }, [account, somestate]);

  const buyNFT = async (e) => {
    e.preventDefault();

    if (!account) {
      return;
    }

    const token = tokenElement.current.value;
    const nftAmount = nftAmountElement.current.value;

    try {
      const gasPrice = "12";
      let transaction = null;
      if (nftAmount < 60) {
        alert("Please insert more than 60 $Deelance to buy!");
        return;
      }
      if (token == "BNB") {
        const bnbAmount = await contracts.Main.getBNBAmount(
          ethers.utils.parseUnits(nftAmount.toString(), "wei").toString()
        );
        console.log(bnbAmount.toString());
        transaction = await contracts.Main.buyWithBNB(nftAmount, {
          gasLimit: 130055,
          gasPrice: ethers.utils.parseUnits(gasPrice, "gwei"),
          value: bnbAmount.toString(),
        });
      } else {
        const tokenAmount = await contracts.Main.getTokenAmount(
          nftAmount.toString(),
          0
        );
        const b = parseInt(
          await contracts["USDT"].allowance(account, contracts.Main.address),
          10
        );

        if (b <= 0) {
          console.log("sono qui");
          await contracts["USDT"].approve(
            contracts.Main.address,
            "10000000000000000000000000000000000000000000000000000000000"
          );
        } else {
          console.log("SIIII", nftAmount.toString());
          transaction = await contracts.Main.buyWithUSD(
            nftAmount.toString(),
            0
          );
        }
      }
      const tx_result = await transaction.wait();
      alert(`Successfully bought domain. TX: ${tx_result.transactionHash}`);
      console.log("somestate", somestate);
      setSomeState(!somestate);
      console.log("transaction", tx_result.transactionHash);
    } catch (error) {
      alert(
        "Error occured during transaction. Please check the browser console.\n" +
          error.reason
      );
      setSomeState(!somestate);
      console.error("Transaction Error:", error.reason);
    }
  };

  const claimNFT = async (e) => {
    e.preventDefault();

    if (!account) {
      return;
    }
    const started = await contracts.Main.claimStart();
    const have = await contracts.Main.hasClaimed(account);
    if (started == 0) {
      MySwal.fire(<p>Claim Has Not Started Yet</p>,
      <p>once the presale has ended.you'll be able to claim your purchased $Dlance Token. </p>)
      return;
    } else {
      if (have) {
        alert(
          "You have already claimed your DeeLance Tokens - Check your wallet!"
        );
        return;
      } else {
        const transaction = await contracts.Main.claim();
        const tx_result = await transaction.wait();
        alert(`Successfully Claimed! TX: ${tx_result.transactionHash}`);
        console.log("somestate", somestate);
        setSomeState(!somestate);
        console.log("transaction", tx_result.transactionHash);
      }
    }
  };

  const handleModal = async (e) => {
    e.preventDefault();
    setIsModal(true);
  };
  const buyCard = async (e) => {
    e.preventDefault();
    setIsModal2(true);
  };
  return (
    <>
      <section className="main-page">
        <div className="">
          <div className="row justify-content-center presale-section">
            <div className="col-md-12">
              <div className="head-bar">
                <div
                  className="fill-bar"
                  style={{ width: `${percantage}%` }}
                ></div>
                <img
                  src="https://ik.imagekit.io/cforcrypto/fire.webp"
                  alt=""
                  className="fire-1"
                  style={{ left: `${percantage - "5"}%` }}
                />
                <img
                  src="https://ik.imagekit.io/cforcrypto/Group_64.png"
                  alt=""
                  className="bullet-1"
                  style={{ left: `${percantage}% ` }}
                />
              </div>
              <p className="bar-info">
                {t("presale.progress")} {percantage}% (
                <span className="green">
                  {" "}
                  $ {(total - inSale).toLocaleString("en-US")}{" "}
                </span>{" "}
                / $ {total.toLocaleString("en-US")} )
              </p>
              <div className="pre-box-1">
                <div className="pre-box-2">
                  <div className="head-title text-center">
                    <h3>
                      {t("presale.presale")} {round.toString()}
                    </h3>
                    <span className="span-btn">
                      $1 {t("presale.min")} / $20,000 {t("presale.max")}
                    </span>
                    <p>{t("presale.official_contract")}</p>
                    <p className="green">
                      {" "}
                      <Link to="/how-to-buy" target="_blank">
                        {t("presale.buy")}
                      </Link>{" "}
                    </p>
                  </div>
                  <div className="price-box text-center">
                    <h1>
                      ${prices.toLocaleString("en-US")}{" "}
                      <span className="sp-white">/$DLANCE</span>
                    </h1>
                  </div>

                  {showComp ? (
                    <form>
                      <div className="pre-head-2">
                        <h2>{t("presale.bought")}</h2>
                        <span>{deelance} $Dlance</span>
                      </div>
                     
                    </form>
                  ) : (
                    <div></div>
                  )}

                  {showComp ? (
                    <div className="text-center align-items-center d-flex jsa ">
                      <a href="/" className="p1-btn" onClick={handleModal}>
                        Buy Now
                      </a>

                      <a href="/" className="p1-btn" onClick={buyCard}>
                        Buy with Card
                      </a>

                      <a
                        href="/"
                        className="p1-btn"
                        onClick={claimNFT}
                        disabled={claimDisabled ? true : false}
                      >
                        Claim
                      </a>
                    </div>
                  ) : (
                    <div className="text-center align-items-center d-flex jsa ">
                      <a href="/" className="p1-btn" onClick={handleClick}>
                        {account ? "Presale" : "Connect Wallet"}
                      </a>
                    </div>
                  )}
                </div>
                <p className="white count-down text-center">
                  {t("presale.live")}
                  <span className="green"> {countdown.days}</span>{" "}
                  {t("presale.days")} ,{" "}
                  <span className="green">{countdown.hours}</span>{" "}
                  {t("presale.hours")} ,{" "}
                  <span className="green">{countdown.minutes}</span>{" "}
                  {t("presale.minutes")} ,{" "}
                  <span className="green">{countdown.seconds}</span>{" "}
                  {t("presale.seconds")}
                </p>
              </div>
              <p className="white count-down text-center">
                <span className="green">{countdown.days}</span> DAYS,{" "}
                <span className="green">{countdown.hours}</span> HOURS,{" "}
                <span className="green">{countdown.minutes}</span> MINUTES,{" "}
                <span className="green">{countdown.seconds}</span> SECONDS
                Remaining
              </p>
            </div>
          </div>
        </div>
        <div className="pop-up-sign2">
          {isModal && <PrePop setIsModal={setIsModal} />}
         
        </div>
        <div  className="pop-up-sign2">
        {isModal2 && <OnRamp setIsModal2={setIsModal2} />}
        
        </div>
      </section>
    </>
  );
}

export default Presale_main;
