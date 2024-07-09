import './HeroCareers.scss';
import bannerGlow from '../../assets/icons/26178-banner-glow.png';
import heroCareersBackground from '../../assets/images/12-hero-careers-background.png';

const HeroCareers = () => {
  return (
    <section className="hero-careers">
      <div className="hero-careers__background" style={{ backgroundImage: `url(${heroCareersBackground})` }}></div>
      <div className="hero-careers__wrapper">
        <div className="hero-careers__content">
            <div className='hero-careers__content__box1'>
                <img src={bannerGlow} alt="Shadow War Banner Glow" className="hero-careers__content__banner-glow" />
            </div>
            
            <div className='hero-careers__content__title'>CAREERS</div>

            <div className='hero-careers__content__text hero-careers__content__text--mobile'>
                <p>We believe that the best way to win is as a team; our studio is nothing without you. </p>
            </div>
            <div className='hero-careers__content__text hero-careers__content__text--tablet'>
                <p>We believe that the best way to win is as a team;</p>
                <p>our studio is nothing without you.</p>
            </div>
                
        </div>
        
      </div>
    </section>
    
  );
};

export default HeroCareers;