import {useState} from "react";

const ProjectForm = ({addProject}) => {
  //The 5 pieces of state that we need from our form... or you can use a cleaner method (uncommented below)
  // const [name, setName] = useState("");
  // const [about, setAbout] = useState("");
  // const [phase, setPhase] = useState("");
  // const [link, setLink] = useState("");
  // const [image, setImage] = useState("");

  // const handleNameChange = (e) => setName(e.target.value);
  // const handleAboutChange = (e) => setAbout(e.target.value);
  // const handlePhaseChange = (e) => setPhase(e.target.value);
  // const handleLinkChange = (e) => setLink(e.target.value);
  // const handleImageChange = (e) => setImage(e.target.value);
  
  const [formData, setFormData] = useState({
    name: "",
    about: "",
    phase: "",
    link: "",
    image: "",
    likes: 0
  })

  const handleOnChange = (e) => {
    //using destructuring, makes things more dynamic
    const {name, value} = e.target;
    // [name] is being replaced by whatever the JSX "name=" is equal to in our form below... so its going to be name, about, image, link, etc.
    setFormData(formData => ({...formData, [name]:value}))
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    addProject(formData);
    
  }

  return (
    <section>
      <form className="form" autoComplete="off" onSubmit={handleSubmit}>
        <h3>Add New Project</h3>

        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="name" onChange={handleOnChange} value={formData.name}/>

        <label htmlFor="about">About</label>
        <textarea id="about" name="about" onChange={handleOnChange} value={formData.about}/>

        <label htmlFor="phase">Phase</label>
        <select name="phase" id="phase" onChange={handleOnChange} value={formData.phase}>
          <option>Select One</option>
          <option value="1">Phase 1</option>
          <option value="2">Phase 2</option>
          <option value="3">Phase 3</option>
          <option value="4">Phase 4</option>
          <option value="5">Phase 5</option>
        </select>

        <label htmlFor="link">Project Homepage</label>
        <input type="text" id="link" name="link" onChange={handleOnChange} value={formData.link}/>

        <label htmlFor="image">Screenshot</label>
        <input type="text" id="image" name="image" onChange={handleOnChange} value={formData.image}/>

        <button type="submit">Add Project</button>
      </form>
    </section>
  );
};

export default ProjectForm;
