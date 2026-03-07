import { Metadata } from 'next'
import { Inter } from "next/font/google";
import { Syne } from "next/font/google";
const inter = Inter({
  subsets: ['latin']
});
const syne = Syne({
  subsets: ['latin'],
});

import '../styles/styles.scss';

export const metadata: Metadata = {
  title: "Therapists. On-demand.",
  description: "Empowering mental wellness with a touch of Zen.",
};


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