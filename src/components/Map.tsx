import React from "react";
import L from "leaflet";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet/dist/images/marker-shadow.png";

const styles = {
  // minHeight: "40vh",
  height: "400px",
  width: "50wh",
  // marginTop: "25vh"
};

export interface GeoCodes {
  geocodes: L.LatLngExpression
}

export default function Map({geocodes}: GeoCodes) {

  return (
    <>
      <MapContainer
        center={geocodes}
        zoom={13}
        scrollWheelZoom={false}
        style={styles}
        id="mapid"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={geocodes}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </>
  );
}
