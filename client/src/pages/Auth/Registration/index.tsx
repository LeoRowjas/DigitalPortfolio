import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../../../Api";

export default function Registration() {
   const navigate = useNavigate();
   const [formData, setFormData] = useState({
      login: "",
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      biography: "",
   });

   const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData((prevState) => ({
         ...prevState,
         [name]: value,
      }));
   };

   const handleSubmit = async (e) => {
      e.preventDefault();

      try {
         await registerUser(formData); // Используем вашу функцию registerUser для отправки данных
         alert("Успешная регистрация!");
         // После успешной регистрации переходим на страницу логина
         navigate("/login");
      } catch (error) {
         alert("Ошибка при регистрации:");
         // Обработка ошибки, если нужно
      }
   };

   return (
      <section className="registration">
         <div className="container">
            <div className="row justify-content-center">
               <div className="col-md-4 auth__block d-flex flex-column justify-content-center align-items-center gap-3">
                  <div className="login__header d-flex align-items-center">
                     <h2 className="title">Регистрация</h2>
                  </div>

                  <form
                     action="#"
                     onSubmit={handleSubmit}
                     className="form login-form"
                  >
                     <div className="form__block">
                        <input
                           type="text"
                           className="form__input form__input_simple"
                           placeholder="Имя пользователя"
                           name="login"
                           value={formData.login}
                           onChange={handleChange}
                           required
                        />
                     </div>
                     <div className="form__block">
                        <input
                           type="text"
                           className="form__input form__input_simple"
                           placeholder="Имя"
                           name="firstName"
                           value={formData.firstName}
                           onChange={handleChange}
                           required
                        />
                     </div>
                     <div className="form__block">
                        <input
                           type="text"
                           className="form__input form__input_simple"
                           placeholder="Фамилия"
                           name="lastName"
                           value={formData.lastName}
                           onChange={handleChange}
                        />
                     </div>
                     <div className="form__block">
                        <div className="form__icon">
                           <svg
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                           >
                              <g clip-path="url(#clip0_160_8068)">
                                 <path
                                    d="M19 1H5C3.67441 1.00159 2.40356 1.52888 1.46622 2.46622C0.528882 3.40356 0.00158786 4.67441 0 6L0 18C0.00158786 19.3256 0.528882 20.5964 1.46622 21.5338C2.40356 22.4711 3.67441 22.9984 5 23H19C20.3256 22.9984 21.5964 22.4711 22.5338 21.5338C23.4711 20.5964 23.9984 19.3256 24 18V6C23.9984 4.67441 23.4711 3.40356 22.5338 2.46622C21.5964 1.52888 20.3256 1.00159 19 1ZM5 3H19C19.5988 3.00118 20.1835 3.18151 20.679 3.5178C21.1744 3.85409 21.5579 4.33095 21.78 4.887L14.122 12.546C13.5584 13.1073 12.7954 13.4225 12 13.4225C11.2046 13.4225 10.4416 13.1073 9.878 12.546L2.22 4.887C2.44215 4.33095 2.82561 3.85409 3.32105 3.5178C3.81648 3.18151 4.40121 3.00118 5 3ZM19 21H5C4.20435 21 3.44129 20.6839 2.87868 20.1213C2.31607 19.5587 2 18.7956 2 18V7.5L8.464 13.96C9.40263 14.8963 10.6743 15.422 12 15.422C13.3257 15.422 14.5974 14.8963 15.536 13.96L22 7.5V18C22 18.7956 21.6839 19.5587 21.1213 20.1213C20.5587 20.6839 19.7956 21 19 21Z"
                                    fill="#B4B4B4"
                                 />
                              </g>
                              <defs>
                                 <clipPath id="clip0_160_8068">
                                    <rect width="24" height="24" fill="white" />
                                 </clipPath>
                              </defs>
                           </svg>
                        </div>
                        <input
                           type="email"
                           className="form__input"
                           placeholder="evaeva@gmail.com"
                           name="email"
                           value={formData.email}
                           onChange={handleChange}
                           required
                        />
                     </div>
                     <div className="form__block">
                        <div className="form__icon">
                           <svg
                              width="25"
                              height="25"
                              viewBox="0 0 25 25"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                           >
                              <path
                                 d="M8.01374 17.632C8.63025 17.632 9.13002 17.1322 9.13002 16.5157C9.13002 15.8992 8.63025 15.3994 8.01374 15.3994C7.39724 15.3994 6.89746 15.8992 6.89746 16.5157C6.89746 17.1322 7.39724 17.632 8.01374 17.632Z"
                                 fill="#B4B4B4"
                              />
                              <path
                                 d="M12.4805 17.632C13.0971 17.632 13.5968 17.1322 13.5968 16.5157C13.5968 15.8992 13.0971 15.3994 12.4805 15.3994C11.864 15.3994 11.3643 15.8992 11.3643 16.5157C11.3643 17.1322 11.864 17.632 12.4805 17.632Z"
                                 fill="#B4B4B4"
                              />
                              <path
                                 d="M18.0607 16.5157C18.0607 17.1322 17.5609 17.632 16.9444 17.632C16.3279 17.632 15.8281 17.1322 15.8281 16.5157C15.8281 15.8992 16.3279 15.3994 16.9444 15.3994C17.5609 15.3994 18.0607 15.8992 18.0607 16.5157Z"
                                 fill="#B4B4B4"
                              />
                              <path
                                 fill-rule="evenodd"
                                 clip-rule="evenodd"
                                 d="M6.62 7.58567C6.62 4.34903 9.24383 1.7252 12.4805 1.7252C15.2101 1.7252 17.5057 3.59209 18.1563 6.11992C18.2716 6.56771 18.7281 6.83728 19.1758 6.72203C19.6237 6.60678 19.8931 6.15035 19.7779 5.70257C18.9415 2.4529 15.9926 0.0507812 12.4805 0.0507812C8.31907 0.0507812 4.94559 3.42427 4.94559 7.58567V9.03992C4.69238 9.05772 4.45373 9.0809 4.22921 9.11108C3.22444 9.24617 2.37845 9.53517 1.70653 10.207C1.03462 10.879 0.74563 11.7249 0.610538 12.7297C0.480425 13.6975 0.480447 14.928 0.480469 16.4546V16.5772C0.480447 18.1038 0.480425 19.3343 0.610538 20.3021C0.74563 21.3069 1.03462 22.1528 1.70653 22.8247C2.37845 23.4967 3.22444 23.7857 4.22921 23.9207C5.19699 24.0508 6.42749 24.0508 7.9541 24.0508H17.0069C18.5335 24.0508 19.764 24.0508 20.7318 23.9207C21.7365 23.7857 22.5825 23.4967 23.2545 22.8247C23.9263 22.1528 24.2154 21.3069 24.3504 20.3021C24.4805 19.3343 24.4805 18.1038 24.4805 16.5772V16.4546C24.4805 14.928 24.4805 13.6975 24.3504 12.7297C24.2154 11.7249 23.9263 10.879 23.2545 10.207C22.5825 9.53517 21.7365 9.24617 20.7318 9.11108C19.764 8.98097 18.5335 8.98099 17.0069 8.98101H7.9541C7.48134 8.981 7.03697 8.981 6.62 8.98485V7.58567ZM4.45232 10.7705C3.63323 10.8807 3.19947 11.0821 2.89053 11.3911C2.58159 11.7 2.38015 12.1337 2.27003 12.9528C2.15666 13.7961 2.15489 14.9136 2.15489 16.5159C2.15489 18.1182 2.15666 19.2357 2.27003 20.079C2.38015 20.8981 2.58159 21.3317 2.89053 21.6407C3.19947 21.9497 3.63323 22.1511 4.45232 22.2613C5.29551 22.3746 6.41303 22.3764 8.01535 22.3764H16.9456C18.5479 22.3764 19.6654 22.3746 20.5086 22.2613C21.3278 22.1511 21.7614 21.9497 22.0704 21.6407C22.3794 21.3317 22.5808 20.8981 22.691 20.079C22.8043 19.2357 22.8061 18.1182 22.8061 16.5159C22.8061 14.9136 22.8043 13.7961 22.691 12.9528C22.5808 12.1337 22.3794 11.7 22.0704 11.3911C21.7614 11.0821 21.3278 10.8807 20.5086 10.7705C19.6654 10.6572 18.5479 10.6554 16.9456 10.6554H8.01535C6.41303 10.6554 5.29551 10.6572 4.45232 10.7705Z"
                                 fill="#B4B4B4"
                              />
                           </svg>
                        </div>
                        <input
                           type="password"
                           className="form__input"
                           placeholder="ор5рпо35"
                           name="password"
                           value={formData.password}
                           onChange={handleChange}
                           required
                        />
                     </div>

                     <div className="form__block">
                        <input
                           type="text"
                           className="form__input form__input_simple"
                           placeholder="О себе..."
                           name="biography"
                           value={formData.biography}
                           onChange={handleChange}
                        />
                     </div>

                     <div className="form__bottom">
                        <button className="form__btn  btn btn-blue">
                           Регистрация
                        </button>
                        <p className="form__bottom-text">
                           У вас уже есть аккаунт?
                           <a href="#" className="link">
                              Войти
                           </a>
                        </p>
                     </div>
                  </form>
               </div>
            </div>
         </div>
      </section>
   );
}