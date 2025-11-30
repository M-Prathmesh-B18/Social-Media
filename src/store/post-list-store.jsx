import { createContext, useReducer, useState, useEffect } from "react";
export const PostListContext = createContext({
  postData: [],
  addPost: () => {},
  deletePost: () => {},

  fetching: false,
});

const postReducer = (postData, action) => {
  let newPost = postData;
  if (action.type === "ADD_POST") {
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

  //const [fetching, setFetching] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    setFetching(true);

    fetch("https://dummyjson.com/posts", { signal })
      .then((res) => res.json())
      .then((data) => {
        addInitialPosts(data.posts);
        setFetching(false);
      });
    return () => {
      console.log("abort the featching");
      controller.abort();
    };
  }, []);

  const [fetching, setFetching] = useState(false);

  return (
    <PostListContext.Provider
      value={{
        postData,
        addPost,
        deletePost,

        fetching,
      }}
    >
      {children}
    </PostListContext.Provider>
  );
};
export default PostListProvider;
