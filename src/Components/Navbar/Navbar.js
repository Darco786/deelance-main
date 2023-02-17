import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaAngleDown } from "react-icons/fa";
import OutsideClickDetector from "hooks/OutsideClickDetector";
import useMediaQuery from "hooks/useMediaQuery";
import NavLogo from "../../assets/main-logo.svg";
import { useTranslation } from "react-i18next";

const languages = [
  { value: "en", text: "english" },
  { value: "en", text: "English" },
  { value: "ar", text: "Arabic" },
  { value: "ru", text: "russian" },
  { value: "ja", text: "japan" },
];

function Navbar() {
  const [showMediaIcons, setShowMediaIcons] = useState(false);
  // const [isOpen, setIsOpen] =useState(false)

  const [isHover, setIsHover] = useState(false);

  const isBellow1024px = useMediaQuery("(max-width : 64em)");

  const dropdownRef = OutsideClickDetector(() => {
    setIsHover(false);
  });
  const dropdownToggler = () => {
    setIsHover((val) => !val);
  };
  const { t } = useTranslation("common");

  const [lang, setLang] = useState("en");

  // This function put query that helps to
  // change the language
  const handleChange = (e) => {
    setLang(e.target.value);
    let loc = "/";
    window.location.replace(loc + "?lng=" + e.target.value);
  };

  return (
    <>
      <nav className="container main-nav">
        <div className="logo">
          {" "}
          <div className="d-flex foot-logo">
            <NavLink to="/">
              <img src={NavLogo} alt="" className="" />
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
              <NavLink to="/">{t("header.links.home")}</NavLink>
            </li>
            <li className="drop-btn" ref={dropdownRef}>
              <a
                href="#drop"
                className="dp"
                onMouseEnter={() => (isBellow1024px ? null : setIsHover(true))}
                onMouseLeave={() => (isBellow1024px ? null : setIsHover(false))}
                onClick={() => dropdownToggler()}
              >
                {t("header.links.about")}
                <FaAngleDown />
              </a>
              <div
                className={isHover ? "dropdown-active" : "dropdown"}
                onMouseEnter={() => (isBellow1024px ? null : setIsHover(true))}
                onMouseLeave={() => (isBellow1024px ? null : setIsHover(false))}
              >
                <li>
                  <a href="/"> {t("header.links.about_us_menu.1")}</a>
                </li>
                <li>
                  <NavLink to="/team">
                    {t("header.links.about_us_menu.2")}
                  </NavLink>
                </li>

                <li>
                  <a
                    href="https://docs.dework.live/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {t("header.links.about_us_menu.3")}
                  </a>
                </li>
              </div>
            </li>

            <li>
              <NavLink to="/rewards">{t("header.links.win")}</NavLink>
            </li>
            <li>
              <NavLink to="/nft-market">
                {t("header.links.nft_marketplace")}
              </NavLink>
            </li>
            <li>
              <NavLink to="/job-portal">{t("header.links.find_job")}</NavLink>
            </li>
            <li>
              <NavLink to="/academy">{t("header.links.academy")}</NavLink>
            </li>

            {/* <li>
              <select
                value={lang}
                onChange={handleChange}
                className="explore-btn"
              >
                {languages.map((item) => {
                  return (
                    <option key={item.value} value={item.value}>
                      {item.text}
                    </option>
                  );
                })}
              </select>
            </li> */}
          </ul>
        </div>
        {/* hamburget menu start  */}
        <div className="hamburger-menu">
          <a href="#home" onClick={() => setShowMediaIcons(!showMediaIcons)}>
            <GiHamburgerMenu />
          </a>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
