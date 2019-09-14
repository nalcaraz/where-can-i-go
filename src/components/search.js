import React, { Fragment, useState } from "react";

function Search({ handleSearch }) {
  const [query, setQuery] = useState("");
  function handleChange(event) {
    setQuery(event.target.value);
  }

  function onSearch() {
    return handleSearch(query);
  }
  return (
    <Fragment>
      <div className="columns">
        <div className="column is-four-fifths">
          <input
            className="input"
            placeholder="City name"
            type="text"
            name="query"
            onChange={e => handleChange(e)}
          />
        </div>
        <div className="column">
          <button className="button" onClick={onSearch}>
            <span className="icon has-text-info">
              <i className="fas fa-search" />
            </span>
          </button>
        </div>
      </div>
    </Fragment>
  );
}

export default Search;
