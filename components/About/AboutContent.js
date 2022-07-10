import classes from './About.module.css'

function AboutContent() {
    return(
        <div className={classes.container}>
            <p className={classes.content}>
            After spending 10 years in the athletics working primarily in ticketing, I decided it was time to find a new career path.  I am a self-taught full stack web developer.  
            My journey as a developer officially started in September of 2021 but unofficially began years earlier.  I would always seem to find my spare time spent exploring the
            functionality of the software I was using to see if there were improvements I could make.  The biggest tool I tackled was attmepting to fit my company and our unique business 
            with a CRM.  It is through this process that I credit to me truly learning to think like a developer even though I had yet to learn any coding skills.  
            </p>
        </div>
    )
}

export default AboutContent;