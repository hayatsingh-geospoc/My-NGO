import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ClientLayout from '@/components/layout/ClientLayout';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Animal NGO Portal',
  description:
    'Connecting animal lovers with NGOs making a difference in animal welfare and conservation',
  icons: {
    icon: [{ url: 'https://img.icons8.com/fluency/48/paw-print.png' }],
    apple: [{ url: 'https://img.icons8.com/fluency/96/paw-print.png' }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
        <Header />
        <ClientLayout>
          <main className='flex-grow'>{children}</main>
        </ClientLayout>
        <Footer />
      </body>
    </html>
  );
}
