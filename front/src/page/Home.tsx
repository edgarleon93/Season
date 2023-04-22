import axios from 'axios';
import FeedAndTrend from '~/components/FeedAndTrend';
import { Navbar } from '~/components/Navbar';
import Publication from '~/components/Publication';
import Sidebar from '~/components/NavigateBar';
import TweetBox from '~/components/TweetBox';
import { PostsProvider } from '~/contexts/PostContext';

export function Home() {
  return (
    <>
      <Navbar />
      <FeedAndTrend />
      <div>
        <TweetBox />
      </div>
      {/* <Publication /> */}
      <PostsProvider>
        <Publication />
      </PostsProvider>
    </>
  );
}
