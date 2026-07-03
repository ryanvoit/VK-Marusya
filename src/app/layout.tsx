import "@/styles/styles.scss"
import { ConfigProvider, Layout } from "antd";
import { Content, Footer, Header } from "antd/es/layout/layout";
import FooterComponent from "@/components/Footer/FooterComponent/FooterComponent";
import { HeaderComponent } from "@/components/Header/HeaderComponent/HeaderComponent";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
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
          <Layout className="layout">
            <Header className="header">
              <HeaderComponent />
            </Header>
            <Content>
              <div className="containner">{children}</div>
            </Content>
            <Footer className="footer">
              <FooterComponent />
            </Footer>
          </Layout>
        </ConfigProvider>
      </body>
    </html>
  );
}
