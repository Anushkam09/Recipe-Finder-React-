import React from 'react';

const Search = ({ searchInput, setSearchInput }) => {
    const handleSearchChange = (event) => {
        setSearchInput(event.target.value);
    };

    return (
        <div className="home-search">
            <input
                type="text"
                placeholder="Search recipes..."
                value={searchInput}
                onChange={handleSearchChange}
            />
            <button>Search</button>
        </div>
    );
};
export default Search;
