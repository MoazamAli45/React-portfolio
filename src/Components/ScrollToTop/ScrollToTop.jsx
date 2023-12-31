import React, { useEffect, useState } from "react";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import "./ScrollToTop.css";

export const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () =>
      window.pageYOffset > 500 ? setIsVisible(true) : setIsVisible(false);

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const goToTopHandler = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };
  return isVisible ? (
    <div className="scroll-top" onClick={goToTopHandler}>
      <span>
        <ArrowUpwardIcon fontSize="large" />
      </span>
    </div>
  ) : null;
};
