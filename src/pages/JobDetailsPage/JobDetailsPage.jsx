import "./JobDetailsPage.scss";
import React from "react";
import HeroJobDetails from "../../components/HeroJobDetails/HeroJobDetails";
import FooterLogo from "../../components/FooterLogo/FooterLogo";

const JobDetailsPage = () => {
  return (
    <main>
        <HeroJobDetails />

        <div className="job-details-page__wrapper">  
            

            <section className="job-details-page__subheader">

                <div>
                    <h1 className="job-details-page__subheader__title">What you'll do</h1>
                    
                    <div className="job-details-page__subheader__text">
                        <p>Lorem ipsum dolor sit amet et auderem sempre tito te lauda mit andere comarae solo la dolor sit amet Lorem ipsum dolor sit amet et auderem sempre.</p>
                    </div>
                </div>

                <div>
                    <h1 className="job-details-page__subheader__title">Experience required</h1>
                    
                    <div className="job-details-page__subheader__text">
                        <p>Lorem ipsum dolor sit amet et auderem sempre tito te lauda mit andere comarae solo la dolor sit amet Lorem ipsum dolor sit amet et auderem sempre.</p>
                    </div>
                </div>

                <div>
                    <h1 className="job-details-page__subheader__title">More you need to know</h1>
                    
                    <div className="job-details-page__subheader__text">
                        <p>Lorem ipsum dolor sit amet et auderem sempre tito te lauda mit andere comarae solo la dolor sit amet Lorem ipsum dolor sit amet et auderem sempre.</p>
                    </div>
                </div>
            
            </section>


            <FooterLogo className="job-details-page__footer" />
        </div>
    </main>
  );
};

export default JobDetailsPage;