import React from 'react';

const PopupWithForm = (props) => {

    return (
        <div className={`popup popup_type_${props.name} ${props.isOpen ? 'popup_opened' : ''}`} onClick={() => {props.onClose()}}>
        <div className="popup__content" onClick={e => e.stopPropagation()}>
            <button aria-label="close" type="button" className="popup__clouse-button" onClick={() => {props.onClose()}}></button>                    
            <form className="popup__form popup__form_avatar" name={`${props.name}`} noValidate>
                <h2 className="popup__title">{`${props.title}`}</h2>
                {props.children}
                <button type="submit" className="popup__save-button">Сохранить</button>
            </form>
        </div>                
    </div>
    )
}

export default PopupWithForm;