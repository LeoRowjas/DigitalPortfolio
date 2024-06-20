export default function Achievements({title}) {
   return (
      <div className="achievements">
         <h2 className="title">{title}</h2>
         <div className="achievements__block d-flex align-items-center gap-3">
            <div className="achievements__item achievements__item_1"></div>
            <div className="achievements__item achievements__item_2"></div>
            <div className="achievements__item achievements__item_3"></div>
            <div className="achievements__item achievements__item_4"></div>
            <div className="achievements__item achievements__item_5"></div>
            <div className="achievements__item achievements__item_6"></div>
            <div className="achievements__item achievements__item_7"></div>
            <div className="achievements__item achievements__item_8"></div>
         </div>
      </div>
   );
}
