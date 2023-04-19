import { useState } from 'react';

function FeedAndTrend() {
  const [activeButton, setActiveButton] = useState('FEED');

  return (
    <>
      <div className="s flex justify-around border-t border-b border-white py-2">
        <button onClick={() => setActiveButton('FEED')}>
          <h2
            className={`text-2xl ${
              activeButton === 'FEED' ? 'text-white' : 'text-slate-500'
            }`}
          >
            FEED
          </h2>
        </button>
        <button onClick={() => setActiveButton('TREND')}>
          <h2
            className={`text-2xl ${
              activeButton === 'TREND' ? 'text-white' : 'text-slate-500'
            }`}
          >
            TREND
          </h2>
        </button>
      </div>
    </>
  );
}

export default FeedAndTrend;
