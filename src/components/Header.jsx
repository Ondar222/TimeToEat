import React, { useState } from "react";
import { Modal } from "./Modal";

export const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Функция для открытия модального окна
  const openModal = () => {
    setIsModalOpen(true);
  };

  // Функция для закрытия модального окна
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <header>
      <div className="header__top-container">
        <div className="header-discount">
          <img src="/img/discountLogo.png" alt="" width={30} height={30} />
          <h3>Скидка 20% на первый заказ</h3>
        </div>

        {/* Кнопка "Заказать" с обработчиком клика */}
        <a href="#" className="order-button" onClick={openModal}>
          Заказать &#8594;
        </a>
      </div>

      <div className="header__bottom-container">
        <img src="/img/logo.png" alt="" width={140} height={44} />
        <ul>
          <li>Подбор рациона</li>
          <li>Программы питания</li>
          <li>О нас</li>
          <li>Доставка</li>
          <li>Акции</li>
          <li>FAQ</li>
          <li>Отзывы</li>
        </ul>
        <div className="header__contacts-container">
          <a href="#">Перезвоните мне</a>
          <h1>+7 988 500-1-700</h1>
        </div>
      </div>

      {/* Модальное окно */}
      {isModalOpen && <Modal onClose={closeModal} />}
    </header>
  );
};
