import React, { createContext, useContext, useState } from 'react';

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
