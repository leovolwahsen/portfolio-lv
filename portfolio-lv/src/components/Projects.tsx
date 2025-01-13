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
      title: "Filmsuche Website",
      description: "Die Website Filmsuche bietet eine Plattform, auf der Nutzer aktuelle Kinofilme und zeitlose Klassiker entdecken können. Gleich beim Öffnen der Seite wird eine täglich wechselnde Filmempfehlung präsentiert, die zur Inspiration dient. Nutzer können ihre Lieblingsfilme auf der Favoriten-Seite speichern, um sie später anzusehen, während die Filme-Seite mit einer breiten Auswahl an modernen Blockbustern und klassischen Filmen zum Stöbern einlädt. Für Feedback oder Fragen steht ein Kontaktformular bereit, das validierte Daten sicher an die Datenbank übermittelt. Diese Kombination aus Inspiration, Organisation und Kommunikation macht die Website zum idealen Begleiter für Filmfans.",
      link: "https://filmsuche.netlify.app/"
    },
    {
      title: "Interactive 3D-Kugel",
      description: "Dieser 3D-Kugel wurde mit threejs programmiert und lässt den Nutzer mittels der Maus das Objekt drehen und gleichzeitig Farben wie auch Schatten beeinflussen.",
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