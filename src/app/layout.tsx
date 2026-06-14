import "./globals.css";
import Link from "next/link";
import { ConfigProvider, Layout, Flex, Button } from "antd";
import { Content, Footer, Header } from "antd/es/layout/layout";
import Image from "next/image";

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
                headerHeight: 96
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
          <Layout
            className="layout"
          >
            <Header className="header">
              <Flex
                gap='80px'
                align="center"
              >
                <Link href='/' className="header-link">
                   <Image
                      src={'/marusya.svg'}
                      alt={'marusya'}
                      width={144}
                      height={32}
                      className="header-link__img"
                    />
                </Link>
                <Flex
                  gap='40px'
                  align="center"
                >
                  <Link href='/' className="header-link header-link--routing">
                    Главная
                  </Link>
                  <Link href='/genres' className="header-link header-link--routing">
                    Жанры
                  </Link>
                  <div className="header-search">
                    <input className="header-search__input" placeholder="Поиск">
                    </input>
                    <Image
                      src={'/search.svg'}
                      alt={'search'}
                      width={24}
                      height={24}
                      className="header-search__icon"
                    />
                  </div>
                </Flex>
                <Button className="header-link">
                  Войти
                </Button>
              </Flex>
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
