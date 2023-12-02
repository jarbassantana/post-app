import { PostTitle } from "../PostTitle";
import './styles.css'

export const PostCard = ({ cover, title, body, id }) => {
  return (
    <div className="post">
      <img src={cover} alt={title} />
      <div className="post-content">
        <PostTitle title={title} />
        <p>{body}</p>
      </div>
    </div>
  );
}