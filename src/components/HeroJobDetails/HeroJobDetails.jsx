import './HeroJobDetails.scss';
import bannerGlow from '../../assets/icons/26178-banner-glow.png';
import heroCareersBackground from '../../assets/images/12-hero-careers-background.png';

const HeroJobDetails = () => {
  return (
    <section className="hero-job-details">
      <div className="hero-job-details__background" style={{ backgroundImage: `url(${heroCareersBackground})` }}></div>
      <div className="hero-job-details__wrapper">
        <div className="hero-job-details__content">
            <div className='hero-job-details__content__box1'>
                <img src={bannerGlow} alt="Shadow War Banner Glow" className="hero-job-details__content__banner-glow" />
            </div>
            <article>
                <div className='hero-job-details__content__title'>CONCEPT ARTIST</div>
                <div className='hero-job-details__content__details'>
                    <div>Level: Senior</div>
                    <div>|</div>
                    <div>Compensation: 100k - 110k per year</div>
                </div>
            </article>   
        </div>
        
      </div>
    </section>
    
  );
};

export default HeroJobDetails;