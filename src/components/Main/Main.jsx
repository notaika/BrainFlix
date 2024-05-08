import VideoPlayer from "../VideoPlayer/VideoPlayer";
import VideoInfo from "../VideoInfo/VideoInfo";
import CommentSection from "../CommentSection/CommentSection";
import Sidebar from "../Sidebar/Sidebar";
import "./Main.scss";

export function Main({ videoData, featuredVideo, handleFeaturedVideo }) {

  return (
    <main className="main">
      <VideoPlayer videoData={videoData} featuredVideo={featuredVideo} />
      <div className="main__desktop">
        <div className="main__desktop--left">
          <VideoInfo details={videoData} featuredVideo={featuredVideo} />
          <CommentSection videoData={videoData} featuredVideo={featuredVideo} />
        </div>
        <Sidebar
          videoData={videoData}
          featuredVideo={featuredVideo}
        />
      </div>
    </main>
  );
}

export default Main;
