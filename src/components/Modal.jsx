import React, { useState } from "react"; // Добавлен импорт useState
import "../styles/Modal.css";
import { SuccesModal } from "./SuccesModal";

export const Modal = ({ onClose }) => {
  const [isSubmitted, setIsSubmitted] = useState(false); // Состояние для отслеживания успешной отправки

  // Обработчик отправки формы
  const handleSubmit = (e) => {
    e.preventDefault(); // Предотвращаем перезагрузку страницы

    // Получаем значение номера телефона из input
    const phoneNumber = e.target.phone.value;

    // Сохраняем номер телефона в localStorage
    localStorage.setItem("savedPhoneNumber", phoneNumber);
    console.log("Номер телефона сохранен:", phoneNumber);

    // Устанавливаем состояние isSubmitted в true
    setIsSubmitted(true);

    // Закрываем основное модальное окно через 5 секунды
    setTimeout(() => {
      onClose();
    }, 5000); // Задержка 5 секунды
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        {!isSubmitted ? (
          <>
            <h3>Заказ обратного звонка</h3>
            <p>Введи номер телефона, на который необходимо перезвонить</p>
            {/* Форма заказа */}
            <form onSubmit={handleSubmit}>
              <input
                type="tel"
                id="phone"
                name="phone"
                placeholder="+7 9 ХХ ХХХ ХХ ХХ"
                // pattern="\+7\s?[0-9]{1}\s?[0-9]{3}\s?[0-9]{3}\s?[0-9]{2}\s?[0-9]{2}"
                required
              />
              <button type="submit">Отправить</button>
            </form>
          </>
        ) : (
          <SuccesModal closeModal={onClose} />
        )}

        {/* Кнопка закрытия модального окна */}
        <button className="close-button" onClick={onClose}>
          &times;
        </button>
      </div>
    </div>
  );
};
