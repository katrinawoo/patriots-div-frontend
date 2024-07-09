import './HeroGames.scss';
import heroBackground from '../../assets/images/14-hero-background-image.png';
import girlImage from '../../assets/images/26047-hero-girl.png';
import banner from '../../assets/logo/26074-banner.png';
import swLogo from '../../assets/logo/SW_LOGO.png';

const HeroGames = () => {
  return (
    <section className="hero-games">
      <div className="hero-games__background" style={{ backgroundImage: `url(${heroBackground})` }}></div>
      <div className="hero-games__wrapper">
        <img src={girlImage} alt="Hero Girl" className="hero-games__girl-img" />
        <div className="hero-games__content">
            <div className='hero-games__content__box1'>
                <img src={banner} alt="Shadow War Banner" className="hero-games__content__banner" />
                <div className='hero-games__content__title hero-games__content__title1'>SHADOW</div>
            </div>
            <div className='hero-games__content__box2'>
                <div className='hero-games__content__title'>WAR</div>
                <img src={swLogo} alt="Shadow War Logo" className="hero-games__content__logo" />
            </div>
            <div className='hero-games__content__text hero-games__content__text--mobile'>
                <p>Our next-generation 5v5 hybrid action title blending strategic & thrilling PvP combat.</p>
            </div>
            <div className='hero-games__content__text hero-games__content__text--tablet'>
                <p>Our next-generation 5v5 hybrid action title</p>
                <p>blending strategic & thrilling PvP combat.</p>
            </div>
        </div>
        
      </div>
    </section>
    
  );
};

export default HeroGames;