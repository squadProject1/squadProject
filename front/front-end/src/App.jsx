import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Profile from './Profile.jsx'
import Posts from './Posts.jsx'
import CreatePost from './CreatePost.jsx'
import './App.css';

function App() {
 
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
       
          <Route path="/" element={<Profile />} />
          <Route path="/posts" element={<Posts/>} />
          
        
      </Routes>
    </BrowserRouter>
      
      
    </div>
  );
  
}

export default App;
