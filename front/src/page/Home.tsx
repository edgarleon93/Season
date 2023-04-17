import axios from 'axios';
import { Navbar } from '~/components/Navbar';
import Publication from '~/components/Publication';
import Sidebar from '~/components/Sidebar';
import TweetBox from '~/components/TweetBox';

export function Home() {
  return (
    <>
      <Navbar />
      <Sidebar title="FEED" />
      <div>
        <TweetBox />
      </div>
      {/* <Publication /> */}
    </>
  );
}
