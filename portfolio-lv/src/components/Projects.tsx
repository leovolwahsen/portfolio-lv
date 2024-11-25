import React from "react";
import { Card, Typography } from "antd";

const { Title } = Typography;

const projects = [
  {
    title: "Taschenrechner",
    description: "Dieser Apple Taschenrechner ist so konzipiert, dass man so viele Berechnungen machen kann wie man möchte.",
    link: "https://apple-taschenrechner.netlify.app",
  },
  {
    title: "Yoga Guide",
    description: "Diese Yoga-Guide-Website wurde mit einer MongoDB-Datenbank gepflegt und ist vollständig responsiv. Sie verfügt über Features wie einen Dark-/Light-Mode, Toaster-Nachrichten und Anker-Links.",
    link: "https://yoga-guide-2uteimbjf-01specter01s-projects.vercel.app/"
  },
  {
    title: "QR-Code Generator",
    description: "Dieser QR-Code Generator ermöglicht es eine URL in das Eingabefeld zu geben und einen QR-Code zubekommen, diese Anwendung war ein Bedürfnis, da ich diese sehr praktisch finde und öfters nutze.",
    link: "https://lv003-qr-generator.netlify.app"
  },
  {
    title: "Interactive 3D-Kugel",
    description: " Dieser 3D-Kugel wurde mit threejs programmiert und lässt den Nutzer mittels der Maus das Objekt drehen und gleichzeitig Farben wie auch Schatten beeinflussen.",
    link: "https://3d-interactive-colorchanging-sphere.netlify.app/"
  },
  {
    title: "Kino Website",
    description: "Diese Website bietet eine Datenbank mit Aktuellen Kinofilmen wie auch alte Klassiker zum durchstöbern an. Die Anwendung ist eine auf React basierende mit Daten und Videomaterial der beliebigen Filme.",
    link: "https://lv-beste-kinofilme.netlify.app/"
  }
];

export const Projects: React.FC = () => {
  return (
    <div>
      <Title level={5} style={{ textAlign: "center", color: "rgb(255, 152, 34)" }}>
        Bisherige Projekte
      </Title>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "1rem" }}>
        {projects.map((project) => (
          <Card
            key={project.title}
            title={project.title}
            hoverable
            style={{ backgroundColor: "#444444", color: "#fff" }}
            extra={
              <a href={project.link} target="_blank" rel="noopener noreferrer" style={{ color: "rgb(255, 152, 34)" }}>
                Link
              </a>
            }
          >
            {project.description}
          </Card>
        ))}
      </div>
    </div>
  );
}