import { ReactNode, useState, SyntheticEvent, useEffect } from "react";
import { Tabs as MUITabs, Tab, Box } from "@mui/material";
import { TabPanel } from "..";

interface Props {
  tabName?: string | null;
  list: {
    value: string;
    name: string;
    component: ReactNode;
  }[];
}

const Tabs = ({ list, tabName = null }: Props) => {
  const [selectedTab, setSelectedTab] = useState(0);

  useEffect(() => {
    if (list && tabName) {
      console.log(tabName, list);
      const index = list.findIndex((i) => i.value === tabName);
      setSelectedTab(index);
    }
  }, [list, tabName]);

  const handleChange = (event: SyntheticEvent, newValue: number) => {
    setSelectedTab(newValue);
  };

  return (
    <Box>
      <MUITabs
        value={selectedTab}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons="auto"
        aria-label="scrollable auto tabs example"
      >
        {list.map(({ name, value }) => (
          <Tab key={value} label={name} />
        ))}
      </MUITabs>
      {list.map(({ component, value }, index) => (
        <TabPanel key={value} value={selectedTab} index={index}>
          {component}
        </TabPanel>
      ))}
    </Box>
  );
};

export default Tabs;
