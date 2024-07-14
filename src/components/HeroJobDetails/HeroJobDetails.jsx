import './HeroJobDetails.scss';
import React, { useState, useEffect } from "react";
import bannerGlow from '../../assets/icons/26178-banner-glow.png';
import heroCareersBackground from '../../assets/images/12-hero-careers-background.png';
import { useParams } from "react-router-dom";
import { fetchPositionById } from '../../utils/api';


const HeroJobDetails = () => {
  const { id } = useParams();
    const [position, setPosition] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        console.log(`Fetching position with id: ${id}`); // Add this line for debugging
        const getPosition = async () => {
          try {
            const fetchedPosition = await fetchPositionById(id);
            setPosition(fetchedPosition);
          } catch (error) {
            setError(error.message);
          } finally {
            setLoading(false);
          }
        };
    
        getPosition();
      }, [id]);
    
      if (loading) {
        return <div>Loading...</div>;
      }
    
      if (error) {
        return <div>Error: {error}</div>;
      }
    
      if (!position) {
        return <div>Position not found</div>;
      }

  return (
    <section className="hero-job-details">
      <div className="hero-job-details__background" style={{ backgroundImage: `url(${heroCareersBackground})` }}></div>
      <div className="hero-job-details__wrapper">
        <div className="hero-job-details__content">
            <div className='hero-job-details__content__box1'>
                <img src={bannerGlow} alt="Shadow War Banner Glow" className="hero-job-details__content__banner-glow" />
            </div>
            <article className='hero-job-details__content__box2'>
                <div className='hero-job-details__content__title'>{position.title}</div>
                <div className='hero-job-details__content__text'>
                    <div>Level: {position.level}</div>
                    <div className='hero-job-details__content__text--tablet'>|  </div>
                    <div className='hero-job-details__content__text--tablet'>Compensation: {position.compensation}</div>
                    <div className='hero-job-details__content__text--mobile hero-job-details__content__text__box'>
                        <div className='hero-job-details__content__text--mobile'>Compensation:</div>
                        <div className='hero-job-details__content__text--mobile'>{position.compensation}</div>
                    </div>
                </div>
            </article>   
        </div>
        
      </div>
    </section>
    
  );
};

export default HeroJobDetails;