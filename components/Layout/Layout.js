import Link from 'next/link';
import { useRouter } from 'next/router';
import classes from './Layout.module.css';

export default function Layout({ children }) {
  const router = useRouter();

  return (
    <>
      <a className={classes.skipLink} href="#main">Skip to content</a>
      <header className={classes.siteHeader}>
        <div className={classes.headerInner}>
          <Link className={classes.brand} href="/" aria-label="Bret Guice, homepage">
            Bret Guice
          </Link>
          <nav className={classes.siteNav} aria-label="Primary navigation">
            <Link href="/" aria-current={router.pathname === '/' ? 'page' : undefined}>
              About
            </Link>
            <Link href="/work" aria-current={router.pathname === '/work' ? 'page' : undefined}>
              Work
            </Link>
            <Link href="/conversation" aria-current={router.pathname === '/conversation' ? 'page' : undefined}>
              Media
            </Link>
            <Link href="/notes" aria-current={router.pathname.startsWith('/notes') ? 'page' : undefined}>
              Notes
            </Link>
          </nav>
        </div>
      </header>
      <main id="main" tabIndex="-1">{children}</main>
    </>
  );
}
