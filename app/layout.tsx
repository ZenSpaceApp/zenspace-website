import '../styles/styles.scss';
import { Metadata } from 'next';
import { Inter, Syne, PT_Serif, Lora } from "next/font/google";

// 1. Setup fonts with CSS Variable names
const lora = Lora({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-lora',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const syne = Syne({
  subsets: ['latin'],
  variable: '--font-syne',
});

export const metadata: Metadata = {
  title: "Therapists. On-demand.",
  description: "Empowering mental wellness with a touch of Zen.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // 2. Add all font variables to the HTML tag
    <html lang="en" className={`${inter.variable}  ${lora.variable} ${syne.variable}`}>
      {/* 3. Set the default font-family on the body via CSS Variable */}
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
