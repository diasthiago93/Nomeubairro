import React, { useContext, useState } from "react";
import {
  List,
  Avatar,
  Button,
  Modal,
  Image,
  Row,
  Col,
  Form,
  Input,
  DatePicker,
} from "antd";
import { ListProps } from "./props";
import { Price } from "./styles";
import { AnchorContext } from "../../context";
import { CALENDAR_LOCALE } from "../../utils/calendar-locale";
import Swal from "sweetalert2";

export const ServiceList = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isModalItem, setIsModalItem] = useState<ListProps>();
  const { listData } = useContext(AnchorContext);
  const [form] = Form.useForm();

  const showModal = (item: ListProps) => {
    setIsModalItem(item);
    setIsModalVisible(true);
  };

  const handleOk = () => {
    form.resetFields();
    Swal.fire({
      title: "Solicitação enviada com sucesso! Em breve entraremos em contato.",
      html: "",
      icon: "success",
      showConfirmButton: false,
      timer: 2500,
    });

    setIsModalVisible(false);
  };
  const handleCoordinates = (latitude: string, longitude: string) => {};

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      <List
        itemLayout="horizontal"
        dataSource={listData}
        renderItem={(item: ListProps) => (
          <List.Item
            key={item.id}
            onClick={() => {
              handleCoordinates(
                item.location.coordinates.latitude,
                item.location.coordinates.longitude
              );
            }}
          >
            <List.Item.Meta
              avatar={<Avatar shape="square" size={80} src={item.image} />}
              title={item.name}
              description={item.description}
            />
            <Price>
              <b>R$ {item.price}/Dia</b>
              <Button type="primary" onClick={() => showModal(item)}>
                Solicitar
              </Button>
            </Price>
          </List.Item>
        )}
      />
      <Modal
        title={isModalItem?.name}
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Image width={200} src={isModalItem?.image} />
        <p>
          Valor: <b>R$ {isModalItem?.price}/Dia</b>
        </p>
        <p>{isModalItem?.description}</p>
        <Form layout="vertical" form={form}>
          <Row gutter={24}>
            <Col md={12} sm={24} xs={24}>
              <Form.Item label="Nome" name="nome">
                <Input type="text" />
              </Form.Item>
            </Col>
            <Col md={12} sm={24} xs={24}>
              <Form.Item label="Telefone" name="telefone">
                <Input type="text" />
              </Form.Item>
            </Col>
            <Col md={24} sm={24} xs={24}>
              <Form.Item name="date-picker" label="Data de início da locação">
                <DatePicker
                  style={{ width: "100%" }}
                  locale={CALENDAR_LOCALE}
                  format="DD/MM/YYYY"
                />
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </Modal>
    </>
  );
};
