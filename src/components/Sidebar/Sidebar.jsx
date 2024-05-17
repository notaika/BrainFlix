import VideoList from "../VideoList/VideoList";
import { Link } from 'react-router-dom';
import "./Sidebar.scss";

export function Sidebar({ videoData, featuredVideo, handleFeaturedVideo }) {
  const filteredVideos = videoData.filter(
    (videos) => videos.id !== featuredVideo.id
  );

  return (
    <aside className="videos">
      <h3 className="videos__list-title">NEXT VIDEOS</h3>

      {filteredVideos.map((video) => {
        return (
          <Link to={`/${video.id}`} className="videos__list-item" key={video.id}>
          <VideoList
            image={video.image}
            title={video.title}
            channel={video.channel}
            id={video.id}
            key={video.id}
          /></Link>
        );
      })}
    </aside>
  );
}
export default Sidebar;
