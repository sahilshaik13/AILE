import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'AppIgnite Learning',
  description: 'Created By Mohammed Shaik Sahil',
  generator: 'v0.dev',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Page Title and Metadata */}
        <title>AppIgnite Learning</title>

        {/* Favicon */}
        <link rel="icon" href="/icon/appignite logo.ico" type="image/x-icon" />
      </head>
      <body>{children}</body>
    </html>
  );
}
