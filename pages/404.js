import Head from 'next/head';
import Link from 'next/link';

const NotFound = () => {
    return(
        <>
            <Head>
                <title>Bret Guice | 404</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="not-found">
                <h1>Ooops</h1>
                <h2>That page cannot be found!</h2>
                <p>Go back to the <Link href='/'><a>Homepage</a></Link> </p>
            </div>
        </>
    )
}

export default NotFound;