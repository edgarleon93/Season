import { useState } from 'react';

function TweetBox() {
  const [isActive, setIsActive] = useState(false);

  const handleInputClick = () => {
    setIsActive(true);
  };

  const handleInputBlur = () => {
    setIsActive(false);
  };

  const handleButtonClick = () => {
    console.log('Button clicked');
  };

  return (
    <div className="mt-4 flex justify-center">
      <div className="relative flex w-11/12 flex-col">
        <textarea
          className={`bg-backtext resize-none rounded-3xl px-5 py-3 text-white outline-0 ${
            isActive ? 'pb-40' : 'h-12'
          }`}
          type="textarea"
          placeholder="What's up?"
          onFocus={handleInputClick}
          onBlur={handleInputBlur}
        />
        {isActive && (
          <button
            onClick={handleButtonClick}
            className=" absolute bottom-0 right-0 mb-2 mr-2 rounded bg-blue-500 py-2 px-4 text-white"
          >
            Send
          </button>
        )}
      </div>
    </div>
  );
}

export default TweetBox;
