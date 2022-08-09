import failedPage from '../404'
// import React, { useState } from 'react';
// import Head from 'next/head';
// import { fileBase64 } from '../../utils/helperFunctions';

// const AddSkill = () => {
//     const [ formData, setFormData ] = useState({title: '', img: ''});

//     const handleChange = (e) => {
//         setFormData({ ...formData, [e.target.name]: e.target.value })
//     }

//     const handleImages = async (e) => {
//         const image = e.target.files;
//             Promise.all(Array.from(image).map( (img) => fileBase64(img)))
//         .then((b64) => {
//             setFormData({...formData, img:[...formData.img, ...b64]});
//         })
//         .catch(err => console.log(err))
//       }

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         try{
//             (async () => {
//               const response = await fetch('https://bg-portfolio-backend.herokuapp.com/skills/createSkill', {
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

//         } catch (err) {
//           console.log(err)
            
//         }
//         setFormData({title: '', img: ''});
//     }


//     return(
//         <div>
//             <Head>
//                 <title>Bret Guice | Add Skills</title>
//                 <link rel="icon" href="/favicon.ico" />
//             </Head>
//             <h1>Add Skills</h1>
//             <form onSubmit={(e) => handleSubmit(e)}>
//                 <input name='title' placeholder='title' onChange={(e) => handleChange(e)} />
//             <div>
//                 <label>Sample Images</label>
//                 <input type='file' multiple={false} onChange={handleImages} accept='.jpg, .jpeg, .png'/>
//             </div>
//                     <button type='submit'>Submit</button>
//             </form>
//         </div>
//     )
// }

// export default AddSkill;

const addSkill = () =>{
    return(
        <>
            <failedPage />
        </>
    )
}

export default addSkill;