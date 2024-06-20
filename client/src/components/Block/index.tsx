import React from "react";

interface BlockProps {
   img: string;
   title: string;
   intro: string;
   text: string;
   likes: number;
   createdAt: string;
}

const Block: React.FC<BlockProps> = ({
   img,
   title,
   intro,
   text,
   likes,
   createdAt,
}) => {
   return (
      <div className="col-md-4 mb-4">
         <div className="block-item">
            <div className="block__elems d-flex align-items-center gap-4 mb-3">
               <img src={img} alt="img" className="block-item__img" />
               <div className="block__items">
                  <h5 className="title-min">{title}</h5>
                  <p className="intro">{intro}</p>
               </div>
            </div>

            <p className="text">{text}</p>
            <div className="block__footer">
               <span className="intro">{likes} likes</span>
               <span className="intro">
                  {new Date(createdAt).toLocaleDateString()}
               </span>
            </div>
         </div>
      </div>
   );
};

export default Block;
