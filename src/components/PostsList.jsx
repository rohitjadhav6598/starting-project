import Post from "./Post";
import classes from "./PostsList.module.css";
import { useState, useEffect } from "react";

function PostsList() {
  const [posts, setPosts] = useState([]);
  const [count, setCount] = useState(0);
  const [isFetching, setIsFetching] = useState(false);

  useEffect(() => {
    async function fetchPosts() {
      setIsFetching(true);
      const response = await fetch("http://localhost:8080/posts");
      const resData = await response.json();
      setPosts(resData.posts);
      setIsFetching(false);
    }

    fetchPosts();
  }, []);

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
      {!isFetching && posts.length === 0 && (
        <div style={{ textAlign: "center", color: "white" }}>
          <h2>There are no posts yet.</h2>
          <p>Start adding some!</p>
        </div>
      )}
      {isFetching && (
        <div style={{ textAlign: 'center', color: 'white' }}>
          <p>Fetching posts...</p>
        </div>
      )}
    </>
  );
}

export default PostsList;
