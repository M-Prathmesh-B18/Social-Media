import { useContext } from "react";
import Post from "./Post";
import { PostListContext } from "../store/post-list-store";

const PostList = () => {
  const { postData } = useContext(PostListContext);
  return (
    <>
      <Post></Post>
      <Post></Post>
      <Post></Post>
    </>
  );
};
export default PostList;
