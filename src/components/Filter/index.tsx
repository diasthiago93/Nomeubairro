import React, { useState } from "react";
import { Col, Row, Typography, Input } from "antd";
import { Container } from "./styles";
import axios from "axios";

export const Filter = () => {
  const { Title } = Typography;
  const { Search } = Input;
  const [data, setData] = useState([]);

  const onSearch = (value: string) => {
    try {
      axios.get(`https://viacep.com.br/ws/${value}/json/`).then((response) => {
        setData(response.data);
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Container>
      <Row justify="center">
        <Col xs={{ span: 24 }} lg={{ span: 12 }}>
          <Title>
            Alugue equipamentos de forma rápida, simples e objetiva!
          </Title>
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
