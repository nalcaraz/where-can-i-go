export function getCityByName(name) {
  //return fetch(`https://api.teleport.org/api/cities/?search=${name}`)
  return fetch(
    `https://api.teleport.org/api/cities/?search=${name}&embed=city:search-results/city:item/city:urban_area`
  )
    .then(function(response) {
      if (!response.ok) return Promise.reject(response);
      return response.json();
    })
    .then(res => {
      console.log("response", res);
      return res;
    })
    .catch(function(error) {
      console.log("ERROR: ", error);
    });
}

export function getCityInformation(id) {
  return fetch(`https://api.teleport.org/api/cities/geonameid:${id}`)
    .then(function(response) {
      if (!response.ok) return Promise.reject(response);
      return response.json();
    })
    .then(res => res._embedded["city:search-results"])
    .catch(function(error) {
      console.log("ERROR: ", error);
    });
}

export function getUrbanAreaImages(id) {
  return fetch(
    `https://api.teleport.org/api/urban_areas/teleport:${id}/images/`
  )
    .then(function(response) {
      if (!response.ok) return Promise.reject(response);
      return response.json();
    })
    .then(res => res)
    .catch(function(error) {
      console.log("ERROR: ", error);
    });
}

export function getUrbanAreaDetails(id) {
  return fetch(
    `https://api.teleport.org/api/urban_areas/teleport:${id}/?embed=ua:details&embed=ua:images&embed=ua:scores`
  )
    .then(function(response) {
      if (!response.ok) return Promise.reject(response);
      return response.json();
    })
    .then(res => {
      console.log("response", res);
      return res;
    })
    .catch(function(error) {
      console.log("ERROR: ", error);
    });
}
