import { useState } from "react";
import ReactMapGL, { Marker } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";

export {};

export default function Map() {
  const [viewport, setViewport] = useState({
    latitude: 41.711747,
    longitude: 44.774907,
    zoom: 15,
  });
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        maxWidth: "684px",
        maxHeight: "380px",
      }}
    >
      <ReactMapGL
        {...viewport}
        style={{ width: "100%", height: "100%", borderRadius: "4px" }}
        mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_API_TOKEN}
        onMove={(nextViewport) => setViewport(nextViewport.viewState)}
        mapStyle="mapbox://styles/ata123/claausf30002514phgizd0nb0"
      >
        <Marker
          latitude={41.711747}
          longitude={44.774907}
          anchor="bottom"
        ></Marker>

        {/* <div
          onClick={() => {
            setViewport({
              ...viewport,
              zoom: 0,
              viewState: {
                ...viewport.viewState,
                zoom: viewport.viewState?.zoom
                  ? viewport.viewState?.zoom - 1
                  : viewport.zoom - 1,
              },
            });
          }}
          style={{
            position: "absolute",
            width: "100px",
            height: "100px",
            backgroundColor: "green",
          }}
        >
          avoie
        </div> */}
      </ReactMapGL>
    </div>
  );
}
