import React, { useState } from 'react';
import PopupWithForm from './PopupWithForm.js';
import Header from './Header.js';
import Footer from './Footer.js';
import Main from './Main.js';
import ImagePopup from './ImagePopup.js';

function App() {

    const [isEditProfilePopupOpen, setEditProfilePopupOpen] = useState(false);
    const [isAddPlacePopupOpen, setAddPlacePopupOpen] = useState(false);
    const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = useState(false);
    const [selectedCard, setSelectedCard] = useState({isOpen: false, card: {}});

    const closeAllPopups = () => {
        setEditProfilePopupOpen(false);
        setAddPlacePopupOpen(false);
        setEditAvatarPopupOpen(false);
        setSelectedCard({isOpen: false, card: {}});
    }

    const handleEditProfileClick = () => {setEditProfilePopupOpen(true)};
    const handleAddPlaceClick = () => {setAddPlacePopupOpen(true)};
    const handleEditAvatarClick = () => {setEditAvatarPopupOpen(true)};
    const handleCardClick = (card) => {setSelectedCard({isOpen: true, card: card})};

    return (
      <div className="page">

        <Header />
        <Main 
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onEditAvatar={handleEditAvatarClick} 
        onCardClick={handleCardClick}
        />
        <Footer />

        <PopupWithForm name={'edit-profile'} title={'Редактировать профиль'} isOpen={isEditProfilePopupOpen} onClose={closeAllPopups}>
                        <div className="popup__input-conteiner">
                            <input type="text" name="input-name" id="popup-name" placeholder="Имя" className="popup__input" minLength="2" maxLength="40" required />
                            <span className="popup__input-error popup-name-error"></span>
                        </div>
                        <div className="popup__input-conteiner">
                            <input type="text" name="input-job" id="popup-about" placeholder="Род деятельности" className="popup__input" minLength="2" maxLength="200" required />
                            <span className="popup__input-error popup-about-error"></span>
                        </div>
        </PopupWithForm>

        <PopupWithForm name={'new-place'} title={'Новое место'} isOpen={isAddPlacePopupOpen} onClose={closeAllPopups}>
                        <div className="popup__input-conteiner">
                            <input type="text" name="input-title" id="popup-title" placeholder="Название" className="popup__input" minLength="2" maxLength="30" required />
                            <span className="popup__input-error popup-title-error"></span>
                        </div>
                        <div className="popup__input-conteiner">
                            <input type="url" name="input-link" id="popup-link" placeholder="Ссылка на картинку" className="popup__input" required />
                            <span className="popup__input-error popup-link-error"></span>
                        </div>
        </PopupWithForm>

        <PopupWithForm name={'edit-avatar'} title={'Обновить аватар'} isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups}>
                        <div className="popup__input-conteiner">
                            <input type="text" name="input-avatar" id="popup-avatar" placeholder="Ссылка" className="popup__input" minLength="2" maxLength="100" required />
                            <span className="popup__input-error popup-avatar-error"></span>
                        </div>
        </PopupWithForm>

        <PopupWithForm name={'confirmation'} title={'Вы уверены?'} onClose={closeAllPopups}></PopupWithForm>

        <ImagePopup onClose={closeAllPopups} card={selectedCard}/>

      </div>
    );
  }
  
  export default App;