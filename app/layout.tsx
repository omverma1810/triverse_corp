import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Triverse Corp - Transform Your Vision Into Market-Leading Software',
  description:
    'We build enterprise-grade mobile apps, web platforms, and AI solutions that increase revenue by 25 lakhs+. Trusted by startups and Rs. 1Cr+ businesses across USA and India.',
  keywords: [
    'software development',
    'mobile app development',
    'web development',
    'AI ML solutions',
    'cloud infrastructure',
    'React Native',
    'Next.js',
    'Django',
    'AWS',
  ],
  authors: [{ name: 'Triverse Corp' }],
  openGraph: {
    title: 'Triverse Corp - Software Development Excellence',
    description:
      'Enterprise-grade software solutions. 9+ successful projects, Rs. 25+ lakhs revenue increase for clients.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Triverse Corp - Software Development Excellence',
    description:
      'Enterprise-grade software solutions. 9+ successful projects, Rs. 25+ lakhs revenue increase for clients.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
