
import React from 'react';
import Header from './Header';
import Feed from './Feed';
import Post from "./conponment/Post.jsx";
import './App.css';

function App() {
  return (
    <div className="app">
      <Header />
      <Feed />
      <Post />
    </div>
  );
}

export default App
