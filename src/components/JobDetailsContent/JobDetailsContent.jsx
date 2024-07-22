import React, { useState, useEffect } from 'react';
import './JobDetailsContent.scss';
import { useParams } from 'react-router-dom';
import { fetchPositionById } from '../../utils/api';

const JobDetailsContent = () => {
  const { id } = useParams();
  const [position, setPosition] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    console.log(`Fetching position with id: ${id}`);
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
    <section className="job-details-content">
      <article>
        <h1 className="job-details-content__title">What you'll do</h1>
        <div className="job-details-content__text">
          <p>{position.details}</p>
        </div>
      </article>
      <article>
        <h1 className="job-details-content__title">Experience required</h1>
        <ul className="job-details-content__list">
          {position.experience.map((exp, index) => (
            <li key={index}>{exp}</li>
          ))}
        </ul>
      </article>
      <article>
        <h1 className="job-details-content__title">More you need to know</h1>
        <div className="job-details-content__paragraph">
          {position.more.map((moreInfo, index) => (
            <p key={index}>{moreInfo}</p>
          ))}
        </div>
      </article>
    </section>
  );
};

export default JobDetailsContent;