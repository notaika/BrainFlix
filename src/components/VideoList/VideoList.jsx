import './VideoList.scss';

export function VideoList({ image, title, channel, onClick}) {

    return (
        <div className="videos__item" onClick={onClick}>
            <img src={image} alt="A preview poster photo of the video" className="videos__img" />
            <div className="videos__item--right">
                <h3 className="videos__title">{title}</h3>
                <span className="videos__channel">{channel}</span>
            </div>
        </div>
    )
    
}

export default VideoList;
