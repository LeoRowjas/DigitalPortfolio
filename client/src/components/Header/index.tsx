import styles from "./styles.module.scss";
import logo from "@/assets/logo.svg";
import ava from "@/assets/profile/avatar.jpg";
import { Link } from "react-router-dom";
export default function Header() {
   return (
      <header className={styles.header}>
         <div className="conrainer">
            <div className="row justify-content-between align-items-center">
               <div className="col-md-4 d-flex gap-3 align-items-center">
                  <a href="/">
                     <img src={logo} alt="logo" className={styles.logo} />
                  </a>
                  <nav>
                     <ul className={styles.menu}>
                        <li className={styles.menu__item}>
                           <Link to="/profile">
                              <a href="#" className={styles.menu__link}>
                                 Моя лента
                              </a>
                           </Link>
                        </li>
                        <li className={styles.menu__item}>
                           <Link to="/profile-projects">
                              <a href="#" className={styles.menu__link}>
                                 Мои проекты
                              </a>{" "}
                           </Link>
                        </li>
                     </ul>
                  </nav>
                  <a href="#" className={styles.search}>
                     <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                     >
                        <path
                           d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z"
                           stroke="#2B2D42"
                           stroke-width="3"
                           stroke-linecap="round"
                           stroke-linejoin="round"
                        />
                        <path
                           d="M22 22L20 20"
                           stroke="#2B2D42"
                           stroke-width="3"
                           stroke-linecap="round"
                           stroke-linejoin="round"
                        />
                     </svg>
                  </a>
               </div>
               <div className="col-md-4 d-flex gap-3 align-items-center">
                  <Link to="/profile">
                     <div className={styles.profile}>
                        <span className={styles.profile__name}>
                           Leonid Rowjas
                        </span>
                        <img
                           src={ava}
                           alt="ava"
                           className={styles.profile__ava}
                        />
                     </div>{" "}
                  </Link>
                  <a href="#" className={styles.icon}>
                     <svg
                        width="28"
                        height="28"
                        viewBox="0 0 28 28"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                     >
                        <path
                           d="M19.8335 23.9168H8.16683C4.66683 23.9168 2.3335 22.1668 2.3335 18.0835V9.91683C2.3335 5.8335 4.66683 4.0835 8.16683 4.0835H19.8335C23.3335 4.0835 25.6668 5.8335 25.6668 9.91683V18.0835C25.6668 22.1668 23.3335 23.9168 19.8335 23.9168Z"
                           stroke="#292D32"
                           stroke-width="3"
                           stroke-miterlimit="10"
                           stroke-linecap="round"
                           stroke-linejoin="round"
                        />
                        <path
                           d="M19.8332 10.5L16.1815 13.4167C14.9798 14.3733 13.0082 14.3733 11.8065 13.4167L8.1665 10.5"
                           stroke="#292D32"
                           stroke-width="3"
                           stroke-miterlimit="10"
                           stroke-linecap="round"
                           stroke-linejoin="round"
                        />
                     </svg>
                  </a>
                  <a href="#" className={styles.icon}>
                     <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                     >
                        <path
                           d="M3 6H21"
                           stroke="#292D32"
                           stroke-width="3"
                           stroke-linecap="round"
                        />
                        <path
                           d="M3 12H21"
                           stroke="#292D32"
                           stroke-width="3"
                           stroke-linecap="round"
                        />
                        <path
                           d="M3 18H21"
                           stroke="#292D32"
                           stroke-width="3"
                           stroke-linecap="round"
                        />
                     </svg>
                  </a>
               </div>
            </div>
         </div>
      </header>
   );
}
