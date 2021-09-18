import React from "react";
import { Card, Col, Row, List, Avatar } from "antd";
import { Container } from "./styles";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

export const Home = () => {
  const position: any = [51.505, -0.09];
  const data = [
    {
      title: "Ant Design Title 1",
    },
    {
      title: "Ant Design Title 2",
    },
    {
      title: "Ant Design Title 3",
    },
    {
      title: "Ant Design Title 4",
    },
  ];
  return (
    <Container>
      <Row>
        <Col xs={{ span: 24 }} lg={{ span: 12 }}>
          <List
            itemLayout="horizontal"
            dataSource={data}
            renderItem={(item) => (
              <List.Item>
                <List.Item.Meta
                  avatar={
                    <Avatar
                      shape="square"
                      size={80}
                      src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                    />
                  }
                  title={<a href="https://ant.design">{item.title}</a>}
                  description="Ant Design, a design language for background applications, is refined by Ant UED Team"
                />
              </List.Item>
            )}
          />
        </Col>
        <Col xs={{ span: 24 }} lg={{ span: 12 }}>
          {/* <MapContainer
            className="map"
            center={position}
            zoom={13}
            scrollWheelZoom={false}
          >
            <TileLayer
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={position}>
              <Popup>
                A pretty CSS3 popup. <br /> Easily customizable.
              </Popup>
            </Marker>
          </MapContainer> */}
        </Col>
      </Row>
    </Container>
  );
};
