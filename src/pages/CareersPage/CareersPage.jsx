import "./CareersPage.scss";
import React, { useState, useEffect } from "react";
import HeroCareers from "../../components/HeroCareers/HeroCareers";
import FooterLogo from "../../components/FooterLogo/FooterLogo";
import { fetchOpenPositions } from "../../api";
import { Link } from "react-router-dom";

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
                <div className="careers-page__positions">
                  {positions.map((position) => (
                    <div key={position.id} className="careers-page__position">
                      <Link to={`/careers/${position.id}`}>
                       <div className="careers-page__position-details">
                        <h2>{position.title}</h2>
                        <p>{position.location} - {position.capacity}</p>
                        <p>{position.level}</p>
                        <p>{position.compensation}</p>
                    </div>
                      </Link>
                </div>
            ))}
          </div>
            
            </section>

            <FooterLogo className="careers-page__footer" />
        </div>
    </main>
  );
};

export default CareersPage;