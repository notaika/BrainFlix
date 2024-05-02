import VideoList from "../VideoList/VideoList";
import VideoDetails from "../../data/video-details.json";
import "./Sidebar.scss";

export function Sidebar({ videoData, featuredVideo, updateFeaturedVideo }) {
  const filteredVideos = videoData.filter((videos) => 
    videos.id !== featuredVideo.id);

  return (
    <aside className="videos">
      <h3 className="videos__list-title">NEXT VIDEOS</h3>

      {filteredVideos.map((video) => {
        return (
          <VideoList
            image={video.image}
            title={video.title}
            channel={video.channel}
            id={video.id}
            key={video.id}
            onClick={() => updateFeaturedVideo(video.id)}
          />
        );
      })}
    </aside>
  );
}
export default Sidebar;
