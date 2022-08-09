import Head from 'next/head';
import classes from '../../styles/Project.module.css';
import ProjectDetails from '../../components/Projects/ProjectDetails';

const Projects = ({ projects }) => { 
  return (
    <>
      <Head>
          <title>Bret Guice | Projects</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
      <h2 className={classes.header}>Some of my projects</h2>
      <div className={classes.subcontainer}>
      {projects.map((project) => (
          <div  key={project.id}>
            <ProjectDetails project={project} />
          </div>        
      ))}
        </div>
    </>
  )
}

export default Projects;

export const getStaticProps = async () => {
  const res = await fetch('https://bg-portfolio-backend.herokuapp.com/projects/getProjects');
  const data = await res.json();
  return {
      props: {projects: data }
  }

}