import React from 'react';
import { Navbar } from '~/components/Navbar';
import NavigateBar from '~/components/NavigateBar';

import { SearchBar } from '~/components/search/SearchBar';

export default function SearchFollowers() {
  return (
    <>
      <Navbar />
      <NavigateBar title="SEARCH" />
      <SearchBar />
    </>
  );
}
