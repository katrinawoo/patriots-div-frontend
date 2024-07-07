import { useState } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import logo from "../../assets/logo/138-PD-logo.png";
import menuIcon from "../../assets/icons/1193-nav-menu-icon.png";
import HeaderModal from "../HeaderModal/HeaderModal";
import "./Header.scss";

export default function Header() {
  const location = useLocation();

  const isHomeActive =
    location.pathname === "" || location.pathname.includes("home");

  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
  setIsModalOpen(!isModalOpen);
  };

  return (
    <header className="header">
      <div className="header__wrapper">
        <div className="header__logo">
          <Link to="/">
            <img className="header__logo__img" src={logo} alt="patriots division logo" />
          </Link>
        </div>
        
        <nav className="header__nav">
          <div className="header__nav--tablet">
            <NavLink
                className={`header__nav__item ${
                isHomeActive ? "active" : ""
                }`}
                to="/"
            >
                GAMES
            </NavLink>
            
            <NavLink
                className={`header__nav__item ${
                location.pathname.includes("team") ? "active" : ""
                }`}
                to="/team"
            >
                TEAM
            </NavLink>

            <NavLink
                className={`header__nav__item ${
                location.pathname.includes("careers") ? "active" : ""
                }`}
                to="/careers"
            >
                CAREERS
            </NavLink>

            <NavLink
                className={`header__nav__item ${
                location.pathname.includes("contacts") ? "active" : ""
                }`}
                to="/contacts"
            >
                CONTACTS
            </NavLink>
          </div>
          
          <div className="header__nav--mobile">
            <img
              className="header__nav__menu-icon"
              src={menuIcon}
              alt="menu icon"
              onClick={toggleModal}
            />
          </div>
        </nav>

        <div className="header__nav--tablet header__nav--tablet--empty">
        </div>

      </div>

      <HeaderModal isOpen={isModalOpen} toggleModal={toggleModal} />
    </header>
  );
}
