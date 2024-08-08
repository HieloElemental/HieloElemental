import Layout from "../containers/Layout";

//import PropTypes from "prop-types";
import CardSkeleton from "../components/Card/CardSkeleton";
import useProjects from "../hooks/useProjects";
import Card from "../components/Card/index";
import ErrorCard from "../components/ErrorCard";

const Projects = () => {
  const { projects, isLoading, error, clearError } = useProjects();

  return (
    <Layout>
      <h1 className='text-5xl mx-16 pt-8 pb-3 md:pb-2 px-8 border-b-4 border-stone-600 dark:border-stone-400 max-w-xl'>
        Projects
      </h1>
      <div className='w-full px-2 sm:px-8 py-8 flex flex-col md:flex-row gap-x-4 gap-y-8 flex-wrap items-center lg:items-start justify-between'>
        {isLoading ? (
          Array.from({ length: 12 }, (_, i) => (
            <CardSkeleton key={`cardskeleton${i}`} />
          ))
        ) : error ? (
          <ErrorCard onCleanError={() => clearError()} />
        ) : (
          projects.map(
            ({
              id,
              name,
              full_name: fullName,
              description,
              language,
              html_url: htmlUrl,
            }) => (
              <Card
                key={`${id}`}
                preTitle={fullName}
                title={<a href={htmlUrl}>{name}</a>}
                maxWidth='max-w-sm'
                type='secondary'
              >
                {description}
                <br />
                {language && (
                  <h2 className='bg-stone-50 dark:bg-stone-950 text-stone-950 dark:text-stone-50 w-fit p-2 mt-2 font-azeret-mono rounded-md'>
                    {language}
                  </h2>
                )}
              </Card>
            )
          )
        )}
      </div>
    </Layout>
  );
};
export default Projects;
