import React from "react";
import { Map, Marker, GoogleApiWrapper } from "google-maps-react";

type TProps = {
  lat: number | null;
  lng: number | null;
  google: any;
};
function Maps({ lat = 0, lng = 0, google }: TProps) {
  return (
    <Map initialCenter={{ lat, lng }} google={google}>
      <Marker />
    </Map>
  );
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyA2sU2T8SBciTM9IU-2lcLPnYbccuJQsb4",
})(Maps);
