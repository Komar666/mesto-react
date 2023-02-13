import React, { useState } from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm ";
import ImagePopup from "./ImagePopup";

function App(props) {
  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = useState(false);
  const [isConfirmationPopupOpen, setConfirmationPopupOpen] = useState(false);

  const [selectedCard, setSelectedCard] = useState(null);

  function handleEditProfileClick() {
    setEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setAddPlacePopupOpen(true);
  }

  function handleEditAvatarClick() {
    setEditAvatarPopupOpen(true);
  }

  function handleConfirmationClick() {
    setConfirmationPopupOpen(true);
  }

  const closeAllPopups = () => {
    setEditProfilePopupOpen(false);
    setAddPlacePopupOpen(false);
    setEditAvatarPopupOpen(false);
    setConfirmationPopupOpen(false);
    setSelectedCard(null);
  };

  return (
    <div className="page">
      <Header />;
      <Main
        onCardClick={setSelectedCard}
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onEditAvatar={handleEditAvatarClick}
        onConfirm={handleConfirmationClick}
      />
      ;
      <Footer />;
      <ImagePopup card={selectedCard} onClose={closeAllPopups} />;
      <PopupWithForm
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
        button="Сохранить"
        title="Редактировать профиль"
        name="profile-edit"
      >
        <input
          id="name-input"
          name="name"
          className="popup-form__field"
          value=""
          onChange={() => {}}
          type="text"
          placeholder="Имя"
          minLength="2"
          maxLength="40"
          required
        />
        <span className="name-input-error popup-form__error"></span>
        <input
          id="about-input"
          name="about"
          className="popup-form__field popup-form__field_type_sub"
          value=""
          onChange={() => {}}
          type="text"
          placeholder="Профессия"
          minLength="2"
          maxLength="200"
          required
        />
        <span className="about-input-error popup-form__error"></span>
      </PopupWithForm>
      ;
      <PopupWithForm
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
        button="Создать"
        title="Новое место"
        name="add"
      >
        <input
          id="place-input"
          name="name"
          className="popup-form__field popup-form__field_type_name"
          placeholder="Название"
          value=""
          onChange={() => {}}
          type="text"
          minLength="2"
          maxLength="30"
          required
        />
        <span className="place-input-error popup-form__error"></span>
        <input
          id="link-input"
          name="link"
          className="popup-form__field popup-form__field_type_link"
          placeholder="Ссылка на картинку"
          value=""
          onChange={() => {}}
          type="url"
          required
        />
        <span className="link-input-error popup-form__error"></span>
      </PopupWithForm>
      <PopupWithForm
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
        button="Сохранить"
        title="Обновить аватар"
        name="profile-img"
      >
        <input
          id="profile-input"
          name="link"
          className="popup-form__field popup-form__field_type_link"
          placeholder="Ссылка на картинку"
          value=""
          onChange={() => {}}
          type="url"
          required
        />
        <span className="profile-input-error popup-form__error"></span>
      </PopupWithForm>
      <PopupWithForm
        isOpen={isConfirmationPopupOpen}
        onClose={closeAllPopups}
        button="Да"
        title="Вы уверены?"
        name="close"
      />
      ;
    </div>
  );
}

export default App;
