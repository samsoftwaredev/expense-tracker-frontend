import { Typography } from "@mui/material";
import { Container } from "./Dashboard.style";

const Dashboard = () => {
  return (
    <Container>
      <Typography className="header" variant="h3" gutterBottom>
        Welcome! I have been expecting you!
      </Typography>
      <Typography className="sub-header" variant="h5" gutterBottom>
        Take a look around and also check out the code. I really enjoyed working
        on this project.
      </Typography>
      <Typography variant="body1" gutterBottom>
        The part that I most liked was playing with Firebase and React Queries.
        What I like about those libraries is that they are very easy to get up
        and running. These 2 libraries helped me cut development time in half.
        It took me about 8 hours in total to develop this application. I worked
        both on the front end and the back end. The thing that took me the most
        time was organizing the code in a way that is very modular and easy to
        update. I didn&#39;t include any fancy animation because developing the
        entire application is very time-consuming. However, this goes to show
        that I&#39;m able to work efficiently in both the FE and BE. Although I
        love working on the FE, I mainly focus my effort on the BE this time.
      </Typography>
    </Container>
  );
};

export default Dashboard;
