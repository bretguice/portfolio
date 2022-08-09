import Head from 'next/head';
import Navigation from '../Navigation/Navigation';
import Footer from '../Footer/Footer';
import classes from './Layout.module.css';

function Layout(props) {
  return (
    <>
      <Navigation className={classes.header} /> 
      <main className={classes.body}>{props.children}</main>
      <Footer className={classes.footer} />
    </>
  )
}

export default Layout