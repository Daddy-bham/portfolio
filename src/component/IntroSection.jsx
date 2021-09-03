import React from "react";
import img from "./images/karun.png";

export default function IntroSection() {
  return (
    <div className="d-flex p-3 flex-wrap">
      <div className="m-5 p-5 justify-content-sm-center text-white">
        <h6 className="fs-2">
          Hello there! I'm{" "}
          <span className="text-info">Karunesh Tripathi...</span>
        </h6>
        <h2 style={{ color: "orange" }}>Building beautiful web apps.</h2>
        <p>Web Developer focused on detail oriented design and development.</p>
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
        <div className="mt-3">
          <button type="button" class="btn my-4 me-5 btn-outline-info btn-lg">
            <a
              href="#contact"
              style={{ color: "inherit", textDecoration: "none" }}
            >
              Contact Me
            </a>
          </button>
          <button type="button" class="btn btn-outline-info btn-lg">
            My Resume
          </button>
        </div>
      </div>
      <div className="my-5">
        <img className="p-2 greeting-pic" alt="AuthorPicture" src={img} />
      </div>
    </div>
  );
}
