import { useState } from "react";
import Social from "../Social";

export default function Footer() {
   return (
      <footer className="footer">
         <div className="container">
            <div className="row justify-content-between">
               <div className="col-md-8 d-flex align-items-center">
                  <p className="cop">© 2024 Project, Inc.</p>
                  <nav>
                     <ul className="footer-menu">
                        <li className="footer-menu__item">
                           <a href="#" className="footer-menu__link">
                              Terms
                           </a>
                        </li>
                        <li className="footer-menu__item">
                           <a href="#" className="footer-menu__link">
                              Privacy (Updated 08/2022)
                           </a>
                        </li>
                        <li className="footer-menu__item">
                           <a href="#" className="footer-menu__link">
                              Sitemap
                           </a>
                        </li>
                        <li className="footer-menu__item">
                           <a href="#" className="footer-menu__link">
                              What is Project?
                           </a>
                        </li>
                        <li className="footer-menu__item">
                           <a href="#" className="footer-menu__link">
                              Manage cookies
                           </a>
                        </li>
                        <li className="footer-menu__item">
                           <a href="#" className="footer-menu__link">
                              Do not share my personal information
                           </a>
                        </li>
                     </ul>
                  </nav>
               </div>
               <div className="col-md-4">
                  <Social />
               </div>
            </div>
         </div>
      </footer>
   );
}
