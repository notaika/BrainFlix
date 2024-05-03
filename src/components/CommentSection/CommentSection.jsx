import CommentItem from "../CommentItem/CommentItem";
import { dynamicTime } from "../../utils/utilities";
import icon from "../../assets/images/Mohan-muruge.jpg";
import "./CommentSection.scss";

export function CommentSection({ featuredVideo }) {
  const commentList = featuredVideo.comments;

  return (
    <section className="comments">
      <h3 className="comments__count">{commentList.length} Comments</h3>
      <div className="comments__form-container">
        <img
          src={icon}
          alt="The user's profile picture"
          className="comments__pfp"
        />
        <form action="submit" className="comments__form">
          <div className="comments__form--top">
            <h3 className="comments__form-title">Join the Conversation</h3>
            <textarea
              name="comment"
              id="comment"
              className="comments__comment"
              placeholder="Add a new comment"
              required
            ></textarea>
          </div>
          <button type="button" className="comments__submit">
            Comment
          </button>
        </form>
      </div>

      {commentList.map((comment) => {
        return (
          <CommentItem
            name={comment.name}
            comment={comment.comment}
            date={dynamicTime(comment.timestamp)}
            key={comment.id}
          />
        );
      })}
    </section>
  );
}

export default CommentSection;
