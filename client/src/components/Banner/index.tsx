import styles from "./styles.module.scss";
import star from "@/assets/star-bg.png";
export default function Banner() {
   return (
      <section className={styles.banner}>
         <div className="container">
            <div className="row">
               <div className="col-md-8 align-items-center">
                  <h1 className="main-title">
                     Делитесь своим кодом и находите вдохновение
                  </h1>
               </div>
               <div className="col-md-4">
                  <img src={star} alt="star" className={styles.starBg} />
               </div>
            </div>
            <div className="row justify-content-end">
               <div className="col-md-3">
                  <a href="#" className="btn">
                     Рекомендуемые проекты
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
                  </a>
               </div>
            </div>
         </div>
      </section>
   );
}
