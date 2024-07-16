import "./JobDetailsPage.scss";
import { useState, useEffect } from "react";
import HeroJobDetails from "../../components/HeroJobDetails/HeroJobDetails";
import FooterLogo from "../../components/FooterLogo/FooterLogo";
import arrowIcon from "../../assets/icons/Vector-button-arrow.png";
import { Link, useParams } from "react-router-dom";
import { fetchPositionById } from "../../utils/api";
import Header from "../../components/Header/Header";
import heroBackground from "../../assets/images/12-hero-careers-background.png";
import JobApplicationForm from "../../components/JobApplicationForm/JobApplicationForm";

const JobDetailsPage = () => {
    const { id } = useParams();
    const [position, setPosition] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [showApplicationForm, setShowApplicationForm] = useState(false);
    const handleApplyNow = () => {
      setShowApplicationForm(true);
    };

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
    <main>
        <div className="job-details-page__background" style={{ backgroundImage: `url(${heroBackground})` }}></div>
        <Header />
        <HeroJobDetails />

        <div className="job-details-page__wrapper">  
            

            <section className="job-details-page__subheader">

                <div>
                    <h1 className="job-details-page__subheader__title">What you'll do</h1>
                    
                    <div className="job-details-page__subheader__text">
                    <p>{position.details}</p>
                    </div>
                </div>

                <div>
                    <h1 className="job-details-page__subheader__title">Experience required</h1>
                    
                    <ul className="job-details-page__subheader__list">
                         {position.experience.map((exp, index) => (
                            <li key={index}>{exp}</li>
                        ))}
                    </ul>
                </div>

                <div>
                    <h1 className="job-details-page__subheader__title">More you need to know</h1>
                    
                    <div className="job-details-page__subheader__paragraph">
                        {position.more.map((moreInfo, index) => (
                            <p key={index}>{moreInfo}</p>
                        ))}
                    </div>
                </div>
            
            </section>

            <section className="job-details-page__actions">
              {!showApplicationForm && (
                <Link className="job-details-page__actions__button" to="#" onClick={handleApplyNow}>
                    APPLY NOW <img src={arrowIcon} alt="Right Arrow" className="job-details-page__actions__icon" />
                </Link>
              )}
              {showApplicationForm && <JobApplicationForm id={id} />}
            </section>


            <FooterLogo className="job-details-page__footer" />
        </div>
    </main>
  );
};

export default JobDetailsPage;