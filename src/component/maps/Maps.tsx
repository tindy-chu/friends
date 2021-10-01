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
  apiKey: process.env.REACT_APP_GOOGLE_MAP_KEY || "",
})(Maps);
