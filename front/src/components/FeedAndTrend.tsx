import { useState } from 'react';
import Publication from './Publication';
import Trend from '~/page/Trend';

function CustomButton({ title, targetPage, isActive, onClick }) {
  return (
    <button onClick={onClick}>
      <h2 className={`text-2xl ${isActive ? 'text-white' : 'text-slate-500'}`}>
        {title}
      </h2>
    </button>
  );
}

function FeedAndTrend() {
  const [activeButton, setActiveButton] = useState('FEED');

  const handleClick = (targetPage) => {
    setActiveButton(targetPage);
  };

  const renderContent = () => {
    if (activeButton === 'FEED') {
      return <Publication />;
    } else if (activeButton === 'TWEET') {
      return <Trend />;
    }
  };

  return (
    <>
      <div className="s flex justify-around border-t border-b border-white py-2">
        <CustomButton
          title="FEED"
          targetPage="FEED"
          isActive={activeButton === 'FEED'}
          onClick={() => handleClick('FEED')}
        />
        <CustomButton
          title="TWEET"
          targetPage="TREND"
          isActive={activeButton === 'TWEET'}
          onClick={() => handleClick('TWEET')}
        />
      </div>
      <div>{renderContent()}</div>
    </>
  );
}

export default FeedAndTrend;
