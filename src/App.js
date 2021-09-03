import './App.css';

//Components
import Navbar from "./component/Navbar";
import IntroSection from "./component/IntroSection";
import Project from "./component/Project-Carousel/Project";
import Contact from "./component/Contact";

function App() {
  return (
    <div id="home">
      <div className="bg-warning">
        <Navbar />
      </div> 
      <div className="bg-dark">
        <IntroSection />
      </div>
      <div className="bg-light" id="projects">
        <Project />
      </div>
      <div className="bg-dark" id="contact">
        <Contact />
        <br />
      </div>
      <div className="text-center fs-xs m-3">
        Copyright&#169; Karunesh Tripathi 
      </div>
    </div>
  );
}

export default App;
