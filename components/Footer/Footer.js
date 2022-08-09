import classes from './Footer.module.css';

function Footer() {
    return(
        <footer className={classes.footer}>
            <div className={classes.content}>
                <div>Bret Guice</div>   
                <a href='mailto:bretguice@yahoo.com'>bretguice@yahoo.com</a>
            </div>
        </footer>
    )
}

export default Footer;