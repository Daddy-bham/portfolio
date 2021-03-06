import React from "react";

function ProjectTile(props){
    return(
        <div className="d-flex py-2 col-sm-12 justify-content-center col-md-4 col-lg-3">
            <div className="project-tile">
                <div className="text-center bg-warning text-white">
                    <h2>{props.title}</h2>
                </div>
                <div className="m-1 p-1 text-center">
                    <p className="text-warning">{props.desc}</p>
                </div>
                <div className="px-2 d-block">
                    <button type="button" class="btn mx-1 btn-outline-info ">Source Code</button>
                    <button type="button" class="btn mx-1 btn-outline-info">Live Demo</button>
                </div>
            </div>
        </div>         
    );
}

export default ProjectTile;
