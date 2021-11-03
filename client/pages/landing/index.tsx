import React, { useState, useEffect } from 'react';
import { Row, Col } from 'antd';

import styles from '../landing/landing.module.scss';
import MapView from '../../components/map-view';
import { connect } from 'react-redux';
import { placesActions } from '../../redux/actions/places.actions';

function Landing(props) {
  const { places, getPlaces } = props;
  const [localPlaces, setPlaces] = useState([]);

  useEffect(() => {
    if (places == null) {
      getPlaces();
    }
    setPlaces(places);
  }, [places]);

  return (
    <Row className={styles.landingPage}>
      <Col span={6} className={styles.searchPanel}>
        search panel bar{JSON.stringify(localPlaces)}
      </Col>
      <Col span={18} className={styles.mapView}>
        <MapView places={localPlaces} />
      </Col>
    </Row>
  );
}

const mapStateToProps = (state) => {
  const { placesReducer } = state;
  return {
    places: placesReducer.places,
  };
};

const actionCreators = {
  getPlaces: placesActions.getPlaces,
};

export default connect(mapStateToProps, actionCreators)(Landing);
