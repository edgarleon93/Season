import axios from 'axios';
import { Navbar } from '~/components/Navbar';
import Publication from '~/components/Publication';

function HomePage() {
  return (
    <>
      <Navbar />
      <div className=" mt-4 border-t-2 border-b-2 border-white pt-2 pb-2"> hello</div>
      <Publication />
    </>
  );
}

export default HomePage;
