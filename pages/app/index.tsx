import { Dashboard, Meta } from "../../components";
import { MainLayout } from "../../layouts";

const App = () => {
  return (
    <MainLayout>
      <Meta pageTitle="App" />
      <Dashboard />
    </MainLayout>
  );
};

export default App;
