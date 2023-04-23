import axios from 'axios';
import FeedAndTrend from '~/components/FeedAndTrend';
import { Navbar } from '~/components/Navbar';
import { PostsProvider } from '~/contexts/PostContext';
import TweetBox from '~/components/TweetBox';
import Publication from '~/components/Publication';
import { Sidebar } from '~/components/Sidebar/Sidebar';

export function Home() {
  return (
    <>
      <Navbar />
      <FeedAndTrend />
      <div>
        <TweetBox />
      </div>

      <PostsProvider>
        <Publication />
      </PostsProvider>
      <Sidebar />
    </>
  );
}
