import "./CareersPage.scss";
import { useState, useEffect } from "react";
import HeroCareers from "../../components/HeroCareers/HeroCareers";
import FooterLogo from "../../components/FooterLogo/FooterLogo";
import { fetchOpenPositions } from "../../utils/api";
import { Link } from "react-router-dom";
import Header from "../../components/Header/Header";
import heroBackground from "../../assets/images/12-hero-careers-background.png";

const CareersPage = () => {
  const [positions, setPositions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getPositions = async () => {
      try {
        const fetchedPositions = await fetchOpenPositions();
        setPositions(fetchedPositions);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    getPositions();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <main className="careers-page">
        <header>
          <div className="careers-page__background" style={{ backgroundImage: `url(${heroBackground})` }}></div>
          <Header />
        </header>
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
                <article>
                    <div className="careers-page__subheader__title">Remote</div>                    
                    <div className="careers-page__subheader__text">
                        <p>We work remotely from all over the world - minimizing commuting and putting the focus on the task at hand.</p>
                        <p>We believe in flexible schedules that improve the work-life balance.</p>
                    </div>
                </article>

                <article>
                    <div className="careers-page__subheader__title">Benefits</div>                   
                    <div className="careers-page__subheader__text">
                        <p>The best way to make a great product is by giving its makers ownership - via equity and more.</p>
                        <p>Performance is rewarded company-wide; whether you’re entry level or executive, bonuses apply.</p>
                        <p>Time off is necessary to put out your best work - we schedule regular studio breaks for a little R&R.</p>
                    </div>
                </article>            
            </section>

            <section className="careers-page__content">
                <div className="careers-page__header__tagline careers-page__tagline">
                    <p>Currently Open</p>
                </div>
                <div className="careers-page__header__title">Positions</div>
                <div className="careers-page__positions">
                  {positions.map((position) => (
                    <article key={position.id} className="careers-page__position">
                      <Link to={`/careers/${position.id}`}>
                       <div className="careers-page__position--details">
                        <div className="careers-page__position--location">{position.location} - {position.capacity}</div>
                        <div className="careers-page__position--title">{position.level} {position.title}</div>
                        <div className="careers-page__position--compensation">Salary: {position.compensation}</div>
                      </div>
                      </Link>
                    </article>
            ))}
                </div>
            </section>

            <article className="careers-page__video">
                <iframe
                src="https://www.youtube.com/embed/49kSRR1um2w?si=2NQ6JZ9pc0G3mScX"
                title="Careers Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                ></iframe>
            </article>

            <FooterLogo className="careers-page__footer" />
        </div>
    </main>
  );
};

export default CareersPage;