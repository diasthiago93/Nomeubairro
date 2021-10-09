import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { MapContainerBox } from "./styles";
import { onLoadList } from "../../service/listService";
import { ListProps } from "./props";

export const Map = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    onLoadList(setData);
  }, []);
  const position = data.map((item: ListProps) => {
    const coordinates: any = [];
    coordinates.push(
      item.location.coordinates.latitude,
      item.location.coordinates.longitude
    );
    return (
      <Marker key={item.id} position={coordinates}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    );
  });
  return (
    <MapContainerBox>
      <MapContainer
        className="map"
        center={[-18.6041453, -46.5096698]}
        zoom={15}
        scrollWheelZoom={true}
      >
        {position}
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
      </MapContainer>
    </MapContainerBox>
  );
};
