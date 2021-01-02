import React, { useState } from 'react';
import { useQuery, gql } from '@apollo/client';
import SpaceCenters from './SpaceCenters';
import ReactMapGL, {
  Marker,
  Popup,
  NavigationControl,
  GeolocateControl
} from 'react-map-gl';
import MarkerIcon from '../assets/images/location_marker.png';
import Wrapper from '../components/Wrapper';
import LeftView from './LeftView';
import RightView from './RightView';
import SpaceCenterList from './SpaceCenterList';
import SpaceCenterListItem from './SpaceCenterListItem';
const SPACE_CENTERS_QUERY = gql`
  query SpaceCenters {
    spaceCenters {
      id
      uid
      name
      description
      latitude
      longitude
    }
  }
`;
function Home() {
  //set initial values
  const [viewport, setViewport] = useState({
    width: '80vw',
    height: '80vh',
    latitude: 37.7577,
    longitude: -122.4376,
    zoom: 1
  });
  const [selectedMarker, setSelectedMarker] = useState(null);
  const { loading, error, data } = useQuery(SPACE_CENTERS_QUERY);
  //handle loading
  if (loading) return <p>Loading...</p>;
  //handle error
  if (error) return <p>Error</p>;
  return (
    <Wrapper>
      <LeftView>
        <ReactMapGL
          {...viewport}
          mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN_PUBLIC}
          onViewportChange={viewport => {
            setViewport(viewport);
          }}
          onViewportChange={viewport => {
            setViewport(viewport);
          }}
        >
          {data.spaceCenters.map(spaceCenter => (
            <Marker
              key={spaceCenter.id}
              latitude={spaceCenter.latitude}
              longitude={spaceCenter.longitude}
            >
              <button
                onClick={e => {
                  e.preventDefault();
                  setSelectedMarker(spaceCenter);
                }}
              >
                <img src={MarkerIcon} alt="Marker Icon" width="20px" />
              </button>
            </Marker>
          ))}
          {selectedMarker ? (
            <Popup
              latitude={selectedMarker.latitude}
              longitude={selectedMarker.longitude}
              onClose={() => setSelectedMarker(null)}
            >
              <div>{selectedMarker.name}</div>
            </Popup>
          ) : null}
          <NavigationControl />
          <GeolocateControl
            positionOptions={{ enableHighAccuracy: true }}
            trackUserLocation={true}
          />
        </ReactMapGL>
      </LeftView>
      <RightView>
        <SpaceCenterList>
          {data.spaceCenters.map(spaceCenter => (
            <SpaceCenterListItem>
              <SpaceCenters key={spaceCenter.key} spaceCenter={spaceCenter} />
            </SpaceCenterListItem>
          ))}
        </SpaceCenterList>
      </RightView>
    </Wrapper>
  );
}

export default Home;
