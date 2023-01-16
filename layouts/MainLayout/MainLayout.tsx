import { Box } from "@mui/material";
import { SideNav } from "../../components";
import { Container } from "./MainLayout.style";

interface Props {
  children?: React.ReactNode;
}

const MainLayout = ({ children }: Props) => {
  return (
    <Container>
      <Box className="sidebar">
        <SideNav />
      </Box>
      <main className="content">{children}</main>
    </Container>
  );
};

export default MainLayout;
