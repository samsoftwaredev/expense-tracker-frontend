import { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import SelectSearch from "react-select-search";
import "react-select-search/style.css";
import { useQuery } from "react-query";

import { Tabs } from "..";
import AddProject from "../AddProject";
import Expenses from "../Expenses";
import { getAllProjects } from "../../utils";
import { INTERFACE_EXPENSE, INTERFACE_PROJECT_LIST } from "../../constants";
import { Container } from "./ProjectExpenses.style";

const projectObjToArr = (data: INTERFACE_EXPENSE) => {
  return Object.keys(data).map((key) => {
    /* @ts-ignore */
    const p = data[key];
    return {
      value: key,
      name: p.name,
      label: p.name,
      component: <Expenses projectId={key} />,
    };
  });
};

const projectArrToTabs = (arrProjects: INTERFACE_PROJECT_LIST[]) => {
  return [
    {
      value: "#new-project",
      name: "+ New Project",
      label: "project",
      component: <AddProject />,
    },
    ...arrProjects,
  ];
};

const ProjectExpenses = () => {
  const [projectName, setProjectName] = useState<string | null>(null);
  const [projects, setProjects] = useState<INTERFACE_PROJECT_LIST[]>([]);
  const [tabs, setTabs] = useState<INTERFACE_PROJECT_LIST[]>([]);
  const { data, status: projectStatus } = useQuery(
    "getAllProjects",
    getAllProjects
  );

  const handleSelect = (project: any) => {
    setProjectName(project);
  };

  useEffect(() => {
    if (data) {
      const arrProjects = projectObjToArr(data);
      const arrTabs = projectArrToTabs(arrProjects);
      setProjects(arrProjects);
      setTabs(arrTabs);
    }
  }, [data]);

  if (projectStatus === "loading") {
    return <span>Loading...</span>;
  }

  if (projectStatus === "error") {
    return <span>Error: Unable to load data. Please try again later.</span>;
  }

  return (
    <Container>
      <Typography variant="h3" gutterBottom>
        Project Expenses
      </Typography>
      <Box className="search-box">
        <SelectSearch
          onChange={handleSelect}
          options={projects}
          debounce={250}
          emptyMessage="No match"
          closeOnSelect
          placeholder="Search Project"
          search
        />
      </Box>
      <Tabs list={tabs} tabName={projectName} />
    </Container>
  );
};

export default ProjectExpenses;
