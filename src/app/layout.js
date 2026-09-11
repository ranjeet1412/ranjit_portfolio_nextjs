import './globals.css';
import '@/style/style.scss';

export const metadata = {
  title: 'Ranjit Baldaniya | Software Engineer',
  description:
    'Ranjit Baldaniya is a software engineer specializing in building exceptional digital experiences.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
