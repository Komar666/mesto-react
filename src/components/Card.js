import React from "react";
import buttonTrash from "../images/trash.svg";

function Card({ card, onCardClick, onConfirm }) {
  const handleCardClick = () => {
    onCardClick(card.link);
  };

  return (
    <>
      <li className="element">
        <img
          alt={card.name}
          className="element__delete"
          src={buttonTrash}
          onClick={onConfirm}
        />
        <div className="element__configuration">
          <img
            src={card.link}
            onClick={handleCardClick}
            alt="Фотография местности"
            className="element__images"
          />
        </div>
        <div className="element-group">
          <h2 className="element-group__text">{card.name}</h2>

          <div className="element-like-group">
            <button
              type="button"
              className=" element-like-group__icon"
            ></button>
            <p className="element-like-group__number">{card.likes}</p>
          </div>
        </div>
      </li>
    </>
  );
}

export default Card;
