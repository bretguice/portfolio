import Head from 'next/head';
import Link from 'next/link';
import classes from '../../styles/Contact.module.css';

function Contact() {
    return(
        <>
            <Head>
                <title>Contact Me</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <h2 className={classes.header}>Contact Me</h2>
            <div className={classes.container}>
                <p className={classes.content}>bretguice@yahoo.com</p>
                <Link className={classes.link} href="https://www.linkedin.com/in/bret-guice-99109b56/">
                    <a className={classes.content}>LinkedIn</a>
                </Link>

            </div>
        </>
    )
}

export default Contact;