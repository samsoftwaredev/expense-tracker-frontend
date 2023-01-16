import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import { useQuery } from "react-query";
import AddExpense from "../AddExpense";
import { getProject } from "../../utils";
import ExpensesList from "../ExpensesList";

interface Props {
  projectId: string;
}

const Expenses = ({ projectId }: Props) => {
  const project = useQuery("getProject", () => getProject(projectId));

  if (project.isLoading) {
    return <Typography>Loading...</Typography>;
  }

  if (project.isError) {
    return (
      <Typography>
        Error: Unable to load data. Please try again later.
      </Typography>
    );
  }

  return (
    <>
      <Typography component="div" variant="h5">
        {project?.data?.name}
      </Typography>
      <Typography color="text.secondary" component="div">
        {project?.data?.description}
      </Typography>
      <Typography color="text.secondary" component="div">
        {projectId}
      </Typography>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>+ Add Project Expense</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <AddExpense projectId={projectId} />
        </AccordionDetails>
      </Accordion>
      <ExpensesList projectId={projectId} />
    </>
  );
};

export default Expenses;
