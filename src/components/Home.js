import { Link } from "react-router-dom";
import About from "./About";
import Contact from "./Contact";

export default function Home(props) {
  const { logo1, socials } = props;

  console.log(socials);

  return (
    <div>
      <div className="myLogo">
        <img src={logo1} alt="no" style={{ height: "60vh" }} />
      </div>
      <Contact socials={socials} />
      <About />
    </div>
  );
}
