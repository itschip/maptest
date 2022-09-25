import React from "react";
import { MapContainer } from "react-leaflet/MapContainer";
import { TileLayer } from "react-leaflet/TileLayer";
import L from "leaflet";
import { Marker, Polyline } from "react-leaflet";

const center_x = 117.3;
const center_y = 172.8;
const scale_x = 0.02072;
const scale_y = 0.0205; //0.0205

const CUSTOM_CRS = L.extend({}, L.CRS.Simple, {
  projection: L.Projection.LonLat,
  scale: function (zoom) {
    return Math.pow(2, zoom);
  },
  zoom: function (sc) {
    return Math.log(sc) / 0.6931471805599453;
  },
  distance: function (pos1, pos2) {
    var x_difference = pos2.lng - pos1.lng;
    var y_difference = pos2.lat - pos1.lat;
    return Math.sqrt(x_difference * x_difference + y_difference * y_difference);
  },
  transformation: new L.Transformation(scale_x, center_x, -scale_y, center_y),
});

function App() {
  return (
    <div style={{ height: "500px" }}>
      <MapContainer
        crs={CUSTOM_CRS}
        style={{ height: "500px" }}
        center={[0, 0]}
        Zoom={5}
        zoom={3}
        minZoom={1}
        maxZoom={5}
        scrollWheelZoom={false}
      >
        <TileLayer
          url="/map/mapStyles/styleAtlas/{z}/{x}/{y}.jpg"
          attribution="Online map GTA V"
        />
        <Polyline
          positions={
            [
              // [y, x]
            ]
          }
        />
      </MapContainer>
    </div>
  );
}

export default App;
