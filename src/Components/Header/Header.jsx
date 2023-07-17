import React from "react";
import { Navbar } from "../Navbar/Navbar";
import { ThemeContext } from "../../Context/theme";

import Image from "./../../assets/S-logo.png";

import "./Header.css";
import { Link } from "react-scroll";
export const Header = () => {
  const [{ themename }] = React.useContext(ThemeContext);

  return (
    <>
      <header className={"header center " + themename}>
        <h3>
          <Link to="home" className="link link-header">
            <span>
              <img src={Image} alt="logo" className="logo" />
            </span>
            AlSyed
          </Link>
        </h3>
        <Navbar />
      </header>
    </>
  );
};
