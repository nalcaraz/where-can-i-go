import React, { Fragment } from "react";

function CityDetails({ info }) {
  const {
    ["ua:details"]: details,
    ["ua:images"]: images,
    ["ua:scores"]: scores
  } = info._embedded;

  return (
    <Fragment>
      <h1 className="is-size-1">{info.name}</h1>
      <figure className="image is-3by1">
        <img alt={info.name} src={images.photos[0].image.web} />
      </figure>
      <p dangerouslySetInnerHTML={{ __html: scores.summary }} />
    </Fragment>
  );
}
export default CityDetails;
