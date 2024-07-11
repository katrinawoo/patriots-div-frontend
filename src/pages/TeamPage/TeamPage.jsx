import "./TeamPage.scss";
import HeroTeam from "../../components/HeroTeam/HeroTeam";
import TeamBiosFull from "../../components/TeamBiosFull/TeamBiosFull";
import FooterLogo from "../../components/FooterLogo/FooterLogo";

export default function TeamPage() {

    
  return (
    <main className="team-page">
        <HeroTeam />
        <div className="team-page__wrapper">
            
            <TeamBiosFull />

            <div className="team-page__video">
                <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/GenHD72bN9I?si=XtJT4oE9MxseYwT_"
                title="Loyalty Protocol Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                ></iframe>
            </div>
        </div>
    </main>
);
}
