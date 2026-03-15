import '../styles/styles.scss';
import { Metadata } from 'next'
import { Inter } from "next/font/google";
import { Syne } from "next/font/google";
import { PT_Serif } from 'next/font/google';
import { Lora } from 'next/font/google';

const lora = Lora({
  subsets: ['latin'],
  weight: ['400', '700']
});

const inter = Inter({
  subsets: ['latin'],
  
  weight: ['400', '500', '600', '700']
});
const syne = Syne({
  subsets: ['latin'],
});

const ptSerif = PT_Serif({
  subsets: ['latin'],
  weight: ['400', '700']
});


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
      <body className={`${inter.className} ${syne.className} ${ptSerif.className} ${lora.className}`}>{children}</body>
    </html>
  );
}
export default RootLayout;