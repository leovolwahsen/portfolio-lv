import React from "react";
import { Flex, Progress, Typography } from "antd";
import { theming } from "../../theming";

const { Title } = Typography;

const skills = [
  { name: "JavaScript / TypeScript", level: 80 },
  { name: "React", level: 85 },
  { name: "MongoDB", level: 60 },
  { name: "NodeJS / Git", level: 75 },
  { name: "SCSS/CSS/HTML", level: 85 },
];

export const Skills: React.FC = () => {
  return (
    <Flex vertical gap={10}>
      <Title level={5} style={{ textAlign: "center", color: theming?.colors?.primary }}>
        Kenntnisse
      </Title>
      <Flex vertical gap={16}>
        {skills.map((skill) => (
          <Flex vertical key={skill.name} gap={2}>
            <Typography.Text style={{ color: "white" }}>{skill.name}</Typography.Text>
            <Progress percent={skill.level} showInfo={false} strokeColor={theming?.colors?.primary} />
          </Flex>
        ))}
      </Flex>
    </Flex>
  );
}