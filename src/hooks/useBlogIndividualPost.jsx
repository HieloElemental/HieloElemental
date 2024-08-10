import { useState, useEffect } from "react";
import decodeResponse from "../utilities/utfDecoder";

const useBlogIndividualPost = (directoryName) => {
  const [postContent, setPostContent] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      setIsLoading(true);
      const response = await fetch(
        `https://api.github.com/repos/HieloElemental/HieloElemental/contents/posts/${directoryName}/post.md?ref=posts`
      );
      const decodedResponse = await decodeResponse(response);

      setPostContent(decodedResponse);
      setIsLoading(false);
      setError(null);
    } catch (e) {
      console.log(e);
      setIsLoading(false);
      setError(e);
    }
  };

  const clearError = () => {
    setError(null);
  };

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [directoryName]);

  return {
    postContent,
    postTitle: directoryName,
    isLoading,
    error,
    clearError,
  };
};

export default useBlogIndividualPost;
