import React from "react";
import "./project.style.css";

function ProjectTile(props){
    return(
        <div className="d-flex flex-wrap project-tile py-2 col-sm-12 col-md-4 col-lg-3 justify-content-center">
            <div>
                <div className="text-center pt-3 pb-5 mb-4 my-1 bg-warning text-white rounded">
                    <h2 className="pb-3">{props.title}</h2>
                </div>
                <img className="project-img" src="https://image.shutterstock.com/image-vector/programming-code-coding-hacker-background-260nw-1714491562.jpg" alt="test" />
                <div className="my-2 p-1 text-center d-block ">
                    <p className="text-light">{props.desc}</p>
                    <a href={props.source}><button type="button" class="btn mx-1 btn-outline-info ">Source Code</button></a>
                    <a href={props.demoURL}><button type="button" class="btn mx-1 btn-outline-info">Live Demo</button></a>
                </div>
            </div>
        </div>         
    );
}

export default ProjectTile;