function Card(props) {
  function handleClick() {
    props.onCardClick(props.card);
  }
  return (
    <article className="element" id="element">
      <button className="element__delete-button"></button>
      <img
        className="element__image"
        src={`${props.link}`}
        onClick={() => handleClick()}
        alt={`${props.name}`}
      />
      <div className="element__text-conteiner">
        <h2 className="element__text">{props.name}</h2>
        <div className="element__likes-conteiner">
          <button type="button" className="element__like-button"></button>
          <p className="element__likes">{props.likes.length}</p>
        </div>
      </div>
    </article>
  );
}

export { Card };
