import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Main from "../../components/Main/Main";

export default function HomePage() {
  const [videoData, setVideoData] = useState([]);
  const [featuredVideo, setFeaturedVideo] = useState({});
  const videoItem = useParams();
  const API_KEY = "18e3464d-cb9e-401c-9f58-8a48db055f71";

  async function fetchVideos() {
    try {
      const response = await axios.get(
        `https://unit-3-project-api-0a5620414506.herokuapp.com/videos?api_key=${API_KEY}`
      );
      setVideoData(response.data);

      console.log(`SUCCESS: Videos fetched.`);
    } catch (error) {
      console.error(`ERROR: Could not fetch videos, ${error}`);
    }
  }

  useEffect(() => {
    fetchVideos();
  }, []);

  async function fetchVideoItem() {
    try {
      if (!videoItem.id) {
        const response = await axios.get(
          `https://unit-3-project-api-0a5620414506.herokuapp.com/videos?api_key=${API_KEY}`
        );

        const featuredResponse = await axios.get(
          `https://unit-3-project-api-0a5620414506.herokuapp.com/videos/${response.data[0].id}?api_key=${API_KEY}`
        );
        setFeaturedVideo(featuredResponse.data);

        console.log(`SUCCESS: Featured video was set.`);
      } else {
        const featuredResponse = await axios.get(
          `https://unit-3-project-api-0a5620414506.herokuapp.com/videos/${videoItem.id}?api_key=${API_KEY}`
        );
        setFeaturedVideo(featuredResponse.data);
      }
    } catch (error) {
      console.error(`ERROR: Unable to set featured video, ${error}`);
    }
  }

  useEffect(() => {
    fetchVideoItem();
  }, [videoItem.id]);

  async function postComment(newComment) {
    if (!newComment || !videoItem.id) return;

    try {
      const response = await axios.post(
        `https://unit-3-project-api-0a5620414506.herokuapp.com/videos/${videoItem.id}/comments?api_key=${API_KEY}`,
        newComment
      );
      console.log(
        `SUCCESS: Comments data fetched and new comment was posted`,
        response.data
      );

      setFeaturedVideo((current) => ({
        ...current,
        comments: [response.data, ...current.comments],
      }));
    } catch (error) {
      console.error(`ERROR: Cannot fetch comments data`, error);
    }
  }

  async function deleteComment(commentId) {
    try {
      const response = await axios.delete(
        `https://unit-3-project-api-0a5620414506.herokuapp.com/videos/${videoItem.id}/comments/${commentId}?api_key=${API_KEY}`
      );

      setFeaturedVideo((prevState) => ({
        ...prevState,
        comments: prevState.comments.filter(
          (comment) => comment.id !== commentId
        ),
      }))
      console.log('SUCCESS: Comment was successfully deleted', response.data);
    } catch (error) {
      console.log("ERROR: Failed to delete comment", error);
    }
  }

  return (
    <>
      <Main
        videoData={videoData}
        featuredVideo={featuredVideo}
        postComment={postComment}
        deleteComment={deleteComment}
      />
    </>
  );
}
