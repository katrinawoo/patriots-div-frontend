// import { useState } from "react";
import { Link } from "react-router-dom";
// import { NavLink, Link, useLocation } from "react-router-dom";
import logo from "../../assets/logo/138-PD-logo.png";
import linkedinIcon from "../../assets/icons/icons8-linkedin-24.png";
import twitterIcon from "../../assets/icons/icons8-twitter-24.png";
// import menuIcon from "../../assets/icons/1193-nav-menu-icon.png";
import "./Footer.scss";
import { ssrImportKey } from "vite/runtime";

export default function Footer() {
  
  return (
    <footer className="footer">
      <div className="footer__wrapper">
        <article className="footer__content">
            <div className="footer__links footer__links--1">
                <h3>Games</h3>
                <div>
                    <Link to="/">
                        Vision
                    </Link>
                </div>
                <div>
                    <Link to="https:www.shadowwar.com">
                        Shadow War
                    </Link>
                </div>
            </div>

            <div className="footer__links footer__links--2">
                <h3>About</h3>
                <div>
                    <Link to="/team">
                        Work with us
                    </Link>
                </div>
                <div>
                    <Link to="/careers">
                        Jobs
                    </Link>
                </div>
            </div>

            {/* <section className="games-home-page__actions">
                <Link className="games-home-page__actions__button" to="/careers">
                  Check Open Positions <img src={arrowIcon} alt="Right Arrow" className="games-home-page__actions__icon" />
                </Link>
                <div></div>
            </section> */}

        </article>

        <article className="footer__media">
            <div className="footer__media--socials">
                <Link to="https://twitter.com/PatriotsPMC">
                    <img className="footer__logo__icon" src={twitterIcon} alt="Twitter Icon" />
                </Link>
            </div>

            <div className="footer__media--socials">
                <Link to="https://www.linkedin.com/company/patriots-division/">
                    <img className="footer__logo__icon" src={linkedinIcon} alt="LinkedIn Icon" />
                </Link>
            </div>

            <div className="footer__media--name">
                <p>Patriots Division - 2024</p>
            </div>

            <div className="footer__media--tagline">
                <p>Break - Surveillance - 20XX</p>
            </div>
        </article>
        {/* <div className="footer__logo">
          <Link to="/">
            <img className="footer__logo__img" src={logo} alt="patriots division logo" />
          </Link>
        </div>
        
        <nav className="footer__nav">
          <div className="footer__nav--tablet">
            <NavLink
                className={`footer__nav__item ${
                isHomeActive ? "active" : ""
                }`}
                to="/"
            >
                GAMES
            </NavLink>
            
            <NavLink
                className={`footer__nav__item ${
                location.pathname.includes("team") ? "active" : ""
                }`}
                to="/team"
            >
                TEAM
            </NavLink>

            <NavLink
                className={`footer__nav__item ${
                location.pathname.includes("careers") ? "active" : ""
                }`}
                to="/careers"
            >
                CAREERS
            </NavLink>

            <NavLink
                className={`footer__nav__item ${
                location.pathname.includes("contacts") ? "active" : ""
                }`}
                to="/contacts"
            >
                CONTACTS
            </NavLink>
          </div>
          
          <div className="footer__nav--mobile">
            <img
              className="footer__nav__menu-icon"
              src={menuIcon}
              alt="menu icon"
              onClick={toggleModal}
            />
          </div>
        </nav>

        <div className="footer__nav--tablet footer__nav--tablet--empty">
        </div> */}

      </div>

    </footer>
  );
}
