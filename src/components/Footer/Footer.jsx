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
            <div className="footer__links footer__links__column">
                <div className="footer__links__title">Games</div>
                <div className="footer__links__title--sites">
                    <Link to="/">
                        Vision
                    </Link>
                </div>
                <div className="footer__links__title--sites">
                    <Link to="https:www.shadowwar.com">
                        Shadow War
                    </Link>
                </div>
            </div>

            <div className="footer__links footer__links__column">
                <div className="footer__links__title">About</div>
                <div className="footer__links__title--sites">
                    <Link to="/team">
                        Work with us
                    </Link>
                </div>
                <div className="footer__links__title--sites">
                    <Link to="/careers">
                        Jobs
                    </Link>
                </div>
            </div>

        </article>

        <div className="footer__logo">
                <Link to="/">
                    <img className="footer__logo" src={logo} alt="Patriots Division logo" />
                </Link>
        </div>

        <article className="footer__media">
            <div className="footer__media--socials">
                <Link to="https://twitter.com/PatriotsPMC">
                    <img className="footer__media__icon" src={twitterIcon} alt="Twitter Icon" />
                </Link>
            </div>

            <div className="footer__media--socials">
                <Link to="https://www.linkedin.com/company/patriots-division/">
                    <img className="footer__media__icon" src={linkedinIcon} alt="LinkedIn Icon" />
                </Link>
            </div>
        </article>

        <div className="footer__media--name">
                <p>Patriots Division - 2024</p>
            </div>

        <div className="footer__media--tagline">
            <p>Break - Surveillance - 20XX</p>
        </div>

      </div>

    </footer>
  );
}
