import { useContext } from "react";
import Post from "./Post";
import { PostListContext } from "../store/post-list-store";

const PostList = () => {
  const { postData } = useContext(PostListContext);
  return (
    <>
      {postData.map((posts) => (
        <Post key={posts.id} posts={posts}></Post>
      ))}
    </>
  );
};
export default PostList;
