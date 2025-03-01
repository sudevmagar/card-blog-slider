import { Fira_Sans } from 'next/font/google';
import './globals.css';
import 'swiper/css';
import 'swiper/css/pagination';

const firaSans = Fira_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
});

export const metadata = {
  title: 'Blog Slider',
  description: 'A responsive blog slider built with Next.js',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={firaSans.className}>{children}</body>
    </html>
  );
}