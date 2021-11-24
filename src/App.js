import React from 'react';
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import GalleryPage from './pages/GalleryPage'
import CapturePage from './pages/CapturePage'
import Header from './components/Header'
import styled from 'styled-components'

// import { ContextProvider } from './context/context';
function App() {
  const defaultImages = [
    {
        src: '/ex-1.jpg',
        date: new Date().toLocaleDateString(),
        location : 'Stockholm ,Sweden',
    },
    {
        src: '/ex-2.jpg',
        date: new Date().toLocaleDateString(),
        location : 'Göteborg ,Sweden',
    }
]
  if(!JSON.parse(localStorage.getItem('data')) || JSON.parse(localStorage.getItem('data')).length >0 ){

  }else{
    localStorage.setItem('data',JSON.stringify(defaultImages))
  }

  return (
    <div className="App">
      
      <BrowserRouter>
        <Header />
          <Wrapper>
              <Routes>
                  <Route path="/" element={<GalleryPage />} />
                  <Route path="/capture" element={<CapturePage />} />
              </Routes>
          </Wrapper>
      </BrowserRouter>
    </div>
  );
}

export default App;


const Wrapper = styled.div`
  padding: 0 1rem;
  max-width: 100%;
`;