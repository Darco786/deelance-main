import React from "react";

function PrePop({ setIsModal }) {
  return (
    <div className="modalBackground">
      <div className="modalContainer-2">
        <div className="titleCloseBtn">
          <button
            onClick={() => {
              setIsModal(false);
            }}
          >
            X
          </button>
        </div>
        <div className="">
          <section className="section-box">
            <div className="formWrapper-2">
              <header className="pop-pre-h">
                <h2 className=" mb-10px lh-1">Eth Balance:0</h2>
              </header>
              <div className="d-flex pre-step-1">
                <h3>Step-1: You Pay</h3>
                <div className="select-coin">
                  <select id="option" style={{background:'#00e069'}}>
                    <option value="ETH">ETH</option>
                    <option value="USDT">USDT</option>
                  </select>
                </div>
              </div>
              <div className="d-flex">
                <form className="dee-bal">
                  <input
                    type="number"
                    className="fs-26px  weight-3 in-put-pre"
                    placeholder="0.00"
                    name="full_name"
                    required
                  />

                  <button type="submit" className="fs-26px  weight-5 pointer btn-max">
                    Max
                  </button>
                </form>
              </div>
              <div className="d-flex pre-step-1">
                <h3>Step-2: You Get</h3>
                <div className="dee-coin white">$dlance</div>
              </div>
              <div className="">
                <input
                  type="number"
                  className="fs-26px  weight-3 in-put-pre wt-100 "
                  placeholder="0.00"
                  name="full_name"
                  required
                />
               
              </div>
              <div className="mt-auto">
                
              <button type="submit" className="pre-pop-btn">
                  Buy Now
                </button>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default PrePop;
