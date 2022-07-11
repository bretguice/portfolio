import Image from "next/image";
import classes from './SkillDetails.module.css';
function SkillDetails({skill}) {
    return (
        <>
        <div className={classes.container}>
            {/* <h5 className={classes.title}>{skill.title}</h5> */}
            <div layout="responsive" sizes="150px" className={classes.imgContainer}>
                <Image  className={classes.img} src={skill.img} alt={skill.title}/>
            </div>
        </div>
        </>
    )

}

export default SkillDetails;