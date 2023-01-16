import { BE_URL, INTERFACE_EXPENSE, INTERFACE_PROJECT } from "../constants";

const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

export const getProjectExpenses = async (projectId: string) => {
  const response = await fetch(`${BE_URL}/api/expense/project/${projectId}`, {
    method: "GET",
  });
  return response.json();
};

export const getProject = async (projectId: string) => {
  const response = await fetch(`${BE_URL}/api/project/${projectId}`, {
    method: "GET",
  });
  return response.json();
};

export const getAllProjects = async () => {
  const response = await fetch(`${BE_URL}/api/project`, {
    method: "GET",
  });
  return response.json();
};

export const postProject = async (data: INTERFACE_PROJECT) => {
  const raw = JSON.stringify(data);
  const response = await fetch(`${BE_URL}/api/project/create`, {
    method: "POST",
    headers: myHeaders,
    body: raw,
  });
  return response.json();
};

export const postExpense = async ({
  data,
  projectId,
}: {
  data: INTERFACE_EXPENSE;
  projectId: string;
}) => {
  const raw = JSON.stringify(data);
  const response = await fetch(
    `${BE_URL}/api/expense/create/project/${projectId}`,
    {
      method: "POST",
      headers: myHeaders,
      body: raw,
    }
  );
  return response.json();
};

export const deleteExpense = async ({
  expenseId,
  projectId,
}: {
  expenseId: string;
  projectId: string;
}) => {
  const response = await fetch(
    `${BE_URL}/api/expense/${expenseId}/project/${projectId}`,
    {
      method: "DELETE",
    }
  );
  return response.json();
};
