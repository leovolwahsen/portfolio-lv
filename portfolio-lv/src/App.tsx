import React, { useEffect } from "react";
import { Col, Divider, Flex, Grid, Layout, Row, Space } from "antd";
import { Profile } from "./components/Profile"
import { ContactInfo } from "./components/ContactInfo";
import { Skills } from "./components/Skills";
import { Languages } from "./components/Languages";
import { Projects } from "./components/Projects";
import { theming } from "../theming";

const { Sider, Content } = Layout;
const { useBreakpoint } = Grid;

const SidebarContent = () => (
  <Flex vertical gap={30} justify="center">
    <Profile />
    <ContactInfo />
    <Skills />
    <Languages />
  </Flex>
);

export const App: React.FC = () => {
  const screen = useBreakpoint();
  const isLargeScreen = screen.lg;

  return (
    <Layout style={{ minHeight: "100vh", backgroundColor: isLargeScreen ? theming?.colors?.bgDark : theming?.colors?.secondary }}>
      {isLargeScreen ? (
        <Sider width={320} breakpoint="lg" collapsedWidth={0} style={{ backgroundColor: theming?.colors?.secondary, padding: "1rem" }}>
          <SidebarContent />
        </Sider>
      ) : (
        <Row justify="center" gutter={[0, 32]} style={{ padding: "1rem 0" }} >
          <Col>
            <SidebarContent />
          </Col>
        </Row>
      )}

      <Content style={{ padding: "1rem", backgroundColor: `${theming?.colors?.bgDark}` }}>
        <Projects />
      </Content>
    </Layout>
  );
}
