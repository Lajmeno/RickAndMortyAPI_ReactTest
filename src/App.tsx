import React from 'react';
import logo from './logo.svg';
import './App.css';
import GalleryItem from './GaleryItem/GalleryItem';
import Gallery from './Gallery/Gallery';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CharacterDetail from './CharacterDetail';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="gallery" element ={<Gallery/>}/>
        <Route path="gallery/:id" element ={<CharacterDetail/>}/>
        <Route/>
      </Routes>
    </BrowserRouter>
  
  );
}

export default App;
