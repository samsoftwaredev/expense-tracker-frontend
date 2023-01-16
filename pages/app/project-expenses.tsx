import { Meta, ProjectExpenses } from "../../components";
import { MainLayout } from "../../layouts";

const Expenses = () => {
  return (
    <MainLayout>
      <Meta pageTitle="Project Expenses" />
      <ProjectExpenses />
    </MainLayout>
  );
};

export default Expenses;
