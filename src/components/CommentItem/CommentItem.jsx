import deleteIcon from '../../assets/delete.svg';
import mohanPfp from '../../assets/images/Mohan-muruge.jpg'
import "./CommentItem.scss";

export function CommentItem({ name, comment, date, onDelete }) {
  return (
    <div className="comments__item">
      <div className="comments__item-pfp"></div>
      <div className="comments__item--right">
        <div className="comments__item--top">
          <h3 className="comments__author">{name}</h3>
          <span className="comments__date">{date}</span>
        </div>
        <p className="comments__text">{comment}</p>
        <button className="comments__delete"><img src={deleteIcon} alt="Delete icon for comments" onClick={onDelete}/></button>
      </div>
    </div>
  );
}

export default CommentItem;
