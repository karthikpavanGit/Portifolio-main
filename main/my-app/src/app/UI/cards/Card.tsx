import React from "react";
import Image from "next/image";

import "./Card.css";

import { FaReact } from "react-icons/fa";
import { TbBrandNextjs } from "react-icons/tb";
import { FaNode } from "react-icons/fa";
import { SiMysql } from "react-icons/si";
import { SiTypescript } from "react-icons/si";


import ReactImg from "../../assets/React.png";
import Nextjs from "../../assets/next.png";


const Card = () => {
  return (
    <div className="CardComponent">
      <div className="CardComponent-in">
        <div className="HiddenCard"></div>
        <CardComponent
          title={"Student Activity Center"}
          link={"https://github.com/saitadikonda99/Online-IDE"}
          techStack={["next.js", "typescript", "mysql"]}
          image={Nextjs}
        />
        <CardComponent
          title={"Cloud IDE"}
          link={"https://github.com/saitadikonda99/Online-IDE"}
          techStack={["react", "Node.js"]}
          image={ReactImg}
        />
        <CardComponent
          title={"Smart Village Revolution"}
          link={"https://github.com/saitadikonda99/Online-IDE"}
          techStack={["next.js"]}
          image={Nextjs}
        />
        <CardComponent
          title={"My Portfolio"}
          link={"https://github.com/saitadikonda99/Online-IDE"}
          techStack={["next.js"]}
          image={Nextjs}
        />
        <CardComponent
          title={"Authentication JWT"}
          link={"https://github.com/saitadikonda99/Online-IDE"}
          techStack={["react", "Node.js"]}
          image={ReactImg}
        />
        <CardComponent
          title={"Temple Website"}
          link={"https://github.com/saitadikonda99/Online-IDE"}
          techStack={["next.js"]}
          image={Nextjs}
        />
        <CardComponent
          title={"Online Coding Learning"}
          link={"https://github.com/saitadikonda99/Online-IDE"}
          techStack={["react"]}
          image={ReactImg}
        />
        <div className="HiddenCard"></div>
      </div>
    </div>
  );
};

export default Card;

const CardComponent = (props: any) => {
  return (
    <div className="card">
      <div className="card-in">
        <div className="card-one">
          <div className="card-one-in">
            <h1>{props.title}</h1>
          </div>
        </div>
        <div className="card-two">
          <div className="card-two-in">
            <p>Technologies Used</p>
            <div className="tech-stack">
              {props.techStack.map((tech: string) => (
                <div className="tech-stack-item" key={tech}>
                  {tech === "react" && (
                    <FaReact className="project-icon-react" />
                  )}
                  {tech === "next.js" && (
                    <TbBrandNextjs className="project-icon-next" />
                  )}
                  {tech === "Node.js" && (
                    <FaNode className="project-icon-node" />
                  )}
                  {tech === "mysql" && (
                    <SiMysql className="project-icon-mysql" />
                  )}
                  {tech === "typescript" && (
                    <SiTypescript className="project-icon-ts" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="card-three">
          <div className="card-three-in">
            <p>Source Code:</p> <a href={props.link}> Github</a>
          </div>
        </div>
        <div className="card-four">
          <div className="card-four-in">
            <Image
              src={props.image}
              alt={props.title}
              width={300}
              height={300}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
