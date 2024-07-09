import './HeroTeam.scss';
import bannerGlow from '../../assets/icons/26178-banner-glow.png';
import heroTeamBackground from '../../assets/images/13-hero-team-background.png';

const HeroTeam = () => {
  return (
    <section className="hero-team">
      <div className="hero-team__background" style={{ backgroundImage: `url(${heroTeamBackground})` }}></div>
      <div className="hero-team__wrapper">
        <div className="hero-team__content">
            <div className='hero-team__content__box1'>
                <img src={bannerGlow} alt="Shadow War Banner Glow" className="hero-team__content__banner-glow" />
            </div>
            
            <div className='hero-team__content__title'>TEAM</div>
                
            <div className='hero-team__content__text hero-team__content__text--mobile'>
                <p>Our studio comes from all over the world, sharing one common goal - making the best possible games we can.</p>
            </div>
            <div className='hero-team__content__text hero-team__content__text--tablet'>
                <p>Our studio comes from all over the world, sharing</p>
                <p>one common goal - making the best possible games we can.</p>
            </div>
        </div>
        
      </div>
    </section>
    
  );
};

export default HeroTeam;