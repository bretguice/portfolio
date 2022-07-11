import Image from "next/image";
import Link from 'next/link';
import classes from './ProjectDetails.module.css';
function ProjectDetails({project}) {
    return (
        <>
        <div className={classes.container}>
            <h5 className={classes.title}>{project.title}</h5>
            <Link href={project.url}>
                <Image className={classes.img} src={project.img} alt={project.title}/>
            </Link>
            <p className={classes.description}>{project.description}</p>
            <div className={classes.links}>
                <Link className={classes.url} href={project.url}>Website</Link>
                <br></br>
                <Link className={classes.code} href={project.code}>Code</Link>
            </div>
        </div>
        </>
    )

}

export default ProjectDetails;