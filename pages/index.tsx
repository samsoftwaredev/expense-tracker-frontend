import Link from "next/link";
import { Meta } from "../components";
import { LandingLayout } from "../layouts";

const Home = () => {
  return (
    <LandingLayout>
      <Meta />
      <Link href="/app">Go to app</Link>
    </LandingLayout>
  );
};

export default Home;
