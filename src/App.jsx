import HomePage from './pages/HomePage/HomePage';
import UploadPage from './pages/UploadPage/UploadPage';
import Header from './components/Header/Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react'
import axios from 'axios';

import './App.scss';


function App() {
  const BASE_URL = `http://localhost:8080`
  const [videoData, setVideoData] = useState([]);

  async function fetchVideos() {
    try {
      const response = await axios.get(
        `${BASE_URL}/videos`
      );
      
      setVideoData(response.data);
    } catch (error) {
      console.error(`ERROR: Could not fetch videos, ${error}`);
    }
  }

  useEffect(() => {
    fetchVideos();
  }, []);

  async function postVideo(newVideo) {
    try {
      const response = await axios.post(`${BASE_URL}/videos`, newVideo);

      setVideoData(curr => [...curr, response.data])
    } catch(error) {
      console.log(`ERROR: Unable to post video`, error)
    }
  }

  return (
    <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<HomePage videoData={videoData} setVideoData={setVideoData} />} />
      <Route path="/:id" element={<HomePage videoData={videoData} setVideoData={setVideoData} />} />
      <Route path="/upload" element={<UploadPage postVideo={postVideo} />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App
