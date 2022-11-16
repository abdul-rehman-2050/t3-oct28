import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { Layout, Menu, PageHeader } from "antd";
import React, { useState } from "react";
const { Header, Sider, Content } = Layout;

type Dashboard1Props = {
  children: React.ReactNode;
};

export default function Home({ children }: Dashboard1Props) {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <Layout className="layout" >
      <PageHeader
        
        className="site-layout text-white"
        onBack={() => setCollapsed(!collapsed)}
        title="Title"
        subTitle="This is a subtitle"
      />

      <Header
        className="site-layout-background text-white"
        style={{
          padding: 0,
        }}
      >
        {React.createElement(
          collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
          {
            className: "trigger bg-white",
            onClick: () => setCollapsed(!collapsed),
          }
        )}
      </Header>

      <Layout className="site-layout">
        <Sider trigger={null} collapsible collapsed={collapsed}>
          <div className="logo p-2 text-white">RepairB</div>
          <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={["1"]}
            items={[
              {
                key: "1",
                icon: <UserOutlined />,
                label: "nav 1",
              },
              {
                key: "2",
                icon: <VideoCameraOutlined />,
                label: "nav 2",
              },
              {
                key: "3",
                icon: <UploadOutlined />,
                label: "nav 3",
              },
            ]}
          />
        </Sider>
        <Content
          className="site-layout-background"
          style={{
            margin: "24px 16px",
            padding: 24,
          }}
        >
          {children}
        </Content>
      </Layout>
    </Layout>
  );
}
