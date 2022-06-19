import React, { useState, useEffect } from "react";
import axios from "axios";

const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchParam, setsearchParam] = useState(null);
  const [results, setResults] = useState([]);
  const [badSearch, setBadSearch] = useState(false);

  const url = `https://en.wikipedia.org/w/api.php?action=query&origin=*&format=json&generator=search&gsrnamespace=0&gsrlimit=5&gsrsearch=`;

  const onSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const searchWiki = async () => {
    const resultsRaw = await axios.get(`${url}'${searchTerm}'`);
    if (resultsRaw.data.query) {
      const displayResults = [];
      for (const [key, value] of Object.entries(resultsRaw.data.query.pages)) {
        if (typeof value === "object" && value != null) {
          displayResults.push({
            id: key,
            title: value.title,
          });
        }
      }
      const resultElements = displayResults.map((item) => {
        return (
          <div className="item" key={item.id}>
            <div className="header">{item.title}</div>
            <p>{item.id}</p>
            <button onClick={() => {window.location = `https://en.wikipedia.org?curid=${item.id}`}}>View on Wikipedia</button>
          </div>
        );
      });
      setResults(resultElements);
      setBadSearch(false);
    } else {
      setResults([]);
      setBadSearch(true);
    }
  };

  useEffect(() => {
    const timeoutSearch = setTimeout(() => {
        if (searchTerm) {
            searchWiki();
        }
    }, 500);
    return () => {
        clearTimeout(timeoutSearch)
    }
  }, [searchTerm]);

  return (
    <div className="ui segment">
      <h2>Search</h2>
      <form className="ui form">
        <div className="field">
          <label htmlFor="wikiSearch">Search here:</label>
          <input
            type="text"
            key="wikiSearch"
            placeholder="example: Pinatas"
            onChange={onSearchChange}
            value={searchTerm}
          />
        </div>
      </form>
      <br />
      {badSearch ? <h4>No Results :/</h4> : null}
      <div className="ui list">
        {results}
      </div>
    </div>
  );
};

export default Search;
