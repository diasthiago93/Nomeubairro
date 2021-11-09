import React, { useContext } from "react";
import { Col, Row, Typography, Input } from "antd";
import { Container } from "./styles";
import axios from "axios";
import { AnchorContext } from "../../context";
import { onLoadList } from "../../service/listService";
import Swal from "sweetalert2";

export const Filter = () => {
  const { Title } = Typography;
  const { Search } = Input;
  const { setlistData } = useContext(AnchorContext);

  const onFilterList = (filter: {}) => {
    try {
      axios
        .get(`http://localhost:3333/profile?radius=${filter}`)
        .then((response) => {
          setlistData(response.data);
        });
    } catch (error) {
      console.error(error);
    }
  };

  const onSearch = (value: string) => {
    if (value.length <= 5) {
      onLoadList(setlistData);
    } else {
      try {
        axios
          .get(`https://viacep.com.br/ws/${value}/json/`)
          .then((response: any) => {
            onFilterList(response.data.bairro);
          });
      } catch (error) {
        Swal.fire({
          title: "Não foi possivel carregar o CEP, por favor tente novamente!",
          html: "",
          icon: "warning",
          confirmButtonText: "Ok",
        });
      }
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
