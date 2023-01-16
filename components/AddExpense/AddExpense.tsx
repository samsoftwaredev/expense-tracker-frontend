import { useMutation, useQueryClient } from "react-query";
import { Button } from "@mui/material";
import { Form, Formik, FormikHelpers } from "formik";
import * as Yup from "yup";
import { REGEX_USD_CURRENCY, INTERFACE_EXPENSE } from "../../constants";
import { postExpense } from "../../utils";
import FormField from "../FormField";
import { useState } from "react";

interface Props {
  projectId: string;
}

const AddExpense = ({ projectId }: Props) => {
  const [errorState, setErrorState] = useState(false);
  const queryClient = useQueryClient();

  const mutation = useMutation(postExpense, {
    onSuccess: () => {
      queryClient.invalidateQueries("getProjectExpenses");
    },
  });

  const handleCreateExpense = (
    values: INTERFACE_EXPENSE,
    { resetForm, setSubmitting }: FormikHelpers<INTERFACE_EXPENSE>
  ) => {
    setSubmitting(true);
    try {
      mutation.mutate({ data: values, projectId });
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
      initialValues={{ name: "", description: "", amount: "", location: "" }}
      validationSchema={Yup.object({
        name: Yup.string()
          .max(20, "Must be 20 characters or less")
          .required("Required"),
        amount: Yup.string()
          .matches(REGEX_USD_CURRENCY, "Incorrect format. Must match $XX.XX")
          .required("Required"),
        location: Yup.string().max(120, "Must be 120 characters or less"),
        description: Yup.string().max(500, "Must be 500 characters or less"),
      })}
      onSubmit={handleCreateExpense}
    >
      <Form>
        <FormField
          name="name"
          id="expense-name"
          label="Expense Title"
          placeholder="Office supplies"
        />
        <FormField
          name="amount"
          id="expense-amount"
          label="Amount"
          placeholder="$100.00"
        />
        <FormField
          name="location"
          id="expense-location"
          label="Location (Optional)"
          placeholder="123 Main St. San Francisco, California"
          multiline
        />
        <FormField
          name="description"
          id="expense-description"
          label="Description (Optional)"
          multiline
          rows={4}
        />
        <Button disabled={mutation.isLoading} type="submit">
          {mutation.isLoading ? "Loading" : "Add"}
        </Button>
        {errorState && (
          <span>Error: Unable to create expense. Please try again later.</span>
        )}
      </Form>
    </Formik>
  );
};

export default AddExpense;
