import Layout from "../../../../containers/Layout";
import { Link, useLoaderData } from "react-router-dom";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import {
  oneDark,
  oneLight,
} from "react-syntax-highlighter/dist/esm/styles/prism";
import useBlogIndividualPost from "../../../../hooks/useBlogIndividualPost";
import Markdown from "react-markdown";

import "./BlogPost.css";
import remarkGfm from "remark-gfm";
import { useContext } from "react";
import { LocalStorageContext } from "../../../../contexts/LocalStorageProvider";
import CardSkeleton from "../../../../components/Card/CardSkeleton";

const BlogPost = () => {
  const { isDarkModeEnabled } = useContext(LocalStorageContext);
  const blogName = useLoaderData();
  const { postContent, postTitle, isLoading, error } =
    useBlogIndividualPost(blogName);
  return (
    <>
      {isLoading ? (
        <div className='flex flex-col items-center justify-center min-h-screen h-'>
          <CardSkeleton maxWidth='max-w-2xl max-h-96 h-screen' />
        </div>
      ) : error ? (
        <div className='flex flex-col min-h-screen items-center justify-center gap-4 text-center h-full font-azeret-mono text-stone-900 dark:text-stone-100'>
          <h1 className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl underline'>
            {error.message}
          </h1>
          <h2 className='text-9xl text-red-500 no-underline'>{error.status}</h2>
          <h3 className='text-3xl'>
            Go back to the{" "}
            <Link
              className='text-blue-500 hover:text-blue-700 underline'
              to='HieloElemental/blog'
            >
              Blog List
            </Link>
          </h3>
        </div>
      ) : (
        <Layout>
          <div className='bg-stone-200 dark:bg-stone-950 flex flex-col items-center justify-center'>
            <div className='bg-stone-50 dark:bg-stone-900 max-w-6xl w-full px-8 pb-8 md:px-12 my-12 rounded-md relative'>
              <span className='bg-stone-950 text-green-300 border-2 border-green-900 rounded-md py-2 px-4 -ml-8 font-azeret-mono'>
                {postTitle}
              </span>
              <div className='md-styles'>
                <Markdown
                  remarkPlugins={[remarkGfm]}
                  components={{
                    code(props) {
                      const { children, className, node, ...rest } = props;
                      const match = /language-(\w+)/.exec(className || "");
                      return match ? (
                        <SyntaxHighlighter
                          {...rest}
                          PreTag='div'
                          language={match[1]}
                          style={isDarkModeEnabled ? oneDark : oneLight}
                        >
                          {String(children).replace(/\n$/, "")}
                        </SyntaxHighlighter>
                      ) : (
                        <code {...rest} className={className}>
                          {children}
                        </code>
                      );
                    },
                  }}
                >
                  {postContent}
                </Markdown>
              </div>
            </div>
          </div>
        </Layout>
      )}
    </>
  );
};

export default BlogPost;
