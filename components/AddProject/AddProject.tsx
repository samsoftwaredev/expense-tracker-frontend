import { useMutation, useQueryClient } from "react-query";
import { Button, Typography } from "@mui/material";
import { Form, Formik, FormikHelpers } from "formik";
import * as Yup from "yup";
import FormField from "../FormField";
import { postProject } from "../../utils";
import { useState } from "react";
import { INTERFACE_PROJECT } from "../../constants";

interface Values {
  name: string;
  description: string;
}

const AddProject = () => {
  const [errorState, setErrorState] = useState(false);
  const queryClient = useQueryClient();

  const mutation = useMutation(postProject, {
    onSuccess: () => {
      queryClient.invalidateQueries("getAllProjects");
    },
  });

  const handleCreateProject = (
    values: Values,
    { resetForm, setSubmitting }: FormikHelpers<INTERFACE_PROJECT>
  ) => {
    setSubmitting(true);
    try {
      mutation.mutate(values);
      setErrorState(false);
    } catch (error) {
      setErrorState(true);
    } finally {
      resetForm();
      setSubmitting(false);
    }
  };

  return (
    <Formik
      initialValues={{ name: "", description: "" }}
      validationSchema={Yup.object({
        name: Yup.string()
          .max(20, "Must be 20 characters or less")
          .required("Required"),
        description: Yup.string().max(500, "Must be 500 characters or less"),
      })}
      onSubmit={handleCreateProject}
    >
      <Form>
        <Typography variant="h5" gutterBottom>
          Create New Project
        </Typography>
        <FormField id="name" name="name" type="text" label="Project Name" />
        <FormField
          id="description"
          name="description"
          type="text"
          label="Description (Optional)"
          multiline
          rows={4}
        />
        <Button disabled={mutation.isLoading} type="submit">
          {mutation.isLoading ? "Loading" : "Create"}
        </Button>
        {errorState && (
          <span>Error: Unable to create project. Please try again later.</span>
        )}
      </Form>
    </Formik>
  );
};

export default AddProject;
