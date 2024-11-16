
import './style.css'

import project01 from "../../../src/img/projects/01.jpg"


const Project = (props) => {
    return ( 

        <li className="project">
        <a href="./project-page.html">
            <img src={project01 } alt="Project img" className="project__img"/>
            <h3 className="project__title">{props.title}</h3>
        </a>
    </li>











     );
}
 
export default Project;