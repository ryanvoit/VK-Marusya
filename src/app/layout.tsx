'use client'

import "./globals.css";
import { ConfigProvider, Layout } from "antd";
import { Content, Footer, Header } from "antd/es/layout/layout";
import FooterComponent from "@/components/Footer/FooterComponent/FooterComponent";
import { HeaderComponent } from "@/components/Header/HeaderComponent/HeaderComponent";
import { AuthComponent } from "@/components/Auth/AuthComponent/AuthComponent";
import { useState } from "react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [authWindow, setAuthWindow] = useState(false)

  function authOn ():void {
    setAuthWindow(true)
  }

  function authOff ():void {
    setAuthWindow(false)
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
          <Layout className={authWindow ? "layout" : "layout layout--authOff"}>
            <Header className="header">
              <HeaderComponent loginOn={authOn}/>
            </Header>
            <Content>
              <div className="containner">{children}</div>
            </Content>
            <Footer>
              <FooterComponent />
            </Footer>
            <AuthComponent authWindow={authWindow} authOff={authOff}/>
          </Layout>
        </ConfigProvider>
      </body>
    </html>
  );
}
