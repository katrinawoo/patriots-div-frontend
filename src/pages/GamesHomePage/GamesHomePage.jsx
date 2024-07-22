import { Link } from "react-router-dom";
import arrowIcon from "../../assets/icons/Vector-button-arrow.png";
import "./GamesHomePage.scss";
import FooterLogo from "../../components/FooterLogo/FooterLogo";
import Header from "../../components/Header/Header";
import HeroGames from "../../components/HeroGames/HeroGames";
import GamesHomeContent from "../../components/GamesHomeContent/GamesHomeContent";
import heroBackground from "../../assets/images/14-hero-background-image.png";
import girlImage from "../../assets/images/26047-hero-girl.png"

export default function GamesHomePage() {

  return (
    <main className="games-home-page">
        <header>
            <div className="games-home-page__background" style={{ backgroundImage: `url(${heroBackground})` }}></div>
            <img src={girlImage} alt="Hero Girl" className="games-home-page__girl-img" />
            <Header />
        </header> 
        <div className="games-home-page__wrapper">  
            <HeroGames />
            <section className="games-home-page__actions">
                <a className="games-home-page__actions__button games-home-page__actions__button--game" href="https://www.shadowwar.com" target="_blank" rel="noopener noreferrer">
                    More about the game <img src={arrowIcon} alt="Right Arrow" className="hero-games__actions__icon" />
                </a>
                <div></div>
            </section>
            <section className="games-home-page__header">   
                <div className="games-home-page__header__line-container">
                    <div className="games-home-page__header__line games-home-page__header__gray-line"></div>
                    <div className="games-home-page__header__line games-home-page__header__blue-line"></div>
                </div>

                <article className="games-home-page__header__tagline">
                    <p>our values</p>
                    <p>are our pillars</p>
                </article>
                
                <p className="games-home-page__header__title">About Us</p>
                
                <article className="games-home-page__header__about">
                    <p>Patriots Division is a game development company focused on creating next-generation digital experiences. Our studio is globally distributed, composed of creatives from all regions, industries, and backgrounds, with a shared experience in game development and passion for innovation.</p>
                </article>
            </section>
            <GamesHomeContent/>
            <section className="games-home-page__actions">
                <Link className="games-home-page__actions__button" to="/careers">
                  Check Open Positions <img src={arrowIcon} alt="Right Arrow" className="games-home-page__actions__icon" />
                </Link>
            </section>
            <FooterLogo className="games-home-page__footer" />
        </div>
    </main>
);
}
