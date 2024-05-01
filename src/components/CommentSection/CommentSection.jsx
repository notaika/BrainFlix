import CommentItem from "../CommentItem/CommentItem";
import icon from '../../assets/images/Mohan-muruge.jpg';
import './CommentSection.scss'

export function CommentSection(props) {
    const commentList = props.details;
    // console.log(commentList)

    return (
        <section className="comments">
            <h3 className="comments__count">Comments</h3>
            {commentList.forEach((entry) => {
                const comment = entry.comments;

                return (comment.map((commentItem) => {
                    return <CommentItem name={commentItem.name} comment={commentItem.comment} date={commentItem.timestamp} key={commentItem.id} />
                }))
                
            })}
        </section>
    )
} 

export default CommentSection;

{/* <div className="comment__form-container">
            <img src="" alt="The user's profile picture" className="comment__pfp" />
            <form action="submit" className="comment__form">
                <span className="comment__form-title">Join the Conversation</span>
                <textarea name="comment" id="comment" className="comment__form"></textarea>
                <button type="button" className="comment__submit">Comment</button>
            </form>
        </div> */}