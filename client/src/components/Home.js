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
const FLIGHTS_QUERY = gql`
  query Flights {
    flights {
      nodes {
        id
        code
        launchSite {
          id
          name
          description
          latitude
          longitude
        }
        landingSite {
          id
          name
          description
          latitude
          longitude
        }
        departureAt
        seatCount
        availableSeats
      }
    }
  }
`;
function Home() {
  //set initial values
  const [viewport, setViewport] = useState({
    width: '80vw',
    height: '80vh',
    latitude: 41.579606918652054,
    longitude: 4.244298260567439,
    zoom: 3.5,
    bearing: 0,
    pitch: 0,
    transitionDuration: 1000
  });
  const [selectedMarker, setSelectedMarker] = useState(null);
  const { loading, error, data } = useQuery(FLIGHTS_QUERY);
  //handle loading
  if (loading) return <p>Loading...</p>;
  //handle error
  if (error) return <p>{error.message}</p>;
  return (
    <Wrapper>
      <LeftView>
        <ReactMapGL
          {...viewport}
          mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN_PUBLIC}
          mapStyle="mapbox://styles/mapbox/dark-v8"
          onViewportChange={viewport => {
            setViewport(viewport);
          }}
          onViewportChange={viewport => {
            setViewport(viewport);
          }}
        >
          {data.flights.nodes.map(flight => (
            <Marker
              key={flight.id}
              latitude={flight.launchSite.latitude}
              longitude={flight.launchSite.longitude}
            >
              <button
                onClick={e => {
                  e.preventDefault();
                  setSelectedMarker(flight);
                }}
              >
                <img src={MarkerIcon} alt="Marker Icon" width="200px" />
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
        {/* <SpaceCenterList>
          {data.spaceCenters.map(spaceCenter => (
            <SpaceCenterListItem>
              <SpaceCenters key={spaceCenter.key} spaceCenter={spaceCenter} />
            </SpaceCenterListItem>
          ))}
        </SpaceCenterList> */}
      </RightView>
    </Wrapper>
  );
}

export default Home;
