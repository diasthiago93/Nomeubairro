import React from "react";
import { Col, Row } from "antd";
import { Container } from "./styles";

import { Filter } from "../../components/Filter";
import { ServiceList } from "../../components/ServiceList";
import { Map } from "../../components/Map";

export const Home = () => {
  return (
    <>
      <Filter />
      <Container>
        <Row gutter={24}>
          <Col xs={{ span: 24 }} lg={{ span: 12 }}>
            <ServiceList />
          </Col>
          <Col xs={{ span: 24 }} lg={{ span: 12 }}>
            <Map />
          </Col>
        </Row>
      </Container>
    </>
  );
};
