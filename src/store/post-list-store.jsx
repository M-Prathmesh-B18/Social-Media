import { createContext, useReducer } from "react";
export const PostListContext = createContext({
  postData: [],
  addPost: () => {},
  deletePost: () => {},
  addInitialPosts: () => {},
});

const postReducer = (postData, action) => {
  let newPost = postData;
  if (action.type === "ADD_POST") {
    console.log(action.payload.tags);
    newPost = [action.payload, ...postData];
  } else if (action.type === "DELETE_POST") {
    newPost = postData.filter((item) => item.id !== action.payload.id);
  } else if (action.type === "ADD_INITIAL_POST") {
    newPost = action.payload.posts;
  }
  return newPost;
};

const PostListProvider = ({ children }) => {
  const Default_Post_List = [];

  const [postData, dispatcherOfPost] = useReducer(
    postReducer,
    Default_Post_List
  );

  const addPost = (userId, postTitle, postBody, reactions, tags) => {
    const addNewPostAction = {
      type: "ADD_POST",
      payload: {
        id: Date.now(),
        title: postTitle,
        body: postBody,
        reactions: { likes: reactions, dislikes: reactions },
        userId: userId,
        tags: tags,
      },
    };
    dispatcherOfPost(addNewPostAction);
  };

  const addInitialPosts = (posts) => {
    const addNewInitialPostAction = {
      type: "ADD_INITIAL_POST",
      payload: {
        posts,
      },
    };
    dispatcherOfPost(addNewInitialPostAction);
  };

  const deletePost = (id) => {
    const deletePostAction = {
      type: "DELETE_POST",
      payload: {
        id,
      },
    };
    dispatcherOfPost(deletePostAction);
  };

  return (
    <PostListContext.Provider
      value={{ postData, addPost, deletePost, addInitialPosts }}
    >
      {children}
    </PostListContext.Provider>
  );
};
export default PostListProvider;
