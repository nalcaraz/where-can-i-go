import React, { useEffect, Fragment, useState } from "react";
import ReactDOM from "react-dom";
import { getCityByName, getCityInformation } from "../services/services";
import { withRouter } from "react-router-dom";
import Search from "../components/Search";
import Layout from "../containers/Layout";
import Thumbnail from "../components/Thumbnail";

function Home({ history }) {
  const [tempCities, setTempCities] = useState([]);

  const [cities, setCities] = useState([]);
  useEffect(() => {
    if (tempCities) {
      //   const ua = city._embedded["city:urban_area"];
      var filteredCities = tempCities.filter(c => {
        console.log("c", c);
        return (
          c._embedded["city:item"]._embedded &&
          c._embedded["city:item"]._embedded["city:urban_area"]
        );
      });
      console.log(filteredCities);
      setCities(filteredCities);
      // setUrbanArea(ua);
    }
  }, [tempCities]);

  function handleSearch(city) {
    getCityByName(city).then(res => {
      setTempCities(res._embedded["city:search-results"]);
    });
  }

  console.log("cities", cities);
  function handleSelectCity(id) {
    console.log("id", id);
    history.push(`details/${id}`);
  }

  return (
    <Layout>
      <h2 className="is-size-2">
        <i className="fas fa-city" />
        Where can I go?
      </h2>
      <Search handleSearch={handleSearch} />
      {cities &&
        cities.length > 0 &&
        cities.map((c, i) => (
          <Thumbnail
            key={i}
            city={c._embedded["city:item"]}
            // urban-area={c._embedded["city:item"]["city:urban_area"]}
            handleClick={id => handleSelectCity(id)}
          />
        ))}
    </Layout>
  );
}

export default withRouter(Home);
