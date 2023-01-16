import { useEffect, useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import { Card, Box, CardContent, Typography, IconButton } from "@mui/material";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { deleteExpense, getProjectExpenses } from "../../utils";
import { INTERFACE_EXPENSE_ITEM } from "../../constants";

interface Props {
  projectId: string;
}

const expenseObjToArr = (projectExpense: INTERFACE_EXPENSE_ITEM) => {
  return Object.keys(projectExpense).map((key) => {
    /* @ts-ignore */
    const p = projectExpense[key];
    return {
      name: p.name,
      id: key,
      amount: p.amount,
      description: p.description,
      location: p.location,
    };
  });
};

const ExpensesList = ({ projectId }: Props) => {
  const queryClient = useQueryClient();
  const [noData, setNoData] = useState(false);
  const [expenses, setExpenses] = useState<INTERFACE_EXPENSE_ITEM[]>([]);
  const projectExpense = useQuery(
    "getProjectExpenses",
    () => getProjectExpenses(projectId),
    {
      onSuccess: (data) => {
        if (typeof data !== "object") setNoData(true);
        else setNoData(false);
      },
    }
  );

  const mutation = useMutation(deleteExpense, {
    onSuccess: () => {
      queryClient.invalidateQueries("getProjectExpenses");
    },
  });

  const handleDeleteExpense = (expenseId: string) => {
    try {
      mutation.mutate({ expenseId, projectId });
    } catch (error) {
      // TODO: implement... console.log(error);
    } finally {
      // TODO: implement... console.log("completed!");
    }
  };

  useEffect(() => {
    if (typeof projectExpense.data === "object") {
      const arrExpense = expenseObjToArr(projectExpense.data);
      setExpenses(arrExpense);
    }
  }, [projectExpense.data]);

  if (projectExpense.isLoading || projectExpense.isFetching) {
    return <Typography>Loading...</Typography>;
  }

  if (projectExpense.isError) {
    return (
      <Typography>
        Error: Unable to load data. Please try again later.
      </Typography>
    );
  }

  if (noData) return <Typography>No project expenses created yet!</Typography>;

  return (
    <>
      {expenses.map(({ id, name, amount, description, location }) => (
        <Card
          key={id}
          sx={{
            display: "flex",
            justifyContent: "space-between",
            borderRadius: 2,
            my: 2,
            py: 1,
          }}
        >
          <Box sx={{ display: "flex" }}>
            <CardContent>
              <Typography component="div" variant="h5">
                <IconButton
                  onClick={() => handleDeleteExpense(id)}
                  aria-label="delete"
                >
                  <DeleteIcon />
                </IconButton>
                {name}
              </Typography>
              <Typography color="text.secondary" component="div">
                {description}
              </Typography>
            </CardContent>
          </Box>
          <Box>
            <CardContent>
              <Typography align="right" component="div" variant="h5">
                {amount}
              </Typography>
              <Typography color="text.secondary" component="div">
                {location}
              </Typography>
            </CardContent>
          </Box>
        </Card>
      ))}
    </>
  );
};

export default ExpensesList;
