// import { Link } from "react-router-dom";
// import icon11 from "../../assets/icons/Icon-hover-1.1.png";
// import icon12 from "../../assets/icons/Icon-hover-1.2.png";
// import icon21 from "../../assets/icons/Icon-hover-2.1.png";
// import icon2213 from "../../assets/icons/Icon-hover-2.2-1.3.png";
// import icon3122 from "../../assets/icons/Icon-hover-3.1-2.2.png";
// import icon3223 from "../../assets/icons/Icon-hover-3.2-2.3.png";
// import arrowIcon from "../../assets/icons/Vector-button-arrow.png";
import "./TeamPage.scss";
import HeroTeam from "../../components/HeroTeam/HeroTeam";
import TeamBiosFull from "../../components/TeamBiosFull/TeamBiosFull";
// import FooterLogo from "../../components/FooterLogo/FooterLogo";
// import HeroGames from "../../components/HeroGames/HeroGames";

export default function TeamPage() {

    
  return (
    <main className="team-page">
        {/* <div>
            <h1>Team</h1>
            <p>Welcome to the Team Page!</p>
        </div> */}

        <HeroTeam />
        <TeamBiosFull />
{/*         
        
        <div className="team-page__wrapper">  
            <section className="team-page__actions">
                <a className="team-page__actions__button team-page__actions__button--game" href="https://www.shadowwar.com" target="_blank" rel="noopener noreferrer">
                    More about the game <img src={arrowIcon} alt="Right Arrow" className="hero-games__actions__icon" />
                </a>
                <div></div>
            </section>
            <section className="team-page__header">

               
                <div className="team-page__header__line-container">
                    <div className="team-page__header__line team-page__header__gray-line"></div>
                    <div className="team-page__header__line team-page__header__blue-line"></div>
                </div>

                <div className="team-page__header__tagline">
                    <p>our values</p>
                    <p>are our pillars</p>
                </div>

                
                <h1 className="team-page__header__title">About Us</h1>
                
                <div className="team-page__header__about">
                    <p>Patriots Division is a game development company focused on creating next-generation digital experiences. Our studio is globally distributed, composed of creatives from all regions, industries, and backgrounds, with a shared experience in game development and passion for innovation.</p>
                </div>
            
            </section>

            <section className="team-page__content">
                <div className="team-page__content__wrapper">
                    <article className="team-page__content__square">
                        <div className="team-page__content__icon11 team-page__content__icon">
                            <img src={icon11} alt="Icon" />
                        </div>
                        <div className="team-page__content__title-container">
                            <div className="team-page__content__bracket team-page__content__bracket-left">[</div>
                            <div className="team-page__content__title team-page__content__title--rotate45">
                                <h3>Player First</h3>
                            </div>
                            <div className="team-page__content__bracket team-page__content__bracket-right">]</div>
                        </div>
                        <div className="team-page__content__text">
                            <p>We put the players at the forefront of every decision we make - from the bottom up.</p>
                        </div>
                    </article>

                    <article className="team-page__content__square">
                        <div className="team-page__content__icon12 team-page__content__icon">
                            <img src={icon12} alt="Icon" />
                        </div>
                        <div className="team-page__content__title-container">
                            <div className="team-page__content__bracket">[</div>
                            <div className="team-page__content__title">
                                <h3>Bring Your Best</h3>
                            </div>
                            <div className="team-page__content__bracket">]</div>
                        </div>
                        <div className="team-page__content__text">
                            <p>We never compromise on quality - we aim to deliver breathtaking experiences.</p>
                        </div>
                    </article>

                    <article className="team-page__content__square team-page__content__square-2213--tablet">
                        <div className="team-page__content__icon2213 team-page__content__icon">
                            <img src={icon2213} alt="Icon" />
                        </div>
                        <div className="team-page__content__title-container">
                            <div className="team-page__content__bracket">[</div>
                            <div className="team-page__content__title team-page__content__title--rotate45">
                                <h3>Find the Fun</h3>
                            </div>
                            <div className="team-page__content__bracket">]</div>
                        </div>
                        <div className="team-page__content__text">
                            <p>Fun is the reason we’re all here - it is our guiding principle and north star.</p>
                        </div>
                    </article>
                </div>

                <div className="team-page__content__wrapper">
                    <article className="team-page__content__square">
                        <div className="team-page__content__icon21 team-page__content__icon">
                            <img src={icon21} alt="Icon" />
                        </div>
                        <div className="team-page__content__title-container">
                            <div className="team-page__content__bracket team-page__content__bracket-left">[</div>
                            <div className="team-page__content__title team-page__content__title--rotate45">
                                <h3>Stewart Trust</h3>
                            </div>
                            <div className="team-page__content__bracket team-page__content__bracket-right">]</div>
                        </div>
                        <div className="team-page__content__text">
                            <p>Player trust is a gift and a responsibility - we handle it with utmost care.</p>
                        </div>
                    </article>

                    <article className="team-page__content__square team-page__content__square-2213--mobile">
                        <div className="team-page__content__icon2213 team-page__content__icon">
                            <img src={icon2213} alt="Icon" />
                        </div>
                        <div className="team-page__content__title-container">
                            <div className="team-page__content__bracket">[</div>
                            <div className="team-page__content__title">
                                <h3>Find the Fun</h3>
                            </div>
                            <div className="team-page__content__bracket">]</div>
                        </div>
                        <div className="team-page__content__text">
                            <p>Fun is the reason we’re all here - it is our guiding principle and north star.</p>
                        </div>
                    </article>

                    <article className="team-page__content__square team-page__content__square-3122--tablet">
                        <div className="team-page__content__icon3122 team-page__content__icon">
                            <img src={icon3122} alt="Icon" />
                        </div>
                        <div className="team-page__content__title-container">
                            <div className="team-page__content__bracket team-page__content__bracket-left">[</div>
                            <div className="team-page__content__title team-page__content__title">
                                <h3>The Long Game</h3>
                            </div>
                            <div className="team-page__content__bracket team-page__content__bracket-right">]</div>
                        </div>
                        <div className="team-page__content__text">
                            <p>Our colleagues are our lifeblood - we avoid crunch and focus on mental health.</p>
                        </div>
                    </article>

                    <article className="team-page__content__square team-page__content__square-3223--tablet">
                        <div className="team-page__content__icon3223 team-page__content__icon">
                            <img src={icon3223} alt="Icon" />
                        </div>
                        <div className="team-page__content__title-container">
                            <div className="team-page__content__bracket">[</div>
                            <div className="team-page__content__title team-page__content__title--rotate45">
                                <h3>Dare to be Different</h3>
                            </div>
                            <div className="team-page__content__bracket">]</div>
                        </div>
                        <div className="team-page__content__text">
                            <p>We focus on what makes our games special - that’s what makes us unique.</p>
                        </div>
                    </article>
                </div>

                <div className="team-page__content__wrapper">
                    <article className="team-page__content__square team-page__content__square-3122--mobile">
                        <div className="team-page__content__icon3122 team-page__content__icon">
                            <img src={icon3122} alt="Icon" />
                        </div>
                        <div className="team-page__content__title-container">
                            <div className="team-page__content__bracket team-page__content__bracket-left">[</div>
                            <div className="team-page__content__title team-page__content__title--rotate45">
                                <h3>The Long Game</h3>
                            </div>
                            <div className="team-page__content__bracket team-page__content__bracket-right">]</div>
                        </div>
                        <div className="team-page__content__text">
                            <p>Our colleagues are our lifeblood - we avoid crunch and focus on mental health.</p>
                        </div>
                    </article>

                    <article className="team-page__content__square team-page__content__square-3223--mobile">
                        <div className="team-page__content__icon3223 team-page__content__icon">
                            <img src={icon3223} alt="Icon" />
                        </div>
                        <div className="team-page__content__title-container">
                            <div className="team-page__content__bracket">[</div>
                            <div className="team-page__content__title">
                                <h3>Dare to be Different</h3>
                            </div>
                            <div className="team-page__content__bracket">]</div>
                        </div>
                        <div className="team-page__content__text">
                            <p>We focus on what makes our games special - that’s what makes us unique.</p>
                        </div>
                    </article>
                </div>
            </section>

            <section className="team-page__actions">
                <Link className="team-page__actions__button" to="/careers">
                  Check Open Positions <img src={arrowIcon} alt="Right Arrow" className="team-page__actions__icon" />
                </Link>
                <div></div>
            </section>

            <FooterLogo className="team-page__footer" />
        </div>
        
        
        

       */}
    </main>
);
}
