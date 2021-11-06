import React, { useEffect, useState } from "react";
import { List, Avatar, Button, Modal, Image } from "antd";
import { ListProps } from "./props";
import { onLoadList } from "../../service/listService";
import { Price } from "./styles";

export const ServiceList = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isModalItem, setIsModalItem] = useState<ListProps>();

  const showModal = (item: ListProps) => {
    setIsModalItem(item);
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  const [data, setData] = useState([]);
  useEffect(() => {
    onLoadList(setData);
  }, []);

  return (
    <>
      <List
        itemLayout="horizontal"
        dataSource={data}
        renderItem={(item: ListProps) => (
          <List.Item key={item.id}>
            <List.Item.Meta
              avatar={<Avatar shape="square" size={80} src={item.image} />}
              title={item.name}
              description={item.description}
            />
            <Price>
              <b>R$ {item.price}/hora</b>
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
          Valor: <b>R$ {isModalItem?.price}</b>
        </p>
        <p>{isModalItem?.description}</p>
      </Modal>
    </>
  );
};
