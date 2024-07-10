// import { useState } from "react";
import { Link } from "react-router-dom";
// import { NavLink, Link, useLocation } from "react-router-dom";
import logo from "../../assets/logo/138-PD-logo.png";
import linkedinIcon from "../../assets/icons/icons8-linkedin-24.png";
import twitterIcon from "../../assets/icons/icons8-twitter-24.png";
// import menuIcon from "../../assets/icons/1193-nav-menu-icon.png";
import "./Footer.scss";

export default function Footer() {
  
  return (
    <footer className="footer">
      <div className="footer__wrapper">
        

        <div className="footer__logo footer__logo--tablet">
                <Link to="/">
                    <img className="footer__logo" src={logo} alt="Patriots Division logo" />
                </Link>
        </div>

        
        <div className="footer__wrapper--tablet">
        <div className="footer__media--box">
                <div className="footer__media--name footer__media--tablet">
                        <p>Patriots Division - 2024</p>
                    </div>

                <div className="footer__media--tagline footer__media--tablet">
                    <p>Break - Surveillance - 20XX</p>
                </div>
            </div>

            <article className="footer__media footer__media--tablet">
                <div className="footer__media--socials">
                    <a href="https://twitter.com/PatriotsPMC" target="_blank" rel="noopener" title="Visit Twitter">
                        <img src={twitterIcon} alt="twitter" className="footer__media__icon"/>
                    </a>
                </div>

                <div className="footer__media--socials">
                    <a href="https://www.linkedin.com/company/patriots-division/" target="_blank" rel="noopener" title="Visit LinkedIn">
                        <img src={linkedinIcon} alt="linkedIn" className="footer__media__icon"/>
                    </a>
                </div>
            </article>
        </div>


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

        <div className="footer__logo footer__logo--mobile">
                <Link to="/">
                    <img className="footer__logo" src={logo} alt="Patriots Division logo" />
                </Link>
        </div>

        <article className="footer__media footer__media--mobile">
            <div className="footer__media--socials">
                <a href="https://twitter.com/PatriotsPMC" target="_blank" rel="noopener" title="Visit Twitter">
                    <img src={twitterIcon} alt="twitter" className="footer__media__icon"/>
                </a>
            </div>

            <div className="footer__media--socials">
                <a href="https://www.linkedin.com/company/patriots-division/" target="_blank" rel="noopener" title="Visit LinkedIn">
                    <img src={linkedinIcon} alt="linkedIn" className="footer__media__icon"/>
                </a>
            </div>
        </article>

        <div className="footer__media--name footer__media--mobile">
                <p>Patriots Division - 2024</p>
            </div>

        <div className="footer__media--tagline footer__media--mobile">
            <p>Break - Surveillance - 20XX</p>
        </div>

      </div>

    </footer>
  );
}
