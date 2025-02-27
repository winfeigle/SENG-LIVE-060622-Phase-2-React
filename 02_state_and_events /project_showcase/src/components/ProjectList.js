import ProjectListItem from "./ProjectListItem";
import React, {useState} from "react";
//TODO: Add state for project filter
const ProjectList = ({ projects }) => {
  const [search, setSearch] = useState("")

  const searchResults = projects.filter(project => {
    return project.name.toLowerCase().includes(search.toLowerCase())
  })

  const projectListItems = searchResults.map((project) => (
    <ProjectListItem key={project.id} {...project} />
  ));

  const handleChange = (e) => {
    setSearch(e.target.value)
  }


  return (
    <section>
      <h2>Projects</h2>

      <div className="filter">
        <button>All</button>
        <button>Phase 5</button>
        <button>Phase 4</button>
        <button>Phase 3</button>
        <button>Phase 2</button>
        <button>Phase 1</button>
      </div>
      <input onChange={handleChange} type="text" placeholder="Search..."/>

      <ul className="cards">{projectListItems}</ul>
    </section>
  );
};

export default ProjectList;
