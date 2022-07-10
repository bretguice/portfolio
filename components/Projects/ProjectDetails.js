import Image from "next/image";

function ProjectDetails({props}) {
    return (
        <>
            <Image src={props.img} alt={props.title}/>
        </>
    )

}

export default ProjectDetails;