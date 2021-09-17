import React from "react";
import ProjectTile from "./ProjectTile";

//Project Details
import ProjectDetails from "../../project";

function createProjectTile(props){
    return(
        <ProjectTile 
        key={props.id}
        title={props.title}
        desc={props.description}
        source={props.source}
        demoURL={props.demo}
         />
    );
}

const Project=()=>
    (
        <div>
            <div className="bg-info p-2">
                <h4 className="text-center fs-1"><b>Projects</b></h4>
            </div>
            <div className="container py-5">
                <div className="row justify-content-between justify-content-sm-evenly">
                    {ProjectDetails.map(createProjectTile)}
                </div>
            </div>
        </div>
    );

export default Project;