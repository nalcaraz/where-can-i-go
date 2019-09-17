import React, { Fragment, useState } from "react";
import debounce from "../services/debounce";

function Search({ handleSearch }) {
  const [query, setQuery] = useState("");
  function handleChange(event) {
    setQuery(event.target.value);
    //debounce(handleSearch(query), 2500);
    //handleSearch(query);
  }

  function onSearch() {
    return handleSearch(query);
  }
  return (
    <Fragment>
      <div className="columns is-gapless is-centered">
        <div className="column is-three-fourths">
          <input
            className="input is-large"
            placeholder="City name"
            type="text"
            name="query"
            onChange={e => handleChange(e)}
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
