import React, { useState, useEffect } from 'react';
import { fetchTeamBios } from '../../api';
import "./TeamBiosFull.scss";
import linkedinIcon from "../../assets/icons/icons8-linkedin-24.png";

const TeamBiosFull = () => {
    const [teamBios, setTeamBios] = useState([]);

    useEffect(() => {
        const getTeamBios = async () => {
            try {
                const bios = await fetchTeamBios();
                setTeamBios(bios);
            } catch (error) {
                console.error('Error fetching team bios:', error);
            }
        };

        getTeamBios();
    }, []);

    return (
        <main className='team-bios'>
            <div className='team-bios__wrapper'>
                <div className='team-bios__container'>
                    {teamBios.map(bio => (
                        <div key={bio.id} className='team-bio'>
                            <img src={bio.image} alt={bio.name} className='team-bio__image'/>
                            <div className='team-bio__info'>
                                <h2 className='team-bio__name'>{bio.name}</h2>
                                <h2 className='team-bio__surname'>{bio.surname}</h2>
                                <p className='team-bio__bio'>{bio.bio}</p>
                            </div>
                            <div className='team-bio__box'>
                                <div className='team-bio__role'>
                                    <p>{bio.role}</p>
                                </div>
                                <div>
                                    <a href={bio.linkedin} target="_blank" rel="noopener noreferrer" className='team-bio__linkedin'>
                                        <img src={linkedinIcon} alt={`${bio.name} LinkedIn`} />
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
};

export default TeamBiosFull;
