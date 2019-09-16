import React, { useEffect, Fragment, useState } from "react";
import Layout from "../containers/Layout";
import CityDetails from "../components/CityDetails";
import { getUrbanAreaDetails } from "../services/services";

function Details({ match }) {
  const { id } = match.params;
  console.log(match);
  const [details, setDetails] = useState(null);
  useEffect(() => {
    // if (details) {
    getUrbanAreaDetails(id).then(response => setDetails(response));
    //  }
  }, [id]);

  console.log("details", details);
  return <Layout>{details && <CityDetails info={details} />}</Layout>;
}

export default Details;
