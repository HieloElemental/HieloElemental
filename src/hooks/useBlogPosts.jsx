import { useEffect, useState } from "react";
import decodeResponse from "../utilities/utfDecoder";

const useBlogPosts = () => {
  const [blogPosts, setBlogPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      setIsLoading(true);
      const response = await fetch(
        "https://api.github.com/repos/HieloElemental/HieloElemental/contents/posts?ref=posts"
      );
      const files = await response.json();

      const data = files.map(async (file) => {
        if (file.type === "dir") {
          const jsonFileResponse = await fetch(
            `https://api.github.com/repos/HieloElemental/HieloElemental/contents/posts/${file.name}/post.json?ref=posts`
          );
          const decodedResponse = await decodeResponse(jsonFileResponse);

          return { ...decodedResponse, directoryName: file.name };
        }
        return null;
      });

      const postData = await Promise.all(data);
      const filteredPosts = postData.filter((post) => post !== null);

      const sortedPosts = filteredPosts.sort(
        (a, b) => new Date(b.date) - new Date(a.date)
      );

      setBlogPosts(sortedPosts);
      setIsLoading(false);
      setError(null);
    } catch (e) {
      setIsLoading(false);
      setError(e);
    }
  };

  const clearError = () => {
    setError(null);
  };

  useEffect(() => {
    !error && fetchData();
  }, [error]);

  return { blogPosts, isLoading, error, clearError };
};

export default useBlogPosts;
