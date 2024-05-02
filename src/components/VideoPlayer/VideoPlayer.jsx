import './VideoPlayer.scss';

export function VideoPlayer({ featuredVideo }) {
    return (
        <div className="main__container">
            <video className="main__video" poster={featuredVideo.image} alt="The current video playing" controls>
                <source src={featuredVideo} type="video/mp4" />
            </video>
        </div>
    )
}

export default VideoPlayer;