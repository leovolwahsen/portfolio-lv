import React from "react";
import { Flex, List, Typography } from "antd";
import { theming } from "../../theming";

const { Title } = Typography;

export const Languages: React.FC = () => {

  const languageData = ["Deutsch: Muttersprache", "Englisch: C1"];
  return (
    <Flex vertical align="center" gap={10} style={{ color: "#FFFFFF" }}>
      <Title level={5} style={{ color: theming?.colors?.primary }}>
        Sprachen
      </Title>
      <List
        size="small"
        bordered
        dataSource={languageData}
        renderItem={(item) => (
          <List.Item style={{ color: "#FFFFFF" }}>
            {item}
          </List.Item>
        )}
        style={{ width: "100%", maxWidth: 400 }}
      />
    </Flex>
  );
}