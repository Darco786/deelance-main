import Footer from 'Components/Footer/Footer'
import Navbar from 'Components/Navbar/Navbar'
import { Helmet } from "react-helmet";
import Team from 'Components/Team/Team'
import React from 'react'

function TeamPage() {
  return (
    <>
 <Helmet>
  <title>Team</title>
 </Helmet>
      <Navbar/>
        <Team/>
       

   <Footer/>
    </>
    
  )
}

export default TeamPage