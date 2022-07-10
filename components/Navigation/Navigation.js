import Link from 'next/link';
import classes from './Navigation.module.css';


function Navigation() {
    return (
        <header className={classes.header}>
          <Link href='/'>
            <a>Home</a>
          </Link>
          <nav>
          <ul>
              <li>
                <Link href='/projects'>
                    <a>Projects</a>
                </Link>
              </li>
              <li>
                <Link href='/skills'>
                    <a>Skills</a>
                </Link>
              </li>
              <li>
                <Link href='/about'>
                    <a>About</a>    
                </Link>
              </li>
              <li>
                <Link href='/contact'>
                    <a>Contact</a>     
                </Link>
              </li>
            </ul>
          </nav>
        </header>
    )
}

export default Navigation;