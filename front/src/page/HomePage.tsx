import axios from 'axios';
import { Navbar } from '~/components/Navbar';
import Publication from '~/components/Publication';
import Sidebar from '~/components/Sidebar';
import TweetBox from '~/components/TweetBox';

function HomePage() {
  return (
    <>
      <Navbar />
      <Sidebar />
      <div>
        <TweetBox />
      </div>
      {/* <Publication /> */}
    </>
  );
}

export default HomePage;
