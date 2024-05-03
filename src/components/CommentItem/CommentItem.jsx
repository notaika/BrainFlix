import "./CommentItem.scss";

export function CommentItem({ name, comment, date }) {
  return (
    <div className="comments__item">
      <div className="comments__item-pfp"></div>
      <div className="comments__item--right">
        <div className="comments__item--top">
          <h3 className="comments__author">{name}</h3>
          <span className="comments__date">{date}</span>
        </div>
        <p className="comments__text">{comment}</p>
      </div>
    </div>
  );
}

export default CommentItem;
