import react from 'react';
import Button from './Buttons/Button';
// import { Image } from 'react-feather';

function TweetBox() {
  return (
    <div className="flex">
      <img
        className="mt-4 h-14 w-14 rounded-full object-cover"
        src="img/avatar1.webp"
        alt=""
      />
      <div className="mt-4">
        <form>
          <input
            className="bg-backtext w-72 rounded-3xl px-3 py-3.5 text-white outline-0"
            type="textarea"
            placeholder="What's up?"
          />
          <div>
            {/* <div>
              <Image className="text-red" />
            </div> */}
            <div className="flex justify-end">
              <Button variant="tertiary">Send</Button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default TweetBox;
