import { useContext, useRef } from "react";
import { PostListContext } from "../store/post-list-store";
const CreatePost = () => {
  const { addPost } = useContext(PostListContext);
  const { postData } = useContext(PostListContext);
  const createrName = useRef();
  const postTopic = useRef();

  const handleOnSubmit = (event) => {
    event.preventDefault();
    const name = createrName.current.value;
    const topic = postTopic.current.value;
    console.log(postData[0]);
    console.log(name);
    addPost(name, topic);
  };

  return (
    <form onSubmit={handleOnSubmit}>
      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">
          Email address
        </label>
        <input
          type="text"
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          ref={createrName}
        />
        <div id="emailHelp" className="form-text">
          We'll never share your email with anyone else.
        </div>
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputPassword1" className="form-label">
          Password
        </label>
        <input
          type="text"
          className="form-control"
          id="exampleInputPassword1"
          ref={postTopic}
        />
      </div>
      <div className="mb-3 form-check">
        <input
          type="checkbox"
          className="form-check-input"
          id="exampleCheck1"
        />
        <label className="form-check-label" htmlFor="exampleCheck1">
          Check me out
        </label>
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};
export default CreatePost;
