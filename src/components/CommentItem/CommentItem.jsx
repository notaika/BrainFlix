import './CommentItem.scss';

export function CommentItem(props) {
    console.log(props)
    return (
        <div className="comment__item">
            <img src="" alt="Past commentor's profile picture" className="comment__item-pfp" />
            <div className="comment__item--right">
                <div className="comment__item--top">
                    <h3 className="comment__author">Name</h3>
                    <span className="comment__date">Date</span>
                </div>
                <p className="comment__text">Lorem</p>
            </div>
        </div>
    )
}

export default CommentItem;