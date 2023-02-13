import React from 'react';
import buttonTrash from '../images/trash.svg';


function Card(props) {

    const handleCardClick = () => {
        props.onCardClick(props.card.link);
       
    };
      
       return ( 

     <>

                   <li key={props.key} className="element">
                   <img className="element__delete" src={buttonTrash} onClick={props.onConfirm} />
                  <div className="element__configuration"> 
                   <img  src={props.card.link}  onClick={handleCardClick} alt="Фотография местности" className="element__images" />
                   </div>
                   <div className="element-group">
                       <h2 className="element-group__text">{props.card.name}</h2>
                     
                         <div className="element-like-group">
                               <button type="button" className=" element-like-group__icon">
                                   
                               </button>
                               <p className="element-like-group__number">{props.card.likes}</p>
                         </div>
                           
                   </div>
                </li>
     </>
     
    );
}

export default Card;







