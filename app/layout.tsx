import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Syne } from "next/font/google";
const inter = Inter({
  subsets: ['latin']
});
const syne = Syne({
  subsets: ['latin'],
});
// import 'bootstrap/dist/css/bootstrap.css';
import '../styles/styles.scss';


function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${syne.className} `}>{children}</body>
    </html>
  );
}
export default RootLayout;``