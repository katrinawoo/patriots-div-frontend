import React from "react";
import { NavLink } from "react-router-dom";
import "./HeaderModal.scss";
import closeIcon from "../../assets/icons/26259-modal-close-icon.png";
import logoBird from "../../assets/logo/logo-bird.png";

const HeaderModal = ({ isOpen, toggleModal }) => {
  return (
    isOpen && (
      <div className="modal">
        <main className="modal__content">
          <button className="modal__close" onClick={toggleModal}>
            <img src={closeIcon} alt="Close"/>
          </button>
          <NavLink className="modal__item" to="/" onClick={toggleModal}>
            GAMES
          </NavLink>
          <NavLink className="modal__item" to="/team" onClick={toggleModal}>
            TEAM
          </NavLink>
          <NavLink className="modal__item" to="/careers" onClick={toggleModal}>
            CAREERS
          </NavLink>
          <NavLink className="modal__item" to="/contacts" onClick={toggleModal}>
            CONTACTS
          </NavLink>
        </main>
        <footer className="modal__footer">
            <div className="modal__footer__line"></div>
            <div className="modal__footer__text">PATRIOTS DIVISION</div>
            <img src={logoBird} alt="Patriots Division Logo" className="modal__footer__logo" />
        </footer>
      </div>
    )
  );
};

export default HeaderModal;