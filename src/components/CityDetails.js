import React, { Fragment, useState } from "react";
import styled from 'styled-components'
import Map from "./Map";

function CityDetails({ info }) {
  const [position, setPosition] = useState(null)
  const {
    ["ua:details"]: details,
    ["ua:images"]: images,
    ["ua:scores"]: scores
  } = info._embedded;


    const { east, west, north, south } = info.bounding_box.latlon;
    const lng = (east + west) / 2;
    const lat = (north + south) / 2;
    setPosition({lat, lng})
  const StyledCityName = styled.h1`
text-align: center;
font-size: 5rem;`
  return (
    <Fragment>
      <StyledCityName className="bangers-text">{info.name}</StyledCityName>

      <div class="box">
        <figure className="image is-3by1">
          <img alt={info.name} src={images.photos[0].image.web} />
        </figure>
        <p dangerouslySetInnerHTML={{ __html: scores.summary }} />

      </div>

      <div className="box">
        <h1 className="is-size-3 bangers-text">Where even is {info.name} ?</h1>
        <Map longitude={position.lng} latitude={position.lat}
          style={{ width: '100%', height: '350px' }}
        ></Map>

      </div>
    </Fragment>
  );
}
export default CityDetails;
