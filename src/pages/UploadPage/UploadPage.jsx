import VideoUpload from "../../components/VideoUpload/VideoUpload";
import "./UploadPage.scss";

export default function UploadPage({ postVideo }) {
  return (
    <VideoUpload postVideo={postVideo} />
  )
}
