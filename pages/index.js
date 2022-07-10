import Head from "next/head";
import Link from 'next/Link'
import styles from '../styles/Home.module.css'
export default function HomePage(props) {
  return (
    <>
        <Head>
            <title>Bret Guice</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <h1 className={styles.title}>Bret Guice</h1>
        <h5 className={styles.header}>Full Stack Web Developer</h5>

    </>
  )
}

