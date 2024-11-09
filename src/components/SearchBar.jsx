import React, { useState } from "react";
import "./SearchBar.css";
import SearchIcon from "../images/search-icon.png";
import Data from "../constants/states.json";

const SearchBar = () => {
  const [searchInput, setSearchInput] = useState("");
  const [searchedData, setSearchedData] = useState([]);

  const handleChange = (e) => {
    const value = e.target.value;
    setSearchInput(value);
    if (value) {
      const filteredData = Data.filter((items) =>
        items.name.toLowerCase().includes(value.toLowerCase())
      );
      setSearchedData(filteredData);
    } else {
      setSearchedData([]);
    }
  };

  const handleClick = (name) => {
    setSearchInput(name);
    setSearchedData([]);
  };

  return (
    <div className="search-container">
      <h2 className="search-heading">Search for Indian States</h2>
      <div className="search-bar">
        <input
          value={searchInput}
          onChange={handleChange}
          placeholder="Type to search..."
          className="search-input"
        />
        <div className="search-icon">
          <img src={SearchIcon} width={25} alt="Search Icon" />
        </div>
      </div>
      {searchedData.length > 0 && (
        <div className="search-items">
          <ul>
            {searchedData.slice(0, 10).map((item) => (
              <li key={item.key} onClick={() => handleClick(item.name)}>
                {item.name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default SearchBar;

