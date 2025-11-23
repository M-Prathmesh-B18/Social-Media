const WelcomeMsg = ({ onGetPostsClick }) => {
  return (
    <center className="welcome-msg">
      <h1>There is no Post</h1>
      <button type="button" class="btn btn-primary" onClick={onGetPostsClick}>
        Get Post from Server
      </button>
    </center>
  );
};
export default WelcomeMsg;
