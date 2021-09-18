import React from "react";
import { Card, Col, Row } from "antd";
import { Container } from "./styles";

export const Home = () => {
  return (
    <Container>
      <Row>
        <Col xs={{ span: 24 }} lg={{ span: 12 }}>
          <Card title="NOME DO ITEM">
            <p>Card content</p>
            <p>Card content</p>
            <p>Card content</p>
          </Card>
        </Col>
        <Col xs={{ span: 24 }} lg={{ span: 12 }}>
          Col
        </Col>
      </Row>
    </Container>
  );
};
