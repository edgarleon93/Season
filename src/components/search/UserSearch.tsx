import React from 'react';
import { User } from './SearchBar';
import { useNavigate } from 'react-router-dom';

interface Props {
  query: string;
  results: User[];
}

export const UserSearchResults = ({ query, results }: Props) => {
  const filteredResults = results.filter(
    (user) => user.username.toLowerCase() === query.toLowerCase(),
  );
  const navigate = useNavigate();

  return (
    <div className="flex flex-col gap-4 text-white">
      {filteredResults.map((user) => (
        <div
          key={user.id}
          className="flex cursor-pointer items-center px-4 py-3 hover:bg-gray-100"
          onClick={() => navigate(`/profile/${user.userName}`)}
        >
          <img
            className="mr-2 h-8 w-8 rounded-full"
            src={user.profilePic}
            alt={user.username}
          />
          <span className="text-sm font-medium text-gray-900">{user.username}</span>
        </div>
      ))}
    </div>
  );
};
