import React from "react";
import "./Introduction.css";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { ThemeContext } from "../../Context/theme";
import profilePic from "../../assets/profile.png";

export const Introduction = () => {
  const [{ themename }] = React.useContext(ThemeContext);

  return (
    <>
      <section id="#about">
        <div className="section" data-aos="fade-right">
          <h2 className="section__title">
            About <span className="different">Me</span>
          </h2>
          <div className={"introduction " + themename}>
            <div className="introduction_logocontainer">
              <img src={profilePic} alt="Images" />
            </div>
            <div className="introduction_datacontainer">
              <h4>
                Hi Everyone, My name is{" "}
                <span className="different">Syed Moazam Ali </span> and I am
                from{" "}
                <span className="different">
                  {" "}
                  Taxila, Rawalpindi (Pakistan)
                </span>
                . I am currently pursuing my BS in Software Engineering from
                <span className="different"> UET Taxila, Pakistan</span>. I am a
                Experienced
                <span className="different">
                  {" "}
                  Mern Stack Web Developer{" "}
                </span>{" "}
                specializing in React and Next.js. Passionate about crafting
                user-friendly interfaces and building efficient, responsive web
                applications.
              </h4>
              <h4>Terms That can describe :</h4>
              <h4 className="different">
                <span className="icons">
                  <ExitToAppIcon />
                </span>
                Student{" "}
              </h4>
              <h4 className="different">
                <span className="icons">
                  <ExitToAppIcon />
                </span>
                Programmer{" "}
              </h4>
              <h4 className="different">
                <span className="icons">
                  <ExitToAppIcon />
                </span>
                Web Developer{" "}
              </h4>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
