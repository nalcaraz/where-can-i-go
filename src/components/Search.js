import React, { Fragment, useState } from "react";
import debounce from "../services/debounce";

function Search({ handleSearch, resetHasSearched }) {
  const [query, setQuery] = useState("");
  function handleChange(event) {
    setQuery(event.target.value);
    //debounce(handleSearch(query), 2500);
    //handleSearch(query);
  }

  function onSearch() {
    return handleSearch(query);
  }
  function onInputChange(e) {
    handleChange(e);
    resetHasSearched();
  }
  return (
    <Fragment>
      <div className="columns is-mobile is-gapless is-centered">
        <div className="column is-three-fourths">
          <input
            className="input is-large"
            placeholder="City name"
            type="text"
            name="query"
            onChange={onInputChange}
          />
        </div>
        <div className="column is-one-quarter">
          <button className="button is-large" onClick={onSearch}>
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
