import { dynamicTime } from "../../utils/utilities";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ViewsIcon from "../../assets/views.svg";
import LikesIcon from "../../assets/likes.svg";
import axios from "axios";
import "./VideoInfo.scss";

export function VideoInfo({ featuredVideo, videoData }) {
  const [likes, setLikes] = useState(featuredVideo.likes);
  const BASE_URL = `http://localhost:8080`;
  const videoItem = useParams();

  useEffect(() => {
    setLikes(featuredVideo.likes);
  }, [featuredVideo.likes]);

  const handleLike = async () => {
    const targetVideoId = videoItem.id || featuredVideo.id;
    try {
      const response = await axios.put(`${BASE_URL}/videos/${targetVideoId}/likes`);
      setLikes(response.data.likes);
    } catch(error) {
      console.log(`ERROR: Unable to add like onto comment.`, error)
    }
  }

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
          <button 
            className="main__video-likes-button"
            onClick={handleLike}>
            <img
              src={LikesIcon}
              alt="An icon for like count"
              className="main__video-likes-image"
            />
            </button>
            {likes}
          </p>
        </div>
      </div>

      <p className="main__video-description">{featuredVideo.description}</p>
    </div>
  );
}

export default VideoInfo;
