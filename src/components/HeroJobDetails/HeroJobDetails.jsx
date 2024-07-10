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
            <article className='hero-job-details__content__box2'>
                <div className='hero-job-details__content__title'>CONCEPT ARTIST</div>
                <div className='hero-job-details__content__text'>
                    <div>Level: Senior</div>
                    <div className='hero-job-details__content__text--tablet'>|  </div>
                    <div className='hero-job-details__content__text--tablet'>Compensation: 100k - 110k per year</div>
                    <div className='hero-job-details__content__text--mobile hero-job-details__content__text__box'>
                        <div className='hero-job-details__content__text--mobile'>Compensation:</div>
                        <div className='hero-job-details__content__text--mobile'>100k - 110k per year</div>
                    </div>
                </div>
            </article>   
        </div>
        
      </div>
    </section>
    
  );
};

export default HeroJobDetails;