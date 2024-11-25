import React from "react";
import { Typography, List } from "antd";
import { FaLinkedin, FaGithub, FaXingSquare } from "react-icons/fa";

const { Title } = Typography;

export const ContactInfo: React.FC = () => {
  return (
    <div>
      <Title level={5} style={{ textAlign: "center", color: "rgb(255, 152, 34)" }}>
        Kontaktdaten
      </Title>
      <List
        size="small"
        bordered
        dataSource={[
          "Wohnort: Ludwigshafen am Rhein",
          "Telefonnummer: +49 176 4151 8644",
          "Email: volwahsenl@gmail.com",
          "Github: Leo Volwahsen",
        ]}
        renderItem={(item) => <List.Item style={{ textAlign: "center" }}>{item}</List.Item>}
      />
      <div style={{ display: "flex", justifyContent: "center", marginTop: "1rem" }}>
        <a href="http://www.linkedin.com/in/leo-volwahsen" target="_blank" rel="noopener noreferrer">
          <FaLinkedin size={32} color="rgb(255, 152, 34)" style={{ margin: "0 1rem" }} />
        </a>
        <a href="https://github.com/leovolwahsen" target="_blank" rel="noopener noreferrer">
          <FaGithub size={32} color="rgb(255, 152, 34)" style={{ margin: "0 1rem" }} />
        </a>
        <a href="https://www.xing.com/profile/Leo_Volwahsen2/cv" target="_blank" rel="noopener noreferrer">
          <FaXingSquare size={32} color="rgb(255, 152, 34)" style={{ margin: "0 1rem" }} />
        </a>
      </div>
    </div>
  );
}