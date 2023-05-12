import React, { useState } from 'react';
import UserPosts from './UserPosts';
import UserLikes from './UserLikes';

function CustomButton({ title, targetPage, isActive, onClick }) {
  return (
    <button onClick={onClick}>
      <h2 className={`text-2xl ${isActive ? 'text-white' : 'text-slate-500'}`}>
        {title}
      </h2>
    </button>
  );
}

function PostsAndLikes({ userData, userPosts, userLikedPosts }) {
  const [activeButton, setActiveButton] = useState('POSTS');

  const handleClick = (targetPage) => {
    setActiveButton(targetPage);
  };

  const renderContent = () => {
    if (activeButton === 'POSTS') {
      return (
        <div>
          <UserPosts userData={userData} userPosts={userPosts} />
        </div>
      );
    } else if (activeButton === 'LIKES') {
      return (
        <div>
          <UserLikes userData={userData} userLikedPosts={userLikedPosts} />
        </div>
      );
    }
  };

  return (
    <>
      <div className="s flex justify-around border-t border-b border-white py-2">
        <CustomButton
          title="POSTS"
          targetPage="POSTS"
          isActive={activeButton === 'POSTS'}
          onClick={() => handleClick('POSTS')}
        />
        <CustomButton
          title="LIKES"
          targetPage="LIKES"
          isActive={activeButton === 'LIKES'}
          onClick={() => handleClick('LIKES')}
        />
      </div>
      <div>{renderContent()}</div>
    </>
  );
}

export default PostsAndLikes;
