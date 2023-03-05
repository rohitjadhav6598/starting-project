import NewPost from "./NewPost";
import Post from "./Post";
import classes from "./PostsList.module.css";
import Modal from "./Modal";
import { useState } from "react";

function PostsList({ isPosting, onStopPosting }) {
  const [posts, setPosts] = useState([]);
  const [count, setCount] = useState(0);

  function addPostHandler(postData) {
    postData.id = count;
    setCount(count + 1);
    setPosts((existinngPosts) => [postData, ...existinngPosts]);
  }

  function removePostHandler(id) {
    setPosts((existinngPosts) =>
      existinngPosts.filter((post) => post.id != id)
    );
  }

  return (
    <>
      {isPosting ? (
        <Modal onClose={onStopPosting}>
          <NewPost onClose={onStopPosting} onAddPost={addPostHandler} />
        </Modal>
      ) : null}
      <ul className={classes.posts}>
        {posts.map((post) => (
          <Post key={post.id} post={post} onRemovePost={removePostHandler} />
        ))}
      </ul>
      {posts.length === 0 && (
        <div style={{ textAlign: "center", color: "white" }}>
          <h2>There are no posts yet.</h2>
          <p>Start adding some!</p>
        </div>
      )}
    </>
  );
}

export default PostsList;
