import Head from "next/head";
import Image from "next/image";
import classes from '../styles/Home.module.css';
import bret from '../styles/img/home/bret.jpg';

function HomePage(props) {
  return (
    <>
        <Head>
            <title>Bret Guice | Home</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <div className={classes.container}>
          <h1 className={classes.title}>Bret Guice</h1>
          <h5 className={classes.header}>Full Stack Web Developer</h5>
          <div className={classes.imgContainer}>
            <Image className={classes.img} alt='Bret' src={bret} />
          </div>
        </div>
    </>
  )
}


export default HomePage;

