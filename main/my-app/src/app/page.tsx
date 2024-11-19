"use client";
import Link from "next/link";

import "./page.css";

// import components here
import Navbar from "./components/navbar/navbar";
import Terminal from "./UI/terminal/Terminal";
import Footer from "./components/footer/footer";
import Card from "./UI/cards/Card";
import Skills from "./UI/skills/Skill";
import Youtube from "./UI/youtube/page";
import Loader from "./Loader/page";

// import icons here
import { IoDocumentTextOutline } from "react-icons/io5";
import { FaArrowDown } from "react-icons/fa6";
import { useState, useEffect } from "react";

// import styles here

export default function Home() {
  const handleScroll = (id: string) => {
    const element = document.getElementsByClassName(id)[0] as HTMLElement;
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    setTimeout(() => {
      setIsLoaded(false);
    }, 2000);
  }, []);

  return isLoaded ? (
    <Loader />
  ) : (
    <div className="HomeComponent">
      <div className="HomeComponent-in">
        <div className="HomeNav">
          <Navbar />
        </div>

        {/* ------- Home one ------- */}

        <div id="home" className="Home-one">
          <div className="Home-one-in">
            <div className="Home-one-content-one">
              <div className="Home-one-content-one-in">
                <div className="Home-oco-in-one">
                  <h1>Hello, I&apos;m Tadikonda Sai Manikanta</h1>
                </div>
                <div className="Home-oco-in-two">
                  <p>
                    Tadikonda Sai Manikanta is a Full stack Developer and DevOps
                    Engineer, where he drives innovation in cloud technologies
                    and currently third year CS. undergrad.
                  </p>
                </div>
                <div className="Home-oco-in-three">
                  <div className="Home-oco-in-three-in">
                    <Link href="/" onClick={() => handleScroll("Home-two")}>
                      Know more <FaArrowDown />{" "}
                    </Link>
                    <Link
                      href="https://drive.google.com/file/d/1aicpA2vFOImx7Ri7dOG9cjZK8HtgRdJ9/view?usp=sharing"
                      target="_blank"
                    >
                      Resume <IoDocumentTextOutline />{" "}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="Home-one-content-two">
              <div className="Home-one-content-two-in"></div>
            </div>
          </div>
        </div>

        {/* ------- Home two ------- */}

        <div id="about" className="Home-two">
          <div className="Home-two-in">
            <div className="Home-two-one">
              <h1>
                Terminal.<span>The best way to know about me.</span>
              </h1>
            </div>
            <div className="Home-two-two">
              <Terminal />
            </div>
          </div>
        </div>

        <div id="skills" className="Home-three">
          <div className="Home-three-in">
            <div className="Home-three-one">
              <div className="Home-three-one-one">
                <h1>
                  Skills & Tools.
                  <span>Transforming Concepts into Reality.</span>
                </h1>
              </div>
            </div>
            <div className="Home-three-two">
              <Skills />
            </div>
          </div>
        </div>

        <div id="projects" className="Home-four">
          <div className="Home-four-in">
            <div className="Home-four-one">
              <h1>
                Projects.<span>Take a look at my work, right now.</span>
              </h1>
            </div>
            <div className="Home-four-two">
              <Card />
            </div>
          </div>
        </div>

        <Youtube />

        <div className="Footer">
          <Footer />
        </div>
      </div>
    </div>
  );
}
