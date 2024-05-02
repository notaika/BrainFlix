import VideoPlayer from "../VideoPlayer/VideoPlayer";
import VideoInfo from "../VideoInfo/VideoInfo";
import VideoDetails from "../../data/video-details.json";
import CommentSection from "../CommentSection/CommentSection";
import Sidebar from "../Sidebar/Sidebar";
import { useState } from "react";
import "./Main.scss";

export function Main() {
  const videoData = VideoDetails;
  const [featuredVideo, setFeaturedVideo] = useState(videoData[0]);

  function updateFeaturedVideo(id) {
    const newFeaturedVideo = videoData.find((video) => video.id === id);
    setFeaturedVideo(newFeaturedVideo);
  }

  return (
    <main className="main">
      <VideoPlayer videoData={videoData} featuredVideo={featuredVideo} />
      <div className="main__desktop">
        <div className="main__desktop--left">
          <VideoInfo details={videoData} featuredVideo={featuredVideo} />
          <CommentSection videoData={videoData} featuredVideo={featuredVideo} />
        </div>
        <Sidebar
          videoData={videoData} featuredVideo={featuredVideo} updateFeaturedVideo={updateFeaturedVideo}
        />
      </div>
    </main>
  );
}

export default Main;
