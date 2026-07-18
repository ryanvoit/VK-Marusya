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
            <header className="header">
              <HeaderComponent />
            </header>
            <main>{children}</main>
            <footer className="footer">
              <FooterComponent />
            </footer>
          </Providers>
      </body>
    </html>
  );
}
