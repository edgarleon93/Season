import React from 'react';
import { Navbar } from '~/components/Navbar';
import Sidebar from '~/components/Sidebar';
import { SearchBar } from '~/components/search/SearchBar';

export default function SearchFollowers() {
  return (
    <>
      <Navbar />
      <Sidebar title="SEARCH" />
      <SearchBar />
    </>
  );
}
