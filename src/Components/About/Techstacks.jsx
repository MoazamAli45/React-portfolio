import React from "react";
import "./Techstacks.css";
import { FaReact, FaAws } from "react-icons/fa";
import {
  SiRedux,
  SiHtml5,
  SiMaterialui,
  SiExpress,
  SiTailwindcss,
  SiFirebase,
  SiNextdotjs,
  SiGit,
  SiNodedotjs,
} from "react-icons/si";

import { DiCss3, DiMongodb } from "react-icons/di";
import { SiJavascript, SiHeroku } from "react-icons/si";
import { VscGithub } from "react-icons/vsc";
import { BsBootstrap, BsWordpress } from "react-icons/bs";

export const Techstacks = () => {
  return (
    <>
      <div className="section main " data-aos="fade-right" id="skills">
        <h2 className="section__title different">Skills</h2>
        <div className="techsection">
          <div>
            <SiHtml5 />
            <h5>HTML</h5>
          </div>
          <div>
            <DiCss3 />
            <h5>CSS</h5>
          </div>
          <div>
            <SiTailwindcss />
            <h5>Tailwind</h5>
          </div>
          <div>
            <SiJavascript />
            <h5>Javascript</h5>
          </div>
          <div>
            <FaReact />
            <h5>React</h5>
          </div>
          <div>
            <SiRedux />
            <h5>Redux</h5>
          </div>

          <div>
            <SiMaterialui />
            <h5>Material UI</h5>
          </div>
          <div>
            <SiNextdotjs />
            <h5>Next JS</h5>
          </div>
          <div>
            <DiMongodb />
            <h5>MongoDb</h5>
          </div>

          <div>
            <SiFirebase />
            <h5>Firebase</h5>
          </div>

          <div>
            <SiGit />
            <h5>Git</h5>
          </div>

          <div>
            <SiNodedotjs />
            <h5>Node Js</h5>
          </div>
        </div>
      </div>
    </>
  );
};
