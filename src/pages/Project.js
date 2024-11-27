
import img from "./../img/projects/02-big.jpg"
import gitHubIcon from "./../img/icons/gitHub-black.svg"


const Project = () => {


    return (
		<main class="section">
        <div class="container">
            <div class="project-details">

                <h1 class="title-1">Video service</h1>

                <img src={img} alt="" class="project-details__cover"/>

                <div class="project-details__desc">
                    <p>Skills: React, Node.js, MongoDB</p>
                </div>

                <a href="#!" class="btn-outline">
                    <img src={gitHubIcon} alt=""/>
                    GitHub repo
                </a>

            </div>
        </div>
    </main>
	);
}

export default Project;