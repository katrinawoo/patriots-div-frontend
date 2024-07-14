import icon11 from "../../assets/icons/Icon-hover-1.1.png";
import icon12 from "../../assets/icons/Icon-hover-1.2.png";
import icon21 from "../../assets/icons/Icon-hover-2.1.png";
import icon2213 from "../../assets/icons/Icon-hover-2.2-1.3.png";
import icon3122 from "../../assets/icons/Icon-hover-3.1-2.2.png";
import icon3223 from "../../assets/icons/Icon-hover-3.2-2.3.png";
import "./GamesHomeContent.scss";

const GamesHomeContent = () => {
  return (
    <><main>
        <section className="games-home-comp__content">
                <div className="games-home-comp__content__wrapper">
                    <article className="games-home-comp__content__square">
                        <div className="games-home-comp__content__icon11 games-home-comp__content__icon">
                            <img src={icon11} alt="Icon" />
                        </div>
                        <div className="games-home-comp__content__title-container">
                            <div className="games-home-comp__content__bracket games-home-comp__content__bracket-left">[</div>
                            <div className="games-home-comp__content__title games-home-comp__content__title--rotate45">
                                <h3>Player First</h3>
                            </div>
                            <div className="games-home-comp__content__bracket games-home-comp__content__bracket-right">]</div>
                        </div>
                        <div className="games-home-comp__content__text">
                            <p>We put the players at the forefront of every decision we make - from the bottom up.</p>
                        </div>
                    </article>

                    <article className="games-home-comp__content__square">
                        <div className="games-home-comp__content__icon12 games-home-comp__content__icon">
                            <img src={icon12} alt="Icon" />
                        </div>
                        <div className="games-home-comp__content__title-container">
                            <div className="games-home-comp__content__bracket">[</div>
                            <div className="games-home-comp__content__title">
                                <h3>Bring Your Best</h3>
                            </div>
                            <div className="games-home-comp__content__bracket">]</div>
                        </div>
                        <div className="games-home-comp__content__text">
                            <p>We never compromise on quality - we aim to deliver breathtaking experiences.</p>
                        </div>
                    </article>

                    <article className="games-home-comp__content__square games-home-comp__content__square-2213--tablet">
                        <div className="games-home-comp__content__icon2213 games-home-comp__content__icon">
                            <img src={icon2213} alt="Icon" />
                        </div>
                        <div className="games-home-comp__content__title-container">
                            <div className="games-home-comp__content__bracket">[</div>
                            <div className="games-home-comp__content__title games-home-comp__content__title--rotate45">
                                <h3>Find the Fun</h3>
                            </div>
                            <div className="games-home-comp__content__bracket">]</div>
                        </div>
                        <div className="games-home-comp__content__text">
                            <p>Fun is the reason we’re all here - it is our guiding principle and north star.</p>
                        </div>
                    </article>
                </div>

                <div className="games-home-comp__content__wrapper">
                    <article className="games-home-comp__content__square">
                        <div className="games-home-comp__content__icon21 games-home-comp__content__icon">
                            <img src={icon21} alt="Icon" />
                        </div>
                        <div className="games-home-comp__content__title-container">
                            <div className="games-home-comp__content__bracket games-home-comp__content__bracket-left">[</div>
                            <div className="games-home-comp__content__title games-home-comp__content__title--rotate45">
                                <h3>Stewart Trust</h3>
                            </div>
                            <div className="games-home-comp__content__bracket games-home-comp__content__bracket-right">]</div>
                        </div>
                        <div className="games-home-comp__content__text">
                            <p>Player trust is a gift and a responsibility - we handle it with utmost care.</p>
                        </div>
                    </article>

                    <article className="games-home-comp__content__square games-home-comp__content__square-2213--mobile">
                        <div className="games-home-comp__content__icon2213 games-home-comp__content__icon">
                            <img src={icon2213} alt="Icon" />
                        </div>
                        <div className="games-home-comp__content__title-container">
                            <div className="games-home-comp__content__bracket">[</div>
                            <div className="games-home-comp__content__title">
                                <h3>Find the Fun</h3>
                            </div>
                            <div className="games-home-comp__content__bracket">]</div>
                        </div>
                        <div className="games-home-comp__content__text">
                            <p>Fun is the reason we’re all here - it is our guiding principle and north star.</p>
                        </div>
                    </article>

                    <article className="games-home-comp__content__square games-home-comp__content__square-3122--tablet">
                        <div className="games-home-comp__content__icon3122 games-home-comp__content__icon">
                            <img src={icon3122} alt="Icon" />
                        </div>
                        <div className="games-home-comp__content__title-container">
                            <div className="games-home-comp__content__bracket games-home-comp__content__bracket-left">[</div>
                            <div className="games-home-comp__content__title games-home-comp__content__title">
                                <h3>The Long Game</h3>
                            </div>
                            <div className="games-home-comp__content__bracket games-home-comp__content__bracket-right">]</div>
                        </div>
                        <div className="games-home-comp__content__text">
                            <p>Our colleagues are our lifeblood - we avoid crunch and focus on mental health.</p>
                        </div>
                    </article>

                    <article className="games-home-comp__content__square games-home-comp__content__square-3223--tablet">
                        <div className="games-home-comp__content__icon3223 games-home-comp__content__icon">
                            <img src={icon3223} alt="Icon" />
                        </div>
                        <div className="games-home-comp__content__title-container">
                            <div className="games-home-comp__content__bracket">[</div>
                            <div className="games-home-comp__content__title games-home-comp__content__title--rotate45">
                                <h3>Dare to be Different</h3>
                            </div>
                            <div className="games-home-comp__content__bracket">]</div>
                        </div>
                        <div className="games-home-comp__content__text">
                            <p>We focus on what makes our games special - that’s what makes us unique.</p>
                        </div>
                    </article>
                </div>

                <div className="games-home-comp__content__wrapper">
                    <article className="games-home-comp__content__square games-home-comp__content__square-3122--mobile">
                        <div className="games-home-comp__content__icon3122 games-home-comp__content__icon">
                            <img src={icon3122} alt="Icon" />
                        </div>
                        <div className="games-home-comp__content__title-container">
                            <div className="games-home-comp__content__bracket games-home-comp__content__bracket-left">[</div>
                            <div className="games-home-comp__content__title games-home-comp__content__title--rotate45">
                                <h3>The Long Game</h3>
                            </div>
                            <div className="games-home-comp__content__bracket games-home-comp__content__bracket-right">]</div>
                        </div>
                        <div className="games-home-comp__content__text">
                            <p>Our colleagues are our lifeblood - we avoid crunch and focus on mental health.</p>
                        </div>
                    </article>

                    <article className="games-home-comp__content__square games-home-comp__content__square-3223--mobile">
                        <div className="games-home-comp__content__icon3223 games-home-comp__content__icon">
                            <img src={icon3223} alt="Icon" />
                        </div>
                        <div className="games-home-comp__content__title-container">
                            <div className="games-home-comp__content__bracket">[</div>
                            <div className="games-home-comp__content__title">
                                <h3>Dare to be Different</h3>
                            </div>
                            <div className="games-home-comp__content__bracket">]</div>
                        </div>
                        <div className="games-home-comp__content__text">
                            <p>We focus on what makes our games special - that’s what makes us unique.</p>
                        </div>
                    </article>
                </div>
        </section>
    </main>
    </>
  );
};

export default GamesHomeContent;