import "./ContactsPage.scss";
import React, { useState }  from "react";
import HeroContacts from "../../components/HeroContacts/HeroContacts";
import arrowIcon from "../../assets/icons/Vector-button-arrow.png";
import FooterLogo from "../../components/FooterLogo/FooterLogo";
import { sendContactMessage } from "../../utils/api";
import contactUsValidator from "../../utils/contactUsValidator";

const ContactsPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = contactUsValidator({ name, email, message });
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    try {
      await sendContactMessage(name, email, message);
      setSuccessMessage('Thanks Patriot, message sent successfully!');
      setErrorMessage('');
      setErrors({});
      setName('');
      setEmail('');
      setMessage('');
    } catch (error) {
      setErrorMessage('Failed mission to send message. Please try again.');
      setSuccessMessage('');
    }
  };

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
          <form className="contacts-page__form" onSubmit={handleSubmit}>
            <div className="contacts-page__form--group">
              <label htmlFor="name"><h2>Name:</h2></label>
              <input
                type="text"
                id="name"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your Name"
              />
              {errors.name && <p className="error-message">{errors.name}</p>}
            </div>
            <div className="contacts-page__form--group">
              <label htmlFor="email"><h2>Email:</h2></label>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your.email@example.com"
              />
              {errors.email && <p className="error-message">{errors.email}</p>}
            </div>
            <div className="contacts-page__form--group">
              <label htmlFor="message"><h2>Message:</h2></label>
              <textarea
                id="message"
                name="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Your Message"
              />
              {errors.message && <p className="error-message">{errors.message}</p>}
            </div>
            <button type="submit" className="contacts-page__submit__button">
              Send Message <img src={arrowIcon} alt="Right Arrow" className="contacts-page__submit__icon" />
            </button>
          </form>
          {successMessage && <p className="success-message">{successMessage}</p>}
          {errorMessage && <p className="error-message">{errorMessage}</p>}
        </div>
        <FooterLogo className="games-home-page__footer" />
      </div>
    </main>
  );
};

export default ContactsPage;