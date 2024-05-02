import './VideoPlayer.scss';

export function VideoPlayer({ src, image}) {
    const mainVideo = src;

    return (
        <div className="main__container">
            <video className="main__video" poster={image} alt="The current video playing" controls>
                <source src={mainVideo} type="video/mp4" />
            </video>
        </div>
    )
}

export default VideoPlayer;