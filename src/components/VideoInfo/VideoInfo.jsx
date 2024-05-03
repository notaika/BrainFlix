import { dynamicTime } from "../../utils/utilities";
import ViewsIcon from "../../assets/views.svg";
import LikesIcon from "../../assets/likes.svg";
import "./VideoInfo.scss";

export function VideoInfo({ featuredVideo }) {
  return (
    <div className="main__video-info">
      <h1 className="main__video-title">{featuredVideo.title}</h1>
      <div className="main__video-details">
        <div className="main__video-details--left">
          <h3 className="main__video-channel">By {featuredVideo.channel}</h3>
          <span className="main__video-date">
            {dynamicTime(featuredVideo.timestamp)}
          </span>
        </div>
        <div className="main__video-details--right">
          <p className="main__video-views">
            <img
              src={ViewsIcon}
              alt="An icon for view count"
              className="main__video-views-image"
            />
            {featuredVideo.views}
          </p>
          <p className="main__video-likes">
            <img
              src={LikesIcon}
              alt="An icon for like count"
              className="main__video-likes-image"
            />
            {featuredVideo.likes}
          </p>
        </div>
      </div>

      <p className="main__video-description">{featuredVideo.description}</p>
    </div>
  );
}

export default VideoInfo;
