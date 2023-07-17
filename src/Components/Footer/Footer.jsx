import React from "react";
import "./Footer.css";
import { ThemeContext } from "../../Context/theme";

export const Footer = () => {
  const [{ themename }] = React.useContext(ThemeContext);

  const date = new Date().getFullYear();
  return (
    <>
      <div className={"section " + themename}>
        <div className="footerBox">
          <p className="footer">
            © {date} Copyright Syed Moazam Ali. All right reserved
          </p>
        </div>
      </div>
    </>
  );
};
