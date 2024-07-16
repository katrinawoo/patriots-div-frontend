// JobApplicationForm.jsx
import React, { useState } from 'react';
import { uploadResume } from '../../utils/api';

const JobApplicationForm = ({ id }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [linkedin, setLinkedin] = useState('');
  const [links, setLinks] = useState('');
  const [information, setInformation] = useState('');
  const [resume, setResume] = useState(null);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('name', name);
    formData.append('email', email);
    formData.append('linkedin', linkedin);
    formData.append('links', links);
    formData.append('information', information);
    formData.append('resume', resume);

    try {
      await uploadResume(jobId, formData);
      setSuccessMessage('Application submitted successfully');
      setErrorMessage('');
      setName('');
      setEmail('');
      setLinkedin('');
      setLinks('');
      setInformation('');
      setResume(null);
    } catch (error) {
      setErrorMessage('Failed to submit application. Please try again.');
      setSuccessMessage('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="text"
        placeholder="LinkedIn"
        value={linkedin}
        onChange={(e) => setLinkedin(e.target.value)}
      />
      <input
        type="text"
        placeholder="Links"
        value={links}
        onChange={(e) => setLinks(e.target.value)}
      />
      <textarea
        placeholder="Information"
        value={information}
        onChange={(e) => setInformation(e.target.value)}
      />
      <input
        type="file"
        accept=".pdf"
        onChange={(e) => setResume(e.target.files[0])}
      />
      <button type="submit">Submit</button>
      {successMessage && <p>{successMessage}</p>}
      {errorMessage && <p>{errorMessage}</p>}
    </form>
  );
};

export default JobApplicationForm;
