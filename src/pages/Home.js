import React, { useEffect, Fragment, useState } from "react";
import { getCityByName, getCityInformation } from "../services/services";
import { withRouter } from "react-router-dom";
import Search from "../components/Search";
import Layout from "../containers/Layout";
import Thumbnail from "../components/Thumbnail";

function Home({ history }) {
  const [tempCities, setTempCities] = useState([]);
  const [hasSearched, setHasSearched] = useState(false);
  const [cities, setCities] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (tempCities) {
      var filteredCities = tempCities.filter(c => {
        return (
          c._embedded["city:item"]._embedded &&
          c._embedded["city:item"]._embedded["city:urban_area"]
        );
      });
      setCities(filteredCities);
    }
  }, [tempCities]);

  function handleSearch(city) {
    setHasSearched(true);
    setIsLoading(true);
    getCityByName(city).then(res => {
      setTempCities(res._embedded["city:search-results"]);
      setIsLoading(false);
    });
  }
  function handleSelectCity(id) {
    history.push(`details/${id}`);
  }

  function resetHasSearched() {
    setHasSearched(false);
  }

  return (
    <Layout>
      <h2 className="is-size-2 bangers-text">
        <i className="fas fa-city vertical-padding-10" />
        Where can I go?
      </h2>
      <Search handleSearch={handleSearch} resetHasSearched={resetHasSearched} />
      {isLoading && (
        <progress className="progress is-danger" max="100">
          80%
        </progress>
      )}

      {cities &&
        cities.length > 0 &&
        cities.map((c, i) => (
          <Thumbnail
            key={i}
            city={c._embedded["city:item"]}
            handleClick={id => handleSelectCity(id)}
          />
        ))}
      {cities.length === 0 && hasSearched && !isLoading && (
        <p className="bangers-text">
          Sorry, there are no cities for your search.
        </p>
      )}
    </Layout>
  );
}

export default withRouter(Home);
