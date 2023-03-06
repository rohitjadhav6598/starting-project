import classes from "./Post.module.css";
import { MdRemoveCircle } from "react-icons/md";
import { Link } from "react-router-dom";

function Post(props) {
  function removePostHandler() {
    props.onRemovePost(props.post.id);
  }
  return (
    <li className={classes.post}>
      <Link to={props.post.id}>
        <p className={classes.author}>{props.post.author}</p>
        <p className={classes.text}>{props.post.body}</p>
      </Link>

      <br />
      <button
        className={classes.button}
        type="button"
        onClick={removePostHandler}
      >
        <MdRemoveCircle size={10} color={"#b71c36"} /> Remove
      </button>
    </li>
  );
}

export default Post;
