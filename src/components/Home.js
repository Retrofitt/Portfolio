import About from "./About";
import Contact from "./Contact";
import Photography from "./Photography";
import Projects from "./Projects";

export default function Home(props) {
  const { logo1, socials, photos } = props;

  console.log(socials);

  return (
    <div>
      <div className="myLogo" id="myLogo">
        <img src={logo1} alt="no" style={{ height: "60vh" }} />
      </div>
      <Contact socials={socials} />
      <div className="component-padding" id="projects">
        <a href="#projects">
          <h1>.projects</h1>
        </a>
        <Projects />
      </div>
      <div className="component-padding" id="about">
        <a href="#about">
          <h1>.about</h1>
        </a>
        <About />
      </div>
      <div className="component-padding" id="photography">
        <a href="#photography">
          <h1>.photography</h1>
        </a>
        <Photography photos={photos} />
      </div>
    </div>
  );
}
