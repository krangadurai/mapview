import React, { Component } from "react";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";
import { useSelector } from "react-redux";

const MapView = () => {

  const listLocation = useSelector((state)=>state.app.appdata.listLocation);
  const mapStyles = {
    width: "600px", // Adjust the width to fit the column
    height: "600px",
    position: "relative", // Adjust the height to fit the desired size
  };
  const markers = listLocation.map(location => (
    <Marker
      key={location.Location}
      position={{
        lat: parseFloat(location.latitude),
        lng: parseFloat(location.longitude)
      }}
    />
  ));
  return (
    <div>
      <Map
        google={window.google}
        zoom={5}
        style={mapStyles}
        initialCenter={{ lat: 22.3511148, lng: 78.6677428 }} // Set the initial center of the map
      >
        {markers}
      </Map>
    </div>
  );
};
export default GoogleApiWrapper({
  apiKey: "AIzaSyCwcji2hyA8sV1E6qCDFoMNBfD9yFF00vM", // Replace with your API key
})(MapView);
