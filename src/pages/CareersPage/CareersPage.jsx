import "./CareersPage.scss";
import HeroCareers from "../../components/HeroCareers/HeroCareers";
import FooterLogo from "../../components/FooterLogo/FooterLogo";

const CareersPage = () => {
  return (
    <main className="careers-page">
        <HeroCareers />
        <div className="careers-page__wrapper">  
            
            <section className="careers-page__header">

                <div className="careers-page__header__tagline careers-page__tagline">
                    <p>Become a</p>
                </div>
                
                <h1 className="careers-page__header__title">Patriot</h1>
                
                <div className="careers-page__header__about">
                    <p>At Patriots Division, we believe in horizontal hierarchy and giving everyone a voice. Whether you’re a senior or just starting out, it’s your ideas and passion that make our games great.</p>
                </div>
            
            </section>

            <section className="careers-page__subheader">

                <div>
                    <h1 className="careers-page__subheader__title">Remote</h1>
                    
                    <div className="careers-page__subheader__text">
                        <p>We work remotely from all over the world - minimizing commuting and putting the focus on the task at hand.</p>
                        <br></br>
                        <p>We believe in flexible schedules that improve the work-life balance.</p>
                    </div>
                </div>

                <div>
                    <h1 className="careers-page__subheader__title">Benefits</h1>
                    
                    <div className="careers-page__subheader__text">
                        <p>The best way to make a great product is by giving its makers ownership - via equity and more.</p>
                        <br></br>
                        <p>Performance is rewarded company-wide; whether you’re entry level or executive, bonuses apply.</p>
                        <br></br>
                        <p>Time off is necessary to put out your best work - we schedule regular studio breaks for a little R&R.</p>
                    </div>
                </div>
            
            </section>

            <section className="careers-page__content">

                <div className="careers-page__header__tagline careers-page__tagline">
                    <p>Currently Open</p>
                </div>
                <h1 className="careers-page__header__title">Positions</h1>
                <div className="careers-page__header__about">
                    <p>[INSERT OPEN POSITIONS]</p>
                </div>
            
            </section>

            {/* <section className="careers-page__content">
                <div className="careers-page__content__wrapper">
                    <article className="careers-page__content__square">
                        <div className="careers-page__content__icon11 careers-page__content__icon">
                            <img src={icon11} alt="Icon" />
                        </div>
                        <div className="careers-page__content__title-container">
                            <div className="careers-page__content__bracket careers-page__content__bracket-left">[</div>
                            <div className="careers-page__content__title careers-page__content__title--rotate45">
                                <h3>Player First</h3>
                            </div>
                            <div className="careers-page__content__bracket careers-page__content__bracket-right">]</div>
                        </div>
                        <div className="careers-page__content__text">
                            <p>We put the players at the forefront of every decision we make - from the bottom up.</p>
                        </div>
                    </article>

                    <article className="careers-page__content__square">
                        <div className="careers-page__content__icon12 careers-page__content__icon">
                            <img src={icon12} alt="Icon" />
                        </div>
                        <div className="careers-page__content__title-container">
                            <div className="careers-page__content__bracket">[</div>
                            <div className="careers-page__content__title">
                                <h3>Bring Your Best</h3>
                            </div>
                            <div className="careers-page__content__bracket">]</div>
                        </div>
                        <div className="careers-page__content__text">
                            <p>We never compromise on quality - we aim to deliver breathtaking experiences.</p>
                        </div>
                    </article>

                    <article className="careers-page__content__square careers-page__content__square-2213--tablet">
                        <div className="careers-page__content__icon2213 careers-page__content__icon">
                            <img src={icon2213} alt="Icon" />
                        </div>
                        <div className="careers-page__content__title-container">
                            <div className="careers-page__content__bracket">[</div>
                            <div className="careers-page__content__title careers-page__content__title--rotate45">
                                <h3>Find the Fun</h3>
                            </div>
                            <div className="careers-page__content__bracket">]</div>
                        </div>
                        <div className="careers-page__content__text">
                            <p>Fun is the reason we’re all here - it is our guiding principle and north star.</p>
                        </div>
                    </article>
                </div>

                <div className="careers-page__content__wrapper">
                    <article className="careers-page__content__square">
                        <div className="careers-page__content__icon21 careers-page__content__icon">
                            <img src={icon21} alt="Icon" />
                        </div>
                        <div className="careers-page__content__title-container">
                            <div className="careers-page__content__bracket careers-page__content__bracket-left">[</div>
                            <div className="careers-page__content__title careers-page__content__title--rotate45">
                                <h3>Stewart Trust</h3>
                            </div>
                            <div className="careers-page__content__bracket careers-page__content__bracket-right">]</div>
                        </div>
                        <div className="careers-page__content__text">
                            <p>Player trust is a gift and a responsibility - we handle it with utmost care.</p>
                        </div>
                    </article>

                    <article className="careers-page__content__square careers-page__content__square-2213--mobile">
                        <div className="careers-page__content__icon2213 careers-page__content__icon">
                            <img src={icon2213} alt="Icon" />
                        </div>
                        <div className="careers-page__content__title-container">
                            <div className="careers-page__content__bracket">[</div>
                            <div className="careers-page__content__title">
                                <h3>Find the Fun</h3>
                            </div>
                            <div className="careers-page__content__bracket">]</div>
                        </div>
                        <div className="careers-page__content__text">
                            <p>Fun is the reason we’re all here - it is our guiding principle and north star.</p>
                        </div>
                    </article>

                    <article className="careers-page__content__square careers-page__content__square-3122--tablet">
                        <div className="careers-page__content__icon3122 careers-page__content__icon">
                            <img src={icon3122} alt="Icon" />
                        </div>
                        <div className="careers-page__content__title-container">
                            <div className="careers-page__content__bracket careers-page__content__bracket-left">[</div>
                            <div className="careers-page__content__title careers-page__content__title">
                                <h3>The Long Game</h3>
                            </div>
                            <div className="careers-page__content__bracket careers-page__content__bracket-right">]</div>
                        </div>
                        <div className="careers-page__content__text">
                            <p>Our colleagues are our lifeblood - we avoid crunch and focus on mental health.</p>
                        </div>
                    </article>

                    <article className="careers-page__content__square careers-page__content__square-3223--tablet">
                        <div className="careers-page__content__icon3223 careers-page__content__icon">
                            <img src={icon3223} alt="Icon" />
                        </div>
                        <div className="careers-page__content__title-container">
                            <div className="careers-page__content__bracket">[</div>
                            <div className="careers-page__content__title careers-page__content__title--rotate45">
                                <h3>Dare to be Different</h3>
                            </div>
                            <div className="careers-page__content__bracket">]</div>
                        </div>
                        <div className="careers-page__content__text">
                            <p>We focus on what makes our games special - that’s what makes us unique.</p>
                        </div>
                    </article>
                </div>

                <div className="careers-page__content__wrapper">
                    <article className="careers-page__content__square careers-page__content__square-3122--mobile">
                        <div className="careers-page__content__icon3122 careers-page__content__icon">
                            <img src={icon3122} alt="Icon" />
                        </div>
                        <div className="careers-page__content__title-container">
                            <div className="careers-page__content__bracket careers-page__content__bracket-left">[</div>
                            <div className="careers-page__content__title careers-page__content__title--rotate45">
                                <h3>The Long Game</h3>
                            </div>
                            <div className="careers-page__content__bracket careers-page__content__bracket-right">]</div>
                        </div>
                        <div className="careers-page__content__text">
                            <p>Our colleagues are our lifeblood - we avoid crunch and focus on mental health.</p>
                        </div>
                    </article>

                    <article className="careers-page__content__square careers-page__content__square-3223--mobile">
                        <div className="careers-page__content__icon3223 careers-page__content__icon">
                            <img src={icon3223} alt="Icon" />
                        </div>
                        <div className="careers-page__content__title-container">
                            <div className="careers-page__content__bracket">[</div>
                            <div className="careers-page__content__title">
                                <h3>Dare to be Different</h3>
                            </div>
                            <div className="careers-page__content__bracket">]</div>
                        </div>
                        <div className="careers-page__content__text">
                            <p>We focus on what makes our games special - that’s what makes us unique.</p>
                        </div>
                    </article>
                </div>
            </section> */}

            <FooterLogo className="careers-page__footer" />
        </div>
    </main>
  );
};

export default CareersPage;