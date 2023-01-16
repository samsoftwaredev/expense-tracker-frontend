import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Box,
} from "@mui/material";
import { useQuery } from "react-query";
import AddExpense from "../AddExpense";
import { getProject } from "../../utils";
import ExpensesList from "../ExpensesList";
import { Container } from "./Expenses.style";

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
    <Container>
      <Box className="project-info">
        <Typography variant="h5">{project?.data?.name}</Typography>
        <Typography color="text.secondary" className="project-text">
          {project?.data?.description}
        </Typography>
        <Typography color="text.secondary" className="project-text">
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
      </Box>
    </Container>
  );
};

export default Expenses;
