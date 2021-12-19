import { Card, Avatar } from "antd";
import ghb from "../assests/projects/githubapi.jpg";
import raq from "../assests/projects/randomanimequote.jpg";
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from "@ant-design/icons";

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
              <SettingOutlined key="setting" style={{ color: "white" }} />,
              <EditOutlined key="edit" style={{ color: "white" }} />,
              <EllipsisOutlined key="ellipsis" style={{ color: "white" }} />,
            ]}
          >
            <h3>Insert description here.</h3>
            <p>
              Insert description here. Insert description here. Insert
              description here. Insert description here.
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
              <SettingOutlined key="setting" style={{ color: "white" }} />,
              <EditOutlined key="edit" style={{ color: "white" }} />,
              <EllipsisOutlined key="ellipsis" style={{ color: "white" }} />,
            ]}
          >
            <h3>Insert description here.</h3>
            <p>
              Insert description here. Insert description here. Insert
              description here. Insert description here.
            </p>
          </Card>
        </div>
      </div>
    </div>
  );
}
