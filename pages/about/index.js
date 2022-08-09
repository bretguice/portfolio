import Head from "next/head";
import AboutContent from "../../components/About/AboutContent";
import classes from '../../styles/Home.module.css';

function About() {
  return (
    <>
      <Head>
          <title>Bret Guice | About</title>
          <link rel="icon" href="/favicon.ico" />
      </Head>
      <h2 className={classes.header}>About Me</h2>
      <AboutContent />
    </>
  )
}

export default About;
