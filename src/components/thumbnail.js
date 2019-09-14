import React, { Fragment, useState, useEffect } from "react";
import { getUrbanAreaImages } from "../services/services";

function Thumbnail({ city, handleClick }) {
  const [urbanArea, setUrbanArea] = useState(null);
  const [images, setImages] = useState(null);

  useEffect(() => {
    if (city._embedded) {
      const ua = city._embedded["city:urban_area"];
      setUrbanArea(ua);
    }
  }, [city._embedded]);

  useEffect(() => {
    if (urbanArea) {
      getUrbanAreaImages(urbanArea.ua_id).then(response => {
        setImages(response.photos);
      });
    }
  }, [urbanArea]);

  
  //console.log("images", images);
  return (
    <div
      className="card"
    >
      <header className="card-header">
        <figure className="image is-64x64">
          {images && images.length > 0 ? (
            <img alt={city.full_name} src={images[0].image.web} />
          ) : (
            <img
              alt={city.full_name}
              src="https://bulma.io/images/placeholders/128x128.png"
            />
          )}
        </figure>
        <p className="card-header-title">{city.full_name}</p>
      </header>
    </div>
  );
}

export default Thumbnail;
