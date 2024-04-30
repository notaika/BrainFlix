import './VideoInfo.scss';
import ViewsIcon from '../../assets/views.svg';
import LikesIcon from '../../assets/likes.svg'

export function VideoInfo(props) {
    const mainVideo = props.details[0];
    const formatDate = new Date(mainVideo.timestamp).toLocaleDateString("en-US");

    return (
        <div className="main__video-info">
            <h1 className="main__video-title">{mainVideo.title}</h1>
            <div className="main__video-details">
                <div className="main__video-details--left">
                    <h3 className="main__video-channel">By {mainVideo.channel}</h3>
                    <span className="main__video-date">{formatDate}</span>
                </div>
                <div className="main__video-details--right">
                    <p className="main__video-views">
                        <img src={ViewsIcon} alt="An icon for view count" className="main__video-views-image" />
                        {mainVideo.views}
                    </p>
                    <p className="main__video-likes">
                        <img src={LikesIcon} alt="An icon for like count" className="main__video-likes-image"/>
                        {mainVideo.likes}
                    </p>
                </div>
            </div>

            <p className="main__video-description">{mainVideo.description}</p>

        </div>
    )
}

export default VideoInfo;