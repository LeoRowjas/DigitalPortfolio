import { Link } from "react-router-dom";
import Block from "../Block";
import img from "@/assets/block.png";
import { useEffect, useState } from "react";
import { getAllProjects } from "../../Api";

export default function Meet() {
   const [projects, setProjects] = useState<any[]>([]);

   useEffect(() => {
      fetchProjects();
   }, []);

   const fetchProjects = async () => {
      try {
         const response = await getAllProjects();
         setProjects(response.data.slice(0, 5));
         // setProjects(response.data); // Assuming API response is an array of projects
      } catch (error) {
         console.error("Error fetching projects:", error);
         // Handle error fetching projects
      }
   };

   return (
      <section className="meet">
         <div className="meet-arrow">
            <svg
               width="42"
               height="605"
               viewBox="0 0 42 605"
               fill="none"
               xmlns="http://www.w3.org/2000/svg"
            >
               <path
                  d="M21 574.441L21 4.00019"
                  stroke="url(#paint0_linear_17_243)"
                  stroke-width="8"
                  stroke-linecap="round"
               />
               <path
                  d="M20.7847 605L0.00012207 562.122L20.7847 575.151L41.5693 562.122L20.7847 605Z"
                  fill="#80FFDB"
               />
               <defs>
                  <linearGradient
                     id="paint0_linear_17_243"
                     x1="21.5"
                     y1="574.441"
                     x2="21.5"
                     y2="4.00018"
                     gradientUnits="userSpaceOnUse"
                  >
                     <stop stop-color="#80FFDB" />
                     <stop offset="1" stop-color="#2B2D42" />
                  </linearGradient>
               </defs>
            </svg>
         </div>
         <div className="container justify-content-between align-items-center">
            <div className="row align-items-center">
               <div className="col-md-7">
                  <h2 className="title">познакомьтесь с ...</h2>
               </div>
               <div className="col-md-5 d-flex gap-3 justify-content-end">
                  <a href="#" className="btn  btn-white">
                     Фильтр
                     <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                     >
                        <path
                           d="M5.3999 2.1001H18.5999C19.6999 2.1001 20.5999 3.0001 20.5999 4.1001V6.3001C20.5999 7.1001 20.0999 8.1001 19.5999 8.6001L15.2999 12.4001C14.6999 12.9001 14.2999 13.9001 14.2999 14.7001V19.0001C14.2999 19.6001 13.8999 20.4001 13.3999 20.7001L11.9999 21.6001C10.6999 22.4001 8.8999 21.5001 8.8999 19.9001V14.6001C8.8999 13.9001 8.4999 13.0001 8.0999 12.5001L4.2999 8.5001C3.7999 8.0001 3.3999 7.1001 3.3999 6.5001V4.2001C3.3999 3.0001 4.2999 2.1001 5.3999 2.1001Z"
                           stroke="#F8F8F8"
                           stroke-width="2"
                           stroke-miterlimit="10"
                           stroke-linecap="round"
                           stroke-linejoin="round"
                        />
                        <path
                           d="M10.93 2.1001L6 10.0001"
                           stroke="#F8F8F8"
                           stroke-width="2"
                           stroke-miterlimit="10"
                           stroke-linecap="round"
                           stroke-linejoin="round"
                        />
                     </svg>
                  </a>
                  <Link to="/projects">
                     {" "}
                     <a href="#" className="btn btn-white">
                        Посмотреть все
                        <svg
                           width="24"
                           height="24"
                           viewBox="0 0 24 24"
                           fill="none"
                           xmlns="http://www.w3.org/2000/svg"
                        >
                           <path
                              d="M8.91016 19.9201L15.4302 13.4001C16.2002 12.6301 16.2002 11.3701 15.4302 10.6001L8.91016 4.08008"
                              stroke="#F8F8F8"
                              stroke-width="3"
                              stroke-miterlimit="10"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                           />
                        </svg>
                     </a>
                  </Link>
               </div>
            </div>
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
