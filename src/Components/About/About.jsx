import React from "react";
import "./About.css";
import { Type } from "./Type";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import PhoneIcon from "@material-ui/icons/Phone";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";
import DescriptionIcon from "@material-ui/icons/Description";
// import PublicIcon from "@material-ui/icons/Public";
import { Introduction } from "./Introduction";
import { Timeline } from "./Timeline";
import { Techstacks } from "./Techstacks";
// import Button from "@mui/material/Button";
export const About = () => {
  return (
    <>
      <div className="about center" id="about">
        <h1 data-aos="fade-right" className="mobileHead">
          Hello, I am <span className="about__name">Syed Moazam Ali</span>
        </h1>
        <Type />
        <p className="about__desc" data-aos="fade-right">
          Experienced frontend web developer specializing in React and Next.js.
          Passionate about crafting user-friendly interfaces and building
          efficient, responsive web applications.
        </p>
        <div className="about__contact center">
          <a
            href="https://github.com/MoazamAli45"
            aria-label="github"
            target="_blank"
            rel="noreferrer"
            className="link link--icon"
          >
            <GitHubIcon />
          </a>
          <a
            href="mailto:syedmoazamali4321@gmail.com"
            target="_blank"
            rel="noreferrer"
            aria-label="mail"
            className="link link--icon"
          >
            <EmailIcon />
          </a>
          <a
            href="tel:+9203024339972"
            target="_blank"
            rel="noreferrer"
            aria-label="phone"
            className="link link--icon"
          >
            <PhoneIcon />
          </a>
          <a
            href="https://www.linkedin.com/in/syedmoazamali/"
            aria-label="linkedin"
            className="link link--icon"
            target="_blank"
            rel="noreferrer"
          >
            <LinkedInIcon />
          </a>
          <a
            href="https://www.instagram.com/syed.moazam_ali/"
            aria-label="Instagram"
            className="link link--icon"
            target="_blank"
            rel="noreferrer"
          >
            <InstagramIcon />
          </a>
        </div>

        <button className="btnResume">
          <a href="/public/Resume.pdf" download="My Resume.pdf">
            Resume
          </a>
        </button>
      </div>
      <Introduction />
      <Timeline />
      <section id="#skills">
        <Techstacks />
      </section>
    </>
  );
};
