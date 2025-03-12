import './globals.css';
import { Inter } from 'next/font/google';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import { SessionProvider } from 'next-auth/react';
import AuthProvider from './providers/AuthProvider';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'ChanceTv Studios',
  description: 'Your premier destination for film production and entertainment',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          <Navigation />
          <main>{children}</main>
          <Footer />
        </AuthProvider>
      </body>
    </html>
  );
}

