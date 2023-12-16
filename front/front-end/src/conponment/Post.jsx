
import React from 'react';

function Post({ imageUrl, caption }) {
  return (
    <div className="post">
      <img className="post__image" src={imageUrl} alt="Post" />
      <h4 className="post__caption">{caption}</h4>
    </div>
  );
}

export default Post;
