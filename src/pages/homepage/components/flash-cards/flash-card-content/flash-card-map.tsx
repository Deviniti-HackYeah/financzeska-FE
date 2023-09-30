import { MapContainer, Marker, TileLayer } from 'react-leaflet';
import { LatLngExpression } from 'leaflet';

interface InnerProps {
  latLang: LatLngExpression;
}

export const FlashCardMap = ({ latLang }: InnerProps) => {
  const position = latLang as LatLngExpression;

  return (
    <div id="map" className="h-full min-h-full">
      <MapContainer
        scrollWheelZoom={false}
        className="h-full min-h-full"
        center={position}
        zoom={16}
      >
        <TileLayer
          attribution="Google Maps"
          url="https://www.google.cn/maps/vt?lyrs=m@189&gl=cn&x={x}&y={y}&z={z}"
        />
        <Marker position={position}></Marker>
      </MapContainer>
    </div>
  );
};
