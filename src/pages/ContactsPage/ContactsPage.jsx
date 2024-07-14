import "./ContactsPage.scss";
import React  from "react";
import HeroContacts from "../../components/HeroContacts/HeroContacts";
import FooterLogo from "../../components/FooterLogo/FooterLogo";
import ContactsForm from "../../components/ContactsForm/ContactsForm";

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
        <ContactsForm />
        <FooterLogo className="games-home-page__footer" />
      </div>
    </main>
  );
};

export default ContactsPage;