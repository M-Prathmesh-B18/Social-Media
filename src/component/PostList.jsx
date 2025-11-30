import { useContext, useEffect, useState } from "react";
import Post from "./Post";
import { PostListContext } from "../store/post-list-store";
import WelcomeMsg from "./WelcomeMsg";
import LoadingSpinner from "./LoadingSpinner";

const PostList = () => {
  const { postData, fetching } = useContext(PostListContext);

  return (
    <>
      {/* //conditional rendering */}
      {fetching && <LoadingSpinner></LoadingSpinner>}

      {!fetching && postData.length === 0 && <WelcomeMsg></WelcomeMsg>}
      {!fetching &&
        postData.map((posts) => <Post key={posts.id} posts={posts}></Post>)}
    </>
  );
};
export default PostList;
