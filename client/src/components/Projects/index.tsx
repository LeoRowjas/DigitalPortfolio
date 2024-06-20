import { useEffect, useState } from "react";
import { getAllProjects } from "../../Api"; // Adjust import path based on your project structure
import Project from "../Project";

export default function Projects() {
   const [projects, setProjects] = useState<any[]>([]);

   useEffect(() => {
      fetchProjects();
   }, []);

   const fetchProjects = async () => {
      try {
         const response = await getAllProjects();
         setProjects(response.data.slice(0, 5));
      } catch (error) {
         console.error("Error fetching projects:", error);
         // Handle error fetching projects
      }
   };
   return (
      <div className="projects">
         {projects.map((project) => (
            <Project title={project.title} text={project.description} />
         ))}
      </div>
   );
}
