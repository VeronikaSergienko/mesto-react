import React from "react";
import api from "../utils/api";
import { Card } from "./Card";

function Main({ onEditProfile, onAddPlace, onEditAvatar, onCardClick }) {
  const [userName, setuserName] = React.useState("Жак-Ив Кусто");
  const [userDescription, setuserDescription] = React.useState(
    "Исследователь океана"
  );
  const [userAvatar, setuserAvatar] = React.useState(
    "../../../images/profile-kusto.jpg"
  );
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    Promise.all([api.getUserInfoApi(), api.getInitialCardsApi()])
      .then(([profile, cards]) => {
        setuserAvatar(profile.avatar);
        setuserName(profile.name);
        setuserDescription(profile.about);
        setCards(cards);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <main className="content">
      <section className="profile">
        <div
          className="profile__avatar"
          onClick={onEditAvatar}
          style={{ backgroundImage: `url(${userAvatar})` }}
        ></div>
        <div className="profile__profile-info">
          <h1 className="profile__name">{userName}</h1>
          <button
            aria-label="открытьФорму"
            type="button"
            className="profile__edit-button"
            onClick={onEditProfile}
          ></button>
          <p className="profile__type-of-activity">{userDescription}</p>
        </div>
        <button
          type="button"
          className="profile__add-button"
          onClick={onAddPlace}
        ></button>
      </section>

      <section className="elements">
        {cards.map((card) => {
          return (
            <Card
              card={card}
              key={card._id}
              link={card.link}
              name={card.name}
              likes={card.likes}
              onCardClick={onCardClick}
            />
          );
        })}
      </section>
    </main>
  );
}

export default Main;
