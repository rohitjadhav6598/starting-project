import classes from './Post.module.css'
import { MdRemoveCircle } from 'react-icons/md';

function Post(props) {
  function removePostHandler(){
    props.onRemovePost(props.post.id)
  }
  return (
    <div className={classes.post}>
      <p className={classes.author}>{props.post.author}</p>
      <p className={classes.text}>{props.post.body}</p>
      <br />
      <button className={classes.button} type="button" onClick={removePostHandler} > <MdRemoveCircle size={10} color={'#b71c36'} /> Remove</button>
    </div>
  );
}

export default Post;
