import React from "react";
import { Flex, Typography, Image } from "antd";
import ProfileImage from "../assets/images/profilbild.jpg"
import { theming } from "../../theming";

const { Title } = Typography;

export const Profile: React.FC = () => {
  return (
    <Flex vertical align="center" gap={10} >
      <Image width={150} src={ProfileImage} style={{ borderRadius: "50%", backgroundSize: "cover", boxShadow: "0px 0px 10px white" }} preview={false} />
      <Title level={4} style={{ color: theming?.colors?.primary }}>
        Softwareentwickler
      </Title>
    </Flex>
  );
}