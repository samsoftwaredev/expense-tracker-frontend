import { TextFieldProps, TextField } from "@mui/material";
import { FieldHookConfig, useField } from "formik";
import { ClassAttributes, InputHTMLAttributes } from "react";
import { Container } from "./FormField.style";

const FormField = (
  props: TextFieldProps &
    InputHTMLAttributes<HTMLInputElement> &
    ClassAttributes<HTMLInputElement> &
    FieldHookConfig<string>
) => {
  const [field, meta] = useField(props.name);
  return (
    <Container>
      <TextField {...field} {...props} />
      {meta.error && meta.touched && <div>{meta.error}</div>}
    </Container>
  );
};

export default FormField;
