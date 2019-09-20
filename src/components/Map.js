import React from 'react';

class Map extends React.Component {
    
    googleMapRef = React.createRef()
    
    componentDidMount() {
     const googleScript = document.createElement('script')
      googleScript.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_GOOGLE_API_KEY}&libraries=places`
      window.document.body.appendChild(googleScript)
  
      googleScript.addEventListener('load',()=> {
        this.googleMap= this.createGoogleMap();
        this.marker= this.createMarker()
      })
    }
  
    createGoogleMap = () =>
      new window.google.maps.Map(this.googleMapRef.current, {
        zoom: 5,
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
        {...this.props}
          id="google-map"
          ref={this.googleMapRef}
        />
      )
    }
  }

  export default Map;