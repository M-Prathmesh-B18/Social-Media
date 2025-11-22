import { createContext, useReducer } from "react";
export const PostListContext = createContext({
  postData: [],
  addPost: () => {},
  deletePost: () => {},
});

const postReducer = (action, currentpostData) => {
  let newPost = currentpostData;
  if (action.type === "ADD_POST") {
    // newPost = [
    //   ...postData,
    //   {
    //     name: action.payload.CreaterName,
    //     topic: action.payload.PostTopic,
    //     desc: action.payload.PostDesc,
    //   },
    // ];
    console.log("on add post Action");
  } else if (action.type === "DELETE_POST") {
    newPost = currentpostData.filter(
      (post) => post.id !== action.payload.postid
    );
  }
  return newPost;
};

const PostListProvider = ({ children }) => {
  const Default_Post_List = [
    {
      id: "1",
      title: "Going To Mumbai ",
      body: "Hi Friend iam going to mumbai for my vacation.",
      reactions: 2,
      userId: "user-9",
      tags: ["vactaion", "Mumbai", "Enjoying"],
    },
    {
      id: "2",
      title: "Pass ho gaya",
      body: "after the 4 year pass in btech.",
      reactions: 22,
      userId: "user-12",
      tags: ["graduation", "unbelivibal"],
    },
  ];

  const [postData, dispatcherOfPost] = useReducer(
    postReducer,
    Default_Post_List
  );

  const addPost = (name, topic) => {
    const addNewPostAction = {
      type: "ADD_POST",
      payload: {
        CreaterName: name,
        PostTopic: topic,
        PostDesc: desc,
      },
    };
    dispatcherOfPost(addNewPostAction);
  };

  const deletePost = (postid) => {
    dispatcherOfPost({
      type: "DELETE_POST",
      payload: {
        postid,
      },
    });
  };

  return (
    <PostListContext.Provider value={{ postData, addPost, deletePost }}>
      {children}
    </PostListContext.Provider>
  );
};
export default PostListProvider;
