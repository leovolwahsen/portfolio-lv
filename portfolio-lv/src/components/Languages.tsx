import React from "react";
import { List, Typography } from "antd";

const { Title } = Typography;

export const Languages: React.FC = () => {
  return (
    <div>
      <Title level={5} style={{ textAlign: "center", color: "rgb(255, 152, 34)" }}>
        Sprachen
      </Title>
      <List
        size="small"
        bordered
        dataSource={["Deutsch: Muttersprache", "Englisch: C1"]}
        renderItem={(item) => <List.Item style={{ textAlign: "center" }}>{item}</List.Item>}
      />
    </div>
  );
}