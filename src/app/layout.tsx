import "./globals.css";
import Link from "next/link";
import { ConfigProvider, Layout, Menu } from "antd";
import { Content, Footer, Header } from "antd/es/layout/layout";

const items = [
	{ key: 0, label: <Link href="/">Главная</Link> },
	{ key: 1, label: <Link href="/genres">Жанры</Link> },
];

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
              Menu: {
                horizontalItemSelectedColor: '#DC5DFC',
                itemBg: 'transparent',
                itemColor: '#FFFFFF',
                itemHoverColor: '#ffffff',
              },
              Layout: {
                headerBg: 'transparent',
                footerBg: 'transparent'
              }
            }
          }}
        >
          <Layout
            className="layout"
          >
            <Header>
              <Menu
                mode="horizontal"
                items={items}
                defaultSelectedKeys={['0']}
                classNames={{
                  itemContent: 'header-menu'
                }}
              />
            </Header>
            <Content>
               <div>{children}</div>
            </Content>
            <Footer>

            </Footer>
          </Layout>
        </ConfigProvider>
      </body>
    </html>
  );
}
