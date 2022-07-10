import Head from 'next/head';
import classes from '../../styles/Home.module.css'

const Skills = () => {
  return (
    <>
      <Head>
          <title>My Skills</title>
          <link rel="icon" href="/favicon.ico" />
      </Head>
      <h2 className={classes.header}>My Skills</h2>
    </>
  )
}

export default Skills