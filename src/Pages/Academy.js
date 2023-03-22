import AcademyPage from "Components/AcademyPage";
import Warning from "Components/Common/Warning";
import { Helmet } from "react-helmet";
import Footer from "Components/Footer/Footer";
import Navbar from "Components/Navbar/Navbar";
import React from "react";
import PageLayout from "layouts/PageLayout";

function Academy() {
  return (
    <>
      <Helmet>
        <meta
          name="Academy"
          content="Interested in learning about blockchain, cryptocurrency, security, technology, or following along with tutorials? Deelance Academy has all that and more!"
        />
        <meta
          name="keywords"
          content="Freelance, fiver , upwork , jobs , NFT , content , marketing, freelancers, works , metaverse, web3, Binance,Deelance"
        />
        <meta
          name="description"
          content="All the tools you need for a successful career in web3 freelancing . Training programs, courses, live webinars, and more !"
        />
        <title>Academy</title>
      </Helmet>

      <PageLayout>
        <AcademyPage />
      </PageLayout>
    </>
  );
}

export default Academy;
