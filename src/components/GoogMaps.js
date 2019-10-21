import React from 'react';
import { Map, GoogleApiWrapper, Marker, InfoWindow, Polyline } from 'google-maps-react';

const mapStyles = {
  width: '70%',
  height: '70%',
  marginLeft: 'auto',
  marginRight: 'auto',
};


class MapContainer extends React.Component{
  constructor(){
    super();
    this.state = {
     showingInfoWindow: false,  //Hides or the shows the infoWindow
     activeMarker: {},          //Shows the active marker upon click
     selectedPlace: {}          //Shows the infoWindow to the selected place upon a marker
    };
  }
  onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });

  onClose = props => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
  };
  render() {
    const triangleCoords = [
      {lat: 33.9, lng: -113.07},
      {lat: 33.19, lng: -110.07},
      {lat: 32.321, lng: -114.07},
      {lat: 33.9, lng: -113.07},


    ];
    return (
      <div>
        <Map
          google={this.props.google}
          zoom={8}
          style={mapStyles}
          initialCenter={{ lat: 33.446348, lng: -112.073557}}
          options={{streetViewControl: false}}
        >
        <Marker
          onClick={this.onMarkerClick}
          name={'Current location'}
        />
        <InfoWindow
         marker={this.state.activeMarker}
         visible={this.state.showingInfoWindow}>
           <div>
             <h1>{this.state.selectedPlace.name}</h1>
           </div>
       </InfoWindow>
         <Polyline
            path={triangleCoords}
            strokeColor="#0000FF"
            strokeOpacity={0.8}
            strokeWeight={2}
            fillColor="#0000FF"
            fillOpacity={0.35} />
        </Map>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyCRqsPOI5rcBUu8JuHqqd_f3FwxUALjXpk'
})(MapContainer);
