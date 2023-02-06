import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import { GiHamburgerMenu } from "react-icons/gi";
import {FaAngleDown} from 'react-icons/fa'
import OutsideClickDetector from "hooks/OutsideClickDetector";
import useMediaQuery from "hooks/useMediaQuery";
import Model from 'Components/Popup/Model';
import { useTranslation } from 'react-i18next'

const languages = [
  { value: 'en', text: "Default" },
  { value: 'en', text: "English" },
  { value: 'ar', text: "Arabic" },
  { value: 'ru', text: "russian" },
  { value: 'ja', text: "japan" },

]



function Navbar() {
  const [showMediaIcons, setShowMediaIcons] = useState(false);
  // const [isOpen, setIsOpen] =useState(false)
  const [isModal,setIsModal]=useState(false)
  const [isHover, setIsHover] = useState(false);

  const isBellow1024px = useMediaQuery("(max-width : 64em)");

  const dropdownRef = OutsideClickDetector(() => {
    setIsHover(false);
  });
  const dropdownToggler = () => {
    setIsHover((val) => !val);
  };
const { t } = useTranslation(); 
  
    const [lang, setLang] = useState('en');
  
    // This function put query that helps to 
    // change the language
    const handleChange = e => { 
        setLang(e.target.value);
        let loc = "http://localhost:3000/";
        window.location.replace(loc + "?lng=" + e.target.value);
    }

  return (
    <>
      <nav className="container main-nav">
        <div className="logo">
          {" "}
          <div className="d-flex foot-logo">
            <NavLink to='/'>
            <img
              src="https://ik.imagekit.io/cforcrypto/Dework/find_jobs/logo-white.png?ik-sdk-version=javascript-1.4.3&updatedAt=1669995470971"
              alt=""
              className=""
            />
            </NavLink>
         
          </div>
        </div>
        <div
          className={
            showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"
          }
        >
          <ul>
          <li>
              <NavLink to="/" >{t('main_msg')}</NavLink>
            </li>
            <li className="drop-btn"  ref={dropdownRef}>
              <a href="#drop" className="dp" 
              onMouseEnter={() =>
                isBellow1024px ? null : setIsHover(true)
              }
              onMouseLeave={() =>
                isBellow1024px ? null : setIsHover(false)
              }
              onClick={() => dropdownToggler()}
              >{t('about')}<FaAngleDown/></a>
              <div className={isHover?'dropdown-active':"dropdown"}
               onMouseEnter={() =>
                isBellow1024px ? null : setIsHover(true)
              }
              onMouseLeave={() =>
                isBellow1024px ? null : setIsHover(false)
              }>
            <li>
              <a href="/">About </a>
            </li>
            <li>
              <NavLink to="/team">{t('team')}</NavLink>
            </li>
           
           <li>
            <a href="https://docs.dework.live/" target='_blank' rel="noreferrer">Whitepaper</a>
           </li>
            </div>
            </li>
         
       
            <li>
              <NavLink to="/rewards" >Win 250k$</NavLink>
            </li>
            <li>
              <NavLink to="/nft-market" >NFT marketplace</NavLink>
            </li>
            <li>
              <NavLink to="/job-portal" >Find Job</NavLink>
            </li>
            <li>
              <NavLink to="/academy" >Academy</NavLink>
            </li>
            
            <li>
              <a href="#team" className="explore-btn" onClick={()=>setIsModal(true)}>Sign Up</a>
            </li>
            <li>
            <select value={lang} onChange={handleChange}>
                {languages.map(item => {
                    return (<option key={item.value} 
                    value={item.value}>{item.text}</option>);
                })}
            </select>
            </li>


          
          </ul>
        </div>
        {/* hamburget menu start  */}
        <div className="hamburger-menu">
          <a href="#home" onClick={() => setShowMediaIcons(!showMediaIcons)}>
            <GiHamburgerMenu />
          </a>
        </div>
      </nav>
      <div className='pop-up-sign' >
      {isModal && <Model setIsModal={setIsModal} />}
      </div>
    </>
  );
}

export default Navbar;
