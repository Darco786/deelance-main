import React from "react";
import "./Tokenomic.css";
import { AiOutlineArrowRight } from "react-icons/ai";
import TokenImg from "../../assets/token.svg";
import Blue from "../../assets/feature/cir/blue.png";
import Dblue from "../../assets/feature/cir/dblue.png";
import Green from "../../assets/feature/cir/green.png";
import Lblue from "../../assets/feature/cir/lblue.png";
import Lpur from "../../assets/feature/cir/lpur.png";
import Org from "../../assets/feature/cir/org.png";
import Pink from "../../assets/feature/cir/pink.png";
import Pur from "../../assets/feature/cir/pur.png";
import Dash from "../../assets/dash.svg";
import DeelanceContract from "layouts/Home/DeelanceContract";
import { useTranslation } from "react-i18next";

function Tokenomic() {
  const { t } = useTranslation("common");

  return (
    <section className="token">
      <div className="container justify-content-center text-center">
        <div className="token-head text-center">
          <h1>{t("Tokenomics")}</h1>
          <img src={Dash} alt="" />
        </div>
        <div className="row align-items-center">
          <div className="col-md-4">
            <div className="to-1">
              <p>
                {t("Team")} - 10% <img src={Org} alt="" />{" "}
              </p>
              <p>
                {t("Reserved/Ecosystem")} - 15% <img src={Lpur} alt="" />
              </p>
              <p className="ml-6">
                {t("Cex")} - 16% <img src={Pur} alt="" />
              </p>
              <p className="ml-6">
                {t("Advisor/Partnership")} - 6% <img src={Green} alt="" />
              </p>
            </div>
          </div>

          <div className="col-md-4 text-center">
            <img src={TokenImg} alt="" className="token-img" />
            {/* <ReactApexChart options={state.options} series={state.series} type="polarArea" width={600} /> */}
            {/* <div style={{ margin: "auto" }} className="main-sub-btn">
                <a href="#team" className="demo-btn">
                  BUY NOW <AiOutlineArrowRight />
                </a>
              </div> */}
          </div>

          <div className="col-md-4">
            <div className="to-2 ">
              <p>
                <img src={Lblue} alt="" /> {t("Rewards / Airdrop")} - 2%{" "}
              </p>
              <p>
                <img src={Pink} alt="" /> {t("Liquidity")} - 15%
              </p>
              <p>
                <img src={Dblue} alt="" /> {t("Presale")} - 33%
              </p>
              <p>
                <img src={Blue} alt="" /> {t("Private")} - 3%
              </p>
            </div>
            <div className="to-3 ">
              <p>
                {t("Rewards / Airdrop")} - 2% <img src={Lblue} alt="" />{" "}
              </p>
              <p>
                {t("Liquidity")} - 15% <img src={Pink} alt="" />{" "}
              </p>
              <p className="ml-48">
                {t("Presale")} - 33% <img src={Dblue} alt="" />{" "}
              </p>
              <p className="ml-8">
                {t("Private")} - 3% <img src={Blue} alt="" />{" "}
              </p>
            </div>
          </div>
        </div>
      </div>

      <DeelanceContract />
    </section>
  );
}

export default Tokenomic;
