import validator from "validator";

const jobApplicationValidator = ({ name, email, resume, linkedin, links, information }) => {
  const newErrors = {};

  if (!name) newErrors.name = "This field is required";

  if (!email) {
    newErrors.email = "This field is required";
  } else if (!validator.isEmail(email)) {
    newErrors.email = "Please enter a valid email address";
  }

  if (!resume) newErrors.resume = "This field is required";

  if (!linkedin) newErrors.linkedin = "This field is required";

  if (!links) newErrors.links = "This field is required";

  if (!information) newErrors.information = "This field is required";

  return newErrors;
};

export default jobApplicationValidator;
