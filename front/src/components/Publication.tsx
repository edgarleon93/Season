import React, { useEffect } from 'react';
import IconButton from './Buttons/IconButton';
import axios from 'axios';
import { usePosts } from '../contexts/PostContext';

async function fetchAllUsers() {
  try {
    const response = await axios.get('https://season-app-hbxam.ondigitalocean.app/all');
    return response.data;
  } catch (error) {
    console.error('Failed to fetch user data:', error);
    return null;
  }
}

function Publication() {
  const { posts, setPosts } = usePosts();

  useEffect(() => {
    async function fetchPosts() {
      try {
        const response = await axios.get(
          'https://season-app-hbxam.ondigitalocean.app/all/posts',
        );
        const fetchedPosts = response.data.posts;

        // Trier les posts par date
        fetchedPosts.sort(
          (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
        );

        const allUsers = await fetchAllUsers();
        const usersById = {};
        if (allUsers) {
          allUsers.forEach((user) => {
            usersById[user._id] = user;
          });
        }

        const postsWithUserData = fetchedPosts.map((post) => {
          const userData = usersById[post.userId._id];
          if (userData) {
            post.userData = userData;
          }
          return post;
        });

        if (Array.isArray(postsWithUserData)) {
          setPosts(postsWithUserData);
        } else {
          console.error('API response is not an array');
        }
      } catch (error) {
        console.log(error);
      }
    }

    fetchPosts();
  }, [setPosts]);

  return (
    <>
      {posts.map((post) => (
        <div className="mx-2 flex border-b border-white p-2 pt-4" key={post._id}>
          <img
            className="mr-4 h-12 w-12 rounded-full"
            src={post.userData.profilePic || ''}
            alt="Avatar"
          />
          <div className="flex-1">
            <div className="mb-2 flex items-center">
              <p className="mr-2 text-xl font-extrabold text-white">
                {post.userData.username || 'John Doe'}
              </p>
            </div>
            <p className="mb-4 text-white">{post.text}</p>
            <div>
              <div className="flex items-center justify-end">
                <button className=" text-white hover:text-white">
                  <IconButton type="heart" onClick={() => console.log('heart clicked')} />
                  <span className="ml-1">{post.likes.length}</span>
                </button>
                <button className="mx-2 text-white hover:text-white">
                  <IconButton
                    type="messageSquare"
                    onClick={() => console.log('messageSquare clicked')}
                  />
                  <span className="ml-1">{post.comments.length}</span>
                </button>
              </div>
              {/* <div className="flex justify-center">
                <span className="mt-4 block w-11/12 border-t border-white"></span>
              </div> */}
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
export default Publication;
