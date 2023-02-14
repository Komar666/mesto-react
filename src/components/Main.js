import React, { useState, useEffect } from "react";
import buttonProfilePath from "../images/Profile.svg";
import buttonEditPath from "../images/Edit-Button.svg";
import buttonAddPath from "../images/Vector.svg";
import api from "../utils/Api";
import Card from "./Card";

function Main(props) {
  const [userName, setUserName] = useState("");
  const [userDescription, setUserDescription] = useState("");
  const [userAvatar, setUserAvatar] = useState("");
  const [cards, setCards] = useState([]);

  useEffect(() => {
    function setProfile(name, about, avatar) {
      setUserName(name);
      setUserDescription(about);
      setUserAvatar(avatar);
    }

    api
      .getUserInfo()
      .then((res) => {
        setProfile(res.name, res.about, res.avatar);
      })
      .catch((err) => {
        console.log(err);
      });

    api
      .getInitialCards()
      .then((cardsResponse) => {
        const collectedCards = cardsResponse.map((card) => {
          return {
            name: card.name,
            link: card.link,
            likes: card.likes.length,
            id: card._id,
          };
        });
        setCards(collectedCards);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <main>
      <section className="profile">
        <div className="profile-avatar" onClick={props.onEditAvatar}>
          <img
            src={`${userAvatar}`}
            className="profile-avatar__img"
            alt="Аватар"
          />
          <img
            className="profile-avatar__pencil"
            src={buttonProfilePath}
            alt="Логотип"
          />
        </div>

        <div className="profile-info">
          <h1 className="profile-info__title">{userName}</h1>
          <p className="profile-info__subtitle">{userDescription}</p>
          <button type="button" className="profile-info__button">
            <img
              alt="Кнопка редактирования"
              src={buttonEditPath}
              onClick={props.onEditProfile}
            />
          </button>
        </div>
        <button type="button" className="profile__button">
          <img
            alt="Кнопка добавления новых элементов"
            src={buttonAddPath}
            onClick={props.onAddPlace}
          />
        </button>
      </section>
      <section className="elements">
        <ul className="elements__list">
          {cards.map((card) => (
            <Card
              key={card.id}
              onConfirm={props.onConfirm}
              card={card}
              onCardClick={props.onCardClick}
            />
          ))}
        </ul>
      </section>
    </main>
  );
}

export default Main;
