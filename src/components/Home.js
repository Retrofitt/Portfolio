import { Link } from "react-router-dom";
import Contact from "./Contact";

export default function Home(props) {
  const { logo1, socials } = props;

  console.log(socials);

  return (
    <div className="myLogo">
      <Link to="/about">
        <img src={logo1} alt="no" style={{ height: "60vh" }} />
      </Link>
      <Contact socials={socials} />
    </div>
  );
}
