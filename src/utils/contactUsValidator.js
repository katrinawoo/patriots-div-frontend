import validator from "validator";

const contactUsValidator = ({ name, email, message }) => {
  const newErrors = {};
  
  if (!name) newErrors.name = "This field is required";
  
  if (!email) {
    newErrors.email = "This field is required";
  } else if (!validator.isEmail(email)) {
    newErrors.email = "Please enter a valid email address";
  }
  
  if (!message) newErrors.message = "This field is required";

  return newErrors;
};

export default contactUsValidator;
