import React from "react";
import { Progress, Typography } from "antd";

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
    <div>
      <Title level={5} style={{ textAlign: "center", color: "rgb(255, 152, 34)" }}>
        Kenntnisse
      </Title>
      {skills.map((skill) => (
        <div key={skill.name} style={{ margin: "0.5rem 0" }}>
          <Typography.Text>{skill.name}</Typography.Text>
          <Progress percent={skill.level} showInfo={false} strokeColor="rgb(255, 152, 34)" />
        </div>
      ))}
    </div>
  );
}