import React, { useState } from "react";
import { ThemeContext } from "../../Context/theme";
import "./form.css";

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [project, setProject] = useState("");
  //   const [theme, setTheme] = useState("dark"); // 'dark' for dark theme
  const [{ themename, toggeltheme }] = React.useContext(ThemeContext);
  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleProjectChange = (e) => {
    setProject(e.target.value);
  };

  return (
    <div className="section">
      <h2 className="section__title" data-aos="fade-right">
        Contact <span className="different">ME</span>
      </h2>
      <div className={`form-container ${themename}`} data-aos="fade-right">
        <form>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={handleNameChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={handleEmailChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="project">Project:</label>
            <textarea
              id="project"
              value={project}
              onChange={handleProjectChange}
              required
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Form;
