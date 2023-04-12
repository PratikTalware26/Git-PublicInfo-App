import React from 'react'
import Cardview from './Cardview';
import { useState } from "react";

const Search = () => {
    const [input, setInput] = useState("");
    const [search, setSearch] = useState("");

    const handleClick = () => {
        setSearch(input);
      };

  return (
    <>
        <div className="search-head-cont">
        <h1 className="app-header">GitHub Public Information</h1>
        <div className='inp-cont'>
          <input
            className="search-inp"
            type="text"
            onChange={(e) => setInput(e.target.value)}
          />
          <button className="search-btn" onClick={handleClick}>
            Search
          </button>
        </div>
      </div>
      <Cardview search={search}/>
    </>
  )
}

export default Search