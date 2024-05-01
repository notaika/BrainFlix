import './VideoList.scss';

export function VideoList(props) {
    const videoImage = props.image;
    const videoTitle = props.title;
    const videoChannel = props.channel;

    return (
        <div className="videos__item">
            <img src={videoImage} alt="A preview poster photo of the video" className="videos__img" />
            <div className="videos__item--right">
                <h3 className="videos__title">{videoTitle}</h3>
                <span className="videos__channel">{videoChannel}</span>
            </div>
        </div>
    )
    
}

export default VideoList;
