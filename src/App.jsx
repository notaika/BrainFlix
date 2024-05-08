import HomePage from './pages/HomePage/HomePage';
import UploadPage from './pages/UploadPage/UploadPage';
import Header from './components/Header/Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.scss';


function App() {
  return (
    <>
    <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/:id" element={<HomePage />} />
      <Route path="/upload" element={<UploadPage />} />
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
