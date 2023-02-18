import React from "react";
import Accordion from "Components/Accordion";

function FAQ() {
  return (
    <div>
      <div className="container">
        <h1 className="text-center white mb-5">FAQ</h1>

        <div className="accordion-list">
          <Accordion title="What is Deelance?">
            <p>
              Deelance is building freelancing and Recruitment platform based on
              Web3. In Deelance the Freelancer can tokenized the selling assets
              into NFT to get ownership of the underlying asset or piece of
              work. With Low fee, Fast payment, transparency and data ownership
              Deelance is redefining how freelancers connect with potential
              employers and buyers in metaverse
            </p>
          </Accordion>
          <Accordion title="Why Deelance?">
            <div className="pt-2"></div>
            <p>✔️Advance Gig Framework with NFT subscription model</p>
            <p>✔️Multiple Crypto payment option</p>
            <p>✔️NDA ( Buyer & Seller )</p>
            <p>✔️On-chain KYC to avoid bad Actors</p>
            <p>✔️Extra benefit with Data ownership </p>
            <p>✔️Smart contract escrow </p>
            <p>✔️Smart contract job Placements</p>
          </Accordion>
          <Accordion title="How can I buy DLANCE? ">
            <p>
              $DLANCE can be purchased on{" "}
              <a href="deelance.com" target="_blank">
                deelance.com
              </a>{" "}
              using ETH, USDT, or via credit card through our partner.
            </p>

            <p>
              You can purchase ETH using your card, then swap for $DLANCE.
              Ensure you have enough ETH to buy $DLANCE and cover the gas fees
            </p>
          </Accordion>
          <Accordion title="What is next for Deelance?">
            <p>
              We have big plans for Deelance following our presale! Accelerate
              the development and adoption of Deelance freelancing platform,
              Metaverse, App along with NFT Marketplace, and continued
              onboarding local ambassadors to enhance our Global presence.
            </p>
          </Accordion>
        </div>
      </div>
    </div>
  );
}

export default FAQ;