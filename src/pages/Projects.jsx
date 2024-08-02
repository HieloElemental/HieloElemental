import Layout from "../containers/Layout";

//import PropTypes from "prop-types";
import CardSkeleton from "../components/Card/CardSkeleton";

const Projects = () => {
  return (
    <Layout>
      <h1 className='text-5xl mx-16 pt-8 pb-3 md:pb-2 px-8 border-b-4 max-w-xl'>
        Projects
      </h1>
      <div className='w-full px-2 sm:px-8 py-8 flex flex-col md:flex-row gap-x-4 gap-y-8 flex-wrap justify-between'>
        <CardSkeleton />
        <CardSkeleton />
        <CardSkeleton />
        <CardSkeleton />
        <CardSkeleton />
        <CardSkeleton />
        <CardSkeleton />
        <CardSkeleton />
        <CardSkeleton />
        <CardSkeleton />
        <CardSkeleton />
        <CardSkeleton />
      </div>
    </Layout>
  );
};
export default Projects;
