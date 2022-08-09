import Head from 'next/head';
import Link from 'next/link';
import ImageSlider from '../../components/ImageSlider/ImageSlider';
import SingleImage from '../../components/SingleImage/SingleImage';
import classes from '../../styles/ProjectId.module.css';

const ProjectId = ({ project }) => {

    const projectTitle = project.title;

    return (
        <>
            <Head>
                <title>Bret Guice | {projectTitle}</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className={classes.main}>
                <h1 className={classes.title}>{projectTitle}</h1>
                <h3 className={classes.description}>{project.description}</h3>
                <div className={classes.slider}>
                    {project.images.length > 1 ? 
                    <ImageSlider className={classes.images} images={project.images} /> :

                    <SingleImage image={project.images[0]} projectTitle={projectTitle} />        
                }
                </div>
                <p className={classes.summary}>{project.summary}</p>
                <div className={classes.links}>
                    <Link href={project.url}>
                        <h6 className={classes.website}>Website</h6>
                    </Link>
                    <Link href={project.code}>
                        <h6 className={classes.code}>Code</h6>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default ProjectId;

export const getStaticPaths = async () => {
    const res = await fetch('https://bg-portfolio-backend.herokuapp.com/projects/getProjects')
    const data = await res.json();

    const paths = data.map(project => {
        return {
            params: { projectId: project.folder.toString()}
        }
    })

    return { 
        paths,
        fallback: false
    }
}

export const getStaticProps = async (context) => {
    const id = context.params.projectId;
    const res = await fetch('https://bg-portfolio-backend.herokuapp.com/projects/getProjectByFolder/'+id, {
    
        headers:{
          'Accept': 'application/json, text/plain, */*', 
          'User-Agent': '*',
          'Access-Control-Allow-Origin': '*',
          'Content-type': 'application/json',
        }});
    const data = await res.json();


    return {
        props: {project: data }
    }

}