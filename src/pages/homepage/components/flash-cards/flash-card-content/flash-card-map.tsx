import { MapContainer, Marker, TileLayer } from 'react-leaflet';
import { LatLngExpression } from 'leaflet';

interface InnerProps {
  latLang: LatLngExpression;
}

export const FlashCardMap = ({ latLang }: InnerProps) => {
  const position = latLang as LatLngExpression;

  return (
    <div>
      <div id="map" className="h-[200px]">
        <MapContainer
          scrollWheelZoom={false}
          className="h-[200px]"
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
    </div>
  );
};
