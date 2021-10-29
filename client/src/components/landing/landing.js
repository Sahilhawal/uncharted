import React from 'react';
import { Row, Col } from 'antd';
import Map from '../right-panel/map';

function Landing() {
  return (
    <>
      <Row>
        <Col span={6}>col</Col>
        <Col span={18}>
          <Map />
        </Col>
      </Row>
    </>
  );
}

export default Landing;
