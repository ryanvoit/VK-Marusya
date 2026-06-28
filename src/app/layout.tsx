'use client'

import "./globals.css";
import { ConfigProvider, Layout } from "antd";
import { Content, Footer, Header } from "antd/es/layout/layout";
import FooterComponent from "@/components/Footer/FooterComponent/FooterComponent";
import { HeaderComponent } from "@/components/Header/HeaderComponent/HeaderComponent";
import { LoginComponent } from "@/components/Main/LoginComponent/LoginComponent";
import { useState } from "react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [loginWindow, setLoginWindow] = useState(false)

  function LoginOn ():void {
    setLoginWindow(true)
  }

  function LoginOff ():void {
    setLoginWindow(false)
  } 

  return (
    <html lang="en">
      <body>
        <ConfigProvider
          theme={{
            components: {
              Layout: {
                headerBg: 'transparent',
                footerBg: 'transparent',
                headerPadding: '0 80px',
                headerHeight: 96,
                footerPadding: '40px 80px'
              },
              Button: {
                defaultHoverBg: 'transparent',
                defaultHoverBorderColor: 'transparent',
                defaultBorderColor: 'transparent',
                defaultBg: 'transparent',
                defaultColor: 'white',
                defaultActiveBg: 'transparent',
                defaultActiveBorderColor: 'transparent',
                defaultActiveColor: 'transparent',
                defaultShadow: 'none',
                defaultHoverColor: 'white'
              }
            }
          }}
        >
          <Layout className={loginWindow ? "layout" : "layout layout--loginOff"}>
            <Header className="header">
              <HeaderComponent loginOn={LoginOn}/>
            </Header>
            <Content>
              <div className="containner">{children}</div>
            </Content>
            <Footer>
              <FooterComponent />
            </Footer>
            <LoginComponent loginWindow={loginWindow} loginOff={LoginOff}/>
          </Layout>
        </ConfigProvider>
      </body>
    </html>
  );
}
