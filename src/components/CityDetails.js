import React, { Fragment, useState } from "react";
import Map from "./Map";

function CityDetails({ info }) {
  const [map, setMap] = useState(null)
const [position, setPosition] = useState(null)
  const {
    ["ua:details"]: details,
    ["ua:images"]: images,
    ["ua:scores"]: scores
  } = info._embedded;

//   const mapLocation = [
//  latitude: info.bounding_box.latlon.east,
//     info.bounding_box.latlon.north
//   ];
  

  return (
    <Fragment>
      <h1 className="is-size-1">{info.name}</h1>
      <figure className="image is-3by1">
        <img alt={info.name} src={images.photos[0].image.web} />
      </figure>
      <p dangerouslySetInnerHTML={{ __html: scores.summary }} />
      <Map latitude={info.bounding_box.latlon.east} longitude={ info.bounding_box.latlon.north} ></Map>
    </Fragment>
  );
}
export default CityDetails;
