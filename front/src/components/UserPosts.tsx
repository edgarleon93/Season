import React from 'react';
import IconButton from '~/components/Buttons/IconButton';

const UserPosts = ({ userData, userPosts }) => {
  return (
    <div>
      {userPosts.map((post) => (
        <div className="mx-2 flex border-b border-white p-2 pt-4 md:px-16" key={post._id}>
          <img
            className="mr-4 h-12 w-12 rounded-full"
            src={userData.profilePic}
            alt="Avatar"
          />
          <div className="flex-1">
            <div className="mb-2 flex items-center">
              <p className="mb-4 mt-2 mr-2 text-xl font-extrabold text-white">
                {userData.username}
              </p>
            </div>
            <p className="mb-4 text-white">{post.text}</p>
            <div>
              <div className="flex items-center justify-end">
                <button className=" text-white hover:text-white">
                  <IconButton type="heart" onClick={() => console.log('heart clicked')} />
                  <span className="ml-1">{post.likes.length}</span>
                </button>
                <button className="mx-2 text-white hover:text-white">
                  <IconButton
                    type="messageSquare"
                    onClick={() => console.log('messageSquare clicked')}
                  />
                  <span className="ml-1">{post.comments.length}</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default UserPosts;
