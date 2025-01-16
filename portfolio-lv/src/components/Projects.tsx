import React from "react";
import { Button, Card, Col, Row, Space, Typography } from "antd";
import { theming } from "../../theming";

const { Title } = Typography;

export const Projects: React.FC = () => {
  const projects = [
    {
      title: "Menorca Event Website",
      description: "Diese Website bietet umfassende Informationen zu einer mehrtägigen Veranstaltung auf Menorca, die von einem Brautpaar anlässlich ihres 10-jährigen Jubiläums organisiert wird. Über das bereitgestellte Formular können Gäste sich selbst sowie eine Begleitperson registrieren. Zudem liefert die Seite umfangreiche Details zu Unterkünften, dem Veranstaltungsplan und wichtigen Kontaktinformationen, damit die Gäste optimal vorbereitet sind. Die Anwendung basiert auf React und stellt alle relevanten Daten und Details zum Event bereit, um die Planung so einfach wie möglich zu gestalten.",
      link: "https://menorca-event.netlify.app/"
    },
    {
      title: "Standard/Wissenschaftlicher Taschenrechner",
      description: "Dieser responsiv gestaltete Taschenrechner bietet zwei Modi: Standard und Wissenschaftlich. Der Standardmodus deckt die grundlegenden Rechenfunktionen ab, während der wissenschaftliche Modus erweiterte Funktionen wie trigonometrische und logarithmische Berechnungen ermöglicht. Mit einem Klick auf das Taschenrechner-Symbol können Sie bequem zwischen den Modi wechseln. Eine Besonderheit ist die automatische Klammerergänzung bei komplexen Funktionen, die für ein intuitives Nutzererlebnis sorgt. So eignet sich die Anwendung sowohl für alltägliche als auch für anspruchsvollere mathematische Aufgaben.",
      link: "https://lv-react-calculator.netlify.app/"
    },
    {
      title: "Filmsuche Website",
      description: "Die Website Filmsuche bietet eine Plattform, auf der Nutzer aktuelle Kinofilme und zeitlose Klassiker entdecken können. Gleich beim Öffnen der Seite wird eine täglich wechselnde Filmempfehlung präsentiert, die zur Inspiration dient. Nutzer können ihre Lieblingsfilme auf der Favoriten-Seite speichern, um sie später anzusehen, während die Filme-Seite mit einer breiten Auswahl an modernen Blockbustern und klassischen Filmen zum Stöbern einlädt. Für Feedback oder Fragen steht ein Kontaktformular bereit, das validierte Daten sicher an die Datenbank übermittelt. Diese Kombination aus Inspiration, Organisation und Kommunikation macht die Website zum idealen Begleiter für Filmfans.",
      link: "https://filmsuche.netlify.app/"
    },
    {
      title: "Interactive 3D-Kugel",
      description: "Dieser interaktive 3D-Kugel wurde mit threejs programmiert und bietet Nutzern die Möglichkeit, das Objekt in Echtzeit zu erkunden. Durch Mausbewegungen können die Kugel gedreht und gleichzeitig ihre Farben sowie die Intensität der Schatten angepasst werden. Dieses Projekt ist ein kreatives Beispiel dafür, wie moderne Webtechnologien genutzt werden können, um Benutzererlebnisse visuell ansprechend und interaktiv zu gestalten. Die Anwendung demonstriert eindrucksvoll die Leistungsfähigkeit von threejs in der Entwicklung dynamischer 3D-Visualisierungen.",
      link: "https://3d-interactive-colorchanging-sphere.netlify.app/"
    },
    {
      title: "QR-Code Generator",
      description: "Dieser QR-Code Generator bietet eine einfache Möglichkeit, URLs in QR-Codes zu konvertieren. Nutzer können ihre URL in das Eingabefeld eingeben und erhalten direkt den passenden QR-Code, der praktisch heruntergeladen oder geteilt werden kann. Diese Anwendung entstand aus dem persönlichen Bedürfnis nach einem nützlichen Tool, das häufige Aufgaben erleichtert und Zeit spart. Durch die intuitive Bedienung und schnelle Generierung ist dieses Projekt ein hilfreiches Werkzeug für alle, die QR-Codes im Alltag oder für berufliche Zwecke nutzen möchten.",
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