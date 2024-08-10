import useBlogPosts from "../../hooks/useBlogPosts";
import Layout from "../../containers/Layout";
import CardSkeleton from "../../components/Card/CardSkeleton";
import ErrorCard from "../../components/ErrorCard";
import Card from "../../components/Card";

const Blog = () => {
  const { blogPosts, isLoading, error, clearError } = useBlogPosts();

  return (
    <Layout>
      <h1 className='text-5xl mx-16 pt-8 pb-3 md:pb-2 px-8 border-b-4 border-stone-600 dark:border-stone-400 max-w-xl'>
        Blog
      </h1>
      <div className='w-full px-2 sm:px-8 py-8 flex flex-col md:flex-row gap-x-4 gap-y-8 flex-wrap items-center lg:items-start justify-between'>
        {isLoading ? (
          Array.from({ length: 12 }, (_, i) => (
            <CardSkeleton key={`BlogCardSkeleton${i}`} />
          ))
        ) : error ? (
          <ErrorCard onCleanError={clearError} />
        ) : (
          blogPosts.map(({ date, language, summary, title, directoryName }) => (
            <Card
              key={title}
              preTitle={new Date(date).toDateString()}
              title={title}
              type='secondary'
              maxWidth='max-w-sm'
              to={`/blog/${directoryName}`}
            >
              <p>{summary}</p>
              <h2 className='text-right font-azeret-mono'>
                <b>lang:</b>
                {language}
              </h2>
            </Card>
          ))
        )}
      </div>
    </Layout>
  );
};

export default Blog;
