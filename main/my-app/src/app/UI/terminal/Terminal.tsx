import React from "react";
import { TerminalContextProvider, ReactTerminal } from "react-terminal";

import "./Terminal.css";

import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Terminal = () => {
  const commands = (command: string, print: (output: string) => void) => {
    if (command == "help" || command == "ls") {
      return (
        <div className="help-command">
          <div className="help-command-in">
            <h1>Available commands:</h1>
            <p>about-me</p>
            <p>skills</p>
            <p>projects</p>
            <p>contact</p>
          </div>
        </div>
      );
    }

    if (command === "about-me") {
      return (
        <div className="About-me-command">
          <div className="About-me-command-in">
            <h1>About Me</h1>
            <p>
              Pavan Karthik Mandadapu is a Full stack Developer and DevOps
              Engineer, where he drives innovation in cloud technologies and
              currently third year CS. undergrad.
            </p>
          </div>
        </div>
      );
    }

    if (command === "skills") {
      return (
        <div className="Skills-command">
          <div className="Skills-command-in">
            <h1>Skills</h1>
            <p>
              {" "}
              <span>• Languages:</span> C, Java, JavaScript, Python
            </p>
            <p>
              {" "}
              <span>•Frontend Frameworks:</span> React JS, Next.js, JavaScript, HTML, CSS
            </p>
            <p>
              {" "}
              <span>Backend Technologies:</span> Express, Node.js 
            </p>
            <p>
              {" "}
              <span>• Databases:</span> SQL, MongoDB
            </p>
            <p>
              {" "}
              <span>• Tools:</span> Git (version control),  Linux.
            </p>
            <p>
              {" "}
              <span>• Specailty</span> Experienced in Automation tasks, particularly adept in Microsoft Power Automate.
            </p>
          </div>
        </div>
      );
    }

    if (command === "projects") {
      return (
        <div className="Projects-command">
          <div className="Projects-command-in">
            <h1>Projects</h1>
            <h1>Link on the project for github repo or Deployment Link</h1>
            <div className="projects-one">
              <p>
                <a href="https://github.com/karthikpavanGit/JFSD-SDP.git">
                  - Handloom Fashion Store
                </a>
              </p>
              <p>
                <a href="http://sac.kluniversity.in">- SAC Website</a>
              </p>
              <p>
                <a href="https://sac-svr.vercel.app/">
                  - Smart Village Revolution Website
                </a>
              </p>

              <p>
                <a href="https://pavankarthik.vercel.app/">- Portfolio</a>
              </p>
              
            </div>
          </div>
        </div>
      );
    }

    if (command === "contact") {
      return (
        <div className="Contact-command">
          <div className="Contact-command-in">
            <h1>Contact</h1>
            <p>
              Phone: <span>+91 9502725774</span>
            </p>
            <p>
              <FaLinkedin className="linkedin-icon" />{" "}
              <a href="https://www.linkedin.com/in/pavankarthikmandadapu/">
                LikedIn
              </a>{" "}
            </p>
            <p>
              <FaGithub className="github-icon" />{" "}
              <a href="https://github.com/karthikpavanGit">GitHub</a>{" "}
            </p>
            <p>
              Email:{" "}
              <a href="mailto:saitadikonda.cse@gmail.com">
                pavankarthiktech@gmail.com
              </a>
            </p>
          </div>
        </div>
      );
    }
  };

  return (
    <div className="TerminalComponent">
      <TerminalContextProvider>
        <ReactTerminal
          welcomeMessage={
            <div className="Welcome-one">
              <p>
                Welcome to my website! Get started by typing `help` command
                below
              </p>
            </div>
          }
          prompt={">>>> ~"}
          themes={{
            "my-custom-theme": {
              themeBGColor: "black",
              themeToolbarColor: "rgb(43, 38, 38)",
              themeColor: "white",
              themePromptColor: "rgb(87, 191, 55)",
              themeFontFamily: "monospace",
            },
          }}
          theme="my-custom-theme"
          errorMessage="Command not found. Type `help` to see the list of available commands"
          commands={{
            help: commands("help", console.log),
            "about-me": commands("about-me", console.log),
            skills: commands("skills", console.log),
            projects: commands("projects", console.log),
            contact: commands("contact", console.log),
            ls: commands("ls", console.log),
          }}
        />
      </TerminalContextProvider>
    </div>
  );
};

export default Terminal;
