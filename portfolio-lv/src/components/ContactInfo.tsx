import React from "react";
import { Typography, List, Space, Button, Flex } from "antd";
import { FaLinkedin, FaGithub, FaXingSquare } from "react-icons/fa";
import { theming } from "../../theming";

const { Title } = Typography;

export const ContactInfo: React.FC = () => {
  const socialLinks = [
    {
      href: "http://www.linkedin.com/in/leo-volwahsen",
      icon: <FaLinkedin size={32} />,
    },
    {
      href: "https://github.com/leovolwahsen",
      icon: <FaGithub size={32} />,
    },
    {
      href: "https://www.xing.com/profile/Leo_Volwahsen2/cv",
      icon: <FaXingSquare size={32} />,
    },
  ];

  const contactData = [
    "Wohnort: München",
    "Telefonnummer: +49 176 4151 8644",
    "Email: volwahsenl@gmail.com",
  ];

  return (
    <Flex vertical align="center" gap={10}>
      <Title level={5} style={{ color: theming?.colors?.primary }}>
        Kontaktdaten
      </Title>
      <List
        size="small"
        bordered
        dataSource={contactData}
        renderItem={(item) => (
          <List.Item style={{ color: "#FFFFFF" }}>
            {item}
          </List.Item>
        )}
        style={{ width: "100%", maxWidth: 400 }}
      />
      <Space size="large" >
        {socialLinks.map((link, index) => (
          <Button
            key={index}
            type="link"
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            icon={link.icon}
            style={{ color: theming?.colors?.primary }}
          />
        ))}
      </Space>
    </Flex>
  );
};
