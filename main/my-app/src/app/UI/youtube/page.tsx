import React from "react";
import Image from "next/image";
import Link from "next/link";

import "./page.css";

import YT from "../../assets/YT.png";

const page = () => {
  return (
    <div className="YoutubeComponent">
      <div className="YoutubeComponent-in">
        <div className="Youtube-one">
          <div className="Youtube-one-in">
            <h1>Youtube channel.</h1>
          </div>
        </div>
        <div className="Youtube-two">
          <div className="Youtube-two-in">
            <div className="Youtube-two-one">
              <div className="Youtube-two-one-in">
                <div className="Youtube-two-one-in-one">
                  <h1>Learn. Code. Lead.</h1>
                </div>
                <div className="Youtube-two-one-in-two">
                  <p>
                  Master coding with tutorials, real projects and guidance.
                  </p>
                </div>
                <div className="Youtube-two-one-in-three">
                    <Link href='https://www.youtube.com/@saitadikonda1' target="_blank">Go to Channel</Link>
                </div>
              </div>
            </div>
            <div className="Youtube-two-two">
              <Image src={YT} alt="Youtube" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
