interface projectProps {
   title: string;
   text: string;
}

const Project: React.FC<projectProps> = ({ title, text }) => {
   return (
      <>
         <a href="#" className="project-link text-decoration-none">
            <div className="project mb-3 d-flex align-items-center">
               <div className="project__item ">
                  <h3 className="title-medium mb-3">{title}</h3>
                  <p className="text">{text}</p>
               </div>
               <div className="project__icon">
                  <svg
                     width="24"
                     height="24"
                     viewBox="0 0 24 24"
                     fill="none"
                     xmlns="http://www.w3.org/2000/svg"
                  >
                     <path
                        d="M8.91016 19.9201L15.4302 13.4001C16.2002 12.6301 16.2002 11.3701 15.4302 10.6001L8.91016 4.08008"
                        stroke="#2B2D42"
                        stroke-width="3"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                     />
                  </svg>
               </div>
            </div>
         </a>
      </>
   );
};

export default Project;
