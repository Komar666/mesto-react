import React from 'react';


function ImagePopup(props) {

    return ( 

      <>
      
      <div className={`popup popup-img ${props.card ? 'popup_opened' : '' }`}>
     

<div className="popup-img-block">

    <div className="popup-img-object">
        <img src={props.card} className="popup-img-object__item" type="text" />
        <p className="popup-img-object__text"> </p>
    </div>

    <button className="popup-container-close" type="button" onClick={props.onClose}>
               
    </button>

</div>

</div>
      
      </>
     
    );
}

export default ImagePopup;