import React from "react";
import { Field } from "redux-form";

import style from "../FormsControls/FormsControls.module.css";

export const FormControl = ({ input, meta: { touched, error }, children }) => {
  const hasError = touched && error;

  return (
    <div className={hasError && style.error}>
      <div>{children}</div>
      <div>{hasError && <span>{error}</span>}</div>
    </div>
  );
};

export const Textarea = (props) => {
  const { input, meta, child, ...restProps } = props;

  return (
    <FormControl {...props}>
      <textarea {...input} {...restProps} />
    </FormControl>
  );
};

export const Input = (props) => {
  const { input, meta, child, ...restProps } = props;

  return (
    <FormControl {...props}>
      <input {...input} {...restProps} />
    </FormControl>
  );
};

export const createField = (
  placeholder,
  name,
  component,
  validate,
  props = {},
  text = ""
) => (
  <div>
    <Field
      placeholder={placeholder}
      name={name}
      component={component}
      validate={validate}
      {...props}
    />
    {text}
  </div>
);
