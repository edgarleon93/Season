import axios from 'axios';
import { useState, useRef, useEffect } from 'react';

async function CreatePost() {
  try {
    const response = await axios.post(
      'https://season-app-hbxam.ondigitalocean.app/posts',
    );
    console.log(response.data);
  } catch (error) {
    console.log(error);
  }
}

function TweetBox() {
  const [isActive, setIsActive] = useState(false);
  const [text, setText] = useState('');
  const textareaRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (textareaRef.current && !textareaRef.current.contains(event.target)) {
        setIsActive(false);
      }
    }

    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  const handleInputClick = () => {
    setIsActive(true);
  };

  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  const handleButtonClick = () => {
    if (text !== '') {
      console.log(text);
    }
  };

  return (
    <div className="mt-4 flex justify-center border-b border-white pb-4">
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
        />
        {isActive && (
          <button
            onClick={CreatePost}
            className=" bg-red absolute bottom-0 right-0 mb-2 mr-2 rounded-2xl py-2 px-4 text-white"
          >
            Share !
          </button>
        )}
      </div>
    </div>
  );
}

export default TweetBox;
