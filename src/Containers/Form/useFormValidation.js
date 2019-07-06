import React from "react";

const useFormValidationn = (initial_State, ValidateAuth) => {
  const [values, setValues] = React.useState(initial_State);
  const [errors, setErrors] = React.useState({});
  const [submitting, setSubmitting] = React.useState(false);

  React.useEffect(() => {
    if (submitting) {
      const noErros = Object.keys(errors).length === 0;
      if (noErros) {
        alert("Story shared");
        setSubmitting(false);
      } else {
        setSubmitting(false);
      }
    }
  }, [errors, submitting]);
  const handleChange = event => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  const handleBlur = () => {
    const validationError = ValidateAuth(values);
    setErrors(validationError);
    console.log(errors);
  };
  const handleSubmit = event => {
    event.preventDefault();
    const validationError = ValidateAuth(values);
    setErrors(validationError);
    setSubmitting(true);
    console.log(errors);
  };

  return { handleChange, values, handleBlur, handleSubmit, errors };
};
export default useFormValidationn;
