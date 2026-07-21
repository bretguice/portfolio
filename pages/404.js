import Head from 'next/head';
import Link from 'next/link';

export default function NotFound() {
  return (
    <>
      <Head>
        <title>Page not found — Bret Guice</title>
        <meta name="robots" content="noindex" />
      </Head>
      <section className="not-found" aria-labelledby="not-found-title">
        <p>404</p>
        <h1 id="not-found-title">This page does not exist.</h1>
        <p><Link href="/">Return to BretGuice.com</Link></p>
      </section>
    </>
  );
}
