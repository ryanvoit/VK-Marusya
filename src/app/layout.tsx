import "./globals.css";
import { ConfigProvider, Layout } from "antd";
import { Content, Footer, Header } from "antd/es/layout/layout";
import FooterComponent from "@/components/FooterComponent/FooterComponent";
import HeaderComponent from "@/components/HeaderComponent/HeaderComponent";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className=' h-full antialiased'
    >
      <body className="min-h-full flex flex-col">
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
          <Layout className="layout">
            <Header className="header">
              <HeaderComponent />
            </Header>
            <Content>
              <div className="containner">{children}</div>
            </Content>
            <Footer>
              <FooterComponent />
            </Footer>
          </Layout>
        </ConfigProvider>
      </body>
    </html>
  );
}
