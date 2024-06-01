// import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Syne } from "next/font/google";
const inter = Inter({
  subsets: ['latin']
});
const syne = Syne({
  subsets: ['latin'],
});

import '../styles/styles.scss';
{/* <link rel="stylesheet" href="https://unicons.iconscout.com/release/v3.0.3/css/line.css" /> */}
        

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
export default RootLayout;