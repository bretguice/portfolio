import Head from 'next/head';
import classes from '../../styles/Skills.module.css';
import SkillDetails from '../../components/Skills/SkillDetails';
import html5  from '../../styles/img/skills/html5.png';
import css3  from '../../styles/img/skills/css3.png';
import javascript  from '../../styles/img/skills/javascript.png';
import nodejs from '../../styles/img/skills/nodejs.png';
import express from '../../styles/img/skills/express.png';
import react from '../../styles/img/skills/react.png';
import redux from '../../styles/img/skills/redux.png';
import mongodb from '../../styles/img/skills/mongodb.png';
import mongoose from '../../styles/img/skills/mongoose.png';
import git from '../../styles/img/skills/git.png';
import github from '../../styles/img/skills/github.png';
import next from '../../styles/img/skills/next.png';
import jest from '../../styles/img/skills/jest.png';
import npm from '../../styles/img/skills/npm.png';
import heroku from '../../styles/img/skills/heroku.png';
import webpack from '../../styles/img/skills/webpack.png';
const skillObj =[
  {
    id: 1,
    title: 'html',
    img: html5
  },
  {
    id: 2,
    title: 'css',
    img: css3
  },
  {
    id: 3,
    title: 'javascript',
    img: javascript
  },
  {
    id: 4,
    title: 'nodejs',
    img: nodejs
  },{
    id: 5,
    title: 'express',
    img: express
  },{
    id: 6,
    title: 'React',
    img: react
  },{
    id: 7,
    title: 'Redux',
    img: redux
  },{
    id: 8,
    title: 'MongoDB',
    img: mongodb
  },{
    id: 9,
    title: 'Mongoose',
    img: mongoose
  },{
    id: 10,
    title: 'git',
    img: git
  },{
    id: 11,
    title: 'github',
    img: github
  },{
    id: 12,
    title: 'NextJS',
    img: next
  },{
    id: 13,
    title: 'Jest',
    img: jest
  },{
    id: 14,
    title: 'npm',
    img: npm
  },
  {
    id: 15,
    title: 'Heroku',
    img: heroku
  },{
    id: 16,
    title: 'webpack',
    img: webpack
  },
]

const Skills = () => {
  return (
    <>
      <Head>
          <title>My Skills</title>
          <link rel="icon" href="/favicon.ico" />
      </Head>
      <h2 className={classes.header}>My Skills</h2>
      <div className={classes.subcontainer}>
      {skillObj.map((skill) => (
          <div  key={skill.id}>
            <SkillDetails skill={skill} />
          </div>        
      ))}
        </div>
    </>
  )
}

export default Skills