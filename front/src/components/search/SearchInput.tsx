import { useEffect, useState } from 'react';

type Props = {
  onSearch: any;
};

export function SearchInput({ onSearch }: Props) {
  const DebounceDelay = 500;
  const [searchTerm, setSearchTerm] = useState('');
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState('');
  const [results, setResults] = useState([]);

  useEffect(() => {
    const timerId = setTimeout(() => {
      setDebouncedSearchTerm(searchTerm);
    }, DebounceDelay);
    return () => {
      clearTimeout(timerId);
    };
  }, [searchTerm]);

  useEffect(() => {
    searchUsers(debouncedSearchTerm).then((res) => onSearch(res));
  }, [debouncedSearchTerm]);

  useEffect(() => {
    if (debouncedSearchTerm === '') {
      onSearch([]);
      return;
    }
  }, [debouncedSearchTerm]);

  return (
    <>
      <form>
        <input
          placeholder="Search"
          className=""
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <h1 className="" onClick={() => setSearchTerm('')}>
          X
        </h1>
      </form>
    </>
  );
}
