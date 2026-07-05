import "@/styles/styles.scss"
import FooterComponent from "@/components/Footer/FooterComponent";
import { HeaderComponent } from "@/components/Header/HeaderComponent/HeaderComponent";
import { Providers } from "./providers";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <div className="layout">
            <header className="header">
              <HeaderComponent />
            </header>
            <div className="containner">{children}</div>
            <footer className="footer">
              <FooterComponent />
            </footer>
          </div>
          </Providers>
      </body>
    </html>
  );
}
