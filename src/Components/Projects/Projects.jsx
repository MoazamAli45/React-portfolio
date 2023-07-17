import React from "react";
import "./Projects.css";
import { FaReact, FaHardHat } from "react-icons/fa";
import {
  SiHtml5,
  SiMaterialui,
  SiSass,
  SiTailwindcss,
  SiMongodb,
  SiNextdotjs,
  SiFirebase,
} from "react-icons/si";
import { DiCss3 } from "react-icons/di";
import { VscJson } from "react-icons/vsc";
import { IoLogoJavascript } from "react-icons/io";
import project1 from "../../assets/project1.png";
import project2 from "../../assets/project2.png";
import project3 from "../../assets/project3.png";
import project4 from "../../assets/project4.png";
import project5 from "../../assets/project5.png";
import project6 from "../../assets/project6.png";

export const Projects = () => {
  return (
    <>
      <div className="section">
        <h2 className="section__title different">Projects</h2>
        <div className="allProjects">
          <div className="projects_container" data-aos="fade-right">
            <div className="project">
              <div className="project_videocontainer">
                <div>
                  <img src={project1} alt="Blog Website" />
                </div>
              </div>
              <div className="project_information">
                <h2>AlSyed Blog's</h2>
                <p>
                  AlSyed Blog's is a blogging website created using NextJs and
                  MongoDb. User can also contact the admin of the website using
                  the contact form.
                </p>
                <div>
                  <SiNextdotjs />

                  <SiMongodb />
                  <FaReact />
                </div>
                <div>
                  <a
                    href="https://alsyedblog-project.vercel.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt onbt">
                      See this Live
                    </span>
                  </a>
                  <a
                    href="https://github.com/MoazamAli45/Nextjs-blog-website"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      View Code
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="projects_container" data-aos="fade-right">
            <div className="project">
              <div className="project_videocontainer">
                <div>
                  <img src={project2} alt="Dashboard" />
                </div>
              </div>
              <div className="project_information">
                <h2>Dashboard</h2>
                <p>
                  Dashboard created using ReactJs,Material UI and Firebase. User
                  can add,delete and update the data. User can also view data in
                  form of charts.
                </p>
                <div>
                  <FaReact />
                  <SiMaterialui />
                  <SiFirebase />
                </div>
                <div>
                  <a
                    href="https://react-dashboard-alsyed.vercel.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      See this Live
                    </span>
                  </a>
                  <a
                    href="https://github.com/MoazamAli45/React-Dashboard"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      View Code
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="projects_container" data-aos="fade-right">
            <div className="project">
              <div className="project_videocontainer">
                <div>
                  <img src={project3} alt="Web me" />
                </div>
              </div>
              <div className="project_information">
                <h2>Web Me</h2>
                <p>
                  Web Me is a website created using ReactJs and Material UI. It
                  has an amazing UI and is fully responsive. It is a portfolio
                  website.
                </p>
                <div>
                  <FaReact />
                  <SiMaterialui />
                </div>
                <div>
                  <a
                    href="https://webmeproject.netlify.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt onbt">
                      See this Live
                    </span>
                  </a>
                  <a
                    href="https://github.com/MoazamAli45/Webme"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      View Code
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="projects_container" data-aos="fade-right">
            <div className="project">
              <div className="project_videocontainer">
                <div>
                  <img src={project4} alt="" />
                </div>
              </div>
              <div className="project_information">
                <h2>Zee World Clone</h2>
                <p>
                  Zee World is a website created using Next Js. It is a clone of
                  the Zee World website. It is fully responsive and has an
                  amazing UI.
                </p>
                <div>
                  <SiNextdotjs />

                  <SiTailwindcss />
                </div>
                <div>
                  <a
                    href="https://zeeworld-nextjs.vercel.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt onbt">
                      See this Live
                    </span>
                  </a>
                  <a
                    href="https://github.com/MoazamAli45/zeeworld-nextjs"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      View Code
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="projects_container" data-aos="fade-right">
            <div className="project">
              <div className="project_videocontainer">
                <div>
                  <img src={project5} alt="Uniqlo-Clone" />
                </div>
              </div>
              <div className="project_information">
                <h2>Helping Hands</h2>
                <p>
                  Helping Hands is a website created using ReactJs,Material Ui
                  and Firebase. It is a website where people can donate and
                  request for donations.
                </p>
                <div>
                  <SiFirebase />
                  <FaReact />
                  <SiMaterialui />
                </div>
                <div>
                  <a
                    href="https://helpinghandsolutionchallenge.netlify.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt onbt">
                      See this Live
                    </span>
                  </a>
                  <a
                    href="https://github.com/MoazamAli45/googlesolutionchallenge"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      View Code
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="projects_container" data-aos="fade-right">
            <div className="project">
              <div className="project_videocontainer">
                <div>
                  <img src={project6} alt="PulsePlus-Clone" />
                </div>
              </div>
              <div className="project_information">
                <h2>Frontend Mentor </h2>
                <p>
                  Frontend Mentor is a website created using HTML,CSS and Sass.
                  It has an amazing UI and is fully responsive.
                </p>
                <div>
                  <DiCss3 />
                  <SiHtml5 />
                  <SiSass />
                </div>
                <div>
                  <a
                    href="https://frontendmentor23.netlify.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt onbt">
                      See this Live
                    </span>
                  </a>
                  <a
                    href="https://github.com/MoazamAli45/Frontendmentor.io"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      View Code
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
