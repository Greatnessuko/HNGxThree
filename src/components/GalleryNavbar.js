import React from 'react';
// import { FaSearch } from 'react-icons/fa';

const GalleryNavbar = ({ setSearchTerm, onSearch }) => {
  const handleInputChange = (e) => {
    console.log('Input changed:', e.target.value);
    setSearchTerm(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent form submission
    onSearch();
  };

  return (
    <div className="navbar">
      <h2>Galleria<span className='logo-span'></span></h2>
      <nav className="nav">
        <form className="search-form" onSubmit={handleSubmit}>
          <input
            type="search"
            placeholder="discover beautiful images"
            className="search-input"
            onChange={handleInputChange}
          />
          {/* <button type="submit" className="search-button">
            <FaSearch />
          </button> */}
        </form>
        <ul>
          <li></li>
          <li></li>
        </ul>
      </nav>
    </div>
  );
};

export default GalleryNavbar;
