const ValidateAuth = values => {
  let errors = {};

  // validate Email
  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }

  if (!values.name) {
    errors.name = "A name is required";
  } else if (values.name.length < 3) {
    errors.name = "Please enter a Name with more than 3 characters";
  }
  if (!values.lastname) {
    errors.lastname = "A Lastname is required";
  } else if (values.lastname.length < 3) {
    errors.lastname = "Please enter a lastName with more than 3 characters";
  }

  if (!values.story) {
    errors.story = "A Story is required";
  } else if (values.story.length < 50) {
    errors.story = "Please enter a story with more than 50 characters";
  }
  // Validate PassWord
  return errors;
};

export default ValidateAuth;
