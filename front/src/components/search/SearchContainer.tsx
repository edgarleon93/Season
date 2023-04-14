import React, { useState } from 'react';
import { Search } from 'react-feather';
import { useNavigate } from 'react-router-dom';

type Props = {
  isOpen: boolean;
};

const SearchContainer = ({ isOpen }: Props) => {
  const [search, setSearch] = useState([]);
  const [loading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  const handleSearch = (searchResults: any) => {
    setSearch(searchResults);
    setIsLoading(false);
  };
  return (
    <>
      <div className="mt-4 flex justify-center">
        {isOpen ? (
          <div className="relative mx-9 flex w-11/12 flex-col">
            <div className="bg-backtext resize-none rounded-3xl px-5 py-3 text-white outline-0">
              <Search />
            </div>

            {loading
              ? null
              : search.map((user: any) => (
                  <div
                    key={user._id}
                    className="flex cursor-pointer py-4 hover:bg-gray-400"
                    onClick={() => navigate(`/profile/${user.userName}`)}
                  >
                    <div className="flex pl-9">
                      <img
                        src={user.profilePic}
                        className="my-auto h-[40px] w-[40px] rounded-full"
                      />
                      <h1 className="my-auto ml-3">{user.userName}</h1>
                      <h1 className="text-xs">
                        {user.name} + {user.lastname}
                      </h1>
                    </div>
                    <div className="my-auto grid grid-rows-2 gap-1 pl-12 text-xs">
                      <h1>{user.followerCount} followers</h1>
                      <h1>{user.followingCount} following</h1>
                    </div>
                  </div>
                ))}
          </div>
        ) : null}
      </div>
    </>
  );
};

export default SearchContainer;
