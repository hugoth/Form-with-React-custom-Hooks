import React from "react";
import "./Form.scss";

import useFormValidation from "./useFormValidation";
import validateAuth from "./ValidateAuth";

const initial_State = {
  name: "",
  lastname: "",
  email: "",
  story: ""
};
const Form = () => {
  const {
    handleChange,
    values,
    handleBlur,
    handleSubmit,
    errors
  } = useFormValidation(initial_State, validateAuth);

  return (
    <div>
      <form>
        <div>
          <section>
            <input
              placeholder="name"
              name="name"
              onChange={handleChange}
              value={values.name}
              onBlur={handleBlur}
            />
            {errors.name && <p className="input-errors">{errors.name}</p>}
          </section>
          <section>
            <input
              placeholder="lastname"
              name="lastname"
              onChange={handleChange}
              value={values.lastname}
              onBlur={handleBlur}
            />
            {errors.lastname && (
              <p className="input-errors">{errors.lastname}</p>
            )}
          </section>
          <section>
            <input
              placeholder="email"
              name="email"
              onChange={handleChange}
              value={values.email}
              onBlur={handleBlur}
            />
            {errors.email && <p className="input-errors">{errors.email}</p>}
          </section>
        </div>
        <section>
          <textarea
            placeholder="Your little story..."
            name="story"
            id="input-story"
            onChange={handleChange}
            value={values.story}
            onBlur={handleBlur}
          />
          {errors.story && (
            <p className="input-errors input-errors-story">{errors.story}</p>
          )}
        </section>
      </form>
      <button type="submit" className="button-submit" onClick={handleSubmit}>
        Share
      </button>
    </div>
  );
};

export default Form;
