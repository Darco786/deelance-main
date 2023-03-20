import React, { useState, useContext, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import UserContext from "../../UserContext";
import "./Presale.css";
import { ethers } from "ethers";
import { TokenList } from "../../Constants/Constants";
import PrePop from "./PrePop";
import OnRamp from "./onRamp";
import { useTranslation } from "react-i18next";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import Fire from "../../assets/fire.webp";
import Bullet from "../../assets/de.webp";
import ConnectWalletBtn from "Components/ConnectWalletBtn";
import PresaleRemainingTimer from "Components/PresaleRemainingTimer";
import { getProvider } from "@wagmi/core";

const MySwal = withReactContent(Swal);

function Presale_main() {
  const { t } = useTranslation("common");
  const provider = getProvider();
  const [showComp, setShowComp] = useState(false);
  const [isModal, setIsModal] = useState(false);
  const [isModal2, setIsModal2] = useState(false);
  const { connectWallet, contracts, account } = useContext(UserContext);
  const [balances, setBalances] = useState({ ETH: 0 });
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
  const [aa, setNetwork] = useState();
  const [claimDisabled, setClaimDisabled] = useState(true);
  const [condition, setCondition] = useState({ condition: true });

  useEffect(() => {
    if (!account) {
      setBalances({
        ETH: 0,
        USDT: 0,
        USDC: 0,
        BUSD: 0,
      });
      setTotal("0");
      setPercantage("0");

      const getPr = async () => {
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
      getPr();
    } else {
      
      const handlePopupClose = () => {
        getAllBalances();
        getSaleProgress();
        getDeelance();
        getAlert();
        getSomeState();
        getClaimStatus();
      };

      const getETHBalance = async () => {
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
        console.log("Account wallet", account)
        const sa = await contracts.Main.userDeposits(account);
        const pric = sa / 1000000000000000000;
        console.log("Account balance deelance", pric)
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
        const balance = await contracts["USDT"].balanceOf(account);
        const decimals = (await contracts["USDT"].decimals()).toNumber();
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
        const balances = { ETH: await getETHBalance() };
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
  
  const claimNFT = async (e) => {
    e.preventDefault();

    if (!account) {
      return;
    }
    const started = await contracts.Main.claimStart();
    const have = await contracts.Main.hasClaimed(account);
    if (started == 0) {
      MySwal.fire(
        <p>Claim Has Not Started Yet</p>,
        <p>
          once the presale has ended.you'll be able to claim your purchased
          $Dlance Token.{" "}
        </p>
      );
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

  const handlePopupClose = () => {
  setSomeState(!somestate);
  };
  const handleModal = async (e) => {
    e.preventDefault();
    setIsModal(true);
  };

  const buyCard = async (e) => {
    e.preventDefault();
    setIsModal2(true);
  };

  console.log("re-rendered");

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
                  src={Fire}
                  alt=""
                  className="fire-1"
                  style={{ left: `${percantage - "5"}%` }}
                />
                <img
                  src={Bullet}
                  alt=""
                  className="bullet-1"
                  style={{ left: `${percantage}% ` }}
                />
              </div>
              <div className="-presale-progress">
                <p className="bar-info">
                  <span>
                    {t("Progress")} {percantage}%
                  </span>{" "}
                </p>
                <span className="white">
                  {" "}
                  (
                  <span className="green">
                    {" "}
                    $ {(total - inSale).toLocaleString("en-US")}{" "}
                  </span>{" "}
                  / $ {total.toLocaleString("en-US")} ){" "}
                </span>
              </div>
              <div className="pre-box-1">
                <div className="pre-box-2">
                  <div className="head-title text-center mb-3">
                    <h3>
                      {t("PreSale - Round")} {round.toString()}
                    </h3>
                    <span className="span-btn mb-2 d-inline-block">
                      $10 {t("Min")} / $20,000 {t("Max")}
                    </span>
                    <a
                      href="https://etherscan.io/address/0xbc720e21c0c06b3df0c10ebdf93d8a930c42288a#code"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <p>{t("Deelance Official Contracts")}</p>
                    </a>

                    <p className="green">
                      {" "}
                      <Link to="/how-to-buy" target="_blank">
                        {t("How To Buy")}
                      </Link>{" "}
                    </p>
                  </div>

                  <div className="price-box text-center">
                    <h1>
                      ${prices.toLocaleString("en-US")}{" "}
                      <span className="sp-white">/ $DLANCE</span>
                    </h1>
                  </div>

                  {showComp ? (
                    <div className="pre-head-2 ">
                      <h2>{t("presale.bought")}</h2>
                      <span>{deelance} $Dlance</span>
                    </div>
                  ) : (
                    <div></div>
                  )}
                  {account && (
                    <div className="pre-head-2">
                      <h2 className="mb-0">
                        {t("Your Balance")} {deelance} $Dlance
                      </h2>
                    </div>
                  )}
                  {account ? (
                    <div className="presale-buttons">
                      <a href="/" className="p1-btn" onClick={handleModal}>
                        {t("Buy Now")}
                      </a>

                      <a href="/" className="p1-btn" onClick={buyCard}>
                        {t("Buy with Card")}
                      </a>

                      <a
                        href="/"
                        className="p1-btn"
                        onClick={claimNFT}
                        disabled={claimDisabled ? true : false}
                      >
                        {t("Claim")}
                      </a>
                    </div>
                  ) : (
                    <div className="text-center align-items-center d-flex jsa mb-3">
                      {/* <Web3Button icon={false} /> */}
                      <ConnectWalletBtn normal={true} />
                    </div>
                  )}
                </div>
                {/* <p className="white count-down text-center"> 
                  {t("presale.live")}
                  <span className="green"> {countdown.days}</span>{" "}
                  {t("presale.days")} ,{" "}
                  <span className="green">{countdown.hours}</span>{" "}
                  {t("presale.hours")} ,{" "}
                  <span className="green">{countdown.minutes}</span>{" "}
                  {t("presale.minutes")} ,{" "}
                  <span className="green">{countdown.seconds}</span>{" "}
                  {t("presale.seconds")}
                </p> */}
                <div className="mx-auto" style={{ width: "fit-content" }}>
                  <p className="white count-down next-p mb-2">
                    {" "}
                    <span className="equal-label">
                      {t("Next Round Price")}
                    </span>{" "}
                    <span>:</span>
                    <span className="green">
                      {" "}
                      {round.toString() == "1"
                        ? "$0.040 / $DLANCE"
                        : "$0.045 / $DLANCE"}{" "}
                    </span>
                  </p>

                  <p className="white count-down next-p mb-0">
                    {" "}
                    <span className="equal-label">
                      {t("Listing Price")}
                    </span>{" "}
                    <span>:</span>
                    <span className="green"> $ 0.050 / $DLANCE</span>
                  </p>
                </div>
              </div>
              {/* <p className="white count-down text-center mb-0">
                <span className="green">{countdown.days}</span> DAYS,{" "}
                <span className="green">{countdown.hours}</span> HOURS,{" "}
                <span className="green">{countdown.minutes}</span> MINUTES,{" "}
                <span className="green">{countdown.seconds}</span> SECONDS
                Remaining
              </p> */}

              <PresaleRemainingTimer
                somestate={somestate}
                setSomeState={setSomeState}
              />
            </div>
          </div>
        </div>
        <div className="pop-up-sign2">
        {isModal && <PrePop setIsModal={setIsModal} onClose={handlePopupClose} />}
      </div>
        <div className="pop-up-sign2">
          {isModal2 && <OnRamp setIsModal2={setIsModal2} />}
        </div>
      </section>
    </>
  );
}

export default Presale_main;
