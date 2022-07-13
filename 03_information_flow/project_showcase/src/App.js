import React, { useState } from "react";

import Header from "./components/Header";
import ProjectForm from "./components/ProjectForm";
import ProjectList from "./components/ProjectList";

const App = () => {
  const [projects, setProjects] = useState([]);
  const [isDarkMode, setIsDarkMode] = useState(true);

  const handleClick = () => {
    fetch('http://localhost:8000/projects')
      .then(res => res.json())
      .then(data => setProjects(data))
  };

  //Create a toggle method for darkMode
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode)
  }

  const handleLikes = (id) => {
    const newArray = projects.map(project => {
      //making a copy to avoid the JS pass by reference, make sure that the clone is a deep enough copy for the react data
      const projectCopy = {...project}
      if(project.id === id){
        projectCopy.likes = projectCopy.likes + 1;
      }
      //Returned the new projectCopy into the newArray, so that we have clean copies of all of our projects.
      return projectCopy;
    })
    setProjects(newArray)
  }

  return (
    <div className={isDarkMode ? "App" : "App light"}>
      <Header isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode}/>
      <ProjectForm />
      <button onClick={handleClick}>Load Projects</button>
      <ProjectList projects={projects} handleLikes={handleLikes}/>
    </div>
  );
};

export default App;
