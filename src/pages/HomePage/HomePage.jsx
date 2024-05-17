import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Main from "../../components/Main/Main";

export default function HomePage({ videoData }) {
  const [featuredVideo, setFeaturedVideo] = useState({});
  const videoItem = useParams();
  const BASE_URL = `http://localhost:8080`;

  async function fetchVideoItem() {
    try {
      if (!videoItem.id) {
        const response = await axios.get(
          `${BASE_URL}/videos`
        );

        const featuredResponse = await axios.get(
          `${BASE_URL}/videos/${response.data[0].id}`
        );
        setFeaturedVideo(featuredResponse.data); 

      } else {
        const featuredResponse = await axios.get(
          `${BASE_URL}/videos/${videoItem.id}`
        );
        setFeaturedVideo(featuredResponse.data);
      }
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
