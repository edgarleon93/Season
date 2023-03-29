import { useState } from 'react';

function TweetBox() {
  const [isActive, setIsActive] = useState(false);
  const [text, setText] = useState('');

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
    <div className="mt-4 flex justify-center">
      <div className="relative flex w-11/12 flex-col">
        <textarea
          className={`bg-backtext resize-none rounded-3xl px-5 py-3 text-white outline-0 ${
            isActive ? 'pb-10' : 'h-12'
          }`}
          type="textarea"
          placeholder="What's up?"
          onFocus={handleInputClick}
          onChange={handleTextChange}
        />
        {isActive && (
          <button
            onClick={handleButtonClick}
            className=" bg-red absolute bottom-0 right-0 mb-2 mr-2 rounded py-2 px-4 text-white"
          >
            Send
          </button>
        )}
      </div>
    </div>
  );
}

export default TweetBox;
