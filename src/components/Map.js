import React, { createRef, useEffect, useState } from 'react';
import styled from 'styled-components'
import Marker from './Marker';
//const Map = ({ latitude, longitude }) => {
    // const [map, setMap] = useState(null)
    // const [position, setPosition] = useState(null)


    // function mapDiv() {
    //     return document.getElementById("google-map")
    // }


    // const mapRef = createRef()

    // const createGoogleMap = () => {
    //     const newPosition = {
    //         lat: latitude,
    //         lng: longitude
    //     }
    //     const newMap = new window.google.maps.Map(mapRef.current, {
    //         zoom: 16,
    //         center: position,
    //         disableDefaultUI: true,
    //     })
    //     setPosition(newPosition)
    //     setMap(newMap);
    //     return newMap
    // }

    // useEffect(() => {
    //     createGoogleMap()//.catch(err=>console.log("error", err));
    // }, [])

    // return (
    //     <div >
       
    //         <div id="google-map" ref={mapRef} style={{ width: '400px', height: '300px' }}>

    //         </div>
    //         <Marker position={position} map={map}></Marker>

    //     </div>
    // );

//};

//export default Map;

class Map extends React.Component {
    
    googleMapRef = React.createRef()
  //const {latitude, longitude} = this.props;
    componentDidMount() {
    console.log(this.props)
this.createGoogleMap();
this.createMarker()
     // const googleScript = document.createElement('script')
    //   googleScript.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_GOOGLE_API_KEY}&libraries=places`
    //   window.document.body.appendChild(googleScript)
  
    //   googleScript.addEventListener('load', {
    //     googleMap: this.createGoogleMap(),
    //     marker: this.createMarker()
    //   })
    }
  
    createGoogleMap = () =>
      new window.google.maps.Map(this.googleMapRef.current, {
        zoom: 16,
        center: {
          lat: this.props.latitude,
          lng: this.props.longitude,
        },
        disableDefaultUI: true,
      })
  
    createMarker = () =>
      new window.google.maps.Marker({
        position: { lat:this.props.latitude, lng: this.props.longitude },
        map: this.googleMap,
      })
  
    render() {
      return (
        <div
          id="google-map"
          ref={this.googleMapRef}
          style={{ width: '400px', height: '300px' }}
        />
      )
    }
  }

  export default Map;