import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Main from "../../components/Main/Main";

export default function HomePage({ videoData }) {
  const [featuredVideo, setFeaturedVideo] = useState({});
  const videoItem = useParams();

  async function fetchVideoItem() {
    try {
      let videoId = videoItem.id;
  
      if (!videoId) {
        const response = await axios.get(`${import.meta.env.VITE_LOCALHOST}/videos`);
        videoId = response.data[0].id;
      }
  
      const featuredResponse = await axios.get(
        `${import.meta.env.VITE_LOCALHOST}/videos/${videoId}`
      );
      setFeaturedVideo(featuredResponse.data);
    } catch (error) {
      console.error(`ERROR: Unable to set featured video, ${error}`);
    }
  }

  useEffect(() => {
    fetchVideoItem();
    window.scrollTo(0, 0);
  }, [videoItem.id]);

  return (
    <>
      <Main
        videoData={videoData}
        featuredVideo={featuredVideo}
        setFeaturedVideo={setFeaturedVideo}
      />
    </>
  );
}
