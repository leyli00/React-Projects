import { useEffect, useState } from 'react'
import './App.css'
import Header from './Header'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Sidebar from './Sidebar';
import HomeVideos from './HomeVideos';



function App() {

  const [isSidebarVisible, setIsSidebarVisible] = useState(true);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width:768px)');
    const handleMediaChange = () => setIsSmallScreen(mediaQuery.matches);
    handleMediaChange();
    mediaQuery.addEventListener('change', handleMediaChange);
    return () => mediaQuery.removeEventListener('change', handleMediaChange);
  }, [])

  useEffect(() => {
    if (isSmallScreen) {
      setIsSidebarVisible(false);
    }
    else {
      setIsSidebarVisible(true);
    }
  }, [isSmallScreen]);

  const toggleSidebar = () => {
    setIsSidebarVisible(prev => !prev)
  }

  return (
    <BrowserRouter>
      <Header toggleSidebar={toggleSidebar} />

      <div className='appContainer'>
        {isSidebarVisible && <Sidebar />}
        <div style={{ width: '100%' }}>
          <Routes>
            <Route path='/' element={<HomeVideos />} />
            <Route path='/search/:searchQuery' element={<>Search Results</>} />
          </Routes>
        </div>

      </div>
    </BrowserRouter>
  )
}

export default App
