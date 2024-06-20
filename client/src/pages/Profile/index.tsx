import Person from "../../components/Person";
import Achievements from "../../components/Achievements";
import Projects from "../../components/Projects";

export default function Profile() {
   return (
      <section className="profile">
         <div className="container">
            <div className="row align-items-start justify-content-between">
               <div className="col-md-3">
                  <Person />
               </div>
               <div className="col-md-7">
                  <Achievements title="Достижения" />
                  <hr className="hr" />
                  <Projects />
               </div>
            </div>
         </div>
      </section>
   );
}
