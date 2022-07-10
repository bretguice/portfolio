import { useRouter } from 'next/router';
import Link from 'next/link';
import Head from 'next/head';
import classes from '../../styles/Home.module.css';

const Projects = () => {
  const router = useRouter();
  console.log(router.query.projectId)

  return (
    <>
      <Head>
          <title>My Projects</title>
          <link rel="icon" href="/favicon.ico" />
      </Head>
      <h2 className={classes.header}>Some of my projects</h2>
    </>
  )
}

export default Projects