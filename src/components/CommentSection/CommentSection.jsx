import CommentItem from "../CommentItem/CommentItem";
import icon from '../../assets/images/Mohan-muruge.jpg';
import './CommentSection.scss'

export function CommentSection({ comments, details }) {
    const commentList = comments;
    // console.log(commentList)
    // console.log(details)
    return (
        <section className="comments">
            <h3 className="comments__count">{commentList.length} Comments</h3>
            <div className="comments__form-container">
                <img src={icon} alt="The user's profile picture" className="comments__pfp" />
                <form action="submit" className="comments__form">
                    <div className="comments__form--top">
                        <h3 className="comments__form-title">Join the Conversation</h3>
                        <textarea name="comment" id="comment" className="comments__comment" placeholder="Add a new comment"></textarea>
                    </div>
                    <button type="button" className="comments__submit">Comment</button>
                </form>
             </div>

            {commentList.map((comment) => {
                return <CommentItem name={comment.name} comment={comment.comment} date={comment.timestamp} key={comment.id} />
            })}
        </section>
    )
    
} 

export default CommentSection;




        // {videoList.map((entry) => {
        //     const commentList = entry.comments;
        //     let CommentItem = <></>;

        //     commentList.forEach((comment) => {
        //         console.log(comment.name)

        //         return CommentItem = <CommentItem name={comment.name} comment={comment.comment} date={comment.timestamp} key={comment.id} />
        //     })
        //     return CommentItem
            
        // })}