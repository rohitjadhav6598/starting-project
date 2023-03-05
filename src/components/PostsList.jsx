import Post from "./Post";
import classes from "./PostsList.module.css";
import { useState, useEffect } from "react";
import { useLoaderData } from "react-router-dom";

function PostsList() {

  const posts = useLoaderData();
  const [count, setCount] = useState(0);

  function addPostHandler(postData) {
    fetch("http://localhost:8080/posts", {
      method: "POST",
      body: JSON.stringify(postData),
      headers: {
        "Content-Type": "application/json",
      },
    });
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
