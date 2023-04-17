import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Search } from 'react-feather';
import { useSearchContext } from '~/contexts/SearchContext';
import { UserSearchResults } from './UserSearch';

export const SearchBar = () => {
  const { isOpen, setIsOpen } = useSearchContext();
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<[]>([]);

  useEffect(() => {
    const fetchResults = async () => {
      try {
        const response = await axios.get(
          'https://season-app-hbxam.ondigitalocean.app/all',
        );
        const data = response.data;
        setResults(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchResults();
  }, []);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setQuery(value);
  };

  return (
    <>
      <div className="mt-4 flex justify-center">
        <div className="relative mx-9 flex w-11/12 flex-col">
          <div className="bg-backtext resize-none rounded-3xl px-5 py-3 text-white outline-0">
            <input
              className="bg-transparent pl-12 outline-none"
              placeholder="Search"
              value={query}
              onChange={handleChange}
              onFocus={() => setIsOpen(true)}
              onBlur={() => setIsOpen(false)}
            />
            <div className="absolute top-1/2 -translate-y-1/2 transform sm:left-0 sm:mx-8">
              <Search className="stroke-1 text-white" />
            </div>
          </div>
        </div>
      </div>

      {isOpen && <UserSearchResults query={query} results={results} />}
    </>
  );
};
