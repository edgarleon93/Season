import FeedAndTrend from '~/components/PostsAndLikes';
import { Navbar } from '~/components/Navbar';
import Publication from '~/components/Publication';
import TweetBox from '~/components/TweetBox';
import NavigateBar from '~/components/navigateBar';

function Feed() {
  return (
    <>
      <Navbar />
      <NavigateBar title="FEED" />
      <TweetBox />
      <Publication />
    </>
  );
}

export default Feed;
