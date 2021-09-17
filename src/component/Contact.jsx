import React from "react";

const Contact=()=>(
    <div className="text-warning p-2 text-center">
        <h1 className="py-3">Let's Talk</h1>
        <div className="d-flex contact py-2 text-white justify-content-center">
            <p>I'd love to hear about what you're working on and how I could help. I'm currently <br /> looking for a new role and open to opportunities in the domain of web<br /> development. I'm also open to discussing ideas and doing a project together.<br /><br />
            Please do feel free to reach out to me on any of the platforms below.</p>
        </div>
        <a href="https://www.instagram.com/karunesh__/"><i class="px-2 fab fa-instagram fa-lg"></i></a>
        <a href="https://github.com/karuneshT"><i class="px-2 fab fa-github fa-lg"></i></a>
        <a href="https://www.linkedin.com/in/karunesh-tripathi-89b2809b/"><i class="px-2 fab fa-linkedin fa-lg"></i></a>
        <a href="https://twitter.com/karunesh__"><i class="px-2 fab fa-twitter fa-lg"></i></a>
        <br />
        <br />
        <p className="text-white contact">
        Or write to me at<br />
            <a href="mailto:karunesh_@outlook.com" style={{textDecoration:"none"}}><b>karunesh_@outlook.com</b></a>
        </p>
    </div>
);

export default Contact;