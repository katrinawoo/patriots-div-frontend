import './HeroContacts.scss';
import bannerGlow from '../../assets/icons/26178-banner-glow.png';
import heroTeamBackground from '../../assets/images/13-hero-team-background.png';

const HeroContacts = () => {
  return (
    <section className="hero-contacts">
      <div className="hero-contacts__background" style={{ backgroundImage: `url(${heroTeamBackground})` }}></div>
      <div className="hero-contacts__wrapper">
        <div className="hero-contacts__content">
            <div className='hero-contacts__content__box1'>
                <img src={bannerGlow} alt="Shadow War Banner Glow" className="hero-contacts__content__banner-glow" />
            </div>
            
            <div className='hero-contacts__content__title'>CONTACTS</div>
                
            <div className='hero-contacts__content__text hero-contacts__content__text--mobile'>
                <p>There are many ways you can reach out to us, we are happy to connect!</p>
            </div>
            <div className='hero-contacts__content__text hero-contacts__content__text--tablet'>
                <p>There are many ways you can reach out to us,</p>
                <p>we are happy to connect!</p>
            </div>
        </div>
        
      </div>
    </section>
    
  );
};

export default HeroContacts;