import React from "react";
import L from "leaflet";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet/dist/images/marker-shadow.png";

const styles = {
  height: "60vh",
  width: "50wh",
  // marginTop: "25vh"
};

const icon: L.DivIcon = L.divIcon({
  className: "mapIcon",
  iconSize: [20, 20],
  iconAnchor: [0, 0],
  popupAnchor: [15, 0],
});

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
        // style={styles}
        id="mapid"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={geocodes} icon={icon}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </>
  );
}
