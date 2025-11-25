import { useContext } from "react";
import { AiFillDelete } from "react-icons/ai";
import { PostListContext } from "../store/post-list-store";
const Post = ({ posts }) => {
  const { deletePost } = useContext(PostListContext);
  const handelOnClicked = (id) => {
    deletePost(id);
  };

  return (
    <div className="card post-card" style={{ width: "30rem" }}>
      <div className="card-body">
        <h5 className="card-title">
          {posts.title}
          <span
            className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
            onClick={() => handelOnClicked(posts.id)}
          >
            <AiFillDelete />
          </span>
        </h5>
        <p className="card-text">{posts.body}</p>
        {posts.tags.map((tag) => (
          <span key={tag} className="badge bg-primary hashtag">
            {tag}
          </span>
        ))}
        <div className="alert alert-success reactions" role="alert">
          Likes: {posts.reactions.likes} | Dislikes: {posts.reactions.dislikes}
        </div>
      </div>
    </div>
  );
};
export default Post;
