import axios from 'axios';
import { Navbar } from '~/components/Navbar';
import Publication from '~/components/Publication';
import TweetBox from '~/components/TweetBox';

function HomePage() {
  return (
    <>
      <Navbar />
      <div className=" mt-2 flex place-content-around border-t border-b border-white pt-1 pb-1">
        <button className=" rounded-full px-4 text-2xl text-white">
          {' '}
          <h2>FEED</h2>{' '}
        </button>
        <button className="text-gray rounded-full px-4 text-2xl">
          {' '}
          <h2>TREND</h2>{' '}
        </button>
      </div>
      <div>
        <TweetBox />
      </div>
      <Publication />
    </>
  );
}

export default HomePage;
