import react from 'react';
import Button from './Buttons/Button';
// import { Image } from 'react-feather';

function TweetBox() {
  return (
    <div className="flex">
      <div className="mt-4">
        <img
          className="mt-4 h-10 w-10 items-center rounded-full object-cover"
          src="img/avatar1.webp"
          alt=""
        />
        <form>
          <input
            className="bg-backtext w-full rounded-3xl px-3 py-3.5 text-white outline-0"
            type="textarea"
            placeholder="What's up?"
          />
        </form>
      </div>
      <Button variant="tertiary">Post</Button>
    </div>
  );
}

export default TweetBox;
