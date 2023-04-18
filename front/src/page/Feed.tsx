import { useState, useEffect } from 'react';
import axios from 'axios';

function Feed() {
  interface User {
    _id: number;
    userId: any;
    text: string;
    likes: string[];
    comments: string[];
  }

  interface PostsResponse {
    posts: Post[];
  }

  axios
    .get<PostsResponse>('https://season-app-hbxam.ondigitalocean.app/all/posts')
    .then((response) => {
      const posts = response.data.posts;
      const texts = posts.map((post) => post.text);
      // console.log(texts);
      console.log(posts);
    })
    .catch((error) => {
      console.log(error);
    });

  return (
    <>
      <div className="flex items-center">
        <div className="text-white">feed</div>
        <div className="text-white"> / </div>
        <div className="text-white">trend</div>
      </div>
    </>
  );
}

export default Feed;
