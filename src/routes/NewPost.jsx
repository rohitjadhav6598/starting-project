import classes from "./NewPost.module.css";
import { useState } from "react";
import Modal from "../components/Modal";
import { Link } from "react-router-dom";

function NewPost(props) {
  const [bodyText, setBodyText] = useState("");
  const [auther, setAuther] = useState("");

  function bodyChangeHandler(event) {
    setBodyText(event.target.value);
  }

  function autherChangeHandler(event) {
    setAuther(event.target.value);
  }

  function submitHandler(event) {
    event.preventDefault();
    const postData = {
      body: bodyText,
      author: auther,
    };
    props.onAddPost(postData);
    props.onClose();
  }

  return (
    <Modal>
      <form className={classes.form} onSubmit={submitHandler}>
        <p>
          <label htmlFor="body">Text</label>
          <textarea id="body" required rows={3} onChange={bodyChangeHandler} />
        </p>
        <p>
          <label htmlFor="name">Your name</label>
          <input
            type="text"
            id="name"
            required
            onChange={autherChangeHandler}
          />
        </p>
        <p className={classes.actions}>
          <Link to="..">
            Cancel
          </Link>
          <button>Submit</button>
        </p>
      </form>
    </Modal>
  );
}

export default NewPost;
