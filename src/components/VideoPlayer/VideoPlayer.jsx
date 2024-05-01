import './VideoPlayer.scss';

export function VideoPlayer(props) {
    const mainVideo = props.src[0];

    return (
        <div className="main__container">
            <video className="main__video" poster={mainVideo.image} alt="The current video playing" controls>
                <source src={mainVideo.video} type="video/mp4" />
            </video>
        </div>
    )
}

export default VideoPlayer;