import { useEffect, useState } from "react";
import { getAllProjects } from "../../Api"; // Adjust import path based on your project structure
import Block from "../../components/Block";
import img from "@/assets/block.png";

export default function AllProjects() {
   const [projects, setProjects] = useState<any[]>([]);

   useEffect(() => {
      fetchProjects();
   }, []);

   const fetchProjects = async () => {
      try {
         const response = await getAllProjects();
         setProjects(response.data); // Assuming API response is an array of projects
      } catch (error) {
         console.error("Error fetching projects:", error);
         // Handle error fetching projects
      }
   };

   return (
      <section className="all-projects">
         <div className="container">
            <div className="block">
               <div className="row">
                  {projects.map((project) => (
                     <Block
                        key={project.projectId}
                        img={img} // Use appropriate image source based on project data
                        title={project.title}
                        intro={`От ${project.ownerName}`}
                        text={project.description}
                        likes={project.likesCount}
                        createdAt={project.creationDateTime}
                     />
                  ))}
               </div>
            </div>
         </div>
      </section>
   );
}
