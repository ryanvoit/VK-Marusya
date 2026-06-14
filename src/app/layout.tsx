import "./globals.css";
import Link from "next/link";
import { ConfigProvider, Layout, Menu } from "antd";
import { Footer, Header, Content } from "antd/es/layout/layout";

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
                horizontalItemSelectedColor: 'red'
              }
            }
          }}
        >
          <Layout>
            <Header>
              <Menu
                mode="horizontal"
                items={items}
                classNames={{
                  root: 'header-menu',
                  item: 'header-menu__item'
                }}
              />
            </Header>
            <Content>
              <div>{children}</div>
            </Content>
            <Footer
              className='footer-menu'
            >
            </Footer>
          </Layout>
        </ConfigProvider>
      </body>
    </html>
  );
}
