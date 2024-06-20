import { useEffect, useState } from "react";
import avatar from "@/assets/profile/avatar.jpg";
import { getUserByUsername, editUser, deleteUser } from "../../Api"; // Adjust the import path based on your project structure

export default function Person() {
   // const [user, setUser] = useState<any>(null);
   // const [editing, setEditing] = useState(false);
   // const [newName, setNewName] = useState("");

   // // Fetch user data on component mount
   // useEffect(() => {
   //    const username = "Eva Temirkhanova"; // Replace with the actual username or retrieve it dynamically
   //    fetchUser(username);
   // }, []);

   // const fetchUser = async (username: string) => {
   //    try {
   //       const response = await getUserByUsername(username);
   //       setUser(response.data); // Assuming your API returns user data in a structure like { avatar, name, email }
   //    } catch (error) {
   //       console.error("Error fetching user:", error);
   //       // Handle error fetching user data
   //    }
   // };

   // const handleEdit = async () => {
   //    try {
   //       const username = "evatemi"; // Replace with the actual username
   //       const newData = { name: newName }; // Example of data you want to update
   //       await editUser(username, newData);
   //       // Optionally, fetch user again after editing
   //       fetchUser(username);
   //       setEditing(false); // Close edit mode
   //    } catch (error) {
   //       console.error("Error editing user:", error);
   //       // Handle error editing user
   //    }
   // };

   // const handleDelete = async () => {
   //    try {
   //       const username = "evatemi"; // Replace with the actual username
   //       await deleteUser(username);
   //       // Handle successful deletion (e.g., redirect or show a success message)
   //    } catch (error) {
   //       console.error("Error deleting user:", error);
   //       // Handle error deleting user
   //    }
   // };

   // if (!user) return <div>Loading...</div>;

   return (
      <div className="person">
         <img src={avatar} alt="avatar" className="avatar" />
         <p className="name">Leonid Rowjas</p>
         <p className="mail">
            {" "}
            Leonid Rowjas //{" "}
            <a href="mailto:lolkek@gmail.com" className="mail__link">
               lolkek@gmail.com
            </a>
         </p>
         <button className="btn btn-blue">
            Редактировать профиль
            <svg
               width="24"
               height="24"
               viewBox="0 0 24 24"
               fill="none"
               xmlns="http://www.w3.org/2000/svg"
            >
               <path
                  d="M8.91016 19.9201L15.4302 13.4001C16.2002 12.6301 16.2002 11.3701 15.4302 10.6001L8.91016 4.08008"
                  stroke="#EEEEEE"
                  stroke-width="2.5"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
               />
            </svg>
         </button>
         {/* <img src={user.avatar || avatar} alt="avatar" className="avatar" /> */}
         {/* {editing ? (
            <input
               type="text"
               value={newName}
               onChange={(e) => setNewName(e.target.value)}
            />
         ) : (
            <p className="name">{user.name}</p>
         )} */}
         {/* <p className="mail">
            {user.name} //{" "}
            <a href={`mailto:${user.email}`} className="mail__link">
               {user.email}
            </a>
         </p> */}
         {/* <p className="mail">
            Ева Темирханова //{" "}
            <a href="mailto:evaeva@gmail.com" className="mail__link">
               evaeva@gmail.com
            </a>
         </p> */}
         {/* {editing ? (
            <button className="btn btn-blue" onClick={handleEdit}>
               Сохранить
               <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
               >
                  <path
                     d="M8.91016 19.9201L15.4302 13.4001C16.2002 12.6301 16.2002 11.3701 15.4302 10.6001L8.91016 4.08008"
                     stroke="#EEEEEE"
                     stroke-width="2.5"
                     stroke-miterlimit="10"
                     stroke-linecap="round"
                     stroke-linejoin="round"
                  />
               </svg>
            </button>
         ) : (
            <button className="btn btn-blue" onClick={() => setEditing(true)}>
               Редактировать профиль
               <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
               >
                  <path
                     d="M8.91016 19.9201L15.4302 13.4001C16.2002 12.6301 16.2002 11.3701 15.4302 10.6001L8.91016 4.08008"
                     stroke="#EEEEEE"
                     stroke-width="2.5"
                     stroke-miterlimit="10"
                     stroke-linecap="round"
                     stroke-linejoin="round"
                  />
               </svg>
            </button>
         )}
         <button className="btn btn-red" onClick={handleDelete}>
            Удалить профиль
         </button> */}
         <div className="community d-flex align-items-center gap-3">
            <div className="community__block d-flex align-items-center gap-2">
               <div className="community__icon">
                  <svg
                     width="24"
                     height="24"
                     viewBox="0 0 24 24"
                     fill="none"
                     xmlns="http://www.w3.org/2000/svg"
                  >
                     <path
                        d="M18.0001 7.16C17.9401 7.15 17.8701 7.15 17.8101 7.16C16.4301 7.11 15.3301 5.98 15.3301 4.58C15.3301 3.15 16.4801 2 17.9101 2C19.3401 2 20.4901 3.16 20.4901 4.58C20.4801 5.98 19.3801 7.11 18.0001 7.16Z"
                        stroke="#868687"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                     />
                     <path
                        d="M16.9699 14.4402C18.3399 14.6702 19.8499 14.4302 20.9099 13.7202C22.3199 12.7802 22.3199 11.2402 20.9099 10.3002C19.8399 9.59016 18.3099 9.35016 16.9399 9.59016"
                        stroke="#868687"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                     />
                     <path
                        d="M5.96998 7.16C6.02998 7.15 6.09998 7.15 6.15998 7.16C7.53998 7.11 8.63998 5.98 8.63998 4.58C8.63998 3.15 7.48998 2 6.05998 2C4.62998 2 3.47998 3.16 3.47998 4.58C3.48998 5.98 4.58998 7.11 5.96998 7.16Z"
                        stroke="#868687"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                     />
                     <path
                        d="M6.99994 14.4402C5.62994 14.6702 4.11994 14.4302 3.05994 13.7202C1.64994 12.7802 1.64994 11.2402 3.05994 10.3002C4.12994 9.59016 5.65994 9.35016 7.02994 9.59016"
                        stroke="#868687"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                     />
                     <path
                        d="M12.0001 14.6302C11.9401 14.6202 11.8701 14.6202 11.8101 14.6302C10.4301 14.5802 9.33008 13.4502 9.33008 12.0502C9.33008 10.6202 10.4801 9.47021 11.9101 9.47021C13.3401 9.47021 14.4901 10.6302 14.4901 12.0502C14.4801 13.4502 13.3801 14.5902 12.0001 14.6302Z"
                        stroke="#868687"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                     />
                     <path
                        d="M9.09021 17.7804C7.68021 18.7204 7.68021 20.2603 9.09021 21.2003C10.6902 22.2703 13.3102 22.2703 14.9102 21.2003C16.3202 20.2603 16.3202 18.7204 14.9102 17.7804C13.3202 16.7204 10.6902 16.7204 9.09021 17.7804Z"
                        stroke="#868687"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                     />
                  </svg>
               </div>
               <span className="intro-min">0 подписчиков</span>
            </div>
            <div className="community__block">
               <span className="intro-min">1 подписка</span>
            </div>
         </div>
      </div>
   );
}
