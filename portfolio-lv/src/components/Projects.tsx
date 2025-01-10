import React from "react";
import { Button, Card, Col, Row, Space, Typography } from "antd";
import { theming } from "../../theming";

const { Title } = Typography;

export const Projects: React.FC = () => {
  const projects = [
    {
      title: "Menorca Event Website",
      description: "Diese Website bietet umfassende Informationen zu einer mehrtägigen Veranstaltung auf Menorca, die von einem Brautpaar anlässlich ihres 10-jährigen Jubiläums organisiert wird. Über das bereitgestellte Formular können Gäste sich selbst sowie eine Begleitperson registrieren. Die Anwendung basiert auf React und stellt alle relevanten Daten und Details zum Event bereit.",
      link: "https://menorca-event.netlify.app/"
    },
    {
      title: "Standard/Wissenschaftlicher Taschenrechner",
      description: "Dieser responsiv gestaltete Taschenrechner bietet zwei Modi: Standard und Wissenschaftlich. Mit einem Klick auf das Taschenrechner-Symbol wechseln Sie zwischen den Modi. Der wissenschaftliche Modus ermöglicht erweiterte Funktionen wie trigonometrische und logarithmische Berechnungen. Komplexe Funktionen schließen Klammern automatisch, um Berechnungen intuitiv zu gestalten.",
      link: "https://lv-react-calculator.netlify.app/",
    },
    {
      title: "Interactive 3D-Kugel",
      description: " Dieser 3D-Kugel wurde mit threejs programmiert und lässt den Nutzer mittels der Maus das Objekt drehen und gleichzeitig Farben wie auch Schatten beeinflussen.",
      link: "https://3d-interactive-colorchanging-sphere.netlify.app/"
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
      title: "Kino Website",
      description: "Diese Website bietet eine Datenbank mit Aktuellen Kinofilmen wie auch alte Klassiker zum durchstöbern an. Die Anwendung ist eine auf React basierende mit Daten und Videomaterial der beliebigen Filme.",
      link: "https://lv-beste-kinofilme.netlify.app/"
    }
  ];

  return (
    <Space direction="vertical" size="large">
      <Title level={5} style={{ textAlign: "center", color: theming?.colors?.primary }}>
        Bisherige Projekte
      </Title>
      <Row gutter={[16, 16]}>
        {projects.map((project) => (
          <Col key={project?.title} xs={24} sm={12} md={8} lg={6}>
            <Card title={project?.title} hoverable style={{ backgroundColor: '#444444', color: '#ffffff' }}
              extra={
                <Button type="link" href={project.link} target="_blank" rel="noopener noreferrer" style={{ color: theming?.colors?.primary }}>
                  Link
                </Button>
              }
            >
              {project?.description}
            </Card>
          </Col>
        ))}
      </Row>
    </Space>
  );
}