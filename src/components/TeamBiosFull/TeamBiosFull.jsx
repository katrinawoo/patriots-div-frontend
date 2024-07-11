import React, { useState, useEffect } from 'react';
import { fetchTeamBios } from '../../api';
import "./TeamBiosFull.scss";

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
                                <p className='team-bio__role'>{bio.role}</p>
                                <p className='team-bio__bio'>{bio.bio}</p>
                            </div>
                            
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
};

export default TeamBiosFull;
