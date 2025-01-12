import { useState } from 'react'
import './App.css'
import Header from './Header'
import {BrowserRouter, Routes, Route} from 'react-router-dom';


function App() {

  return (
    <BrowserRouter>
      <Header/>

      <div className='appContainer'>
        <Routes>
          <Route path='/' element={<>HomePage</>} />
          <Route path='/search/:searchQuery' element={<>Search Results</>} />
          <Route path='/' element={<>HomePage</>} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
