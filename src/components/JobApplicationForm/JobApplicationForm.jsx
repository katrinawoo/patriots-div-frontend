import { useState } from 'react';
import { apply } from '../../utils/api';
import arrowIcon from "../../assets/icons/Vector-button-arrow.png";
import jobApplicationValidator from '../../utils/jobApplicationValidator';
import "./JobApplicationForm.scss";

const MAX_INFORMATION_LENGTH = 1000;

const JobApplicationForm = ({ id }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [linkedin, setLinkedin] = useState('');
  const [links, setLinks] = useState('');
  const [information, setInformation] = useState('');
  const [informationLength, setInformationLength] = useState(MAX_INFORMATION_LENGTH);
  const [resume, setResume] = useState(null);
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleResumeChange = (e) => {
    setResume(e.target.files[0]);
  };

const handleInformationChange = (e) => {
    const { value } = e.target;
    if (value.length <= MAX_INFORMATION_LENGTH) {
      setInformation(value);
      setInformationLength(MAX_INFORMATION_LENGTH - value.length);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = jobApplicationValidator({ name, email, resume });
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    const formData = new FormData();
    formData.append('name', name);
    formData.append('email', email);
    formData.append('linkedin', linkedin);
    formData.append('links', links);
    formData.append('information', information);
    formData.append('resume', resume);

// Log FormData to verify its contents
for (let pair of formData.entries()) {
    console.log(pair[0] + ': ' + pair[1]);
  }

    try {
      await apply(id, formData);
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
    <div className="job-application-form__wrapper">
    <form className="job-application-form" onSubmit={handleSubmit}>
      <div className={`job-application-form__group ${errors.name ? 'error' : ''}`}>
        <label htmlFor="name"><h2>Name:</h2></label>
        <input
          type="text"
          id="name"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Your Name"
        />
        {errors.name && <p className="job-application-form__error-message">{errors.name}</p>}
      </div>
      <div className={`job-application-form__group ${errors.email ? 'error' : ''}`}>
        <label htmlFor="email"><h2>Email:</h2></label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="your.email@example.com"
        />
        {errors.email && <p className="job-application-form__error-message">{errors.email}</p>}
      </div>
      <div className="job-application-form__group">
        <label htmlFor="linkedin"><h2>LinkedIn:</h2></label>
        <input
          type="text"
          id="linkedin"
          name="linkedin"
          value={linkedin}
          onChange={(e) => setLinkedin(e.target.value)}
          placeholder="LinkedIn Profile URL"
        />
      </div>
      <div className="job-application-form__group">
        <label htmlFor="links"><h2>Other Links:</h2></label>
        <input
          type="text"
          id="links"
          name="links"
          value={links}
          onChange={(e) => setLinks(e.target.value)}
          placeholder="Portfolio Links, Twitter Handle, etc.  Help us get to know you better!"
        />
      </div>
      <div className="job-application-form__group">
        <label htmlFor="information"><h2>Information:</h2></label>
        <textarea
          id="information"
          name="information"
          value={information}
          onChange={handleInformationChange}
          placeholder="Let us know why you think this role may be a good fit for you, or how your previous experience relates!"
        />
        <p className="job-application-form__character-count">{informationLength} characters left</p>
      </div>
      <div className={`job-application-form__group ${errors.resume ? 'error' : ''}`}>
        <label htmlFor="resume"><h2>Resume:</h2><div>Format of .pdf only, maximum size 5 MB.</div></label>
        <input
          type="file"
          id="resume"
          name="resume"
          accept=".pdf"
          onChange={handleResumeChange}
        />
        {errors.resume && <p className="job-application-form__error-message">{errors.resume}</p>}
      </div>
      <button type="submit" className="job-application-form__submit__button">
        Submit <img src={arrowIcon} alt="Right Arrow" className="job-application-form__submit__icon" />
      </button>
      {successMessage && <p className="job-application-form__success-message">{successMessage}</p>}
      {errorMessage && <p className="job-application-form__error-message">{errorMessage}</p>}
    </form>
  </div>
);
};

export default JobApplicationForm;