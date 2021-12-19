import About from "./About";
import Contact from "./Contact";
import Photography from "./Photography";
import Projects from "./Projects";

export default function Home(props) {
  const { logo1, socials, photos } = props;

  console.log(socials);

  return (
    <div>
      <div className="myLogo">
        <img src={logo1} alt="no" style={{ height: "60vh" }} />
      </div>
      <Contact socials={socials} />
      <Projects />
      <About />
      <Photography photos={photos} />
    </div>
  );
}
