import CommentItem from "../CommentItem/CommentItem";
import { useState } from "react";
import { dynamicTime } from "../../utils/utilities";
import { v4 as uuidv4 } from 'uuid';
import icon from "../../assets/images/Mohan-muruge.jpg";
import "./CommentSection.scss";

export function CommentSection({ featuredVideo, postComment, deleteComment }) {
  const commentList = featuredVideo && featuredVideo.comments ? featuredVideo.comments : [];
  const [isInvalid, setInvalidClass] = useState(false);

  const handleInvalidClass = (e) => {
    e.preventDefault();
    if (commentInput.trim() === "") {
      setInvalidClass(true);
      setTimeout(() => {
        alert("Please fill in the empty fields");
      }, 50);
    } else {

      const newComment = {
        name: 'Mohan Muruge',
        comment: commentInput
      }
      
      postComment(newComment);
      setCommentInput("");
      setInvalidClass(false);
      console.log("Comment posted!", commentInput);
    }
  };

  const [commentInput, setCommentInput] = useState("");

  const handleCommentInput = (e) => {
    setCommentInput(e.target.value);
    if (e.target.value.trim() !== "") {
      setInvalidClass(false);
    } else {
      setInvalidClass(true);
    }
  };

  const sortedComments = featuredVideo.comments ? featuredVideo.comments.sort((a, b) => b.timestamp - a.timestamp) : [];
  
  return (
    <section className="comments">
      <h3 className="comments__count">{commentList.length} Comments</h3>
      <div className="comments__form-container">
        <img
          src={icon}
          alt="The user's profile picture"
          className="comments__pfp"
        />
        <form
          className="comments__form"
          id="commentsForm"
          onSubmit={handleInvalidClass}
        >
          <div className="comments__form--top">
            <h3 className="comments__form-title">Join the Conversation</h3>
            <textarea
              name="comment"
              id="comment"
              className={`comments__comment ${
                isInvalid ? "comments__comment--invalid" : ""
              }`}
              value={commentInput}
              placeholder="Add a new comment"
              onChange={handleCommentInput}
            ></textarea>
          </div>
          <button type="submit" className="comments__submit">
            Comment
          </button>
        </form>
      </div>

      {sortedComments.map((comment) => {
        return (
          <CommentItem
            name={comment.name}
            comment={comment.comment}
            date={dynamicTime(comment.timestamp)}
            key={comment.id}
            onDelete={() => deleteComment(comment.id)}
          />
        );
      })}
    </section>
  );
}

export default CommentSection;
