import React, { useEffect, Fragment, useState } from "react";
import ReactDOM from "react-dom";
import { getCityByName, getCityInformation } from "./services/services";

import Search from "./components/search";
import Layout from "./containers/layout";
import Thumbnail from "./components/thumbnail";

function App() {
  const [cities, setCities] = useState([]);
  useEffect(() => {
    // getCityByName("portland").then(res => console.log(res));
  });

  function handleSearch(city) {
    getCityByName(city).then(res => {
      setCities(res._embedded["city:search-results"]);
    });
  }
  console.log("cities", cities);
  function handleSelectCity(href) {
    // getCityInformation(cityId);
    //parseGeonameId(href)
    fetch(href)
      .then(function(response) {
        if (!response.ok) return Promise.reject(response);
        return response.json();
      })
      .then(res => console.log("res", res))
      .catch(function(error) {
        console.log("ERROR: ", error);
      });
  }

  return (
    <Layout>
      <Search handleSearch={handleSearch} />
      {cities &&
        cities.length > 0 &&
        cities.map((c, i) => (
          <Thumbnail
            key={i}
            city={c._embedded["city:item"]}
            // urban-area={c._embedded["city:item"]["city:urban_area"]}
            handleClick={href => handleSelectCity(href)}
          />
        ))}
    </Layout>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
