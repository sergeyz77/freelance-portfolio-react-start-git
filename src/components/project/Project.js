

import './style.css'




const Project = ({title,img,index}) => {
    return ( 
        
        <li className="project">
        <a href="./project-page.html">
            <img src={img } alt={title} className="project__img"/>
            <h3 className="project__title">{title}</h3>
        </a>
        {index}
    </li>











     );
}
 
export default Project;