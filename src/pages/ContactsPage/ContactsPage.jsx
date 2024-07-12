import "./ContactsPage.scss";
import React from "react";
import HeroContacts from "../../components/HeroContacts/HeroContacts";
import arrowIcon from "../../assets/icons/Vector-button-arrow.png";
import FooterLogo from "../../components/FooterLogo/FooterLogo";

const ContactsPage = () => {
  return (
    <main>
        <HeroContacts />
        <div className="contacts-page__wrapper">
          
          <section className="contacts-page__header">

            <div className="contacts-page__header__tagline contacts-page__tagline">
                <p>Reach out and</p>
            </div>

            <h1 className="contacts-page__header__title">Connect with us</h1>

            <div className="contacts-page__header__about">
                <p>You can contact the team at Patriots Division through socials,</p>
                <p>or shoot us a message below.</p>
            </div>

          </section>


        <div className="contacts-page__form__wrapper">
          <form className="contacts-page__form">
            <div className="contacts-page__form--group">
              <label htmlFor="name"><h2>Name:</h2></label>
              <input type="text" id="name" name="name" required />
            </div>
            <div className="contacts-page__form--group">
              <label htmlFor="email"><h2>Email:</h2></label>
              <input type="email" id="email" name="email" required />
            </div>
            <div className="contacts-page__form--group">
              <label htmlFor="message"><h2>Message:</h2></label>
              <textarea id="message" name="message" required />
            </div>
            <button type="submit" className="contacts-page__submit__button">
              Send Message <img src={arrowIcon} alt="Right Arrow" className="contacts-page__submit__icon" />
            </button>
          </form>
        </div>
        <FooterLogo className="games-home-page__footer" />
      </div>
    </main>
  );
};

export default ContactsPage;