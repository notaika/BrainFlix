import VideoPlayer from '../VideoPlayer/VideoPlayer';
import VideoInfo from '../VideoInfo/VideoInfo';
import VideoDetails from '../../data/video-details.json';
import '../../styles/main.scss';

export function Main() {
    return (
        <main className="main">
            <VideoPlayer src={VideoDetails}/>
            <VideoInfo details={VideoDetails}/>
        </main>
    )
}

export default Main;