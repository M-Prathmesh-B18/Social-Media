import { useContext } from "react";
import Post from "./Post";
import { PostListContext } from "../store/post-list-store";
import WelcomeMsg from "./WelcomeMsg";

const PostList = () => {
  const { postData } = useContext(PostListContext);
  const handleGetPostsClick = () => {
    console.log("get posts on link");
  };
  return (
    <>
      {postData.length === 0 && (
        <WelcomeMsg onGetPostsClick={handleGetPostsClick}></WelcomeMsg>
      )}
      {postData.map((posts) => (
        <Post key={posts.id} posts={posts}></Post>
      ))}
    </>
  );
};
export default PostList;
