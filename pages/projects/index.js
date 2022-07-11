import { useRouter } from 'next/router';
import Link from 'next/link';
import Head from 'next/head';
import classes from '../../styles/Home.module.css';
import ProjectDetails from '../../components/Projects/ProjectDetails';
import odinbook from '../../styles/img/odinbook.png';
import calculator from '../../styles/img/calculator.png';
import rock_paper_scissors from '../../styles/img/rock-paper-scissors.png'
import resume_builder from '../../styles/img/resume_builder.png';
const projObj = [
{
  id: 1,
  title: "Social Media Site",
  description: "Website put together using the MERN Stack.",
  img: odinbook,
  url: 'https://odinbook-social-media.vercel.app/',
  code: 'https://github.com/bretguice/facebook-project'
},
{
  id: 2,
  title: "Resume Builder",
  description: "Website put together using the MERN Stack.",
  img: resume_builder,
  url: 'https://bretguice.github.io/cv-project/',
  code: 'https://github.com/bretguice/cv-project'
},
{
  id: 3,
  title: "Battleship",
  description: "Battleship game created using JavaScript.",
  img: odinbook,
  url: 'www.google.com',
  code: 'https://github.com/bretguice/battleship'
},
{
  id: 4,
  title: "Calculator",
  description: "Battleship game created using JavaScript.",
  img: calculator,
  url: 'www.google.com',
  code: 'https://github.com/bretguice/calculator'
},
{
  id: 5,
  title: "Rock, Paper, Scissors",
  description: "Battleship game created using JavaScript.",
  img: rock_paper_scissors,
  url: 'www.google.com',
  code: 'https://github.com/bretguice/Rock-Paper-Scissors'
},
{
  id: 6,
  title: "Todo List",
  description: "Battleship game created using JavaScript.",
  img: rock_paper_scissors,
  url: 'www.google.com',
  code: 'https://github.com/bretguice/todo'
},
]

const Projects = () => {
  const router = useRouter();
  // console.log(router.query.projectId)

  return (
    <>
      <Head>
          <title>My Projects</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
      <h2 className={classes.header}>Some of my projects</h2>
      <div className={classes.subcontainer}>
      {projObj.map((project) => (
          <div  key={project.id}>
            <ProjectDetails project={project} />
          </div>        
      ))}
        </div>
    </>
  )
}

export default Projects