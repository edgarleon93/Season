import axios from 'axios';
import FeedAndTrend from '~/components/PostsAndLikes';
import { Navbar } from '~/components/Navbar';
import { PostsProvider } from '~/contexts/PostContext';
import TweetBox from '~/components/TweetBox';
import Publication from '~/components/Publication';
import { Sidebar } from '~/components/Sidebar/Sidebar';
import NavigateBar from '~/components/navigateBar';

export function Home() {
  return (
    <>
      <Navbar />
      <NavigateBar title="FEED" />
      <div>
        <TweetBox />
      </div>

      <PostsProvider>
        <Publication />
        <Sidebar />
      </PostsProvider>
      <Sidebar />
    </>
  );
}
