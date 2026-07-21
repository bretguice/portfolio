import Link from 'next/link';
import classes from './Layout.module.css';

export default function Layout({ children }) {
  return (
    <>
      <a className={classes.skipLink} href="#main">Skip to content</a>
      <header className={classes.siteHeader}>
        <div className={classes.headerInner}>
          <Link className={classes.brand} href="/" aria-label="Bret Guice, homepage">
            Bret Guice
          </Link>
        </div>
      </header>
      <main id="main" tabIndex="-1">{children}</main>
    </>
  );
}
