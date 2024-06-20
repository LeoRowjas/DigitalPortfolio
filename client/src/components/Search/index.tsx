export default function Search() {
   return (
      <form action="#" className="search">
         <div className="search__icon">
            <svg
               width="24"
               height="24"
               viewBox="0 0 24 24"
               fill="none"
               xmlns="http://www.w3.org/2000/svg"
            >
               <path
                  d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z"
                  stroke="#ACACAC"
                  stroke-width="3"
                  stroke-linecap="round"
                  stroke-linejoin="round"
               />
               <path
                  d="M22 22L20 20"
                  stroke="#ACACAC"
                  stroke-width="3"
                  stroke-linecap="round"
                  stroke-linejoin="round"
               />
            </svg>
         </div>
         <input type="text" className="search__input" placeholder="Поиск...." />
      </form>
   );
}
