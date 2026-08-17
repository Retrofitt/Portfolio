import React from "react";
import { Card } from "antd";
import { GithubOutlined, LoginOutlined } from "@ant-design/icons";
import { projectsData } from "../data/projects";

export default function Projects() {
  return (
    <div className="projects">
      {projectsData.map((project) => (
        <div className="card-div" key={project.id}>
          <Card
            style={{
              width: 300,
              backgroundColor: "rgba(0, 0, 0, 0.300)",
              padding: "2px",
            }}
            cover={
              <img
                alt={project.title}
                src={project.image}
                loading="lazy"
              />
            }
            actions={[
              <a
                key="github"
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                title="GitHub Repo"
              >
                <GithubOutlined style={{ color: "white" }} />
              </a>,
              <a
                key="live"
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                title="Live Application"
              >
                <LoginOutlined style={{ color: "white" }} />
              </a>,
            ]}
          >
            <h3>{project.title}</h3>
            <hr />
            <p>{project.description}</p>
          </Card>
        </div>
      ))}
    </div>
  );
}
