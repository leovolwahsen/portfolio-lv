import React from "react";
import { Layout } from "antd";
import { Profile } from "./components/Profile"
import { ContactInfo } from "./components/ContactInfo";
import { Skills } from "./components/Skills";
import { Languages } from "./components/Languages";
import { Projects } from "./components/Projects";

const { Sider, Content } = Layout;

export const App: React.FC = () => (
  <Layout style={{ minHeight: "100vh", backgroundColor: "#222222" }}>
    <Sider width={320} style={{ backgroundColor: "#444444", padding: "1rem" }}>
      <Profile />
      <ContactInfo />
      <Skills />
      <Languages />
    </Sider>
    <Content style={{ padding: "1rem", backgroundColor: "#222222" }}>
      <Projects />
    </Content>
  </Layout>
);