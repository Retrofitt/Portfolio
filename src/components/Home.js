import About from "./About";
import Contact from "./Contact";
import Photography from "./Photography";
import Projects from "./Projects";
import background from "../assests/background/Black - 13495.mp4";

export default function Home(props) {
  const { logo1, socials, photos } = props;

  console.log(socials);

  return (
    <div>
      <video autoPlay muted loop id="my-video">
        <source src={background} type="video/mp4" />
        Browser does not support video background.;
      </video>
      <div className="main">
        <div className="myLogo" id="myLogo">
          <img src={logo1} alt="no" style={{ height: "60vh" }} />
        </div>
        <Contact socials={socials} />
      </div>
      <div className="video"></div>
      <div className="component-padding" id="projects">
        <Projects />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="photography">
        <Photography photos={photos} />
      </div>
    </div>
  );
}
