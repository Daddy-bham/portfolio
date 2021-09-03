import React from "react";
import ProjectTile from "./ProjectTile";

//Project Details
import ProjectDetails from "../../project";

function createProjectTile(props){
    return(
        <ProjectTile 
        key={props.id}
        title={props.title}
        desc={props.description} />
    );
}

const Project=()=>
    (
        <div>
            <div className="bg-info p-2">
                <h4 className="text-center fs-1"><b>Projects</b></h4>
            </div>
            <div className="container py-4">
                <div className="row justify-content-center">
                    {ProjectDetails.map(createProjectTile)}
                </div>
            </div>
        </div>
    );

export default Project;