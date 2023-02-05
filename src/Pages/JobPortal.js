import Warning from 'Components/Common/Warning'
import Footer from 'Components/Footer/Footer'
import Jobs from 'Components/Jobs/Jobs'
import Navbar from 'Components/Navbar/Navbar'

import React from 'react'

function JobPortal() {
  return (
    <>
  
        <Navbar/>
        <Jobs/>
       
 <Warning/>
    <Footer/>
    </>
  )
}

export default JobPortal