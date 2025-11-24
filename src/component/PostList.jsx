import { useContext, useEffect, useState } from "react";
import Post from "./Post";
import { PostListContext } from "../store/post-list-store";
import WelcomeMsg from "./WelcomeMsg";
import LoadingSpinner from "./LoadingSpinner";

const PostList = () => {
  const { postData, addInitialPosts } = useContext(PostListContext);

  const [fetching, setFetching] = useState(false);

  useEffect(() => {
    setFetching(true);
    fetch("https://dummyjson.com/posts")
      .then((res) => res.json())
      .then((data) => {
        addInitialPosts(data.posts);
        setFetching(false);
      });
  }, []);
  return (
    <>
      {fetching && <LoadingSpinner></LoadingSpinner>}

      {!fetching && postData.length === 0 && <WelcomeMsg></WelcomeMsg>}
      {!fetching &&
        postData.map((posts) => <Post key={posts.id} posts={posts}></Post>)}
    </>
  );
};
export default PostList;
