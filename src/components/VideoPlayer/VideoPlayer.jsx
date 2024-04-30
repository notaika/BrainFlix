import './VideoPlayer.scss';

export function VideoPlayer(props) {
    const mainVideo = props.src[0];

    return (
        <video className="main__video" poster={mainVideo.image} alt="The current video playing" controls>
            <source src={mainVideo.video} type="video/mp4" />
        </video>
    )
}

export default VideoPlayer;