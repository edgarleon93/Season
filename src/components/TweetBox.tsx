import axios from 'axios';
import { useState, useRef, useEffect } from 'react';
import api from '../services/api';
import { usePosts } from '../contexts/PostContext';

async function createPost(
  text: string,
  token: string,
  setPosts: (updateFn: (prevPosts: any[]) => any[]) => void,
) {
  if (!token) {
    console.log('User not authenticated');
    return;
  }

  try {
    const response = await axios.post(
      'https://season-app-hbxam.ondigitalocean.app/posts',
      { text },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );
    console.log(response.data);
    const savedPost = response.data.savedPost;
    const { _id, userId, text: postText } = savedPost;

    // Ajouter le nouveau post à la liste des posts
    setPosts((prevPosts) => [
      {
        _id,
        userId: {
          _id: userId,
        },
        userData: {
          _id: userId,
          username: localStorage.getItem('username'),
          profilePic:
            localStorage.getItem('profilePic') ||
            'https://i.imgur.com/piQRIqd_d.webp?maxwidth=1520&fidelity=grand', // Utilisez storedProfilePic, et si elle n'existe pas, utilisez une chaîne vide
        },
        text: postText,
        likes: [],
        comments: [],
      },
      ...prevPosts,
    ]);
  } catch (error) {
    console.log(error);
  }
}

function TweetBox() {
  const [isActive, setIsActive] = useState(false);
  const [text, setText] = useState('');
  const textareaRef = useRef(null);
  const storedToken = localStorage.getItem('authToken');
  const { setPosts } = usePosts();

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (textareaRef.current && !textareaRef.current.contains(event.target as Node)) {
        setIsActive(false);
      }
    }

    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [textareaRef]);

  const handleInputClick = () => {
    setIsActive(true);
  };

  const handleTextChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(event.target.value);
  };

  const handleButtonClick = () => {
    if (text !== '') {
      createPost(text, storedToken, setPosts);
      setText('');
    }
  };
  return (
    <div className="mt-4 flex justify-center border-b border-white pb-4 lg:ml-36">
      <div className="relative flex w-11/12 flex-col">
        <textarea
          ref={textareaRef}
          className={`bg-backtext resize-none rounded-3xl px-5 py-3 text-white outline-0 ${
            isActive ? 'pb-10' : 'h-12'
          }`}
          // type="textarea"
          placeholder="What's up?"
          onFocus={handleInputClick}
          onChange={handleTextChange}
          value={text}
        />
        {isActive && storedToken && (
          <button
            onClick={handleButtonClick}
            className="bg-red absolute bottom-0 right-0 mb-2 mr-2 rounded-2xl py-2 px-4 text-white"
          >
            Share !
          </button>
        )}
      </div>
    </div>
  );
}

export default TweetBox;
