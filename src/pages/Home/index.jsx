import Layout from "../../containers/Layout";
import HomeHeader from "./components/HomeHeader";
import Main from "./components/Main/index";

const Home = () => {
  return (
    <Layout>
      <HomeHeader />
      <Main />
    </Layout>
  );
};

export default Home;
