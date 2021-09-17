import React from "react";
import img from "./images/karunesh.png";

export default function IntroSection() {
  return (
    <div className="d-flex p-lg-5 justify-content-evenly flex-wrap">
      <div className="m-1 p-5 pb-sm-4 text-white">
        <h6 className="intro-content-head">
          Hello there! I'm{" "}
          <span className="text-info"><i>Karunesh Tripathi...</i></span>
        </h6>
        <h2 style={{ color: "orange" }} className="intro-content-description">Building beautiful web apps.</h2>
        <p className="intro-content-description">Web Developer focused on detail oriented design and development.</p>
        <span className="social-links mt-4 text-warning">
          <a href="https://www.instagram.com/karunesh__/">
            <i class="px-2 fab fa-instagram fa-lg"></i>
          </a>
          <a href="https://github.com/karuneshT">
            <i class="px-2 fab fa-github fa-lg"></i>
          </a>
          <a href="https://www.linkedin.com/in/karunesh-tripathi-89b2809b/">
            <i class="px-2 fab fa-linkedin fa-lg"></i>
          </a>
          <a href="https://twitter.com/karunesh__">
            <i class="px-2 fab fa-twitter fa-lg"></i>
          </a>
        </span>
        <div className="mt-1">
          <button type="button" class="btn my-4 me-4 btn-outline-info btn-md">
            <a
              href="#contact"
              style={{ color: "inherit", textDecoration: "none" }}
            >
              Contact Me
            </a>
          </button>
          <button type="button" class="btn btn-outline-info btn-md">
            <a 
              href="https://1drv.ms/b/s!AjzQwmywAP7YiFR7zotMP22aueQp"
              style={{ color: "inherit", textDecoration: "none" }}
              >
            My Resume
            </a>
          </button>
        </div>
      </div>
      <div className="justify-content-sm-center">
        <img className="p-2 m-4 p-sm-1 m-sm-2 greeting-pic" alt="AuthorPicture" src={img} />
      </div>
    </div>
  );
}
