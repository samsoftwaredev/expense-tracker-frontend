import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { Container } from "./Landing.style";

const Landing = () => {
  return (
    <Container>
      <Box component="div">
        <Typography variant="h1" gutterBottom>
          Managing money, made simple
        </Typography>
        <Typography className="content" variant="h3" gutterBottom>
          #1 most downloaded personal finance app
        </Typography>
        <Button
          className="content"
          variant="contained"
          href="/app"
          sx={{ fontSize: 24 }}
        >
          Get Started Today
        </Button>
      </Box>
    </Container>
  );
};

export default Landing;
