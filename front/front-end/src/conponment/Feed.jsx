// Feed.jsx
import React from 'react';
import Post from './Post';

function Feed() {
  // hedha exemple tasnime badelha 7asseb el back mte3ek
  const posts = [
    { id: 1, imageUrl: 'https://via.placeholder.com/150', caption: 'Caption 1' },
    { id: 2, imageUrl: 'https://via.placeholder.com/150', caption: 'Caption 2' },
  ];

  return (
    <div className="feed">
      {posts.map(post => (
        <Post key={post.id} imageUrl={post.imageUrl} caption={post.caption} />
      ))}
    </div>
  );
}

export default Feed;
