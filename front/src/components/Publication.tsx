import React, { useState, useEffect } from 'react';
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
  const [visiblePosts, setVisiblePosts] = useState(50);

  useEffect(() => {
    async function fetchPosts() {
      try {
        const response = await axios.get(
          'https://season-app-hbxam.ondigitalocean.app/all/posts',
        );
        const fetchedPosts = response.data.posts;

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
          if (!post.userId) {
            return null;
          }

          const userData = usersById[post.userId._id];
          if (userData) {
            post.userData = userData;
          }
          return post;
        }).filter(post => post !== null);

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

  const loadMorePosts = () => {
    setVisiblePosts((prevVisiblePosts) => prevVisiblePosts + 50);
  };

  const updatePostLikes = (postId) => {
    setPosts((prevPosts) =>
      prevPosts.map((post) => {
        if (post._id === postId) {
          return { ...post, likes: [...post.likes, "dummyUserId"] };
        }
        return post;
      }),
    );
  };

  async function handleLikePost(postId) {
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        console.error('No authentication token found');
        return;
      }

      const response = await axios.patch(
        `https://season-app-hbxam.ondigitalocean.app/post/like/${postId}`,
        {},
        {
          headers: {
            'Authorization': `Bearer ${token}`,
          },
        },
      );

      console.log('Like post response:', response);
    } catch (error) {
      console.error('Failed to like post:', error);
    }
  }

  const openComments = (postId) => {
    // Remplacez cette ligne par la navigation vers la page des commentaires
    console.log(`Open comments for post ID: ${postId}`);
  };

  return (
    <>
      {posts.slice(0, visiblePosts).map((post) => (
        <div className="mx-2 flex border-b border-white p-2 pt-4" key={post._id}>
          <img
            className="mr-4 h-12 w-12 rounded-full"
            src={post.userData?.profilePic}
            alt="Avatar"
          />
          <div className="flex-1">
            <div className="mb-2 flex items-center">
              <p className="mb-4 mt-2 mr-2 text-xl font-extrabold text-white">
                {post.userData?.username}
              </p>
            </div>
            <p className="mb-4 text-white">{post.text}</p>
            <div>
              <div className="flex items-center justify-end">
                <button
                  className="text-white hover:text-white flex items-center"
                  onClick={() => handleLikePost(post._id)}
                >
                  <IconButton type="heart" />
                  <span className="text-white ml-1">{post.likes.length}</span>
                </button>
                <button
                  className="mx-2 text-white hover:text-white flex items-center"
                  onClick={() => openComments(post._id)}
                >
                  <IconButton type="messageSquare" />
                  <span className="text-white ml-1">{post.comments.length}</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
      {visiblePosts < posts.length && (
        <div className="text-center my-4">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white rounded-2xl mb-16 font-bold py-2 px-4"
            onClick={loadMorePosts}
          >
            Show More
          </button>
        </div>
      )}
    </>
  );
}
export default Publication;

