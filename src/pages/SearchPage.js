// src/pages/SearchPage.js

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import SearchBar from '../components/SearchBar';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { fetchLocation } from '../redux/searchLocationsSlice';
import SearchResults from '../components/SearchResults';

const SearchPage = () => {
  const dispatch = useDispatch();
  const [search, setSearch] = useState('');
  const [addRequestStatus, setAddRequestStatus] = useState('idle');

  const handleSearch = (e) => {
    e.preventDefault();
    if (addRequestStatus === 'idle') {
      try {
        setAddRequestStatus('pending');
        dispatch(fetchLocation(search)).unwrap();
      } catch (err) {
        throw new Error(err);
      } finally {
        setAddRequestStatus('idle');
        setSearch('');
      }
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      {/* Navigation Bar */}
      <Navbar />

      {/* Main Content */}
      <main className="flex-grow">
        {/* Search Bar */}
        <SearchBar
          handleSearch={handleSearch}
          search={search}
          setSearch={setSearch}
        />

        {/* Search Results */}
        <SearchResults search={search} />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default SearchPage;
