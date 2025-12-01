import { useContext, useRef } from "react";
import { PostListContext } from "../store/post-list-store";
import { useNavigate } from "react-router-dom";
const CreatePost = () => {
  const { addPost } = useContext(PostListContext);
  const navigate = useNavigate();

  const userIdElement = useRef();
  const postTitleElement = useRef();
  const postBodyElement = useRef();
  const reactionsElement = useRef();
  const tagsElement = useRef();

  const handleOnSubmit = (event) => {
    event.preventDefault();
    const userId = userIdElement.current.value;
    const postTitle = postTitleElement.current.value;
    const postBody = postBodyElement.current.value;
    const reactions = reactionsElement.current.value;
    const tags = tagsElement.current.value.split(" ");

    // fetch("https://dummyjson.com/posts/add", {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify({
    //     id: Date.now(),
    //     title: postTitle,
    //     body: postBody,
    //     reactions: { likes: reactions, dislikes: reactions },
    //     userId: userId,
    //     tags: tags,
    //   }),
    // })
    //   .then((res) => res.json())
    //   .then((post) => addPost(post));

    addPost(userId, postTitle, postBody, reactions, tags);

    userIdElement.current.value = "";
    postTitleElement.current.value = "";
    postBodyElement.current.value = "";
    reactionsElement.current.value = "";
    tagsElement.current.value = "";
    navigate("/");
  };

  return (
    <form onSubmit={handleOnSubmit} className="create-post">
      <div className="mb-3">
        <label htmlFor="userid" className="form-label">
          Enter your User ID here
        </label>
        <input
          type="text"
          className="form-control"
          id="userid"
          placeholder="Your userID"
          ref={userIdElement}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="title" className="form-label">
          Post Title
        </label>
        <input
          type="text"
          className="form-control"
          id="title"
          placeholder="How are you feeling today..."
          ref={postTitleElement}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="body" className="form-label">
          Post Content
        </label>
        <textarea
          type="text"
          rows="4"
          className="form-control"
          id="body"
          placeholder="Tell us about it"
          ref={postBodyElement}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="reactions" className="form-label">
          Number of Reactions
        </label>
        <input
          type="text"
          className="form-control"
          id="reactions"
          placeholder="How many people reacted to this post"
          ref={reactionsElement}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="tags" className="form-label">
          Enter your tags
        </label>
        <input
          type="text"
          className="form-control"
          id="tags"
          placeholder="Please Enter your tags using space"
          ref={tagsElement}
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Post
      </button>
    </form>
  );
};
export default CreatePost;
