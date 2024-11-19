import React from "react";

import "./Skill.css";

import { FaReact } from "react-icons/fa";
import { TbBrandNextjs } from "react-icons/tb";
import { DiNodejs } from "react-icons/di";
import { SiMysql } from "react-icons/si";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaJava } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { FaDocker } from "react-icons/fa";
import { SiKubernetes } from "react-icons/si";
import { FaAws } from "react-icons/fa";
import { FaGolang } from "react-icons/fa6";
import { FaGitAlt } from "react-icons/fa";
import { TbLetterC } from "react-icons/tb";
import { FaPython } from "react-icons/fa";

const Skills = () => {
  return (
    <div className="SkillComponent">
      <div className="SkillComponent-in">
        <div className="HiddenSkill"></div>

        <SkillComponent tech="java" />
        <SkillComponent tech="javascript" />
        <SkillComponent tech="typescript" />
        <SkillComponent tech="golang" />
        <SkillComponent tech="python" />
        <SkillComponent tech="c" />
        <SkillComponent tech="html" />
        <SkillComponent tech="css" />
        <SkillComponent tech="react" />
        <SkillComponent tech="next.js" />
        <SkillComponent tech="node.js" />
        <SkillComponent tech="mysql" />
        <SkillComponent tech="docker" />
        <SkillComponent tech="kubernetes" />
        <SkillComponent tech="aws" />
        <SkillComponent tech="git" />

        <div className="HiddenSkill"></div>
      </div>
    </div>
  );
};

export default Skills;

const SkillComponent = (props: any) => {
  return (
    <div className="Skill">
      <div className="Skill-in">
        <div className="Skill-one">
          {props.tech === "react" && (
            <FaReact className="skill-icon-react skill-icon" />
          )}
          {props.tech === "next.js" && (
            <TbBrandNextjs className="skill-icon-next skill-icon" />
          )}
          {props.tech === "node.js" && (
            <DiNodejs className="skill-icon-node skill-icon" />
          )}
          {props.tech === "mysql" && (
            <SiMysql className="skill-icon-mysql skill-icon" />
          )}
          {props.tech === "html" && (
            <FaHtml5 className="skill-icon-html skill-icon" />
          )}
          {props.tech === "css" && (
            <FaCss3 className="skill-icon-css skill-icon" />
          )}
          {props.tech === "javascript" && (
            <IoLogoJavascript className="skill-icon-javascript skill-icon" />
          )}
          {props.tech === "java" && (
            <FaJava className="skill-icon-java skill-icon" />
          )}
          {props.tech === "typescript" && (
            <SiTypescript className="skill-icon-typescript skill-icon" />
          )}
          {props.tech === "docker" && (
            <FaDocker className="skill-icon-docker skill-icon" />
          )}
          {props.tech === "kubernetes" && (
            <SiKubernetes className="skill-icon-kubernetes skill-icon" />
          )}
          {props.tech === "aws" && (
            <FaAws className="skill-icon-aws skill-icon" />
          )}
          {props.tech === "golang" && (
            <FaGolang className="skill-icon-golang skill-icon" />
          )}
          {props.tech === "git" && (
            <FaGitAlt className="skill-icon-git skill-icon" />
          )}
          {props.tech === "c" && (
            <TbLetterC className="skill-icon-c skill-icon" />
          )}
          {props.tech === "python" && (
            <FaPython className="skill-icon-python skill-icon" />
          )}
        </div>
        <div className="Skill-two">
          <p>{props.tech}</p>
        </div>
      </div>
    </div>
  );
};
