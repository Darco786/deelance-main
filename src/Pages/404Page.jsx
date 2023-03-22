import Footer from "Components/Footer/Footer";
import Navbar from "Components/Navbar/Navbar";
import PageLayout from "layouts/PageLayout";
import React from "react";
import Error from "../assets/error.png";

function notFound() {
  return (
    <PageLayout>
      <section className="not-page mb-4 mb-sm-5">
        <img src={Error} alt="404" />
      </section>
    </PageLayout>
  );
}

export default notFound;
