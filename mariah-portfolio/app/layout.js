
import Navbar from './components/Navbar';
import Whimsy from './components/Whimsy';
import './globals.css';

export const metadata = {
  title: 'Mariah Tsui',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <Whimsy />
        {children}
      </body>
    </html>
  );
}