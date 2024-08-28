import React from "react";
import "./Navbar.css";
import { MdOutlineClose } from "react-icons/md";
import { FaLinkedinIn } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

const Navbar = () => {
  let openMenu = useSelector((state) => state.menuReducer.openMenu);
  let lang = useSelector((state) => state.languageReducer.lang);
  let { t } = useTranslation();
  function handleClose() {
    dispatch({ type: "closeMenu", payload: openMenu });
  }
  const dispatch = useDispatch();
  return (
    <div className={openMenu ? "open  " : "navbar-right"}>
      <div className="close-menu" onClick={handleClose}>
        <div>
          <MdOutlineClose className="closebtn" color="white" fontSize={18} />
        </div>
      </div>
      <div className="navbar-menu">
        <span className="navbar-header-text">{t("Menu")}</span>
        <ul className="navbar-menu-links">
          <li>
            <Link to={`/${lang}/about`} onClick={handleClose}>
              {t("About")}
            </Link>
          </li>
          <li>
            <Link to={`/${lang}/projects`} onClick={handleClose}>
              {t("Projects")}
            </Link>
          </li>
          <li>
            <Link to={`/${lang}/design`} onClick={handleClose}>
              {t("Design and MEP")}
            </Link>
          </li>
          <li>
            <Link to={`/${lang}/bimservices`} onClick={handleClose}>
              {t("BIM Services")}
            </Link>
          </li>
          <li>
            <Link to={`/${lang}/news`} onClick={handleClose}>
              {t("News")}
            </Link>
          </li>
          <li>
            <Link to={`/${lang}/careers`} onClick={handleClose}>
              {t("Career")}
            </Link>
          </li>
          <li>
            <Link to={`/${lang}/contact`} onClick={handleClose}>
              {t("Contact")}
            </Link>
          </li>
        </ul>
      </div>
      <div className="navbar-bottom d-flex align-items-center">
        <ul>
          <li>
            <Link to="">
              <FaLinkedinIn fontSize=".875em" color="#1a1a1a" />
            </Link>
          </li>
          <li>
            <Link to="">
              <FaFacebookF fontSize=".875em" color="#1a1a1a" />
            </Link>
          </li>
          <li>
            <Link to="">
              <FaYoutube fontSize=".875em" color="#1a1a1a" />
            </Link>
          </li>
        </ul>
        <div className="legal">
          <Link to="">{t("Legal and policies")}</Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
