import VideoPlayer from '../VideoPlayer/VideoPlayer';
import VideoInfo from '../VideoInfo/VideoInfo';
import VideoDetails from '../../data/video-details.json';
import CommentSection from '../CommentSection/CommentSection';
import Sidebar from '../Sidebar/Sidebar'
import { useState } from 'react';
import './Main.scss';

export function Main() {
    const [commentItem, setCommentItem] = useState(VideoDetails[0].comments)
    function renderComments(id) {
        setCommentItem(id)
    }
    const [featuredVideo, setFeaturedVideo] = useState(VideoDetails[0].video)

    function updateFeaturedVideo(id) {
        setFeaturedVideo(id)
    }

    return (
        <main className="main">   
            <VideoPlayer src={featuredVideo} image={VideoDetails[0].image}/>
            <div className="main__desktop">
                <div className="main__desktop--left">
                    <VideoInfo details={VideoDetails}/>
                    <CommentSection details={VideoDetails} comments={commentItem} renderComments={renderComments}/>
                </div>
                <Sidebar />
            </div>
                
        </main>
    )
}

export default Main;