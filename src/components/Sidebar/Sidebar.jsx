import VideoList from '../VideoList/VideoList';
import VideoDetails from '../../data/video-details.json';
import './Sidebar.scss'

export function Sidebar() {
    const videoList = VideoDetails; //returns list of videos
    return (
        <aside className="videos">
            <h3 className="videos__list-title">NEXT VIDEOS</h3>
            {videoList.map((video) => {
            return <VideoList image={video.image} title={video.title} channel={video.channel} key={video.id}/>
        })}
        </aside>
    )
}
export default Sidebar;