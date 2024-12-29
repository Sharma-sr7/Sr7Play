import React, { useState } from "react";
import "./SearchBar.css";
import search_icon from '../assets/search.png'

const Search = ({ onSearchChange }) => {
  const [inputValue, setInputValue] = useState("");
  const [filteredSuggestions, setFilteredSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const suggestions = [
    "Gaming","Game","Film","Vehicles","Animation","Auto",
    "Music","Songs","Pets","Animals","Sports","Short films","Travel",
    "Events","Comedy","Fun videos","Science",
    "Technology"


  ];

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputValue(value);

    if (value) {
      const filtered = suggestions.filter((suggestion) =>
        suggestion.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredSuggestions(filtered);
      setShowSuggestions(true);
    } else {
      setFilteredSuggestions([]);
      setShowSuggestions(false);
    }
  };

  const handleSuggestionClick = (suggestion) => {
    if (onSearchChange) {
      onSearchChange(suggestion);
    }
    setInputValue("");
    setFilteredSuggestions([]);
    setShowSuggestions(false);
  };
  const handleSearchClick = () => {
    if (inputValue && onSearchChange) {
        onSearchChange(inputValue);
      }
      setInputValue("");
      setFilteredSuggestions([]);
      setShowSuggestions(false);
    
  };

  return (
    <div className="search-container flex-div">
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Search..."
        className="search-input"
      />
      {showSuggestions && filteredSuggestions.length > 0 && (
        <ul className="suggestions-list">
          {filteredSuggestions.map((suggestion, index) => (
            <li
              key={index}
              onClick={() => handleSuggestionClick(suggestion)}
              className="suggestion-item"
            >
              {suggestion}
            </li>
          ))}
        </ul>
        
      )}
      <img src={search_icon} onClick={handleSearchClick} alt="" />

    </div>
  );
};

export default Search;
