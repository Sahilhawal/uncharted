import React, { useState, useEffect  } from 'react'
import { Row, Col } from 'antd';

import styles from '../landing/landing.module.scss'
import MapView from '../../components/map-view';
import { connect } from "react-redux"
import {placesActions} from "../../redux/actions/places.actions"



function Landing(props) {
    const [places, setPlaces] = useState([...props.places]);

    useEffect(() => {
        props.getPlaces()
    }, []);

    useEffect(() => {
        if (props.places.length > 0 || props.places.length !== places.length) setPlaces(props.places)
    }, [props.places]);

    return (
        <Row className={styles.landingPage}>
            <Col span={6} className={styles.searchPanel}>search panel bar{JSON.stringify(places)}</Col>
            <Col span={18} className={styles.mapView}><MapView/></Col>
        </Row>
    )
}

const mapStateToProps = state => {
    const {placesReducer} = state;
    return {
        places: placesReducer.places 
    }
}

const actionCreators = {
    getPlaces : placesActions.getPlaces
}

export default connect(mapStateToProps, actionCreators)(Landing)
