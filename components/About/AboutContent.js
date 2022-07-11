import classes from './About.module.css'

function AboutContent() {
    return(
        <div className={classes.container}>
            <p className={classes.content}>
            After spending 10 years in athletics working primarily in ticketing, I decided to take the plunge towards a new career path.  I am a self-taught full stack web developer.  
            My journey as a developer officially started in September 2021, but unofficially began years earlier.  Throughout my ticketing career,  I spent my spare time exploring 
            the functionality of the software to see if there were improvements I could make.  The biggest tool I tackled was attempting to fit my company and our unique business 
            with a CRM.  This process introduced me to thinking like a developer and was the launching point for me to make a career change into web development.  
            </p>
        </div>
    )
}

export default AboutContent;