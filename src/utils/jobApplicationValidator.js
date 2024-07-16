import validator from "validator";

const jobApplicationValidator = ({ name, email, resume }) => {
  const newErrors = {};

  if (!name) newErrors.name = "This field is required";

  if (!email) {
    newErrors.email = "This field is required";
  } else if (!validator.isEmail(email)) {
    newErrors.email = "Please enter a valid email address";
  }

  if (!resume) newErrors.resume = "This field is required";

  return newErrors;
};

export default jobApplicationValidator;
