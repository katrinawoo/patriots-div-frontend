import "./ContactsPage.scss";
import HeroContacts from "../../components/HeroContacts/HeroContacts";
import FooterLogo from "../../components/FooterLogo/FooterLogo";
import ContactsForm from "../../components/ContactsForm/ContactsForm";
import Header from "../../components/Header/Header";
import heroBackground from "../../assets/images/13-hero-team-background.png";

const ContactsPage = () => {
  
  return (
    <main>
        <header>
          <div className="contacts-page__background" style={{ backgroundImage: `url(${heroBackground})` }}></div>
          <Header />
        </header>
        <HeroContacts />
        <div className="contacts-page__wrapper">
          <section className="contacts-page__header">
            <div className="contacts-page__header__tagline contacts-page__tagline">
                <p>Reach out and</p>
            </div>
            <h1 className="contacts-page__header__title">Connect with us</h1>
            <div className="contacts-page__header__about">
                <p>You can contact the team at Patriots Division through socials, or shoot us a message below.</p>
            </div>
          </section>
        <ContactsForm />
        <FooterLogo className="contacts-page-page__footer" />
      </div>
    </main>
  );
};

export default ContactsPage;