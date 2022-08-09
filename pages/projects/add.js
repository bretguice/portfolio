// import React, { useState } from 'react';
// import Head from 'next/head';
// import { fileBase64 } from '../../utils/helperFunctions';
// import classes from '../../styles/AddProject.module.css'

// const AddProject = ({ skills }) => {

//   const [formData, setFormData] = useState({ title: '', description: '', summary: '', folder: '', skills: [], url: '', code: '', images: [] });
  
//   const handleImages = async (e) => {
//         const image = e.target.files;
//             Promise.all(Array.from(image).map( (img) => fileBase64(img)))
//             .then((b64) => {
//             setFormData({...formData, images:[...formData.images, ...b64]});
//         })
//         .catch(err => console.log(err))
//       }
      
//     const handleChange = (e) => {
//       setFormData({ ...formData, [e.target.name]: e.target.value })
//     }
    
//     const handleChangeSkills = (e) => {
//         const skillsArray = [...formData.skills];
//         if(e.target.checked){
//           skillsArray = [...formData.skills, e.target.value]
//         } else {
//           skillsArray.splice(formData.skills.indexOf(e.target.value), 1);
//         }
//         setFormData({...formData, skills:skillsArray})
//       }
      
//       const handleSubmit = (e) => {
//         e.preventDefault();
//         try{
//             (async () => {
//               const response = await fetch('https://bg-portfolio-backend.herokuapp.com/projects/createProject', {
//                 method: 'POST',
//                 mode: 'cors',
//                 headers:{
//                   'Accept': 'application/json',
//                   'Access-Control-Allow-Origin': '*',
//                   'Content-type': 'application/json',
//                 },
//                 body: JSON.stringify(formData)
//               })
//               return response.json();
//             })();
            
//           } catch (err) {
//             console.log(err)
//           }
//         }
        
//         return (
//           <div>
//         <Head>
//           <title>Bret Guice | Add Projects</title>
//           <link rel="icon" href="/favicon.ico" />
//         </Head>
//         <h1 className={classes.header}>Add Projects</h1>
//         <form className={classes.form} onSubmit={(e) => handleSubmit(e)}>
//           <div className={classes.container1}>
//             <input className={classes.title} name='title' placeholder='title' onChange={(e) => handleChange(e)} />
//             <input className={classes.folder} name='folder' placeholder='folder' onChange={(e) => handleChange(e)} />
//           </div>
//           <div className={classes.container2}>
//             <input className={classes.website} name='url' placeholder='website' onChange={(e) => handleChange(e)} />
//             <input className={classes.github} name='code' placeholder='github' onChange={(e) => handleChange(e)} />
//           </div>
//           <div className={classes.container3}>
//             <textarea className={classes.description} name='description' placeholder='description' onChange={(e) => handleChange(e)} />
//             <textarea className={classes.summary} name='summary' placeholder='summary' onChange={(e) => handleChange(e)} />
//           </div>
//         <div>
//             <label>Sample Images</label>
//             <input type='file' multiple={true} onChange={handleImages} accept='.jpg, .jpeg, .png'/>
//         </div>
//         <div className={classes.skillContainer}>
//           <h5>Skills</h5>
//           <ul className={classes.skills}>
//             {skills.map(skill => (
//               <li  key={skill._id}>
//                 <label className={classes.skillLabel}>
//                   <input className={classes.skill} type='checkbox' value={skill._id} onChange={e => handleChangeSkills(e)} name={skill._id}/>
//                   {skill.title}
//                 </label>
//               </li> 
//           ))}
//           </ul>
//         </div>
//         <button className={classes.btn} type='submit'>Submit</button>
//         </form>
//     </div>
//   )
// }

// export default AddProject;

// export const getStaticProps = async () => {
//   const res = await fetch('https://bg-portfolio-backend.herokuapp.com/skills/getSkills' , {
    
//     headers:{
//       'Accept': 'application/json, text/plain, */*', 
//       'User-Agent': '*',
//       'Access-Control-Allow-Origin': '*',
//       'Content-type': 'application/json',
//     }});
//   const data = await res.json();

//   return{ 
//     props: { skills: data }
//   }
// };