import AcademyPage from "Components/AcademyPage";
import Warning from "Components/Common/Warning";

import Footer from "Components/Footer/Footer";
import Navbar from "Components/Navbar/Navbar";
import React from "react";

function Academy() {
  return (
    <>
      <Navbar />
      <AcademyPage />
<Warning/>
     <Footer/>
    </>
  );
}

export default Academy;
