import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';

interface User {
  _id: string;
  username: string;
  profilePic: string;
}

interface Post {
  _id: number;
  userId: {
    _id: string;
  };
  userData: User;
  text: string;
  likes: string[];
  comments: string[];
}

interface PostsContextValue {
  posts: Post[];
  setPosts: React.Dispatch<React.SetStateAction<Post[]>>;
}

const PostsContext = createContext<PostsContextValue | null>(null);

interface PostsProviderProps {
  children: React.ReactNode;
}

export const PostsProvider: React.FC<PostsProviderProps> = ({ children }) => {
  const [posts, setPosts] = useState<Post[]>([]);

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
            post.userData = {
              _id: userData._id,
              username: userData.username,
              profilePic: userData.profilePic,
            };
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
  }, []);

  return (
    <PostsContext.Provider value={{ posts, setPosts }}>{children}</PostsContext.Provider>
  );
};

export const usePosts = () => {
  const context = useContext(PostsContext);
  if (context === null) {
    throw new Error('usePosts must be used within a PostsProvider');
  }
  return context;
};

async function fetchAllUsers() {
  try {
    const response = await axios.get('https://season-app-hbxam.ondigitalocean.app/all');
    return response.data.map(user => ({
      _id: user._id,
      username: user.username,
      profilePic: user.profilePic
    }));
  } catch (error) {
    console.error('Failed to fetch user data:', error);
    return null;
  }
}
