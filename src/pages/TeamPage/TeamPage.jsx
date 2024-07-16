import "./TeamPage.scss";
import HeroTeam from "../../components/HeroTeam/HeroTeam";
import TeamBiosFull from "../../components/TeamBiosFull/TeamBiosFull";
import FooterLogo from "../../components/FooterLogo/FooterLogo";
import Header from "../../components/Header/Header";
import heroBackground from "../../assets/images/13-hero-team-background.png";

export default function TeamPage() {

    
  return (
    <main className="team-page">
        <div className="team-page__background" style={{ backgroundImage: `url(${heroBackground})` }}></div>
        <Header />
        <HeroTeam />
        <div className="team-page__wrapper">
            
            <TeamBiosFull />

            <div className="team-page__video">
                <iframe
                src="https://www.youtube.com/embed/GenHD72bN9I?si=XtJT4oE9MxseYwT_"
                title="Loyalty Protocol Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                ></iframe>
            </div>

            <FooterLogo className="team-page__footer" />
        </div>
    </main>
);
}
