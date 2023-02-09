import Footer from 'Components/Footer/Footer'
import Navbar from 'Components/Navbar/Navbar'
import React from 'react'

function notFound() {
  return (
    <>
    <Navbar/>
<section className='not-page'>
<img src='https://ik.imagekit.io/cforcrypto/Dework/404-error.png' alt='404'/>
</section>

    <Footer/>
    
   </>
  )
}

export default notFound