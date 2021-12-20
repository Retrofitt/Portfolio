import { Card } from "antd";
import ghb from "../assests/projects/githubapi.jpg";
import raq from "../assests/projects/randomanimequote.jpg";
import { GithubOutlined, LoginOutlined } from "@ant-design/icons";

export default function Projects() {
  const { Meta } = Card;
  return (
    <div className="projects">
      <div className="project-divs">
        <div className="card-div">
          <Card
            style={{
              width: 300,
              backgroundColor: "rgba(0, 0, 0, 0.300)",
              padding: "2px",
            }}
            cover={<img alt="example" src={ghb} />}
            actions={[
              <a
                href="https://github.com/Retrofitt/web-module-project-lifecycle/tree/rafael-mendoza"
                title="GitHub Repo"
              >
                <GithubOutlined key="setting" style={{ color: "white" }} />
              </a>,
              <a
                href="https://retrosghbusinesscard.vercel.app//"
                title="GitHub User Card"
              >
                <LoginOutlined key="setting" style={{ color: "white" }} />
              </a>,
            ]}
          >
            <h3>Github User Card</h3>
            <hr />
            <p>
              This project showcases ability to make requests and render the
              responses using React.js
            </p>
          </Card>
        </div>
        <div className="card-div">
          <Card
            style={{
              width: 300,
              backgroundColor: "rgba(0, 0, 0, 0.300)",
              padding: "2px",
            }}
            cover={<img alt="example" src={raq} />}
            actions={[
              <a
                href="https://github.com/Retrofitt/web-module-project-async-redux/tree/main"
                title="GitHub Repo"
              >
                <GithubOutlined key="setting" style={{ color: "white" }} />
              </a>,
              <a
                href="https://random-anime-quote.vercel.app/"
                title="Random Anime Quote"
              >
                <LoginOutlined key="setting" style={{ color: "white" }} />
              </a>,
            ]}
          >
            <h3>Random Anime Quote</h3>
            <hr />
            <p>
              This project uses Redux asynchronous action creators to display
              requests made to an API that returns a random anime quote.
            </p>
          </Card>
        </div>
      </div>
    </div>
  );
}
