import FeedAndTrend from '~/components/FeedAndTrend';
import { Navbar } from '~/components/Navbar';
import Publication from '~/components/Publication';
import TweetBox from '~/components/TweetBox';

function Feed() {
  return (
    <>
      <Navbar />
      <FeedAndTrend />
      <TweetBox />
      <Publication />
    </>
  );
}

export default Feed;
