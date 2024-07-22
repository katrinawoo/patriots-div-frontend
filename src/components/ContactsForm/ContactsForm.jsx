import "./ContactsForm.scss";
import React, { useState } from "react";
import arrowIcon from "../../assets/icons/Vector-button-arrow.png";
import { sendContactMessage } from "../../utils/api";
import contactUsValidator from "../../utils/contactUsValidator";
import SuccessPopup from "../SuccessPopup/SuccessPopup";

const MAX_MESSAGE_LENGTH = 1000;
const ContactsForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [showPopup, setShowPopup] = useState(false);

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
      setShowPopup(true);
    } catch (error) {
      setErrorMessage('Failed mission to send message. Please try again.');
      setSuccessMessage('');
    }
  };

  const handleMessageChange = (e) => {
    const { value } = e.target;
    if (value.length <= MAX_MESSAGE_LENGTH) {
      setMessage(value);
    }
  };

  return (
    <section className="contacts-page__form__wrapper">
      <form className="contacts-page__form" onSubmit={handleSubmit}>
        <div className={`contacts-page__form--group ${errors.name ? 'error' : ''}`}>
          <label htmlFor="name"><h2>Name:</h2></label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your Name"
          />
          {errors.name && <p className="contacts-page__form__error-message">{errors.name}</p>}
        </div>
        <div className={`contacts-page__form--group ${errors.email ? 'error' : ''}`}>
          <label htmlFor="email"><h2>Email:</h2></label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="your.email@example.com"
          />
          {errors.email && <p className="contacts-page__form__error-message">{errors.email}</p>}
        </div>
        <div className={`contacts-page__form--group ${errors.message ? 'error' : ''}`}>
          <label htmlFor="message"><h2>Message:</h2></label>
          <textarea
            id="message"
            name="message"
            value={message}
            onChange={handleMessageChange}
            placeholder="Your Message"
          />
          <p className="character-count">{MAX_MESSAGE_LENGTH - message.length} characters left</p>
          {errors.message && <p className="contacts-page__form__error-message">{errors.message}</p>}
        </div>
        <button type="submit" className="contacts-page__submit__button">
          Send Message <img src={arrowIcon} alt="Right Arrow" className="contacts-page__submit__icon" />
        </button>
      </form>
      {successMessage && <SuccessPopup show={showPopup} title={successMessage} text="" />}
      {errorMessage && <p className="contacts-page__form__error-message">{errorMessage}</p>}
    </section>
  );
};

export default ContactsForm;
