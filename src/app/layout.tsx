import "@/styles/styles.scss"
import FooterComponent from "@/components/Footer/FooterComponent";
import { HeaderComponent } from "@/components/Header/HeaderComponent/HeaderComponent";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
          <div className="layout">
            <header className="header">
              <HeaderComponent />
            </header>
              <div className="containner">{children}</div>
            <footer className="footer">
              <FooterComponent />
            </footer>
          </div>
      </body>
    </html>
  );
}
