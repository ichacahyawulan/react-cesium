import './App.css';

import { hot } from "react-hot-loader/root";

import React from "react";
import { Viewer, Entity, PointGraphics, CameraFlyTo} from "resium";
import { Cartesian3, createWorldTerrain, IonResource, Ion} from "cesium";

Ion.defaultAccessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiIxYzM4OWE0NS0wOThhLTQ0NmEtYWYxNS04MmIzZTQ2NTU5N2MiLCJpZCI6NjM4NDcsImlhdCI6MTYyODU4MzM2Nn0.chc8j4Gq-qWvw5j8pxnRO3A1IyWhWVMEifs5yFhkjC8';

const terrainProvider = createWorldTerrain(
  {
    url: IonResource.fromAssetId(3957),
    requestWaterMask : true, // required for water effects
    requestVertexNormals : true // required for terrain lighting
  }
);

const position = Cartesian3.fromDegrees(107.613144, -6.905977, 3000);

const App = () => (

  <Viewer full terrainProvider={terrainProvider}>
    <Entity position={position}>
      <PointGraphics pixelSize={10} />
    </Entity>

    <CameraFlyTo
      destination={position}
      orientation={{
        heading: 0.1,
        pitch: -0.2,
        roll : 0,
      }}
      duration={0}>
    </CameraFlyTo>
  </Viewer>
);

export default hot(App);
