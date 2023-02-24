import React, { useState } from "react";
import styles from "CSS/DeelanceContract.module.css";

const Box = ({ title, children }) => {
  return (
    <div className={styles.box}>
      <h2 className={styles.boxTitle}>{title}</h2>

      {children}
    </div>
  );
};

function DeelanceContract() {
  const [text, setText] = useState(
    "0xbC720e21c0c06b3df0C10Ebdf93D8A930C42288A"
  );

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(text);
      console.log("Text copied to clipboard");
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  }

  return (
    <div className={styles.wrapper}>
      <div className="container">
        <header>
          <h1
            className={`${styles.title} green text-center text-uppercase mb-3`}
            style={{ fontWeight: "bold" }}
          >
            Deelance Contract
          </h1>

          <p className="text-center white mb-0">
            Use the contract information below to add the $DLANCE token to your
            wallet.
          </p>
        </header>

        <main>
          <Box title="Address">
            <div className={styles.contractAddressWrapper}>
              <div className={styles.addressDiv}>
                <p
                  className={`${styles.subtitle} white mb-0 cut-text`}
                  style={{ "--width": "98%" }}
                >
                  {text}
                </p>
              </div>
              <button onClick={handleCopy} className={styles.copyTextBtn}>
                Copy
              </button>
            </div>

            <p className={`${styles.warning} mb-0`}>
              Please do not send any tokens to this address as they will be
              lost.
            </p>
          </Box>
          <Box title="Decimal">
            <p className={styles.subtitle}>18</p>
          </Box>
          <Box title="Network">
            <p className={styles.subtitle}>Ethereum</p>
          </Box>
          <Box title="Token Symbol">
            <p className={styles.subtitle}>$DLANCE</p>
          </Box>
        </main>
      </div>
    </div>
  );
}

export default DeelanceContract;
