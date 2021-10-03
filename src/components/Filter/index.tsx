import React from "react";
import { Col, Row, Typography, Input } from "antd";
import { Container } from "./styles";

export const Filter = () => {
  const { Title } = Typography;
  const { Search } = Input;

  const onSearch = (value: string) => console.log(value);

  return (
    <Container>
      <Row justify="center">
        <Col xs={{ span: 24 }} lg={{ span: 12 }}>
          <Title>Contrate diaristas de forma rápida, simples e objetiva!</Title>
          <Title level={5}>Digite o cep de sua região</Title>
          <Search
            size="large"
            placeholder="00000-000"
            onSearch={onSearch}
            enterButton="Pesquisar"
            style={{ width: "60%" }}
          />
        </Col>
      </Row>
    </Container>
  );
};
