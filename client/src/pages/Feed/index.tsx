import Block from "../../components/Block";
import img from "@/assets/block.png";
import Search from "../../components/Search";

export default function Feed() {
   return (
      <section className="feed">
         <div className="container">
            <div className="row align-items-center justify-content-between">
               <div className="col-md-4">
                  <h2 className="title">Лента проектов </h2>
               </div>
               <div className="col-md-4">
                  <Search />
               </div>
               <div className="col-md-2 d-flex gap-3 justify-content-end">
                  <a href="#" className="btn btn-min">
                     <svg
                        width="60"
                        height="60"
                        viewBox="0 0 60 60"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                     >
                        <path
                           d="M58.5 30C58.5 45.7401 45.7401 58.5 30 58.5C14.2599 58.5 1.5 45.7401 1.5 30C1.5 14.2599 14.2599 1.5 30 1.5C45.7401 1.5 58.5 14.2599 58.5 30Z"
                           stroke="#2B2D42"
                           stroke-width="3"
                        />
                        <g clip-path="url(#clip0_158_663)">
                           <path
                              d="M40.0029 24.5024H34.0029M24.0029 24.5024H20.0029M40.0029 35.5024H36.0029M26.0029 35.5024H20.0029M28.0029 28.0024C28.4626 28.0024 28.9177 27.9119 29.3423 27.736C29.767 27.5601 30.1528 27.3023 30.4778 26.9773C30.8028 26.6523 31.0606 26.2665 31.2365 25.8418C31.4124 25.4172 31.5029 24.9621 31.5029 24.5024C31.5029 24.0428 31.4124 23.5877 31.2365 23.1631C31.0606 22.7384 30.8028 22.3526 30.4778 22.0276C30.1528 21.7026 29.767 21.4448 29.3423 21.2689C28.9177 21.093 28.4626 21.0024 28.0029 21.0024C27.0747 21.0024 26.1844 21.3712 25.5281 22.0276C24.8717 22.6839 24.5029 23.5742 24.5029 24.5024C24.5029 25.4307 24.8717 26.3209 25.5281 26.9773C26.1844 27.6337 27.0747 28.0024 28.0029 28.0024V28.0024ZM32.0029 39.0024C32.9312 39.0024 33.8214 38.6337 34.4778 37.9773C35.1342 37.3209 35.5029 36.4307 35.5029 35.5024C35.5029 34.5742 35.1342 33.684 34.4778 33.0276C33.8214 32.3712 32.9312 32.0024 32.0029 32.0024C31.0747 32.0024 30.1844 32.3712 29.5281 33.0276C28.8717 33.684 28.5029 34.5742 28.5029 35.5024C28.5029 36.4307 28.8717 37.3209 29.5281 37.9773C30.1844 38.6337 31.0747 39.0024 32.0029 39.0024V39.0024Z"
                              stroke="#2B2D42"
                              stroke-width="2.5"
                              stroke-miterlimit="10"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                           />
                        </g>
                        <defs>
                           <clipPath id="clip0_158_663">
                              <rect
                                 width="24"
                                 height="24"
                                 fill="white"
                                 transform="translate(18.0029 18.0024)"
                              />
                           </clipPath>
                        </defs>
                     </svg>
                  </a>
                  <a href="#" className="btn ">
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
               </div>
            </div>
         </div>
         <div className="feed-block">
            <div className="container">
               <Block
                  blockCount={12}
                  img={img}
                  title="Sasha Malinov"
                  intro="Мобильное приложение для здоровья и спорта"
                  text="Lorem ipsum dolor sit amet consectetur. Massa at accumsan interdum pharetra."
               />
            </div>
         </div>
      </section>
   );
}
