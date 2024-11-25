import React from "react";
import { Typography } from "antd";
import ProfileImage from "../assets/images/profilbild.jpg"

const { Title } = Typography;


export const Profile: React.FC = () => {
  return (
    <div style={{ textAlign: "center", padding: "1rem" }}>
      <div
        style={{
          width: 150,
          height: 150,
          borderRadius: "50%",
          backgroundImage: `url(${ProfileImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          margin: "0 auto",
          boxShadow: "0px 0px 10px white",
        }}
      />
      <Title level={4} style={{ color: "rgb(255, 152, 34)" }}>
        Softwareentwickler
      </Title>
    </div>
  );
}