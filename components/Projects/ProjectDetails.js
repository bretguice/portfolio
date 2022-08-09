import Image from "next/image";
import Link from 'next/link';
import classes from './ProjectDetails.module.css';

function ProjectDetails({project}) {

    const defaultImage = project.images[0]

    return (
        <>
        <div className={classes.container} key={project._id}>
            <h5 className={classes.title}>{project.title}</h5>
            <Link href={`/projects/${project.folder}`}>  
                {project.images.length > 0 &&(
                <Image className={classes.img} src={defaultImage} height={'300px'} width={'400px'}  alt={project.title}/>
                )}
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