import "./VideoUpload.scss";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import thumbnailImage from "../../assets/images/Upload-video-preview.jpg";
import { Link } from 'react-router-dom';

export default function VideoUpload({ postVideo }) {
  const [values, setValues] = useState({
    videoTitle: "",
    videoDescription: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value, 
    });
  };

  const redirect = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const newVideo = {
      title: values.videoTitle,
      description: values.videoDescription
    }

    postVideo(newVideo)
    redirect('/')
    alert('Video uploaded.')
  }

  return (
    <section className="uploads">
      <div className="uploads__container">
        <h1 className="uploads__title">Upload Video</h1>
        <form className="uploads__form" onSubmit={handleSubmit}>
        <div className="uploads__thumbnail">
          <h3 className="uploads__thumbnail-title uploads__header">
            Video Thumbnail
          </h3>
          <img
            src={thumbnailImage}
            alt="Video upload thumbnail image"
            className="uploads__thumbnail-img"
          />
        </div>

          <div className="uploads__form-inputs">
            <h3 className="uploads__header">Title Your Video</h3>
            <input
              type="text"
              className="uploads__form-title"
              name="videoTitle"
              placeholder="Add a title to your video"
              onChange={handleInputChange}
              value={values.videoTitle}
            />
            <h3 className="uploads__header">Add a video description</h3>
            <textarea
              name="videoDescription"
              className="uploads__form-description"
              placeholder="Add a description to your video"
              onChange={handleInputChange}
              value={values.videoDescription}
            ></textarea>
          </div>
        </form>
        <div className="uploads__form-buttons">
            <button type="submit "onClick={handleSubmit} className="uploads__form-submit">PUBLISH</button>
            <Link to="/" className="uploads__form-cancel" type="button">CANCEL</Link>
          </div>
      </div>
    </section>
  );
}
