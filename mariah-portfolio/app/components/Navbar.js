'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="navbar">
      <Link href="/" className={pathname === '/' ? 'nav-active' : 'nav-link'}>about</Link>
      <Link href="/projects" className={pathname === '/projects' ? 'nav-active' : 'nav-link'}>projects</Link>
      <Link href="/awards" className={pathname === '/awards' ? 'nav-active' : 'nav-link'}>awards</Link>
    </nav>
  );
}