import React from 'react';
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';
import placesReducer from '../redux/reducers/places.reducer';
import { connect } from 'react-redux';

const containerStyle = {
  width: '100%',
  height: '100%',
};

const center = {
  lat: 37.772,
  lng: -122.214,
};

function MapView(props) {
  console.log('map view render');
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: 'AIzaSyBf6D_xYTWCJXrv31CIe8yA_6RRtyBjsbo',
  });

  const [map, setMap] = React.useState(null);

  const onLoad = React.useCallback(function callback(map) {
    map.setCenter(center);
    console.log(map);
    setMap(map);
  }, []);

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null);
  }, []);

  const position = {
    lat: 37.772,
    lng: -122.214,
  };

  const { places } = props;
  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={5}
      onLoad={onLoad}
      onUnmount={onUnmount}
    >
      {places &&
        places.map((place) => {
          return <Marker position={{ lat: place.lat, lng: place.lng }} />;
        })}
    </GoogleMap>
  ) : null;
}

const mapStateToProps = (state) => {
  const { placesReducer } = state;

  return {
    places: placesReducer.places,
  };
};

export default connect(mapStateToProps, null)(React.memo(MapView));
