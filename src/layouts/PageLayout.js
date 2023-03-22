import Footer from "Components/Footer/Footer";
import Navbar from "Components/Navbar/Navbar";
import React from "react";
import styles from "CSS/PageLayout.module.css";
import Warning from "Components/Common/Warning";

function PageLayout({ children }) {
  return (
    <div className={styles.wrapper}>
      <Navbar />

      <main>{children}</main>

      <Warning />
      <Footer />
    </div>
  );
}

export default PageLayout;
