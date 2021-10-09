import React, { useEffect, useState } from "react";
import { List, Avatar } from "antd";
import { ListProps } from "./props";
import { onLoadList } from "../../service/listService";

export const ServiceList = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    onLoadList(setData);
  }, []);

  return (
    <List
      itemLayout="horizontal"
      dataSource={data}
      renderItem={(item: ListProps) => (
        <List.Item key={item.id}>
          <List.Item.Meta
            avatar={<Avatar size={80} src={item.image} />}
            title={<a href="https://ant.design">{item.name}</a>}
            description={item.description}
          />
        </List.Item>
      )}
    />
  );
};
